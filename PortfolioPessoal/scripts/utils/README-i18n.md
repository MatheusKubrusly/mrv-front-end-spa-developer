# Sistema de Internacionalização (i18n)

Implementação de um sistema de internacionalização sem dependências para suportar Português Brasileiro (PT-BR) e Inglês (EN).

## 📁 Estrutura de Arquivos

```
├── data/
│   └── i18n.json                 # Arquivo com todas as traduções
├── scripts/
│   └── utils/
│       └── i18n.js              # Classe I18n e lógica de tradução
└── styles/
    └── atoms/
        └── _i18n.css            # Estilos do botão toggle de idioma
```

## 🚀 Como Funciona

### 1. Configuração Inicial

O sistema é carregado automaticamente quando a página é carregada:

```javascript
// Faz parte do index.html
<script src="scripts/utils/i18n.js"></script>
<script src="scripts/main.js"></script>
```

### 2. Usando Traduções no HTML

Para traduzir um elemento HTML, adicione o atributo `data-i18n` com a chave da tradução:

```html
<!-- Tradução de conteúdo de texto -->
<h1 data-i18n="hero.welcome">Bem-vindo</h1>

<!-- Tradução de atributos (placeholder, title, etc) -->
<input 
  type="text" 
  data-i18n="form.name" 
  data-i18n-attr="placeholder"
  placeholder="Nome"
/>
```

### 3. Usando Traduções em JavaScript

Para traduzir textos dinamicamente em JavaScript:

```javascript
// Obter uma tradução
const welcomeText = window.i18n.t('hero.welcome');
console.log(welcomeText); // "Bem-vindo" ou "Welcome"

// Obter o idioma atual
const currentLang = window.i18n.getLanguage(); // "ptBR" ou "en"

// Alternar idioma
window.i18n.toggleLanguage();

// Definir idioma específico
window.i18n.setLanguage('en');
```

## 🌐 Arquivo de Traduções

O arquivo `data/i18n.json` contém todas as traduções estruturadas por idioma:

```json
{
  "ptBR": {
    "nav": {
      "home": "Home",
      "news": "Notícias",
      "cv": "Currículo",
      "projects": "Projetos"
    },
    "hero": {
      "welcome": "Bem-vindo",
      "description": "Desenvolvedor web fullstack apaixonado por tecnologia"
    }
  },
  "en": {
    "nav": {
      "home": "Home",
      "news": "News",
      "cv": "Resume",
      "projects": "Projects"
    },
    "hero": {
      "welcome": "Welcome",
      "description": "Fullstack web developer passionate about technology"
    }
  }
}
```

## 🎯 Critérios de Aceitação Atendidos

✅ **Criar `scripts/utils/i18n.js`**
- Suporta PT-BR e EN
- Carrega strings de arquivo JSON (`data/i18n.json`)
- Função `t(key)` para traduzir
- Salva escolha em localStorage

✅ **Criar `data/i18n.json`**
- Navegação (Home, News, CV, Projects)
- Placeholders
- Textos do header

✅ **Criar botão toggle no header**
- Botão interativo com indicador de idioma (PT/EN)
- Localizado no header para fácil acesso

✅ **Aplicar `i18n.t()` em textos estáticos do HTML**
- Todos os textos principais do header e seções principais traduzidos
- Uso de `data-i18n` para vinculação automática

✅ **Critérios de Aceitação**
- ✅ Alternar idioma sem reload (JavaScript puro)
- ✅ Preferência salva em localStorage
- ✅ Todos os textos principais traduzidos
- ✅ Sistema extensível (fácil adicionar novos textos)

## 📡 Eventos Personalizados

O sistema dispara um evento `languageChanged` sempre que o idioma é alterado:

```javascript
document.addEventListener('languageChanged', (event) => {
  console.log('Novo idioma:', event.detail.language);
  // Realizar ações adicionais quando idioma mudar
});
```

## 🔄 Adicionando Novas Traduções

Para adicionar novas traduções:

1. Adicione a chave no arquivo `data/i18n.json`:
```json
{
  "ptBR": {
    "mySection": {
      "myKey": "Meu texto em português"
    }
  },
  "en": {
    "mySection": {
      "myKey": "My text in English"
    }
  }
}
```

2. Use no HTML:
```html
<p data-i18n="mySection.myKey">Meu texto em português</p>
```

3. Ou use em JavaScript:
```javascript
const text = window.i18n.t('mySection.myKey');
```

## 🎨 Personalização de Estilos

O botão de toggle de idioma usa a classe `.language-toggle`. Você pode personalizar seu estilo editando `styles/atoms/_i18n.css`.

## ⚡ Performance

- Carregamento assíncrono do JSON (sem bloqueio)
- Sem dependências externas
- Armazenamento em cache usando localStorage
- Atualizações DOM otimizadas com querySelectorAll

## 🐛 Troubleshooting

Se o idioma não mudar quando você clicar no botão:
1. Verifique se o arquivo `data/i18n.json` está no caminho correto
2. Abra o console do navegador (F12) e procure por erros
3. Verifique se os atributos `data-i18n` estão corretos no HTML

## 📝 Notas

- A linguagem padrão é PT-BR
- A preferência do usuário é armazenada em localStorage
- O sistema é extensível para adicionar novos idiomas facilmente
