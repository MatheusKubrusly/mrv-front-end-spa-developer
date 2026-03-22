/* Renderizador da seção Curriculum
   Responsabilidade: buscar data/curriculum.json e renderizar educação, experiência, estudos e hobbies.
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

  function createEducationItem(item){
    const el = document.createElement('div');
    el.className = 'cv-item';
    const title = document.createElement('h3');
    title.textContent = `${item.institution} — ${item.course}`;
    el.appendChild(title);

    const meta = document.createElement('p');
    const years = item.startYear || item.year || '';
    const status = item.status ? ` · ${item.status}` : '';
    meta.textContent = `${item.level || ''} ${years}${status}`.trim();
    el.appendChild(meta);

    if(item.summary){
      const summary = document.createElement('p');
      summary.textContent = item.summary;
      el.appendChild(summary);
    }

    return el;
  }

  function createExperienceItem(item){
    const el = document.createElement('div');
    el.className = 'cv-item';
    const title = document.createElement('h3');
    title.textContent = `${item.role} — ${item.company}`;
    el.appendChild(title);

    if(item.period){
      const period = document.createElement('p');
      period.textContent = item.period;
      el.appendChild(period);
    }

    if(item.description){
      const desc = document.createElement('p');
      desc.textContent = item.description;
      el.appendChild(desc);
    }

    if(Array.isArray(item.highlights) && item.highlights.length){
      const ul = document.createElement('ul');
      ul.className = 'highlights';
      item.highlights.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        ul.appendChild(li);
      });
      el.appendChild(ul);
    }

    return el;
  }

  function createStudyItem(item){
    const el = document.createElement('div');
    el.className = 'cv-item';
    const title = document.createElement('h3');
    title.textContent = item.topic || item.name || 'Study';
    el.appendChild(title);

    if(item.status || item.summary){
      const p = document.createElement('p');
      p.textContent = `${item.status ? item.status + ' — ' : ''}${item.summary || ''}`.trim();
      el.appendChild(p);
    }
    return el;
  }

  function createHobbyItem(item){
    const el = document.createElement('div');
    el.className = 'cv-item';
    const title = document.createElement('h3');
    title.textContent = item.name || item.title || 'Hobby';
    el.appendChild(title);
    if(item.description){
      const p = document.createElement('p');
      p.textContent = item.description;
      el.appendChild(p);
    }
    return el;
  }

  async function renderCurriculum(){
    const container = document.querySelector('.cv-container');
    if(!container) return;
    container.innerHTML = '';

    const data = await fetchJSON('data/curriculum.json');
    if(!data){
      container.textContent = 'Não foi possível carregar o currículo.';
      return;
    }

    // sections: education, experience, studies, hobbies
    const education = data.education || [];
    const experience = data.experience || [];
    const studies = data.studies || [];
    const hobbies = data.hobbies || [];

    // i18n-aware section titles (fallbacks provided)
    const t = (key, fallback) => (window.i18n && typeof window.i18n.t === 'function') ? window.i18n.t(key) : fallback;
    const titleEducation = t('curriculum.education', 'Education');
    const titleExperience = t('curriculum.experience', 'Experience');
    const titleStudies = t('curriculum.studies', 'Studies');
    const titleHobbies = t('curriculum.hobbies', 'Interests');

    // Helper to create section
    function createSection(titleText, items, factory){
      const section = document.createElement('div');
      section.className = 'cv-section';
      const h = document.createElement('h3');
      h.textContent = titleText;
      section.appendChild(h);

      if(!items.length){
        const p = document.createElement('p');
        p.textContent = 'Nenhuma entrada disponível.';
        section.appendChild(p);
        return section;
      }

      items.forEach(it => {
        section.appendChild(factory(it));
      });
      return section;
    }

    // Education and Experience side-by-side when possible
    container.appendChild(createSection(titleEducation, education, createEducationItem));
    container.appendChild(createSection(titleExperience, experience, createExperienceItem));
    if(studies.length || hobbies.length){
      container.appendChild(createSection(titleStudies, studies, createStudyItem));
      container.appendChild(createSection(titleHobbies, hobbies, createHobbyItem));
    }
  }

  // Expose to global for initialization from main.js
  window.renderCurriculum = renderCurriculum;
})();
