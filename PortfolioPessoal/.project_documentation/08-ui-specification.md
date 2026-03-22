# Especificação de Interface e Design

## Objetivo
Definir a direção visual da próxima versão do portfólio com base no design system já iniciado e nas referências analisadas, sem copiar layout ou linguagem visual de terceiros.

## Direção Visual
O visual deve combinar:
- rigor técnico
- aparência limpa e editorial
- densidade informacional controlada
- contraste alto e navegação clara

## Princípios de Interface

### 1. Hero com voz própria
O topo da página deve ser mais do que um título genérico. Ele precisa ter:
- pequena introdução
- headline forte
- descrição curta
- ações prioritárias

### 2. Cards como unidade de conteúdo
News, projects, itens acadêmicos e highlights devem ser apresentados com blocos consistentes de leitura.

### 3. Hierarquia tipográfica evidente
Títulos, subtítulos, metadados e corpo precisam ter contraste de tamanho e peso suficiente para leitura rápida.

### 4. Navegação estável
O header deve continuar leve, mas com espaço reservado para tema, idioma e futura evolução mobile.

## Paleta e Tokens
Manter como base os tokens definidos no design system existente:
- color-bg-primary
- color-bg-secondary
- color-text-primary
- color-text-secondary
- color-accent
- color-border
- color-shadow

Diretriz adicional:
- evitar a coexistência de tokens antigos e novos na implementação futura
- a próxima etapa deve consolidar o uso exclusivo da convenção color-* para tema e superfícies

## Tipografia
Premissas:
- títulos com peso forte e espaçamento controlado
- corpo com leitura confortável e ritmo estável
- metadados discretos, mas legíveis

Direção:
- usar a família principal já definida no design system
- estabelecer cadência clara entre h1, h2, h3, lead text e body text

## Componentes Prioritários

### Header
Estado desejado:
- assinatura visual do site
- navegação principal
- área de ações com toggle de idioma e tema
- comportamento responsivo previsto desde a especificação

### Hero
Estado desejado:
- texto de entrada curto
- destaque para nome e atuação
- bloco de apoio com links para currículo, projetos ou contato

### Now Panel
Estado desejado:
- componente compacto com leitura rápida
- aparência de painel vivo, não de texto solto

### News Cards
Estado desejado:
- cards com data, categoria, título e resumo
- leitura escaneável
- hover discreto, sem excesso de animação

### CV Blocks
Estado desejado:
- blocos modulares para educação, experiência e estudos
- leitura confortável mesmo em mobile

### Project Cards
Estado desejado:
- projeto como prova de raciocínio e execução
- destaque para tecnologias e links relevantes

## Comportamento de Movimento
As animações devem ser poucas e com propósito:
- fade-in leve na entrada de seções
- hover com elevação sutil em cards
- transição suave na troca de tema
- nada de animações decorativas contínuas que atrapalhem leitura

## Responsividade

### Desktop
- foco em leitura vertical confortável
- blocos com respiro suficiente
- distribuição clara entre conteúdo principal e elementos auxiliares

### Tablet
- reequilíbrio de grid e pilhas de conteúdo
- header continua funcional sem depender de grande complexidade visual

### Mobile
- prioridade absoluta à legibilidade
- pilha de seções em fluxo único
- controles de tema e idioma acessíveis
- cards com padding reduzido, mas ainda confortáveis

## Acessibilidade
- contraste mínimo preservado em ambos os temas
- foco visível em todos os controles interativos
- navegação sem depender exclusivamente de hover
- botões de ícone com aria-label na implementação futura

## Critérios de Qualidade Visual para a Implementação Posterior
- nenhuma seção deve parecer visualmente desconectada das demais
- a landing page deve passar sensação de sistema, não de colagem de blocos
- a linguagem visual deve reforçar profissionalismo e clareza, não excesso de ornamento