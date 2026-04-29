import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { cityPages, comparisons, services } from '../data/siteData'
import { FaArrowRight, FaClipboardCheck, FaClock, FaShieldHalved, FaTruckFast } from 'react-icons/fa6'

export function ServicePage() {
  const { serviceSlug } = useParams()
  const service = services.find((item) => item.slug === serviceSlug)

  if (!service) {
    return (
      <section className="card">
        <h1>Service Not Found</h1>
        <Link to="/">Return to homepage</Link>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`Best ${service.name} in Kansas City | KC Tree Review`}
        description={`Compare the best ${service.name.toLowerCase()} providers in Kansas City. Side-by-side breakdowns, quote checklists, and local service coverage across the KC metro.`}
        pathname={`/services/${service.slug}`}
        image="/images/hero-forest.svg"
        keywords={`best ${service.name.toLowerCase()} kansas city, compare ${service.name.toLowerCase()} kc, ${service.name.toLowerCase()} near me`}
      />
      <PageHero
        eyebrow={`Kansas City ${service.name} Guide`}
        title={`Compare ${service.name} Providers in Kansas City`}
        description={service.body}
        primaryLabel={`Compare ${service.name} Providers`}
        primaryTo="/compare"
        secondaryLabel="View Top KC Comparison"
        secondaryTo={`/compare/${comparisons[0].slug}`}
      />

      <section className="card">
        <h2>What To Confirm In Your Estimate</h2>
        <div className="feature-grid">
          {service.bullets.map((bullet) => (
            <article key={bullet} className="feature-item">
              <FaClipboardCheck />
              <h3>{bullet}</h3>
              <p>Confirm this item in writing before selecting your provider.</p>
            </article>
          ))}
          <article className="feature-item">
            <FaShieldHalved />
            <h3>Insurance and supervision</h3>
            <p>Ask who is supervising the crew and verify current policy status.</p>
          </article>
          <article className="feature-item">
            <FaClock />
            <h3>Timeline expectations</h3>
            <p>Confirm start date, weather contingency, and completion scope.</p>
          </article>
          <article className="feature-item">
            <FaTruckFast />
            <h3>Cleanup and haul-away</h3>
            <p>Clarify debris handling, chip removal, and final yard condition.</p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Popular Cities For {service.name}</h2>
        <div className="city-grid">
          {cityPages.slice(0, 20).map((city) => (
            <Link key={city.slug} to={`/locations/${city.slug}/${service.slug}`}>
              <FaArrowRight />
              {service.name} in {city.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>How We Evaluate Providers For This Service</h2>
        <p>
          We compare providers side-by-side on transparency, cleanup scope, scheduling response, and overall value.
          When customers review multiple quotes, the best results come from comparing scope details — not just headline price.
        </p>
        <div className="cta-row">
          <Link className="btn-primary" to="/compare">
            Compare All KC Providers
          </Link>
          <Link className="btn-outline" to="/guides">
            Browse Service Guides
          </Link>
        </div>
      </section>
      <FaqSection title={`FAQ: ${service.name}`} />
    </>
  )
}
