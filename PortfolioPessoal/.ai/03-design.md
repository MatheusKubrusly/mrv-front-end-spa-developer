# 🎨 Design System e UI/UX

## Implementação Técnica
* **Stack:** HTML5 (semântico), CSS3 puro (com variáveis CSS para tema dark/light), JavaScript ES6+ (para interatividade e gerenciamento dinâmico).
* **Tema Dinâmico:** Alternância Dark/Light Mode implementada via/CSS variables e JavaScript sem dependências externas.

## Identidade Visual
* **Paleta de Cores (Tema Dark Sugerido):**
  * Fundo Principal: `#0A0A0A` (Quase preto) - CSS var: `--color-bg-primary`
  * Fundo Secundário/Cards: `#1A1A1A` (Cinza muito escuro) - CSS var: `--color-bg-secondary`
  * Texto Principal: `#EAEAEA` (Branco suave) - CSS var: `--color-text-primary`
  * Texto Secundário: `#A1A1A1` (Cinza claro) - CSS var: `--color-text-secondary`
  * Cor de Destaque (Accent): `#007BFF` (Azul vibrante) - CSS var: `--color-accent`
* **Tipografia:** 'Inter' para todo o texto (títulos e corpo) - pela sua clareza e versatilidade. Usar pesos diferentes (ex: `Bold` para títulos, `Regular` para parágrafos). Importar via CSS3 `@import` ou `@font-face`.

## Arquitetura de Componentes (JavaScript Puro)

⚠️ **Importante:** Com JavaScript puro (sem React/Vue), "componentes" são **padrões organizacionais**, não abstrações de linguagem. Abaixo está a abordagem realista:

### 1️⃣ Componentes Visuais (Classes CSS Reutilizáveis)
**Estes SÃO realmente componentizáveis** — são apenas estilos:

*   **`card`** - Container genérico com padding, sombra e hover state.
    *   Modificadores: `.card--minimal`, `.card--elevated`, `.card--highlighted`
*   **`btn`** - Botão com estados hover, focus e active.
    *   Modificadores: `.btn--primary`, `.btn--secondary`, `.btn--ghost`
*   **`tag`** / **`badge`** - Etiquetas para categorias.
    *   Ex: `<span class="tag tag--tech">JavaScript</span>`
*   **`link`** - Link estilizado com cor accent.
    *   Inclui `:hover`, `:focus` e `text-decoration-skip-ink: auto`

### 2️⃣ Blocos HTML (Templates Estáticos + Dinâmicos)
**Padrões de markup reutilizáveis** — renderizados por funções JS:

*   **`NewsCard`** (template HTML):
    ```html
    <article class="news-card card card--elevated">
      <h3 class="news-card__title">Título</h3>
      <time class="news-card__date">2024-08-15</time>
      <div class="news-card__content">Conteúdo...</div>
      <a href="#" class="link">Leia mais</a>
    </article>
    ```
    *   Renderizado por `renderNewsCard(dataObject)` em `scripts/components/newsCardRenderer.js`

*   **`TimelineItem`** (template HTML):
    ```html
    <div class="timeline-item">
      <div class="timeline-item__marker"></div>
      <time class="timeline-item__date">2023-01-15</time>
      <h4 class="timeline-item__title">Evento</h4>
      <p class="timeline-item__description">Descrição...</p>
    </div>
    ```

*   **`ProjectCard`** e **`CVSection`**: Mesmo padrão — template HTML + função JS simples que insere dados.

### 3️⃣ Layouts (Grid Base CSS)
São apenas padrões CSS, não JavaScript:

*   **`StickyNav`** - Sidebar `position: sticky` em desktop.
    *   Media query para mobile: position static, exibe como menu hamburger (JS manipula classes).
*   **`TwoColumnLayout`** - CSS Grid ou Flex: 2 colunas desktop, 1 mobile.
*   **`GridLayout`** - CSS Grid: 3 colunas desktop, 2 tablet, 1 mobile.

### 4️⃣ Renderização Dinâmica (Funções Simples)
**O JavaScript manipula dados e insere HTML**, sem abstrações complexas:

**Exemplo: Renderizar um `NewsCard`**
```javascript
// scripts/components/newsCardRenderer.js
function renderNewsCard(post) {
  return `
    <article class="news-card card card--elevated">
      <h3 class="news-card__title">${post.title}</h3>
      <time class="news-card__date">${formatDate(post.date)}</time>
      <div class="news-card__content">${post.content}</div>
      <a href="${post.link}" class="link">Leia mais →</a>
    </article>
  `;
}

// Uso: inserir no DOM
const newsContainer = document.querySelector('#news-feed');
newsContainer.innerHTML = posts.map(renderNewsCard).join('');
```

