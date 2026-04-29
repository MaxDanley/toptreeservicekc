import fs from 'node:fs'
import path from 'node:path'
import { cityPages, comparisons, services } from '../src/data/siteData.js'
import { guides } from '../src/data/guidesContent.js'

const BASE_URL = 'https://www.toptreeservicekc.com'
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
  const hash = getHash(city.slug)
  const patternA = [
    'older tree canopy neighborhoods',
    'mixed residential lot sizes',
    'tight driveway and fence access',
    'storm-prone overhang corridors',
  ]
  const patternB = [
    'seasonal trimming demand',
    'hazard limb prioritization',
    'stump cleanup and yard restoration',
    'quote clarity and scheduling speed',
  ]

  const uniqueA = patternA[hash % patternA.length]
  const uniqueB = patternB[hash % patternB.length]
  const description = `Compare tree trimming, removal, stump grinding, and emergency tree service options in ${city.title} with local decision checklists.`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${SITE_TITLE} - ${city.title} Tree Service Comparison`,
    url: canonical,
    areaServed: city.title,
    serviceType: ['Tree Trimming', 'Tree Removal', 'Stump Grinding', 'Emergency Tree Service'],
  }

  const body = `
    <section class="card">
      <p class="eyebrow">Location Comparison Hub</p>
      <h1>Best Tree Services in ${escapeHtml(city.title)}</h1>
      <p class="muted">${escapeHtml(description)}</p>
      <p>
        <a class="cta" href="/compare">Compare KC Providers</a>
        <a class="footer-link" href="/compare/grade-a-tree-vs-go-green-tree">View comparison pages</a>
      </p>
    </section>
    <section class="card">
      <h2>What Makes ${escapeHtml(city.title)} Quotes Different</h2>
      <div class="grid">
        <article><h3>${escapeHtml(uniqueA)}</h3><p class="muted">Service complexity in this area often depends on property layout and tree maturity patterns.</p></article>
        <article><h3>${escapeHtml(uniqueB)}</h3><p class="muted">Providers are typically differentiated by scope detail, cleanup standard, and response timing.</p></article>
      </div>
    </section>
    <section class="card">
      <h2>Top Services for ${escapeHtml(city.title)}</h2>
      <ul>
        ${services
          .slice(0, 8)
          .map((service) => `<li><a class="footer-link" href="/locations/${city.slug}/${service.slug}">${escapeHtml(service.name)} in ${escapeHtml(city.title)}</a></li>`)
          .join('')}
      </ul>
    </section>
    <section class="card">
      <h2>Quick Decision Checklist</h2>
      <ul>
        <li>Compare at least three written quotes for ${escapeHtml(city.title)} projects.</li>
        <li>Verify insurance, cleanup terms, and final site condition language.</li>
        <li>Confirm timeline and weather-delay policy before scheduling.</li>
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
  const description = `${service.name} in ${city.title}: compare local providers, review scope checklists, and request a clear estimate.`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${city.title}`,
    areaServed: city.title,
    serviceType: service.name,
    provider: { '@type': 'Organization', name: SITE_TITLE },
    url: canonical,
  }

  const body = `
    <section class="card">
      <p class="eyebrow">City + Service Landing</p>
      <h1>${escapeHtml(service.name)} in ${escapeHtml(city.title)}</h1>
      <p class="muted">${escapeHtml(description)}</p>
      <p>
        <a class="cta" href="/compare">Compare ${escapeHtml(service.name)} Providers</a>
        <a class="footer-link" href="/locations/${city.slug}">Back to ${escapeHtml(city.title)} hub</a>
      </p>
    </section>
    <section class="card">
      <h2>Scope Checklist</h2>
      <ul>
        ${service.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
        <li>Confirm full cleanup and debris handling details.</li>
        <li>Verify timeline and scheduling commitments in writing.</li>
      </ul>
    </section>
    <section class="card">
      <h2>Related Services in ${escapeHtml(city.title)}</h2>
      <ul>
        ${services
          .filter((item) => item.slug !== service.slug)
          .slice(0, 6)
          .map((item) => `<li><a class="footer-link" href="/locations/${city.slug}/${item.slug}">${escapeHtml(item.name)} in ${escapeHtml(city.title)}</a></li>`)
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

function renderComparisonPage(comparison) {
  const canonical = `${BASE_URL}/compare/${comparison.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comparison.title,
    description: comparison.summary,
    author: { '@type': 'Organization', name: 'KC Tree Review Editorial Team' },
    publisher: { '@type': 'Organization', name: SITE_TITLE },
    mainEntityOfPage: canonical,
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

writePage('guides', renderGuidesIndexPage())
writePage('compare', renderCompareIndexPage())

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

console.log(
  `Generated ${guides.length} static guide pages, ${comparisons.length} comparison pages, ${cityPages.length} static location pages, and ${
    cityPages.length * services.length
  } city-service pages.`,
)
