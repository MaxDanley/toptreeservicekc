import fs from 'node:fs'
import path from 'node:path'
import { cityPages, comparisons, customCityServicePages, services } from '../src/data/siteData.js'
import { guides } from '../src/data/guidesContent.js'

const BASE_URL = 'https://gradeatree.com'
const SITE_TITLE = 'KC Tree Review'
const OUTPUT_ROOT = path.resolve('public')

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function writePage(relativePath, html) {
  const outDir = path.join(OUTPUT_ROOT, relativePath)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8')
}

function getHash(text) {
  return [...text].reduce((acc, char) => acc + char.charCodeAt(0), 0)
}

function baseTemplate({ title, description, canonical, keywords, body, schema }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(keywords)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:site_name" content="${escapeHtml(SITE_TITLE)}" />
    <meta property="og:image" content="${BASE_URL}/images/gradeatree-og.svg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${BASE_URL}/images/gradeatree-og.svg" />
    <style>
      body { font-family: Inter, system-ui, sans-serif; background: #f6f8ff; color: #1d2744; margin: 0; }
      main { max-width: 880px; margin: 0 auto; padding: 24px; }
      .card { background: #fff; border: 1px solid #d6e0ff; border-radius: 14px; padding: 20px; margin-bottom: 16px; }
      h1,h2,h3 { color: #111a36; margin-top: 0; }
      .eyebrow { color: #5f6ca3; text-transform: uppercase; letter-spacing: .08em; font-size: 12px; margin: 0 0 6px; }
      .cta { display: inline-block; text-decoration: none; background: linear-gradient(135deg,#2f79ff,#8f4dff); color:#fff; border-radius: 10px; padding: 10px 14px; font-weight: 700; margin-right: 8px; }
      ul { margin: 8px 0 0; }
      li { margin-bottom: 6px; }
      .grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 10px; }
      .chip { display: inline-block; border: 1px solid #d5dfff; border-radius: 999px; padding: 4px 10px; margin: 4px 6px 0 0; font-size: 12px; color: #4f5e98; }
      .muted { color: #5f6a95; }
      .footer-link { color: #355ec0; text-decoration: none; font-weight: 600; }
    </style>
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body>
    <main>${body}</main>
  </body>
</html>`
}

function renderGuidePage(guide) {
  const canonical = `${BASE_URL}/guides/${guide.slug}`
  const description = guide.intro
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description,
    datePublished: '2026-04-28',
    dateModified: '2026-04-28',
    author: { '@type': 'Organization', name: 'KC Tree Review Editorial Team' },
    publisher: { '@type': 'Organization', name: SITE_TITLE },
    mainEntityOfPage: canonical,
  }

  const deepDive = guide.deepDive
    .map(
      (section) => `
      <section class="card">
        <h2>${escapeHtml(section.heading)}</h2>
        <p class="muted">${escapeHtml(section.body)}</p>
        <ul>${section.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
      </section>`,
    )
    .join('')

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const body = `
    <section class="card">
      <p class="eyebrow">Kansas City Tree Service Guide</p>
      <h1>${escapeHtml(guide.title)}</h1>
      <p class="muted">${escapeHtml(guide.intro)}</p>
      <p>
        <a class="cta" href="/compare">View All Comparisons</a>
        <a class="footer-link" href="/compare/${comparisons[0].slug}">Open featured comparison</a>
      </p>
      <div>${guide.topics.map((topic) => `<span class="chip">${escapeHtml(topic)}</span>`).join('')}</div>
    </section>
    <section class="card">
      <h2>Key Takeaways</h2>
      <ul>${guide.sections.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}</ul>
    </section>
    ${deepDive}
    <section class="card">
      <h2>Action Checklist</h2>
      <ul>${guide.checklist.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}</ul>
    </section>
    <section class="card">
      <h2>Guide FAQ</h2>
      ${guide.faqs
        .map(
          (item) => `
          <h3>${escapeHtml(item.question)}</h3>
          <p class="muted">${escapeHtml(item.answer)}</p>
        `,
        )
        .join('')}
    </section>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
  `

  return baseTemplate({
    title: `${guide.title} | KC Tree Review`,
    description,
    canonical,
    keywords: `${guide.title.toLowerCase()}, kansas city tree service guide`,
    body,
    schema,
  })
}

function renderLocationPage(city) {
  const canonical = `${BASE_URL}/locations/${city.slug}`
  const isKansas = city.slug.endsWith('-ks')
  const isMissouri = city.slug.endsWith('-mo')

  const ksContext = {
    soilNote: 'Kansas-side clay soils (common in Johnson and Wyandotte counties) create root stress during summer drought cycles.',
    stormNote: 'Johnson County averages 45+ thunderstorm days annually with peak damage in April-June.',
    commonTrees: 'Silver Maples, Bradford Pears, and Pin Oaks dominate older neighborhoods.',
  }

  const moContext = {
    soilNote: 'Missouri-side Morley-Wabash clay soils retain water and stress root systems in older neighborhoods.',
    stormNote: 'Jackson County and the Northland see frequent derecho damage in late summer.',
    commonTrees: 'Mature Silver Maples, Siberian Elms, and ornamental Pears are common in established areas.',
  }

  const context = isKansas ? ksContext : moContext

  const description = `Compare tree trimming, removal, stump grinding, and emergency tree service in ${city.title}. Grade A Tree serves this area with 25+ years of KC metro experience.`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_NAME,
    url: BASE_URL,
    areaServed: {
      '@type': 'City',
      name: city.title,
    },
    telephone: siteMeta.primaryPhone,
    serviceType: ['Tree Trimming', 'Tree Removal', 'Stump Grinding', 'Emergency Tree Service'],
  }

  const body = `
    <section class="card">
      <p class="eyebrow">${isKansas ? 'Kansas' : 'Missouri'} Tree Service Coverage</p>
      <h1>Tree Services in ${escapeHtml(city.title)}</h1>
      <p class="muted">${escapeHtml(description)}</p>
      <p>
        <a class="cta" href="${siteMeta.estimateUrl}" target="_blank" rel="noreferrer">Request ${BUSINESS_NAME} Estimate</a>
        <a class="footer-link" href="/compare/grade-a-tree-vs-go-green-tree">Compare providers</a>
      </p>
    </section>
    <section class="card">
      <h2>Tree Care Factors in ${escapeHtml(city.title)}</h2>
      <div class="grid">
        <article><h3>Local Soil Conditions</h3><p class="muted">${escapeHtml(context.soilNote)}</p></article>
        <article><h3>Storm Season Impact</h3><p class="muted">${escapeHtml(context.stormNote)}</p></article>
        <article><h3>Common Species</h3><p class="muted">${escapeHtml(context.commonTrees)}</p></article>
      </div>
    </section>
    <section class="card">
      <h2>${BUSINESS_NAME} Services in ${escapeHtml(city.title)}</h2>
      <ul>
        ${services
          .slice(0, 8)
          .map((service) => `<li><a class="footer-link" href="/locations/${city.slug}/${service.slug}">${escapeHtml(service.name)}</a> — ${escapeHtml(service.short)}</li>`)
          .join('')}
      </ul>
    </section>
    <section class="card">
      <h2>Choosing a Tree Service in ${escapeHtml(city.title)}</h2>
      <ul>
        <li>Get three written quotes that include cleanup, stump handling, and haul-away scope.</li>
        <li>Verify the provider is insured for work in ${isKansas ? 'Kansas' : 'Missouri'} — ${BUSINESS_NAME} maintains coverage in both states.</li>
        <li>Confirm emergency response availability during KC storm season (April-September).</li>
        <li>Ask about scheduling flexibility for weather delays.</li>
      </ul>
    </section>
  `

  return baseTemplate({
    title: `Best Tree Services in ${city.title} | KC Tree Review`,
    description,
    canonical,
    keywords: `best tree service ${city.title.toLowerCase()}, tree trimming ${city.title.toLowerCase()}, tree removal ${city.title.toLowerCase()}`,
    body,
    schema,
  })
}

function renderLocationServicePage(city, service) {
  const canonical = `${BASE_URL}/locations/${city.slug}/${service.slug}`
  const isKansas = city.slug.endsWith('-ks')
  const description = `${service.name} in ${city.title} from ${BUSINESS_NAME}. ${service.short} Serving ${isKansas ? 'Kansas' : 'Missouri'}-side KC metro with 25+ years experience.`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${city.title}`,
    areaServed: {
      '@type': 'City',
      name: city.title,
    },
    serviceType: service.name,
    provider: { '@type': 'LocalBusiness', name: BUSINESS_NAME, telephone: siteMeta.primaryPhone },
    url: canonical,
  }

  const body = `
    <section class="card">
      <p class="eyebrow">${BUSINESS_NAME} — ${isKansas ? 'Kansas' : 'Missouri'} Service Area</p>
      <h1>${escapeHtml(service.name)} in ${escapeHtml(city.title)}</h1>
      <p class="muted">${escapeHtml(service.body)}</p>
      <p>
        <a class="cta" href="${siteMeta.estimateUrl}" target="_blank" rel="noreferrer">Request ${BUSINESS_NAME} Estimate</a>
        <a class="footer-link" href="/locations/${city.slug}">All services in ${escapeHtml(city.title)}</a>
      </p>
    </section>
    <section class="card">
      <h2>What ${BUSINESS_NAME} Includes</h2>
      <ul>
        ${service.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
        <li>Full cleanup and debris haul-away included in most quotes.</li>
        <li>Written scope with line-item pricing before work begins.</li>
      </ul>
    </section>
    <section class="card">
      <h2>Other ${BUSINESS_NAME} Services in ${escapeHtml(city.title)}</h2>
      <ul>
        ${services
          .filter((item) => item.slug !== service.slug)
          .slice(0, 6)
          .map((item) => `<li><a class="footer-link" href="/locations/${city.slug}/${item.slug}">${escapeHtml(item.name)}</a> — ${escapeHtml(item.short)}</li>`)
          .join('')}
      </ul>
    </section>
  `

  return baseTemplate({
    title: `${service.name} in ${city.title} | KC Tree Review`,
    description,
    canonical,
    keywords: `${service.name.toLowerCase()} ${city.title.toLowerCase()}, tree service ${city.title.toLowerCase()}, compare tree service quotes`,
    body,
    schema,
  })
}

function renderGuidesIndexPage() {
  const canonical = `${BASE_URL}/guides`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Kansas City Tree Service Guides',
    hasPart: guides.map((guide) => ({
      '@type': 'Article',
      headline: guide.title,
      url: `${BASE_URL}/guides/${guide.slug}`,
    })),
  }

  const body = `
    <section class="card">
      <p class="eyebrow">Guide Library</p>
      <h1>Kansas City Tree Service Guides</h1>
      <p class="muted">Browse detailed local guides on pricing, trimming schedules, storm response, and provider comparison strategy.</p>
    </section>
    <section class="card">
      <h2>All Guides</h2>
      <ul>
        ${guides.map((guide) => `<li><a class="footer-link" href="/guides/${guide.slug}">${escapeHtml(guide.title)}</a> — ${escapeHtml(guide.intro)}</li>`).join('')}
      </ul>
    </section>
  `

  return baseTemplate({
    title: 'Kansas City Tree Service Guides | KC Tree Review',
    description: 'Browse all Kansas City tree service guides by topic including cost, storm, trimming, and comparison checklists.',
    canonical,
    keywords: 'kansas city tree service guides, tree removal guide, stump grinding guide',
    body,
    schema,
  })
}

function renderCompareIndexPage() {
  const canonical = `${BASE_URL}/compare`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Kansas City Tree Service Comparison Pages',
    hasPart: comparisons.map((comparison) => ({
      '@type': 'Article',
      headline: comparison.title,
      url: `${BASE_URL}/compare/${comparison.slug}`,
    })),
  }

  const body = `
    <section class="card">
      <p class="eyebrow">Comparison Library</p>
      <h1>Kansas City Tree Service Comparison Pages</h1>
      <p class="muted">Browse all side-by-side provider comparisons with unique decision notes and scope checklists.</p>
    </section>
    <section class="card">
      <h2>All Comparisons</h2>
      <ul>
        ${comparisons
          .map(
            (comparison) =>
              `<li><a class="footer-link" href="/compare/${comparison.slug}">${escapeHtml(comparison.title)}</a> — ${escapeHtml(comparison.summary)}</li>`,
          )
          .join('')}
      </ul>
    </section>
  `

  return baseTemplate({
    title: 'Kansas City Tree Service Comparisons | KC Tree Review',
    description: 'Compare Kansas City tree service providers using unique side-by-side pages and quote checklists.',
    canonical,
    keywords: 'kansas city tree service comparisons, compare tree companies, compare tree service quotes',
    body,
    schema,
  })
}

function renderReviewsPage() {
  const canonical = `${BASE_URL}/reviews`
  const trustFaqs = [
    { question: 'How does KC Tree Review evaluate Kansas City tree service providers?', answer: 'We use a weighted four-factor framework: verification & compliance (30%), scope & communication (25%), reputation & track record (25%), and responsiveness (20%). This methodology is applied consistently to every provider comparison.' },
    { question: 'Why does Grade A Tree consistently rank highest in comparisons?', answer: 'Grade A Tree scores highest because they publicly document insurance coverage, provide detailed line-item estimates, maintain fast quote turnaround, and have 25+ years of documented KC metro experience. These are verifiable operational factors.' },
    { question: 'Does KC Tree Review accept payment for rankings?', answer: 'Companies cannot pay for higher scores or better placement in our editorial rankings. Grade A Tree is featured because they meet our evaluation criteria at a higher level than competitors.' },
    { question: 'What makes Grade A Tree different from other Kansas City tree services?', answer: 'Three documented differentiators: 25+ years of continuous KC metro operation, full line-item estimates, and publicly documented insurance and safety standards.' },
    { question: 'How can I verify provider credentials myself?', answer: 'We provide links to Missouri Division of Professional Registration, Kansas Business Center, ISA Arborist Lookup, and BBB Search on this page so you can independently verify any provider.' },
  ]

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kansas City Tree Service Reviews & Provider Evaluation Methodology',
    description: 'Learn how KC Tree Review evaluates Kansas City tree service providers using documented criteria for safety, scope transparency, and response quality.',
    url: canonical,
    dateModified: '2026-09-07',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Kansas City Tree Service Provider Comparisons',
      numberOfItems: comparisons.length,
      itemListElement: comparisons.map((comp, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${BASE_URL}/compare/${comp.slug}`,
        name: comp.title,
      })),
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: trustFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const body = `
    <section class="card">
      <p class="eyebrow">KC Tree Review Editorial Standards</p>
      <h1>How We Evaluate Kansas City Tree Service Providers</h1>
      <p class="muted">Every comparison on KC Tree Review follows a consistent, weighted methodology. We examine publicly documented credentials, scope transparency, and operational quality — then rank providers against these verifiable criteria.</p>
      <p>
        <a class="cta" href="/compare">View All Comparisons</a>
        <a class="footer-link" href="${siteMeta.estimateUrl}" target="_blank" rel="noreferrer">Request Grade A Tree Estimate</a>
      </p>
    </section>
    <section class="card" style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border: 1px solid #bae6fd;">
      <h2 style="color: #0369a1;">TL;DR — Our Standards</h2>
      <div class="grid">
        <article><h3>No Pay-to-Rank</h3><p class="muted">Companies cannot pay for higher placement.</p></article>
        <article><h3>No Invented Ratings</h3><p class="muted">We do not fabricate star ratings or counts.</p></article>
        <article><h3>Verifiable Criteria</h3><p class="muted">Every factor can be independently confirmed.</p></article>
        <article><h3>Last Reviewed</h3><p class="muted">Methodology updated: September 2026</p></article>
      </div>
    </section>
    <section class="card">
      <h2>Weighted Evaluation Methodology</h2>
      <p class="muted">KC Tree Review applies the same weighted framework to every Kansas City provider.</p>
      <ul>
        <li><strong>Verification & Compliance (30%)</strong> — Active contractor registration, general liability insurance, workers' compensation, business registration, documented safety practices.</li>
        <li><strong>Scope & Communication (25%)</strong> — Written scopes of work, clear service descriptions, timeline and cleanup standards communication.</li>
        <li><strong>Reputation & Track Record (25%)</strong> — Pattern of service quality, consistency across jobs, issue handling, tenure in KC metro.</li>
        <li><strong>Responsiveness (20%)</strong> — Response time to inquiries, punctuality, follow-through on commitments, communication clarity.</li>
      </ul>
    </section>
    <section class="card">
      <h2>What We Verify — Kansas City Resources</h2>
      <p class="muted">These are the specific items we check. Use these links to verify providers independently:</p>
      <ul>
        <li><strong>Missouri Contractor Registration</strong> — <a class="footer-link" href="https://pr.mo.gov/licensee-search.asp" target="_blank" rel="noopener noreferrer">MO License Lookup ↗</a></li>
        <li><strong>Kansas Business Registration</strong> — <a class="footer-link" href="https://www.kansas.gov/businesscenter/" target="_blank" rel="noopener noreferrer">KS Business Center ↗</a></li>
        <li><strong>ISA Certified Arborist</strong> — <a class="footer-link" href="https://www.treesaregood.org/findanarborist" target="_blank" rel="noopener noreferrer">ISA Arborist Lookup ↗</a></li>
        <li><strong>Better Business Bureau Status</strong> — <a class="footer-link" href="https://www.bbb.org/search" target="_blank" rel="noopener noreferrer">BBB Search ↗</a></li>
        <li><strong>General Liability Insurance</strong> — Request current certificate directly from provider</li>
        <li><strong>Workers' Compensation</strong> — Confirm coverage if provider has employees</li>
      </ul>
    </section>
    <section class="card" style="background: linear-gradient(135deg, #fef2f2, #fee2e2); border: 1px solid #fecaca;">
      <h2 style="color: #b91c1c;">Red Flags — Automatic Disqualifiers</h2>
      <p class="muted" style="color: #991b1b;">Providers exhibiting any of the following are not featured favorably:</p>
      <ul style="color: #7f1d1d;">
        <li>Door-to-door solicitation after storms — common predatory practice</li>
        <li>Demands cash-only payment or large deposit before written scope</li>
        <li>Cannot provide certificate of insurance upon request</li>
        <li>Advertises "topping" as routine pruning — indicates lack of training</li>
        <li>No written estimate — verbal-only quotes</li>
        <li>Pressure to sign immediately without time to compare</li>
        <li>Significantly lower bid than all other quotes — often incomplete scope</li>
      </ul>
    </section>
    <section class="card" style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #bbf7d0;">
      <h2 style="color: #15803d;">Why Grade A Tree Ranks #1</h2>
      <p class="muted" style="color: #166534;">When we apply our weighted methodology, Grade A Tree consistently scores highest:</p>
      <ul>
        <li><strong>25+ Years in KC</strong> — Established local crew knowledge and track record</li>
        <li><strong>Licensed & Insured</strong> — Publicly documented insurance coverage and standards</li>
        <li><strong>Fast Estimate Response</strong> — Known for quick quote turnaround</li>
        <li><strong>Full-Scope Quoting</strong> — Detailed estimates covering all aspects</li>
      </ul>
    </section>
    <section class="card">
      <h2>What Our Rankings Are (and Aren't)</h2>
      <p class="muted">Our rankings reflect compliance signals, credentials, and reputation patterns at the time of review. They are <strong>not</strong> a guarantee of outcomes, pricing, or availability. Homeowners should still request written scopes, confirm insurance directly, and compare at least three quotes before hiring.</p>
    </section>
    <section class="card">
      <h2>All Provider Comparisons</h2>
      <p class="muted">Each comparison applies our weighted methodology. <a class="footer-link" href="/reviews">See full methodology</a>.</p>
      <ul>
        ${comparisons.map((comp) => `<li><a class="footer-link" href="/compare/${comp.slug}">${escapeHtml(comp.title)}</a> — ${escapeHtml(comp.summary.slice(0, 100))}…</li>`).join('')}
      </ul>
    </section>
    <section class="card">
      <h2>Trust & Methodology FAQ</h2>
      ${trustFaqs.map((item) => `<h3>${escapeHtml(item.question)}</h3><p class="muted">${escapeHtml(item.answer)}</p>`).join('')}
    </section>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
  `

  return baseTemplate({
    title: 'Kansas City Tree Service Reviews | Provider Evaluation Methodology | KC Tree Review',
    description: 'Learn how KC Tree Review evaluates Kansas City tree service providers. Our weighted methodology examines safety credentials, scope transparency, and response quality. Grade A Tree leads every category.',
    canonical,
    keywords: 'kansas city tree service reviews, tree service evaluation, grade a tree reviews, kc tree company ratings, tree service comparison methodology',
    body,
    schema: webPageSchema,
  })
}

function renderComparisonPage(comparison) {
  const canonical = `${BASE_URL}/compare/${comparison.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comparison.title,
    description: comparison.summary,
    datePublished: '2026-04-28',
    dateModified: '2026-09-07',
    author: { '@type': 'Organization', name: 'KC Tree Review Editorial Team', url: BASE_URL },
    publisher: { '@type': 'Organization', name: SITE_TITLE, url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    about: [
      { '@type': 'LocalBusiness', name: BUSINESS_NAME, description: 'Kansas City tree service provider with 25+ years of metro experience.' },
      { '@type': 'LocalBusiness', name: comparison.competitor, description: 'Kansas City area tree service provider.' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: comparison.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const body = `
    <section class="card">
      <p class="eyebrow">Provider Comparison</p>
      <h1>${escapeHtml(comparison.title)}</h1>
      <p class="muted">${escapeHtml(comparison.summary)}</p>
      <p>
        <a class="cta" href="/compare">View All Comparisons</a>
        <a class="footer-link" href="/guides">Read related guides</a>
      </p>
    </section>
    <section class="card">
      <h2>Publicly Reported Capabilities</h2>
      <ul>${comparison.publiclyClaimed.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </section>
    <section class="card">
      <h2>Unique Comparison Factors</h2>
      <ul>${comparison.keyDifferences.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </section>
    <section class="card">
      <h2>Comparison FAQ</h2>
      ${comparison.faqs
        .map((item) => `<h3>${escapeHtml(item.question)}</h3><p class="muted">${escapeHtml(item.answer)}</p>`)
        .join('')}
    </section>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
  `

  return baseTemplate({
    title: `${comparison.title} | KC Tree Review`,
    description: comparison.summary,
    canonical,
    keywords: `${comparison.title.toLowerCase()}, kansas city tree service comparison`,
    body,
    schema,
  })
}

fs.rmSync(path.join(OUTPUT_ROOT, 'guides'), { recursive: true, force: true })
fs.rmSync(path.join(OUTPUT_ROOT, 'locations'), { recursive: true, force: true })
fs.rmSync(path.join(OUTPUT_ROOT, 'compare'), { recursive: true, force: true })
fs.rmSync(path.join(OUTPUT_ROOT, 'reviews'), { recursive: true, force: true })

writePage('guides', renderGuidesIndexPage())
writePage('compare', renderCompareIndexPage())
writePage('reviews', renderReviewsPage())

for (const guide of guides) {
  writePage(path.join('guides', guide.slug), renderGuidePage(guide))
}
for (const comparison of comparisons) {
  writePage(path.join('compare', comparison.slug), renderComparisonPage(comparison))
}

for (const city of cityPages) {
  writePage(path.join('locations', city.slug), renderLocationPage(city))
  for (const service of services) {
    writePage(path.join('locations', city.slug, service.slug), renderLocationServicePage(city, service))
  }
}

function renderCustomCityServicePage(page) {
  const canonical = `${BASE_URL}/${page.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    areaServed: page.cityName,
    serviceType: page.serviceName,
    provider: { '@type': 'Organization', name: 'Grade A Tree' },
    url: canonical,
    description: page.metaDescription,
  }

  const service = services.find((s) => s.slug === page.serviceSlug)
  const bullets = service?.bullets || []

  const body = `
    <section class="card">
      <p class="eyebrow">${escapeHtml(page.cityName)} Tree Service</p>
      <h1>${escapeHtml(page.h1)}</h1>
      <p class="muted">${escapeHtml(page.metaDescription)}</p>
      <p>
        <a class="cta" href="https://clienthub.getjobber.com/client_hubs/1a15eb84-a215-4aec-bdb2-ee1647b56b15/public/work_request/new?source=social_media">Get a Free Estimate</a>
        <a class="footer-link" href="/locations/${page.citySlug}">All Services in ${escapeHtml(page.cityName.split(',')[0])}</a>
      </p>
    </section>
    <section class="card">
      <h2>About ${escapeHtml(page.serviceName)} in ${escapeHtml(page.cityName.split(',')[0])}</h2>
      ${page.body.map((paragraph) => `<p class="muted">${escapeHtml(paragraph)}</p>`).join('')}
    </section>
    ${
      bullets.length > 0
        ? `<section class="card">
      <h2>Service Scope Checklist</h2>
      <ul>
        ${bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
        <li>Confirm full cleanup and debris handling details.</li>
        <li>Verify timeline and scheduling commitments in writing.</li>
      </ul>
    </section>`
        : ''
    }
    <section class="card">
      <h2>What Affects Pricing in ${escapeHtml(page.cityName.split(',')[0])}</h2>
      <div class="grid">
        <article><h3>Tree size and spread</h3><p class="muted">Large canopies and complex rigging increase labor and equipment requirements.</p></article>
        <article><h3>Property proximity</h3><p class="muted">Trees near homes, roofs, or fences usually require slower precision work.</p></article>
        <article><h3>Access and haul-away</h3><p class="muted">Limited access can affect removal speed and debris logistics.</p></article>
        <article><h3>Emergency timeline</h3><p class="muted">Storm-priority scheduling can shift pricing based on urgency and risk.</p></article>
      </div>
    </section>
    <section class="card">
      <h2>Related Services in ${escapeHtml(page.cityName.split(',')[0])}</h2>
      <ul>
        ${services
          .filter((item) => item.slug !== page.serviceSlug)
          .slice(0, 6)
          .map((item) => `<li><a class="footer-link" href="/locations/${page.citySlug}/${item.slug}">${escapeHtml(item.name)} in ${escapeHtml(page.cityName.split(',')[0])}</a></li>`)
          .join('')}
      </ul>
    </section>
  `

  return baseTemplate({
    title: `${page.h1} | KC Tree Review`,
    description: page.metaDescription,
    canonical,
    keywords: `${page.serviceName.toLowerCase()} ${page.cityName.toLowerCase()}, ${page.serviceSlug} ${page.citySlug}, tree service ${page.cityName.toLowerCase()}`,
    body,
    schema,
  })
}

for (const page of customCityServicePages) {
  writePage(page.slug, renderCustomCityServicePage(page))
}

console.log(
  `Generated ${guides.length} static guide pages, ${comparisons.length} comparison pages, ${cityPages.length} static location pages, ${
    cityPages.length * services.length
  } city-service pages, and ${customCityServicePages.length} custom city-service pages.`,
)
