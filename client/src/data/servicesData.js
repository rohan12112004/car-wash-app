/**
 * servicesData.js — SINGLE SOURCE OF TRUTH for all service information.
 * 
 * Adding a new service = adding one entry to the appropriate category below + one route.
 * Every service page, card, carousel, and pricing table pulls from this file.
 * 
 * Structure per service:
 *   id, slug, name, shortName, category, categorySlug, description, shortDescription,
 *   icon, heroImage, price, duration, features[], howItWorks[], faqs[],
 *   relatedServices[], beforeAfterImages
 */

// 👋 OWNER: Replace placeholder image URLs with real service photos when available
const PLACEHOLDER_IMAGES = {
  foamWash: '/images/car_foam_wash.jpg',
  dryWash: '/images/hatchback_wash.jpg',
  polishing: '/images/luxury_car_polish.jpg',
  detailing: '/images/sedan_detailing.jpg',
  deepCleaning: '/images/interior_detailing.jpg',
  truck: '/images/truck_cleaning.jpg',
  dumper: '/images/truck_cleaning.jpg',
  luxuryBus: '/images/fleet_bus_wash.jpg',
  sofa: '/images/sofa_cleaning.jpg',
  carpet: '/images/carpet_cleaning.jpg',
  doormat: '/images/carpet_cleaning.jpg',
  ac: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
  waterTank: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=800',
  solarPanel: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
  chimney: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800',
  tiles: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
  carWashHero: '/images/hero_banner.jpg',
  commercialHero: '/images/fleet_bus_wash.jpg',
  homeHero: '/images/sofa_cleaning.jpg',
};

// ═══════════════════════════════════════════════════════════════
// CAR WASH SERVICES (Personal Vehicles)
// ═══════════════════════════════════════════════════════════════

