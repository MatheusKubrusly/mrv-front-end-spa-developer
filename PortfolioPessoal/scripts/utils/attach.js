// attach.js — permite ao autor anexar um PDF temporariamente via navegador
(function () {
  const STORAGE_KEY = 'attached_cv_base64';
  const STORAGE_NAME = 'attached_cv_filename';
  const CTA_ID = 'cta-cv';

  function shouldShowAdminPanel() {
    const params = new URLSearchParams(window.location.search);
    const host = window.location.hostname;

    return params.get('admin') === '1' || host === 'localhost' || host === '127.0.0.1';
  }

  function initAdminPanelVisibility() {
    const panel = document.getElementById('admin-panel');
    if (!panel) return;

    if (shouldShowAdminPanel()) {
      panel.hidden = false;
    }
  }

  function getText(key, fallback) {
    if (window.i18n && typeof window.i18n.t === 'function') {
      const value = window.i18n.t(key);
      return value === key ? fallback : value;
    }

    return fallback;
  }

  function updateStatus(message, tone = 'info') {
    const status = document.getElementById('attach-status');
    if (!status) return;

    status.textContent = message;
    status.dataset.tone = tone;
  }

  function base64ToBlob(base64, type = 'application/pdf') {
    const byteChars = atob(base64);
    const byteNumbers = new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
      byteNumbers[i] = byteChars.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type });
  }

  function setCtaToBlob(cta, blob, filename) {
    if (!cta) return;
    const url = URL.createObjectURL(blob);
    cta.setAttribute('href', url);
    cta.setAttribute('target', '_blank');
    cta.setAttribute('rel', 'noopener');
    cta.setAttribute('download', filename || 'curriculo.pdf');
    const label = getText('hero.cta_resume_file', 'Baixar currículo');
    cta.textContent = label;
    cta.setAttribute('aria-label', label);
  }

  function clearCtaBlob(cta) {
    if (!cta) return;

    if (typeof window.initializeCvLink === 'function') {
      window.initializeCvLink();
      return;
    }

    cta.setAttribute('href', '#curriculum');
    cta.removeAttribute('download');
    cta.removeAttribute('target');
    cta.removeAttribute('rel');
  }

  function saveBase64(base64, filename) {
    try {
      localStorage.setItem(STORAGE_KEY, base64);
      localStorage.setItem(STORAGE_NAME, filename || 'curriculo.pdf');
      return true;
    } catch (e) {
      console.error('Erro ao salvar anexo no localStorage', e);
      return false;
    }
  }

  function removeBase64() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_NAME);
  }

  function loadBase64() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function initFromStorage() {
    const base64 = loadBase64();
    const cta = document.getElementById(CTA_ID);
    if (base64 && cta) {
      const filename = localStorage.getItem(STORAGE_NAME) || 'curriculo.pdf';
      const blob = base64ToBlob(base64);
      setCtaToBlob(cta, blob, filename);
    }
  }

  window.initializeAttachedCv = initFromStorage;

  function handleAttach(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        // result format: data:application/pdf;base64,AAAA...
        const parts = result.split(',');
        const base64 = parts[1];
        // size check: localStorage generally ~5MB limit; warn if large
        const approxSizeMb = (base64.length * 3) / (4 * 1024 * 1024);
        if (approxSizeMb > 6) {
          reject(new Error('Arquivo muito grande para salvar no navegador (>6MB). Use upload para assets/ no repositório.'));
          return;
        }
        const saved = saveBase64(base64, file.name);
        if (!saved) {
          reject(new Error('Falha ao salvar no localStorage'));
          return;
        }
        resolve({ base64, name: file.name });
      };
      reader.onerror = () => reject(new Error('Erro ao ler o arquivo'));
      reader.readAsDataURL(file);
    });
  }

  function wire() {
    initAdminPanelVisibility();

    const input = document.getElementById('attach-file');
    const btnSave = document.getElementById('attach-save');
    const btnClear = document.getElementById('attach-clear');
    const cta = document.getElementById(CTA_ID);

    if (!input || !btnSave || !btnClear) return;

    btnSave.addEventListener('click', async () => {
      const files = input.files;
      if (!files || files.length === 0) {
        updateStatus(getText('cv_admin.status_select_file', 'Selecione um arquivo PDF antes de anexar.'), 'warning');
        return;
      }

      const file = files[0];
      if (file.type !== 'application/pdf') {
        updateStatus(getText('cv_admin.status_pdf_only', 'Apenas PDFs são suportados.'), 'danger');
        return;
      }

      try {
        const { base64, name } = await handleAttach(file);
        const blob = base64ToBlob(base64);
        setCtaToBlob(cta, blob, name);
        updateStatus(getText('cv_admin.status_attached', 'Arquivo anexado neste navegador. O link do currículo já foi atualizado.'), 'success');
      } catch (e) {
        updateStatus(e.message || getText('cv_admin.status_attach_error', 'Erro ao anexar o arquivo.'), 'danger');
      }
    });

    btnClear.addEventListener('click', () => {
      removeBase64();
      clearCtaBlob(cta);
      updateStatus(getText('cv_admin.status_cleared', 'Anexo local removido.'), 'info');
    });

    // inicializa se já houver anexo salvo
    initFromStorage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }

  document.addEventListener('languageChanged', () => {
    initFromStorage();
  });
})();
