# 🛠️ Arquitetura e Stack Tecnológico

## Stack Sugerida (Fase 1)
*   **Linguagem de Marcação:** HTML5 - A base estrutural de todas as páginas.
*   **Estilização:** CSS3 - Para estilização, layout e design responsivo.
*   **Linguagem de Programação:** JavaScript (ES6+) - Para interatividade, manipulação do DOM e lógica do lado do cliente.

## Justificativa
O foco inicial exclusivo em HTML, CSS e JavaScript puros tem como objetivo solidificar a compreensão dos fundamentos do desenvolvimento web. Esta base é crucial antes de adotar frameworks e bibliotecas, permitindo um entendimento mais profundo de como eles funcionam internamente. Em uma fase futura, após ganhar segurança com essas tecnologias, poderemos introduzir frameworks como React ou Vue.js para escalar o projeto.

## Tratamento de Dados Dinâmicos
*   **News Feed e Currículo:** Para o feed de notícias e as informações do currículo, a abordagem será o uso de arquivos `JSON` estáticos no repositório (ex: `data/news.json`, `data/curriculum.json`). O JavaScript será responsável por buscar (`fetch`) os dados desses arquivos e renderizar dinamicamente o conteúdo nas páginas HTML correspondentes.

## Regras de Arquitetura
1.  **Estrutura de Arquivos Clara:**
    *   `index.html`: Arquivo principal da aplicação.
    *   `styles/`: Diretório para todos os arquivos CSS. Podemos ter um `main.css` global e arquivos específicos por seção (ex: `home.css`, `curriculum.css`).
    *   `scripts/`: Diretório para os arquivos JavaScript. Teremos um `main.js` para a lógica geral e scripts modulares (ex: `news-feed.js`).
    *   `data/`: Diretório para os arquivos JSON com os dados.
    *   `assets/`: Para imagens, ícones e outros recursos estáticos.
2.  **Separação de Interesses:**
    *   **HTML (Conteúdo e Estrutura):** Manter o HTML o mais limpo e semântico possível.
    *   **CSS (Apresentação):** Toda a estilização deve ser feita em arquivos CSS externos.
    *   **JavaScript (Comportamento):** Toda a interatividade e manipulação de conteúdo devem ser feitas em arquivos JavaScript externos.
3.  **Modularidade em JavaScript:**
    *   Usar Módulos ES6 (`import`/`export`) para organizar o código JavaScript em pedaços menores e reutilizáveis, mesmo sem um framework.
