/* Renderizador da seção Projects
   Busca data/projects.json e exibe featured projects com contexto
*/
(function(){
  async function fetchJSON(path){
    try{
      const res = await fetch(path, {cache: 'no-cache'});
      if(!res.ok) throw new Error('fetch error');
      return await res.json();
    }catch(err){
      console.error('Erro ao carregar', path, err);
      return null;
    }
  }

  function createProjectCard(item){
    const el = document.createElement('article');
    el.className = 'project-card';

    if(item.image){
      const figure = document.createElement('figure');
      figure.className = 'project-figure';
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.image_alt || item.title || 'project image';
      img.loading = 'lazy';
      figure.appendChild(img);

      const overlay = document.createElement('figcaption');
      overlay.className = 'fig-overlay';
      const oTitle = document.createElement('span');
      oTitle.className = 'fig-title';
      oTitle.textContent = item.title;
      overlay.appendChild(oTitle);
      if(item.author){
        const badge = document.createElement('span');
        badge.className = 'fig-badge';
        badge.textContent = (window.i18n && window.i18n.t) ? window.i18n.t('projects.labels.mine') : 'Meu projeto';
        overlay.appendChild(badge);
      }
      figure.appendChild(overlay);

      // abrir modal ao clicar na imagem/figure
      figure.addEventListener('click', () => {
        createModal(item);
      });

      el.appendChild(figure);
    }

    const meta = document.createElement('div');
    meta.className = 'meta';

    const title = document.createElement('h3');
    title.textContent = item.title || 'Untitled project';
    meta.appendChild(title);

    if(item.description){
      const p = document.createElement('p');
      p.textContent = item.description;
      meta.appendChild(p);
    }

    // problem/solution small summary when present
    const t = (key, fallback) => (window.i18n && typeof window.i18n.t === 'function') ? window.i18n.t(key) : fallback;
    if(item.problem || item.solution){
      const ps = document.createElement('p');
      ps.style.color = 'var(--text-secondary)';
      ps.style.fontSize = '0.9rem';
      const problemLabel = t('projects.labels.problem','Problem: ');
      const solutionLabel = t('projects.labels.solution','Solution: ');
      ps.textContent = `${item.problem ? problemLabel + item.problem + ' ' : ''}${item.solution ? solutionLabel + item.solution : ''}`.trim();
      meta.appendChild(ps);
    }

    // technologies
    if(Array.isArray(item.technologies) && item.technologies.length){
      const tech = document.createElement('div');
      tech.className = 'tech-list';
      tech.textContent = item.technologies.join(' · ');
      meta.appendChild(tech);
    }

    // links
    const links = document.createElement('div');
    links.className = 'links';
    if(item.repository){
      const a = document.createElement('a');
      a.href = item.repository;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = t('projects.labels.repository','Repository');
      a.style.marginRight = '0.5rem';
      links.appendChild(a);
    }
    if(item.deployed){
      const a = document.createElement('a');
      a.href = item.deployed;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = t('projects.labels.live','Live');
      links.appendChild(a);
    }
    if(!item.repository && !item.deployed){
      const note = document.createElement('p');
      note.textContent = t('projects.messages.no_repo_deploy','No public repository or deploy provided.');
      note.style.color = 'var(--text-secondary)';
      links.appendChild(note);
    }

    meta.appendChild(links);

    el.appendChild(meta);
    return el;
  }

  function createModal(item){
    // evita múltiplos modais
    if(document.querySelector('.project-modal')) return;
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-modal','true');

    const overlay = document.createElement('div');
    overlay.className = 'pm-overlay';
    modal.appendChild(overlay);

    const box = document.createElement('div');
    box.className = 'pm-box';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'pm-close';
    closeBtn.setAttribute('aria-label','Fechar');
    closeBtn.textContent = '×';
    box.appendChild(closeBtn);

    if(item.image){
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.image_alt || item.title || '';
      img.className = 'pm-image';
      box.appendChild(img);
    }

    const info = document.createElement('div');
    info.className = 'pm-info';
    const h = document.createElement('h3');
    h.textContent = item.title;
    info.appendChild(h);
    if(item.description){
      const p = document.createElement('p');
      p.textContent = item.description;
      info.appendChild(p);
    }
    if(item.problem){
      const pl = document.createElement('p');
      pl.className = 'pm-problem';
      pl.textContent = (window.i18n && window.i18n.t) ? window.i18n.t('projects.labels.problem','Problem: ') + item.problem : item.problem;
      info.appendChild(pl);
    }
    if(item.solution){
      const sl = document.createElement('p');
      sl.className = 'pm-solution';
      sl.textContent = (window.i18n && window.i18n.t) ? window.i18n.t('projects.labels.solution','Solution: ') + item.solution : item.solution;
      info.appendChild(sl);
    }
    if(Array.isArray(item.technologies) && item.technologies.length){
      const tech = document.createElement('p');
      tech.className = 'pm-tech';
      tech.textContent = item.technologies.join(' · ');
      info.appendChild(tech);
    }
    const links = document.createElement('div');
    links.className = 'pm-links';
    if(item.repository){
      const a = document.createElement('a');
      a.href = item.repository;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = (window.i18n && window.i18n.t) ? window.i18n.t('projects.labels.repository','Repository') : 'Repository';
      links.appendChild(a);
    }
    if(item.deployed){
      const b = document.createElement('a');
      b.href = item.deployed;
      b.target = '_blank';
      b.rel = 'noopener noreferrer';
      b.textContent = (window.i18n && window.i18n.t) ? window.i18n.t('projects.labels.live','Live') : 'Live';
      links.appendChild(b);
    }
    info.appendChild(links);

    box.appendChild(info);
    modal.appendChild(box);
    document.body.appendChild(modal);

    function closeModal(){
      modal.remove();
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e){
      if(e.key === 'Escape') closeModal();
    }
    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', onKey);
  }

  async function renderProjects(){
    const container = document.querySelector('.projects-grid');
    if(!container) return;
    container.innerHTML = '';

    const data = await fetchJSON('data/projects.json');
    if(!data){
      container.textContent = 'Não foi possível carregar os projetos.';
      return;
    }

    const all = data.projects || [];
    // prefer explicit featured flag; se nenhum marcado, considerar todos como candidatos
    const featured = all.filter(p => p.featured === true);
    const toRender = featured.length ? featured : all;

    if(!toRender.length){
      container.textContent = 'Nenhum projeto disponível.';
      return;
    }

    toRender.forEach(p => {
      container.appendChild(createProjectCard(p));
    });
  }

  window.renderProjects = renderProjects;
})();
