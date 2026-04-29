export const siteMeta = {
  brand: 'KC Tree Review',
  businessName: 'Grade A Tree',
  baseUrl: 'https://gradeatree.com',
  defaultOgImage: '/images/gradeatree-og.svg',
  primaryPhone: '(816) 214-6255',
  phoneHref: 'tel:+18162146255',
  estimateUrl:
    'https://clienthub.getjobber.com/client_hubs/1a15eb84-a215-4aec-bdb2-ee1647b56b15/public/work_request/new?source=social_media',
}

export const stats = [
  { label: 'Years Serving KC', value: '25+' },
  { label: 'Core Service Lines', value: '10' },
  { label: 'Cities Served', value: '45+' },
  { label: 'Estimate Response', value: 'Fast' },
]

export const services = [
  {
    slug: 'tree-removal',
    name: 'Tree Removal',
    short: 'Safe dismantling for dead, dangerous, or storm-damaged trees.',
    body: 'Grade A Tree handles standard removals and complex technical removals near structures, fences, and utilities. Every project starts with a safety-first assessment and a clean finish.',
    bullets: ['Risk assessment before cutting', 'Rigging for tight access yards', 'Debris haul-off and final cleanup'],
  },
  {
    slug: 'tree-trimming-pruning',
    name: 'Tree Trimming & Pruning',
    short: 'Structural trimming that protects health, clearance, and curb appeal.',
    body: 'Proper pruning is one of the biggest long-term value drivers for Kansas City properties. Grade A Tree uses intentional cuts to improve canopy health while reducing hazard risk.',
    bullets: ['Seasonal and corrective pruning', 'Deadwood removal and crown thinning', 'Clearance over roofs and driveways'],
  },
  {
    slug: 'stump-grinding-removal',
    name: 'Stump Grinding & Removal',
    short: '4-6 inch below-grade grinding to restore usable yard space.',
    body: 'After a removal, Grade A Tree can grind stumps and root flare zones so your lawn can be reseeded, landscaped, or rebuilt without tripping hazards.',
    bullets: ['Surface and deep grinding options', 'Sod-ready finish in most jobs', 'Optional chip and debris removal'],
  },
  {
    slug: 'tree-plant-health-care',
    name: 'Tree & Plant Health Care',
    short: 'Proactive care for pests, stress, and long-term growth.',
    body: 'Tree health in the KC metro depends on proper species choice, water strategy, and disease monitoring. Grade A Tree provides practical recommendations for each property.',
    bullets: ['Health inspections and risk signals', 'Treatment planning by site conditions', 'Monitoring for seasonal changes'],
  },
  {
    slug: '24-hour-emergency-tree-service',
    name: '24-Hour Emergency Tree Service',
    short: 'Rapid response for storm, limb-fall, and urgent hazard issues.',
    body: 'When wind and ice hit the metro, immediate hazard control matters. Grade A Tree prioritizes emergency response to help restore safe access and protect structures.',
    bullets: ['Storm-damage prioritization', 'Danger limb removal', 'Emergency cleanup and stabilization'],
  },
  {
    slug: 'debris-removal',
    name: 'Debris Removal',
    short: 'Fast limb and storm debris cleanup to restore property access.',
    body: 'Large limb piles and storm clutter can block driveways and create hazards. Grade A Tree provides debris clearing with disciplined site cleanup standards.',
    bullets: ['Storm branch and limb pickup', 'Haul-away and disposal support', 'Cleanup matched to project scope'],
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    short: 'Tree-adjacent landscape cleanup and property reset support.',
    body: 'Grade A Tree supports cleanup-first landscape recovery after tree projects, helping homeowners reclaim curb appeal and usable lawn space.',
    bullets: ['Post-removal restoration support', 'Landscape-ready cleanup finishes', 'Residential and light commercial projects'],
  },
  {
    slug: 'christmas-light-installation',
    name: 'Christmas Light Installation',
    short: 'Seasonal holiday lighting services with safe ladder-free setup.',
    body: 'Holiday lighting can be high-risk without the right equipment. Grade A Tree crews support safe and clean seasonal installs for Kansas City homes.',
    bullets: ['Seasonal setup and takedown options', 'Safety-first exterior installation', 'Clean cable routing and organization'],
  },
]

