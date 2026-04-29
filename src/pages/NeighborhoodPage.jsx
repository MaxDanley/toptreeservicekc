import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { neighborhoodPages, services, guides } from '../data/siteData'
import { FaArrowRight, FaLeaf, FaMapLocationDot, FaRoad, FaTriangleExclamation } from 'react-icons/fa6'

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
        <h2>Neighborhood Tree Service Factors</h2>
        <div className="feature-grid">
          <article className="feature-item">
            <FaRoad />
            <h3>Equipment access</h3>
            <p>Narrow driveways and fence access can affect crew setup and job timing.</p>
          </article>
          <article className="feature-item">
            <FaLeaf />
            <h3>Canopy density</h3>
            <p>Older neighborhoods often have larger mature canopy requiring structured trimming plans.</p>
          </article>
          <article className="feature-item">
            <FaTriangleExclamation />
            <h3>Storm exposure</h3>
            <p>After severe weather, prioritize overhangs and unstable limbs near homes and sidewalks.</p>
          </article>
        </div>
      </section>
      <section className="card">
        <h2>Useful Local Guides</h2>
        <div className="city-grid">
          {guides.slice(0, 6).map((guide) => (
            <Link key={guide.slug} to={`/guides/${guide.slug}`}>
              <FaArrowRight />
              {guide.title}
            </Link>
          ))}
        </div>
      </section>
      <FaqSection title={`FAQ for ${neighborhood.title} Homeowners`} />
    </>
  )
}