**Exemplo: Renderizar Timeline com dados JSON**
```javascript
// scripts/components/timelineRenderer.js
async function loadAndRenderTimeline(jsonFilePath) {
  const data = await fetch(jsonFilePath).then(r => r.json());
  
  const timelineHtml = data.map(item => `
    <div class="timeline-item">
      <div class="timeline-item__marker"></div>
      <time class="timeline-item__date">${item.date}</time>
      <h4 class="timeline-item__title">${item.title}</h4>
      <p class="timeline-item__description">${item.description}</p>
    </div>
  `).join('');
  
  document.querySelector('#timeline-container').innerHTML = timelineHtml;
}
```

### 5️⃣ Gerenciamento de Estado (Simples)
**Sem Vuex/Redux**, usamos objetos e event listeners básicos:

```javascript
// scripts/state.js
const appState = {
  theme: localStorage.getItem('theme') || 'dark',
  language: localStorage.getItem('language') || 'pt-br',
  newsFilter: 'all',
  
  setTheme(newTheme) {
    this.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    // Dispara evento para componentes escutarem
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
  }
};

// Componentes escutam mudanças
window.addEventListener('themeChanged', (e) => {
  console.log('Tema mudou para:', e.detail);
  // Re-renderizar se necessário
});
```

### 6️⃣ Páginas (Composição)
As páginas são **principalmente HTML estático** + **chamadas de funções JS**:

**Exemplo: Home Page**
```html
<!-- index.html -->
<body data-theme="dark">
  <header><!-- navegação estática --></header>
  
  <main>
    <section id="hero"><!-- Hero estático --></section>
    <section id="now-status"><!-- Renderizado dinamicamente por JS --></section>
    <section id="timeline"><!-- Renderizado por timelineRenderer.js --></section>
  </main>
  
  <script type="module" src="scripts/main.js"></script>
</body>
```

```javascript
// scripts/main.js (Orquestração)
import { initDarkMode } from './utils/darkMode.js';
import { initI18n } from './utils/i18n.js';
import { loadAndRenderTimeline } from './components/timelineRenderer.js';

// Inicializa features globais
initDarkMode();
initI18n();

// Carrega dados específicos da página
if (document.querySelector('#timeline')) {
  loadAndRenderTimeline('data/career-timeline.json');
}
```

### Estrutura de Arquivos (Espelho)
```
styles/
  ├── base/
  │   ├── _reset.css           (resets CSS)
  │   ├── _variables.css       (cores, fonte, tamanhos)
  │   └── _theme.css           (dark/light mode)
  ├── atoms/
  │   ├── _card.css
  │   ├── _button.css
  │   ├── _tag.css
  │   └── _link.css
  ├── blocks/
  │   ├── _news-card.css       (estende .card)
  │   ├── _timeline-item.css   (timeline base)
  │   └── _project-card.css
  ├── layouts/
  │   ├── _sticky-nav.css
  │   ├── _two-column.css
  │   └── _grid.css
  └── main.css                 (importa tudo em ordem)

scripts/
  ├── utils/
  │   ├── darkMode.js          (toggle tema, salva em localStorage)
  │   ├── i18n.js              (i18n básico com JSON)
  │   └── fetchData.js         (wrapper para fetch, trata erros)
  ├── components/
  │   ├── newsCardRenderer.js  (retorna HTML string)
  │   ├── timelineRenderer.js  (fetch + render)
  │   └── projectRenderer.js
  ├── state.js                 (estado global simples com CustomEvent)
  └── main.js                  (carrega módulos, orquestra page)

data/
  ├── news.json
  ├── curriculum.json
  └── projects.json
```

### Características Realistas (JS Puro)
✅ **O que é SIMPLES:**
- CSS componentizado (fácil)
- Renderização de dados JSON para HTML (fácil)
- Alternância de tema dark/light (fácil)
- i18n básico com JSON (fácil)
- Animações CSS (fácil)

❌ **O que é MANUAL/COMPLEXO:**
- Re-renderizar quando estado muda (precisa gerenciar DOM manualmente)
- Filtrar/buscar sem re-fazer tudo (precisa manipular DOM seletivamente)
- Sincronizar múltiplas partes (sem bibliotecas de estado)
- Grandes mudanças de UI (sem virtual DOM, fica lento)

## Interações e Animações
* **Filtros Dinâmicos:** Transições suaves ao filtrar a visualização de projetos por categoria (ex: Front-end, Back-end) - implementadas com CSS3 `transition` e JavaScript ES6+ para lógica de filtro.
* **Micro-interações:** Hover states interativos e bem definidos em absolutamente todos os elementos clicáveis (botões, links, cards) via CSS3 `:hover` pseudoclasses. O `NewsCard`, por exemplo, pode ter uma leve animação de "escala" ao passar o mouse via `transform` e `transition`.
* **Scroll:** Animações de entrada sutis (fade-up ou reveal) ao rolar a página para novas seções - implementadas com CSS3 `@keyframes` e JavaScript para detecção de scroll.

## Responsividade
* **Mobile-First Rigoroso:** O design deve ser pensado primeiramente para celulares.
* O layout de duas colunas da seção acadêmica deve colapsar para uma única coluna, com o menu de navegação no topo.