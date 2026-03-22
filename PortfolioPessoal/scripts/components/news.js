// Renderizador da Timeline / News
(function () {
  async function fetchNews() {
    try {
      const res = await fetch('./data/news.json');
      if (!res.ok) throw new Error('Erro ao carregar news.json');
      return await res.json();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  function parseDate(d) {
    if (!d) return null;
    const dt = new Date(d);
    return isNaN(dt) ? null : dt;
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

  function postCardHtml(post) {
    const date = parseDate(post.date);
    const dateStr = date ? date.toLocaleDateString() : '';
    const highlightClass = post.highlight ? 'card--highlighted' : 'card--minimal';

    return `
      <article class="card ${highlightClass} post" data-id="${escapeHtml(post.id)}">
        <div class="card__header">
          <h3 class="card__title"><a href="${escapeHtml(post.url || '#')}">${escapeHtml(post.title || 'Untitled')}</a></h3>
          <p class="card__subtitle">${escapeHtml(post.category || '')} • ${escapeHtml(dateStr)}</p>
        </div>
        <div class="card__body">
          <p class="card__description">${escapeHtml(post.excerpt || '')}</p>
        </div>
      </article>
    `;
  }

  async function renderNews() {
    const container = document.querySelector('.posts-container');
    if (!container) return;

    container.innerHTML = '<p class="loading">Carregando...</p>';

    const data = await fetchNews();
    if (!data || !Array.isArray(data.posts)) {
      const msg = window.i18n ? window.i18n.t('timeline.empty') : 'Nenhuma atualização disponível.';
      container.innerHTML = `<p class="timeline__empty">${escapeHtml(msg)}</p>`;
      return;
    }

    // Normalizar e ordenar por data descendente
    const posts = data.posts
      .map(p => ({
        id: p.id ? String(p.id) : '',
        title: p.title || '',
        excerpt: p.excerpt || '',
        date: p.date || null,
        category: p.category || '',
        url: p.url || '#',
        highlight: !!p.highlight
      }))
      .sort((a, b) => {
        const da = new Date(a.date || 0);
        const db = new Date(b.date || 0);
        return db - da;
      });

    if (posts.length === 0) {
      const msg = window.i18n ? window.i18n.t('timeline.empty') : 'Nenhuma atualização disponível.';
      container.innerHTML = `<p class="timeline__empty">${escapeHtml(msg)}</p>`;
      return;
    }

    container.innerHTML = posts.map(postCardHtml).join('\n');
  }

  window.renderNews = renderNews;
})();
