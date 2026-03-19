# 🤖 Fluxo de Trabalho e Padrões de Código (Diretrizes para a IA)

## Convenções de Idioma
1. **Código-fonte em Inglês:** Nomes de variáveis, funções, arquivos, pastas, interfaces e tipagens devem estar sempre em Inglês.
2. **Conteúdo em Português/Inglês:** O texto visível para o usuário final virá do sistema de i18n, mas o raciocínio padrão de conteúdo será o Português do Brasil.

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