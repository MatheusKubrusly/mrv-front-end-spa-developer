// utilitário para ligar o CTA do currículo a um PDF quando disponível
(function () {
  function getText(key, fallback) {
    if (window.i18n && typeof window.i18n.t === 'function') {
      const value = window.i18n.t(key);
      return value === key ? fallback : value;
    }

    return fallback;
  }

  function isAbsoluteUrl(path) {
    return /^https?:\/\//i.test(path);
  }

  async function fetchJson(path) {
    try {
      const res = await fetch(path, { cache: 'no-store' });
      if (!res.ok) return null;
      return await res.json();
    } catch (e) {
      return null;
    }
  }

  async function exists(path) {
    // Para URLs externas (http/https) não confiamos em HEAD por causa de CORS.
    if (isAbsoluteUrl(path)) return true;

    try {
      const res = await fetch(path, { method: 'HEAD', cache: 'no-store' });
      return res.ok;
    } catch (e) {
      return false;
    }
  }

  function setCtaHref(el, href, options = {}) {
    if (!el) return;

    el.setAttribute('href', href);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');

    if (options.downloadName) {
      el.setAttribute('download', options.downloadName);
    } else {
      el.removeAttribute('download');
    }

    if (options.label) {
      el.textContent = options.label;
      el.setAttribute('aria-label', options.label);
    }
  }

  function resetCtaHref(el) {
    if (!el) return;
    el.setAttribute('href', '#curriculum');
    el.removeAttribute('target');
    el.removeAttribute('rel');
    el.removeAttribute('download');
    const label = getText('hero.cta_secondary', 'Ver currículo ou perfil');
    el.textContent = label;
    el.setAttribute('aria-label', label);
  }

  async function initCvLink() {
    const cta = document.getElementById('cta-cv');
    if (!cta) return;

    resetCtaHref(cta);

    // 1) tentar carregar data/cv.json (opcional)
    const cfg = await fetchJson('./data/cv.json');
    if (cfg) {
      if (cfg.path) {
        const ok = await exists(cfg.path);
        if (ok) {
          const isLocalFile = !isAbsoluteUrl(cfg.path);
          setCtaHref(cta, cfg.path, {
            downloadName: isLocalFile ? (cfg.downloadName || 'curriculo.pdf') : undefined,
            label: isLocalFile
              ? getText('hero.cta_resume_file', 'Baixar currículo')
              : getText('hero.cta_profile', 'Ver perfil'),
          });
          return;
        }
      }

      if (cfg.link && isAbsoluteUrl(cfg.link)) {
        setCtaHref(cta, cfg.link, {
          label: getText('hero.cta_profile', 'Ver perfil'),
        });
        return;
      }
    }

    // 2) fallback para assets/cv.pdf
    const assetPath = './assets/matheus-kubrusly-cv.pdf';
    if (await exists(assetPath)) {
      setCtaHref(cta, assetPath, {
        downloadName: 'matheus-kubrusly-cv.pdf',
        label: getText('hero.cta_resume_file', 'Baixar currículo'),
      });
      return;
    }

    // 3) sem PDF: manter comportamento padrão (âncora para #curriculum)
  }

  window.initializeCvLink = initCvLink;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCvLink);
  } else {
    initCvLink();
  }
})();
