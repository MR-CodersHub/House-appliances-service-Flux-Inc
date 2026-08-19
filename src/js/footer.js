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
              '<a href="' + basePath + 'index.html" class="logo" aria-label="Flux Inc Home"><img src="' + basePath + 'assets/img/logo.png" alt="Flux Inc Logo" class="logo-img"><span class="logo-text-group"><span class="logo-brand-title">Flux Inc</span></span></a>' +
              '<p>On-demand precision repair and maintenance for washing machines, refrigerators, and air conditioners.</p>' +
              '<div class="foot-emergency-box">' +
                '<span class="foot-emergency-label">24/7 ON-DEMAND APPLIANCE HOTLINE:</span>' +
                '<a href="tel:+18005550199" class="foot-emergency-phone">+1 (800) 555-0199</a>' +
              '</div>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h5>Appliance Repairs</h5>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=washing-machine">Washing Machine Repair</a>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=refrigerator">Refrigerator &amp; Freezer</a>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=ac-service">Split &amp; Window AC Service</a>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=microwave">Microwave &amp; Oven Repair</a>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=dishwasher">Dishwasher Diagnostics</a>' +
              '<a href="' + basePath + 'public/pages/service-details.html?id=dryer">Washer-Dryer Overhaul</a>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h5>Company</h5>' +
              '<a href="' + basePath + 'index.html">Home</a>' +
              '<a href="' + basePath + 'public/pages/home-2.html">Home 2</a>' +
              '<a href="' + basePath + 'public/pages/about.html">About Flux Inc</a>' +
              '<a href="' + basePath + 'public/pages/blog.html">Our Blog</a>' +
              '<a href="' + basePath + 'public/pages/pricing.html">Standard Pricing</a>' +
              '<a href="' + basePath + 'public/pages/faq.html">FAQs &amp; Warranty</a>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h5>Coverage &amp; Hours</h5>' +
              '<p style="color:var(--steel);font-size:13px;margin-bottom:8px;"><strong>Daily Visits:</strong> 7:00 AM – 9:00 PM</p>' +
              '<p style="color:var(--steel);font-size:13px;margin-bottom:8px;"><strong>Emergency Dispatch:</strong> 24/7 Available</p>' +
              '<p style="color:var(--steel);font-size:13px;margin-bottom:12px;"><strong>Avg Response Time:</strong> Under 45 Minutes</p>' +
              '<p style="color:var(--steel);font-size:12px;line-height:1.5;">Serving Greater Metropolitan &amp; Suburban Areas</p>' +
            '</div>' +
          '</div>' +
          '<div class="foot-bottom">' +
            '<span>&copy; 2026 FLUX INC. ON-DEMAND HOME APPLIANCE REPAIR. ALL RIGHTS RESERVED.</span>' +
            '<span><span><a href="privacy-policy.html">Privacy Policy</a></span>&nbsp;&bull;&nbsp;<span><a href="terms-of-service.html">Terms &amp; Conditions</a></span></span>' +
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
