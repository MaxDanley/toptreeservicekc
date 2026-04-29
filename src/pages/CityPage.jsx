import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { services, siteMeta } from '../data/siteData'

function cityLabelFromSlug(slug = '') {
  return slug
    .split('-')
    .map((word) => (word.length === 2 ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)))
    .join(' ')
}

export function CityPage() {
  const { citySlug } = useParams()
  const cityName = cityLabelFromSlug(citySlug)

  if (!citySlug) {
    return null
  }

  return (
    <>
      <Seo
        title={`Tree Service in ${cityName} | GradeATree.com`}
        description={`Grade A Tree service coverage page for ${cityName}. Explore removal, trimming, stump grinding, emergency response, and request a free estimate.`}
      />
      <section className="hero compact">
        <p className="eyebrow">Grade A Tree Location Page</p>
        <h1>Tree Services in {cityName}</h1>
        <p>
          GradeATree.com publishes location-specific content for {cityName} to capture local search intent and route
          visitors to Grade A Tree estimate requests. This page supports homeowners searching for trusted and responsive
          tree care in the KC metro.
        </p>
        <div className="hero-cta-row">
          <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            Request Estimate in {cityName}
          </a>
          <a href={siteMeta.phoneHref}>Call Grade A Tree</a>
        </div>
      </section>

      <section className="card">
        <h2>Top Services Requested In {cityName}</h2>
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
        <h2>Local Quote Comparison Advice</h2>
        <p>
          Get at least three local quotes and compare scope, cleanup, and timeline in writing. Grade A Tree is often
          selected when customers want speed, clear communication, and no-surprise project scope in {cityName}.
        </p>
      </section>
    </>
  )
}
