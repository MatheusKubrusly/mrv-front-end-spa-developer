// Sistema de Internacionalização (i18n)
// Suporta PT-BR e EN

class I18n {
  constructor() {
    this.translations = {};
    this.availableLanguages = ['ptBR', 'en']; //as línguas disponíveis são inglês e português
    this.currentLanguage = this.normalizeStoredLanguage(this.getStoredLanguage()) || 'ptBR';
    this.initialized = false;
  }

  /**
   * Normaliza valores antigos armazenados no localStorage (ex: 'pt-BR', 'en-US')
   * para os códigos usados internamente ('ptBR', 'en').
   */
  normalizeStoredLanguage(value) {
    if (!value) return null;
    const v = value.toLowerCase();
    if (v === 'pt-br' || v === 'pt' || v === 'ptbr') return 'ptBR';
    if (v === 'en-us' || v === 'en' || v === 'en-us' || v === 'en') return 'en';
    // se já estiver no formato interno, retorne como está
    if (this.availableLanguages.includes(value)) return value;
    return null;
  }

  /**
   * Inicializa o sistema i18n carregando as traduções do arquivo JSON
   * @returns {Promise<void>}
   */
  async init() {
    try {
      const response = await fetch('./data/i18n.json'); 
      if (!response.ok) { // Se a busca pelo arquivo .json falhar...
        throw new Error(`Erro ao carregar i18n.json: ${response.statusText}`);
      }
      this.translations = await response.json();
      this.initialized = true;
      // garante atributo lang corretamente para acessibilidade
      document.documentElement.lang = this.currentLanguage === 'ptBR' ? 'pt-BR' : 'en';
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
    return localStorage.getItem('language'); // retorna o valor salvo (pode ser 'ptBR', 'en' ou formatos antigos)
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
    if (!this.availableLanguages.includes(language)) { // Este if verifica se o valor da variável language já está presente dentro do array de availableLanguages. Se não estiver, significa que o idioma passado como argumento não é suportado pelo sistema, e então é exibida uma mensagem de aviso no console e a função é encerrada sem fazer nenhuma alteração.
      console.warn(`Idioma ${language} não disponível`);
      return;
    }

    this.currentLanguage = language;
    // Salva o código interno no localStorage
    localStorage.setItem('language', language);
    // Atualiza atributo lang do documento para fins de acessibilidade
    document.documentElement.lang = language === 'ptBR' ? 'pt-BR' : 'en';
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
} else { // Esta estrutura condicional garante que, independentemente se o script foi carregado antes ou depois do DOM ter sido totalmente processado, a função apenas será executado após todos os elementos html já terem sido carregados, evitando erros de referência a elementos que ainda não existem no momento da execução do script.
  window.i18n.init();
}