const carWashServices = [
  {
    id: 'foam-wash',
    slug: 'foam-wash',
    name: 'Foam Wash',
    shortName: 'Foam Wash',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'Our signature Foam Wash uses premium pH-neutral snow foam that gently lifts dirt, grime, and contaminants from your vehicle\'s surface without scratching. The thick foam blanket encapsulates particles and safely removes them, leaving a streak-free, showroom shine every time.',
    shortDescription: 'Premium snow foam wash that safely removes dirt without scratching your vehicle\'s paint.',
    icon: 'Droplets',
    heroImage: PLACEHOLDER_IMAGES.foamWash,
    // 👋 OWNER: Update pricing when finalized
    price: { starting: 399, currency: '₹' },
    duration: '45 mins',
    features: [
      'pH-neutral premium snow foam application',
      'Gentle hand wash with microfiber mitts',
      'Wheel and tire cleaning with dedicated brushes',
      'Door jamb and sill wipe-down',
      'Streak-free rinse and air-dry finish',
      'Exterior glass cleaning and polishing',
      'Tire dressing for a fresh, dark finish',
      'Quick interior vacuum (dashboard & seats)',
    ],
    howItWorks: [
      { step: 1, title: 'Pre-Rinse', description: 'High-pressure rinse to remove loose dirt and debris from the surface.', icon: 'Droplets' },
      { step: 2, title: 'Foam Application', description: 'Thick snow foam blanket applied to encapsulate and lift contaminants.', icon: 'CloudRain' },
      { step: 3, title: 'Hand Wash', description: 'Gentle hand wash with premium microfiber mitts using the two-bucket method.', icon: 'Hand' },
      { step: 4, title: 'Rinse & Dry', description: 'Thorough rinse and air-dry for a spotless, streak-free finish.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'How long does a Foam Wash take?', answer: 'A standard Foam Wash takes approximately 45 minutes depending on the vehicle size and condition.' },
      { question: 'Is foam wash safe for all paint types?', answer: 'Yes! Our pH-neutral foam is safe for all paint types including ceramic-coated and wrapped vehicles.' },
      { question: 'Do I need to be present during the wash?', answer: 'Not at all. Just hand over the keys and we\'ll take care of everything. You\'ll receive a notification when done.' },
      { question: 'Can I get a foam wash at my location?', answer: 'Absolutely! We offer doorstep foam wash services. Book online and select your preferred location.' },
      { question: 'How often should I get a foam wash?', answer: 'We recommend a foam wash every 1-2 weeks to maintain your vehicle\'s appearance and protect the paint.' },
      { question: 'What products do you use?', answer: 'We use premium international-grade car care products that are eco-friendly and biodegradable.' },
    ],
    relatedServices: ['dry-wash', 'polishing', 'detailing'],
    beforeAfterImages: {
      // 👋 OWNER: Replace with real before/after images
      before: PLACEHOLDER_IMAGES.foamWash,
      after: PLACEHOLDER_IMAGES.foamWash,
    },
  },
  {
    id: 'dry-wash',
    slug: 'dry-wash',
    name: 'Dry Wash',
    shortName: 'Dry Wash',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'Our Waterless Dry Wash technology uses advanced polymer-based sprays that encapsulate dirt and allow safe removal without a single drop of water. Perfect for apartment complexes, office parking, and water-restricted areas. Eco-friendly and incredibly convenient.',
    shortDescription: 'Waterless car wash using advanced polymer sprays — eco-friendly and convenient.',
    icon: 'Wind',
    heroImage: PLACEHOLDER_IMAGES.dryWash,
    price: { starting: 399, currency: '₹' },
    duration: '30 mins',
    features: [
      'Zero water usage — 100% eco-friendly',
      'Advanced polymer-based cleaning spray',
      'Safe for all paint finishes and wraps',
      'Complete exterior wipe and polish',
      'Glass and mirror cleaning',
      'Dashboard and interior dusting',
      'Perfect for apartments and basements',
      'Protective wax layer included',
    ],
    howItWorks: [
      { step: 1, title: 'Inspect', description: 'Quick inspection to assess dirt level and choose the right product.', icon: 'Search' },
      { step: 2, title: 'Spray', description: 'Polymer spray applied panel by panel to encapsulate dirt particles.', icon: 'Spray' },
      { step: 3, title: 'Wipe', description: 'Gentle wipe with premium microfiber towels in one direction.', icon: 'Hand' },
      { step: 4, title: 'Buff & Shine', description: 'Final buff with a clean towel for a glossy, protected finish.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'Won\'t dry wash scratch my car?', answer: 'No. Our polymer spray creates a lubricating layer that encapsulates dirt, allowing safe removal without contact scratching.' },
      { question: 'How is this different from foam wash?', answer: 'Dry wash uses zero water and is ideal for maintenance washes. Foam wash uses water and is better for heavy soiling.' },
      { question: 'Is it really eco-friendly?', answer: 'Yes! Each dry wash saves approximately 150 liters of water compared to a traditional wash.' },
      { question: 'Can you do this in an underground parking?', answer: 'Absolutely! That\'s one of the biggest advantages — no water drainage needed.' },
      { question: 'How often can I get a dry wash?', answer: 'Dry wash is gentle enough for daily use, but we recommend 2-3 times per week for optimal results.' },
    ],
    relatedServices: ['foam-wash', 'polishing', 'deep-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.dryWash,
      after: PLACEHOLDER_IMAGES.dryWash,
    },
  },
  {
    id: 'polishing',
    slug: 'polishing',
    name: 'Car Polishing',
    shortName: 'Polishing',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'Our professional Car Polishing service restores your vehicle\'s paint to its original glory. Using dual-action polishers and premium compounds, we remove swirl marks, light scratches, oxidation, and water spots — revealing a deep, mirror-like finish that turns heads.',
    shortDescription: 'Professional paint correction and polishing for a mirror-like showroom finish.',
    icon: 'Gem',
    heroImage: PLACEHOLDER_IMAGES.polishing,
    price: { starting: 699, currency: '₹' },
    duration: '3-4 hours',
    features: [
      'Multi-stage paint correction process',
      'Swirl mark and scratch removal',
      'Oxidation and water spot treatment',
      'Dual-action machine polishing',
      'Premium compound and polish application',
      'Paint sealant for long-lasting protection',
      'Trim restoration and dressing',
      'Final inspection under special lighting',
    ],
    howItWorks: [
      { step: 1, title: 'Deep Clean', description: 'Thorough wash and clay bar treatment to remove embedded contaminants.', icon: 'Droplets' },
      { step: 2, title: 'Correct', description: 'Machine polishing with cutting compound to remove defects and scratches.', icon: 'Wrench' },
      { step: 3, title: 'Refine', description: 'Finishing polish to achieve maximum gloss and clarity.', icon: 'Gem' },
      { step: 4, title: 'Protect', description: 'Paint sealant applied for months of protection and shine.', icon: 'Shield' },
    ],
    faqs: [
      { question: 'How long does polishing last?', answer: 'With proper care, the results of a professional polish can last 3-6 months. Adding a ceramic coating extends this to 1-2 years.' },
      { question: 'Will polishing remove deep scratches?', answer: 'Polishing removes light to moderate scratches and swirl marks. Deep scratches that you can feel with your fingernail may require paint repair.' },
      { question: 'Is polishing safe for new cars?', answer: 'Yes, but new cars typically need only a light polish. We assess each vehicle individually and adjust our approach.' },
      { question: 'Can you polish a ceramic-coated car?', answer: 'We can polish before applying ceramic coating. Polishing over existing ceramic coating requires special techniques.' },
      { question: 'What\'s the difference between polishing and waxing?', answer: 'Polishing corrects paint defects (removes material), while waxing adds a protective layer on top. We recommend both.' },
    ],
    relatedServices: ['detailing', 'foam-wash', 'deep-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.polishing,
      after: PLACEHOLDER_IMAGES.polishing,
    },
  },
  {
    id: 'detailing',
    slug: 'detailing',
    name: 'Full Detailing',
    shortName: 'Detailing',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'Our Full Detailing package is the ultimate car care experience. Every inch of your vehicle — inside and out — is meticulously cleaned, corrected, and protected. From paint decontamination to leather conditioning, engine bay cleaning to headlight restoration.',
    shortDescription: 'Complete interior & exterior detailing — the ultimate car care experience.',
    icon: 'Star',
    heroImage: PLACEHOLDER_IMAGES.detailing,
    price: { starting: 1299, currency: '₹' },
    duration: '6-8 hours',
    features: [
      'Complete exterior wash and decontamination',
      'Clay bar treatment for paint smoothness',
      'Machine polishing for paint correction',
      'Interior deep clean — seats, carpets, headliner',
      'Leather conditioning and treatment',
      'Engine bay cleaning and dressing',
      'Headlight restoration (if needed)',
      'Ceramic sealant or wax protection coat',
    ],
    howItWorks: [
      { step: 1, title: 'Assess', description: 'Full vehicle inspection and documentation of existing condition.', icon: 'ClipboardCheck' },
      { step: 2, title: 'Exterior Detail', description: 'Wash, decontaminate, polish, and protect all exterior surfaces.', icon: 'Car' },
      { step: 3, title: 'Interior Detail', description: 'Deep clean, sanitize, and condition every interior surface.', icon: 'Sofa' },
      { step: 4, title: 'Final Touch', description: 'Quality check, protective coatings, and delivery presentation.', icon: 'Award' },
    ],
    faqs: [
      { question: 'How long does full detailing take?', answer: 'A comprehensive detailing service takes 6-8 hours. For severely neglected vehicles, it may take up to 2 days.' },
      { question: 'Is detailing worth the price?', answer: 'Absolutely! Regular detailing protects your vehicle\'s value, prevents paint damage, and keeps the interior hygienic.' },
      { question: 'How often should I get my car detailed?', answer: 'We recommend a full detail every 4-6 months, with maintenance washes in between.' },
      { question: 'Do you offer detailing for new cars?', answer: 'Yes! New car detailing is one of our most popular services. It adds protection from day one.' },
      { question: 'Can you come to my location?', answer: 'Yes, we offer mobile detailing services. We bring all equipment and products to your doorstep.' },
      { question: 'What about my belongings in the car?', answer: 'We recommend removing valuables. Our team handles personal items with care and returns them to their original position.' },
    ],
    relatedServices: ['polishing', 'deep-cleaning', 'foam-wash'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.detailing,
      after: PLACEHOLDER_IMAGES.detailing,
    },
  },
  {
    id: 'deep-cleaning',
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortName: 'Deep Clean',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'Our Deep Cleaning service targets the hidden grime that regular washes miss. Using steam cleaning, extraction machines, and specialized chemicals, we eliminate odors, stains, bacteria, and allergens from every crevice of your vehicle — making it truly fresh and hygienic.',
    shortDescription: 'Steam cleaning and extraction to eliminate odors, stains, and bacteria.',
    icon: 'Zap',
    heroImage: PLACEHOLDER_IMAGES.deepCleaning,
    price: { starting: 1599, currency: '₹' },
    duration: '4-5 hours',
    features: [
      'Hot steam cleaning for all surfaces',
      'Carpet and upholstery extraction cleaning',
      'Odor elimination and sanitization',
      'AC vent cleaning and deodorizing',
      'Stain removal from seats and carpets',
      'Antibacterial treatment for hygiene',
      'Dashboard and console deep cleaning',
      'Trunk cleaning and deodorizing',
    ],
    howItWorks: [
      { step: 1, title: 'Pre-Vacuum', description: 'Thorough vacuuming to remove loose debris and dust from all surfaces.', icon: 'Wind' },
      { step: 2, title: 'Steam Clean', description: 'High-temperature steam cleaning to dissolve grime and kill bacteria.', icon: 'Flame' },
      { step: 3, title: 'Extract', description: 'Hot water extraction of carpets and upholstery to remove deep-set stains.', icon: 'Droplets' },
      { step: 4, title: 'Sanitize', description: 'Anti-bacterial treatment and deodorizer for a fresh, healthy cabin.', icon: 'ShieldCheck' },
    ],
    faqs: [
      { question: 'How is deep cleaning different from regular cleaning?', answer: 'Deep cleaning uses steam, extraction machines, and specialized chemicals to reach areas that regular washing can\'t, removing embedded dirt and bacteria.' },
      { question: 'Can you remove cigarette smell?', answer: 'Yes! Our ozone treatment and specialized deodorizers can eliminate even stubborn cigarette odors.' },
      { question: 'Is steam cleaning safe for leather?', answer: 'Yes, we use low-pressure steam with appropriate settings for leather, followed by conditioning to keep it supple.' },
      { question: 'How long until I can use my car after?', answer: 'Seats and carpets need 2-3 hours to dry. We recommend waiting at least 3 hours before using the vehicle.' },
      { question: 'Do you clean the engine bay?', answer: 'Engine bay cleaning is available as an add-on service. It\'s included in our Full Detailing package.' },
    ],
    relatedServices: ['detailing', 'foam-wash', 'polishing'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.deepCleaning,
      after: PLACEHOLDER_IMAGES.deepCleaning,
    },
  },
];

// ═══════════════════════════════════════════════════════════════
// COMMERCIAL VEHICLE SERVICES
// ═══════════════════════════════════════════════════════════════

const commercialServices = [
  {
    id: 'truck-cleaning',
    slug: 'truck-cleaning',
    name: 'Truck Cleaning',
    shortName: 'Truck Cleaning',
    category: 'Commercial',
    categorySlug: 'commercial',
    description: 'Professional truck cleaning service designed for logistics companies, fleet operators, and individual truck owners. We handle everything from the cabin to the cargo area using industrial-grade equipment and eco-friendly chemicals.',
    shortDescription: 'Industrial-grade truck cleaning for fleet operators and logistics companies.',
    icon: 'Truck',
    heroImage: PLACEHOLDER_IMAGES.truck,
    price: { starting: 499, currency: '₹' },
    duration: '2-3 hours',
    features: [
      'Full exterior pressure wash and degreasing',
      'Cabin interior deep cleaning and sanitization',
      'Cargo area cleaning and disinfection',
      'Chassis and undercarriage wash',
      'Wheel and tire cleaning with industrial brushes',
      'Mirror and glass polishing',
      'Fleet packages available for bulk bookings',
      'Compliance-ready cleaning for food transport trucks',
    ],
    howItWorks: [
      { step: 1, title: 'Assessment', description: 'Vehicle inspection to determine cleaning scope and any special requirements.', icon: 'ClipboardCheck' },
      { step: 2, title: 'Pressure Wash', description: 'High-pressure industrial wash to remove road grime and mud.', icon: 'Droplets' },
      { step: 3, title: 'Detail Clean', description: 'Detailed cleaning of cabin, cargo area, and hard-to-reach spots.', icon: 'Wrench' },
      { step: 4, title: 'Inspection', description: 'Final quality check and documentation for fleet records.', icon: 'CheckCircle' },
    ],
    faqs: [
      { question: 'Do you offer fleet cleaning contracts?', answer: 'Yes! We offer weekly, bi-weekly, and monthly fleet cleaning contracts at discounted rates.' },
      { question: 'Can you clean refrigerated trucks?', answer: 'Absolutely. We have specialized protocols for reefer trucks including sanitization and temperature-safe cleaning.' },
      { question: 'Where does the cleaning happen?', answer: 'We can clean at your depot/yard or at our facility. On-site cleaning is available for fleets of 5+ vehicles.' },
      { question: 'Do you handle hazmat truck cleaning?', answer: 'Yes, we have trained staff and protocols for cleaning trucks that transport hazardous materials.' },
      { question: 'What about regulatory compliance?', answer: 'Our cleaning meets FSSAI standards for food transport vehicles and general commercial vehicle hygiene norms.' },
    ],
    relatedServices: ['dumper-cleaning', 'luxury-bus-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.truck,
      after: PLACEHOLDER_IMAGES.truck,
    },
  },
  {
    id: 'dumper-cleaning',
    slug: 'dumper-cleaning',
    name: 'Dumper Cleaning',
    shortName: 'Dumper Cleaning',
    category: 'Commercial',
    categorySlug: 'commercial',
    description: 'Heavy-duty dumper and construction vehicle cleaning using industrial pressure washers and degreasers. We remove cement, mud, grease, and construction debris — restoring your equipment\'s appearance and preventing corrosion damage.',
    shortDescription: 'Heavy-duty cleaning for dumpers and construction vehicles — remove cement, mud, and grease.',
    icon: 'HardHat',
    heroImage: PLACEHOLDER_IMAGES.dumper,
    price: { starting: 1999, currency: '₹' },
    duration: '3-4 hours',
    features: [
      'Industrial-grade pressure washing (3000+ PSI)',
      'Cement and concrete residue removal',
      'Hydraulic system exterior cleaning',
      'Rust prevention treatment on exposed metal',
      'Cabin deep cleaning and sanitization',
      'Undercarriage degreasing and wash',
      'Paint touch-up for minor scratches',
      'Anti-corrosion protective coating',
    ],
    howItWorks: [
      { step: 1, title: 'Pre-Soak', description: 'Industrial degreaser applied to soften cement, mud, and grease deposits.', icon: 'Droplets' },
      { step: 2, title: 'Power Wash', description: 'High-PSI pressure washing to blast away hardened debris.', icon: 'Zap' },
      { step: 3, title: 'Detail', description: 'Hand detailing of cabin, gauges, and sensitive mechanical areas.', icon: 'Wrench' },
      { step: 4, title: 'Protect', description: 'Anti-corrosion treatment and protective coating applied.', icon: 'Shield' },
    ],
    faqs: [
      { question: 'Can you clean dumpers on construction sites?', answer: 'Yes, we bring mobile cleaning units to construction sites. We just need a water source and drainage.' },
      { question: 'How do you handle cement buildup?', answer: 'We use specialized acid-based cleaners for cement, applied carefully to avoid damaging paint and rubber seals.' },
      { question: 'Do you clean the engine bay of dumpers?', answer: 'Yes, engine bay cleaning is included. We use appropriate chemicals and protect electrical components.' },
      { question: 'What about JCBs and excavators?', answer: 'We clean all types of construction equipment including JCBs, excavators, loaders, and rollers.' },
    ],
    relatedServices: ['truck-cleaning', 'luxury-bus-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.dumper,
      after: PLACEHOLDER_IMAGES.dumper,
    },
  },
  {
    id: 'luxury-bus-cleaning',
    slug: 'luxury-bus-cleaning',
    name: 'Luxury Bus Cleaning',
    shortName: 'Bus Cleaning',
    category: 'Commercial',
    categorySlug: 'commercial',
    description: 'Premium cleaning service for luxury buses, Volvo coaches, tour buses, and commercial passenger vehicles. We ensure every seat, aisle, restroom, and luggage compartment is spotless, sanitized, and ready to impress your passengers.',
    shortDescription: 'Premium cleaning for luxury coaches and tour buses — spotless and sanitized.',
    icon: 'Bus',
    heroImage: PLACEHOLDER_IMAGES.luxuryBus,
    price: { starting: 3999, currency: '₹' },
    duration: '4-6 hours',
    features: [
      'Full exterior wash with bus-safe chemicals',
      'Interior seat-by-seat deep cleaning',
      'Aisle carpet extraction cleaning',
      'Restroom sanitization and deodorizing',
      'AC duct cleaning and sanitization',
      'Luggage compartment cleaning',
      'Window tint-safe glass cleaning',
      'Antibacterial fog treatment for the entire cabin',
    ],
    howItWorks: [
      { step: 1, title: 'Exterior Wash', description: 'Full body wash with bus-grade detergent and soft brushes.', icon: 'Droplets' },
      { step: 2, title: 'Interior Sweep', description: 'Complete interior vacuuming, dusting, and trash removal.', icon: 'Wind' },
      { step: 3, title: 'Deep Clean', description: 'Seat cleaning, carpet extraction, restroom scrubbing, and AC treatment.', icon: 'Sparkles' },
      { step: 4, title: 'Sanitize', description: 'Antibacterial fogging and air freshening for passenger safety.', icon: 'ShieldCheck' },
    ],
    faqs: [
      { question: 'Do you clean Volvo and Scania coaches?', answer: 'Yes, we have experience with all major bus brands including Volvo, Scania, Mercedes, and Ashok Leyland luxury coaches.' },
      { question: 'Can you clean at our bus depot?', answer: 'Absolutely. On-site cleaning at depots is our specialty for fleet operators.' },
      { question: 'How do you handle leather seats?', answer: 'We use pH-balanced leather cleaners followed by conditioning to maintain softness and prevent cracking.' },
      { question: 'Is the fogging treatment safe for passengers?', answer: 'Yes, we use WHO-approved antibacterial agents. The bus is safe for passengers after 30 minutes of ventilation.' },
      { question: 'Do you offer overnight cleaning?', answer: 'Yes! Night cleaning is available so your buses are ready for the morning departure.' },
    ],
    relatedServices: ['truck-cleaning', 'dumper-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.luxuryBus,
      after: PLACEHOLDER_IMAGES.luxuryBus,
    },
  },
];

// ═══════════════════════════════════════════════════════════════
// HOME CLEANING SERVICES
// ═══════════════════════════════════════════════════════════════

const homeCleaningServices = [
  {
    id: 'sofa-cleaning',
    slug: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    shortName: 'Sofa Cleaning',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Professional sofa cleaning using hot water extraction, steam cleaning, and upholstery-safe chemicals. We remove dust mites, allergens, stains, and odors from all types of sofas — fabric, leather, suede, and microfiber.',
    shortDescription: 'Deep extraction cleaning for all sofa types — remove stains, allergens, and odors.',
    icon: 'Sofa',
    heroImage: PLACEHOLDER_IMAGES.sofa,
    price: { starting: 699, currency: '₹' },
    duration: '1-2 hours',
    features: [
      'Hot water extraction deep cleaning',
      'Stain removal for food, ink, and pet stains',
      'Dust mite and allergen elimination',
      'Odor neutralization treatment',
      'Fabric protection scotchgard coating',
      'Safe for leather, fabric, and microfiber',
      'Cushion and pillow cleaning included',
      'Anti-bacterial sanitization',
    ],
    howItWorks: [
      { step: 1, title: 'Inspect', description: 'Fabric type identification and stain assessment for proper treatment.', icon: 'Search' },
      { step: 2, title: 'Pre-Treat', description: 'Targeted stain treatment and pre-spray application.', icon: 'Spray' },
      { step: 3, title: 'Extract', description: 'Hot water extraction to remove deep-seated dirt and allergens.', icon: 'Droplets' },
      { step: 4, title: 'Protect', description: 'Fabric protector applied to resist future stains and spills.', icon: 'Shield' },
    ],
    faqs: [
      { question: 'How long does it take for the sofa to dry?', answer: 'Typically 3-4 hours. We use high-powered extraction to minimize moisture. Using fans speeds up the process.' },
      { question: 'Can you remove old stains?', answer: 'We can remove most stains including coffee, wine, ink, and food stains. Very old set-in stains may lighten significantly but might not fully disappear.' },
      { question: 'Is the cleaning safe for kids and pets?', answer: 'Absolutely! We use non-toxic, child-safe, and pet-friendly cleaning solutions.' },
      { question: 'Do you clean recliner sofas?', answer: 'Yes, we clean all types including recliners, sectionals, L-shaped, and modular sofas.' },
      { question: 'How is pricing calculated?', answer: 'Pricing is based on the number of seats. A 3-seater sofa starts at ₹699. Contact us for a custom quote.' },
    ],
    relatedServices: ['carpet-cleaning', 'doormat-cleaning', 'tiles-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.sofa,
      after: PLACEHOLDER_IMAGES.sofa,
    },
  },
  {
    id: 'carpet-cleaning',
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    shortName: 'Carpet Cleaning',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Professional carpet cleaning using truck-mounted extraction and encapsulation technology. We restore your carpets to their original vibrancy, removing deep-seated dirt, allergens, and stubborn stains.',
    shortDescription: 'Professional carpet extraction cleaning — restore vibrancy and eliminate allergens.',
    icon: 'LayoutGrid',
    heroImage: PLACEHOLDER_IMAGES.carpet,
    price: { starting: 699, currency: '₹' },
    duration: '1-3 hours',
    features: [
      'Deep extraction cleaning technology',
      'Color-safe stain removal treatment',
      'Dust mite and allergen elimination',
      'Pet odor and urine treatment',
      'Carpet fiber conditioning',
      'Scotchgard fabric protection',
      'Suitable for all carpet types and sizes',
      'Quick-dry technology — ready in 2-3 hours',
    ],
    howItWorks: [
      { step: 1, title: 'Vacuum', description: 'Industrial vacuuming to remove surface dirt and debris.', icon: 'Wind' },
      { step: 2, title: 'Pre-Spray', description: 'Cleaning solution applied to break down embedded dirt.', icon: 'Spray' },
      { step: 3, title: 'Extract', description: 'Hot water extraction pulls out deep dirt and allergens.', icon: 'Droplets' },
      { step: 4, title: 'Groom', description: 'Carpet grooming and protective treatment for lasting freshness.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'Can you clean large area rugs?', answer: 'Yes, we clean all sizes from small rugs to large area carpets and wall-to-wall carpeting.' },
      { question: 'How do you handle delicate carpets like Persian rugs?', answer: 'We have specialized gentle cleaning protocols for delicate, antique, and hand-woven carpets.' },
      { question: 'Will the colors bleed?', answer: 'We always do a color-fastness test before proceeding. Our pH-balanced solutions are designed to prevent bleeding.' },
      { question: 'Can you clean carpets at my office?', answer: 'Yes! We offer commercial carpet cleaning for offices, hotels, and event venues.' },
    ],
    relatedServices: ['sofa-cleaning', 'doormat-cleaning', 'tiles-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.carpet,
      after: PLACEHOLDER_IMAGES.carpet,
    },
  },
  {
    id: 'doormat-cleaning',
    slug: 'doormat-cleaning',
    name: 'Doormat Cleaning',
    shortName: 'Doormat Cleaning',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Thorough doormat and entrance mat cleaning service. We deep clean coir, rubber, fabric, and synthetic doormats — removing trapped dirt, bacteria, and odors. A clean doormat means a cleaner home.',
    shortDescription: 'Deep clean your doormats — remove trapped dirt, bacteria, and odors.',
    icon: 'DoorOpen',
    heroImage: PLACEHOLDER_IMAGES.doormat,
    price: { starting: 99, currency: '₹' },
    duration: '30-45 mins',
    features: [
      'Deep cleaning for all doormat types',
      'Coir, rubber, fabric, and synthetic mats',
      'Dust and debris extraction',
      'Antibacterial treatment',
      'Odor removal and freshening',
      'Color restoration for faded mats',
      'Quick-dry service available',
      'Bulk cleaning for apartments and offices',
    ],
    howItWorks: [
      { step: 1, title: 'Shake & Beat', description: 'Remove loose dirt and debris from the doormat fibers.', icon: 'Wind' },
      { step: 2, title: 'Clean', description: 'Deep cleaning with appropriate solution for the mat material.', icon: 'Droplets' },
      { step: 3, title: 'Sanitize', description: 'Antibacterial treatment to eliminate germs and bacteria.', icon: 'ShieldCheck' },
      { step: 4, title: 'Dry', description: 'Rapid drying and grooming for immediate use.', icon: 'Sun' },
    ],
    faqs: [
      { question: 'How often should doormats be cleaned?', answer: 'We recommend professional cleaning every 2-3 months, or monthly for high-traffic areas.' },
      { question: 'Can you clean coir doormats?', answer: 'Yes, we have specialized techniques for natural coir mats that preserve their texture and color.' },
      { question: 'Do you offer pickup and delivery?', answer: 'Yes! We can pick up your doormats, clean them at our facility, and deliver them back fresh and clean.' },
      { question: 'Is there a bulk discount?', answer: 'Yes, we offer discounts for bulk cleaning — ideal for apartment complexes and office buildings.' },
    ],
    relatedServices: ['carpet-cleaning', 'sofa-cleaning', 'tiles-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.doormat,
      after: PLACEHOLDER_IMAGES.doormat,
    },
  },
  {
    id: 'ac-cleaning',
    slug: 'ac-cleaning',
    name: 'AC Cleaning',
    shortName: 'AC Cleaning',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Professional AC cleaning and servicing for split ACs, window ACs, and central air conditioning systems. Improve cooling efficiency, reduce electricity bills, and breathe cleaner air with our deep AC cleaning service.',
    shortDescription: 'Deep AC cleaning to improve efficiency, save electricity, and improve air quality.',
    icon: 'AirVent',
    heroImage: PLACEHOLDER_IMAGES.ac,
    price: { starting: 499, currency: '₹' },
    duration: '1-1.5 hours',
    features: [
      'Complete disassembly and deep cleaning',
      'Evaporator coil foam cleaning',
      'Filter wash and sanitization',
      'Drain pipe cleaning and flushing',
      'Condenser unit cleaning (outdoor unit)',
      'Anti-fungal and antibacterial treatment',
      'Gas pressure check (refill at extra cost)',
      'Performance test after cleaning',
    ],
    howItWorks: [
      { step: 1, title: 'Disassemble', description: 'Safe removal of filters, covers, and accessible components.', icon: 'Wrench' },
      { step: 2, title: 'Foam Clean', description: 'Specialized foam spray to dissolve dirt on evaporator coils.', icon: 'Spray' },
      { step: 3, title: 'Flush & Treat', description: 'Drain pipe flush and anti-fungal treatment application.', icon: 'Droplets' },
      { step: 4, title: 'Reassemble & Test', description: 'Reassembly, performance testing, and efficiency check.', icon: 'ThermometerSun' },
    ],
    faqs: [
      { question: 'How often should I get AC cleaning?', answer: 'We recommend professional AC cleaning every 3-4 months, or before each season starts.' },
      { question: 'Will it improve cooling?', answer: 'Yes! Dirty coils reduce efficiency by up to 30%. After cleaning, you\'ll notice immediate improvement in cooling.' },
      { question: 'Do you clean both indoor and outdoor units?', answer: 'Yes, complete AC cleaning includes both the indoor split unit and the outdoor condenser.' },
      { question: 'Can you clean central AC systems?', answer: 'Yes, we service central AC systems, VRV systems, and ductable units for commercial buildings.' },
      { question: 'Is gas refilling included?', answer: 'Gas pressure check is included. Refilling is available at an additional cost if needed.' },
    ],
    relatedServices: ['chimney-cleaning', 'water-tank-cleaning', 'solar-panel-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.ac,
      after: PLACEHOLDER_IMAGES.ac,
    },
  },
  {
    id: 'water-tank-cleaning',
    slug: 'water-tank-cleaning',
    name: 'Water Tank Cleaning',
    shortName: 'Tank Cleaning',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Professional water tank cleaning and sanitization service for overhead tanks, underground tanks, and sintex tanks. We remove sediment, algae, bacteria, and biofilm — ensuring safe, clean drinking water for your family.',
    shortDescription: 'Tank cleaning and sanitization for safe, clean drinking water.',
    icon: 'Container',
    heroImage: PLACEHOLDER_IMAGES.waterTank,
    price: { starting: 599, currency: '₹' },
    duration: '2-3 hours',
    features: [
      'Complete tank draining and sludge removal',
      'High-pressure scrubbing of walls and floor',
      'Algae and biofilm elimination',
      'Anti-bacterial chemical treatment',
      'UV sanitization available (premium)',
      'Water quality testing after cleaning',
      'Inlet and outlet pipe cleaning',
      'Tank crack and leak inspection',
    ],
    howItWorks: [
      { step: 1, title: 'Drain', description: 'Safe draining of the tank and removal of standing water.', icon: 'Droplets' },
      { step: 2, title: 'Scrub', description: 'High-pressure scrubbing to remove sediment, algae, and biofilm.', icon: 'Wrench' },
      { step: 3, title: 'Sanitize', description: 'Anti-bacterial and anti-algae treatment for lasting cleanliness.', icon: 'ShieldCheck' },
      { step: 4, title: 'Test', description: 'Water quality testing and documentation for your records.', icon: 'TestTube' },
    ],
    faqs: [
      { question: 'How often should water tanks be cleaned?', answer: 'Every 6 months for household tanks. Every 3 months for commercial tanks or tanks in hot climates.' },
      { question: 'Is it safe to use the water immediately after?', answer: 'We recommend waiting 2-3 hours after cleaning. The sanitization chemicals are food-grade and safe.' },
      { question: 'Do you clean underground tanks?', answer: 'Yes, we clean both overhead and underground tanks of all sizes.' },
      { question: 'What size tanks can you clean?', answer: 'We handle tanks from 500 liters to 50,000+ liters for residential and commercial properties.' },
    ],
    relatedServices: ['solar-panel-cleaning', 'ac-cleaning', 'chimney-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.waterTank,
      after: PLACEHOLDER_IMAGES.waterTank,
    },
  },
  {
    id: 'solar-panel-cleaning',
    slug: 'solar-panel-cleaning',
    name: 'Solar Panel Cleaning',
    shortName: 'Solar Panels',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Professional solar panel cleaning to maximize energy output. Dust, bird droppings, pollen, and pollution film reduce panel efficiency by up to 25%. Our trained technicians safely clean panels using deionized water and soft brushes.',
    shortDescription: 'Clean solar panels for maximum energy output — safe, scratch-free cleaning.',
    icon: 'Sun',
    heroImage: PLACEHOLDER_IMAGES.solarPanel,
    price: { starting: 499, currency: '₹' },
    duration: '1-2 hours',
    features: [
      'Deionized water cleaning (no chemicals)',
      'Soft-bristle rotating brush system',
      'Bird dropping and hard stain removal',
      'Frame and mounting inspection',
      'Output efficiency test (before/after)',
      'Safe rooftop access with safety gear',
      'No risk of scratching or damage',
      'Monthly maintenance plans available',
    ],
    howItWorks: [
      { step: 1, title: 'Inspect', description: 'Visual inspection of panels for damage, shading, and dirt assessment.', icon: 'Search' },
      { step: 2, title: 'Rinse', description: 'Deionized water rinse to remove loose dust and debris.', icon: 'Droplets' },
      { step: 3, title: 'Clean', description: 'Soft rotating brush cleaning for stubborn spots and bird droppings.', icon: 'RotateCcw' },
      { step: 4, title: 'Verify', description: 'Output measurement to confirm improved efficiency post-cleaning.', icon: 'BarChart' },
    ],
    faqs: [
      { question: 'How often should solar panels be cleaned?', answer: 'Every 2-3 months in urban areas, or monthly in dusty/industrial zones. After monsoon season is especially important.' },
      { question: 'Will cleaning really improve output?', answer: 'Yes! Dirty panels can lose 15-25% efficiency. Clean panels consistently generate more electricity.' },
      { question: 'Is it safe to clean panels yourself?', answer: 'We don\'t recommend DIY cleaning due to safety risks and potential panel damage. Professional cleaning is safer and more effective.' },
      { question: 'Do you offer maintenance contracts?', answer: 'Yes! Monthly and quarterly maintenance plans are available at discounted rates.' },
    ],
    relatedServices: ['water-tank-cleaning', 'ac-cleaning', 'chimney-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.solarPanel,
      after: PLACEHOLDER_IMAGES.solarPanel,
    },
  },
  {
    id: 'chimney-cleaning',
    slug: 'chimney-cleaning',
    name: 'Chimney Cleaning',
    shortName: 'Chimney Cleaning',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Professional kitchen chimney cleaning and servicing. We deep clean filters, motor assemblies, and ducts — restoring suction power and eliminating grease buildup. Works with all brands: Faber, Elica, Hindware, Kaff, and more.',
    shortDescription: 'Kitchen chimney deep cleaning — restore suction and eliminate grease buildup.',
    icon: 'Flame',
    heroImage: PLACEHOLDER_IMAGES.chimney,
    price: { starting: 699, currency: '₹' },
    duration: '1-1.5 hours',
    features: [
      'Complete chimney disassembly',
      'Mesh and baffle filter deep cleaning',
      'Motor and fan blade cleaning',
      'Duct and exhaust pipe cleaning',
      'Grease trap cleaning',
      'Anti-grease coating application',
      'Suction power test after cleaning',
      'All major brands serviced',
    ],
    howItWorks: [
      { step: 1, title: 'Disassemble', description: 'Safe removal of filters, covers, and fan assembly.', icon: 'Wrench' },
      { step: 2, title: 'Degrease', description: 'Hot alkaline soak to dissolve stubborn grease from all parts.', icon: 'Flame' },
      { step: 3, title: 'Clean & Dry', description: 'Thorough cleaning, rinsing, and drying of all components.', icon: 'Sparkles' },
      { step: 4, title: 'Reassemble & Test', description: 'Reassembly, anti-grease coating, and suction test.', icon: 'CheckCircle' },
    ],
    faqs: [
      { question: 'How often should kitchen chimneys be cleaned?', answer: 'Every 3-4 months for regular cooking. Monthly for commercial kitchens or heavy Indian cooking.' },
      { question: 'Can you fix my chimney if it\'s not working?', answer: 'We can diagnose common issues like reduced suction, noise, and lighting problems. Repairs are available at additional cost.' },
      { question: 'Do you clean auto-clean chimneys?', answer: 'Yes! Even auto-clean chimneys need professional cleaning every 6-8 months for optimal performance.' },
      { question: 'Which brands do you service?', answer: 'We service all major brands: Faber, Elica, Hindware, Kaff, Glen, Prestige, and more.' },
    ],
    relatedServices: ['ac-cleaning', 'tiles-cleaning', 'water-tank-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.chimney,
      after: PLACEHOLDER_IMAGES.chimney,
    },
  },
  {
    id: 'tiles-cleaning',
    slug: 'tiles-cleaning',
    name: 'Tiles Cleaning',
    shortName: 'Tiles Cleaning',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Professional tile and grout cleaning for bathrooms, kitchens, balconies, and living areas. Our high-pressure steam and chemical treatment removes stubborn stains, mold, soap scum, and grout discoloration — making your tiles look brand new.',
    shortDescription: 'Professional tile and grout cleaning — remove stains, mold, and discoloration.',
    icon: 'Grid3X3',
    heroImage: PLACEHOLDER_IMAGES.tiles,
    price: { starting: 999, currency: '₹' },
    duration: '2-4 hours',
    features: [
      'High-pressure steam tile cleaning',
      'Grout line deep cleaning and whitening',
      'Mold and mildew treatment',
      'Soap scum and hard water stain removal',
      'Anti-slip treatment available',
      'Grout sealing for long-lasting cleanliness',
      'Suitable for all tile types (ceramic, porcelain, marble, granite)',
      'Kitchen, bathroom, balcony, and patio tiles',
    ],
    howItWorks: [
      { step: 1, title: 'Pre-Treat', description: 'Alkaline or acidic pre-treatment based on stain type and tile material.', icon: 'Spray' },
      { step: 2, title: 'Scrub', description: 'Machine scrubbing with rotary floor cleaner for deep agitation.', icon: 'RotateCcw' },
      { step: 3, title: 'Steam', description: 'High-temperature steam cleaning for grout lines and stubborn spots.', icon: 'Flame' },
      { step: 4, title: 'Seal', description: 'Grout sealant applied to prevent future staining and discoloration.', icon: 'Shield' },
    ],
    faqs: [
      { question: 'Can you clean marble tiles without damage?', answer: 'Absolutely. We use pH-neutral cleaners specifically formulated for natural stone like marble and granite.' },
      { question: 'Will grout cleaning make it white again?', answer: 'Yes! Our deep cleaning process can restore grout to near-original color. Severely stained grout may need recoloring.' },
      { question: 'Do you clean outdoor tiles too?', answer: 'Yes, we clean patio, balcony, driveway, and pool deck tiles with industrial-grade equipment.' },
      { question: 'How long does it take to dry?', answer: 'Tiles dry within 1-2 hours. Grout sealant needs 24 hours to fully cure.' },
    ],
    relatedServices: ['sofa-cleaning', 'carpet-cleaning', 'chimney-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.tiles,
      after: PLACEHOLDER_IMAGES.tiles,
    },
  },
];

// ═══════════════════════════════════════════════════════════════
// CATEGORY DEFINITIONS
// ═══════════════════════════════════════════════════════════════

const serviceCategories = [
  {
    id: 'car-wash',
    slug: 'car-wash',
    name: 'Car Wash Services',
    shortName: 'Car Wash',
    description: 'Premium car wash and care services for personal vehicles. From a quick foam wash to complete detailing — we treat your car like our own.',
    icon: 'Car',
    heroImage: PLACEHOLDER_IMAGES.carWashHero,
    gradient: 'from-primary-dark via-primary to-primary-light',
    services: carWashServices,
  },
  {
    id: 'commercial',
    slug: 'commercial',
    name: 'Commercial Vehicle Cleaning',
    shortName: 'Commercial',
    description: 'Industrial-grade cleaning for trucks, dumpers, buses, and fleet vehicles. Built for logistics companies and fleet operators.',
    icon: 'Truck',
    heroImage: PLACEHOLDER_IMAGES.commercialHero,
    gradient: 'from-primary via-primary-dark to-bg-dark',
    services: commercialServices,
  },
  {
    id: 'home',
    slug: 'home',
    name: 'Home Cleaning Services',
    shortName: 'Home Cleaning',
    description: 'Professional home cleaning for sofas, carpets, ACs, chimneys, water tanks, and more. A cleaner home, a healthier family.',
    icon: 'Home',
    heroImage: PLACEHOLDER_IMAGES.homeHero,
    gradient: 'from-primary-light via-accent to-accent-glow',
    services: homeCleaningServices,
  },
];

// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════

// 👋 OWNER: Replace with real customer testimonials when available
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Noida, UP',
    rating: 5,
    service: 'Full Detailing',
    text: 'Absolutely blown away by the detailing work! My 5-year-old Hyundai looks like it just rolled out of the showroom. The team was professional, punctual, and incredibly thorough.',
    avatar: 'PS',
  },
  {
    id: 2,
    name: 'Amit Verma',
    location: 'Gurgaon, HR',
    rating: 5,
    service: 'Foam Wash',
    text: 'I\'ve been using their doorstep foam wash every week for 6 months now. Consistently excellent quality. The app makes booking so easy. Highly recommend!',
    avatar: 'AV',
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    service: 'Truck Cleaning',
    text: 'We have a fleet of 30 trucks. Premia Carwash handles our monthly cleaning with precision. Their team understands commercial vehicle needs. Great fleet discounts too.',
    avatar: 'RK',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    location: 'Jaipur, RJ',
    rating: 4,
    service: 'Sofa Cleaning',
    text: 'Got my 3+2 seater cleaned — the coffee stain that\'s been there for years is completely gone! Fast drying too. Will definitely book again for the carpets.',
    avatar: 'NG',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    location: 'Chandigarh',
    rating: 5,
    service: 'AC Cleaning',
    text: 'AC was barely cooling after 2 years. After their deep cleaning, it\'s blowing ice cold again! The technician was knowledgeable and explained everything. Saved me from buying a new AC.',
    avatar: 'VS',
  },
  {
    id: 6,
    name: 'Sneha Patel',
    location: 'Ahmedabad, GJ',
    rating: 5,
    service: 'Car Polishing',
    text: 'The paint correction work on my black BMW was phenomenal. Every swirl mark gone, mirror-like finish. They truly understand premium car care. Worth every rupee.',
    avatar: 'SP',
  },
];

