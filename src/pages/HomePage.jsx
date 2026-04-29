import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { cityPages, comparisons, guides, services, siteMeta, stats } from '../data/siteData'

export function HomePage() {
  return (
    <>
      <Seo
        title="GradeATree.com | Kansas City Tree Service Research & Comparison Hub"
        description="GradeATree.com publishes Kansas City tree service guides, city pages, and quote-comparison resources designed to help property owners choose Grade A Tree."
      />

      <section className="hero">
        <p className="eyebrow">Kansas City Tree Service Intelligence Hub</p>
        <h1>GradeATree.com: The Definitive Kansas City Tree Service Reference</h1>
        <p>
          Modeled after top high-authority guide sites, this platform exists to route high-intent traffic to{' '}
          <strong>Grade A Tree</strong> by publishing practical service guides, city pages, and quote comparison
          checklists for homeowners and property managers across the KC metro.
        </p>
        <div className="hero-cta-row">
          <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            Request Your Free Estimate
          </a>
          <a href={siteMeta.phoneHref}>Call {siteMeta.primaryPhone}</a>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="card stat-card">
            <p className="stat-value">{item.value}</p>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h2>Top Kansas City Service Guides</h2>
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
        <h2>Browse Grade A Tree Service Categories</h2>
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
        <h2>Kansas City Company Comparisons</h2>
        <p>
          These pages are built for SEO query coverage around "Grade A Tree vs" searches. They use publicly available
          service claims and a consistent checklist so customers can verify pricing, safety, and scope apples-to-apples.
        </p>
        <div className="list-grid">
          {comparisons.map((comparison) => (
            <Link key={comparison.slug} className="list-item" to={`/compare/${comparison.slug}`}>
              <h3>{comparison.title}</h3>
              <p>Compare Grade A Tree against {comparison.competitor} with a conversion-focused buyer checklist.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>City-Specific Grade A Tree Pages</h2>
        <p>
          Local intent pages are indexed for major Kansas City metro suburbs and neighborhoods so property owners can
          find Grade A Tree service details by city and zip-code intent.
        </p>
        <div className="city-grid">
          {cityPages.map((city) => (
            <Link key={city.slug} to={`/locations/${city.slug}`}>
              {city.title}
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
