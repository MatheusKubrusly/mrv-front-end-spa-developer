// Sistema de Internacionalização (i18n)
// Suporta PT-BR e EN

class I18n {
  constructor() {
    this.translations = {};
    this.currentLanguage = this.getStoredLanguage() || 'ptBR';
    this.availableLanguages = ['ptBR', 'en'];
    this.initialized = false;
  }

  /**
   * Inicializa o sistema i18n carregando as traduções do arquivo JSON
   * @returns {Promise<void>}
   */
  async init() {
    try {
      const response = await fetch('./data/i18n.json');
      if (!response.ok) {
        throw new Error(`Erro ao carregar i18n.json: ${response.statusText}`);
      }
      this.translations = await response.json();
      this.initialized = true;
      this.applyLanguage(this.currentLanguage);
    } catch (error) {
      console.error('Erro ao inicializar i18n:', error);
      // Fallback para PT-BR se houver erro
      this.currentLanguage = 'ptBR';
    }
  }

  /**
   * Obtém uma tradução usando notação de ponto (ex: 'header.mainTitle')
   * @param {string} key - Chave da tradução em formato de ponto
   * @returns {string} - Texto traduzido ou a chave se não encontrado
   */
  t(key) {
    if (!this.initialized) {
      console.warn('i18n ainda não foi inicializado');
      return key;
    }

    const keys = key.split('.');
    let value = this.translations[this.currentLanguage];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Retorna a chave se não encontrar a tradução
      }
    }

    return value || key;
  }

  /**
   * Retorna o idioma atual
   * @returns {string} - Código do idioma atual (ptBR ou en)
   */
  getLanguage() {
    return this.currentLanguage;
  }

  /**
   * Obtém idioma armazenado no localStorage
   * @returns {string|null} - Idioma armazenado ou null
   */
  getStoredLanguage() {
    return localStorage.getItem('language');
  }

  /**
   * Alterna o idioma entre PT-BR e EN
   * @returns {string} - Novo idioma ativo
   */
  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'ptBR' ? 'en' : 'ptBR';
    this.setLanguage(newLanguage);
    return newLanguage;
  }

  /**
   * Define o idioma ativo e atualiza a interface
   * @param {string} language - Código do idioma (ptBR ou en)
   */
  setLanguage(language) {
    if (!this.availableLanguages.includes(language)) {
      console.warn(`Idioma ${language} não disponível`);
      return;
    }

    this.currentLanguage = language;
    localStorage.setItem('language', language);
    this.applyLanguage(language);
  }

  /**
   * Aplica as traduções aos elementos da página
   * @param {string} language - Idioma a ser aplicado
   */
  applyLanguage(language) {
    // Dispara evento para que a página se atualize com as novas traduções
    document.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: language, i18n: this }
    }));

    // Atualiza todos os elementos com atributo data-i18n
    this.updatePageElements();
  }

  /**
   * Atualiza todos os elementos da página que possuem atributo data-i18n
   */
  updatePageElements() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const isAttribute = element.getAttribute('data-i18n-attr');

      if (isAttribute) {
        // Se for atributo (placeholder, title, etc)
        element.setAttribute(isAttribute, this.t(key));
      } else {
        // Se for conteúdo de texto
        element.textContent = this.t(key);
      }
    });
  }

  /**
   * Lista os idiomas disponíveis
   * @returns {string[]} - Array com os códigos dos idiomas disponíveis
   */
  getAvailableLanguages() {
    return [...this.availableLanguages];
  }
}

// Cria instância global do i18n
window.i18n = new I18n();

// Inicializa o i18n quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.i18n.init();
  });
} else {
  window.i18n.init();
}
