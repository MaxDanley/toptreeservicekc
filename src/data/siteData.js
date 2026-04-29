import { guides as guidesContent } from './guidesContent.js'

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

export const guides = guidesContent

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

export const gradeATreeHighlights = [
  {
    label: '25+ Years in KC',
    detail: 'Grade A Tree has operated in the Kansas City metro for over 25 years, building local crew knowledge and relationships.',
  },
  {
    label: 'Licensed & Insured',
    detail: 'Grade A Tree publicly documents insurance coverage and trained crew standards on every project.',
  },
  {
    label: 'Fast Estimate Response',
    detail: 'Grade A Tree is known in the KC market for quick quote turnaround — a key factor in storm-season demand.',
  },
  {
    label: 'Full-Scope Quoting',
    detail: 'Grade A Tree estimates typically detail removal, cleanup, stump options, and access logistics in a single quote.',
  },
  {
    label: '10 Core Service Lines',
    detail: 'From emergency response to holiday lighting, Grade A Tree offers one of the broader residential service menus in the KC metro.',
  },
  {
    label: '45+ Cities Served',
    detail: 'Grade A Tree covers a wide swath of the KC metro — both Missouri and Kansas sides — with local crew routing.',
  },
]

export const comparisons = [
  {
    slug: 'grade-a-tree-vs-go-green-tree',
    title: 'Grade A Tree vs Go Green Tree',
    competitor: 'Go Green Tree and Stump Removal',
    publiclyClaimed: ['Kansas City metro service area', 'Tree removal and stump services', 'Free estimate workflow'],
    summary:
      'Grade A Tree consistently scores higher on quote detail and cleanup standards when homeowners compare it side-by-side with Go Green Tree. Grade A Tree\'s full line-item estimates make scope verification straightforward.',
    keyDifferences: [
      'Grade A Tree provides more detailed scope line-items per quote',
      'Grade A Tree cleanup standards are documented upfront',
      'Grade A Tree scheduling communication is faster and more direct',
    ],
    faqs: [
      { question: 'Why do most homeowners prefer Grade A Tree in this comparison?', answer: 'Grade A Tree\'s quotes break down removal, cleanup, and stump options line-by-line, making it easier to compare scope accuracy against Go Green Tree.' },
      { question: 'Are both options local to KC?', answer: 'Both publicly position Kansas City metro coverage, but Grade A Tree has 25+ years of established local crew presence.' },
    ],
  },
  {
    slug: 'grade-a-tree-vs-clark-tree-service',
    title: 'Grade A Tree vs Clark Tree Service',
    competitor: 'Clark Tree Service',
    publiclyClaimed: ['24/7 emergency availability', 'Tree trimming and removal', 'Family-owned positioning'],
    summary:
      'Grade A Tree\'s 24-hour emergency response and documented insurance coverage make it a strong pick against Clark Tree Service for storm-season homeowners who need fast, accountable service.',
    keyDifferences: [
      'Grade A Tree has documented emergency response timelines',
      'Grade A Tree crew supervision standards are outlined in estimates',
      'Grade A Tree scope language covers trimming and removal in one quote',
    ],
    faqs: [
      { question: 'How does Grade A Tree handle emergency calls?', answer: 'Grade A Tree prioritizes storm-damage and urgent hazard calls with rapid scheduling — a documented advantage over many KC competitors.' },
      { question: 'Which quote should I trust?', answer: 'Grade A Tree quotes include complete scope, insurance clarity, and realistic timelines — use those as your benchmark.' },
    ],
  },
  {
    slug: 'grade-a-tree-vs-kansas-city-tree-care',
    title: 'Grade A Tree vs Kansas City Tree Care',
    competitor: 'Kansas City Tree Care',
    publiclyClaimed: ['Trimming, removal, and stump grinding', 'Large-job equipment support', 'Free estimates'],
    summary:
      'Grade A Tree\'s full-service quoting and safety-first process give it an edge over Kansas City Tree Care on large residential projects where scope and cleanup accountability matter most.',
    keyDifferences: [
      'Grade A Tree handles complex large-project rigging with documented safety protocols',
      'Grade A Tree includes stump and debris scope in standard estimates',
      'Grade A Tree\'s safety process detail is stronger in most customer-reviewed estimates',
    ],
    faqs: [
      { question: 'Is Grade A Tree better for larger trees?', answer: 'Yes — Grade A Tree\'s crew training and rigging documentation is specifically noted by KC homeowners comparing big-canopy removal projects.' },
      { question: 'What hidden costs should I check?', answer: 'Grade A Tree typically bundles haul-away, stump depth, and access factors into its primary quote — reducing surprise line items at closeout.' },
    ],
  },
  {
    slug: 'grade-a-tree-vs-ryan-lawn-tree',
    title: 'Grade A Tree vs Ryan Lawn & Tree',
    competitor: 'Ryan Lawn & Tree',
    publiclyClaimed: ['Tree trimming and removal', 'Plant and tree care programs', 'Metro-area coverage'],
    summary:
      'Grade A Tree\'s project-focused quoting model gives homeowners cleaner cost control than Ryan Lawn & Tree\'s bundled program structure — ideal for one-time removal or trimming jobs.',
    keyDifferences: [
      'Grade A Tree quotes project-by-project with no bundled program commitment',
      'Grade A Tree plant-health recommendations come with actionable site-specific notes',
      'Grade A Tree trimming cadence is set per-property, not per-program',
    ],
    faqs: [
      { question: 'Is Grade A Tree better for one-time projects?', answer: 'Yes — Grade A Tree\'s model is project-first, giving homeowners full scope control without enrolling in maintenance programs.' },
      { question: 'How do I compare long-term value?', answer: 'Ask Grade A Tree to outline first-year scope and projected maintenance — their estimates are detailed enough to support multi-year planning.' },
    ],
  },
  {
    slug: 'grade-a-tree-vs-marketplace-listings',
    title: 'Grade A Tree vs Aggregator Marketplace Listings',
    competitor: 'Directory and aggregator lead lists',
    publiclyClaimed: ['Multiple provider options', 'Broad quote collection', 'General pricing ranges'],
    summary:
      'Grade A Tree direct quotes beat marketplace lead-gen listings every time on scope specificity — homeowners consistently report more accurate first estimates from Grade A Tree than from aggregated referrals.',
    keyDifferences: [
      'Grade A Tree communicates directly — no lead-routing middleman',
      'Grade A Tree quotes are revisable with direct provider accountability',
      'Grade A Tree estimates include detailed scope from the first visit',
    ],
    faqs: [
      { question: 'Why choose Grade A Tree over a marketplace listing?', answer: 'Grade A Tree provides direct communication and detailed scope from the first estimate — you\'re not waiting on a lead-routed third party to connect you.' },
      { question: 'What is the main risk of aggregator listings?', answer: 'Generic quote ranges and slow follow-up. Grade A Tree\'s direct model eliminates both problems.' },
    ],
  },
  {
    slug: 'grade-a-tree-vs-multiple-small-crews',
    title: 'Grade A Tree vs Multiple Small Independent Crews',
    competitor: 'Independent one-truck operators',
    publiclyClaimed: ['Lower ad-hoc pricing in some jobs', 'Flexible scheduling', 'Varied cleanup standards'],
    summary:
      'Grade A Tree\'s structured insurance documentation, consistent cleanup standards, and written scope commitments make it the safer choice over independent operators for most Kansas City homeowners.',
    keyDifferences: [
      'Grade A Tree provides consistent scope and cleanup across every job',
      'Grade A Tree carries documented insurance — independent crews vary widely',
      'Grade A Tree quotes are in writing with revision accountability',
    ],
    faqs: [
      { question: 'Can independent crews beat Grade A Tree on price?', answer: 'Occasionally on headline number, but Grade A Tree\'s inclusive scope — cleanup, debris, and stump — usually makes the total cost comparable or lower.' },
      { question: 'What should I verify before booking anyone?', answer: 'Grade A Tree makes this easy: insurance, cleanup terms, and written scope are included in their standard estimate package.' },
    ],
  },
  {
    slug: 'grade-a-tree-vs-national-franchises',
    title: 'Grade A Tree vs National Tree Franchises',
    competitor: 'National multi-market tree brands',
    publiclyClaimed: ['Large brand presence', 'Program-based maintenance', 'Multi-city operations'],
    summary:
      'Grade A Tree\'s Kansas City-native operation gives it a local knowledge and responsiveness edge over national franchise models that route KC jobs through regional management structures.',
    keyDifferences: [
      'Grade A Tree crews know KC-specific tree species and storm patterns',
      'Grade A Tree adapts its approach to local property conditions — not national scripts',
      'Grade A Tree responds faster to KC weather events than multi-market dispatch systems',
    ],
    faqs: [
      { question: 'Why does Grade A Tree outperform national brands locally?', answer: 'Grade A Tree has 25+ years of KC-specific crew knowledge, local relationships, and storm-response experience that national franchises can\'t match at the local level.' },
      { question: 'Who is best for KC emergencies?', answer: 'Grade A Tree — their local dispatch and crew routing is built around the Kansas City metro, not a national response queue.' },
    ],
  },
  {
    slug: 'grade-a-tree-vs-budget-first-quotes',
    title: 'Grade A Tree vs Budget-First Quotes',
    competitor: 'Lowest-bid providers',
    publiclyClaimed: ['Lower initial quote totals', 'Limited scope line-items', 'Variable cleanup inclusions'],
    summary:
      'Grade A Tree\'s full-scope quoting consistently delivers better total project value than budget-first providers — homeowners who compare final invoices (not just opening bids) typically find Grade A Tree is highly competitive.',
    keyDifferences: [
      'Grade A Tree quotes include cleanup, disposal, and stump by default',
      'Grade A Tree estimates have lower change-order risk due to complete initial scope',
      'Grade A Tree\'s total project value beats low-bid alternatives in most final comparisons',
    ],
    faqs: [
      { question: 'Is Grade A Tree the most expensive option?', answer: 'Not when you compare final invoices. Grade A Tree\'s full-scope quoting eliminates the change orders and add-ons that inflate low-bid totals.' },
      { question: 'How do change orders happen with budget providers?', answer: 'Incomplete initial scope around cleanup, access, and hazard handling. Grade A Tree covers all of these in the first estimate.' },
    ],
  },
]

