# Mapa da Documentacao do Projeto

## Objetivo
Este arquivo serve como índice mestre da documentação do portfólio. A ideia é reduzir ambiguidade, facilitar navegação entre os documentos e deixar claro qual arquivo responde a cada tipo de decisão.

## Bloco 1 - Fundacao do Projeto

### 01-product.md
Use quando a pergunta for:
- qual é a visão do produto?
- quais seções fazem parte da experiência?
- que tipo de portfólio estamos construindo?

### 02-stack.md
Use quando a pergunta for:
- quais tecnologias estão permitidas?
- quais decisões arquiteturais já estão estabelecidas?
- como a estrutura do projeto deve ser organizada?

### 03-design.md
Use quando a pergunta for:
- qual direção visual devemos seguir?
- como pensar componentes em JavaScript puro?
- como estruturar renderização, layout e padrões de UI?

### 04-workflow.md
Use quando a pergunta for:
- quais convenções de código devem ser respeitadas?
- como nomear arquivos, funções e variáveis?
- como o agente deve pensar o fluxo de desenvolvimento?

### 05-commits.md
Use quando a pergunta for:
- como escrever commits?
- qual idioma e formato seguir?

## Bloco 2 - Estrutura do Produto

### 06-product-overview.md
Define a visão consolidada do portfólio, seus limites, premissas e direção geral de produto.

### 07-information-architecture.md
Define a arquitetura de informação da landing page e o papel de cada seção.

### 08-ui-specification.md
Define princípios de interface, direção visual, componentes prioritários e responsividade esperada.

### 09-delivery-plan.md
Traduz a documentação estrutural em lotes de entrega e critérios de pronto.

## Bloco 3 - Documentos Complementares

### 10-content-strategy.md
Use para orientar escrita, narrativa, tom e curadoria de conteúdo do portfólio.

### 11-data-contracts.md
Use para orientar o formato dos JSONs e as expectativas dos renderizadores futuros.

### 12-feature-specifications.md
Use para detalhar o comportamento esperado de cada feature principal do projeto.

### 13-quality-gates.md
Use para revisar prontidão, consistência e qualidade antes de implementar ou entregar.

## Ordem Recomendada de Leitura

### Para entender o produto
1. 01-product.md
2. 06-product-overview.md
3. 07-information-architecture.md

### Para implementar com coerencia tecnica
1. 02-stack.md
2. 04-workflow.md
3. 11-data-contracts.md
4. 12-feature-specifications.md

### Para tomar decisoes de UI
1. 03-design.md
2. 08-ui-specification.md
3. 10-content-strategy.md

### Para preparar entrega
1. 09-delivery-plan.md
2. 13-quality-gates.md
3. 05-commits.md

## Regra Pratica
Se uma decisão gerar conflito entre dois documentos:
- produto e escopo vencem sobre detalhe cosmético
- stack e workflow vencem sobre improviso de implementação
- quality gates vencem sobre pressa de entrega

## Manutencao
- documentos de visão devem mudar pouco
- documentos de especificação podem evoluir por fase
- documentos de conteúdo devem ser revisados sempre que o portfólio ficar mais autoral