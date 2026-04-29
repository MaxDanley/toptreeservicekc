import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { comparisons, neighborhoodPages, services, guides } from '../data/siteData'
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
        title={`Best Tree Services in ${neighborhood.title} | KC Tree Review`}
        description={`Compare tree service providers in ${neighborhood.title}. Find the best tree removal, trimming, and stump grinding options with local coverage and side-by-side breakdowns.`}
        pathname={`/neighborhoods/${neighborhood.slug}`}
        image="/images/hero-city.svg"
        keywords={`tree service ${neighborhood.title.toLowerCase()}, best tree company near ${neighborhood.title.toLowerCase()}, tree removal ${neighborhood.title.toLowerCase()}`}
      />
      <PageHero
        eyebrow={`${neighborhood.title} Tree Service Guide`}
        title={`Tree Services in ${neighborhood.title}`}
        description={`Find and compare top-rated tree removal, trimming, stump grinding, and emergency storm response providers serving the ${neighborhood.title} neighborhood and surrounding KC metro areas.`}
        primaryLabel={`Compare Providers Near ${neighborhood.title}`}
        primaryTo="/compare"
        secondaryLabel="Open Featured Comparison"
        secondaryTo={`/compare/${comparisons[0].slug}`}
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
        <div className="cta-row">
          <Link className="btn-primary" to="/compare">
            View All Comparisons
          </Link>
          <Link className="btn-outline" to="/guides">
            Browse Full Guide Library
          </Link>
        </div>
      </section>

      <FaqSection title={`FAQ for ${neighborhood.title} Homeowners`} />
    </>
  )
}
