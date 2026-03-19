# 🛠️ Arquitetura e Stack Tecnológico

## Stack Definida
* **Framework/Linguagem:** [Ex: Next.js (App Router) com TypeScript / React puro / Astro]
* **Estilização/UI:** [Ex: Tailwind CSS / SASS / Styled Components]
* **Animações:** [Ex: Framer Motion / GSAP / CSS nativo]
* **Hospedagem/Deploy:** [Ex: Vercel / Netlify / GitHub Pages]

## Regras de Arquitetura
1. **Modularidade Extrema:**
   * Crie blocos independentes e altamente reutilizáveis.
   * Separe componentes de UI genéricos (ex: `Button`, `BentoCard`) de componentes de layout específicos (ex: `HeroSection`, `ProjectFilter`).
2. **Internacionalização (i18n):**
   * A arquitetura deve prever dicionários de tradução (ex: JSONs separados para `pt-BR` e `en-US`).
   * Evite textos "hardcoded" diretamente nos componentes de UI.
3. **Gerenciamento de Estado:**
   * Mantenha o estado o mais local possível. Use contextos globais apenas para o Tema (Dark/Light) e Idioma (PT/EN).