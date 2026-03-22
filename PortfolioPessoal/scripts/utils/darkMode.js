/**
 * Dark Mode / Light Mode Theme Switcher
 * Gerencia a alternância entre temas claro e escuro com persistência em localStorage
 */

class ThemeManager {
  constructor() {
    this.STORAGE_KEY = 'theme-preference';
    this.THEME_ATTRIBUTE = 'data-theme';
    this.LIGHT_THEME = 'light';
    this.DARK_THEME = 'dark';
    
    this.init();
  }

  /**
   * Inicializa o gerenciador de tema
   * Detecta preferência salva ou preferência do sistema
   */
  init() {
    const savedTheme = this.getSavedTheme();  // valor de retorno = null
    const preferredTheme = savedTheme || this.getSystemPreference();
    
    this.setTheme(preferredTheme);
  }

  /**
   * Obtém o tema salvo no localStorage
   * @returns {string|null} Tema salvo ou null
   */
  getSavedTheme() {
    // Compatibilidade com chave antiga 'theme' e chave atual definida em STORAGE_KEY
    return localStorage.getItem(this.STORAGE_KEY) || localStorage.getItem('theme');
  }

  /**
   * Obtém a preferência de tema do sistema
   * @returns {string} 'dark' se o sistema preferir dark mode, senão 'light'
   */
  getSystemPreference() {
    //console.log(window.matchMedia);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //console.log(window.matchMedia('(prefers-color-scheme: dark)'));
      return this.DARK_THEME;
    }
    return this.LIGHT_THEME; // se o método matchMedia não for suportado pelo navegador que estivermos utilizando, aqui estamos definindo que por padrão o tema será o ligth
  }

  /**
   * Define o tema da aplicação
   * @param {string} newTheme - 'light' ou 'dark'
   */
  setTheme(newTheme) {
    if (newTheme === this.DARK_THEME || newTheme === this.LIGHT_THEME) {
      const htmlElement = document.documentElement;
      
      // Alterna o atributo data-theme
      htmlElement.setAttribute(this.THEME_ATTRIBUTE, newTheme);
      
      // Salva a preferência no localStorage
      localStorage.setItem(this.STORAGE_KEY, newTheme);
      
      // Dispara evento customizado para que outros scripts possam reagir
      this.dispatchThemeChangeEvent(newTheme);
    }
  }

  /**
   * Alterna entre light e dark mode
   */
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute(this.THEME_ATTRIBUTE);
    const newTheme = currentTheme === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
    
    this.setTheme(newTheme);
  }

  /**
   * Obtém o tema atual
   * @returns {string} Tema atual ('light' ou 'dark')
   */
  getCurrentTheme() {
    return document.documentElement.getAttribute(this.THEME_ATTRIBUTE) || this.LIGHT_THEME;
  }

  /**
   * Dispara um evento customizado quando o tema muda
   * @param {string} newTheme - Novo tema
   */
  dispatchThemeChangeEvent(newTheme) {
    const event = new CustomEvent('themeChanged', {
      detail: { theme: newTheme },
      bubbles: true,
      cancelable: true
    });
    
    document.documentElement.dispatchEvent(event);
  }
}

// Instancia o gerenciador de tema globalmente
const themeManager = new ThemeManager();
// Expor como variável global para integração estrutural (scripts/main.js)
window.themeManager = themeManager;