// ═══════════════════════════════════════════════════════════════
// GENERAL FAQS
// ═══════════════════════════════════════════════════════════════

const generalFaqs = [
  {
    question: 'How do I book a service?',
    answer: 'You can book any service through our website by clicking "Book Now", calling our helpline, or messaging us on WhatsApp. We\'ll confirm your booking within 30 minutes.',
  },
  {
    question: 'Do you offer doorstep services?',
    answer: 'Yes! Most of our services are available at your doorstep — home, office, or any location of your choice. Our team arrives with all necessary equipment.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI (GPay, PhonePe, Paytm), credit/debit cards, net banking, and cash. Advance online payment gets you a 5% discount.',
  },
  {
    question: 'Are your cleaning products safe?',
    answer: 'Absolutely. We use eco-friendly, biodegradable, and non-toxic products. All our chemicals are safe for children, pets, and the environment.',
  },
  {
    question: 'What if I\'m not satisfied with the service?',
    answer: 'Customer satisfaction is our priority. If you\'re not happy with the results, we\'ll re-do the service for free within 48 hours. No questions asked.',
  },
  {
    question: 'Do you offer franchise opportunities?',
    answer: 'Yes! We\'re actively expanding our franchise network across India. Visit our Franchise page or call us to learn about investment requirements and ROI projections.',
  },
  {
    question: 'What are your operating hours?',
    answer: 'We operate Monday to Saturday, from 10:00 AM to 6:00 PM, Monday to Saturday. Emergency and after-hours services are available at additional charges.',
  },
  {
    question: 'Do you offer subscription or monthly plans?',
    answer: 'Yes, we offer weekly and monthly wash plans for car wash services at discounted rates. Contact us for customized packages for your needs.',
  },
];

