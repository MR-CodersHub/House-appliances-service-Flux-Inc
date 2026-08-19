(function() {
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var item = btn.closest('.faq-item');
        if (!item) return;
        var isActive = item.classList.contains('active');
        var container = item.closest('.faq-container');
        if (container) {
          container.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('active'); });
        }
        if (!isActive) item.classList.add('active');
      });
    });
  }

  function initPricing() {
    var monthlyBtn = document.getElementById('pricingMonthly');
    var annualBtn = document.getElementById('pricingAnnual');
    var grid = document.getElementById('pricingGrid');
    if (!monthlyBtn || !annualBtn || !grid || !window.MotorWorks) return;

    function renderPricing(period) {
      var plans = window.MotorWorks.pricingPlans[period];
      grid.innerHTML = plans.map(function(plan) {
        return '<div class="pricing-card' + (plan.featured ? ' featured' : '') + '">' +
          '<h3>' + plan.name + '</h3>' +
          '<div class="price">' + plan.price + '<span>' + plan.period + '</span></div>' +
          (plan.save ? '<div class="text-amber" style="font-size:12px;margin-bottom:8px;">' + plan.save + '</div>' : '') +
          '<p class="price-note">' + plan.description + '</p>' +
          '<ul class="pricing-features">' + plan.features.map(function(f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
          '<a href="contact.html" class="btn' + (plan.featured ? ' btn-solid' : '') + '" style="width:100%;text-align:center;">Get Started</a>' +
        '</div>';
      }).join('');
    }

    monthlyBtn.addEventListener('click', function() {
      monthlyBtn.classList.add('active');
      annualBtn.classList.remove('active');
      renderPricing('monthly');
    });
    annualBtn.addEventListener('click', function() {
      annualBtn.classList.add('active');
      monthlyBtn.classList.remove('active');
      renderPricing('annual');
    });
    renderPricing('monthly');
  }

  function initCountdown() {
    var countdown = document.getElementById('countdown');
    if (!countdown) return;
    var target = new Date();
    target.setDate(target.getDate() + 30);
    function update() {
      var diff = target - new Date();
      if (diff <= 0) return;
      var days = Math.floor(diff / 86400000);
      var hours = Math.floor((diff % 86400000) / 3600000);
      var mins = Math.floor((diff % 3600000) / 60000);
      var secs = Math.floor((diff % 60000) / 1000);
      var items = countdown.querySelectorAll('.countdown-num');
      if (items.length >= 4) {
        items[0].textContent = String(days).padStart(2, '0');
        items[1].textContent = String(hours).padStart(2, '0');
        items[2].textContent = String(mins).padStart(2, '0');
        items[3].textContent = String(secs).padStart(2, '0');
      }
    }
    update();
    setInterval(update, 1000);
  }

  function getBasePath() {
    var path = window.location.pathname;
    if (path.indexOf('/public/pages/') !== -1 || path.indexOf('/public/auth/') !== -1 || path.indexOf('/auth/') !== -1) return '../../';
    return './';
  }

  function initServiceDetail() {
    var container = document.getElementById('serviceDetail');
    if (!container || !window.MotorWorks) return;
    var params = new URLSearchParams(window.location.search);
    var serviceId = params.get('id');
    var services = window.MotorWorks.services;
    var service = services.find(function(s) { return s.id === serviceId; }) || services[0];
    var basePath = getBasePath();
    document.title = service.title + ' — Flux Inc';

    container.innerHTML =
      '<div class="wrap section-padding">' +
        '<div class="service-detail-hero">' +
          '<div class="service-detail-img"><img src="' + ((service.image.indexOf('http') === 0 || service.image.indexOf('/') === 0) ? service.image : (basePath + service.image)) + '" alt="' + service.title + '"></div>' +
          '<div>' +
            '<span class="sec-tag">' + service.code + '</span>' +
            '<h1 style="font-size:clamp(32px,4vw,48px);margin-bottom:20px;">' + service.title + '</h1>' +
            '<p style="color:var(--steel);font-size:16px;line-height:1.7;margin-bottom:30px;">' + service.description + '</p>' +
            '<a href="' + basePath + 'public/pages/booking.html" class="btn btn-solid">Book Technician Visit</a>' +
          '</div>' +
        '</div>' +
        '<div class="detail-features-grid" style="margin-top:80px;">' +
          '<div>' +
            '<span class="sec-tag">FEATURES</span>' +
            '<h2 style="font-size:28px;margin-bottom:24px;">What\'s Included</h2>' +
            '<ul class="service-features">' + service.features.map(function(f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
          '</div>' +
          '<div>' +
            '<span class="sec-tag">PRICING TIERS</span>' +
            '<h2 style="font-size:28px;margin-bottom:24px;">Service Options</h2>' +
            '<table class="service-pricing-table"><thead><tr><th>Tier</th><th>Price</th><th>Details</th></tr></thead><tbody>' +
            service.pricing.map(function(p) { return '<tr><td>' + p.tier + '</td><td>' + p.price + '</td><td>' + p.desc + '</td></tr>'; }).join('') +
            '</tbody></table>' +
          '</div>' +
        '</div>' +
        '<div style="margin-top:80px;">' +
          '<span class="sec-tag">FAQ</span>' +
          '<h2 style="font-size:28px;margin-bottom:30px;">Frequently Asked Questions</h2>' +
          '<div class="faq-container">' +
          service.faqs.map(function(faq, i) {
            return '<div class="faq-item' + (i === 0 ? ' active' : '') + '"><button class="faq-question">' + faq.q + '</button><div class="faq-answer"><p>' + faq.a + '</p></div></div>';
          }).join('') +
          '</div></div>' +
      '</div>';
    initFAQ();
  }

  function initBlogDetail() {
    var container = document.getElementById('blogDetail');
    if (!container || !window.MotorWorks) return;
    var params = new URLSearchParams(window.location.search);
    var rawId = params.get('id') || '';
    var normalizedId = decodeURIComponent(rawId).trim().toLowerCase().replace(/\s+/g, '-');
    var posts = window.MotorWorks.blogPosts;
    var post = posts.find(function(p) {
      var pid = p.id.toLowerCase();
      return pid === normalizedId || pid === rawId.toLowerCase() || pid === decodeURIComponent(rawId).toLowerCase();
    }) || posts[0];

    var basePath = getBasePath();
    document.title = post.title + ' — Flux Inc';

    var imgUrl = (post.image.indexOf('http') === 0 || post.image.indexOf('/') === 0) ? post.image : (basePath + post.image);

    container.innerHTML =
      '<div class="wrap section-padding">' +
        '<div class="blog-layout">' +
          '<div class="blog-main">' +
            '<div class="blog-detail-header">' +
              '<span class="blog-tag" style="display:inline-block;margin-bottom:16px;">' + post.category + '</span>' +
              '<h1>' + post.title + '</h1>' +
              '<div class="blog-detail-meta"><span>Published ' + post.date + '</span> &bull; <span>' + post.readTime + '</span></div>' +
              '<div class="blog-detail-img" style="margin:24px 0 40px;border:1px solid var(--line);overflow:hidden;border-radius:20px;">' +
                '<img src="' + imgUrl + '" alt="' + post.title + '" style="width:100%;height:380px;object-fit:cover;display:block;">' +
              '</div>' +
            '</div>' +
            '<div class="blog-detail-content">' + post.content + '</div>' +
            '<div style="margin-top:50px;padding-top:30px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">' +
              '<a href="blog.html" class="btn">← Back to Blog</a>' +
              '<div style="display:flex;gap:12px;align-items:center;"><span style="color:var(--steel);font-size:14px;">Share:</span>' +
              '<a href="#" style="color:var(--amber);">Twitter</a><a href="#" style="color:var(--amber);">LinkedIn</a></div>' +
            '</div>' +
          '</div>' +
          '<aside class="blog-sidebar">' +
            '<div class="sidebar-widget"><h4>Appliance Categories</h4><div class="sidebar-categories">' +
            (function() {
              var cats = [];
              posts.forEach(function(p) { if (cats.indexOf(p.category) === -1) cats.push(p.category); });
              return cats.map(function(cat) {
                return '<a href="blog.html?category=' + encodeURIComponent(cat) + '">' + cat + ' <span class="count">' + posts.filter(function(p) { return p.category === cat; }).length + '</span></a>';
              }).join('');
            })() +
            '</div></div>' +
            '<div class="sidebar-widget"><h4>Recent Guides</h4>' +
            posts.filter(function(p) { return p.id !== post.id; }).slice(0, 3).map(function(p) {
              return '<div style="margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--line);"><a href="blog-details.html?id=' + p.id + '" style="font-size:14px;font-weight:600;display:block;margin-bottom:6px;">' + p.title + '</a><span style="font-size:12px;color:var(--steel);">' + p.date + '</span></div>';
            }).join('') +
            '</div></aside>' +
        '</div>' +
      '</div>';
  }

  function initNewsletter() {
    window.MotorWorks = window.MotorWorks || {};
    if (!window.MotorWorks.showToast) {
      window.MotorWorks.showToast = function(message, type) {
        type = type || 'success';
        var container = document.querySelector('.toast-container');
        if (!container) {
          container = document.createElement('div');
          container.className = 'toast-container';
          document.body.appendChild(container);
        }
        var icon = type === 'success'
          ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
          : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';

        var toast = document.createElement('div');
        toast.className = 'toast ' + type;
        toast.innerHTML = '<span class="toast-icon">' + icon + '</span><span class="toast-message">' + message + '</span><button class="toast-close" onclick="this.parentElement.remove()">&times;</button>';
        container.appendChild(toast);
        setTimeout(function() {
          if (toast.parentElement) {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(function() { toast.remove(); }, 300);
          }
        }, 4000);
      };
    }

    document.querySelectorAll('.newsletter-form, form[data-type="newsletter"]').forEach(function(form) {
      if (form.dataset.mwSubscribed) return;
      form.dataset.mwSubscribed = 'true';

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var input = form.querySelector('input[type="email"], input');
        var button = form.querySelector('button[type="submit"], button');
        if (!input) return;

        var email = input.value.trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
          window.MotorWorks.showToast('Please enter your email address.', 'error');
          input.focus();
          return;
        }

        if (!emailRegex.test(email)) {
          window.MotorWorks.showToast('Please enter a valid email address (e.g. name@example.com).', 'error');
          input.focus();
          return;
        }

        var subscribers = [];
        try {
          subscribers = JSON.parse(localStorage.getItem('mw_newsletter_subscribers') || '[]');
        } catch (err) {
          subscribers = [];
        }

        if (subscribers.indexOf(email.toLowerCase()) !== -1) {
          window.MotorWorks.showToast('This email is already subscribed to Flux Inc updates!', 'success');
          return;
        }

        var origBtnText = button ? button.textContent : 'Subscribe';
        if (button) {
          button.disabled = true;
          button.textContent = 'Subscribing...';
        }

        setTimeout(function() {
          subscribers.push(email.toLowerCase());
          try {
            localStorage.setItem('mw_newsletter_subscribers', JSON.stringify(subscribers));
          } catch (err) {}

          window.MotorWorks.showToast('Thank you for subscribing! Confirmation sent to ' + email, 'success');

          if (button) {
            button.disabled = false;
            button.textContent = 'Subscribed!';
            setTimeout(function() {
              button.textContent = origBtnText;
            }, 3000);
          }

          var existingNotice = form.parentNode.querySelector('.newsletter-success-notice');
          if (existingNotice) existingNotice.remove();

          var notice = document.createElement('div');
          notice.className = 'newsletter-success-notice';
          notice.style.color = 'var(--success)';
          notice.style.fontSize = '13px';
          notice.style.marginTop = '10px';
          notice.style.fontFamily = "'Raleway', sans-serif";
          notice.style.textAlign = 'center';
          notice.innerHTML = '✓ You are subscribed! Welcome to Flux Inc Appliance Care.';
          form.parentNode.appendChild(notice);

          setTimeout(function() {
            if (notice && notice.parentNode) notice.remove();
          }, 5000);

          input.value = '';
        }, 400);
      });
    });
  }

  function initScrollAnimations() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.svc-card, .blog-card, .testi-card, .step, .pricing-card, .team-card, .faq-item').forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  function initServiceGrid() {
    var grid = document.getElementById('servicesPageGrid');
    if (!grid || !window.MotorWorks) return;
    var basePath = getBasePath();
    var services = window.MotorWorks.services;

    function render(filter) {
      var filtered = filter === 'all' ? services : services.filter(function(s) { return s.category === filter; });

      if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;padding:40px;text-align:center;color:var(--steel);border:1px solid var(--line);background:var(--panel);border-radius:20px;">No appliance repair services found in this category.</div>';
        grid.style.gridTemplateColumns = '1fr';
        return;
      }

      if (filtered.length < 3) {
        grid.style.gridTemplateColumns = 'repeat(' + filtered.length + ', 1fr)';
      } else {
        grid.style.gridTemplateColumns = '';
      }

      grid.innerHTML = filtered.map(function(s) {
        var imgUrl = (s.image.indexOf('http') === 0 || s.image.indexOf('/') === 0) ? s.image : (basePath + s.image);
        return '<div class="svc-card"><div class="svc-img"><span class="svc-code">' + s.code + '</span><a href="' + basePath + 'public/pages/service-details.html?id=' + s.id + '"><img src="' + imgUrl + '" alt="' + s.title + '"></a></div><div class="svc-body"><h3>' + s.title + '</h3><p>' + s.shortDesc + '</p><a href="' + basePath + 'public/pages/service-details.html?id=' + s.id + '" class="svc-link">Book Diagnostic →</a></div></div>';
      }).join('');
    }

    document.querySelectorAll('.services-filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.services-filter-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        render(btn.dataset.filter || 'all');
      });
    });
    render('all');
  }

  function initTeamGrid() {
    var grid = document.getElementById('teamGrid');
    if (!grid || !window.MotorWorks || !window.MotorWorks.team) return;
    var basePath = getBasePath();
    var team = window.MotorWorks.team;
    grid.innerHTML = team.map(function(member) {
      var imgUrl = (member.image.indexOf('http') === 0 || member.image.indexOf('/') === 0) ? member.image : (basePath + member.image);
      return '<div class="team-card">' +
        '<div class="team-img"><img src="' + imgUrl + '" alt="' + member.name + '" loading="lazy"></div>' +
        '<div class="team-info">' +
          '<h3 class="team-name">' + member.name + '</h3>' +
          '<span class="team-role">' + member.role + '</span>' +
          '<p class="team-bio">' + member.bio + '</p>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function initHeroSlider() {
    var slider = document.getElementById('heroSlider');
    if (!slider) return;

    var prevBtn = document.getElementById('heroPrevBtn');
    var nextBtn = document.getElementById('heroNextBtn');
    var slideImg = document.getElementById('heroSlideImg');
    var slideTitle = document.getElementById('heroSlideTitle');
    var slideDesc = document.getElementById('heroSlideDesc');
    var slideBtn = document.getElementById('heroSlideBtn');

    var slides = [
      {
        boldTitle: 'ON-DEMAND APPLIANCE',
        lightTitle: 'REPAIR SERVICE',
        desc: 'Fast doorstep diagnostics and repair for washing machines, refrigerators, and air conditioners. Background-verified master technicians with genuine OEM parts and a 90-day warranty.',
        btnText: 'BOOK TECHNICIAN',
        btnLink: './public/pages/booking.html',
        image: './assets/img/hero.jpg'
      },
      {
        boldTitle: 'REAL-TIME JOB',
        lightTitle: 'LIVE TELEMETRY',
        desc: 'Track your assigned technician in real time, view diagnostic inspection reports, and approve digital estimates with full pricing transparency before repair begins.',
        btnText: 'TRACK REPAIR JOB',
        btnLink: './public/auth/login.html',
        image: './assets/img/bays-occupancy.jpg'
      },
      {
        boldTitle: 'CERTIFIED OEM',
        lightTitle: 'GENUINE SPARES',
        desc: 'Specialized tooling for Samsung, LG, Whirlpool, Bosch, Daikin, and Panasonic appliances. We stock authentic replacement inverter compressors, motors, PCB boards, and sensors.',
        btnText: 'VIEW SERVICES',
        btnLink: './public/pages/services.html',
        image: './assets/img/service1.jpg'
      }
    ];

    var currentIndex = 0;

    function renderSlide(index) {
      var slide = slides[index];
      if (!slide) return;

      if (slideImg) {
        slideImg.style.opacity = '0.3';
        setTimeout(function() {
          slideImg.src = slide.image;
          slideImg.style.opacity = '1';
        }, 180);
      }

      if (slideTitle) {
        slideTitle.innerHTML = '<span class="hero-title-bold">' + slide.boldTitle + '</span><span class="hero-title-light">' + slide.lightTitle + '</span>';
      }
      if (slideDesc) {
        slideDesc.textContent = slide.desc;
      }
      if (slideBtn) {
        slideBtn.textContent = slide.btnText;
        slideBtn.href = slide.btnLink;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        renderSlide(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        renderSlide(currentIndex);
      });
    }
  }

  function initDiagnosticAnalyzer() {
    var section = document.getElementById('diagnostic-analyzer');
    if (!section) return;

    var appBtns = section.querySelectorAll('.diag-app-btn');
    var symptomsGrid = document.getElementById('diagSymptomsGrid');
    var codeEl = document.getElementById('diagComponentCode');
    var severityEl = document.getElementById('diagSeverityTag');
    var titleEl = document.getElementById('diagResultTitle');
    var descEl = document.getElementById('diagResultDesc');
    var fixTimeEl = document.getElementById('diagFixTime');
    var partNeededEl = document.getElementById('diagPartNeeded');
    var warrantyEl = document.getElementById('diagWarranty');
    var testEl = document.getElementById('diagTest');
    var priceEl = document.getElementById('diagPrice');
    var visualImg = document.getElementById('diagVisualImg');
    var badgeFloat = document.getElementById('diagBadgeFloat');

    var diagnosticData = {
      washer: [
        {
          id: 'w1',
          title: 'Loud Spin Noise & Vibration',
          code: 'COMPONENT SPEC: FLX-DRUM-01',
          severity: 'HIGH PRIORITY FIX',
          severityClass: 'severity-high',
          problem: 'Drum Bearing & Spider Arm Wear',
          desc: 'High vibration and grinding metal sounds during high-speed spin cycle indicate worn drum bearings or cracked spider bracket. Continued use risks motor stator damage.',
          time: '45 – 60 Mins Doorstep',
          part: 'Dual Sealed Bearings & Oil Ring',
          warranty: '90-Day Parts & Labor',
          test: '40-Point Electronic Scan',
          price: '$119.00',
          image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=80',
          badge: 'GENUINE OEM BEARINGS'
        },
        {
          id: 'w2',
          title: 'Water Not Draining / Error 4E/5E',
          code: 'COMPONENT SPEC: FLX-PUMP-02',
          severity: 'STANDARD REPAIR',
          severityClass: 'severity-med',
          problem: 'Drain Pump Motor Failure or Lint Clog',
          desc: 'Standing water inside the drum with drain error codes. Resolved by clearing coin traps, testing solenoid impedance, and replacing worn drain pump motors.',
          time: '30 – 45 Mins Doorstep',
          part: 'OEM Magnetic Drain Pump',
          warranty: '90-Day Parts Guarantee',
          test: 'High-Pressure Flow Test',
          price: '$79.00',
          image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1000&q=80',
          badge: 'OEM FACTORY SPARE'
        },
        {
          id: 'w3',
          title: 'PCB Logic Blink / No Power',
          code: 'COMPONENT SPEC: FLX-PCB-03',
          severity: 'CIRCUIT DIAGNOSTIC',
          severityClass: 'severity-med',
          problem: 'Digital PCB Logic Micro-Controller Fault',
          desc: 'Intermittent power cutoffs or unresponsive digital dials caused by voltage surges. Our technicians test relays, swap damaged micro-fuses, or install programmed boards.',
          time: '40 – 50 Mins Doorstep',
          part: 'Programmed Main PCB Circuit',
          warranty: '90-Day Circuit Protection',
          test: 'Oscilloscope Voltage Check',
          price: '$99.00',
          image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
          badge: 'DIRECT-DRIVE PCB'
        },
        {
          id: 'w4',
          title: 'Door Seal Leakage / Gasket Mold',
          code: 'COMPONENT SPEC: FLX-SEAL-04',
          severity: 'MAINTENANCE FIX',
          severityClass: 'severity-med',
          problem: 'Torn Door Bellow Seal & Solenoid',
          desc: 'Water pooling on the floor during wash cycle. Replaced with heavy-duty antibacterial silicone door gasket and precision dual-inlet solenoid valve.',
          time: '30 – 40 Mins Doorstep',
          part: 'Antibacterial Bellow Gasket',
          warranty: '90-Day Replacement',
          test: 'Water Tightness Pressure Check',
          price: '$69.00',
          image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=80',
          badge: 'ANTIBACTERIAL SEAL'
        }
      ],
      fridge: [
        {
          id: 'f1',
          title: 'Cooling Loss / Clicking Compressor',
          code: 'COMPONENT SPEC: FLX-COMP-01',
          severity: 'HIGH PRIORITY FIX',
          severityClass: 'severity-high',
          problem: 'Linear Inverter Compressor & R600a Gas Leak',
          desc: 'Refrigerator compartments warm while freezer is weak. Indicates inverter compressor lockup or low eco refrigerant pressure. Full nitrogen leak test and recharge included.',
          time: '60 – 90 Mins Doorstep',
          part: 'Inverter Compressor & Eco R600a',
          warranty: '90-Day Gas & Compressor',
          test: 'Nitrogen Micro-Leak Scan',
          price: '$189.00',
          image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=80',
          badge: 'EPA CERTIFIED GAS'
        },
        {
          id: 'f2',
          title: 'Excessive Frost in Freezer / No Defrost',
          code: 'COMPONENT SPEC: FLX-FROST-02',
          severity: 'THERMAL DIAGNOSTIC',
          severityClass: 'severity-med',
          problem: 'Defrost Heater & Bi-Metal Sensor Failure',
          desc: 'Thick frost blocking airflow ducts to fresh food chamber. Techs replace the quartz defrost heater element and digital thermal fuse sensor.',
          time: '35 – 50 Mins Doorstep',
          part: 'Quartz Defrost Heater & Sensor',
          warranty: '90-Day Parts & Labor',
          test: 'Thermal Defrost Cycle Test',
          price: '$89.00',
          image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1000&q=80',
          badge: 'OEM THERMAL FUSE'
        },
        {
          id: 'f3',
          title: 'Loud Fan Noise in Fresh Food Section',
          code: 'COMPONENT SPEC: FLX-FAN-03',
          severity: 'STANDARD REPAIR',
          severityClass: 'severity-med',
          problem: 'Evaporator BLDC Fan Motor Overhaul',
          desc: 'High-pitch buzzing or clicking behind rear panel. Resolved by replacing the brushless DC evaporator circulation fan motor and rubber dampers.',
          time: '30 – 40 Mins Doorstep',
          part: 'BLDC Evaporator Fan Motor',
          warranty: '90-Day Warranty',
          test: 'Acoustic Decibel Check',
          price: '$79.00',
          image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=80',
          badge: 'BRUSHLESS DC MOTOR'
        }
      ],
      ac: [
        {
          id: 'a1',
          title: 'Warm Air Blowing / Low Cooling Output',
          code: 'COMPONENT SPEC: FLX-HVAC-01',
          severity: 'HIGH PRIORITY FIX',
          severityClass: 'severity-high',
          problem: 'Deep Foam Jet Wash & R32 Refrigerant Recharge',
          desc: 'Clogged cooling fins and depleted refrigerant pressure. High-pressure antibacterial foam jet cleaning flushes mold and restores ice-cold airflow.',
          time: '45 – 60 Mins Doorstep',
          part: 'Eco R32 / R410A Refill & Foam Jet',
          warranty: '90-Day Cooling Warranty',
          test: 'Delta-T Airflow Temp Test',
          price: '$49.00',
          image: 'https://images.unsplash.com/photo-1614633833026-0820552978b6?auto=format&fit=crop&w=1000&q=80',
          badge: 'DEEP FOAM JET'
        },
        {
          id: 'a2',
          title: 'Water Dripping from Indoor Unit',
          code: 'COMPONENT SPEC: FLX-DRAIN-02',
          severity: 'STANDARD REPAIR',
          severityClass: 'severity-med',
          problem: 'Condensate Drain Tray & U-Trap Blockage',
          desc: 'Water overflowing from the indoor plastic casing. Pressurized vacuum flush clears algae buildup and realigns drain pipe pitch.',
          time: '30 – 40 Mins Doorstep',
          part: 'Drain Pipe & Anti-Algae Treatment',
          warranty: '90-Day Leak Protection',
          test: 'Continuous Gravity Drain Test',
          price: '$39.00',
          image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1000&q=80',
          badge: 'VACUUM FLUSH'
        },
        {
          id: 'a3',
          title: 'Outdoor Unit Not Starting / Fan Humming',
          code: 'COMPONENT SPEC: FLX-CAP-03',
          severity: 'ELECTRICAL REPAIR',
          severityClass: 'severity-med',
          problem: 'Dual Run Capacitor & Inverter Relay Swap',
          desc: 'Compressor humming without starting. Technician swaps the heavy-duty start/run dual capacitor and cleans outdoor condenser coil.',
          time: '30 – 45 Mins Doorstep',
          part: 'OEM 45/5 uF Dual Run Capacitor',
          warranty: '90-Day Electrical Guarantee',
          test: 'Microfarad Capacitance Meter',
          price: '$59.00',
          image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
          badge: 'HEAVY-DUTY CAPACITOR'
        }
      ]
    };

    var currentApp = 'washer';
    var currentSymptomIdx = 0;

    function renderSymptoms(appKey) {
      currentApp = appKey;
      currentSymptomIdx = 0;
      var items = diagnosticData[appKey] || [];
      symptomsGrid.innerHTML = items.map(function(item, idx) {
        return '<button type="button" class="diag-symptom-chip ' + (idx === 0 ? 'active' : '') + '" data-idx="' + idx + '">' +
          '<span class="chip-dot"></span>' +
          '<span>' + item.title + '</span>' +
        '</button>';
      }).join('');

      var chips = symptomsGrid.querySelectorAll('.diag-symptom-chip');
      chips.forEach(function(chip) {
        chip.addEventListener('click', function() {
          chips.forEach(function(c) { c.classList.remove('active'); });
          chip.classList.add('active');
          var idx = parseInt(chip.getAttribute('data-idx'), 10);
          showDiagnosticResult(items[idx]);
        });
      });

      if (items.length > 0) {
        showDiagnosticResult(items[0]);
      }
    }

    function showDiagnosticResult(item) {
      if (!item) return;
      if (codeEl) codeEl.textContent = item.code;
      if (severityEl) {
        severityEl.textContent = item.severity;
        severityEl.className = 'diag-severity-tag ' + item.severityClass;
      }
      if (titleEl) titleEl.textContent = item.problem;
      if (descEl) descEl.textContent = item.desc;
      if (fixTimeEl) fixTimeEl.textContent = item.time;
      if (partNeededEl) partNeededEl.textContent = item.part;
      if (warrantyEl) warrantyEl.textContent = item.warranty;
      if (testEl) testEl.textContent = item.test;
      if (priceEl) priceEl.textContent = item.price;
      if (badgeFloat) badgeFloat.textContent = item.badge;

      if (visualImg) {
        visualImg.style.opacity = '0.3';
        visualImg.style.transform = 'scale(0.98)';
        setTimeout(function() {
          visualImg.src = item.image;
          visualImg.style.opacity = '1';
          visualImg.style.transform = 'scale(1)';
        }, 120);
      }
    }

    appBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        appBtns.forEach(function(b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        var appKey = btn.getAttribute('data-app');
        renderSymptoms(appKey);
      });
    });

    renderSymptoms('washer');
  }

  function initDispatchRadar() {
    var section = document.getElementById('dispatch-radar');
    if (!section) return;

    var zoneBtns = section.querySelectorAll('.radar-zone-btn');
    var techAvatar = document.getElementById('radarTechAvatar');
    var techName = document.getElementById('radarTechName');
    var techCert = document.getElementById('radarTechCert');
    var invTags = document.getElementById('radarInvTags');
    var tickerText = document.getElementById('radarTickerText');
    var etaVal = document.getElementById('radarEtaVal');
    var mapImg = document.getElementById('radarMapImg');

    var radarData = {
      downtown: {
        name: 'David Miller',
        avatar: 'DM',
        cert: 'EPA Universal Master Lead • 4.96 ★ (540+ Repairs)',
        eta: '12 – 16 MINS',
        inventory: ['Washing Machine Drain Pumps', 'Inverter Compressors', 'R32 / R410A Refrigerant', 'Electronic PCB Testers'],
        ticker: '<strong>Job FLUX-7492:</strong> Samsung Washer repaired in 38 mins at 742 Evergreen Terr.',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80'
      },
      north: {
        name: 'Marcus Vance',
        avatar: 'MV',
        cert: 'Certified Refrigeration Specialist • 4.94 ★ (480+ Repairs)',
        eta: '15 – 18 MINS',
        inventory: ['R600a Gas Charging Manifold', 'Defrost Bimetals', 'Thermostat Sensors', 'Condenser Fan Motors'],
        ticker: '<strong>Job FLUX-7493:</strong> LG French-Door Fridge compressor swapped in Lincoln Park.',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80'
      },
      west: {
        name: 'Elena Rostova',
        avatar: 'ER',
        cert: 'Master HVAC & Foam Jet Lead • 4.98 ★ (420+ Repairs)',
        eta: '14 – 18 MINS',
        inventory: ['High-Pressure Foam Jet Kit', 'Eco R32 Cylinders', 'Capacitor Banks', 'Brazing Torches'],
        ticker: '<strong>Job FLUX-7494:</strong> Daikin Inverter Split AC restored to 18°C in West Loop.',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
      },
      south: {
        name: 'Tim Jenkins',
        avatar: 'SJ',
        cert: 'Laundry & Dishwasher Specialist • 4.92 ★ (390+ Repairs)',
        eta: '20 – 24 MINS',
        inventory: ['Direct-Drive Motors', 'Inlet Solenoid Valves', 'Dryer Heating Coils', 'Door Gaskets'],
        ticker: '<strong>Job FLUX-7495:</strong> Whirlpool Top-Load Washer bearing replaced in Oak Park.',
        image: './assets/img/worker.png'
      }
    };

    function selectZone(zoneKey) {
      var item = radarData[zoneKey];
      if (!item) return;

      zoneBtns.forEach(function(btn) {
        if (btn.getAttribute('data-zone') === zoneKey) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      if (techAvatar) techAvatar.textContent = item.avatar;
      if (techName) techName.textContent = item.name;
      if (techCert) techCert.textContent = item.cert;
      if (etaVal) etaVal.textContent = item.eta;
      if (tickerText) tickerText.innerHTML = item.ticker;

      if (invTags) {
        invTags.innerHTML = item.inventory.map(function(tag) {
          return '<span class="radar-inv-tag">' + tag + '</span>';
        }).join('');
      }

      if (mapImg) {
        mapImg.style.opacity = '0.3';
        setTimeout(function() {
          mapImg.src = item.image;
          mapImg.style.opacity = '1';
        }, 120);
      }
    }

    zoneBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var zoneKey = btn.getAttribute('data-zone');
        selectZone(zoneKey);
      });
    });
  }

  function initContactPage() {
    var pillContainer = document.getElementById('contactTypePills');
    if (!pillContainer) return;
    var pills = pillContainer.querySelectorAll('.contact-type-pill');
    var selectCategory = document.getElementById('applianceCategorySelect');

    pills.forEach(function(pill) {
      pill.addEventListener('click', function() {
        pills.forEach(function(p) { p.classList.remove('active'); });
        pill.classList.add('active');
        var req = pill.getAttribute('data-req');
        if (selectCategory) {
          if (req === 'emergency') {
            var timingSelect = document.querySelector('.contact-form-group select:not(#applianceCategorySelect)');
            if (timingSelect) timingSelect.selectedIndex = 0;
          } else if (req === 'amc') {
            for (var i = 0; i < selectCategory.options.length; i++) {
              if (selectCategory.options[i].text.indexOf('AMC') !== -1) {
                selectCategory.selectedIndex = i;
                break;
              }
            }
          }
        }
      });
    });
  }

  function initAll() {
    initHeroSlider();
    initDiagnosticAnalyzer();
    initDispatchRadar();
    initFAQ();
    initPricing();
    initCountdown();
    initServiceDetail();
    initBlogDetail();
    initNewsletter();
    initServiceGrid();
    initTeamGrid();
    initContactPage();
    setTimeout(initScrollAnimations, 200);
  }

  window.MotorWorks = window.MotorWorks || {};
  window.MotorWorks.initAll = initAll;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();