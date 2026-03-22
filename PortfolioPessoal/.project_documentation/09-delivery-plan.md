# Plano de Entrega

## Objetivo
Organizar a próxima implementação em lotes pequenos, coerentes e rastreáveis.

## Estratégia Geral
Executar a implementação em quatro frentes:

1. Consolidação estrutural
2. Evolução da interface
3. Renderização de conteúdo dinâmico
4. Polimento e consistência

## Lote 1 - Consolidação Estrutural
Meta:
- alinhar HTML, CSS e JavaScript com o modelo documental consolidado

Entregas esperadas:
- revisar estrutura do header e hero
- consolidar tokens de design system
- eliminar dependência de convenções antigas de estilo
- preparar placeholders corretos para renderização dinâmica

Risco principal:
- retrabalho visual se a base de tokens continuar inconsistente

## Lote 2 - Interações Globais
Meta:
- concluir os mecanismos transversais da experiência

Entregas esperadas:
- botão funcional de tema no header
- refinamento do botão de idioma
- sincronização entre estado visual e utilitários globais
- tratamento responsivo básico da navegação

Risco principal:
- header ficar parcialmente funcional, gerando dívida logo no início

## Lote 3 - Conteúdo Dinâmico
Meta:
- transformar seções estáticas em seções dirigidas por dados

Entregas esperadas:
- renderização de posts de news
- renderização de blocos de currículo
- renderização de projetos
- estrutura de componente Now preparada para atualização constante

Risco principal:
- dados de origem ainda muito genéricos ou incompletos para produzir uma experiência convincente

## Lote 4 - Conteúdo Real e Curadoria
Meta:
- substituir conteúdo placeholder por conteúdo autoral e consistente

Entregas esperadas:
- revisão de textos do hero e about
- consolidação da narrativa profissional
- revisão de descrições de projetos
- revisão de experiência acadêmica e profissional

Risco principal:
- manter estrutura boa com conteúdo fraco ou genérico demais

## Lote 5 - Polimento Final
Meta:
- elevar percepção de qualidade antes de deploy ou nova fase

Entregas esperadas:
- revisão de responsividade
- revisão de acessibilidade
- revisão de i18n
- revisão de semântica e consistência visual

## Critérios de Pronto por Lote

### Estruturalmente pronto
- markup semântico coerente
- classes alinhadas ao design system
- sem duplicação evidente de responsabilidade entre arquivos

### Visualmente pronto
- hierarquia visual clara
- tema consistente
- responsividade funcional em desktop, tablet e mobile

### Funcionalmente pronto
- dados renderizados sem depender de conteúdo hardcoded desnecessário
- toggles funcionando com estado persistido quando aplicável

### Editorialmente pronto
- textos claros, sem placeholders genéricos
- narrativa compatível com a visão do produto

## Backlog Recomendado para a Próxima Etapa de Implementação

### Prioridade alta
- consolidar design system
- finalizar header com toggles
- implementar hero da nova fase
- renderizar now, news, curriculum e projects via JavaScript puro

### Prioridade média
- introduzir seção de writing ou notes
- aprimorar links sociais e contato
- refinar grid e blocos mobile

### Prioridade posterior
- archive de projetos
- página dedicada de currículo
- download de CV em PDF
- easter egg previsto no documento de produto

## Definição de Sucesso
A estrutura documental será bem-sucedida se, antes mesmo da implementação completa, o projeto tiver documentação suficiente para responder sem ambiguidade:
- o que construir
- em que ordem construir
- por que cada seção existe
- como a interface deve se comportar
- quais critérios definem qualidade e término