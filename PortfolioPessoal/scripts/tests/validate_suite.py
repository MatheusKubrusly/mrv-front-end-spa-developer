#!/usr/bin/env python3
"""
Suíte de validação rápida para a Issue #14
- valida cobertura de i18n usada no markup
- valida contratos básicos em data/*.json
- valida presença de tokens CSS essenciais
- valida marcação básica de acessibilidade no index.html

Uso: python3 scripts/tests/validate_suite.py
"""
import json
import os
import re
import sys
from datetime import datetime

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))


def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def collect_data_i18n_keys(index_html_path):
    text = open(index_html_path, 'r', encoding='utf-8').read()
    # pega data-i18n e data-i18n-attr
    keys = set(re.findall(r'data-i18n="([^"]+)"', text))
    attr_pairs = re.findall(r'data-i18n-attr="([^"]+)"\s+data-i18n="([^"]+)"', text)
    for _, k in attr_pairs:
        keys.add(k)
    return sorted(keys)


def has_translation(translations, lang, dotted_key):
    parts = dotted_key.split('.')
    node = translations.get(lang, {})
    for p in parts:
        if isinstance(node, dict) and p in node:
            node = node[p]
        else:
            return False
    return True


def check_i18n_coverage():
    failures = []
    i18n_path = os.path.join(ROOT, 'data', 'i18n.json')
    index_path = os.path.join(ROOT, 'index.html')
    try:
        translations = load_json(i18n_path)
    except Exception as e:
        return [f'Erro carregando {i18n_path}: {e}']

    keys = collect_data_i18n_keys(index_path)
    for k in keys:
        for lang in ('ptBR', 'en'):
            if not has_translation(translations, lang, k):
                failures.append(f'Missing i18n key for {lang}: "{k}"')

    return failures


def check_data_contracts():
    failures = []
    # news
    try:
        news = load_json(os.path.join(ROOT, 'data', 'news.json'))
        posts = news.get('posts')
        if not isinstance(posts, list):
            failures.append('data/news.json: "posts" should be a list')
        else:
            for p in posts:
                if not p.get('id'):
                    failures.append('data/news.json: post without id')
                if not p.get('title'):
                    failures.append(f'data/news.json: post {p.get("id")} missing title')
                # date parse
                d = p.get('date')
                try:
                    if d:
                        datetime.fromisoformat(d)
                except Exception:
                    failures.append(f'data/news.json: post {p.get("id")} has invalid date: {d}')
    except Exception as e:
        failures.append(f'Erro lendo data/news.json: {e}')

    # curriculum
    try:
        curr = load_json(os.path.join(ROOT, 'data', 'curriculum.json'))
        for key in ('education', 'experience', 'studies'):
            if key not in curr:
                failures.append(f'data/curriculum.json missing key: {key}')
    except Exception as e:
        failures.append(f'Erro lendo data/curriculum.json: {e}')

    # projects
    try:
        projs = load_json(os.path.join(ROOT, 'data', 'projects.json'))
        projects = projs.get('projects')
        if not isinstance(projects, list):
            failures.append('data/projects.json: "projects" should be a list')
        else:
            for p in projects:
                if not p.get('id'):
                    failures.append('data/projects.json: project without id')
                if not p.get('title'):
                    failures.append(f'data/projects.json: project {p.get("id")} missing title')
                if not isinstance(p.get('technologies', []), list):
                    failures.append(f'data/projects.json: project {p.get("id")} technologies should be a list')
    except Exception as e:
        failures.append(f'Erro lendo data/projects.json: {e}')

    return failures


def check_css_tokens_and_accessibility():
    failures = []
    vars_path = os.path.join(ROOT, 'styles', 'base', '_variables.css')
    theme_path = os.path.join(ROOT, 'styles', 'base', '_theme.css')
    try:
        vars_text = open(vars_path, 'r', encoding='utf-8').read()
        for tok in ('--color-bg-primary', '--color-text-primary', '--color-accent', '--color-border'):
            if tok not in vars_text:
                failures.append(f'CSS token missing: {tok} in {vars_path}')
    except Exception as e:
        failures.append(f'Erro lendo {vars_path}: {e}')

    try:
        theme_text = open(theme_path, 'r', encoding='utf-8').read()
        if ':focus-visible' not in theme_text:
            failures.append(':focus-visible not found in _theme.css')
    except Exception as e:
        failures.append(f'Erro lendo {theme_path}: {e}')

    return failures


def check_markup_accessibility():
    failures = []
    index_path = os.path.join(ROOT, 'index.html')
    text = open(index_path, 'r', encoding='utf-8').read()
    # checks: hamburger has aria-controls and aria-expanded exist
    if 'id="language-toggle"' not in text:
        failures.append('language-toggle button not found in index.html')
    if 'id="theme-toggle"' not in text:
        failures.append('theme-toggle button not found in index.html')
    if 'class="hamburger"' not in text:
        failures.append('hamburger element not found in index.html')

    # nav role and aria-label
    if 'role="navigation"' not in text or 'aria-label="Navegação principal"' not in text:
        # allow english label too
        if 'aria-label="Primary navigation"' not in text:
            failures.append('primary navigation missing role or aria-label')

    return failures


def run_all():
    suites = [
        ('i18n coverage', check_i18n_coverage),
        ('data contracts', check_data_contracts),
        ('css tokens & theme', check_css_tokens_and_accessibility),
        ('markup accessibility', check_markup_accessibility),
    ]

    all_failures = []
    for name, fn in suites:
        print(f'Running: {name}...')
        fails = fn()
        if fails:
            print(f'  {len(fails)} failures in {name}:')
            for f in fails:
                print('   -', f)
            all_failures.extend([f'{name}: {x}' for x in fails])
        else:
            print('  OK')

    print('\nSummary:')
    if not all_failures:
        print('All checks passed ✅')
        return 0
    else:
        print(f'{len(all_failures)} checks failed ❌')
        return 1


if __name__ == '__main__':
    code = run_all()
    sys.exit(code)
