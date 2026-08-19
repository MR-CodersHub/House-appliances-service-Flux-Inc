(function() {
  window.MotorWorks = window.MotorWorks || {};

  window.MotorWorks.team = [
    {
      id: 'marcus-vance',
      name: 'Marcus Vance',
      role: 'Master HVAC & Dual-Inverter AC Specialist',
      bio: 'EPA Section 608 certified with 15+ years experience in inverter AC diagnostics, PCB board micro-soldering, and zero-leak R32/R410A refrigeration systems.',
      image: 'assets/img/men3.jpg'
    },
    {
      id: 'elena-rostova',
      name: 'Elena Rostova',
      role: 'Lead Refrigerator & Smart Cooling Engineer',
      bio: 'Specialist in Samsung, LG, and Whirlpool smart French-door refrigerators, linear inverter compressors, defrost sensors, and electronic ice maker units.',
      image: 'assets/img/woman1.jpg'
    },
    {
      id: 'david-miller',
      name: 'David Miller',
      role: 'Washing Machine & Drive Motor Technician',
      bio: 'Certified expert in Bosch, IFB, and Whirlpool front-load & top-load washing machines, direct-drive brushless motors, drum spider bearings, and drain valves.',
      image: 'assets/img/men2.jpg'
    },
    {
      id: 'sarah-jenkins',
      name: 'Sarah Jenkins',
      role: 'On-Demand Dispatch & Quality Assurance Lead',
      bio: 'Oversees real-time technician telemetry routing, emergency 45-minute breakdown dispatches, genuine OEM spare verification, and 90-day warranty compliance.',
      image: 'assets/img/woman2.jpg'
    }
  ];

  window.MotorWorks.services = [
    {
      id: 'washing-machine',
      code: 'APP / 01',
      title: 'Washing Machine Repair & Diagnostics',
      category: 'maintenance',
      shortDesc: 'Front-load, top-load & washer-dryers. Drum bearings, drain pump, PCB board & motor repairs.',
      description: 'Comprehensive diagnostic and on-site repair for front-load, top-load, and semi-automatic washing machines. We fix error codes, excessive vibration, water leakage, spinning failure, and faulty drive motors using factory OEM spares.',
      image: 'assets/img/service1.jpg',
      features: ['Drive Motor & Belt Replacement', 'Drum Spider Arm & Bearing Overhaul', 'PCB Logic Board Micro-Repair & Error Reset', 'Drain Pump, Water Inlet Valve & Door Gasket Fix'],
      pricing: [
        { tier: 'Standard Diagnostic & Minor Fix', price: '$29', desc: 'Inspection, filter cleaning, hose check & quote' },
        { tier: 'Comprehensive Component Overhaul', price: '$89', desc: 'PCB, motor, drum bearing or drain pump replacement' }
      ],
      faqs: [
        { q: 'Why is my washing machine shaking violently during the spin cycle?', a: 'Violent shaking is usually caused by worn shock absorbers, broken suspension springs, an unbalanced drum load, or damaged rear drum spider bearings. Our technician can replace dampers on-site.' },
        { q: 'Do you provide genuine OEM replacement parts?', a: 'Yes! Flux Inc uses 100% genuine factory-certified OEM replacement parts backed by our standard 90-day parts warranty.' }
      ]
    },
    {
      id: 'refrigerator',
      code: 'APP / 02',
      title: 'Refrigerator & Inverter Cooling Care',
      category: 'cooling',
      shortDesc: 'Single, double-door & side-by-side. Inverter compressor, gas leak, defrost timer & thermostat.',
      description: 'Expert troubleshooting for single-door, double-door, side-by-side, and smart French-door refrigerators. We resolve cooling loss, unusual compressor clicking, gas leaks, ice buildup, and faulty temperature sensors.',
      image: 'assets/img/step3.jpg',
      features: ['Inverter Linear Compressor Diagnostics & Swap', 'Refrigerant R600a / R134a Leak Fix & Gas Recharge', 'Defrost Heater, Bi-Metal Sensor & Timer Repair', 'Magnetic Door Gasket Seal & Thermostat Replacement'],
      pricing: [
        { tier: 'Cooling Diagnostic & Sensor Service', price: '$39', desc: 'Thermostat, fan motor, defrost check & sensor repair' },
        { tier: 'Compressor & Full Gas Charging', price: '$129', desc: 'Includes leak detection, vacuuming & R600a refill' }
      ],
      faqs: [
        { q: 'Why is my refrigerator running but not cooling properly?', a: 'Common causes include low refrigerant gas due to a micro-leak, a faulty evaporator fan motor, frosted cooling coils from a failed defrost sensor, or a defective compressor start relay.' },
        { q: 'How long does an on-site refrigerator repair take?', a: 'Most common repairs—including sensor swaps, fan replacement, and thermostat tuning—are completed within 45 to 60 minutes during the first visit.' }
      ]
    },
    {
      id: 'ac-service',
      code: 'APP / 03',
      title: 'Split & Window AC Foam Jet Service',
      category: 'cooling',
      shortDesc: 'Deep foam jet wash, R32/R410A gas refill, PCB circuit repair, and copper pipe leak fix.',
      description: 'Restore ice-cold cooling efficiency and clean indoor air with our high-pressure deep foam jet service. We clean indoor cooling coils, outdoor condenser units, test electrical capacitance, and refill eco-friendly refrigerant gas.',
      image: 'assets/img/service3.jpg',
      features: ['High-Pressure Foam Jet Indoor & Outdoor Coil Wash', 'Eco-Friendly R32 / R410A / R22 Refrigerant Gas Refill', 'Indoor Blower Fan & Outdoor Condenser Motor Repair', 'PCB Circuit Board & Remote Sensor Calibration'],
      pricing: [
        { tier: 'Deep Foam Jet Service', price: '$49', desc: '2x deeper cooling wash for indoor & outdoor units' },
        { tier: 'Gas Refill & Leak Solder Repair', price: '$99', desc: 'Nitrogen pressure testing, brazing & full gas recharge' }
      ],
      faqs: [
        { q: 'How is a Foam Jet wash different from normal water servicing?', a: 'Foam Jet cleaning uses specialized antibacterial foaming agents with a 2-in-1 high-pressure spray that dissolves stubborn deep-set grime, mold, and grease from the evaporator fins without damaging the delicate aluminum.' }
      ]
    },
    {
      id: 'dryer',
      code: 'APP / 04',
      title: 'Washer-Dryer & Clothes Dryer Repair',
      category: 'maintenance',
      shortDesc: 'Heating elements, thermal cutoffs, moisture sensors, and drum drive rollers.',
      description: 'Dedicated service for vented, condenser, and heat pump dryers. We repair heating element coils, thermal fuses, drive belts, moisture detection sensors, and exhaust airflow blockages to eliminate fire risks and drying delays.',
      image: 'assets/img/service4.jpg',
      features: ['Heating Coil & Thermal Limiter Replacement', 'Drive Belt, Tensioner Idler & Roller Replacement', 'Digital Moisture Sensor & Lint Duct Clearance', 'Quiet Drum Alignment & Motor Bearing Overhaul'],
      pricing: [
        { tier: 'Inspection & Thermal Fuse Fix', price: '$35', desc: 'Lint clearance, safety sensors & heating check' },
        { tier: 'Heating Element & Motor Rebuild', price: '$85', desc: 'Full internal overhaul and high-temp component renewal' }
      ],
      faqs: [
        { q: 'Why does my dryer spin but produce zero heat?', a: 'A blown thermal cutoff fuse or a burnt heating element coil is the most common reason. Our technician tests both with a digital multimeter and replaces them on the spot.' }
      ]
    },
    {
      id: 'microwave',
      code: 'APP / 05',
      title: 'Microwave & Convection Oven Care',
      category: 'electrical',
      shortDesc: 'Magnetron replacement, high-voltage diode, touch panel, and turntable motors.',
      description: 'Safe, certified high-voltage repairs for solo, grill, and convection microwaves. We troubleshoot no-heat symptoms, sparking inside cavity, faulty door micro-switches, and unresponsive touch membrane panels.',
      image: 'assets/img/service5.jpg',
      features: ['Magnetron & High-Voltage Capacitor Replacement', 'Mica Waveguide Cover & Cavity Spark Suppression', 'Touch Panel Membrane & Micro-Switch Repair', 'Turntable Motor & Drive Coupler Replacement'],
      pricing: [
        { tier: 'General Repair & Safety Check', price: '$29', desc: 'Door switch, cavity spark fix & diode test' },
        { tier: 'Magnetron & Power Overhaul', price: '$69', desc: 'Includes genuine OEM magnetron & calibration' }
      ],
      faqs: [
        { q: 'Is it worth repairing an expensive convection microwave?', a: 'Yes! Replacing a magnetron or micro-switch typically costs less than 25% of the price of buying a new premium convection microwave oven.' }
      ]
    },
    {
      id: 'dishwasher',
      code: 'APP / 06',
      title: 'Dishwasher Diagnostics & Overhaul',
      category: 'maintenance',
      shortDesc: 'Circulation pump, water inlet valve, heating element, and drain clog clearance.',
      description: 'Keep your tableware spotless and sanitized. We resolve standing water in dishwashers, weak wash spray pressure, faulty detergent dispensers, heating element errors, and noisy circulation pumps.',
      image: 'assets/img/service6.jpg',
      features: ['Wash Circulation Pump & Impeller Overhaul', 'Water Inlet Solenoid Valve & Flow Meter Repair', 'High-Temp Heating Element & Thermistor Tuning', 'Drain Impeller Clearance & Anti-Flood Float Fix'],
      pricing: [
        { tier: 'Drainage & Filter Deep Clean', price: '$35', desc: 'Unclogging, valve check & sanitization cycle' },
        { tier: 'Pump Motor & PCB Board Repair', price: '$89', desc: 'Circulation pump, heater element or board fix' }
      ],
      faqs: [
        { q: 'Why is water left standing in the bottom of my dishwasher?', a: 'This is usually caused by a blocked drain hose, clogged food waste macerator, or a jammed drain pump impeller. We can clear and service the pump in under 30 minutes.' }
      ]
    }
  ];

  window.MotorWorks.pricingPlans = {
    monthly: [
      {
        name: 'Home Essentials',
        price: '$29',
        period: '/mo',
        save: null,
        description: 'Essential preventive care and free diagnostic visits for 2 major home appliances.',
        features: ['1 Free AC Deep Foam Jet Service / Year', '1 Free Washing Machine Descaling Cycle', 'Zero Diagnostic Fees on All Repair Visits', '10% Discount on Genuine OEM Spare Parts', 'Standard Same-Day Scheduling'],
        featured: false
      },
      {
        name: 'Complete Home AMC',
        price: '$59',
        period: '/mo',
        save: 'Save $120/yr',
        description: 'Our most popular plan covering Washing Machines, Refrigerators, and AC units.',
        features: ['2 Free AC Foam Jet Cleanings / Year', 'Free Refrigerator Condenser & Defrost Check', 'Free Washing Machine Drum & Valve Tune-Up', '15% Off All Replacement Spare Parts', 'Priority 45-Min Emergency Dispatch'],
        featured: true
      },
      {
        name: 'Smart Villa VIP',
        price: '$99',
        period: '/mo',
        save: null,
        description: 'All-inclusive coverage for all household appliances, multiple ACs & luxury smart models.',
        features: ['Unlimited Free AC Servicing & Cleaning', 'Free Annual AC Refrigerant Gas Top-Up', '20% Off Major Compressor & Motor Overhauls', 'Dedicated Senior Master Technician Assigned', '24/7 Priority Hotline & Instant Dispatch'],
        featured: false
      }
    ],
    annual: [
      {
        name: 'Home Essentials',
        price: '$290',
        period: '/yr',
        save: '2 Months Free',
        description: 'Essential preventive care and free diagnostic visits for 2 major home appliances.',
        features: ['1 Free AC Deep Foam Jet Service / Year', '1 Free Washing Machine Descaling Cycle', 'Zero Diagnostic Fees on All Repair Visits', '10% Discount on Genuine OEM Spare Parts', 'Standard Same-Day Scheduling'],
        featured: false
      },
      {
        name: 'Complete Home AMC',
        price: '$590',
        period: '/yr',
        save: 'Save $240/yr',
        description: 'Our most popular plan covering Washing Machines, Refrigerators, and AC units.',
        features: ['2 Free AC Foam Jet Cleanings / Year', 'Free Refrigerator Condenser & Defrost Check', 'Free Washing Machine Drum & Valve Tune-Up', '15% Off All Replacement Spare Parts', 'Priority 45-Min Emergency Dispatch'],
        featured: true
      },
      {
        name: 'Smart Villa VIP',
        price: '$990',
        period: '/yr',
        save: 'Save $390/yr',
        description: 'All-inclusive coverage for all household appliances, multiple ACs & luxury smart models.',
        features: ['Unlimited Free AC Servicing & Cleaning', 'Free Annual AC Refrigerant Gas Top-Up', '20% Off Major Compressor & Motor Overhauls', 'Dedicated Senior Master Technician Assigned', '24/7 Priority Hotline & Instant Dispatch'],
        featured: false
      }
    ]
  };

  window.MotorWorks.blogPosts = [
    {
      id: 'washing-machine-loud-banging-noise',
      title: 'Why Is Your Washing Machine Making Loud Banging Noises During Spin?',
      category: 'Washing Machines',
      date: 'May 14, 2026',
      readTime: '5 min read',
      excerpt: 'Learn the difference between an unlevel machine, worn shock absorbers, and damaged rear drum bearings—and how to fix it before motor burn.',
      image: 'assets/img/service4.jpg',
      content: '<p>A noisy washing machine is one of the most common home appliance emergencies. Ignoring excessive thumping during high-speed spin cycles can destroy the outer tub, rip the drive belt, or short-circuit the electronic motor control module.</p>' +
        '<h3>1. Unbalanced Load vs. Damaged Shock Absorbers</h3>' +
        '<p>Front-load washing machines rely on 2 to 4 heavy-duty hydraulic shock absorbers connected to the steel chassis. When the internal damper fluid degrades, the tub violently slams against the cabinet during the 1200+ RPM spin cycle. If your machine rocks when empty, the shock dampers need replacement.</p>' +
        '<h3>2. How to Test for Failed Drum Spider Bearings</h3>' +
        '<p>With the machine turned off, reach inside and lift the stainless steel drum vertically relative to the outer tub. If you feel vertical play or hear a metallic grinding noise when spinning the drum by hand, the rear bearings and aluminum spider bracket are corroded and need urgent overhaul.</p>' +
        '<h3>3. Leveling Feet & Anti-Vibration Pads</h3>' +
        '<p>Ensure all four leveling feet touch the floor firmly and the locknuts are tightened against the frame. Anti-vibration rubber pads can also absorb floor resonance in apartment laundry closets.</p>' +
        '<div style="background:var(--panel-2);border-left:4px solid var(--amber);border-radius:12px;padding:20px;margin:30px 0;">' +
        '<strong style="color:var(--amber);display:block;margin-bottom:6px;">PRO TIP FROM FLUX INC TECHNICIANS:</strong>' +
        '<p style="margin:0;font-size:14px;color:var(--steel);">Never overload your washer with bulky bedding mixed with small garments. Uneven distribution creates massive centrifugal forces that wear out bearings 3x faster.</p>' +
        '</div>'
    },
    {
      id: 'signs-refrigerator-needs-gas-refill',
      title: 'Top 5 Signs Your Refrigerator Needs Gas Refill or Defrost Sensor Repair',
      category: 'Refrigerators',
      date: 'April 28, 2026',
      readTime: '6 min read',
      excerpt: 'Discover why your freezer may stay freezing cold while the fresh food compartment turns warm, and how modern R600a refrigerant is recharged safely.',
      image: 'assets/img/step3.jpg',
      content: '<p>Modern dual-inverter refrigerators are designed to operate sealed for decades. However, copper corrosion or vibration cracks can lead to slow refrigerant leaks, causing food spoilage and excessive compressor heat.</p>' +
        '<h3>1. Freezer Cold, but Refrigerator Section Warm</h3>' +
        '<p>In 90% of frost-free refrigerators, cold air is produced in the freezer and directed to the lower fridge compartment via an automated damper door. If the defrost sensor or heating element fails, thick frost blocks the airflow channels, leaving the lower compartment at room temperature.</p>' +
        '<h3>2. Compressor Running Non-Stop with Hissing Sounds</h3>' +
        '<p>When refrigerant gas levels drop, the compressor must run continuously at maximum frequency to achieve the thermostat setpoint. If you hear a faint gurgling or hissing noise from the back coils, a refrigerant leak is present.</p>' +
        '<h3>3. Oil Stains on Copper Joints</h3>' +
        '<p>Refrigerant gas carries lubricating compressor oil. Inspecting the condenser joints for oily residue often reveals the exact pinpoint location of the leak.</p>' +
        '<div style="background:var(--panel-2);border-left:4px solid var(--amber);border-radius:12px;padding:20px;margin:30px 0;">' +
        '<strong style="color:var(--amber);display:block;margin-bottom:6px;">SAFETY WARNING:</strong>' +
        '<p style="margin:0;font-size:14px;color:var(--steel);">Modern eco-friendly refrigerators use R600a (isobutane), which is flammable. Recharging must always be performed by an EPA-certified technician using nitrogen pressure testing and flameless pinch-off crimping.</p>' +
        '</div>'
    },
    {
      id: 'split-ac-foam-jet-vs-water-cleaning',
      title: 'How Often Should You Service Your Split AC? (Foam Jet vs Normal Water Wash)',
      category: 'Air Conditioners',
      date: 'June 02, 2026',
      readTime: '5 min read',
      excerpt: 'Learn why deep foam jet cleaning increases cooling speed by 40%, cuts electricity bills, and eliminates musty AC odors and mold buildup.',
      image: 'assets/img/service3.jpg',
      content: '<p>Indoor air conditioner coils act like giant air filters, pulling in dust, pet dander, and kitchen grease over months of operation. Clogged cooling fins reduce thermal transfer and force the compressor to draw higher electrical amperage.</p>' +
        '<h3>1. The Difference with Deep Foam Jet Sanitization</h3>' +
        '<p>Traditional water servicing only rinses the surface dust. Flux Inc Foam Jet cleaning uses a non-corrosive foaming agent that penetrates 3 inches into the micro-fins, expanding to lift deeply embedded mold, bacteria, and grime into a catch-bag system.</p>' +
        '<h3>2. Preventing Water Leakage from Indoor AC Unit</h3>' +
        '<p>Algae and slime frequently clog the indoor condensate drain tray. During our service, we flush the drain line with high-pressure water to prevent overflow leaks down your walls.</p>' +
        '<h3>3. Annual Pre-Summer Diagnostic Check</h3>' +
        '<p>Always test your AC compressor capacitor, PCB board operating voltage, and refrigerant pressure at the start of summer to prevent sudden mid-heatwave breakdowns.</p>' +
        '<div style="background:var(--panel-2);border-left:4px solid var(--amber);border-radius:12px;padding:20px;margin:30px 0;">' +
        '<strong style="color:var(--amber);display:block;margin-bottom:6px;">RECOMMENDED INTERVAL:</strong>' +
        '<p style="margin:0;font-size:14px;color:var(--steel);">We recommend booking a Foam Jet service every 6 months for residential split ACs, and cleaning the mesh air filters every 3 weeks during peak season.</p>' +
        '</div>'
    }
  ];
})();
