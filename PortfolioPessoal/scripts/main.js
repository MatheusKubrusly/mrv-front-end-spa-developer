/**
 * Main JS - Inicializa a aplicação
 * Importará módulos de utils, componentes, etc.
 */

// Importações (serão adicionadas conforme os módulos forem criados)
// import { setTheme } from './utils/darkMode.js';
// import { t } from './utils/i18n.js';
// import { renderHeader } from './components/header.js';

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
  console.log('App initializing...');
  
  // Inicializar componentes e funcionalidades
  // renderHeader();
  // loadTheme();
  // loadLanguage();
  
  // Inicializar i18n e configurar listeners
  initializeI18n();
});

/**
 * Inicializa o sistema de internacionalização
 * Configura o botão de toggle de idioma e atualiza o indicador
 */
function initializeI18n() {
  // Aguardar que o i18n esteja inicializado
  if (!window.i18n) {
    console.warn('i18n não foi carregado');
    return;
  }

  // Elemento do botão toggle
  const languageToggle = document.getElementById('language-toggle');
  const langIndicator = document.getElementById('lang-indicator');

  if (languageToggle) {
    // Atualizar indicador ao inicializar
    updateLanguageIndicator();

    // Listener para o clique no botão
    languageToggle.addEventListener('click', () => {
      const newLang = window.i18n.toggleLanguage();
      updateLanguageIndicator();
    });

    // Listener para mudanças de idioma (disparado pelo i18n)
    document.addEventListener('languageChanged', (e) => {
      updateLanguageIndicator();
      console.log('Idioma alterado para:', e.detail.language);
    });
  }
}

/**
 * Atualiza o indicador visual do idioma atual
 */
function updateLanguageIndicator() {
  const langIndicator = document.getElementById('lang-indicator');
  if (langIndicator) {
    const currentLang = window.i18n.getLanguage();
    langIndicator.textContent = currentLang === 'ptBR' ? 'PT' : 'EN';
  }
}
