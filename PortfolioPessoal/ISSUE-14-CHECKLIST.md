# Checklist de Validação — Issue #14 (Polimento Final)

Status: Em revisão — não fechar a issue até resolver o backlog listado.

## Resumo rápido
Objetivo: validar responsividade, acessibilidade básica, consistência visual, aderência a i18n e contratos de dados, coerência editorial.

## Checklist de validação (Quality Gates)
- [x] Gate 1 — Coerência com a visão do produto: hero, projetos e trajetória reforçam identidade editorial
- [x] Gate 2 — Coerência técnica: HTML semântico e JS modular verificados
- [x] Gate 3 — Coerência visual: tokens `--color-*` presentes; verificado uso geral
- [x] Gate 4 — Coerência de conteúdo: textos principais não genéricos (parcial — ver backlog)
- [x] Gate 5 — Qualidade de dados: `data/*.json` seguem contratos básicos
- [x] Gate 6 — Acessibilidade básica: `:focus-visible` presente, `aria-label` em controles principais, navegação por teclado testada
- [x] Gate 7 — Responsividade: header, hero, cards e navegação mobile testados em breakpoints principais
- [x] Gate 8 — Prontidão para evolução: documentação consultada e contratos respeitados

## Resultados da suíte automatizada
Arquivo de validação: `scripts/tests/validate_suite.py`
- i18n coverage: ❌ 16 falhas
- data contracts: ✅ OK
- css tokens & theme: ✅ OK
- markup accessibility: ✅ OK

Falhas i18n encontradas (cada chave ausente em `ptBR` e `en`):
- `cv_admin.attach_button`
- `cv_admin.clear_button`
- `cv_admin.description`
- `cv_admin.file_label`
- `cv_admin.helper`
- `cv_admin.link_label`
- `cv_admin.summary`
- `hero.cta_linkedin`

## Arquivos alterados durante a rodada
- `data/i18n.json` (preenchimento de chaves usadas no markup)
- `scripts/main.js` (ligações: theme toggle, hamburger, aria-expanded)
- `scripts/tests/validate_suite.py` (suíte de validação automática adicionada)

## Backlog residual (priorizado)
1. Alta: **Corrigir as chaves i18n faltantes** — adicionar as chaves listadas acima em `ptBR` e `en` ou remover/ajustar uso se obsoletas. (bloqueia validação automatizada)
2. Média: **Migrar aliases CSS legados** para tokens canônicos (`--bg-primary` → `--color-bg-primary`, etc.) para consistência do design system.
3. Média-baixa: **Padronizar conteúdo dos JSONs** — revisar campos que contenham textos em idioma diferente do namespace (`ptBR`).
4. Baixa: **Melhorar ARIA no language toggle** (`aria-pressed` ou status mais explícito) e testes cross-browser.

## Próximos passos recomendados
- Resolver o item 1 (i18n faltante). Sugestão: adicionar entradas provisórias e abrir PR para revisão editorial.
- Após PR, executar `python3 scripts/tests/validate_suite.py` até que não haja falhas.
- Criar issues separadas para os itens 2 e 3 e linká-las a esta Issue #14.

## Observação final
A issue não deve ser fechada até que as chaves i18n listadas sejam tratadas e a suíte de validação retorne OK. Se desejar, posso aplicar as alterações de i18n provisórias agora e gerar um PR para sua revisão.
