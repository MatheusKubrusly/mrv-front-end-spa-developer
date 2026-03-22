// Preenche informações de contato no footer a partir de data/curriculum.json
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

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  async function renderContact() {
    const data = await fetchCurriculum();
    if (!data || !data.contact) return;

    const emailEl = document.querySelector('.footer__email');
    const githubEl = document.querySelector('.footer__link[aria-label="Perfil GitHub"]');
    const linkedinEl = document.querySelector('.social-link[aria-label="LinkedIn (atualizar link)"]');

    if (emailEl && data.contact.email) {
      emailEl.href = `mailto:${escapeHtml(data.contact.email)}`;
      emailEl.textContent = escapeHtml(data.contact.email);
    }

    if (githubEl && data.contact.github) {
      githubEl.href = escapeHtml(data.contact.github);
      githubEl.target = '_blank';
      githubEl.rel = 'noopener';
    }

    if (linkedinEl && data.contact.linkedin) {
      linkedinEl.href = escapeHtml(data.contact.linkedin);
      linkedinEl.target = '_blank';
      linkedinEl.rel = 'noopener';
    }
  }

  document.addEventListener('DOMContentLoaded', renderContact);

})();
