(function () {
  function getBasePath() {
    var path = window.location.pathname;
    if (path.indexOf('/public/pages/') !== -1 || path.indexOf('/public/auth/') !== -1 || path.indexOf('/auth/admin/') !== -1 || path.indexOf('/auth/user/') !== -1) {
      return '../../';
    }
    return './';
  }

  function renderNavbar() {
    var basePath = getBasePath();

    if (document.querySelector('.dashboard-layout')) {
      var dashHeader = document.querySelector('.dashboard-header');
      if (dashHeader && !dashHeader.querySelector('.nav-toggles')) {
        var themeSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
        var rtlSvg = 'RTL';
        var profileDropdown = dashHeader.querySelector('.profile-dropdown');
        if (profileDropdown) {
          profileDropdown.insertAdjacentHTML('beforebegin',
            '<div class="nav-toggles">' +
            '<button class="toggle-btn" id="themeToggle" title="Toggle theme" aria-label="Toggle theme">' + themeSvg + '</button>' +
            '<button class="toggle-btn" id="rtlToggle" title="Toggle RTL" aria-label="Toggle RTL">' + rtlSvg + '</button>' +
            '</div>'
          );
        }
      }
      initNavbarEvents();
      if (window.MotorWorks && window.MotorWorks.initTheme && window.MotorWorks.initRTL) {
        window.MotorWorks.initTheme();
        window.MotorWorks.initRTL();
      }
      return;
    }

    var existingHeader = document.querySelector('header.site-header');
    var existingMobile = document.getElementById('mobileMenu');

    var themeSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    var rtlSvg = 'RTL';
    var profileSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';

    var headerHTML =
      '<header class="site-header">' +
      '<div class="nav">' +
      '<a href="' + basePath + 'index.html" class="logo" aria-label="Flux Inc Home"><img src="' + basePath + 'assets/img/logo.png" alt="Flux Inc Logo" class="logo-img"><span class="logo-brand-title">FLUX INC</span></a>' +
      '<nav class="navlinks">' +
      '<a href="' + basePath + 'index.html">Home</a>' +
      '<a href="' + basePath + 'public/pages/home-2.html">Home 2</a>' +
      '<a href="' + basePath + 'public/pages/about.html">About</a>' +
      '<a href="' + basePath + 'public/pages/services.html">Services</a>' +
      '<a href="' + basePath + 'public/pages/blog.html">Blog</a>' +
      '<a href="' + basePath + 'public/pages/contact.html">Contact</a>' +
      '</nav>' +
      '<div class="navcta">' +
      '<a href="' + basePath + 'public/pages/booking.html" class="btn btn-nav-signup">Book Now</a>' +
      '<div class="nav-toggles">' +
      '<button class="toggle-btn" id="themeToggle" title="Toggle theme" aria-label="Toggle theme">' + themeSvg + '</button>' +
      '<button class="toggle-btn" id="rtlToggle" title="Toggle RTL" aria-label="Toggle RTL">' + rtlSvg + '</button>' +
      '<div class="profile-dropdown">' +
      '<button class="profile-icon toggle-btn" id="profileToggle" title="Account & Dashboards" aria-label="Account & Dashboards">' + profileSvg + '</button>' +
      '<div class="dropdown-menu" id="profileDropdown">' +
      '<div style="padding: 10px 18px 6px; font-size: 10.5px; font-family: \'Raleway\', sans-serif; letter-spacing: 0.12em; color: var(--steel); text-transform: uppercase; font-weight: 700;">Account Access</div>' +
      '<a href="' + basePath + 'public/auth/login.html"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg> Login</a>' +
      '<a href="' + basePath + 'public/auth/signup.html"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg> Sign Up</a>' +
      '<div class="dropdown-divider"></div>' +
      '<div style="padding: 8px 18px 6px; font-size: 10.5px; font-family: \'Raleway\', sans-serif; letter-spacing: 0.12em; color: var(--steel); text-transform: uppercase; font-weight: 700;">Dashboards</div>' +
      '<a href="' + basePath + 'public/pages/user-dashboard.html"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> Customer Dashboard</a>' +
      '<a href="' + basePath + 'public/pages/admin-dashboard.html"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> Admin Dashboard</a>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<button class="mobile-toggle" id="mobileToggle" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '</div>' +
      '</div>' +
      '</header>';

    var mobileHTML =
      '<div class="mobile-menu" id="mobileMenu">' +
      '<a href="' + basePath + 'index.html">Home</a>' +
      '<a href="' + basePath + 'public/pages/home-2.html">Home 2</a>' +
      '<a href="' + basePath + 'public/pages/about.html">About</a>' +
      '<a href="' + basePath + 'public/pages/services.html">Services</a>' +
      '<a href="' + basePath + 'public/pages/blog.html">Blog</a>' +
      '<a href="' + basePath + 'public/pages/contact.html">Contact</a>' +
      '<div class="dropdown-divider" style="margin: 10px 0;"></div>' +
      '<a href="' + basePath + 'public/pages/user-dashboard.html" style="color:var(--amber);">Customer Dashboard</a>' +
      '<a href="' + basePath + 'public/pages/admin-dashboard.html" style="color:var(--amber);">Admin Dashboard</a>' +
      '<a href="' + basePath + 'public/auth/login.html">Login</a>' +
      '<a href="' + basePath + 'public/auth/signup.html">Sign up</a>' +
      '</div>';

    if (existingHeader) {
      existingHeader.outerHTML = headerHTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    if (existingMobile) {
      existingMobile.outerHTML = mobileHTML;
    } else {
      var headerEl = document.querySelector('header.site-header');
      if (headerEl) {
        headerEl.insertAdjacentHTML('afterend', mobileHTML);
      }
    }

    initNavbarEvents();
    if (window.MotorWorks && window.MotorWorks.initTheme && window.MotorWorks.initRTL) {
      window.MotorWorks.initTheme();
      window.MotorWorks.initRTL();
    }
  }

  function initNavbarEvents() {
    var profileToggle = document.getElementById('profileToggle');
    var profileDropdown = document.getElementById('profileDropdown');
    if (profileToggle && profileDropdown) {
      profileToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
      });
      document.addEventListener('click', function (e) {
        if (!profileDropdown.contains(e.target) && !profileToggle.contains(e.target)) {
          profileDropdown.classList.remove('active');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          profileDropdown.classList.remove('active');
          var mobileMenu = document.getElementById('mobileMenu');
          if (mobileMenu) mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }

    var mobileToggle = document.getElementById('mobileToggle');
    var mobileMenu = document.getElementById('mobileMenu');
    var mobileClose = document.getElementById('mobileClose');
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', function () {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
      if (mobileClose) {
        mobileClose.addEventListener('click', closeMobile);
      }
      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMobile);
      });
    }

    function closeMobile() {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navlinks a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.indexOf(currentPage) !== -1) {
        link.classList.add('active');
      }
    });

    function handleScroll() {
      var header = document.querySelector('.site-header');
      if (!header) return;
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  window.MotorWorks = window.MotorWorks || {};
  window.MotorWorks.renderNavbar = renderNavbar;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavbar);
  } else {
    renderNavbar();
  }
})();