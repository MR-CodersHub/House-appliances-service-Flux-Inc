(function() {
  function getBasePath() {
    var path = window.location.pathname;
    if (path.indexOf('/public/pages/') !== -1 || path.indexOf('/public/auth/') !== -1 || path.indexOf('/auth/admin/') !== -1 || path.indexOf('/auth/user/') !== -1) {
      return '../../';
    }
    return './';
  }

  function renderFooter() {
    if (document.querySelector('.dashboard-layout')) return;

    var existingFooter = document.querySelector('footer.site-footer');
    var basePath = getBasePath();
    var footerHTML = 
      '<footer class="site-footer">' +
        '<div class="wrap">' +
          '<div class="foot-top">' +
            '<div class="foot-brand">' +
              '<a href="' + basePath + 'index.html" class="logo"><span class="dot"></span>MOTORWORKS</a>' +
              '<p>Precision automotive service — diagnostics, maintenance, and repair for every make and model.</p>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h5>Quick Links</h5>' +
              '<a href="' + basePath + 'index.html">Home</a>' +
              '<a href="' + basePath + 'public/pages/home-2.html">Home 2</a>' +
              '<a href="' + basePath + 'public/pages/services.html">Services</a>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h5>COMPANY</h5>' +
              '<a href="' + basePath + 'public/pages/about.html">About Us</a>' +
              '<a href="' + basePath + 'public/pages/blog.html">Blog</a>' +
              '<a href="' + basePath + 'public/pages/faq.html">FAQ</a>' +
              '<a href="' + basePath + 'public/pages/pricing.html">Pricing Plans</a>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h5>LEGAL</h5>' +
              '<a href="' + basePath + 'public/pages/contact.html">Contact</a>' +
              '<a href="' + basePath + 'public/pages/privacy-policy.html">Privacy Policy</a>' +
              '<a href="' + basePath + 'public/pages/terms-of-service.html">Terms of Service</a>' +
            '</div>' +
          '</div>' +
          '<div class="foot-bottom">' +
            '<span>&copy; 2026 MOTORWORKS SERVICE CENTER</span>' +
            '<span>Precision Car Service — All Bays ASE Certified</span>' +
          '</div>' +
        '</div>' +
      '</footer>';

    if (existingFooter) {
      existingFooter.outerHTML = footerHTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
  }

  window.MotorWorks = window.MotorWorks || {};
  window.MotorWorks.renderFooter = renderFooter;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();