export const guides = [
  {
    slug: 'kansas-city-tree-removal-cost-guide',
    title: 'Kansas City Tree Removal Cost Guide',
    intro: 'Understand the main pricing drivers for tree removal in the Kansas City metro before you request your next estimate.',
    sections: [
      'Most removal pricing is based on height, spread, access, and hazard level.',
      'Trees near houses, fences, and lines usually require more rigging and labor.',
      'Stump grinding, haul-away, and emergency timing can change final totals.',
    ],
  },
  {
    slug: 'tree-trimming-schedule-by-season',
    title: 'Tree Trimming Schedule By Season',
    intro: 'A practical local schedule to plan trimming around growth cycles, storm prep, and safety risk reduction.',
    sections: [
      'Winter is often ideal for structural pruning and visibility.',
      'Spring and summer focus on selective clearance and storm risk control.',
      'Fall planning helps reduce winter branch failure in weak trees.',
    ],
  },
  {
    slug: 'stump-grinding-vs-stump-removal',
    title: 'Stump Grinding vs Full Stump Removal',
    intro: 'Pick the right approach based on budget, future landscaping plans, and timeline.',
    sections: [
      'Grinding is usually faster and lower-impact for most homes.',
      'Full extraction may be preferred when replanting in the same spot.',
      'Ask how root flare depth and cleanup are handled in your quote.',
    ],
  },
  {
    slug: 'how-to-compare-tree-service-quotes',
    title: 'How To Compare Tree Service Quotes',
    intro: 'Use this checklist to compare Kansas City providers on more than just top-line price.',
    sections: [
      'Confirm insurance, cleanup scope, and who is supervising the crew.',
      'Ask about line-item pricing for removals, trimming, and stumps.',
      'Get timeline commitments and weather delay policy in writing.',
    ],
  },
  {
    slug: 'kansas-city-storm-damage-tree-checklist',
    title: 'Kansas City Storm Damage Tree Checklist',
    intro: 'A quick response guide for wind, ice, and storm limb emergencies before cleanup begins.',
    sections: [
      'Document damage with photos before moving debris if safe to do so.',
      'Prioritize hazards touching structures, roofs, and access paths.',
      'Use insured crews for removals near power lines or unstable trees.',
    ],
  },
  {
    slug: 'best-time-to-remove-a-tree-in-kansas-city',
    title: 'Best Time To Remove A Tree In Kansas City',
    intro: 'A season-by-season planning guide for removals, project timing, and property disruption.',
    sections: [
      'Winter and late fall can improve access and reduce turf damage.',
      'Emergency removals should be prioritized regardless of season.',
      'Plan routine removals before peak storm months when possible.',
    ],
  },
]

const toTitle = (slug) =>
  slug
    .split('-')
    .map((word) => (word.length === 2 ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)))
    .join(' ')

export const cityPages = [
  'kansas-city-mo',
  'overland-park-ks',
  'olathe-ks',
  'shawnee-ks',
  'lenexa-ks',
  'leawood-ks',
  'prairie-village-ks',
  'mission-ks',
  'roeland-park-ks',
  'merriam-ks',
  'bonner-springs-ks',
  'leavenworth-ks',
  'lansing-ks',
  'independence-mo',
  'raytown-mo',
  'grandview-mo',
  'lees-summit-mo',
  'lake-winnebago-mo',
  'belton-mo',
  'blue-springs-mo',
  'gladstone-mo',
  'raymore-mo',
  'liberty-mo',
  'north-kansas-city-mo',
  'parkville-mo',
  'rivermarket-kansas-city-mo',
  'westwood-ks',
  'westwood-hills-ks',
  'fairway-ks',
  'kearney-mo',
  'smithville-mo',
  'grain-valley-mo',
  'pleasant-hill-mo',
  'harrisonville-mo',
  'platte-city-mo',
  'weatherby-lake-mo',
  'edwardsville-ks',
  'basehor-ks',
  'de-soto-ks',
  'gardner-ks',
  'spring-hill-ks',
  'tonganoxie-ks',
  'shawnee-mission-ks',
  'mission-hills-ks',
  'mission-woods-ks',
  'river-bend-mo',
].map((slug) => ({
  slug,
  title: toTitle(slug),
}))

