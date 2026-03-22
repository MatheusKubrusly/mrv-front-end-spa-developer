// Legacy script moved here to avoid duplication with scripts/main.js
// Original filename: /script.js
// Kept for reference; the active logic lives in scripts/main.js
// ===== FUNCIONALIDADE DE MENU HAMBÚRGUER =====
const hamburgerMenu = document.querySelector('#hamburger-menu');
const headerNav = document.querySelector('.header-nav');

// Toggle do menu hambúrguer
if (hamburgerMenu && headerNav) {
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    headerNav.classList.toggle('active');
  });

  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.header-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
      headerNav.classList.remove('active');
    });
  });
}

// ===== FUNCIONALIDADE DE TOGGLE DE TEMA =====
const themeToggle = document.querySelector('#theme-toggle');
const htmlElement = document.documentElement;

function updateThemeIcon(theme) {
  if (!themeToggle) return;
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark') {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

if (themeToggle) {
  initializeTheme();

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

// ===== FUNCIONALIDADE DE TOGGLE DE IDIOMA =====
const languageToggle = document.querySelector('#language-toggle');

function initializeLanguage() {
  const savedLanguage = localStorage.getItem('language') || 'pt-BR';
  document.documentElement.lang = savedLanguage;
}

if (languageToggle) {
  initializeLanguage();

  languageToggle.addEventListener('click', () => {
    const currentLanguage = document.documentElement.lang;
    const newLanguage = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
    document.documentElement.lang = newLanguage;
    localStorage.setItem('language', newLanguage);
    console.log('Idioma alterado para:', newLanguage);
  });
}
