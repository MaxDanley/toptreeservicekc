import fs from 'node:fs'
import path from 'node:path'
import {
  cityPages,
  comparisons,
  customCityServicePages,
  guides,
  neighborhoodPages,
  services,
  serviceLocationPages,
  siteMeta,
} from '../src/data/siteData.js'

const staticPaths = ['/', '/compare', '/guides', '/faqs']
const servicePaths = services.map((service) => `/services/${service.slug}`)
const cityPaths = cityPages.map((city) => `/locations/${city.slug}`)
const serviceCityPaths = serviceLocationPages.map((page) => `/locations/${page.slug}`)
const neighborhoodPaths = neighborhoodPages.map((item) => `/neighborhoods/${item.slug}`)
const comparisonPaths = comparisons.map((comparison) => `/compare/${comparison.slug}`)
const guidePaths = guides.map((guide) => `/guides/${guide.slug}`)
const customCityServicePaths = customCityServicePages.map((page) => `/${page.slug}`)

const allPaths = [
  ...staticPaths,
  ...servicePaths,
  ...cityPaths,
  ...serviceCityPaths,
  ...neighborhoodPaths,
  ...comparisonPaths,
  ...guidePaths,
  ...customCityServicePaths,
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths.map((p) => `  <url><loc>${siteMeta.baseUrl}${p}</loc></url>`).join('\n')}
</urlset>
`

const outputPath = path.resolve('public', 'sitemap.xml')
fs.writeFileSync(outputPath, xml, 'utf8')
console.log(`Sitemap generated with ${allPaths.length} URLs.`)
