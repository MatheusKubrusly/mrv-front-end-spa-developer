// Renderizador da seção Now
(function () {
  async function fetchCurriculum() {
    try {
      const res = await fetch('./data/curriculum.json');
      if (!res.ok) throw new Error('Erro ao carregar curriculum.json');
      return await res.json();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  function formatNowStudy(study) {
    const title = study.topic || 'Study';
    const summary = study.summary || '';
    const focus = study.focus ? `<p class="now__focus">${escapeHtml(study.focus)}</p>` : '';

    return `
      <div class="card card--minimal now__card" data-id="${escapeHtml(study.id || '')}">
        <div class="card__header">
          <h3 class="card__title">${escapeHtml(title)}</h3>
          <p class="card__subtitle">${escapeHtml(study.status || '')}</p>
        </div>
        <div class="card__body">
          <p class="card__description">${escapeHtml(summary)}</p>
          ${focus}
        </div>
      </div>
    `;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  async function renderNow() {
    const container = document.querySelector('#now article');
    if (!container) return;

    container.innerHTML = '<p class="loading">Carregando...</p>';

    const data = await fetchCurriculum();
    if (!data) {
      container.innerHTML = '<p class="now__empty">Erro ao carregar dados.</p>';
      return;
    }

    const studies = Array.isArray(data.studies) ? data.studies : [];
    const inProgress = studies.filter(s => s.status === 'in-progress');

    if (inProgress.length === 0) {
      // usar i18n se disponível
      const msg = window.i18n ? window.i18n.t('now.empty') : 'Nenhuma atividade em andamento';
      container.innerHTML = `<p class="now__empty">${escapeHtml(msg)}</p>`;
      return;
    }

    // Renderiza o primeiro item como foco principal
    container.innerHTML = inProgress.map(formatNowStudy).join('\n');
  }

  // Expor função globalmente para o inicializador
  window.renderNow = renderNow;
})();
