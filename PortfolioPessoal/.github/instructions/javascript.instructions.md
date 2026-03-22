---
applyTo: "scripts/**/*.js"
---

# Instrucoes JavaScript

- Trabalhe com JavaScript modular, funcoes pequenas e responsabilidade unica.
- Trate scripts deste projeto como orquestradores de comportamento e renderizacao simples, nao como base para abstrações de framework.
- Preserve a separacao entre dados, renderizacao, eventos e utilitarios.
- Prefira funcoes puras para transformacao de dados sempre que possivel.
- Nao duplique strings de interface no JavaScript quando elas pertencem ao fluxo de i18n.
- Qualquer conteudo dinamico principal deve partir dos arquivos em data e respeitar os contratos documentados em .project_documentation.
- Evite listeners redundantes, efeitos colaterais dispersos e manipulacao de DOM sem necessidade.
- Antes de adicionar estado novo, verifique se ele ja existe no DOM, nos dados carregados ou em um modulo utilitario existente.
- Toda interacao de tema, idioma ou navegacao deve preservar acessibilidade e previsibilidade para o usuario.
- Em mudancas de renderizacao, considere estados de carregamento, vazio, erro e dados incompletos quando aplicavel.
- Nao introduza dependencias externas para resolver problemas que o JavaScript nativo cobre com clareza.
- Se um modulo crescer demais, prefira extrair utilitarios ou responsabilidades claras em vez de concentrar logica heterogenea em um unico arquivo.