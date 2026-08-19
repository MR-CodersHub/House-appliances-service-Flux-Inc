(function () {
  var currentStep = 1;
  var maxStep = 4;
  var selectedTimeSlot = '';

  function getBasePath() {
    var path = window.location.pathname;
    if (path.indexOf('/public/pages/') !== -1 || path.indexOf('/public/auth/') !== -1 || path.indexOf('/auth/') !== -1) {
      return '../../';
    }
    return './';
  }

  function initBooking() {
    var form = document.getElementById('bookingForm');
    var dateInput = document.getElementById('bookingDate');
    var serviceSelect = document.getElementById('bookingService');
    if (!form) return;

    // Set min date to today
    if (dateInput) {
      var today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }

    // Populate service options if data is available
    if (serviceSelect && window.MotorWorks && window.MotorWorks.services) {
      serviceSelect.innerHTML = '<option value="">-- Select a Service --</option>' +
        window.MotorWorks.services.map(function (s) {
          return '<option value="' + s.id + '" data-title="' + s.title + '" data-code="' + s.code + '">' + s.title + ' (' + s.code + ')</option>';
        }).join('');
    }

    // Auto-select service if passed in URL query
    var urlParams = new URLSearchParams(window.location.search);
    var preselectedService = urlParams.get('service');
    if (preselectedService && serviceSelect) {
      serviceSelect.value = preselectedService;
    }

    // Setup step navigation buttons
    var nextBtns = form.querySelectorAll('.btn-next');
    var prevBtns = form.querySelectorAll('.btn-prev');

    nextBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (validateStep(currentStep)) {
          goToStep(currentStep + 1);
        }
      });
    });

    prevBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        goToStep(currentStep - 1);
      });
    });

    // Time slot buttons
    var slotBtns = form.querySelectorAll('.time-slot-btn');
    slotBtns.forEach(function (slot) {
      slot.addEventListener('click', function () {
        slotBtns.forEach(function (b) { b.classList.remove('selected'); });
        slot.classList.add('selected');
        selectedTimeSlot = slot.dataset.time || slot.textContent.trim();
        updateSummary();
        var hiddenInput = document.getElementById('selectedTimeSlotInput');
        if (hiddenInput) hiddenInput.value = selectedTimeSlot;
        var group = slot.closest('.form-group');
        if (group) group.classList.remove('error');
      });
    });

    // Live update summary on input change
    form.querySelectorAll('input, select, textarea').forEach(function (input) {
      input.addEventListener('change', updateSummary);
      input.addEventListener('keyup', updateSummary);
    });

    // Form submit
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateStep(currentStep)) return;

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing Booking...';
      }

      setTimeout(function () {
        if (window.MotorWorks && window.MotorWorks.showToast) {
          window.MotorWorks.showToast('Technician visit confirmed! Tracking link generated.', 'success');
        }

        // Show confirmation screen
        var formContainer = document.getElementById('bookingFormContainer');
        var successContainer = document.getElementById('bookingSuccessContainer');

        if (formContainer && successContainer) {
          formContainer.style.display = 'none';
          successContainer.style.display = 'block';

          // Populate success details
          var confRef = 'FLUX-' + Math.floor(100000 + Math.random() * 900000);
          var refEl = document.getElementById('confRefNum');
          if (refEl) refEl.textContent = confRef;
          var servEl = document.getElementById('confService');
          if (servEl) servEl.textContent = getSelectedServiceTitle();
          var dtEl = document.getElementById('confDateTime');
          if (dtEl) dtEl.textContent = (dateInput ? dateInput.value : '') + ' at ' + selectedTimeSlot;
          var appEl = document.getElementById('confVehicle') || document.getElementById('confAppliance');
          if (appEl) appEl.textContent = getApplianceString();
        }
      }, 1000);
    });

    updateSummary();
  }

  function validateStep(step) {
    var stepEl = document.querySelector('.booking-step[data-step="' + step + '"]');
    if (!stepEl) return true;

    var inputs = stepEl.querySelectorAll('input[required], select[required], textarea[required]');
    var valid = true;

    inputs.forEach(function (input) {
      var group = input.closest('.form-group');
      var errorEl = group ? group.querySelector('.form-error') : null;

      if (!input.value.trim()) {
        valid = false;
        if (group) group.classList.add('error');
        if (errorEl) errorEl.textContent = 'This field is required';
      } else {
        if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          valid = false;
          if (group) group.classList.add('error');
          if (errorEl) errorEl.textContent = 'Enter a valid email address';
        } else if (input.type === 'tel' && !/^[\d\s\-\+\(\)]{7,}$/.test(input.value)) {
          valid = false;
          if (group) group.classList.add('error');
          if (errorEl) errorEl.textContent = 'Enter a valid phone number';
        } else {
          if (group) group.classList.remove('error');
          if (errorEl) errorEl.textContent = '';
        }
      }
    });

    // Special check for time slot in Step 3
    if (step === 3 && !selectedTimeSlot) {
      valid = false;
      var slotGroup = document.getElementById('timeSlotGroup');
      if (slotGroup) {
        slotGroup.classList.add('error');
        var err = slotGroup.querySelector('.form-error');
        if (err) err.textContent = 'Please select a time slot';
      }
    }

    return valid;
  }

  function goToStep(step) {
    if (step < 1 || step > maxStep) return;

    var currentStepEl = document.querySelector('.booking-step[data-step="' + currentStep + '"]');
    var nextStepEl = document.querySelector('.booking-step[data-step="' + step + '"]');
    var stepIndicators = document.querySelectorAll('.step-indicator-item');

    if (currentStepEl) currentStepEl.classList.remove('active');
    if (nextStepEl) nextStepEl.classList.add('active');

    currentStep = step;

    stepIndicators.forEach(function (ind, idx) {
      if (idx + 1 === currentStep) {
        ind.classList.add('active');
        ind.classList.remove('completed');
      } else if (idx + 1 < currentStep) {
        ind.classList.add('completed');
        ind.classList.remove('active');
      } else {
        ind.classList.remove('active', 'completed');
      }
    });

    var bookingSection = document.getElementById('bookingFormSection');
    if (bookingSection) {
      window.scrollTo({ top: bookingSection.offsetTop - 80, behavior: 'smooth' });
    }
    updateSummary();
  }

  function getSelectedServiceTitle() {
    var select = document.getElementById('bookingService');
    if (!select || !select.value) return 'Not selected';
    var opt = select.options[select.selectedIndex];
    return opt ? opt.text : select.value;
  }

  function getApplianceString() {
    var type = (document.getElementById('applianceType') || document.getElementById('vehYear') || {}).value || '';
    var brand = (document.getElementById('applianceBrand') || document.getElementById('vehMake') || {}).value || '';
    var issue = (document.getElementById('applianceIssue') || document.getElementById('vehModel') || {}).value || '';
    if (!type && !brand && !issue) return 'Home Appliance (Standard Diagnostic)';
    return (type + ' ' + brand + (issue ? ' — ' + issue : '')).trim();
  }

  function updateSummary() {
    var sumService = document.getElementById('summaryService');
    var sumAppliance = document.getElementById('summaryAppliance') || document.getElementById('summaryVehicle');
    var sumDate = document.getElementById('summaryDate');
    var sumTime = document.getElementById('summaryTime');
    var dateVal = (document.getElementById('bookingDate') || {}).value;

    if (sumService) sumService.textContent = getSelectedServiceTitle();
    if (sumAppliance) sumAppliance.textContent = getApplianceString();
    if (sumDate) sumDate.textContent = dateVal || 'Not selected';
    if (sumTime) sumTime.textContent = selectedTimeSlot || 'Not selected';
  }

  window.MotorWorks = window.MotorWorks || {};
  window.MotorWorks.initBooking = initBooking;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBooking);
  } else {
    initBooking();
  }
})();
