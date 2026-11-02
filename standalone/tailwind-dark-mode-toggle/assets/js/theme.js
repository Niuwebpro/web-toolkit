/**
 * Accessible, persistent light/dark switch.
 * This script is deferred, so the checkbox is present when it runs.
 */
(() => {
  const toggle = document.querySelector('#theme-toggle');
  if (!toggle) return;

  const root = document.documentElement;
  const storageKey = 'theme';

  function applyTheme(isDark) {
    root.classList.toggle('dark', isDark);
    root.style.colorScheme = isDark ? 'dark' : 'light';
    toggle.checked = isDark;
    toggle.setAttribute(
      'aria-label',
      isDark ? 'Désactiver le mode sombre' : 'Activer le mode sombre'
    );
  }

  applyTheme(root.classList.contains('dark'));

  toggle.addEventListener('change', () => {
    applyTheme(toggle.checked);

    try {
      window.localStorage.setItem(storageKey, toggle.checked ? 'dark' : 'light');
    } catch {
      // The toggle works even when local storage is unavailable.
    }
  });
})();
