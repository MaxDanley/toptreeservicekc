import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { comparisons, customCityServicePages, services } from '../data/siteData'
import { FaArrowRight, FaClock, FaHouse, FaRulerCombined, FaTruckFront } from 'react-icons/fa6'

export function CustomCityServicePage() {
  const { customSlug } = useParams()
  const page = customCityServicePages.find((item) => item.slug === customSlug)

  if (!page) {
    return (
      <section className="card">
        <h1>Page Not Found</h1>
        <Link to="/">Back to homepage</Link>
      </section>
    )
  }

  const service = services.find((item) => item.slug === page.serviceSlug)
  const bullets = service?.bullets || []

  return (
    <>
      <Seo
        title={`${page.h1} | KC Tree Review`}
        description={page.metaDescription}
        pathname={`/${page.slug}`}
        image="/images/hero-forest.svg"
        keywords={`${page.serviceName.toLowerCase()} ${page.cityName.toLowerCase()}, ${page.serviceSlug} ${page.citySlug}, tree service ${page.cityName.toLowerCase()}`}
      />
      <PageHero
        eyebrow={`${page.cityName} Tree Service`}
        title={page.h1}
        description={page.metaDescription}
        primaryLabel="Get a Free Estimate"
        primaryTo="https://clienthub.getjobber.com/client_hubs/1a15eb84-a215-4aec-bdb2-ee1647b56b15/public/work_request/new?source=social_media"
        secondaryLabel={`All Services in ${page.cityName.split(',')[0]}`}
        secondaryTo={`/locations/${page.citySlug}`}
      />

      <section className="card">
        <h2>About {page.serviceName} in {page.cityName.split(',')[0]}</h2>
        {page.body.map((paragraph, index) => (
          <p key={index} style={{ color: '#5f6a95', marginBottom: '1rem' }}>{paragraph}</p>
        ))}
      </section>

      {bullets.length > 0 && (
        <section className="card">
          <h2>Service Scope Checklist</h2>
          <div className="feature-grid">
            {bullets.map((bullet) => (
              <article key={bullet} className="feature-item">
                <FaArrowRight />
                <h3>{bullet}</h3>
                <p>Include this scope point in your final estimate review.</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="card">
        <h2>What Affects Pricing in {page.cityName.split(',')[0]}</h2>
        <div className="feature-grid">
          <article className="feature-item">
            <FaRulerCombined />
            <h3>Tree size and spread</h3>
            <p>Large canopies and complex rigging increase labor and equipment requirements.</p>
          </article>
          <article className="feature-item">
            <FaHouse />
            <h3>Property proximity</h3>
            <p>Trees near homes, roofs, or fences usually require slower precision work.</p>
          </article>
          <article className="feature-item">
            <FaTruckFront />
            <h3>Access and haul-away</h3>
            <p>Limited access can affect removal speed and debris logistics.</p>
          </article>
          <article className="feature-item">
            <FaClock />
            <h3>Emergency timeline</h3>
            <p>Storm-priority scheduling can shift pricing based on urgency and risk.</p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Related Comparison Pages</h2>
        <div className="city-grid">
          {comparisons.slice(0, 6).map((comparison) => (
            <Link key={comparison.slug} to={`/compare/${comparison.slug}`}>
              <FaArrowRight />
              {comparison.title}
            </Link>
          ))}
        </div>
      </section>

      <FaqSection title={`FAQ: ${page.serviceName} in ${page.cityName}`} />
    </>
  )
}
