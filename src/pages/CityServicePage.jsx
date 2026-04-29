import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { cityPages, services, siteMeta } from '../data/siteData'

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
      />
      <section className="hero compact">
        <p className="eyebrow">Service + City Landing Page</p>
        <h1>{service.name} in {city.title}</h1>
        <p>
          This landing page is optimized for "{service.name.toLowerCase()} in {city.title.toLowerCase()}" intent and
          routes visitors to Grade A Tree quote actions with clear next-step guidance.
        </p>
        <div className="hero-cta-row">
          <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            Request {service.name} Quote
          </a>
          <a href={siteMeta.phoneHref}>Call Grade A Tree</a>
        </div>
      </section>

      <section className="card">
        <h2>Scope Checklist For {city.title}</h2>
        <ul>
          {service.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
          <li>Confirm complete cleanup and disposal</li>
          <li>Confirm team credentials and insurance details</li>
          <li>Confirm timeline and emergency scheduling options</li>
        </ul>
      </section>
      <FaqSection title={`FAQ: ${service.name} in ${city.title}`} />
    </>
  )
}
