# Arquitetura de Informação

## Objetivo
Definir a estrutura lógica da experiência para que o site apresente identidade, trajetória, projetos e atualização contínua de forma coerente.

## Estrutura Macro da Página Inicial

### 1. Header
Responsabilidade:
- dar contexto de navegação global
- expor idioma e tema
- facilitar acesso rápido às seções principais

Conteúdos esperados:
- assinatura do site ou nome do autor
- links para Home, Now, News, CV e Projects
- toggle de idioma
- toggle de tema

### 2. Hero
Responsabilidade:
- comunicar posicionamento profissional em poucos segundos

Conteúdos esperados:
- saudação curta
- nome ou assinatura profissional
- headline forte
- resumo objetivo
- CTAs principais

Pergunta que responde:
- quem é esta pessoa e por que vale continuar navegando?

### 3. About Snapshot
Responsabilidade:
- oferecer um retrato humano e técnico resumido

Conteúdos esperados:
- parágrafo curto sobre perfil
- interesses centrais
- foco atual de estudo e atuação

Pergunta que responde:
- qual é a identidade profissional e intelectual do autor?

### 4. Now
Responsabilidade:
- mostrar o momento atual de estudo, construção e prioridade

Conteúdos esperados:
- o que está estudando
- o que está construindo
- o que está refinando

Pergunta que responde:
- no que essa pessoa está investindo energia agora?

### 5. Timeline ou News Feed
Responsabilidade:
- registrar evolução recente

Conteúdos esperados:
- posts curtos com título, data, categoria e resumo
- aprendizados, marcos, artigos ou atualizações

Pergunta que responde:
- como esse portfólio se mantém vivo ao longo do tempo?

### 6. Experience and Academic Journey
Responsabilidade:
- estruturar formação, experiência e atividades relevantes

Conteúdos esperados:
- formação acadêmica
- experiências profissionais
- iniciação científica
- monitoria, docência ou extensão

Pergunta que responde:
- qual é a base de formação e prática do autor?

### 7. Featured Projects
Responsabilidade:
- destacar capacidade de execução e raciocínio técnico

Conteúdos esperados:
- projetos com descrição objetiva
- tecnologias
- links para repositório e deploy
- possibilidade futura de estudos de caso

Pergunta que responde:
- o que essa pessoa já construiu de relevante?

### 8. Writing or Notes
Responsabilidade:
- abrir espaço para produção de conteúdo, mesmo que inicialmente em formato simples

Conteúdos esperados:
- textos técnicos
- anotações de estudo
- reflexões curtas sobre construção do próprio portfólio

Pergunta que responde:
- como essa pessoa organiza e compartilha o que aprende?

### 9. Footer
Responsabilidade:
- encerrar a experiência com links úteis e reforço de identidade

Conteúdos esperados:
- copyright
- links sociais
- contato essencial

## Navegação e Priorização de Conteúdo
Ordem recomendada de prioridade visual:

1. Posicionamento profissional
2. Momento atual
3. Provas de execução
4. Trajetória e formação
5. Atualizações e escrita

## Mapeamento de Dados para Futuras Renderizações

### data/news.json
Uso previsto:
- alimentar seção de notícias, timeline ou changelog pessoal

### data/curriculum.json
Uso previsto:
- alimentar blocos de formação, experiência, hobbies e estudos

### data/projects.json
Uso previsto:
- alimentar cards de projetos e futuros estudos de caso

### data/i18n.json
Uso previsto:
- servir como camada de texto para toda a interface estática e semiestática

## Diretrizes de Conteúdo
- Cada seção precisa ter um propósito claro.
- Evitar seções que repetem a mesma informação com nomes diferentes.
- O visitante deve conseguir entender a proposta do portfólio mesmo se ler apenas hero, now e projects.
- O conteúdo deve equilibrar objetividade profissional com traços reais da jornada acadêmica e pessoal.