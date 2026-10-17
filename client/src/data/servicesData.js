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
  kitchen: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800',
  twoWheeler: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800',
  gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
  carWashHero: '/images/hero_banner.jpg',
  commercialHero: '/images/fleet_bus_wash.jpg',
  homeHero: '/images/sofa_cleaning.jpg',
  gymHero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
};

// ═══════════════════════════════════════════════════════════════
// CAR WASH SERVICES (Personal Vehicles)
// ═══════════════════════════════════════════════════════════════

const carWashServices = [
  {
    id: 'dry-wash',
    slug: 'dry-wash',
    name: 'Dry Wash',
    shortName: 'Dry Wash',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'Our Waterless Dry Wash uses specialized nano-polymer lubricants that encapsulate dirt, dust, and light grime for safe scratch-free removal. Includes interior cleaning, glass streak-free wipe, and tyre dressing.',
    shortDescription: 'Waterless eco nano polymer wash with full body wipe, glass cleaning & tyre shine.',
    icon: 'Wind',
    heroImage: PLACEHOLDER_IMAGES.dryWash,
    price: { starting: 299, currency: '₹' },
    duration: '30 mins',
    pricingTiers: {
      hatchback: 299,
      sedan: 399,
      suv: 499,
    },
    features: [
      'Interior normal dusting & vacuum cleaning',
      'Normal floor mats cleaning',
      'Glass streak-free wipe inside & out',
      'Exterior full body wipe with eco chemical',
      'Tyre cleaning and protective tyre shine polish',
      'Hatchback ₹299 | Sedan ₹399 | SUV ₹499',
    ],
    howItWorks: [
      { step: 1, title: 'Spray', description: 'Nano-polymer lubricant applied panel by panel.', icon: 'Spray' },
      { step: 2, title: 'Wipe', description: 'High-GSM plush microfiber lift of encapsulated dust.', icon: 'Hand' },
      { step: 3, title: 'Buff', description: 'Secondary microfiber buff for a glossy hydrophobic shine.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'What are the vehicle-wise prices for Dry Wash?', answer: 'Hatchback is ₹299/-, Sedan is ₹399/-, and SUV is ₹499/-.' },
      { question: 'Will waterless dry wash scratch the car?', answer: 'No, our nano-polymers encapsulate dirt so it wipes away safely without swirl marks.' },
    ],
    relatedServices: ['basic-wash', 'dry-wash-polish', 'basic-wash-polish'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.dryWash,
      after: PLACEHOLDER_IMAGES.dryWash,
    },
  },
  {
    id: 'basic-wash',
    slug: 'basic-wash',
    name: 'Basic Wash',
    shortName: 'Basic Wash',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'High-pressure triple action snow foam wash designed to flush out mud from wheel arches and underbody, followed by interior vacuuming, boot space clean, engine wipe, and tyre dressing.',
    shortDescription: 'Snow foam wash, interior vacuum, bootspace, engine clean, underbody & tyre polish.',
    icon: 'Droplets',
    heroImage: PLACEHOLDER_IMAGES.foamWash,
    price: { starting: 399, currency: '₹' },
    duration: '45 mins',
    pricingTiers: {
      hatchback: 399,
      sedan: 499,
      suv: 599,
    },
    features: [
      'Interior vacuum cleaning & mats cleaning',
      'Bootspace thorough vacuum clean',
      'High-pressure underbody rinse',
      'Engine compartment surface clean',
      'Exterior pH-neutral snow foam wash',
      'Glass cleaning & exterior drying',
      'Tyre cleaning & rich tyre polish',
      'Hatchback ₹399 | Sedan ₹499 | SUV ₹599',
    ],
    howItWorks: [
      { step: 1, title: 'High-Pressure Rinse', description: 'Underbody and exterior pressure rinse.', icon: 'Droplets' },
      { step: 2, title: 'Snow Foam', description: 'Thick pH-neutral foam application.', icon: 'CloudRain' },
      { step: 3, title: 'Interior Spa', description: 'Vacuuming seats, carpets, and bootspace.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'What is the price for Basic Wash?', answer: 'Hatchback: ₹399/-, Sedan: ₹499/-, SUV: ₹599/-.' },
    ],
    relatedServices: ['basic-wash-polish', 'dry-wash', 'detailing'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.foamWash,
      after: PLACEHOLDER_IMAGES.foamWash,
    },
  },
  {
    id: 'dry-wash-polish',
    slug: 'dry-wash-polish',
    name: 'Dry Wash + Polish',
    shortName: 'Dry + Polish',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'Eco waterless nano polymer treatment combined with full exterior body polishing, black plastic revitalization, interior plastic conditioning, glass cleaning, and tyre shine.',
    shortDescription: 'Waterless eco clean + full body wax polish & interior plastic rejuvenation.',
    icon: 'Gem',
    heroImage: PLACEHOLDER_IMAGES.polishing,
    price: { starting: 399, currency: '₹' },
    duration: '50 mins',
    pricingTiers: {
      hatchback: 399,
      sedan: 499,
      suv: 599,
    },
    features: [
      'Interior normal vacuum and mats cleaning',
      'Interior all plastic dashboard & trim polish',
      'Exterior full body wipe with chemical',
      'Exterior full body hand polish & protective buff',
      'Exterior all black plastic parts restored & polished',
      'Glass cleaning and streak-free finish',
      'Tyre clean and tyre polish',
      'Hatchback ₹399 | Sedan ₹499 | SUV ₹599',
    ],
    howItWorks: [
      { step: 1, title: 'Waterless Clean', description: 'Polymer spray cleaning panel by panel.', icon: 'Wind' },
      { step: 2, title: 'Wax Polish', description: 'Full body hand glaze application and buffing.', icon: 'Gem' },
      { step: 3, title: 'Trim Dressing', description: 'Interior and exterior black plastic restoration.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'What are the charges for Dry Wash + Polish?', answer: 'Hatchback: ₹399/-, Sedan: ₹499/-, SUV: ₹599/-.' },
    ],
    relatedServices: ['basic-wash-polish', 'dry-wash', 'polishing'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.polishing,
      after: PLACEHOLDER_IMAGES.polishing,
    },
  },
  {
    id: 'basic-wash-polish',
    slug: 'basic-wash-polish',
    name: 'Basic Wash + Polish',
    shortName: 'Wash + Polish',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'Our most comprehensive maintenance package: high-pressure snow foam wash, underbody clean, interior vacuum, black fiber & floor mat polish, engine black part polish, plus full exterior body machine glaze polish.',
    shortDescription: 'Snow foam wash + machine body polish, fiber & engine trim conditioning.',
    icon: 'Sparkles',
    heroImage: PLACEHOLDER_IMAGES.polishing,
    price: { starting: 499, currency: '₹' },
    duration: '60 mins',
    pricingTiers: {
      hatchback: 499,
      sedan: 599,
      suv: 699,
    },
    features: [
      'Interior vacuum cleaning & bootspace vacuuming',
      'Floor mats washing & floor mat polish',
      'Interior all black fiber parts polish',
      'Engine clean & engine black part dressing',
      'High-pressure underbody wash',
      'Exterior thick snow foam wash',
      'Exterior full body machine buff polish',
      'Tyre cleaning and tyre polish',
      'Hatchback ₹499 | Sedan ₹599 | SUV ₹699',
    ],
    howItWorks: [
      { step: 1, title: 'High-Pressure Wash', description: 'Snow foam underbody and body wash.', icon: 'Droplets' },
      { step: 2, title: 'Deep Conditioning', description: 'All fiber, mat, and engine black trim polish.', icon: 'Wrench' },
      { step: 3, title: 'Exterior Polish', description: 'Full exterior polish buff for maximum mirror gloss.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'What are the rates for Basic Wash + Polish?', answer: 'Hatchback: ₹499/-, Sedan: ₹599/-, SUV: ₹699/-.' },
    ],
    relatedServices: ['detailing', 'basic-wash', 'dry-wash-polish'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.polishing,
      after: PLACEHOLDER_IMAGES.polishing,
    },
  },
  {
    id: 'detailing',
    slug: 'detailing',
    name: 'Detailing (Minor Scratch Removal)',
    shortName: 'Detailing',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'Specialized 3-stage swirl and minor scratch removal detailing. Eliminates light scratches, clear-coat oxidation, and road haze using dual-action machine polishers, accompanied by full interior and engine fiber spa.',
    shortDescription: 'Full exterior minor scratch correction, dual-action buffing & interior fiber spa.',
    icon: 'Star',
    heroImage: PLACEHOLDER_IMAGES.detailing,
    price: { starting: 999, currency: '₹' },
    duration: '90-120 mins',
    pricingTiers: {
      hatchback: 999,
      sedan: 1149,
      suv: 1399,
    },
    features: [
      'Full exterior body minor scratch removal',
      'Swirl mark and oxidation correction',
      'Exterior full body high-gloss machine polish',
      'Interior vacuum, boot clean, and mat polish',
      'Interior all black fiber and dashboard conditioning',
      'Engine clean and engine black part polish',
      'Underbody high-pressure jet wash',
      'Tyre clean and wet-look tyre polish',
      'Hatchback ₹999 | Sedan ₹1149 | SUV ₹1399',
    ],
    howItWorks: [
      { step: 1, title: 'Wash & Decon', description: 'Foam wash and clay bar decontamination.', icon: 'Droplets' },
      { step: 2, title: 'Scratch Correction', description: 'Machine compounding for minor scratch removal.', icon: 'Wrench' },
      { step: 3, title: 'Gloss Seal', description: 'Protective mirror-shine paint sealant.', icon: 'Shield' },
    ],
    faqs: [
      { question: 'What are the detailing prices?', answer: 'Hatchback: ₹999/-, Sedan: ₹1149/-, SUV: ₹1399/-.' },
      { question: 'Will this remove deep scratches?', answer: 'It eliminates light to moderate clear-coat scratches, fingernail scratches, and swirl marks. Paint-missing scratches require touch-up.' },
    ],
    relatedServices: ['deep-cleaning', 'basic-wash-polish'],
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
    description: 'Complete interior restoration and stain eradication spa. Hot water extraction and steam sanitization removes food spills, beverage spots, sweat rings, and bad odors from seats, floor, and roof liner.',
    shortDescription: 'Full interior stain removal, upholstery steam shampoo, engine spa & body polish.',
    icon: 'Zap',
    heroImage: PLACEHOLDER_IMAGES.deepCleaning,
    price: { starting: 1199, currency: '₹' },
    duration: '2-3 hours',
    pricingTiers: {
      hatchback: 1199,
      sedan: 1399,
      suv: 1599,
    },
    features: [
      'Full interior upholstery and seat stain removal',
      'Interior vacuuming, mats clean, and floor mat polish',
      'Bootspace deep cleaning and deodorization',
      'Interior all black fiber parts polish & dashboard care',
      'Engine clean and engine black part polish',
      'High-pressure underbody rinse and exterior foam wash',
      'Exterior full body protective polish buff',
      'Tyre clean and tyre polish',
      'Hatchback ₹1199 | Sedan ₹1399 | SUV ₹1599',
    ],
    howItWorks: [
      { step: 1, title: 'Pre-Vacuum', description: 'Industrial dry vacuuming of seats and floor.', icon: 'Wind' },
      { step: 2, title: 'Stain Extraction', description: 'Injection shampooing to lift embedded grime.', icon: 'Droplets' },
      { step: 3, title: 'Full Spa & Buff', description: 'Exterior wash, fiber dressing, and machine polish.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'What are the rates for Deep Cleaning?', answer: 'Hatchback: ₹1199/-, Sedan: ₹1399/-, SUV: ₹1599/-.' },
      { question: 'How long does the interior take to dry?', answer: 'With our high-power moisture extraction, seats dry in about 1-2 hours.' },
    ],
    relatedServices: ['detailing', 'basic-wash-polish'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.deepCleaning,
      after: PLACEHOLDER_IMAGES.deepCleaning,
    },
  },
  {
    id: 'two-wheeler-basic-wash',
    slug: 'two-wheeler-basic-wash',
    name: 'Two Wheeler Basic Wash',
    shortName: 'Bike Basic Wash',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'High-pressure foam wash and degreaser for bikes and scooters. Cleans the mud pads, underbody, alloy wheels, and chain sprockets with non-corrosive chemicals.',
    shortDescription: 'Full body foam wash, mud pad cleaning, underbody rinse & tyre clean — 199/-.',
    icon: 'Bike',
    heroImage: PLACEHOLDER_IMAGES.twoWheeler,
    price: { starting: 199, currency: '₹' },
    duration: '20 mins',
    features: [
      'Full body foam wash for tank, panels, and visor',
      'Mud pad and wheel arch high-pressure blast',
      'Underbody and engine block degreasing',
      'Chain and alloy wheel dust extraction',
      'Tyre cleaning and streak-free drying',
      'All bikes & scooters at flat ₹199/-',
    ],
    howItWorks: [
      { step: 1, title: 'Pressure Jet', description: 'Mud and road grime removal from underbody and mud pads.', icon: 'Droplets' },
      { step: 2, title: 'Foam Bath', description: 'Gentle motorcycle safe shampoo foam application.', icon: 'CloudRain' },
      { step: 3, title: 'Dry & Detail', description: 'Microfiber drying and tyre cleaning.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'What is the price of Two Wheeler Basic Wash?', answer: 'Flat ₹199/- for any motorcycle or scooter.' },
    ],
    relatedServices: ['two-wheeler-wash-polish', 'basic-wash'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.twoWheeler,
      after: PLACEHOLDER_IMAGES.twoWheeler,
    },
  },
  {
    id: 'two-wheeler-wash-polish',
    slug: 'two-wheeler-wash-polish',
    name: 'Two Wheeler Basic Wash + Polish',
    shortName: 'Bike Wash + Polish',
    category: 'Car Wash',
    categorySlug: 'car-wash',
    description: 'Complete high-pressure foam wash combined with full exterior body glaze polishing, fiber trim rejuvenation, mud pad cleaning, underbody rinse, and rich tyre polish.',
    shortDescription: 'Full body foam wash + machine body polish, trim restoration & tyre shine — 249/-.',
    icon: 'Sparkles',
    heroImage: PLACEHOLDER_IMAGES.twoWheeler,
    price: { starting: 249, currency: '₹' },
    duration: '30 mins',
    features: [
      'Full body thick snow foam wash',
      'Mud pad and underbody pressure cleaning',
      'Full exterior body gloss glaze polish',
      'Fibre visor and plastic trim protective dressing',
      'Tyre cleaning and deep wet-look tyre polish',
      'All bikes & scooters at flat ₹249/-',
    ],
    howItWorks: [
      { step: 1, title: 'Foam Wash', description: 'Thorough pressure cleaning and mud removal.', icon: 'Droplets' },
      { step: 2, title: 'Body Polish', description: 'Hand glaze application for deep paint gloss.', icon: 'Gem' },
      { step: 3, title: 'Trim & Tyre Shine', description: 'Fiber protection and tyre dressing.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'What is the price of Two Wheeler Wash + Polish?', answer: 'Flat ₹249/- for all bikes, superbikes, and scooters.' },
    ],
    relatedServices: ['two-wheeler-basic-wash', 'basic-wash-polish'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.twoWheeler,
      after: PLACEHOLDER_IMAGES.twoWheeler,
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
    pricingTiers: {
      '3-5 seater': 699,
      '5-9 seater': 999,
      '8-12 seater': 1499,
    },
    features: [
      '3 to 5 Seater Sofa: ₹699/-',
      '5 to 9 Seater Sofa: ₹999/-',
      '8 to 12 Seater Sofa: ₹1,499/-',
      'Hot water extraction deep shampoo cleaning',
      'Stain removal for food, coffee, ink & pet stains',
      'Dust mite, germ & deep allergen elimination',
      'Fabric deodorization & odor neutralization',
      'Safe for fabric, leather, suede & microfiber',
      'Cushion and pillow deep suction cleaning included',
    ],
    howItWorks: [
      { step: 1, title: 'Inspect', description: 'Fabric type identification and stain assessment for proper treatment.', icon: 'Search' },
      { step: 2, title: 'Pre-Treat', description: 'Targeted stain treatment and pre-spray application.', icon: 'Spray' },
      { step: 3, title: 'Extract', description: 'Hot water extraction to remove deep-seated dirt and allergens.', icon: 'Droplets' },
      { step: 4, title: 'Protect', description: 'Fabric protector applied to resist future stains and spills.', icon: 'Shield' },
    ],
    faqs: [
      { question: 'What are the sofa cleaning rates by seater capacity?', answer: '3 to 5 seater: ₹699/-, 5 to 9 seater: ₹999/-, and 8 to 12 seater: ₹1,499/-.' },
      { question: 'How long does it take for the sofa to dry?', answer: 'Typically 3-4 hours. We use high-powered extraction to minimize moisture. Using fans speeds up the process.' },
      { question: 'Can you remove old stains?', answer: 'We can remove most stains including coffee, wine, ink, and food stains. Very old set-in stains may lighten significantly but might not fully disappear.' },
      { question: 'Is the cleaning safe for kids and pets?', answer: 'Absolutely! We use non-toxic, child-safe, and pet-friendly cleaning solutions.' },
      { question: 'Do you clean recliner sofas?', answer: 'Yes, we clean all types including recliners, sectionals, L-shaped, and modular sofas.' },
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
    description: 'Professional tile and grout cleaning for bathrooms, kitchens, balconies, and living areas. Wall tiles cleaning (₹499) and floor tiles cleaning (₹699) with deep steam and machine scrubbing.',
    shortDescription: 'Professional tile & grout cleaning — Wall tiles (₹499) & Floor tiles (₹699).',
    icon: 'Grid3X3',
    heroImage: PLACEHOLDER_IMAGES.tiles,
    price: { starting: 499, currency: '₹' },
    duration: '1-3 hours',
    features: [
      'Wall tiles cleaning option (₹499)',
      'Floor tiles machine scrubbing (₹699)',
      'Grout line deep cleaning and whitening',
      'Mold, soap scum, and hard water stain removal',
      'Grout sealing for long-lasting cleanliness',
      'Suitable for ceramic, vitrified, marble & granite',
    ],
    howItWorks: [
      { step: 1, title: 'Pre-Treat', description: 'Alkaline or acidic pre-treatment based on stain type and tile material.', icon: 'Spray' },
      { step: 2, title: 'Scrub', description: 'Machine scrubbing with rotary floor cleaner or wall tile brushes.', icon: 'RotateCcw' },
      { step: 3, title: 'Steam', description: 'High-temperature steam cleaning for grout lines and stubborn spots.', icon: 'Flame' },
      { step: 4, title: 'Seal', description: 'Grout sealant applied to prevent future staining and discoloration.', icon: 'Shield' },
    ],
    faqs: [
      { question: 'What is the price for wall vs floor tiles?', answer: 'Wall tiles cleaning starts at ₹499 and floor tiles cleaning starts at ₹699.' },
      { question: 'Will grout cleaning make it white again?', answer: 'Yes! Our deep cleaning process restores grout lines to near-original color.' },
    ],
    relatedServices: ['wall-tiles-cleaning', 'floor-tiles-cleaning', 'kitchen-basic-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.tiles,
      after: PLACEHOLDER_IMAGES.tiles,
    },
  },
  {
    id: 'wall-tiles-cleaning',
    slug: 'wall-tiles-cleaning',
    name: 'Wall Tiles Cleaning',
    shortName: 'Wall Tiles',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Specialized wall tile and grout deep cleaning for bathrooms and kitchens. High-pressure steam and eco-friendly descaling agents dissolve tough soap scum, lime scale, and yellow stains.',
    shortDescription: 'Professional wall tiles deep cleaning for bathrooms and kitchens — 499/-.',
    icon: 'Grid3X3',
    heroImage: PLACEHOLDER_IMAGES.tiles,
    price: { starting: 499, currency: '₹' },
    duration: '1-2 hours',
    features: [
      'Bathroom and kitchen wall tile deep wash',
      'Grout line scrubbing and whitening',
      'Soap scum and hard water scale removal',
      'High-pressure steam sanitization',
      'Safe for ceramic, porcelain, and vitrified tiles',
      'Anti-fungal protective finish',
    ],
    howItWorks: [
      { step: 1, title: 'Inspect', description: 'Inspection of wall tile type and stain accumulation.', icon: 'Search' },
      { step: 2, title: 'Descaling Soak', description: 'Foam application to loosen stubborn soap scum and scale.', icon: 'Spray' },
      { step: 3, title: 'Steam Scrub', description: 'Grout line scrubbing and high-pressure steam extraction.', icon: 'Flame' },
      { step: 4, title: 'Buff & Dry', description: 'Streak-free wipe-down and polishing.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'Will it remove hard water stains from bathroom wall tiles?', answer: 'Yes, our descaling solutions are specifically formulated to dissolve stubborn mineral scale and soap scum.' },
      { question: 'How much does it cost?', answer: 'Wall tiles cleaning is ₹499 flat starting price.' },
    ],
    relatedServices: ['floor-tiles-cleaning', 'kitchen-basic-cleaning', 'chimney-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.tiles,
      after: PLACEHOLDER_IMAGES.tiles,
    },
  },
  {
    id: 'floor-tiles-cleaning',
    slug: 'floor-tiles-cleaning',
    name: 'Floor Tiles Cleaning',
    shortName: 'Floor Tiles',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Heavy-duty rotary machine scrubbing for floor tiles across living rooms, kitchens, and balconies. Removes dark grout grime, grease, and embedded traffic stains.',
    shortDescription: 'Deep floor tiles cleaning with rotary scrubbing and grout whitening — 699/-.',
    icon: 'Grid3X3',
    heroImage: PLACEHOLDER_IMAGES.tiles,
    price: { starting: 699, currency: '₹' },
    duration: '2-3 hours',
    features: [
      'Rotary floor scrubber machine wash',
      'Grout line whitening and deep agitation',
      'Oil, grease, and stubborn grime removal',
      'Balcony, kitchen, bathroom & living floor care',
      'Anti-slip residue-free wash',
      'Fast drying within 1 hour',
    ],
    howItWorks: [
      { step: 1, title: 'Pre-Wash', description: 'Sweeping and application of professional tile cleanser.', icon: 'Spray' },
      { step: 2, title: 'Machine Scrub', description: 'Heavy rotary scrubber agitates deep into grout lines.', icon: 'RotateCcw' },
      { step: 3, title: 'Wet Extraction', description: 'Vacuum extraction lifts dirty slurry and residue.', icon: 'Droplets' },
      { step: 4, title: 'Final Buff', description: 'Microfiber buffing for a non-slip, clean finish.', icon: 'Sparkles' },
    ],
    faqs: [
      { question: 'Does floor tile cleaning make tiles slippery?', answer: 'No, our neutral rinsing process leaves the surface clean and non-slip.' },
      { question: 'What is the price?', answer: 'Floor tiles cleaning is ₹699 starting price.' },
    ],
    relatedServices: ['wall-tiles-cleaning', 'kitchen-deep-cleaning', 'carpet-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.tiles,
      after: PLACEHOLDER_IMAGES.tiles,
    },
  },
  {
    id: 'kitchen-basic-cleaning',
    slug: 'kitchen-basic-cleaning',
    name: 'Kitchen Basic Cleaning',
    shortName: 'Kitchen Basic',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Essential kitchen sanitization covering countertop degreasing, sink scrubbing, gas stove exterior cleaning, refrigerator and microwave exterior wipe-down, and floor mopping.',
    shortDescription: 'Basic kitchen cleaning — countertops, sink, stove & appliances — 799/-.',
    icon: 'Flame',
    heroImage: PLACEHOLDER_IMAGES.kitchen,
    price: { starting: 799, currency: '₹' },
    duration: '1.5-2 hours',
    features: [
      'Countertop and slab deep degreasing',
      'Gas stove surface and knob cleaning',
      'Stainless steel sink scrubbing and descaling',
      'Exterior wipe-down of fridge, microwave & oven',
      'Tile backsplash wipe and degreasing',
      'Anti-bacterial floor mopping',
    ],
    howItWorks: [
      { step: 1, title: 'Prep & Dust', description: 'Clearing countertops and dry dusting accessible surfaces.', icon: 'Wind' },
      { step: 2, title: 'Degrease', description: 'Food-safe degreasers applied to stove, slab, and tiles.', icon: 'Spray' },
      { step: 3, title: 'Scrub & Descale', description: 'Sink, tap, and stainless steel fixture polishing.', icon: 'Sparkles' },
      { step: 4, title: 'Floor Mopping', description: 'Disinfectant floor mopping for a spotless finish.', icon: 'ShieldCheck' },
    ],
    faqs: [
      { question: 'Are the cleaning chemicals food-safe?', answer: 'Yes! We use certified non-toxic, food-grade solutions safe for food preparation zones.' },
      { question: 'What is the price?', answer: 'Kitchen basic cleaning is ₹799.' },
    ],
    relatedServices: ['kitchen-deep-cleaning', 'chimney-cleaning', 'wall-tiles-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.kitchen,
      after: PLACEHOLDER_IMAGES.kitchen,
    },
  },
  {
    id: 'kitchen-deep-cleaning',
    slug: 'kitchen-deep-cleaning',
    name: 'Kitchen Deep Cleaning',
    shortName: 'Kitchen Deep',
    category: 'Home Cleaning',
    categorySlug: 'home',
    description: 'Complete top-to-bottom kitchen rejuvenation. Includes inside & outside cabinet deep cleaning, chimney filter degreasing, exhaust fan cleaning, appliance sanitization, wall tile descaling, and floor machine scrubbing.',
    shortDescription: 'Comprehensive kitchen deep cleaning — cabinets, chimney, tiles & floor — 1599/-.',
    icon: 'Flame',
    heroImage: PLACEHOLDER_IMAGES.kitchen,
    price: { starting: 1599, currency: '₹' },
    duration: '3-4 hours',
    features: [
      'Full interior and exterior cabinet deep cleaning',
      'Chimney filter, hood and exhaust fan degreasing',
      'Full kitchen wall tile descaling and steam sanitizing',
      'Gas stove, knobs, and burner deep carbon removal',
      'Appliance interior/exterior deep sanitization',
      'Sink, drainage trap & chrome fixture descaling',
      'Machine scrubbed floor sanitization',
    ],
    howItWorks: [
      { step: 1, title: 'Empty & Prep', description: 'Careful handling of contents and surface prep.', icon: 'ClipboardCheck' },
      { step: 2, title: 'Steam Degrease', description: 'High-temperature steam to dissolve hardened oils.', icon: 'Flame' },
      { step: 3, title: 'Cabinet Detail', description: 'Internal and external cabinet scrubbing and disinfection.', icon: 'Sparkles' },
      { step: 4, title: 'Sanitize & Floor', description: 'Full anti-bacterial fogging and floor scrubbing.', icon: 'ShieldCheck' },
    ],
    faqs: [
      { question: 'Is chimney cleaning included in deep cleaning?', answer: 'Yes! Chimney filter, hood, and exhaust fan degreasing is included in Kitchen Deep Cleaning.' },
      { question: 'What is the price?', answer: 'Kitchen deep cleaning is ₹1599.' },
    ],
    relatedServices: ['kitchen-basic-cleaning', 'chimney-cleaning', 'floor-tiles-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.kitchen,
      after: PLACEHOLDER_IMAGES.kitchen,
    },
  },
];

// ═══════════════════════════════════════════════════════════════
// GYM CLEANING SERVICES
// ═══════════════════════════════════════════════════════════════

const gymCleaningServices = [
  {
    id: 'gym-basic-cleaning',
    slug: 'gym-basic-cleaning',
    name: 'Gym Basic Cleaning',
    shortName: 'Gym Basic',
    category: 'Gym Cleaning',
    categorySlug: 'gym',
    description: 'Thorough sanitization and hygiene maintenance for fitness centres and private workout studios. Includes cardio and strength equipment wipe-down with hospital-grade antibacterial disinfectants, rubber floor mopping, mirror polishing, and locker room freshness.',
    shortDescription: 'Equipment disinfectant wipe, rubber floor cleaning, mirror polish & sanitization — 2499/-.',
    icon: 'Dumbbell',
    heroImage: PLACEHOLDER_IMAGES.gym,
    price: { starting: 2499, currency: '₹' },
    duration: '2-3 hours',
    features: [
      'Cardio & weight machines hospital-grade sanitization',
      'Free weights, dumbbells & barbells antimicrobial wipe',
      'Rubber mat & gym flooring deep mopping with degreaser',
      'Full wall mirrors streak-free cleaning and polishing',
      'Locker room & washroom sanitization and deodorizing',
      'Touchpoint disinfection (handles, pins, screens)',
      'Flat rate: ₹2,499/-',
    ],
    howItWorks: [
      { step: 1, title: 'Dust & Debris', description: 'Dry suction and dust extraction across workout floor and machines.', icon: 'Wind' },
      { step: 2, title: 'Disinfection', description: 'Hospital-grade virucidal wipe across all weights and contact surfaces.', icon: 'Sparkles' },
      { step: 3, title: 'Floor & Glass', description: 'Mirror streak-free buffing and heavy-duty rubber floor mopping.', icon: 'Droplets' },
    ],
    faqs: [
      { question: 'What is the price for Gym Basic Cleaning?', answer: 'Gym Basic Cleaning is ₹2,499/- flat.' },
      { question: 'Are the disinfectants safe for gym equipment?', answer: 'Yes, we use equipment-safe, non-corrosive antibacterial sanitizers that will not degrade rubber grips or leather padding.' },
    ],
    relatedServices: ['gym-deep-cleaning', 'floor-tiles-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.gym,
      after: PLACEHOLDER_IMAGES.gym,
    },
  },
  {
    id: 'gym-deep-cleaning',
    slug: 'gym-deep-cleaning',
    name: 'Gym Deep Cleaning',
    shortName: 'Gym Deep',
    category: 'Gym Cleaning',
    categorySlug: 'gym',
    description: 'Comprehensive industrial-grade deep cleaning and fogging sanitization for commercial gyms, CrossFit boxes, and athletic clubs. Covers high-temperature steam sterilization, rotary floor machine scrubbing, exhaust & AC filter disinfection, upholstery sweat stain removal, and full shower/sauna descaling.',
    shortDescription: 'Industrial rotary floor scrub, steam sterilization, AC vents & antimicrobial fogging — 4999/-.',
    icon: 'Sparkles',
    heroImage: PLACEHOLDER_IMAGES.gymHero,
    price: { starting: 4999, currency: '₹' },
    duration: '4-6 hours',
    features: [
      'Heavy rotary scrubber wash for high-density rubber gym flooring',
      'Steam sterilization of bench padding, upholstery & vinyl covers',
      'Under-machine & tight-corner industrial dust extraction',
      'AC filter, ceiling fan & ventilation vent degreasing and sanitization',
      'Complete shower, sauna & changing room chemical descaling',
      'Full facility antimicrobial ultra-fine thermal fogging',
      'All dumbbell racks, weight plates & cable pulley details',
      'Flat rate: ₹4,999/-',
    ],
    howItWorks: [
      { step: 1, title: 'Deep Extraction', description: 'Industrial vacuuming beneath all machines, platforms, and racks.', icon: 'Wind' },
      { step: 2, title: 'Machine Scrub', description: 'Rotary scrubbing of sweat-embedded gym rubber and tile floors.', icon: 'RotateCcw' },
      { step: 3, title: 'Steam & Descale', description: 'High-heat steam sterilization for pads and wet shower areas.', icon: 'Droplets' },
      { step: 4, title: 'Fogging', description: 'Complete facility antibacterial fogging for long-lasting hygiene.', icon: 'ShieldCheck' },
    ],
    faqs: [
      { question: 'What is the price for Gym Deep Cleaning?', answer: 'Gym Deep Cleaning is ₹4,999/-.' },
      { question: 'Can deep cleaning be done overnight?', answer: 'Yes! We offer overnight and off-peak hours cleaning so your gym operations remain uninterrupted.' },
    ],
    relatedServices: ['gym-basic-cleaning', 'floor-tiles-cleaning'],
    beforeAfterImages: {
      before: PLACEHOLDER_IMAGES.gymHero,
      after: PLACEHOLDER_IMAGES.gymHero,
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
  {
    id: 'gym',
    slug: 'gym',
    name: 'Gym Cleaning Services',
    shortName: 'Gym Cleaning',
    description: 'Professional sanitization and deep hygiene for fitness studios, private gyms, and commercial fitness centers.',
    icon: 'Dumbbell',
    heroImage: PLACEHOLDER_IMAGES.gymHero,
    gradient: 'from-primary via-emerald-600 to-primary-dark',
    services: gymCleaningServices,
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
  gymCleaningServices,
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
  ...gymCleaningServices,
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
  gymCleaningServices,
  serviceCategories,
  testimonials,
  generalFaqs,
  franchiseBenefits,
  allServices,
  getServiceBySlug,
  getServicesByCategory,
  getRelatedServices,
};
