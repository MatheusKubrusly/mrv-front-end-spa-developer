# 🤖 Fluxo de Trabalho e Padrões de Código (Diretrizes para a IA)

## Stack Tecnológico
**Tecnologias:** HTML5 | CSS3 | JavaScript ES6+ | JSON
- Nenhuma dependência externa de frameworks (React, Vue, etc.), pelo menos nesta versão incial do projeto.
- Arquivos JSON para gerencia de dados estáticos (news feed, currículo, projetos).
- Módulos ES6 (`import`/`export`) para organização de código.

## Convenções de Idioma
1. **Código-fonte em Inglês:** Nomes de variáveis, funções, arquivos, pastas, interfaces e tipagens devem estar sempre em Inglês.
2. **Conteúdo em Português/Inglês:** O texto visível para o usuário final virá do sistema de i18n, mas o raciocínio padrão de conteúdo será o Português do Brasil.

## Arquitetura (JavaScript Puro, sem Frameworks)
**Nota:** Componentes aqui são **padrões CSS** + **funções JS simples**, não abstrações de linguagem como em React/Vue.

1.  **Padrões Visuais (CSS Classes):**
    *   Crie classes CSS reutilizáveis: `.card`, `.button`, `.tag`, `.link` com modificadores (`.card--elevated`, `.btn--primary`).
    *   Exemplo: `<div class="card card--minimal"></div>`

2.  **Renderização Dinâmica (Funções JS):**
    *   Cada "componente" é uma função que retorna HTML string e a insere no DOM via `innerHTML`.
    *   Exemplo: `renderNewsCard(data)`, `renderTimelineItem(data)`.
    *   Armazene essas funções em `scripts/components/`.

3.  **Estrutura de Arquivos:**
    *   **`styles/base/`**: Reset, variáveis CSS, tema
    *   **`styles/atoms/`**: Classes primitivas (card, button, tag, link)
    *   **`styles/blocks/`**: Estilos para compostos (news-card, timeline-item, project-card)
    *   **`styles/layouts/`**: Padrões de grid/flex (sticky-nav, two-column, grid-responsive)
    *   **`scripts/components/`**: Funções de renderização (newsCardRenderer.js, timelineRenderer.js)
    *   **`scripts/utils/`**: Utilitários (darkMode.js, i18n.js, fetchData.js)
    *   **`data/`**: Arquivos JSON (news.json, curriculum.json, projects.json)

## Estruturas de Dados (JSON)

1.  **`data/news.json` — News Feed:**
    ```json
    [
      {
        "id": "post-1",
        "title": "Título da Notícia",
        "date": "2024-08-15",
        "category": "learning",
        "content": "Conteúdo do post em markdown ou texto simples.",
        "link": "https://exemplo.com"
      }
    ]
    ```

2.  **`data/curriculum.json` — Dados do Currículo:**
    ```json
    {
      "education": [
        {"id": "edu-1", "institution": "Universidade X", "degree": "Bacharelado", "field": "Ciência da Computação", "startDate": "2020", "endDate": "2024"}
      ],
      "experience": [
        {"id": "exp-1", "company": "Empresa Y", "position": "Dev Frontend", "startDate": "2023-01", "endDate": "present", "description": "..."}
      ],
      "hobbies": ["Leitura", "Coding"],
      "studies": [{"id": "study-1", "topic": "React", "status": "in-progress"}]
    }
    ```

3.  **`data/projects.json` — Projetos e Estudos de Caso:**
    ```json
    [
      {
        "id": "proj-1",
        "title": "Nome do Projeto",
        "problem": "Descrição do problema",
        "solution": "Como foi resolvido",
        "technologies": ["HTML5", "CSS3", "JavaScript"],
        "results": "Resultados/Aprendizados",
        "link": "https://github.com/..."
      }
    ]
    ```

## Boas Práticas de Desenvolvimento
1. **Código Limpo e Semântico:**
   * Priorize a legibilidade. Funções devem fazer apenas uma coisa.
   * Use HTML semântico (`<main>`, `<section>`, `<article>`, `<nav>`).
2. **Acessibilidade (a11y):**
   * Inclua `aria-labels` em botões que contêm apenas ícones.
   * Garanta que a navegação por teclado (Tab) siga uma ordem lógica e que os elementos focados tenham um `outline` visível.
   * Mantenha contraste adequado de cores.
3. **Dependências:**
   * Evite adicionar bibliotecas de terceiros (npm packages) desnecessárias se o problema puder ser resolvido facilmente com CSS nativo ou funções puras do JavaScript.
4. **Comentários:**
   * Comente apenas o "porquê" de lógicas complexas, não o "o que" (o código deve se explicar).
   * Tente, em um primeiro momento, explicar de forma resumida o raciocínio breve por trás das construções lógicas para que eu possa ir aprendendo um pouco mais da sintaxe das linguagens conforme vou desenvolvendo o projeto.

## Fluxo de Desenvolvimento Típico
1. **Estática HTML + CSS**: Desenhe layout base em `index.html` com classes semânticas.
2. **Estilização**: Preencha `styles/` com atoms → blocks → layouts.
3. **Dados**: Crie JSONs em `data/` com conteúdo.
4. **Renderização**: Escreva funções em `scripts/components/` que buscam JSON e inserem HTML.
5. **Interatividade**: Adicione event listeners em `scripts/` (tema, i18n, filtros, etc.).
6. **Animações**: Use CSS `@keyframes` e `transition` para suavidade.

## Referência Cruzada
* **Design detalhado?** Veja [03-design.md](03-design.md) — lá está a arquitetura de componentes JS puro explicada com exemplos.
* **Stack técnico?** Veja [02-stack.md](02-stack.md) — justificativa e estrutura de pastas.
* **Visão do produto?** Veja [01-product.md](01-product.md) — requisitos funcionais e visão.