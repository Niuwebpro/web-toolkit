/**
 * Apply the saved theme before the page renders to reduce theme flashing.
 * Loaded synchronously in the document head on purpose.
 */
(() => {
  const storageKey = 'theme';
  let savedTheme = null;

  try {
    savedTheme = window.localStorage.getItem(storageKey);
  } catch {
    // Storage may be blocked; fall back to the OS preference.
  }

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  const isDark = savedTheme === 'dark' || (savedTheme !== 'light' && prefersDark);

  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
})();