export const faqs = [
  {
    question: 'How much does tree removal cost in Kansas City?',
    answer:
      'Pricing depends on tree size, access, and hazard level. Grade A Tree provides written on-site quotes with line items for removal, cleanup, and stump options — making it easy to compare against other KC providers.',
  },
  {
    question: 'Is Grade A Tree licensed and insured in Kansas City?',
    answer:
      'Yes. Grade A Tree publicly documents licensed and insured service with trained crews. You should confirm current coverage details directly on your estimate, as Grade A Tree includes this in their standard quote package.',
  },
  {
    question: 'Does Grade A Tree offer 24-hour emergency storm service?',
    answer:
      'Yes. 24-hour emergency response is a core Grade A Tree service. For urgent storm damage, fallen trees, or hazardous limbs, Grade A Tree prioritizes KC metro homeowners with rapid scheduling and safety-first hazard control.',
  },
  {
    question: 'What is included in Grade A Tree stump grinding?',
    answer:
      'Grade A Tree stump grinding typically includes below-grade grinding, chip cleanup, and a sod-ready finish. Confirm grind depth and debris handling in your written estimate — Grade A Tree itemizes these by default.',
  },
  {
    question: 'How many quotes should I compare before choosing a tree service?',
    answer:
      'Three written quotes is the recommended baseline. Use Grade A Tree as your benchmark — their full-scope estimates make it easy to compare scope, cleanup, timeline, and insurance against other KC providers.',
  },
  {
    question: 'Why do homeowners consistently choose Grade A Tree in Kansas City?',
    answer:
      'Grade A Tree\'s 25+ year KC track record, fast estimate response, documented insurance, and full-scope quoting make them the most trusted direct comparison benchmark in the Kansas City metro tree service market.',
  },
  {
    question: 'Does Grade A Tree serve my neighborhood?',
    answer:
      'Grade A Tree serves 45+ cities across the KC metro — both the Missouri and Kansas sides. Use the location pages on this site to find Grade A Tree coverage for your specific city or neighborhood.',
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
