---
applyTo: "styles/**/*.css"
---

# Instrucoes CSS

- Respeite a arquitetura atual em base, atoms, blocks e layouts.
- Antes de criar um seletor novo, verifique se o problema deve ser resolvido por composicao, refinamento de token ou ajuste do bloco existente.
- Preserve a semantica da camada: base para fundacoes, atoms para unidades pequenas, blocks para secoes e layouts para distribuicao estrutural.
- Priorize os tokens existentes do projeto, especialmente a convencao color-*; evite criar variaveis paralelas ou nomes arbitrarios.
- Escreva CSS pensando em responsividade desde a menor largura. Ajustes desktop devem ser complementares, nao ponto de partida.
- Nao introduza estilos que quebrem dark mode ou light mode. Toda decisao de cor deve funcionar nos dois temas.
- Evite valores magicos repetidos quando um token, espacamento recorrente ou regra local resolver melhor.
- Evite profundidade excessiva de seletores, dependencia de estrutura fragil de DOM e sobrescritas em cascata dificeis de manter.
- Estados interativos precisam considerar hover, focus-visible e, quando aplicavel, active.
- Animacoes devem ser discretas, funcionais e consistentes com a proposta editorial do portfolio.
- Nao use CSS para compensar HTML mal estruturado quando a correcao correta estiver no markup.
- Quando tocar em tipografia, espacamento ou grid, valide o impacto em mobile, tablet e desktop.