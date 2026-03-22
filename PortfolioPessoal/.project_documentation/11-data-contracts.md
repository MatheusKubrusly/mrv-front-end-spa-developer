# Contratos de Dados da Aplicacao

## Objetivo
Definir contratos de dados simples, estáveis e legíveis para sustentar a futura renderização em JavaScript puro sem improviso de estrutura.

## Princípios
- os arquivos JSON devem ser autoexplicativos
- nomes de chaves devem ficar em inglês
- estruturas devem privilegiar previsibilidade sobre flexibilidade prematura
- campos opcionais devem ser explicitamente tratados na implementação futura

## 1. data/news.json

### Responsabilidade
Registrar notícias, notas, marcos ou atualizações do portfólio.

### Estrutura recomendada
```json
{
  "posts": [
    {
      "id": "news-001",
      "title": "Título da atualização",
      "excerpt": "Resumo curto da atualização.",
      "date": "2026-03-22",
      "category": "learning",
      "url": "#",
      "highlight": false
    }
  ]
}
```

### Regras
- id deve ser único
- date deve usar formato ISO
- category deve ser controlada por conjunto pequeno de valores
- excerpt deve ser curto o suficiente para leitura rápida em card

### Categorias sugeridas
- learning
- project
- article
- academic
- personal-note

## 2. data/curriculum.json

### Responsabilidade
Concentrar formação, experiência, estudos paralelos e interesses.

### Estrutura recomendada
```json
{
  "education": [],
  "experience": [],
  "studies": [],
  "hobbies": []
}
```

### education
```json
{
  "id": "edu-001",
  "institution": "CEFET/RJ",
  "course": "Computer Science",
  "level": "Bachelor",
  "startYear": "2023",
  "endYear": "2028",
  "status": "in-progress",
  "summary": "Resumo curto da formação."
}
```

### experience
```json
{
  "id": "exp-001",
  "company": "Cefet-RJ",
  "role": "Research Scholarship Student",
  "period": "2024-09 to 2025-09",
  "description": "Descrição objetiva da atuação.",
  "highlights": ["item 1", "item 2"]
}
```

### studies
```json
{
  "id": "study-001",
  "topic": "Web development",
  "status": "in-progress",
  "summary": "O que está sendo estudado agora."
}
```

### hobbies
```json
{
  "id": "hobby-001",
  "name": "Reading",
  "description": "Descrição curta."
}
```

## 3. data/projects.json

### Responsabilidade
Armazenar os projetos de destaque da aplicação.

### Estrutura recomendada
```json
{
  "projects": [
    {
      "id": "project-001",
      "title": "Nome do projeto",
      "description": "Resumo do projeto.",
      "problem": "Problema resolvido.",
      "solution": "Solução construída.",
      "technologies": ["HTML5", "CSS3", "JavaScript"],
      "repository": "https://github.com/...",
      "deployed": "https://...",
      "featured": true,
      "status": "active"
    }
  ]
}
```

### Regras
- technologies deve ser uma lista curta e objetiva
- repository e deployed podem ser opcionais, mas não ambos vazios em projetos destaque
- featured ajuda a separar o que entra na home do que fica para um futuro archive

## 4. data/i18n.json

### Responsabilidade
Centralizar textos visíveis da interface.

### Diretriz
- manter namespaces por seção
- não misturar textos de hero, footer e projects no mesmo nível
- preferir chaves curtas e semânticas

### Exemplo de organização
```json
{
  "ptBR": {
    "hero": {
      "eyebrow": "...",
      "title": "...",
      "description": "..."
    }
  },
  "en": {
    "hero": {
      "eyebrow": "...",
      "title": "...",
      "description": "..."
    }
  }
}
```

## Regras Gerais de Evolucao
- novos campos só devem entrar se tiverem uso claro na interface
- evitar campos ambíguos como text, info ou data sem contexto
- se um campo for exibido na UI, seu nome deve ser claro o bastante para qualquer pessoa entender seu papel