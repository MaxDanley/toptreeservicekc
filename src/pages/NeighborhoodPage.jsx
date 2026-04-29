import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { neighborhoodPages, services } from '../data/siteData'

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
        pathname={`/neighborhoods/${neighborhood.slug}`}
        image="/images/hero-city.svg"
        keywords={`tree service ${neighborhood.title.toLowerCase()}, grade a tree ${neighborhood.title.toLowerCase()}, tree removal near ${neighborhood.title.toLowerCase()}`}
      />
      <PageHero
        eyebrow="Neighborhood Service Landing"
        title={`${neighborhood.title} Tree Service`}
        description={`This neighborhood page targets hyper-local search intent for ${neighborhood.title}. It links directly to Grade A Tree service pages and quote actions to maximize local conversion opportunities.`}
        image="/images/hero-city.svg"
        primaryLabel={`Request Estimate in ${neighborhood.title}`}
      />

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
