/* Independent of Tailwind and of any existing .dark class. */
(() => {
  'use strict';
  const key = 'wordpress-toolkit:color-mode';
  const root = document.documentElement;
  const media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  const valid = value => value === 'light' || value === 'dark' ? value : 'system';
  let preference = 'system';
  try { preference = valid(window.localStorage.getItem(key)); } catch (_) { /* Storage is optional. */ }
  function apply() {
    const dark = preference === 'dark' || (preference === 'system' && Boolean(media && media.matches));
    root.dataset.wptColorMode = dark ? 'dark' : 'light';
    root.style.colorScheme = dark ? 'dark' : 'light';
    document.dispatchEvent(new CustomEvent('wpt:color-mode', { detail: { preference, dark } }));
  }
  window.WordPressToolkitColorMode = {
    get preference() { return preference; },
    get dark() { return root.dataset.wptColorMode === 'dark'; },
    set(value) {
      preference = valid(value);
      try {
        if (preference === 'system') window.localStorage.removeItem(key);
        else window.localStorage.setItem(key, preference);
      } catch (_) { /* Keep working in memory. */ }
      apply();
    }
  };
  if (media && media.addEventListener) media.addEventListener('change', () => { if (preference === 'system') apply(); });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      try { if (event.storageArea && event.storageArea !== window.localStorage) return; } catch (_) { return; }
      preference = valid(event.newValue);
      apply();
    }
  });
  apply();
})();
