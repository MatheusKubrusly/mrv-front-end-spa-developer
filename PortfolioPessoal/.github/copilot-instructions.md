# Instrucoes do Projeto

Este projeto e um portfolio pessoal com proposta editorial e profissional. O site nao deve parecer apenas um curriculo estatico: ele precisa comunicar identidade, profundidade tecnica, evolucao continua e clareza de navegacao.

## Stack e Escopo
- Trabalhe com HTML5 semantico, CSS3 puro, JavaScript ES6+ e arquivos JSON.
- Nao introduza frameworks de UI, bibliotecas pesadas ou backend neste escopo atual.
- Use JavaScript modular com import/export e funcoes pequenas de responsabilidade unica.
- Considere os arquivos em .project_documentation como fonte de verdade para visao, arquitetura, UI, dados e fluxo.
- Antes de implementar, confira a coerencia entre o pedido, os contratos de dados e os documentos 06 a 13 de .project_documentation quando o tema envolver estrutura, UX, conteudo, dados ou qualidade.

## Arquitetura Esperada
- Preserve a separacao entre estrutura, apresentacao, comportamento e dados.
- HTML deve permanecer limpo, semantico e orientado a seções reais do portfolio.
- CSS deve seguir a organizacao existente em base, atoms, blocks e layouts.
- JavaScript deve tratar componentes como funcoes de renderizacao e utilitarios, nao como abstracoes de framework.
- Conteudo dinamico deve vir de data/news.json, data/curriculum.json, data/projects.json e data/i18n.json.
- Evite duplicar markup, estilos ou logica entre arquivos quando uma refinacao pontual no padrao existente resolver o problema.
- Nao crie novos pontos de entrada, novas pastas estruturais ou novos formatos de dados sem necessidade comprovada pelo escopo.

## Direcao de Produto
- Priorize header, hero, now, news, jornada academica/profissional, projetos e footer como espinha dorsal da experiencia.
- Cada secao deve responder uma pergunta clara do visitante e evitar repeticao de conteudo.
- O portfolio deve equilibrar presenca profissional, prova tecnica e identidade editorial.
- Projetos devem ser apresentados com contexto: problema, solucao, tecnologias e resultado ou aprendizado.
- O resultado deve se aproximar mais de um produto editorial autoral do que de uma landing page generica ou de um curriculo renderizado.

## Interface e UX
- Mantenha uma linguagem visual limpa, editorial, tecnica e consistente entre todas as secoes.
- Use os tokens canonicos do projeto, priorizando a convencao color-* e evitando criar sistemas paralelos de variaveis.
- Pense mobile-first e preserve boa leitura em desktop, tablet e mobile.
- Tema dark/light e i18n PT-BR/EN sao partes centrais da experiencia, nao extras opcionais.
- Animacoes devem ser discretas e funcionais, sem excesso decorativo.
- Evite blocos visuais genericos, hero sem hierarquia, cards sem contexto e combinacoes de layout que parecam templates prontos.
- Sempre considerar estados hover, focus, active e empty quando a secao ou componente tiver interacao.

## Conteudo e i18n
- Todo texto visivel ao usuario deve ser pensado para PT-BR e EN.
- Codigo, nomes de funcoes, variaveis, arquivos e chaves de dados devem ficar em Ingles.
- Evite texto generico, autoelogio vazio e listas frias sem contexto.
- O tom do portfolio deve ser claro, tecnico, humano e confiante sem exagero.
- Qualquer novo texto de interface deve nascer com chave de traducao correspondente quando fizer parte da experiencia principal.
- Nao inserir copy temporaria vaga como lorem ipsum, placeholder profissional ou frases motivacionais genéricas.

## Acessibilidade e Qualidade
- Use HTML semantico, foco visivel, contraste adequado e navegacao por teclado.
- Botoes somente com icone devem ter aria-label.
- Evite depender exclusivamente de hover para interacoes essenciais.
- Antes de propor implementacoes, verifique coerencia com os contratos de dados e com os quality gates documentados.
- Nao quebre navegacao por teclado, ordem logica de leitura ou consistencia semantica por causa de refinamento visual.
- Trate regressao visual, regressao de i18n e regressao de tema como bugs reais, nao como acabamento opcional.

## Forma de Trabalhar
- Prefira solucoes simples, legiveis e evolutiveis em vez de complexidade prematura.
- Nao reestruture a base sem necessidade; preserve os padroes existentes e refine onde houver inconsistencias reais.
- Quando houver duvida sobre comportamento, arquitetura ou conteudo, consulte primeiro os documentos em .project_documentation.
- Ao alterar codigo, explique a mudanca de forma objetiva, ligando decisao tecnica e impacto no produto.
- Ao editar markup, estilo ou scripts, mantenha o escopo focado e evite misturar melhorias nao pedidas com a entrega principal.

## Processo Git
- Antes de editar, verifique o estado atual com git status.
- Antes de concluir uma tarefa relevante, revise o diff com git diff -- nome-do-arquivo ou git diff --stat.
- Ao mover arquivos importantes, prefira git mv quando isso nao conflitar com alteracoes ja em andamento.
- Nao reverta mudancas do usuario sem pedido explicito.
- Nao use comandos destrutivos como git reset --hard, git checkout -- ou git clean -fd sem solicitacao explicita.
- Se houver ruido de ambiente, prefira limpar a origem do problema e registrar a regra em .gitignore.
- Ao organizar commits, prefira um fluxo claro: git status, git diff, git add caminho, git commit -m "tipo: resumo", git status.

## Padrao de Commits
- Sempre que for gerar uma mensagem de commit, analise primeiro o que esta em staged.
- A mensagem de commit deve ser escrita em Portugues do Brasil.
- O formato obrigatorio e: <tipo>(<escopo opcional>): <descricao em letras minusculas>.
- Os tipos permitidos sao apenas: feat, fix, refactor, style, docs e chore.
- Use feat para novas funcionalidades.
- Use fix para correcao de bugs.
- Use refactor para refatoracao sem alteracao de comportamento.
- Use style para formatacao ou ajustes sem mudanca logica.
- Use docs para alteracoes em README, arquivos .md e documentacao do projeto.
- Use chore para dependencias, build ou manutencao operacional.
- A linha de assunto deve ter no maximo 50 caracteres.
- A descricao deve ficar em letras minusculas.
- Use modo imperativo na descricao do commit.
- Quando a alteracao corresponder claramente ao fechamento de uma funcionalidade ou tarefa, sugira o sufixo (closes #ID) ao final da mensagem para substituicao posterior do identificador.
- Nao invente escopo se ele nao ajudar a leitura do commit.
- Nao gere mensagem vaga; a descricao deve refletir o impacto real do que esta staged.