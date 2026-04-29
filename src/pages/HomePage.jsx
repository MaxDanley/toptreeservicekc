import { Link } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { StructuredData } from '../components/StructuredData'
import { cityPages, comparisons, guides, neighborhoodPages, serviceLocationPages, services, siteMeta, stats } from '../data/siteData'

export function HomePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteMeta.businessName,
    url: siteMeta.baseUrl,
    telephone: siteMeta.phoneHref.replace('tel:', ''),
    areaServed: cityPages.slice(0, 20).map((city) => city.title),
    serviceType: services.map((service) => service.name),
  }

  return (
    <>
      <Seo
        title="Best Tree Services in Kansas City Area | KC Tree Review"
        description="Compare the best tree trimming, removal, and stump grinding services in Kansas City with local guides, provider breakdowns, and city-specific service pages."
        pathname="/"
        keywords="best tree services kansas city, best tree trimming kansas city, tree removal kansas city, stump grinding kansas city"
      />
      <StructuredData data={localBusinessSchema} />

      <PageHero
        eyebrow="Kansas City Tree Service Comparison Guide"
        title="Best Tree Services in the Kansas City Area"
        description="Compare top local teams for tree trimming, removals, emergency storm response, and stump grinding. We organize service quality, response speed, and quote clarity to help you choose confidently."
        image="/images/hero-forest.svg"
        primaryLabel="Request Free Estimate"
      />

      <section className="stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="card stat-card">
            <p className="stat-value">{item.value}</p>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h2>Top-Rated Service Guides</h2>
        <div className="list-grid">
          {guides.map((guide) => (
            <Link key={guide.slug} className="list-item" to={`/guides/${guide.slug}`}>
              <h3>{guide.title}</h3>
              <p>{guide.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Compare By Service Category</h2>
        <div className="list-grid">
          {services.map((service) => (
            <Link key={service.slug} className="list-item" to={`/services/${service.slug}`}>
              <h3>{service.name}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Head-to-Head Kansas City Comparisons</h2>
        <p>
          Our side-by-side pages summarize publicly available service details so homeowners can compare quote structure,
          cleanup scope, emergency readiness, and communication quality.
        </p>
        <div className="list-grid">
          {comparisons.map((comparison) => (
            <Link key={comparison.slug} className="list-item" to={`/compare/${comparison.slug}`}>
              <h3>{comparison.title}</h3>
              <p>Compare against {comparison.competitor} with a practical homeowner checklist.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>City Coverage Across the Metro</h2>
        <p>
          Find localized service comparisons across major Kansas City metro suburbs and neighborhoods.
        </p>
        <div className="city-grid">
          {cityPages.map((city) => (
            <Link key={city.slug} to={`/locations/${city.slug}`}>
              {city.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Neighborhood Comparison Hubs</h2>
        <p>Browse neighborhood-level pages for local service context and provider links.</p>
        <div className="city-grid">
          {neighborhoodPages.map((location) => (
            <Link key={location.slug} to={`/neighborhoods/${location.slug}`}>
              {location.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Popular Service + City Combinations</h2>
        <p>
          Explore commonly searched combinations for tree trimming, removals, emergency work, and stump grinding.
        </p>
        <div className="city-grid">
          {serviceLocationPages.slice(0, 36).map((page) => (
            <Link key={page.slug} to={`/locations/${page.slug}`}>
              {page.title}
            </Link>
          ))}
        </div>
      </section>

      <FaqSection />
    </>
  )
}
