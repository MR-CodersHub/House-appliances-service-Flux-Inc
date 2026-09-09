(function() {
  var html = document.documentElement;
  var STORAGE_KEY_THEME = 'motorworks-theme';
  var STORAGE_KEY_RTL = 'motorworks-rtl';

  function initTheme() {
    var saved = localStorage.getItem(STORAGE_KEY_THEME);
    if (saved) {
      html.setAttribute('data-theme', saved);
    } else {
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
    updateThemeIcon();
  }

  function toggleTheme() {
    var current = html.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY_THEME, next);
    updateThemeIcon();
  }

  function updateThemeIcon() {
    var isDark = html.getAttribute('data-theme') === 'dark';
    var sunSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    var moonSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    document.querySelectorAll('#themeToggle, .theme-toggle-btn').forEach(function(btn) {
      btn.innerHTML = isDark ? sunSvg : moonSvg;
      btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function initRTL() {
    var saved = localStorage.getItem(STORAGE_KEY_RTL);
    if (saved === 'rtl') {
      html.setAttribute('dir', 'rtl');
    }
    updateRTLIcon();
  }

  function toggleRTL() {
    var current = html.getAttribute('dir');
    var next = current === 'rtl' ? 'ltr' : 'rtl';
    html.setAttribute('dir', next);
    localStorage.setItem(STORAGE_KEY_RTL, next);
    updateRTLIcon();
  }

  function updateRTLIcon() {
    var isRTL = html.getAttribute('dir') === 'rtl';
    document.querySelectorAll('#rtlToggle, .rtl-toggle-btn').forEach(function(btn) {
      btn.innerHTML = isRTL ? 'LTR' : 'RTL';
      btn.setAttribute('title', isRTL ? 'Switch to LTR' : 'Switch to RTL');
    });
  }

  document.addEventListener('click', function(e) {
    var themeBtn = e.target.closest('#themeToggle, .theme-toggle-btn');
    if (themeBtn) {
      e.preventDefault();
      toggleTheme();
      return;
    }
    var rtlBtn = e.target.closest('#rtlToggle, .rtl-toggle-btn');
    if (rtlBtn) {
      e.preventDefault();
      toggleRTL();
      return;
    }
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem(STORAGE_KEY_THEME)) {
      html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      updateThemeIcon();
    }
  });

  window.MotorWorks = window.MotorWorks || {};
  window.MotorWorks.initTheme = initTheme;
  window.MotorWorks.toggleTheme = toggleTheme;
  window.MotorWorks.updateThemeIcon = updateThemeIcon;
  window.MotorWorks.initRTL = initRTL;
  window.MotorWorks.toggleRTL = toggleRTL;
  window.MotorWorks.updateRTLIcon = updateRTLIcon;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { initTheme(); initRTL(); });
  } else {
    initTheme();
    initRTL();
  }
})();