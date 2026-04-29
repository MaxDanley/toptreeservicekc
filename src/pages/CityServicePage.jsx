import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { cityPages, comparisons, services } from '../data/siteData'
import { FaArrowRight, FaClock, FaHouse, FaRulerCombined, FaTruckFront } from 'react-icons/fa6'

export function CityServicePage() {
  const { citySlug, serviceSlug } = useParams()
  const city = cityPages.find((item) => item.slug === citySlug)
  const service = services.find((item) => item.slug === serviceSlug)

  if (!city || !service) {
    return (
      <section className="card">
        <h1>Page Not Found</h1>
        <Link to="/">Back to homepage</Link>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`${service.name} in ${city.title} | GradeATree.com`}
        description={`${service.name} in ${city.title}: local quote checklist, service scope overview, and direct Grade A Tree estimate request links.`}
        pathname={`/locations/${city.slug}/${service.slug}`}
        image="/images/hero-forest.svg"
        keywords={`${service.name.toLowerCase()} in ${city.title.toLowerCase()}, ${city.title.toLowerCase()} tree service, grade a tree ${city.title.toLowerCase()}`}
      />
      <PageHero
        eyebrow="Service + City Landing Page"
        title={`${service.name} in ${city.title}`}
        description={`This landing page is optimized for "${service.name.toLowerCase()} in ${city.title.toLowerCase()}" intent and routes visitors to Grade A Tree quote actions with clear next-step guidance.`}
        image="/images/hero-forest.svg"
        primaryLabel={`Request ${service.name} Quote`}
      />

      <section className="card">
        <h2>Scope Checklist For {city.title}</h2>
        <div className="feature-grid">
          {service.bullets.map((bullet) => (
            <article key={bullet} className="feature-item">
              <FaArrowRight />
              <h3>{bullet}</h3>
              <p>Include this scope point in your final estimate review.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="card">
        <h2>What Affects Pricing in {city.title}</h2>
        <div className="feature-grid">
          <article className="feature-item">
            <FaRulerCombined />
            <h3>Tree size and spread</h3>
            <p>Large canopies and complex rigging increase labor and equipment requirements.</p>
          </article>
          <article className="feature-item">
            <FaHouse />
            <h3>Property proximity</h3>
            <p>Trees near homes, roofs, or fences usually require slower precision cutting.</p>
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
          {comparisons.slice(0, 8).map((comparison) => (
            <Link key={comparison.slug} to={`/compare/${comparison.slug}`}>
              <FaArrowRight />
              {comparison.title}
            </Link>
          ))}
        </div>
      </section>
      <FaqSection title={`FAQ: ${service.name} in ${city.title}`} />
    </>
  )
}
