# Quality Gates do Projeto

## Objetivo
Criar um conjunto simples de critérios para avaliar se a próxima implementação está pronta para avançar sem gerar dívida desnecessária.

## Gate 1 - Coerencia com a Visao do Produto
- a implementação reforça a identidade de portfólio profissional e editorial
- a experiência não se reduz a um currículo estático
- hero, projetos e trajetória contam uma história coerente

## Gate 2 - Coerencia Tecnica
- HTML permanece semântico
- CSS permanece organizado conforme a arquitetura definida
- JavaScript permanece modular e simples
- não há introdução indevida de frameworks ou dependências desnecessárias

## Gate 3 - Coerencia Visual
- tipografia e espaçamento seguem uma mesma lógica
- o tema está consistente em todos os blocos
- componentes não parecem ter vindo de sistemas diferentes

## Gate 4 - Coerencia de Conteudo
- textos não estão genéricos
- títulos, resumos e descrições possuem propósito
- projetos e experiências têm contexto suficiente para leitura rápida

## Gate 5 - Qualidade de Dados
- JSONs seguem contratos claros
- não há campos ambíguos ou redundantes
- conteúdo real substitui placeholders sempre que possível

## Gate 6 - Acessibilidade Basica
- foco visível
- contraste aceitável
- navegação funcional por teclado
- controles importantes não dependem apenas de hover

## Gate 7 - Responsividade
- header continua utilizável em mobile
- cards mantêm leitura confortável em telas pequenas
- não há overflow visual inesperado nas seções principais

## Gate 8 - Prontidao para Evolucao
- novas seções podem ser adicionadas sem refatorar toda a base
- renderizadores futuros têm contratos de dados previsíveis
- a documentação continua válida depois da implementação

## Checklist Curto Antes de Implementar
- o documento de visão da fase foi consultado
- a arquitetura de informação foi respeitada
- a especificação de UI foi traduzida em markup claro
- os dados necessários já possuem contrato definido
- o lote atual de entrega tem um critério explícito de pronto

## Checklist Curto Antes de Encerrar a Fase
- header, hero e seções principais estão alinhados entre si
- tema e idioma funcionam como experiência, não só como utilitário técnico
- conteúdo principal já comunica valor real do autor
- backlog residual da fase está explícito e priorizado