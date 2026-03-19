// 1. Selecionar o elemento da foto
const profilePhoto = document.querySelector('#main_photo'); //aqui estamos buscando pelo elemento html que contém o seletor ID "#main_photo" existente dentro do arquivo css

//console.log(typeof profilePhoto);

// 2. Adicionar um "ouvinte" de evento de clique
profilePhoto.addEventListener('click', () => {
  // 3. Reagir ao clique: exibir um alerta
  alert('Olá! Esta é a minha foto de perfil.');
});

// ===== Dark/Light Mode Toggle =====

/**
 * Atualiza o ícone do botão de tema baseado no tema atual
 */
function updateThemeIcon() {
  const themeToggleBtn = document.querySelector('#theme-toggle');
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

// Seleciona o botão de alternância de tema
const themeToggleBtn = document.querySelector('#theme-toggle');

// Adiciona o event listener ao botão
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    themeManager.toggleTheme();
    updateThemeIcon();
  });
}

// Ouve o evento customizado de mudança de tema
document.addEventListener('themeChanged', (event) => {
  console.log('Tema alterado para:', event.detail.theme);
  updateThemeIcon();
});

// Inicializa o ícone correto ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  updateThemeIcon();
});

// ===== FUNCIONALIDADE DE MENU HAMBÚRGUER =====
const hamburgerMenu = document.querySelector('#hamburger-menu');
const headerNav = document.querySelector('.header-nav');

// Toggle do menu hambúrguer
if (hamburgerMenu) {
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

if (themeToggle) {
  // Verificar tema salvo no localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark') {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

// ===== FUNCIONALIDADE DE TOGGLE DE IDIOMA =====
const languageToggle = document.querySelector('#language-toggle');

if (languageToggle) {
  // Verificar idioma salvo no localStorage
  const savedLanguage = localStorage.getItem('language') || 'pt-BR';
  document.documentElement.lang = savedLanguage;

  languageToggle.addEventListener('click', () => {
    const currentLanguage = document.documentElement.lang;
    const newLanguage = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
    document.documentElement.lang = newLanguage;
    localStorage.setItem('language', newLanguage);
    updateLanguageIcon(newLanguage);
  });
}

function updateLanguageIcon(language) {
  const icon = languageToggle.querySelector('i');
  // Você pode adicionar lógica visual aqui se desejar diferenças visuais entre idiomas
  console.log('Idioma alterado para:', language);
}
