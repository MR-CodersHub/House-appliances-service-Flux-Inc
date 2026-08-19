(function() {
  window.MotorWorks = window.MotorWorks || {};

  var STORAGE_KEY_ADMIN_DATA = 'flux-admin-data';
  var STORAGE_KEY_USER_DATA = 'flux-user-data';

  // Default mock datasets tailored for Flux Inc Home Appliance Repair
  var defaultData = {
    currentUser: {
      name: 'Sarah Miller',
      email: 'sarah.miller@example.com',
      phone: '+1 (312) 555-0188',
      address: '742 Evergreen Terrace, Apt 4B, Chicago, IL 60622'
    },
    users: [
      { id: 1, name: 'Sarah Miller', email: 'sarah.m@example.com', role: 'Customer', appliances: 3, joined: 'Jan 2025', status: 'Active', zone: 'Downtown / Loop' },
      { id: 2, name: 'Priya Sharma', email: 'priya.s@example.com', role: 'Customer', appliances: 2, joined: 'Mar 2025', status: 'Active', zone: 'North Side' },
      { id: 3, name: 'Marcus Vance', email: 'marcus.v@example.com', role: 'Customer', appliances: 4, joined: 'Nov 2024', status: 'Active', zone: 'West Loop' },
      { id: 4, name: 'Jennifer Kim', email: 'jennifer.k@example.com', role: 'Customer', appliances: 2, joined: 'Feb 2025', status: 'Active', zone: 'South Loop' },
      { id: 5, name: 'Robert Lawson', email: 'robert.l@example.com', role: 'Customer', appliances: 1, joined: 'Apr 2025', status: 'Active', zone: 'Lincoln Park' },
      { id: 6, name: 'Amanda Sterling', email: 'amanda.s@example.com', role: 'Customer', appliances: 3, joined: 'May 2026', status: 'Active', zone: 'River North' }
    ],
    appointments: [
      { id: 'FLUX-749201', customer: 'Sarah Miller', appliance: 'Samsung Front-Load Washer (8kg)', service: 'Drum Bearing & Dampers Overhaul', date: '2026-08-19', time: '10:00 AM - 12:00 PM', status: 'Active', tech: 'David Miller', zone: 'Downtown Hub', eta: '14 Mins' },
      { id: 'FLUX-749202', customer: 'Priya Sharma', appliance: 'LG French-Door Refrigerator', service: 'Linear Inverter Compressor & R600a Refill', date: '2026-08-19', time: '12:30 PM - 02:30 PM', status: 'Pending', tech: 'Marcus Vance', zone: 'North Side Hub', eta: 'Scheduled' },
      { id: 'FLUX-749203', customer: 'Marcus Vance', appliance: 'Daikin 1.5 Ton Inverter Split AC', service: 'Deep Foam Jet Coil Pressure Service', date: '2026-08-18', time: '02:00 PM - 04:00 PM', status: 'Completed', tech: 'Elena Rostova', zone: 'West Loop Hub', eta: 'Completed' },
      { id: 'FLUX-749204', customer: 'Jennifer Kim', appliance: 'Whirlpool Top-Load Washer', service: 'Drain Pump Replacement & Solenoid Test', date: '2026-08-17', time: '01:00 PM - 03:00 PM', status: 'Completed', tech: 'Sarah Jenkins', zone: 'South Loop Hub', eta: 'Completed' },
      { id: 'FLUX-749205', customer: 'Robert Lawson', appliance: 'Bosch Series 6 Smart Dishwasher', service: 'Circulation Wash Pump Replacement', date: '2026-08-20', time: '03:30 PM - 05:30 PM', status: 'Active', tech: 'David Miller', zone: 'Lincoln Park Hub', eta: 'Tomorrow' }
    ],
    invoices: [
      { id: 'INV-8091', customer: 'Marcus Vance', service: 'Split AC Deep Foam Jet Wash', amount: '$49.00', date: 'Aug 18, 2026', status: 'Paid', method: 'Credit Card', appliance: 'Daikin Split AC' },
      { id: 'INV-8092', customer: 'Jennifer Kim', service: 'Washing Machine Drain Pump Fix', amount: '$79.00', date: 'Aug 17, 2026', status: 'Paid', method: 'Apple Pay', appliance: 'Whirlpool Top-Load' },
      { id: 'INV-8093', customer: 'Sarah Miller', service: 'Drum Bearing & Dampers Overhaul', amount: '$119.00', date: 'Aug 19, 2026', status: 'Paid', method: 'Credit Card', appliance: 'Samsung Front-Load Washer' },
      { id: 'INV-8094', customer: 'Priya Sharma', service: 'Fridge Inverter Compressor Swap', amount: '$189.00', date: 'Aug 19, 2026', status: 'Pending', method: 'Doorstep UPI / Card', appliance: 'LG French-Door Refrigerator' },
      { id: 'INV-8095', customer: 'Robert Lawson', service: 'Dishwasher Wash Pump Repair', amount: '$69.00', date: 'Aug 20, 2026', status: 'Pending', method: 'Pending', appliance: 'Bosch Smart Dishwasher' }
    ],
    userVehicles: [
      { id: 'APP-01', make: 'Samsung', model: 'EcoBubble Front-Load Washer (8kg)', year: '2024', vin: 'SN: WW80TA046AX', plate: 'LAUNDRY-01', mileage: '2.4 Yrs Old', lastService: 'Drum Bearing & Dampers (Aug 2026)', nextService: 'Annual Descaling AMC (Feb 2027)' },
      { id: 'APP-02', make: 'LG', model: 'InstaView French-Door Inverter Fridge', year: '2023', vin: 'SN: GR-X29FTQKL', plate: 'KITCHEN-02', mileage: '3.1 Yrs Old', lastService: 'R600a Gas & Defrost Sensor (Jun 2026)', nextService: 'Condenser Coil Cleaning (Dec 2026)' },
      { id: 'APP-03', make: 'Daikin', model: '1.5 Ton 5-Star Inverter Split AC', year: '2024', vin: 'SN: FTKM50TV', plate: 'CLIMATE-03', mileage: '1.8 Yrs Old', lastService: 'Deep Foam Jet Wash (May 2026)', nextService: 'Pre-Summer Service (Apr 2027)' }
    ],
    userHistory: [
      { id: 'DOC-901', date: 'Aug 19, 2026', vehicle: 'Samsung Front-Load Washer', service: 'Drum Bearing & Solenoid Overhaul', mileage: '2.4 Yrs', cost: '$119.00', status: 'Completed', tech: 'David Miller', warranty: '90 Days (Valid until Nov 19, 2026)' },
      { id: 'DOC-902', date: 'Jun 14, 2026', vehicle: 'LG French-Door Fridge', service: 'Defrost Thermostat & Gas Charging', mileage: '3.1 Yrs', cost: '$89.00', status: 'Completed', tech: 'Marcus Vance', warranty: '90 Days (Completed)' },
      { id: 'DOC-903', date: 'May 02, 2026', vehicle: 'Daikin Inverter Split AC', service: 'Deep Foam Jet Pressure Cleaning', mileage: '1.8 Yrs', cost: '$49.00', status: 'Completed', tech: 'Elena Rostova', warranty: '30 Days (Completed)' }
    ]
  };

  function getData() {
    var stored = localStorage.getItem(STORAGE_KEY_ADMIN_DATA);
    if (stored) {
      try { return JSON.parse(stored); } catch (e) { }
    }
    localStorage.setItem(STORAGE_KEY_ADMIN_DATA, JSON.stringify(defaultData));
    return defaultData;
  }

  function saveData(data) {
    localStorage.setItem(STORAGE_KEY_ADMIN_DATA, JSON.stringify(data));
  }

  function getBasePath() {
    var path = window.location.pathname;
    if (path.indexOf('/public/pages/') !== -1 || path.indexOf('/public/auth/') !== -1 || path.indexOf('/auth/admin/') !== -1 || path.indexOf('/auth/user/') !== -1) {
      return '../../';
    }
    return './';
  }

  // ── ADMIN DASHBOARD RENDERERS ─────────────────────────────────────────

  function renderAdminDashboard(container, section, data) {
    var basePath = getBasePath();

    if (section === 'dashboard') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Admin Operations Center</h1><p style="color:var(--steel);font-size:14px;">Fleet dispatch, technician routes, and service telemetry overview.</p></div>' +
          '<div style="display:flex;gap:10px;align-items:center;">' +
            '<button class="btn btn-solid" id="adminRefreshBtn" style="padding:8px 16px;font-size:12px;">Refresh Fleet Data</button>' +
          '</div>' +
        '</div>' +
        '<div class="dashboard-stats">' +
          '<div class="stat-card"><div class="stat-label">REGISTERED CUSTOMERS</div><div class="stat-value">' + data.users.length + '</div><div class="stat-change">+14% this month</div></div>' +
          '<div class="stat-card"><div class="stat-label">ACTIVE DISPATCHES</div><div class="stat-value">' + data.appointments.filter(function(a){return a.status !== 'Completed';}).length + '</div><div class="stat-change">4 en route now</div></div>' +
          '<div class="stat-card"><div class="stat-label">COMPLETED FIXES (MTD)</div><div class="stat-value">342</div><div class="stat-change">96.8% First-visit fix</div></div>' +
          '<div class="stat-card"><div class="stat-label">CUSTOMER RATING</div><div class="stat-value">4.9 ★</div><div class="stat-change">Out of 5.0 (890+ reviews)</div></div>' +
        '</div>' +
        '<div class="dashboard-grid-2">' +
          '<div class="dashboard-widget"><h3>Active Doorstep Dispatches</h3><table class="dashboard-table"><thead><tr><th>Job ID</th><th>Customer</th><th>Appliance</th><th>Assigned Tech</th><th>Status</th></tr></thead><tbody>' +
          data.appointments.slice(0, 5).map(function(a) {
            var stClass = a.status === 'Completed' ? 'completed' : (a.status === 'Pending' ? 'pending' : 'active');
            return '<tr><td><strong>' + a.id + '</strong></td><td>' + a.customer + '</td><td>' + a.appliance + '</td><td>' + a.tech + '</td><td><span class="status-badge ' + stClass + '">' + a.status + '</span></td></tr>';
          }).join('') +
          '</tbody></table></div>' +
          '<div class="dashboard-widget"><h3>Real-Time Dispatch Activity</h3>' +
            '<div class="activity-item"><div class="activity-dot"></div><div><div class="activity-text"><strong>David Miller</strong> arrived at 742 Evergreen Terrace (Job FLUX-749201)</div><div class="activity-time">3 mins ago</div></div></div>' +
            '<div class="activity-item"><div class="activity-dot"></div><div><div class="activity-text">New repair request: Inverter Fridge Cooling Loss from Priya Sharma</div><div class="activity-time">12 mins ago</div></div></div>' +
            '<div class="activity-item"><div class="activity-dot"></div><div><div class="activity-text">Service Completed: Split AC Deep Foam Jet Service for Marcus Vance (FLUX-749203)</div><div class="activity-time">45 mins ago</div></div></div>' +
            '<div class="activity-item"><div class="activity-dot"></div><div><div class="activity-text">Payment captured: $119.00 from Sarah Miller for OEM Bearing Replacement</div><div class="activity-time">1 hour ago</div></div></div>' +
          '</div>' +
        '</div>' +
        '<div class="dashboard-widget" style="margin-top:24px;"><h3>Service Volume by Appliance Category</h3>' +
          '<div style="margin-top:16px;"><div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px;"><span>Washing Machines (Front-Load & Top-Load)</span><span style="color:var(--amber);">42% (144 Jobs)</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width:42%"></div></div></div>' +
          '<div style="margin-top:16px;"><div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px;"><span>Refrigerators & Inverter Freezers</span><span style="color:var(--amber);">31% (106 Jobs)</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width:31%"></div></div></div>' +
          '<div style="margin-top:16px;"><div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px;"><span>Air Conditioners (Split & Window AC Foam Jet)</span><span style="color:var(--amber);">27% (92 Jobs)</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width:27%"></div></div></div>' +
        '</div>';

      var refBtn = document.getElementById('adminRefreshBtn');
      if (refBtn) {
        refBtn.addEventListener('click', function() {
          if (window.MotorWorks.showToast) window.MotorWorks.showToast('Dispatch fleet telemetry refreshed!', 'success');
        });
      }
    } else if (section === 'users') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Customer Account Management</h1><p style="color:var(--steel);font-size:14px;">View registered customer profiles, linked appliances, and service histories.</p></div>' +
          '<button class="btn btn-solid" id="btnAddUserModal">+ Add New Customer</button>' +
        '</div>' +
        '<div class="dashboard-stats">' +
          '<div class="stat-card"><div class="stat-label">TOTAL CUSTOMERS</div><div class="stat-value">' + data.users.length + '</div></div>' +
          '<div class="stat-card"><div class="stat-label">ACTIVE AMC MEMBERS</div><div class="stat-value">28</div></div>' +
          '<div class="stat-card"><div class="stat-label">METRO ZONES COVERED</div><div class="stat-value">6 Zones</div></div>' +
        '</div>' +
        '<div class="dashboard-widget">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:16px;">' +
            '<h3>Customer Directory</h3>' +
            '<input type="text" id="userSearchInput" placeholder="Search customer or email..." style="background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:8px 16px;font-size:14px;outline:none;width:280px;border-radius:8px;">' +
          '</div>' +
          '<table class="dashboard-table" id="usersTable"><thead><tr><th>Customer</th><th>Email</th><th>Role</th><th>Appliances</th><th>Zone</th><th>Status</th><th>Action</th></tr></thead><tbody>' +
          data.users.map(function(u) {
            return '<tr><td><strong>' + u.name + '</strong></td><td>' + u.email + '</td><td><span class="status-badge ' + (u.role==='Admin'?'active':'') + '">' + u.role + '</span></td><td>' + u.appliances + ' Appliances</td><td>' + (u.zone || 'Chicago Metro') + '</td><td><span class="status-badge completed">' + u.status + '</span></td><td><button class="btn-delete-user btn" data-id="' + u.id + '" style="padding:4px 10px;font-size:11px;color:var(--error);border-color:var(--error);">Delete</button></td></tr>';
          }).join('') +
          '</tbody></table>' +
        '</div>';

      var searchInput = document.getElementById('userSearchInput');
      if (searchInput) {
        searchInput.addEventListener('input', function(e) {
          var query = e.target.value.toLowerCase();
          var rows = document.querySelectorAll('#usersTable tbody tr');
          rows.forEach(function(row) {
            var text = row.innerText.toLowerCase();
            row.style.display = text.indexOf(query) !== -1 ? '' : 'none';
          });
        });
      }

      document.querySelectorAll('.btn-delete-user').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var uid = parseInt(btn.getAttribute('data-id'), 10);
          data.users = data.users.filter(function(u) { return u.id !== uid; });
          saveData(data);
          renderAdminDashboard(container, 'users', data);
          if (window.MotorWorks.showToast) window.MotorWorks.showToast('Customer account removed.', 'success');
        });
      });

      var btnAdd = document.getElementById('btnAddUserModal');
      if (btnAdd) {
        btnAdd.addEventListener('click', function() {
          var name = prompt('Enter Customer Full Name:');
          if (!name || !name.trim()) return;
          var email = prompt('Enter Customer Email Address:');
          if (!email || !email.trim()) return;
          data.users.unshift({ id: Date.now(), name: name.trim(), email: email.trim(), role: 'Customer', appliances: 1, joined: 'Just Now', status: 'Active', zone: 'Downtown' });
          saveData(data);
          renderAdminDashboard(container, 'users', data);
          if (window.MotorWorks.showToast) window.MotorWorks.showToast('Customer registered successfully!', 'success');
        });
      }
    } else if (section === 'appointments') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Technician Dispatch &amp; Job Control</h1><p style="color:var(--steel);font-size:14px;">Monitor real-time technician routes, assign incoming repair requests, and update statuses.</p></div>' +
        '</div>' +
        '<div class="dashboard-stats">' +
          '<div class="stat-card"><div class="stat-label">TOTAL BOOKINGS</div><div class="stat-value">' + data.appointments.length + '</div></div>' +
          '<div class="stat-card"><div class="stat-label">ACTIVE / EN ROUTE</div><div class="stat-value">' + data.appointments.filter(function(a){return a.status==='Active';}).length + '</div></div>' +
          '<div class="stat-card"><div class="stat-label">PENDING ASSIGNMENT</div><div class="stat-value">' + data.appointments.filter(function(a){return a.status==='Pending';}).length + '</div></div>' +
          '<div class="stat-card"><div class="stat-label">COMPLETED FIXES</div><div class="stat-value">' + data.appointments.filter(function(a){return a.status==='Completed';}).length + '</div></div>' +
        '</div>' +
        '<div class="dashboard-widget">' +
          '<h3>Scheduled &amp; On-Demand Doorstep Jobs</h3>' +
          '<table class="dashboard-table" style="margin-top:16px;"><thead><tr><th>Job ID</th><th>Customer</th><th>Appliance</th><th>Service</th><th>Time Slot</th><th>Assigned Master Tech</th><th>Status</th></tr></thead><tbody>' +
          data.appointments.map(function(a) {
            return '<tr>' +
              '<td><strong>' + a.id + '</strong></td>' +
              '<td>' + a.customer + '</td>' +
              '<td>' + a.appliance + '</td>' +
              '<td>' + a.service + '</td>' +
              '<td>' + a.date + '<br><span style="font-size:11px;color:var(--steel);">' + a.time + '</span></td>' +
              '<td>' + a.tech + '</td>' +
              '<td>' +
                '<select class="apt-status-select" data-id="' + a.id + '" style="background:var(--panel-2);color:var(--bone);border:1px solid var(--line);padding:6px 10px;font-size:12px;border-radius:6px;">' +
                  '<option value="Pending"' + (a.status==='Pending'?' selected':'') + '>Pending</option>' +
                  '<option value="Active"' + (a.status==='Active'?' selected':'') + '>Active / En Route</option>' +
                  '<option value="Completed"' + (a.status==='Completed'?' selected':'') + '>Completed</option>' +
                '</select>' +
              '</td>' +
            '</tr>';
          }).join('') +
          '</tbody></table>' +
        '</div>';

      document.querySelectorAll('.apt-status-select').forEach(function(sel) {
        sel.addEventListener('change', function(e) {
          var aid = sel.getAttribute('data-id');
          var newStatus = e.target.value;
          var found = data.appointments.find(function(a) { return a.id === aid; });
          if (found) {
            found.status = newStatus;
            saveData(data);
            if (window.MotorWorks.showToast) window.MotorWorks.showToast('Job ' + aid + ' updated to ' + newStatus, 'success');
          }
        });
      });
    } else if (section === 'invoices') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Invoices &amp; Billing Ledger</h1><p style="color:var(--steel);font-size:14px;">Track repair payments, genuine spare parts billing, and warranty receipts.</p></div>' +
        '</div>' +
        '<div class="dashboard-stats">' +
          '<div class="stat-card"><div class="stat-label">TOTAL INVOICED</div><div class="stat-value">$84,230</div></div>' +
          '<div class="stat-card"><div class="stat-label">PAID STATEMENTS</div><div class="stat-value">' + data.invoices.filter(function(i){return i.status==='Paid';}).length + '</div></div>' +
          '<div class="stat-card"><div class="stat-label">PENDING PAYMENTS</div><div class="stat-value">' + data.invoices.filter(function(i){return i.status==='Pending';}).length + '</div></div>' +
        '</div>' +
        '<div class="dashboard-widget">' +
          '<h3>Billing Ledger</h3>' +
          '<table class="dashboard-table" style="margin-top:16px;"><thead><tr><th>Invoice #</th><th>Customer</th><th>Appliance / Service</th><th>Amount</th><th>Date</th><th>Method</th><th>Status</th><th>Action</th></tr></thead><tbody>' +
          data.invoices.map(function(inv) {
            return '<tr>' +
              '<td><strong>' + inv.id + '</strong></td>' +
              '<td>' + inv.customer + '</td>' +
              '<td>' + (inv.appliance ? '<strong>' + inv.appliance + '</strong><br>' : '') + '<span style="color:var(--steel);font-size:12px;">' + inv.service + '</span></td>' +
              '<td><strong style="color:var(--amber);">' + inv.amount + '</strong></td>' +
              '<td>' + inv.date + '</td>' +
              '<td>' + inv.method + '</td>' +
              '<td><span class="status-badge ' + (inv.status==='Paid'?'completed':'pending') + '">' + inv.status + '</span></td>' +
              '<td><button class="btn btn-download-inv" data-id="' + inv.id + '" style="padding:4px 10px;font-size:11px;">PDF</button></td>' +
            '</tr>';
          }).join('') +
          '</tbody></table>' +
        '</div>';

      document.querySelectorAll('.btn-download-inv').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var id = btn.getAttribute('data-id');
          if (window.MotorWorks.showToast) window.MotorWorks.showToast('Generating official invoice ' + id + '.pdf...', 'success');
        });
      });
    } else if (section === 'analytics') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Fleet &amp; Service Analytics</h1><p style="color:var(--steel);font-size:14px;">Doorstep technician performance, first-time fix rates, and warranty metrics.</p></div>' +
        '</div>' +
        '<div class="dashboard-stats">' +
          '<div class="stat-card"><div class="stat-label">AVG DOORSTEP ETA</div><div class="stat-value">38 Mins</div><div class="stat-change">-7 mins vs 45-min goal</div></div>' +
          '<div class="stat-card"><div class="stat-label">FIRST-TIME FIX RATE</div><div class="stat-value">96.8%</div><div class="stat-change">+2.1% YoY</div></div>' +
          '<div class="stat-card"><div class="stat-label">GENUINE OEM PARTS STOCK</div><div class="stat-value">99.2%</div><div class="stat-change">Direct factory warehouse</div></div>' +
          '<div class="stat-card"><div class="stat-label">90-DAY WARRANTY CLAIMS</div><div class="stat-value">1.4%</div><div class="stat-change">Industry lowest</div></div>' +
        '</div>' +
        '<div class="dashboard-grid-2">' +
          '<div class="dashboard-widget"><h3>Master Technician Field Ratings</h3>' +
            '<div class="activity-item"><div class="activity-dot"></div><div><div class="activity-text"><strong>David Miller</strong> — Senior Washer & Dryer Lead</div><div class="activity-time">54 Jobs Completed &bull; 4.96 ★ Quality Score</div></div></div>' +
            '<div class="activity-item"><div class="activity-dot"></div><div><div class="activity-text"><strong>Marcus Vance</strong> — Inverter Refrigeration Specialist</div><div class="activity-time">48 Jobs Completed &bull; 4.92 ★ Quality Score</div></div></div>' +
            '<div class="activity-item"><div class="activity-dot"></div><div><div class="activity-text"><strong>Elena Rostova</strong> — HVAC & Split AC Foam Jet Expert</div><div class="activity-time">41 Jobs Completed &bull; 4.98 ★ Quality Score</div></div></div>' +
          '</div>' +
          '<div class="dashboard-widget"><h3>Metropolitan Hub Coverage</h3>' +
            '<div style="margin-top:16px;"><div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px;"><span>Downtown / Loop Central Hub</span><span style="color:var(--amber);">18 Active Techs (100% Online)</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width:100%"></div></div></div>' +
            '<div style="margin-top:16px;"><div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px;"><span>North Side & Lincoln Park Hub</span><span style="color:var(--amber);">14 Active Techs (92% Online)</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width:92%"></div></div></div>' +
            '<div style="margin-top:16px;"><div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px;"><span>West Loop & River North Hub</span><span style="color:var(--amber);">12 Active Techs (88% Online)</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width:88%"></div></div></div>' +
          '</div>' +
        '</div>';
    } else if (section === 'settings') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Service Hub System Settings</h1><p style="color:var(--steel);font-size:14px;">Configure dispatch hotline, operating hours, and automated SMS alerts.</p></div>' +
        '</div>' +
        '<div class="dashboard-widget" style="max-width:680px;">' +
          '<form id="adminSettingsForm">' +
            '<div style="margin-bottom:20px;"><label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;">SERVICE HUB DISPLAY NAME</label><input type="text" value="Flux Inc — Precision Home Appliance Repair &amp; Diagnostics" style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;"></div>' +
            '<div style="margin-bottom:20px;"><label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;">24/7 TOLL-FREE DISPATCH HOTLINE</label><input type="text" value="+1 (800) 555-0199" style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;"></div>' +
            '<div style="margin-bottom:20px;"><label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;">AUTOMATED TECHNICIAN GPS SMS ALERTS</label><select style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;"><option value="enabled" selected>Enabled (Live ETA &amp; Arrival Alerts)</option><option value="disabled">Disabled</option></select></div>' +
            '<div style="margin-bottom:24px;"><label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;">DIAGNOSTIC VISIT BASE FEE</label><input type="text" value="$29.00" style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;"></div>' +
            '<button type="submit" class="btn btn-solid">Save System Settings</button>' +
          '</form>' +
        '</div>';

      var settingsForm = document.getElementById('adminSettingsForm');
      if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
          e.preventDefault();
          if (window.MotorWorks.showToast) window.MotorWorks.showToast('Service Hub settings updated successfully!', 'success');
        });
      }
    }
  }

  // ── CUSTOMER / USER DASHBOARD RENDERERS ────────────────────────────────

  function renderUserDashboard(container, section, data) {
    var basePath = getBasePath();
    var activeJob = data.appointments.find(function(a) { return a.status === 'Active'; }) || data.appointments[0];

    if (section === 'dashboard') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Customer Portal</h1><p style="color:var(--steel);font-size:14px;">Welcome back, ' + data.currentUser.name + '. Manage your home appliances and live repair requests.</p></div>' +
          '<div style="display:flex;gap:10px;">' +
            '<a href="#new-request" class="btn btn-solid user-nav-cta" data-target="new-request" style="padding:9px 20px;font-size:13px;">+ Request New Repair</a>' +
          '</div>' +
        '</div>' +
        '<div class="dashboard-stats">' +
          '<div class="stat-card"><div class="stat-label">REGISTERED APPLIANCES</div><div class="stat-value">' + data.userVehicles.length + '</div><div class="stat-change">All under active warranty</div></div>' +
          '<div class="stat-card"><div class="stat-label">ACTIVE SERVICE DISPATCH</div><div class="stat-value">' + (activeJob ? '1 En Route' : '0') + '</div><div class="stat-change" style="color:var(--amber); font-weight:600;">ETA: 14 Mins</div></div>' +
          '<div class="stat-card"><div class="stat-label">COMPLETED FIXES</div><div class="stat-value">' + data.userHistory.length + '</div><div class="stat-change">100% Genuine OEM Spares</div></div>' +
          '<div class="stat-card"><div class="stat-label">ACTIVE 90-DAY WARRANTY</div><div class="stat-value">Valid</div><div class="stat-change">Coverage active</div></div>' +
        '</div>' +
        
        // Live Active Tracking Banner
        (activeJob ?
        '<div class="dashboard-widget" style="border-left:4px solid var(--amber); background: linear-gradient(135deg, rgba(0,130,251,0.08), rgba(28,43,51,0.6));">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px;margin-bottom:16px;">' +
            '<div>' +
              '<span class="sec-tag" style="margin-bottom:4px;">● LIVE DISPATCH TELEMETRY IN PROGRESS</span>' +
              '<h3 style="margin:4px 0 6px;font-size:20px;">' + activeJob.appliance + ' — ' + activeJob.service + '</h3>' +
              '<p style="color:var(--steel);font-size:14px;">Technician <strong>' + activeJob.tech + '</strong> is en route to <strong>' + data.currentUser.address + '</strong>.</p>' +
            '</div>' +
            '<div style="text-align:right;">' +
              '<span style="display:inline-block;padding:6px 14px;border-radius:999px;background:var(--amber);color:#fff;font-size:12px;font-weight:700;">ETA: 14 MINS</span>' +
              '<div style="margin-top:6px;font-size:12px;color:var(--steel);">Job Reference: <strong>' + activeJob.id + '</strong></div>' +
            '</div>' +
          '</div>' +
          '<div style="display:flex;gap:10px;margin-top:14px;">' +
            '<a href="#tracking" class="btn btn-solid user-nav-cta" data-target="tracking" style="padding:6px 16px;font-size:12px;">View Live GPS Map &amp; Tech Details ↗</a>' +
            '<a href="tel:+18005550199" class="btn" style="padding:6px 16px;font-size:12px;">Call Technician</a>' +
          '</div>' +
        '</div>' : '') +

        '<div class="dashboard-grid-2">' +
          '<div class="dashboard-widget"><h3>My Household Appliances</h3><table class="dashboard-table"><thead><tr><th>Appliance</th><th>Last Service</th><th>Next AMC Check</th></tr></thead><tbody>' +
          data.userVehicles.map(function(v) {
            return '<tr><td><strong>' + v.make + ' ' + v.model + '</strong> (' + v.year + ')</td><td>' + v.lastService + '</td><td><span style="color:var(--amber);">' + v.nextService + '</span></td></tr>';
          }).join('') +
          '</tbody></table></div>' +
          '<div class="dashboard-widget"><h3>Recent Invoices &amp; Warranty</h3><table class="dashboard-table"><thead><tr><th>Invoice #</th><th>Appliance</th><th>Amount</th><th>Status</th></tr></thead><tbody>' +
          data.invoices.slice(0, 3).map(function(inv) {
            return '<tr><td><strong>' + inv.id + '</strong></td><td>' + inv.service + '</td><td><strong style="color:var(--amber);">' + inv.amount + '</strong></td><td><span class="status-badge ' + (inv.status==='Paid'?'completed':'pending') + '">' + inv.status + '</span></td></tr>';
          }).join('') +
          '</tbody></table></div>' +
        '</div>';

      // Attach internal switchers
      container.querySelectorAll('.user-nav-cta').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          var target = btn.getAttribute('data-target');
          switchUserSection(target);
        });
      });
    } else if (section === 'new-request') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Submit Repair Request</h1><p style="color:var(--steel);font-size:14px;">Book an on-demand doorstep visit for washing machines, refrigerators, and ACs.</p></div>' +
        '</div>' +
        '<div class="dashboard-widget" style="max-width:760px;">' +
          '<form id="customerRequestForm">' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">' +
              '<div>' +
                '<label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">APPLIANCE TYPE *</label>' +
                '<select id="reqApplianceType" required style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;">' +
                  '<option value="Washing Machine">Washing Machine (Front / Top Load)</option>' +
                  '<option value="Refrigerator">Refrigerator &amp; Inverter Freezer</option>' +
                  '<option value="Air Conditioner">Split / Window Air Conditioner</option>' +
                  '<option value="Clothes Dryer">Clothes Dryer</option>' +
                  '<option value="Microwave & Oven">Microwave &amp; Smart Oven</option>' +
                  '<option value="Dishwasher">Dishwasher</option>' +
                '</select>' +
              '</div>' +
              '<div>' +
                '<label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">BRAND &amp; MODEL *</label>' +
                '<input type="text" id="reqBrand" placeholder="e.g. Samsung EcoBubble, LG InstaView, Daikin" required style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;">' +
              '</div>' +
            '</div>' +
            '<div style="margin-bottom:20px;">' +
              '<label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">ISSUE / SYMPTOMS / ERROR CODE *</label>' +
              '<textarea id="reqSymptoms" rows="4" placeholder="Describe what is happening (e.g. not draining, loud drum noise, fridge not cooling, AC water leakage, Error 4E/dE)..." required style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;"></textarea>' +
            '</div>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">' +
              '<div>' +
                '<label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">PREFERRED DATE *</label>' +
                '<input type="date" id="reqDate" value="2026-08-20" required style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;">' +
              '</div>' +
              '<div>' +
                '<label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">ARRIVAL TIME WINDOW *</label>' +
                '<select id="reqTimeSlot" required style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;">' +
                  '<option value="08:00 AM - 10:00 AM">08:00 AM – 10:00 AM (Morning Slot)</option>' +
                  '<option value="10:00 AM - 12:00 PM" selected>10:00 AM – 12:00 PM (Mid-Day)</option>' +
                  '<option value="01:00 PM - 03:00 PM">01:00 PM – 03:00 PM (Afternoon)</option>' +
                  '<option value="03:30 PM - 05:30 PM">03:30 PM – 05:30 PM (Late Afternoon)</option>' +
                  '<option value="06:00 PM - 08:00 PM">06:00 PM – 08:00 PM (Evening)</option>' +
                '</select>' +
              '</div>' +
            '</div>' +
            '<div style="margin-bottom:24px;">' +
              '<label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">DOORSTEP SERVICE ADDRESS *</label>' +
              '<input type="text" id="reqAddress" value="' + data.currentUser.address + '" required style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;">' +
            '</div>' +
            '<div style="display:flex;gap:12px;align-items:center;">' +
              '<button type="submit" class="btn btn-solid" style="padding:12px 28px;">Dispatch Master Technician ↗</button>' +
              '<span style="font-size:13px;color:var(--steel);">$29 Diagnostic Fee &bull; 90-Day Spares Warranty</span>' +
            '</div>' +
          '</form>' +
        '</div>';

      var form = document.getElementById('customerRequestForm');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          var appType = document.getElementById('reqApplianceType').value;
          var brand = document.getElementById('reqBrand').value;
          var symptoms = document.getElementById('reqSymptoms').value;
          var date = document.getElementById('reqDate').value;
          var time = document.getElementById('reqTimeSlot').value;
          var refId = 'FLUX-' + Math.floor(100000 + Math.random() * 900000);

          data.appointments.unshift({
            id: refId,
            customer: data.currentUser.name,
            appliance: brand + ' ' + appType,
            service: symptoms.substring(0, 32) + '...',
            date: date,
            time: time,
            status: 'Active',
            tech: 'David Miller',
            zone: 'Downtown Hub',
            eta: '18 Mins'
          });
          saveData(data);

          if (window.MotorWorks.showToast) window.MotorWorks.showToast('Repair request submitted! Technician dispatched: ' + refId, 'success');
          switchUserSection('tracking');
        });
      }
    } else if (section === 'tracking') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Live Technician Dispatch &amp; Arrival Tracking</h1><p style="color:var(--steel);font-size:14px;">Real-time GPS telemetry and multi-stage repair workflow tracker.</p></div>' +
        '</div>' +
        '<div class="dashboard-widget" style="border-top:3px solid var(--amber);">' +
          '<div style="display:grid;grid-template-columns:2fr 1fr;gap:28px;align-items:center;flex-wrap:wrap;">' +
            '<div>' +
              '<div style="display:inline-flex;align-items:center;gap:8px;padding:4px 12px;border-radius:999px;background:rgba(0,130,251,0.15);color:var(--amber);font-size:12px;font-weight:700;margin-bottom:12px;">' +
                '<span class="eyebrow-dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--amber);"></span> LIVE DISPATCH STATUS' +
              '</div>' +
              '<h2 style="font-size:24px;margin-bottom:6px;">Technician En Route to Your Doorstep</h2>' +
              '<p style="color:var(--steel);font-size:15px;line-height:1.6;">Destination: <strong>' + data.currentUser.address + '</strong><br>Estimated Arrival Window: <strong style="color:var(--amber);">12 – 18 Minutes</strong></p>' +
            '</div>' +
            '<div style="background:var(--panel-2);padding:20px;border-radius:16px;border:1px solid var(--line);text-align:center;">' +
              '<div style="font-size:12px;color:var(--steel);font-family:\'Raleway\',sans-serif;letter-spacing:0.1em;text-transform:uppercase;">Assigned Specialist</div>' +
              '<h3 style="font-size:18px;margin:8px 0 2px;">David Miller</h3>' +
              '<div style="font-size:12px;color:var(--amber);font-weight:600;margin-bottom:12px;">EPA Universal Master Tech &bull; 4.96 ★</div>' +
              '<a href="tel:+18005550199" class="btn btn-solid" style="padding:6px 16px;font-size:12px;width:100%;">Call Technician</a>' +
            '</div>' +
          '</div>' +

          // 4-Stage Step Tracker
          '<div style="margin-top:36px;padding-top:24px;border-top:1px solid var(--line);">' +
            '<div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:16px;text-align:center;">' +
              '<div style="padding:16px;background:var(--panel-2);border-radius:14px;border:1px solid var(--success);">' +
                '<div style="color:var(--success);font-weight:700;font-size:13px;margin-bottom:4px;">✓ STEP 1</div>' +
                '<div style="font-weight:600;font-size:14px;">Request Confirmed</div>' +
                '<div style="font-size:11px;color:var(--steel);margin-top:2px;">Job ID: ' + (activeJob ? activeJob.id : 'FLUX-749201') + '</div>' +
              '</div>' +
              '<div style="padding:16px;background:rgba(0,130,251,0.12);border-radius:14px;border:2px solid var(--amber);">' +
                '<div style="color:var(--amber);font-weight:700;font-size:13px;margin-bottom:4px;">● STEP 2 (ACTIVE)</div>' +
                '<div style="font-weight:600;font-size:14px;">Tech En Route</div>' +
                '<div style="font-size:11px;color:var(--steel);margin-top:2px;">ETA 14 Mins</div>' +
              '</div>' +
              '<div style="padding:16px;background:var(--panel-2);border-radius:14px;border:1px solid var(--line);opacity:0.7;">' +
                '<div style="color:var(--steel);font-weight:700;font-size:13px;margin-bottom:4px;">STEP 3</div>' +
                '<div style="font-weight:600;font-size:14px;">Doorstep Diagnostics</div>' +
                '<div style="font-size:11px;color:var(--steel);margin-top:2px;">OEM Spares Check</div>' +
              '</div>' +
              '<div style="padding:16px;background:var(--panel-2);border-radius:14px;border:1px solid var(--line);opacity:0.7;">' +
                '<div style="color:var(--steel);font-weight:700;font-size:13px;margin-bottom:4px;">STEP 4</div>' +
                '<div style="font-weight:600;font-size:14px;">90-Day Warranty</div>' +
                '<div style="font-size:11px;color:var(--steel);margin-top:2px;">Digital Receipt</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    } else if (section === 'vehicles' || section === 'appliances') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>My Household Appliances</h1><p style="color:var(--steel);font-size:14px;">Register appliances to track maintenance intervals, serial numbers, and AMC warranty status.</p></div>' +
          '<button class="btn btn-solid" id="btnAddApplianceModal">+ Register New Appliance</button>' +
        '</div>' +
        '<div class="vehicle-cards-grid">' +
        data.userVehicles.map(function(v) {
          return '<div class="dashboard-widget" style="border-top:3px solid var(--amber);">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">' +
              '<h3 style="margin:0;">' + v.year + ' ' + v.make + ' ' + v.model + '</h3>' +
              '<span style="font-family:\'Raleway\',monospace;font-size:11px;background:var(--panel-2);padding:4px 8px;color:var(--amber);border-radius:6px;">' + v.plate + '</span>' +
            '</div>' +
            '<div style="font-size:13px;color:var(--steel);line-height:1.7;margin-bottom:20px;">' +
              '<div><strong>Serial:</strong> ' + v.vin + '</div>' +
              '<div><strong>Age / Lifespan:</strong> ' + v.mileage + '</div>' +
              '<div><strong>Last Service:</strong> ' + v.lastService + '</div>' +
              '<div><strong>Next Due:</strong> <span style="color:var(--amber);">' + v.nextService + '</span></div>' +
            '</div>' +
            '<div style="display:flex;gap:10px;">' +
              '<button class="btn btn-solid btn-book-for-app" data-name="' + v.make + ' ' + v.model + '" style="padding:6px 14px;font-size:12px;">Request Service</button>' +
              '<button class="btn btn-delete-appliance" data-id="' + v.id + '" style="padding:6px 14px;font-size:12px;color:var(--error);border-color:var(--error);">Remove</button>' +
            '</div>' +
          '</div>';
        }).join('') +
        '</div>';

      document.querySelectorAll('.btn-book-for-app').forEach(function(btn) {
        btn.addEventListener('click', function() {
          switchUserSection('new-request');
        });
      });

      document.querySelectorAll('.btn-delete-appliance').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var aid = btn.getAttribute('data-id');
          data.userVehicles = data.userVehicles.filter(function(v) { return v.id !== aid; });
          saveData(data);
          renderUserDashboard(container, 'vehicles', data);
          if (window.MotorWorks.showToast) window.MotorWorks.showToast('Appliance removed from account', 'success');
        });
      });

      var btnAddApp = document.getElementById('btnAddApplianceModal');
      if (btnAddApp) {
        btnAddApp.addEventListener('click', function() {
          var make = prompt('Enter Appliance Brand (e.g. Samsung, LG, Whirlpool, Bosch, Daikin):');
          if (!make || !make.trim()) return;
          var model = prompt('Enter Model & Type (e.g. Front-Load Washer 8kg, 1.5T Inverter Split AC):');
          if (!model || !model.trim()) return;
          var year = prompt('Enter Purchase Year (e.g. 2024):') || '2024';
          data.userVehicles.push({
            id: 'APP-' + Date.now(),
            make: make.trim(),
            model: model.trim(),
            year: year.trim(),
            vin: 'SN: FLX' + Math.random().toString(36).substring(2, 10).toUpperCase(),
            plate: 'APP-' + Math.floor(100 + Math.random() * 900),
            mileage: '1 Yr Old',
            lastService: 'Initial Diagnostics Registration',
            nextService: 'Annual AMC Check (6 Mos)'
          });
          saveData(data);
          renderUserDashboard(container, 'vehicles', data);
          if (window.MotorWorks.showToast) window.MotorWorks.showToast('Appliance successfully registered!', 'success');
        });
      }
    } else if (section === 'history') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Repair History &amp; Service Dockets</h1><p style="color:var(--steel);font-size:14px;">Signed master technician dockets, replaced OEM parts records, and digital warranty certificates.</p></div>' +
        '</div>' +
        '<div class="dashboard-widget">' +
          '<h3>Completed Doorstep Service Dockets</h3>' +
          '<table class="dashboard-table" style="margin-top:16px;"><thead><tr><th>Date</th><th>Appliance</th><th>Service Performed</th><th>Technician</th><th>Warranty Status</th><th>Total Paid</th><th>Digital Docket</th></tr></thead><tbody>' +
          data.userHistory.map(function(h, idx) {
            return '<tr>' +
              '<td>' + h.date + '</td>' +
              '<td><strong>' + h.vehicle + '</strong></td>' +
              '<td>' + h.service + '</td>' +
              '<td>' + h.tech + '</td>' +
              '<td><span style="color:var(--amber);font-weight:600;">' + h.warranty + '</span></td>' +
              '<td><strong style="color:var(--amber);">' + h.cost + '</strong></td>' +
              '<td><button class="btn btn-view-docket" data-idx="' + idx + '" style="padding:4px 10px;font-size:11px;">View Docket</button></td>' +
            '</tr>';
          }).join('') +
          '</tbody></table>' +
        '</div>';

      document.querySelectorAll('.btn-view-docket').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var idx = btn.getAttribute('data-idx');
          var item = data.userHistory[idx];
          alert('FLUX INC OFFICIAL SERVICE DOCKET #' + item.id + '\n\nDate: ' + item.date + '\nAppliance: ' + item.vehicle + '\nService: ' + item.service + '\nTechnician: ' + item.tech + '\n40-Point Electronic Diagnostic: PASSED\nOEM Spares Installed: Factory Sealed & Verified\nWarranty Certificate: 90-Day Replacement Active');
        });
      });
    } else if (section === 'invoices') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>My Invoices &amp; Receipts</h1><p style="color:var(--steel);font-size:14px;">Download itemized billing receipts and parts warranty certificates for your records.</p></div>' +
        '</div>' +
        '<div class="dashboard-widget">' +
          '<h3>Billing Statements</h3>' +
          '<table class="dashboard-table" style="margin-top:16px;"><thead><tr><th>Invoice #</th><th>Date</th><th>Appliance / Service</th><th>Amount</th><th>Status</th><th>Receipt</th></tr></thead><tbody>' +
          data.invoices.map(function(inv) {
            return '<tr>' +
              '<td><strong>' + inv.id + '</strong></td>' +
              '<td>' + inv.date + '</td>' +
              '<td>' + (inv.appliance ? '<strong>' + inv.appliance + '</strong><br>' : '') + '<span style="color:var(--steel);font-size:12px;">' + inv.service + '</span></td>' +
              '<td><strong style="color:var(--amber);">' + inv.amount + '</strong></td>' +
              '<td><span class="status-badge ' + (inv.status==='Paid'?'completed':'pending') + '">' + inv.status + '</span></td>' +
              '<td><button class="btn btn-download-inv" data-id="' + inv.id + '" style="padding:4px 10px;font-size:11px;">Download PDF</button></td>' +
            '</tr>';
          }).join('') +
          '</tbody></table>' +
        '</div>';

      document.querySelectorAll('.btn-download-inv').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var id = btn.getAttribute('data-id');
          if (window.MotorWorks.showToast) window.MotorWorks.showToast('Downloading official invoice ' + id + '.pdf...', 'success');
        });
      });
    } else if (section === 'profile') {
      container.innerHTML =
        '<div class="dashboard-header">' +
          '<div><h1>Profile &amp; Doorstep Address</h1><p style="color:var(--steel);font-size:14px;">Update personal contact info, doorstep service address, and SMS dispatch alert preferences.</p></div>' +
        '</div>' +
        '<div class="dashboard-widget" style="max-width:680px;">' +
          '<form id="userProfileForm">' +
            '<div class="profile-form-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">' +
              '<div><label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">FIRST NAME</label><input type="text" value="Sarah" style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;"></div>' +
              '<div><label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">LAST NAME</label><input type="text" value="Miller" style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;"></div>' +
            '</div>' +
            '<div style="margin-bottom:20px;"><label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">EMAIL ADDRESS</label><input type="email" value="' + data.currentUser.email + '" style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;"></div>' +
            '<div style="margin-bottom:20px;"><label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">PHONE NUMBER (FOR DISPATCH SMS)</label><input type="tel" value="' + data.currentUser.phone + '" style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;"></div>' +
            '<div style="margin-bottom:20px;"><label style="display:block;font-size:12px;font-family:\'Raleway\',monospace;color:var(--steel);margin-bottom:8px;font-weight:700;">PRIMARY DOORSTEP SERVICE ADDRESS</label><input type="text" value="' + data.currentUser.address + '" style="width:100%;background:var(--panel-2);border:1px solid var(--line);color:var(--bone);padding:10px 14px;font-size:14px;outline:none;border-radius:8px;"></div>' +
            '<button type="submit" class="btn btn-solid">Save Profile &amp; Address</button>' +
          '</form>' +
        '</div>';

      var profileForm = document.getElementById('userProfileForm');
      if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
          e.preventDefault();
          if (window.MotorWorks.showToast) window.MotorWorks.showToast('Profile & service address updated successfully!', 'success');
        });
      }
    }
  }

  function switchUserSection(sec) {
    var container = document.querySelector('.dashboard-main');
    if (!container) return;
    var data = getData();
    var navLinks = document.querySelectorAll('.dashboard-sidebar .sidebar-nav a');
    navLinks.forEach(function(l) {
      if (l.getAttribute('data-section') === sec || (sec === 'new-request' && l.getAttribute('data-section') === 'new-request') || (sec === 'tracking' && l.getAttribute('data-section') === 'tracking')) {
        l.classList.add('active');
      } else {
        l.classList.remove('active');
      }
    });
    renderUserDashboard(container, sec, data);
  }

  // ── INIT DASHBOARD HANDLER ───────────────────────────────────────────

  function initDashboards() {
    var main = document.querySelector('.dashboard-main');
    if (!main) return;

    var data = getData();
    var isAdmin = window.location.pathname.indexOf('admin-dashboard.html') !== -1 || window.location.pathname.indexOf('/auth/admin/') !== -1;
    var navLinks = document.querySelectorAll('.dashboard-sidebar .sidebar-nav a');

    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var sec = link.getAttribute('data-section');
        if (!sec) return; // Back to Site link
        e.preventDefault();

        navLinks.forEach(function(l) { l.classList.remove('active'); });
        link.classList.add('active');

        if (isAdmin) {
          renderAdminDashboard(main, sec, data);
        } else {
          renderUserDashboard(main, sec, data);
        }
      });
    });

    // Render default 'dashboard' section initially
    if (isAdmin) {
      renderAdminDashboard(main, 'dashboard', data);
    } else {
      renderUserDashboard(main, 'dashboard', data);
    }
  }

  window.MotorWorks.initDashboards = initDashboards;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboards);
  } else {
    initDashboards();
  }
})();