// ═══════════════════════════════════════════════════════════════
// FRANCHISE BENEFITS
// ═══════════════════════════════════════════════════════════════

const franchiseBenefits = [
  {
    icon: 'TrendingUp',
    title: 'High ROI',
    description: 'Average 50-60% annual returns with break-even in 6 to 12 months. The car wash industry in India is growing at 15% CAGR.',
  },
  {
    icon: 'GraduationCap',
    title: 'Complete Training',
    description: '2-week intensive training program covering operations, customer service, equipment handling, and business management.',
  },
  {
    icon: 'Wrench',
    title: 'Equipment Supply',
    description: 'We provide all essential equipment — pressure washers, foam machines, chemicals, and branded uniforms at wholesale prices.',
  },
  {
    icon: 'Megaphone',
    title: 'Marketing Support',
    description: 'National brand awareness + local marketing support. Social media management, Google Ads setup, and printed materials included.',
  },
  {
    icon: 'HeadphonesIcon',
    title: '24/7 Support',
    description: 'Dedicated franchise success manager and round-the-clock technical support. You\'re never alone in this journey.',
  },
  {
    icon: 'MapPin',
    title: 'Territory Rights',
    description: 'Exclusive territory protection ensures no other franchise operates within your designated area. Your market, your customers.',
  },
];

