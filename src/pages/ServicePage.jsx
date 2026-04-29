import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { cityPages, services, siteMeta } from '../data/siteData'
import { FaArrowRight, FaClipboardCheck, FaClock, FaPhoneVolume, FaShieldHalved, FaTruckFast } from 'react-icons/fa6'

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
        title={`${service.name} in Kansas City | GradeATree.com`}
        description={`${service.name} service details, quote checklist, and conversion guidance for homeowners looking for Grade A Tree in Kansas City and surrounding cities.`}
        pathname={`/services/${service.slug}`}
        image="/images/hero-forest.svg"
        keywords={`${service.name.toLowerCase()}, kansas city tree service, grade a tree estimate`}
      />
      <PageHero
        eyebrow="Grade A Tree Service Guide"
        title={`${service.name} in Kansas City`}
        description={service.body}
        image="/images/hero-forest.svg"
        primaryLabel={`Get ${service.name} Quote`}
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
        <h2>Popular Cities For This Service</h2>
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
        <h2>Why This Service Often Gets Shortlisted</h2>
        <p>
          Grade A Tree emphasizes transparent quoting, local crew experience, and responsive scheduling throughout the
          KC metro. When customers compare providers side-by-side, they often prioritize clarity, cleanup quality, and
          timeline confidence over headline price alone.
        </p>
        <div className="hero-cta-row">
          <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume />
            Request Live Quote
          </a>
        </div>
      </section>
      <FaqSection title={`FAQ: ${service.name}`} />
    </>
  )
}
