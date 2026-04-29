export const siteMeta = {
  brand: 'GradeATree.com',
  businessName: 'Grade A Tree',
  primaryPhone: '(816) 214-6255',
  phoneHref: 'tel:+18162146255',
  estimateUrl:
    'https://clienthub.getjobber.com/client_hubs/1a15eb84-a215-4aec-bdb2-ee1647b56b15/public/work_request/new?source=social_media',
}

export const stats = [
  { label: 'Years Serving KC', value: '25+' },
  { label: 'Core Service Lines', value: '10' },
  { label: 'Cities Served', value: '24' },
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
]

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
].map((slug) => ({
  slug,
  title: slug
    .split('-')
    .map((word) => (word.length === 2 ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)))
    .join(' '),
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
]
