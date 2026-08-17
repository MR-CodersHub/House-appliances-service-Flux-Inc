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
              '<a href="' + basePath + 'index.html" class="logo" aria-label="Riderz Home"><img src="' + basePath + 'assets/img/logo.png" alt="Riderz Logo" class="logo-img"><span class="logo-text-group"><span class="logo-brand-title">Riderz</span></span></a>' +
              '<p>Precision motorcycle service, superbike dyno tuning, fork suspension rebuilds, and ECU diagnostics for all major brands.</p>' +
              '<div class="foot-emergency-box">' +
                '<span class="foot-emergency-label">24/7 ROADSIDE &amp; BREAKDOWN ASSIST:</span>' +
                '<a href="tel:+13125550148" class="foot-emergency-phone">+1 (312) 555-0148</a>' +
              '</div>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h5>Services</h5>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=oil-filter">4T Synthetic Oil Care</a>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=brake-suspension">Brakes &amp; Fork Tuning</a>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=chain-sprocket">Chain &amp; Sprocket Drive</a>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=computer-diagnostics">ECU &amp; Dyno Diagnostics</a>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=detailing-paint">Ceramic Shield &amp; Detailing</a>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=battery-electrical">Stator &amp; Battery Health</a>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h5>Rider Hub &amp; Booking</h5>' +
              '<a href="' + basePath + 'public/pages/booking.html">Book Service Slot</a>' +
              '<a href="' + basePath + 'public/pages/about.html">About Workshop</a>' +
              '<a href="' + basePath + 'public/pages/blog.html">Rider Knowledge Hub</a>' +
              '<a href="' + basePath + 'public/pages/pricing.html">Maintenance Plans</a>' +
              '<a href="' + basePath + 'public/pages/faq.html">FAQs</a>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h5>Hours &amp; Location</h5>' +
              '<p style="color:var(--steel);font-size:13px;margin-bottom:8px;"><strong>Mon - Fri:</strong> 8:00 AM – 6:30 PM</p>' +
              '<p style="color:var(--steel);font-size:13px;margin-bottom:8px;"><strong>Sat:</strong> 8:00 AM – 5:00 PM</p>' +
              '<p style="color:var(--steel);font-size:13px;margin-bottom:12px;"><strong>Sun:</strong> Track Support &amp; Emergency Only</p>' +
              '<p style="color:var(--steel);font-size:12px;line-height:1.5;">2847 W. Industrial Blvd, Chicago, IL</p>' +
            '</div>' +
          '</div>' +
          '<div class="foot-bottom">' +
            '<span>&copy; 2026 RIDERZ PRECISION MOTORCYCLE SERVICE &amp; TUNING. ALL RIGHTS RESERVED.</span>' +
            '<span>Certified Master Bike Technicians &nbsp;&bull;&nbsp; Factory OEM Parts Guaranteed</span>' +
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