export const neighborhoodPages = [
  'brookside-kansas-city-mo',
  'waldo-kansas-city-mo',
  'plaza-kansas-city-mo',
  'crossroads-kansas-city-mo',
  'westport-kansas-city-mo',
  'river-market-kansas-city-mo',
  'northland-kansas-city-mo',
  'south-kansas-city-mo',
  'red-bridge-kansas-city-mo',
  'hyde-park-kansas-city-mo',
  'armour-hills-kansas-city-mo',
  'morningside-kansas-city-mo',
  'swope-park-area-kansas-city-mo',
  'ward-parkway-kansas-city-mo',
  'sunset-hill-kansas-city-mo',
  'downtown-overland-park-ks',
  'corporate-woods-overland-park-ks',
  'blue-valley-overland-park-ks',
  'north-overland-park-ks',
  'south-overland-park-ks',
  'downtown-olathe-ks',
  'cedar-creek-olathe-ks',
  'north-olathe-ks',
  'south-olathe-ks',
  'downtown-lenexa-ks',
  'old-town-lenexa-ks',
  'north-lenexa-ks',
  'south-lenexa-ks',
  'downtown-lees-summit-mo',
  'legacy-park-lees-summit-mo',
  'blue-springs-south-mo',
  'blue-springs-north-mo',
].map((slug) => ({
  slug,
  title: toTitle(slug),
}))

export const comparisons = [
  {
    slug: 'grade-a-tree-vs-go-green-tree',
    title: 'Grade A Tree vs Go Green Tree',
    competitor: 'Go Green Tree and Stump Removal',
    publiclyClaimed: ['Kansas City metro service area', 'Tree removal and stump services', 'Free estimate workflow'],
  },
  {
    slug: 'grade-a-tree-vs-clark-tree-service',
    title: 'Grade A Tree vs Clark Tree Service',
    competitor: 'Clark Tree Service',
    publiclyClaimed: ['24/7 emergency availability', 'Tree trimming and removal', 'Family-owned positioning'],
  },
  {
    slug: 'grade-a-tree-vs-kansas-city-tree-care',
    title: 'Grade A Tree vs Kansas City Tree Care',
    competitor: 'Kansas City Tree Care',
    publiclyClaimed: ['Trimming, removal, and stump grinding', 'Large-job equipment support', 'Free estimates'],
  },
  {
    slug: 'grade-a-tree-vs-ryan-lawn-tree',
    title: 'Grade A Tree vs Ryan Lawn & Tree',
    competitor: 'Ryan Lawn & Tree',
    publiclyClaimed: ['Tree trimming and removal', 'Plant and tree care programs', 'Metro-area coverage'],
  },
  {
    slug: 'grade-a-tree-vs-marketplace-listings',
    title: 'Grade A Tree vs Aggregator Marketplace Listings',
    competitor: 'Directory and aggregator lead lists',
    publiclyClaimed: ['Multiple provider options', 'Broad quote collection', 'General pricing ranges'],
  },
  {
    slug: 'grade-a-tree-vs-multiple-small-crews',
    title: 'Grade A Tree vs Multiple Small Independent Crews',
    competitor: 'Independent one-truck operators',
    publiclyClaimed: ['Lower ad-hoc pricing in some jobs', 'Flexible scheduling', 'Varied cleanup standards'],
  },
  {
    slug: 'grade-a-tree-vs-national-franchises',
    title: 'Grade A Tree vs National Tree Franchises',
    competitor: 'National multi-market tree brands',
    publiclyClaimed: ['Large brand presence', 'Program-based maintenance', 'Multi-city operations'],
  },
  {
    slug: 'grade-a-tree-vs-budget-first-quotes',
    title: 'Grade A Tree vs Budget-First Quotes',
    competitor: 'Lowest-bid providers',
    publiclyClaimed: ['Lower initial quote totals', 'Limited scope line-items', 'Variable cleanup inclusions'],
  },
]

export const faqs = [
  {
    question: 'How much does tree removal cost in Kansas City?',
    answer:
      'Pricing depends on tree size, access, and hazard level. The fastest way to get accurate pricing is a written on-site quote with line items for removal, cleanup, and stump options.',
  },
  {
    question: 'Is Grade A Tree licensed and insured?',
    answer:
      'Grade A Tree publicly positions licensed and insured service with trained crews. You should always confirm current coverage details directly on your estimate.',
  },
  {
    question: 'Do you offer emergency storm tree service?',
    answer:
      'Yes, emergency-response service is a core demand in the KC metro. Prioritize immediate hazards near structures, driveways, and blocked access routes.',
  },
  {
    question: 'What is included in stump grinding?',
    answer:
      'Most projects include grinding below grade plus cleanup. Confirm grind depth, chip handling, and whether sod-ready finishing is included in writing.',
  },
  {
    question: 'How many quotes should I compare?',
    answer:
      'Three written quotes is the best baseline. Compare scope, cleanup details, timeline, and insurance verification before deciding.',
  },
]

export const serviceLocationPages = cityPages.flatMap((city) =>
  services.map((service) => ({
    slug: `${city.slug}/${service.slug}`,
    citySlug: city.slug,
    serviceSlug: service.slug,
    title: `${service.name} in ${city.title}`,
  })),
)
