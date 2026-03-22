/**
 * Main JS - Inicializa a aplicação e orquestra renderizadores
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('App initializing...');

  // Inicializa i18n e outros utilitários já carregados como scripts globais
  // Esperamos que window.i18n esteja pronto (o módulo i18n.js inicializa-se automaticamente)

  // Tenta renderizar Now e News. Componentes expõem funções globais: renderNow e renderNews
  if (typeof window.renderNow === 'function') {
    window.renderNow();
  } else {
    console.warn('renderNow não encontrado');
  }

  if (typeof window.renderNews === 'function') {
    window.renderNews();
  } else {
    console.warn('renderNews não encontrado');
  }

  // Inicialização do toggle de idioma (se i18n disponível)
  initializeI18n();
  // Inicializa toggles de tema e navegação (hamburger)
  initializeThemeAndNavigation();
});

function initializeI18n() {
  if (!window.i18n) {
    console.warn('i18n não foi carregado');
    return;
  }

  const languageToggle = document.getElementById('language-toggle');
  const langIndicator = document.getElementById('lang-indicator');

  function updateLanguageIndicator() {
    if (!langIndicator) return;
    const currentLang = window.i18n.getLanguage();
    langIndicator.textContent = currentLang === 'ptBR' ? 'PT' : 'EN';
    // atualizar estado ARIA para leitores de tela
    if (languageToggle) {
      languageToggle.setAttribute('aria-pressed', String(currentLang === 'ptBR'));
      languageToggle.setAttribute('title', currentLang === 'ptBR' ? 'PT-BR' : 'EN');
    }
  }

  updateLanguageIndicator();

  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      window.i18n.toggleLanguage();
      updateLanguageIndicator();
      // re-renderizar seções que dependem de i18n
      if (typeof window.renderNow === 'function') window.renderNow();
      if (typeof window.renderNews === 'function') window.renderNews();
      if (typeof window.initializeCvLink === 'function') window.initializeCvLink();
      if (typeof window.initializeAttachedCv === 'function') window.initializeAttachedCv();
    });
  }
}

function initializeThemeAndNavigation() {
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeIndicator = document.getElementById('theme-indicator');

  function updateThemeIndicator() {
    if (!themeIndicator) return;
    const t = window.themeManager ? window.themeManager.getCurrentTheme() : document.documentElement.getAttribute('data-theme');
    themeIndicator.textContent = t === 'light' ? '☀️' : '🌙';
  }

  if (themeToggle && window.themeManager) {
    themeToggle.addEventListener('click', () => {
      // add transition class for smooth swap
      document.body.classList.add('theme-transitioning');
      window.themeManager.toggleTheme();
      updateThemeIndicator();
      // remove transition class after animation
      setTimeout(() => document.body.classList.remove('theme-transitioning'), 300);
    });
  }

  updateThemeIndicator();

  // Hamburger navigation
  const hamburger = document.querySelector('.hamburger');
  const primaryNav = document.getElementById('primary-navigation');

  if (hamburger && primaryNav) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      hamburger.classList.toggle('active');
      primaryNav.classList.toggle('active');
    });
  }
}
