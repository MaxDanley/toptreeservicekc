import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { comparisons, services } from '../data/siteData'
import { FaArrowRight, FaMapLocationDot, FaRankingStar, FaShieldHalved } from 'react-icons/fa6'

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
        pathname={`/locations/${citySlug}`}
        image="/images/hero-city.svg"
        keywords={`tree service in ${cityName.toLowerCase()}, grade a tree ${cityName.toLowerCase()}, tree removal ${cityName.toLowerCase()}`}
      />
      <PageHero
        eyebrow="Grade A Tree Location Page"
        title={`Tree Services in ${cityName}`}
        description={`GradeATree.com publishes location-specific content for ${cityName} to capture local search intent and route visitors to Grade A Tree estimate requests. This page supports homeowners searching for trusted and responsive tree care in the KC metro.`}
        image="/images/hero-city.svg"
        primaryLabel={`Request Estimate in ${cityName}`}
      />

      <section className="card">
        <h2>Top Services Requested In {cityName}</h2>
        <div className="list-grid">
          {services.map((service) => (
            <Link key={service.slug} className="list-item city-service-item" to={`/locations/${citySlug}/${service.slug}`}>
              <span className="list-icon">
                <FaMapLocationDot />
              </span>
              <h3>{service.name}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Comparison Snapshot For {cityName}</h2>
        <div className="feature-grid">
          <article className="feature-item">
            <FaShieldHalved />
            <h3>Best for safety-focused jobs</h3>
            <p>Prioritize crews that document insurance and hazard controls in the quote.</p>
          </article>
          <article className="feature-item">
            <FaRankingStar />
            <h3>Best for overall value</h3>
            <p>Compare response time, scope detail, and cleanup quality—not just headline totals.</p>
          </article>
          <article className="feature-item">
            <FaArrowRight />
            <h3>Best next step</h3>
            <p>Review at least three written estimates before selecting a final provider.</p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Popular {cityName} Comparison Pages</h2>
        <div className="city-grid">
          {comparisons.slice(0, 8).map((item) => (
            <Link key={item.slug} to={`/compare/${item.slug}`}>
              <FaArrowRight />
              {item.title}
            </Link>
          ))}
        </div>
      </section>
      <FaqSection title={`FAQ: Tree Service in ${cityName}`} />
    </>
  )
}
