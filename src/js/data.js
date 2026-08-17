(function() {
  window.MotorWorks = window.MotorWorks || {};

  window.MotorWorks.team = [
    {
      id: 'marcus-vance',
      name: 'Marcus Vance',
      role: 'Master Superbike Tech & Shop Lead',
      bio: 'Factory certified with 16+ years experience in European and Japanese superbikes, Dynojet tuning, and engine overhauls.',
      image: 'assets/img/men3.jpg'
    },
    {
      id: 'elena-rostova',
      name: 'Elena Rostova',
      role: 'ECU & Motorcycle Electronics Specialist',
      bio: 'Expert in quickshifters, electronic suspension, ABS modulators, ride-by-wire calibration, and stator charging systems.',
      image: 'assets/img/woman1.jpg'
    },
    {
      id: 'david-miller',
      name: 'David Miller',
      role: 'Workshop Operations Manager',
      bio: 'Oversees service bay workflow, rider consultations, genuine OEM parts sourcing, and rigorous safety road testing.',
      image: 'assets/img/men2.jpg'
    },
    {
      id: 'james-thorne',
      name: 'James Thorne',
      role: 'Chassis, Suspension & Track Setup Specialist',
      bio: 'Former club racer specializing in Öhlins and Showa fork rebuilding, custom monoshock valving, and high-speed wheel balancing.',
      image: 'assets/img/woman2.jpg'
    }
  ];

  window.MotorWorks.services = [
    {
      id: 'oil-filter',
      code: 'SVC / 01',
      title: '4T Synthetic Oil & Filter Service',
      category: 'maintenance',
      shortDesc: 'JASO MA2 synthetic fluids, OEM filter, clutch slack adjust, and 30-point safety check.',
      description: 'Protect your engine, transmission, and wet clutch with factory-approved JASO MA2 high-performance 4T synthetic oils tailored to high-revving motorcycle engines.',
      image: 'assets/img/service1.jpg',
      features: ['Motul 300V / Liqui Moly 4T Synthetic Oil', 'OEM Oil Filter & Crush Washer Replacement', 'Clutch & Throttle Free-Play Adjustment', 'Chain Tension, Lube & 30-Point Safety Check'],
      pricing: [
        { tier: 'Street Spec 4T', price: '$69', desc: 'Up to 3.5L Full Synthetic 10W-40/15W-50' },
        { tier: 'Factory Race Spec', price: '$109', desc: 'Motul 300V Ester Core Factory Formula' }
      ],
      faqs: [
        { q: 'How often should motorcycle oil be changed?', a: 'For modern high-performance motorcycles, we recommend changing engine oil every 3,000 to 5,000 miles or at the start of every riding season.' }
      ]
    },
    {
      id: 'brake-suspension',
      code: 'SVC / 02',
      title: 'Brakes, Monoshock & Fork Tuning',
      category: 'safety',
      shortDesc: 'Brembo pad overhaul, fork seals, high-temp fluid flush, and rider sag setup.',
      description: 'Comprehensive brake and suspension servicing for track and street bikes. Ensures razor-sharp stopping power, zero brake fade, and supple chassis damping.',
      image: 'assets/img/service2.jpg',
      features: ['Brembo Sintered / Organic Brake Pads', 'High-Temp DOT 5.1 / 4 Brake Fluid Flush', 'Fork Oil & Seal Inspection / Rebuild', 'Front & Rear Rider Sag & Preload Adjustment'],
      pricing: [
        { tier: 'Front & Rear Brake Flush', price: '$129', desc: 'Pads inspection, caliper clean & fresh fluid' },
        { tier: 'Complete Fork Rebuild & Setup', price: '$299', desc: 'New seals, bushings, synthetic fork oil & sag tune' }
      ],
      faqs: [
        { q: 'How often should motorcycle fork oil be replaced?', a: 'Fork oil should be refreshed every 12,000 to 15,000 miles or every 2 years to maintain consistent damping and seal life.' }
      ]
    },
    {
      id: 'chain-sprocket',
      code: 'SVC / 03',
      title: 'Chain, Sprockets & Drive Care',
      category: 'maintenance',
      shortDesc: 'Laser chain alignment, ultrasonic degreasing, tensioning, and sprocket replacement.',
      description: 'Keep your motorcycle drivetrain smooth and quiet with precision laser alignment, ultrasonic chain cleaning, high-adhesion lubrication, and heavy-duty X-ring chain replacement.',
      image: 'assets/img/service3.jpg',
      features: ['Laser Alignment of Rear Axle & Sprocket', 'Deep Ultrasonic Cleaning & Off-Road Degrease', 'DID / RK Gold X-Ring Chain Installation', 'Hardened Steel or Lightweight Alloy Sprockets'],
      pricing: [
        { tier: 'Chain Clean, Lube & Tension', price: '$49', desc: 'Ultrasonic deep clean, alignment & adjust' },
        { tier: 'Full Chain & Sprocket Kit', price: '$229', desc: 'New front/rear sprockets + DID X-Ring chain' }
      ],
      faqs: [
        { q: 'How often should a motorcycle chain be lubed and adjusted?', a: 'Lube your chain every 300–500 miles (or immediately after riding in rain) and inspect slack every 1,000 miles.' }
      ]
    },
    {
      id: 'computer-diagnostics',
      code: 'SVC / 04',
      title: 'ECU & Dyno Diagnostics',
      category: 'diagnostics',
      shortDesc: 'Dealership-level bike scanners, throttle sync, ABS calibration, and fueling maps.',
      description: 'Using dedicated motorcycle diagnostic scanners and digital throttle body synchronizers, we scan fault codes, calibrate ride-by-wire throttles, and optimize fuel mapping across all cylinders.',
      image: 'assets/img/service4.jpg',
      features: ['Motorcycle OBD Fault Code Scan', 'Digital Throttle Body Vacuum Synchronization', 'Quickshifter, Traction Control & ABS Reset', 'Live Sensor Data & Air-Fuel Ratio Analysis'],
      pricing: [
        { tier: 'Quick Scan & Health Report', price: '$79', desc: 'Full diagnostic scan & service light reset' },
        { tier: 'Advanced ECU Diagnostic & Sync', price: '$159', desc: 'Throttle sync, live sensor sweep & map check' }
      ],
      faqs: [
        { q: 'Can you read error codes on European and Japanese bikes?', a: 'Yes, our diagnostic tools support BMW Motorrad, Ducati, KTM, Aprilia, Triumph, Yamaha, Honda, Kawasaki, Suzuki, and Harley-Davidson.' }
      ]
    },
    {
      id: 'detailing-paint',
      code: 'SVC / 05',
      title: 'Ceramic Shield & Bike Detailing',
      category: 'cosmetic',
      shortDesc: 'Full fairing removal, engine degrease, paint correction, and ceramic protection.',
      description: 'Restore deep gloss and protect your motorcycle from road grime, chain fling, and UV damage with multi-stage paint correction and hydrophobic 9H ceramic coating.',
      image: 'assets/img/service5.jpg',
      features: ['Full Fairing & Tank Paint Correction', 'High-Temp Exhaust & Engine Header Polish', '3-Year Hydrophobic 9H Ceramic Shield', 'Chain Fling & Wheel Deep Degrease'],
      pricing: [
        { tier: 'Signature Motorcycle Detail', price: '$179', desc: 'Full wash, degrease, polish & sealant' },
        { tier: 'Ceramic Pro Bike Shield', price: '$449', desc: 'Full correction + 3-year ceramic protection' }
      ],
      faqs: [
        { q: 'Can ceramic coating be applied to matte motorcycle paint?', a: 'Yes, we use specialized matte ceramic coatings that protect without adding unwanted gloss.' }
      ]
    },
    {
      id: 'battery-electrical',
      code: 'SVC / 06',
      title: 'Stator, Regulator & Battery Care',
      category: 'electrical',
      shortDesc: 'Charging system diagnosis, stator load test, and lithium-ion upgrades.',
      description: 'Ensure reliable starts every time. We test stator AC voltage output, diagnose regulator-rectifier heat dissipation, find parasitic battery drain, and install lightweight lithium batteries.',
      image: 'assets/img/service6.jpg',
      features: ['Stator Output & Regulator-Rectifier Test', 'Parasitic Current Draw Detection', 'Lightweight Lithium-Ion Battery Upgrades', 'Auxiliary Lighting & Harness Wiring'],
      pricing: [
        { tier: 'Charging System Health Check', price: '$49', desc: 'Stator, RR & battery load test' },
        { tier: 'Lithium Battery & Install', price: '$179', desc: 'Includes lightweight battery & setup' }
      ],
      faqs: [
        { q: 'Why do motorcycle batteries fail quickly?', a: 'Infrequent riding and parasitic draw from immobilizers can drain small motorcycle batteries. A smart battery tender is strongly recommended.' }
      ]
    }
  ];

  window.MotorWorks.pricingPlans = {
    monthly: [
      {
        name: 'Rider Essentials',
        price: '$29',
        period: '/mo',
        save: null,
        description: 'Essential peace-of-mind maintenance for daily commuters and weekend riders.',
        features: ['1 Free 4T Synthetic Oil Service / Year', 'Free Computer Fault Scan Anytime', 'Free Chain Clean, Lube & Tension (Quarterly)', '10% Off Workshop Labor Rates', 'Priority Bay Scheduling'],
        featured: false
      },
      {
        name: 'Pro Track & Tourer',
        price: '$59',
        period: '/mo',
        save: 'Save $120/yr',
        description: 'Our most popular plan for enthusiastic riders, touring bikes & trackday pilots.',
        features: ['2 Free 4T Synthetic Oil Services / Year', 'Unlimited Chain Adjustments & Cleanings', 'Free Annual Brake Fluid & Fork Inspection', 'Free Pre-Ride & Pre-Track Safety Checks', '15% Off All OEM Parts & Labor'],
        featured: true
      },
      {
        name: 'Superbike Club',
        price: '$99',
        period: '/mo',
        save: null,
        description: 'Comprehensive VIP coverage for superbikes, custom builds & multi-bike garages.',
        features: ['Unlimited 4T Synthetic Oil Changes', '2 Free Throttle Sync & ECU Scans / Year', '20% Off All Repairs & Suspension Overhauls', 'Complimentary Trackday Transport / Towing (25 mi)', 'Dedicated Master Technician Advisor'],
        featured: false
      }
    ],
    annual: [
      {
        name: 'Rider Essentials',
        price: '$290',
        period: '/yr',
        save: '2 Months Free',
        description: 'Essential peace-of-mind maintenance for daily commuters and weekend riders.',
        features: ['1 Free 4T Synthetic Oil Service / Year', 'Free Computer Fault Scan Anytime', 'Free Chain Clean, Lube & Tension (Quarterly)', '10% Off Workshop Labor Rates', 'Priority Bay Scheduling'],
        featured: false
      },
      {
        name: 'Pro Track & Tourer',
        price: '$590',
        period: '/yr',
        save: 'Save $240/yr',
        description: 'Our most popular plan for enthusiastic riders, touring bikes & trackday pilots.',
        features: ['2 Free 4T Synthetic Oil Services / Year', 'Unlimited Chain Adjustments & Cleanings', 'Free Annual Brake Fluid & Fork Inspection', 'Free Pre-Ride & Pre-Track Safety Checks', '15% Off All OEM Parts & Labor'],
        featured: true
      },
      {
        name: 'Superbike Club',
        price: '$990',
        period: '/yr',
        save: 'Save $390/yr',
        description: 'Comprehensive VIP coverage for superbikes, custom builds & multi-bike garages.',
        features: ['Unlimited 4T Synthetic Oil Changes', '2 Free Throttle Sync & ECU Scans / Year', '20% Off All Repairs & Suspension Overhauls', 'Complimentary Trackday Transport / Towing (25 mi)', 'Dedicated Master Technician Advisor'],
        featured: false
      }
    ]
  };

  window.MotorWorks.blogPosts = [
    {
      id: 'motorcycle-chain-maintenance-guide',
      title: 'The Master Guide to Motorcycle Chain Cleaning, Tensioning & Alignment',
      category: 'Maintenance',
      date: 'May 14, 2026',
      readTime: '5 min read',
      excerpt: 'Learn the exact method for checking chain slack, using laser alignment tools, and preventing premature sprocket wear on high-torque motorcycles.',
      image: 'assets/img/blog1.jpg',
      content: '<p>Your motorcycle drive chain transfers massive horsepower and torque directly from the gearbox countershaft to the rear wheel. Proper chain slack and lubrication prevent snap failures and ensure smooth power delivery.</p>' +
        '<h3>1. Measuring Correct Chain Slack</h3>' +
        '<p>Always check chain tension at the midway point of the lower run with the bike on its side stand (or as specified in your owner\'s manual). Most street and sport bikes require between 25mm to 35mm of vertical movement. An overly tight chain binds suspension travel and destroys countershaft bearings, while a loose chain can derail.</p>' +
        '<h3>2. Deep Cleaning Without Harming O-Rings</h3>' +
        '<p>Never use gasoline, wire brushes, or harsh chlorinated solvents on modern O-ring or X-ring chains. Use dedicated motorcycle chain degreasers and soft three-sided grunge brushes to remove grit without drying out the factory internal grease seals.</p>' +
        '<h3>3. Precision Rear Axle Laser Alignment</h3>' +
        '<p>Swingarm alignment tick marks are frequently inaccurate. Using a laser chain alignment tool clamped to the rear sprocket ensures the chain runs in a 100% straight line, cutting friction losses and doubling sprocket lifespan.</p>' +
        '<div style="background:var(--panel-2);border-left:4px solid var(--amber);padding:20px;margin:30px 0;">' +
        '<strong style="color:var(--amber);display:block;margin-bottom:6px;">PRO TIP FROM OUR MASTER TECHS:</strong>' +
        '<p style="margin:0;font-size:14px;color:var(--steel);">Lube your chain immediately after a ride while the metal links are warm. The heat draws the lubricant into the rollers and allows the solvent carrier to evaporate, preventing messy chain fling on your wheels.</p>' +
        '</div>'
    },
    {
      id: 'understanding-4t-synthetic-oil',
      title: 'Motorcycle 4T Synthetic Oil vs Car Oil: Why JASO MA2 Matters',
      category: 'Education',
      date: 'April 28, 2026',
      readTime: '6 min read',
      excerpt: 'Discover why automotive engine oils can ruin your motorcycle wet clutch, and how high-shear synthetic formulas protect high-RPM bike engines.',
      image: 'assets/img/blog2.jpg',
      content: '<p>Unlike automobiles where engine oil and transmission fluid are in separate chambers, most 4-stroke motorcycles share the exact same oil sump for the engine, gearbox gears, and wet clutch assembly.</p>' +
        '<h3>The Danger of Automotive Friction Modifiers</h3>' +
        '<p>Car engine oils contain moly and energy-conserving friction modifiers designed for low friction. In a motorcycle, these additives penetrate clutch friction plates and cause catastrophic clutch slipping under acceleration. Always look for the JASO MA or JASO MA2 certification.</p>' +
        '<h3>Gearbox Shear Stability at 14,000 RPM</h3>' +
        '<p>Motorcycle transmission gears act like miniature blenders, shearing molecular oil polymers under extreme contact pressure. High-spec 4T synthetics use ester-based synthetic basestocks that resist mechanical shear and maintain stable viscosity under brutal track conditions.</p>' +
        '<div style="background:var(--panel-2);border-left:4px solid var(--amber);padding:20px;margin:30px 0;">' +
        '<strong style="color:var(--amber);display:block;margin-bottom:6px;">RECOMMENDED INTERVAL:</strong>' +
        '<p style="margin:0;font-size:14px;color:var(--steel);">We recommend full synthetic 4T oil changes every 3,000 to 5,000 miles or annually, along with a genuine OEM filter and magnetic drain plug inspection.</p>' +
        '</div>'
    },
    {
      id: 'pre-ride-safety-inspection',
      title: 'The T-CLOCS Pre-Ride Safety Checklist Every Rider Should Follow',
      category: 'Tips',
      date: 'June 02, 2026',
      readTime: '5 min read',
      excerpt: 'A 5-minute pre-ride inspection can save your life. Follow the industry standard T-CLOCS guide for worry-free weekend canyon carving and track sessions.',
      image: 'assets/img/blog3.jpg',
      content: '<p>Unlike cars, a single component failure on a motorcycle—like a flat tire, seized brake caliper, or stuck throttle—can lead to an immediate loss of control. A quick pre-ride walkaround prevents roadside breakdowns.</p>' +
        '<h3>1. Tires & Wheels (T)</h3>' +
        '<p>Check cold tire pressures with an accurate digital gauge. Inspect for embedded nails, sidewall cracks, and uneven center wear. Spin wheels to check for bent rim lips or loose spokes.</p>' +
        '<h3>2. Controls & Cables (C)</h3>' +
        '<p>Ensure front brake and clutch levers operate smoothly without binding. Verify throttle snap-back at both full left and right handlebar lock.</p>' +
        '<h3>3. Lights & Electrics (L)</h3>' +
        '<p>Test high/low beam headlights, turn indicators, horn, and ensure both front lever and rear foot brake activate the brake lamp.</p>' +
        '<h3>4. Oil & Fluids (O)</h3>' +
        '<p>Inspect engine oil sight glass with bike held upright. Check front and rear brake fluid reservoir sight glasses for clear amber color and correct level.</p>' +
        '<h3>5. Chassis & Stand (C & S)</h3>' +
        '<p>Check side stand spring return and side stand cutoff switch. Inspect front fork stanchions for telltale oil rings that indicate blown fork seals.</p>' +
        '<div style="background:var(--panel-2);border-left:4px solid var(--amber);padding:20px;margin:30px 0;">' +
        '<strong style="color:var(--amber);display:block;margin-bottom:6px;">BEFORE YOUR TRIP:</strong>' +
        '<p style="margin:0;font-size:14px;color:var(--steel);">Drop by our workshop for a complimentary 30-point rider safety check before your long-distance tours or track days.</p>' +
        '</div>'
    }
  ];
})();
