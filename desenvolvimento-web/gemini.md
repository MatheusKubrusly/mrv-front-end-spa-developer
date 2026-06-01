# Gemini Context: Project Commit Standards

Este arquivo define as diretrizes para a criação de commits neste repositório.

## Estrutura da Mensagem de Commit

Use o padrão "Conventional Commits". A estrutura é a seguinte:

`<tipo>(<escopo>): <descrição>`

### Tipos Válidos:

*   **feat**: Uma nova funcionalidade (feature).
*   **fix**: Uma correção de bug.
*   **docs**: Mudanças apenas na documentação.
*   **style**: Mudanças que não afetam o significado do código (espaços, formatação, etc).
*   **refactor**: Uma mudança no código que não corrige um bug nem adiciona uma funcionalidade.
*   **test**: Adicionando testes ou corrigindo testes existentes.
*   **chore**: Mudanças no processo de build ou em ferramentas auxiliares e bibliotecas.

### Exemplo:

`feat(api): adicionar endpoint para autenticação de usuário`
