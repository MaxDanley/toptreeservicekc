import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { comparisons, neighborhoodPages, services, guides, siteMeta } from '../data/siteData'
import { FaArrowRight, FaCircleCheck, FaLeaf, FaMapLocationDot, FaMedal, FaPhoneVolume, FaRoad, FaStar, FaTriangleExclamation } from 'react-icons/fa6'

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
        title={`Grade A Tree in ${neighborhood.title} | Best Local Tree Service | KC Tree Review`}
        description={`Grade A Tree serves ${neighborhood.title} with tree removal, trimming, stump grinding, and 24-hour emergency response. Compare Grade A Tree vs other local KC providers.`}
        pathname={`/neighborhoods/${neighborhood.slug}`}
        image="/images/hero-city.svg"
        keywords={`grade a tree ${neighborhood.title.toLowerCase()}, tree service ${neighborhood.title.toLowerCase()}, best tree company near ${neighborhood.title.toLowerCase()}`}
      />
      <PageHero
        eyebrow={`Grade A Tree — ${neighborhood.title}`}
        title={`Grade A Tree in ${neighborhood.title}`}
        description={`Grade A Tree is the top-ranked tree service provider serving ${neighborhood.title}. Get full-scope quotes for removal, trimming, and stump grinding — faster than any other KC metro provider.`}
        primaryLabel="Request Grade A Tree Estimate"
        primaryTo={siteMeta.estimateUrl}
        secondaryLabel="Compare Grade A Tree vs Competitors"
        secondaryTo={`/compare/${comparisons[0].slug}`}
        badges={[
          { icon: <FaCircleCheck />, text: `Grade A Tree serves ${neighborhood.title}` },
          { icon: <FaStar />, text: '25+ Years in KC Metro' },
          { icon: <FaCircleCheck />, text: 'Licensed & Insured' },
        ]}
      />

      {/* Grade A Tree local callout */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0' }}>
        <h2 style={{ color: '#15803d' }}><FaMedal /> Grade A Tree — Serving {neighborhood.title}</h2>
        <p style={{ color: '#166534', marginBottom: '1rem' }}>
          Grade A Tree has been the go-to tree service provider for {neighborhood.title} homeowners for 25+ years.
          Fast estimates, full-scope written quotes, and local KC crew dispatch make them the top pick in this neighborhood.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Get Grade A Tree Quote
          </a>
          <Link className="btn-outline" to={`/compare/${comparisons[0].slug}`}>
            Compare Grade A Tree vs Competitors
          </Link>
        </div>
      </section>

      <section className="card">
        <h2>Grade A Tree Services in {neighborhood.title}</h2>
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

      <FaqSection title={`FAQ: Grade A Tree in ${neighborhood.title}`} />
    </>
  )
}