// ═══════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════

export {
  carWashServices,
  commercialServices,
  homeCleaningServices,
  serviceCategories,
  testimonials,
  generalFaqs,
  franchiseBenefits,
  PLACEHOLDER_IMAGES,
};

// Flat array of ALL services for search, pricing table, etc.
export const allServices = [
  ...carWashServices,
  ...commercialServices,
  ...homeCleaningServices,
];

// Helper: find a service by slug
export const getServiceBySlug = (slug) => {
  if (!slug) return null;
  const clean = String(slug).trim().toLowerCase();
  return allServices.find(s => String(s.slug).trim().toLowerCase() === clean) || null;
};

// Helper: find services by category slug
export const getServicesByCategory = (categorySlug) => {
  if (!categorySlug) return [];
  const clean = String(categorySlug).trim().toLowerCase();
  return allServices.filter(s => String(s.categorySlug).trim().toLowerCase() === clean);
};

// Helper: get related services for a given service
export const getRelatedServices = (service) => {
  if (!service) return [];
  if (Array.isArray(service.relatedServices) && service.relatedServices.length > 0) {
    return service.relatedServices
      .map(slug => getServiceBySlug(slug))
      .filter(Boolean);
  }
  // Safe fallback: return up to 3 services from the same category
  return allServices
    .filter(s => s.categorySlug === service.categorySlug && s.slug !== service.slug)
    .slice(0, 3);
};

export default {
  carWashServices,
  commercialServices,
  homeCleaningServices,
  serviceCategories,
  testimonials,
  generalFaqs,
  franchiseBenefits,
  allServices,
  getServiceBySlug,
  getServicesByCategory,
  getRelatedServices,
};
