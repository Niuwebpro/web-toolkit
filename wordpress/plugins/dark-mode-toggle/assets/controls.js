(() => {
  'use strict';
  const mode = window.WordPressToolkitColorMode;
  if (!mode) return;
  function sync() {
    document.querySelectorAll('[data-wpt-dark-toggle]').forEach(button => {
      button.hidden = false;
      button.setAttribute('aria-checked', String(mode.dark));
    });
    document.querySelectorAll('[data-wpt-dark-system]').forEach(button => {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(mode.preference === 'system'));
    });
  }
  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    if (event.target.closest('[data-wpt-dark-toggle]')) mode.set(mode.dark ? 'light' : 'dark');
    else if (event.target.closest('[data-wpt-dark-system]')) mode.set('system');
  });
  document.addEventListener('wpt:color-mode', sync);
  sync();
})();
