import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { neighborhoodPages, services, siteMeta } from '../data/siteData'

export function NeighborhoodPage() {
  const { neighborhoodSlug } = useParams()
  const neighborhood = neighborhoodPages.find((item) => item.slug === neighborhoodSlug)

  if (!neighborhood) {
    return (
      <section className="card">
        <h1>Neighborhood Page Not Found</h1>
        <Link to="/">Back to homepage</Link>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`Tree Service in ${neighborhood.title} | GradeATree.com`}
        description={`Grade A Tree neighborhood landing page for ${neighborhood.title}, with local service links and FAQ-driven quote intent content.`}
      />
      <section className="hero compact">
        <p className="eyebrow">Neighborhood Service Landing</p>
        <h1>{neighborhood.title} Tree Service</h1>
        <p>
          This neighborhood page targets hyper-local search intent for {neighborhood.title}. It links directly to Grade
          A Tree service pages and quote actions to maximize local conversion opportunities.
        </p>
        <div className="hero-cta-row">
          <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            Request Estimate in {neighborhood.title}
          </a>
          <a href={siteMeta.phoneHref}>Call Grade A Tree</a>
        </div>
      </section>

      <section className="card">
        <h2>Popular Services In {neighborhood.title}</h2>
        <div className="list-grid">
          {services.map((service) => (
            <Link key={service.slug} className="list-item" to={`/services/${service.slug}`}>
              <h3>{service.name}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
        </div>
      </section>
      <FaqSection title={`FAQ for ${neighborhood.title} Homeowners`} />
    </>
  )
}
