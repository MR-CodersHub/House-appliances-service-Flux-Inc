(function() {
  window.MotorWorks = window.MotorWorks || {};

  window.MotorWorks.team = [
    {
      id: 'marcus-vance',
      name: 'Marcus Vance',
      role: 'Master Technician & Shop Lead',
      bio: 'ASE Master Certified with 16+ years experience specializing in European drivetrain engineering and advanced diagnostics.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'elena-rostova',
      name: 'Elena Rostova',
      role: 'Electrical & EV Specialist',
      bio: 'High-voltage systems expert with factory certification in modern electric, hybrid, and complex ECU electronics.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'david-miller',
      name: 'David Miller',
      role: 'Service Operations Manager',
      bio: 'Oversees shop workflow, customer consultations, and quality assurance to ensure every job meets factory specifications.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'james-thorne',
      name: 'James Thorne',
      role: 'Performance & Suspension Specialist',
      bio: 'Track-day enthusiast and chassis setup expert specializing in precision alignment, braking systems, and custom suspension tuning.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
    }
  ];

  window.MotorWorks.services = [
    {
      id: 'oil-filter',
      code: 'SVC / 01',
      title: 'Oil & Filter Service',
      category: 'maintenance',
      shortDesc: 'Full synthetic fluids, 40-point inspection, and OEM filters on every visit.',
      description: 'Maintain engine longevity and thermal protection with factory-approved synthetic oils tailored to your engine specifications.',
      image: 'assets/img/oil-service.jpg',
      features: ['Full Synthetic Fluid Change', 'OEM Oil Filter Replacement', '40-Point Safety Inspection', 'Fluid Top-Off & Tire Pressure Adjust'],
      pricing: [
        { tier: 'Standard Synthetic', price: '$79', desc: 'Up to 5 Qts Mobil 1' },
        { tier: 'Euro Spec Synthetic', price: '$119', desc: 'Liqui Moly Euro formula' }
      ],
      faqs: [
        { q: 'How frequently should synthetic oil be changed?', a: 'We recommend changing synthetic oil every 5,000 to 7,500 miles or 12 months.' }
      ]
    },
    {
      id: 'brake-suspension',
      code: 'SVC / 02',
      title: 'Brake & Suspension',
      category: 'safety',
      shortDesc: 'Pad, rotor, and suspension diagnostics with lifetime-rated components.',
      description: 'Complete brake and suspension safety overhaul using OEM or premium ceramic friction materials. Ensures silent, fade-free stopping power and smooth handling.',
      image: 'assets/img/brake-service.jpg',
      features: ['OEM Ceramic/Semi-Metallic Pads', 'Rotor Resurfacing or Replacement', 'High-Temp Fluid Flush', 'Suspension & Bushing Inspection'],
      pricing: [
        { tier: 'Front or Rear Pads', price: '$199', desc: 'Pads replacement & hardware check' },
        { tier: 'Full Axle Overhaul', price: '$389', desc: 'New pads, rotors & fluid flush' }
      ],
      faqs: [
        { q: 'How often should brakes be serviced?', a: 'Brake pads typically last 30,000–50,000 miles depending on driving style and conditions.' }
      ]
    },
    {
      id: 'tyres-alignment',
      code: 'SVC / 03',
      title: 'Tyres & Alignment',
      category: 'maintenance',
      shortDesc: 'Laser wheel alignment and balanced fitment for every tyre brand we stock.',
      description: 'Using high-resolution Hunter Hawkeye 3D optical sensors, we adjust your steering geometry to eliminate tire wear and tracking pull.',
      image: 'assets/img/tyre-service.jpg',
      features: ['Hunter 3D Laser Scanning', 'Front & Rear Toe/Camber Adjust', 'High-Speed Wheel Balancing', 'Tire Pressure & Tread Depth Check'],
      pricing: [
        { tier: '2-Wheel Alignment', price: '$99', desc: 'Front axle adjustment' },
        { tier: '4-Wheel 3D Alignment', price: '$149', desc: 'Full 4-wheel geometry calibration' }
      ],
      faqs: [
        { q: 'When do I need an alignment?', a: 'After installing new tires, replacing suspension parts, or if your vehicle pulls to one side.' }
      ]
    },
    {
      id: 'computer-diagnostics',
      code: 'SVC / 04',
      title: 'Computer Diagnostics',
      category: 'diagnostics',
      shortDesc: 'Manufacturer-level scan tools that read exactly what your dealer sees.',
      description: 'Using dealership-grade diagnostic scanners and oscilloscope testing, we pinpoint check engine lights, sensor failures, and electronic glitches with 100% accuracy before any parts are replaced.',
      image: 'assets/img/diagnostics-service.jpg',
      features: ['Full ECU Fault Code Scan', 'Live Data Stream Analysis', 'Ignition & Fuel System Test', 'Printed Technical Report'],
      pricing: [
        { tier: 'Basic Diagnostic', price: '$89', desc: 'Scan code read & quick report' },
        { tier: 'Full Diagnostic', price: '$149', desc: 'In-depth sensor, scope & live data test' }
      ],
      faqs: [
        { q: 'How long does a diagnostic scan take?', a: 'Most diagnostic scans take between 45 minutes to 1.5 hours depending on complexity.' }
      ]
    },
    {
      id: 'detailing-paint',
      code: 'SVC / 05',
      title: 'Detailing & Paint Care',
      category: 'cosmetic',
      shortDesc: 'Correction, ceramic coating, and interior recon for showroom finish.',
      description: 'Professional paint correction, multi-stage polishing, ceramic coating, and deep interior extraction to restore your vehicle to showroom condition.',
      image: 'assets/img/detailing-service.jpg',
      features: ['Multi-Stage Paint Correction', '3-Year Ceramic Coating', 'Interior Deep Clean & Leather Care', 'Wheel & Engine Bay Detailing'],
      pricing: [
        { tier: 'Full Interior & Exterior Detail', price: '$249', desc: 'Complete deep cleaning' },
        { tier: 'Ceramic Coating Package', price: '$699', desc: 'Paint correction + 3-year ceramic shield' }
      ],
      faqs: [
        { q: 'How long does ceramic coating last?', a: 'Our professional ceramic coatings provide hydrophobic protection for 3 to 5 years.' }
      ]
    },
    {
      id: 'battery-electrical',
      code: 'SVC / 06',
      title: 'Battery & Electrical',
      category: 'electrical',
      shortDesc: 'Load-testing, alternator checks, and EV/hybrid battery diagnostics.',
      description: 'High-voltage and 12V system testing, alternator output measurement, starter motor diagnosis, and EV/hybrid battery health reports.',
      image: 'assets/img/battery-service.jpg',
      features: ['12V & EV Battery Health Test', 'Alternator & Starter Diagnosis', 'Parasitic Draw Detection', 'OEM Battery Replacement'],
      pricing: [
        { tier: 'Battery & Charging Test', price: '$49', desc: 'Full system health scan' },
        { tier: 'OEM Battery Replacement', price: '$189', desc: 'Includes battery, installation & registration' }
      ],
      faqs: [
        { q: 'How long do car batteries last?', a: 'Car batteries typically last 3 to 5 years depending on climate and electrical load.' }
      ]
    }
  ];

  window.MotorWorks.pricingPlans = {
    monthly: [
      {
        name: 'Basic Care',
        price: '$29',
        period: '/mo',
        save: null,
        description: 'Essential peace-of-mind maintenance for daily drivers.',
        features: ['1 Free Synthetic Oil Change / Year', 'Free Computer Fault Scan Anytime', '10% Off Labor Rates', 'Priority Scheduling'],
        featured: false
      },
      {
        name: 'Pro Maintenance',
        price: '$59',
        period: '/mo',
        save: 'Save $120/yr',
        description: 'Our most popular plan for commuters & multi-car households.',
        features: ['2 Free Synthetic Oil Changes / Year', '1 Free 3D Wheel Alignment', '15% Off All Labor & Parts', 'Free Annual Brake Inspection', 'Loaner Vehicle Included'],
        featured: true
      },
      {
        name: 'Fleet & Executive',
        price: '$99',
        period: '/mo',
        save: null,
        description: 'Comprehensive coverage for high-performance and luxury vehicles.',
        features: ['Unlimited Oil Changes', '2 Free Wheel Alignments / Year', '20% Off All Repairs', 'Flatbed Towing Support (25 miles)', 'Dedicated Master Tech Advisor'],
        featured: false
      }
    ],
    annual: [
      {
        name: 'Basic Care',
        price: '$290',
        period: '/yr',
        save: '2 Months Free',
        description: 'Essential peace-of-mind maintenance for daily drivers.',
        features: ['1 Free Synthetic Oil Change / Year', 'Free Computer Fault Scan Anytime', '10% Off Labor Rates', 'Priority Scheduling'],
        featured: false
      },
      {
        name: 'Pro Maintenance',
        price: '$590',
        period: '/yr',
        save: 'Save $240/yr',
        description: 'Our most popular plan for commuters & multi-car households.',
        features: ['2 Free Synthetic Oil Changes / Year', '1 Free 3D Wheel Alignment', '15% Off All Labor & Parts', 'Free Annual Brake Inspection', 'Loaner Vehicle Included'],
        featured: true
      },
      {
        name: 'Fleet & Executive',
        price: '$990',
        period: '/yr',
        save: 'Save $390/yr',
        description: 'Comprehensive coverage for high-performance and luxury vehicles.',
        features: ['Unlimited Oil Changes', '2 Free Wheel Alignments / Year', '20% Off All Repairs', 'Flatbed Towing Support (25 miles)', 'Dedicated Master Tech Advisor'],
        featured: false
      }
    ]
  };

  window.MotorWorks.blogPosts = [
    {
      id: '5-signs-brakes-need-replacement',
      title: '5 Warning Signs Your Brakes Need Immediate Attention',
      category: 'Maintenance',
      date: 'May 14, 2026',
      readTime: '5 min read',
      excerpt: 'Squeal, vibration, or a soft pedal? Here is what your vehicle is telling you before a minor pad change becomes a costly rotor replacement.',
      image: 'assets/img/suspension.jpg',
      content: '<p>Brakes are your vehicle\'s most critical safety system. Ignoring early warning signs not only increases stopping distances dramatically but can result in severe damage to calipers, rotors, and ABS wheel speed sensors.</p>' +
        '<h3>1. Squealing or Grinding Noises</h3>' +
        '<p>Modern brake pads include built-in acoustic wear indicators—a small metal tab that emits a high-pitched squeal when friction material drops below 3mm. If you hear harsh metal-on-metal grinding, the pad material is completely depleted and the steel backing plate is scoring your brake rotors.</p>' +
        '<h3>2. Soft or Spongy Brake Pedal</h3>' +
        '<p>If your brake pedal feels squishy or sinks to the floorboard before engaging, there may be air or moisture trapped inside your hydraulic brake lines, or your master cylinder seals are failing.</p>' +
        '<h3>3. Steering Wheel Vibration Under Braking</h3>' +
        '<p>Feeling a pulse or shudder through your steering wheel when applying brakes at highway speeds usually indicates warped brake rotors caused by excessive thermal cycling or uneven wheel lug nut torque.</p>' +
        '<h3>4. Vehicle Pulling to One Side</h3>' +
        '<p>If your vehicle veers to the left or right when slowing down, a brake caliper piston may be seized, a slider pin may be binding, or fluid flow is restricted in one side of the hydraulic circuit.</p>' +
        '<h3>5. Burning Chemical Odor Near Wheels</h3>' +
        '<p>A sharp chemical smell after heavy braking indicates overheated friction material. Pull over immediately and allow the brake system to cool to prevent fluid vapor lock or severe brake fade.</p>' +
        '<div style="background:var(--panel-2);border-left:4px solid var(--amber);padding:20px;margin:30px 0;">' +
        '<strong style="color:var(--amber);display:block;margin-bottom:6px;">PRO TIP FROM OUR MASTER TECHS:</strong>' +
        '<p style="margin:0;font-size:14px;color:var(--steel);">Have your brake pad thickness and DOT4 fluid boiling point checked during every oil change. Catching pad wear early saves hundreds of dollars on rotor replacements.</p>' +
        '</div>'
    },
    {
      id: 'understanding-synthetic-oil',
      title: 'Conventional vs. Synthetic Oil: What Does Your Engine Really Need?',
      category: 'Education',
      date: 'April 28, 2026',
      readTime: '6 min read',
      excerpt: 'A detailed look into viscosity indexes, thermal breakdown protection, and why modern turbocharged engines demand full synthetic formulas.',
      image: 'assets/img/oil.jpg',
      content: '<p>Engine oil is the lifeblood of your powertrain. Choosing the correct formulation directly impacts fuel efficiency, thermal stability, turbocharger lifespan, and internal engine cleanliness.</p>' +
        '<h3>Molecular Uniformity & Thermal Resistance</h3>' +
        '<p>Unlike conventional mineral oils refined directly from crude stock, full synthetic oils are chemically engineered. Their uniform molecular size reduces internal fluid friction and resists thermal breakdown at temperatures exceeding 400°F.</p>' +
        '<h3>Protection for Turbocharged & Direct-Injection Engines</h3>' +
        '<p>Modern engines feature high compression ratios, tight valve tolerances, and turbochargers spinning at over 150,000 RPM. Synthetic formulas prevent carbon deposit formation on intake valves and eliminate turbo bearing coking.</p>' +
        '<h3>Cold-Weather Flow & Immediate Lubrication</h3>' +
        '<p>Over 75% of engine wear occurs during initial cold starts. Full synthetic oils flow rapidly at low ambient temperatures, ensuring instantaneous oil pressure to critical camshaft and crankshaft bearings.</p>' +
        '<div style="background:var(--panel-2);border-left:4px solid var(--amber);padding:20px;margin:30px 0;">' +
        '<strong style="color:var(--amber);display:block;margin-bottom:6px;">RECOMMENDED INTERVAL:</strong>' +
        '<p style="margin:0;font-size:14px;color:var(--steel);">We recommend full synthetic oil changes every 5,000 to 7,500 miles or 12 months, whichever comes first, regardless of manufacturer extended interval claims.</p>' +
        '</div>'
    },
    {
      id: 'preparing-car-for-summer',
      title: 'Essential Summer Road Trip Car Checklist',
      category: 'Tips',
      date: 'June 02, 2026',
      readTime: '5 min read',
      excerpt: 'Don\'t let a cooling system breakdown ruin your vacation. Follow these pre-trip checks for trouble-free highway cruising.',
      image: 'assets/img/tyre.jpg',
      content: '<p>Summer ambient heat puts immense thermal stress on your engine cooling system, air conditioning compressor, battery chemistry, and tire pressures. A 20-minute inspection before taking a highway trip prevents roadside breakdowns.</p>' +
        '<h3>1. Radiator & Coolant Health Check</h3>' +
        '<p>Ensure coolant level is filled to max and test coolant pH/boiling point. Inspect upper and lower radiator hoses for bulging, soft spots, or hairline cracks near hose clamps.</p>' +
        '<h3>2. Tire Pressure & Heat Expansion</h3>' +
        '<p>Check tire pressure when tires are cold. Summer road temperatures cause air to expand rapidly. Inspect tread depth across inner and outer edges for uneven alignment wear.</p>' +
        '<h3>3. Air Conditioning & Cabin Filter Replacement</h3>' +
        '<p>A weak A/C system often stems from a clogged cabin air filter or low refrigerant pressure. Replace the cabin filter annually to maintain fresh airflow and compressor efficiency.</p>' +
        '<h3>4. Battery Heat Stress Test</h3>' +
        '<p>Heat degrades car batteries faster than extreme cold by evaporating internal electrolyte fluid. Have your battery load-tested to verify cold-cranking amp output.</p>' +
        '<div style="background:var(--panel-2);border-left:4px solid var(--amber);padding:20px;margin:30px 0;">' +
        '<strong style="color:var(--amber);display:block;margin-bottom:6px;">BEFORE YOU DRIVE:</strong>' +
        '<p style="margin:0;font-size:14px;color:var(--steel);">Stop by MOTORWORKS for a complimentary 30-point summer safety check prior to your long-distance road trips.</p>' +
        '</div>'
    }
  ];
})();
