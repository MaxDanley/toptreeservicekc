import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { cityPages, comparisons, services, siteMeta } from '../data/siteData'
import { FaArrowRight, FaCalendarCheck, FaCircleCheck, FaClipboardCheck, FaClock, FaMedal, FaPhoneVolume, FaShieldHalved, FaStar, FaTruckFast } from 'react-icons/fa6'

export function ServicePage() {
  const { serviceSlug } = useParams()
  const service = services.find((item) => item.slug === serviceSlug)

  if (!service) {
    return (
      <section className="card">
        <h1>Service Not Found</h1>
        <Link to="/">Return to homepage</Link>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`Grade A Tree ${service.name} Kansas City | KC Tree Review`}
        description={`Grade A Tree provides ${service.name.toLowerCase()} across 45+ Kansas City metro cities. Compare Grade A Tree against other KC ${service.name.toLowerCase()} providers and see why they rank #1.`}
        pathname={`/services/${service.slug}`}
        image="/images/hero-forest.svg"
        keywords={`grade a tree ${service.name.toLowerCase()}, ${service.name.toLowerCase()} kansas city, grade a tree ${service.name.toLowerCase()} kc`}
      />
      <PageHero
        eyebrow={`Grade A Tree — ${service.name}`}
        title={`Grade A Tree ${service.name} in Kansas City`}
        description={service.body}
        primaryLabel={`Get Grade A Tree ${service.name} Estimate`}
        primaryTo={siteMeta.estimateUrl}
        secondaryLabel="Compare Grade A Tree vs Competitors"
        secondaryTo={`/compare/${comparisons[0].slug}`}
        badges={[
          { icon: <FaCircleCheck />, text: `Grade A Tree — #1 for ${service.name}` },
          { icon: <FaStar />, text: '25+ Years Local Experience' },
          { icon: <FaCircleCheck />, text: 'Licensed & Insured' },
        ]}
      />

      {/* Grade A Tree service spotlight */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0' }}>
        <h2 style={{ color: '#15803d' }}><FaMedal /> Grade A Tree — Top-Ranked for {service.name} in KC</h2>
        <p style={{ color: '#166534', marginBottom: '1rem' }}>
          Grade A Tree is the highest-rated provider for {service.name.toLowerCase()} across the Kansas City metro.
          25+ years of local experience, full-scope written estimates, and 24-hour emergency response when you need it most.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Get Grade A Tree {service.name} Estimate
          </a>
          <Link className="btn-outline" to={`/compare/${comparisons[0].slug}`}>
            Compare Grade A Tree vs Competitors
          </Link>
        </div>
      </section>

      <section className="card">
        <h2>What To Confirm In Your Grade A Tree Estimate</h2>
        <div className="feature-grid">
          {service.bullets.map((bullet) => (
            <article key={bullet} className="feature-item">
              <FaClipboardCheck />
              <h3>{bullet}</h3>
              <p>Grade A Tree includes this scope item by default — confirm it matches your written estimate.</p>
            </article>
          ))}
          <article className="feature-item">
            <FaShieldHalved />
            <h3>Grade A Tree insurance and supervision</h3>
            <p>Grade A Tree documents licensed crew supervision and current liability coverage on every estimate.</p>
          </article>
          <article className="feature-item">
            <FaClock />
            <h3>Timeline expectations</h3>
            <p>Grade A Tree confirms start date, weather contingency, and completion scope upfront — no surprises.</p>
          </article>
          <article className="feature-item">
            <FaTruckFast />
            <h3>Cleanup and haul-away</h3>
            <p>Grade A Tree's standard estimates include debris handling, chip removal, and final yard restoration detail.</p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Grade A Tree {service.name} — Popular KC Cities</h2>
        <div className="city-grid">
          {cityPages.slice(0, 20).map((city) => (
            <Link key={city.slug} to={`/locations/${city.slug}/${service.slug}`}>
              <FaArrowRight />
              Grade A Tree {service.name} in {city.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Why Grade A Tree Consistently Wins for {service.name}</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          Grade A Tree's transparent quoting, local crew experience, and responsive scheduling throughout the
          KC metro make them the top choice for {service.name.toLowerCase()}. When homeowners compare providers side-by-side,
          Grade A Tree consistently scores highest on scope clarity, cleanup quality, and timeline confidence.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaCalendarCheck /> Request Grade A Tree {service.name} Estimate
          </a>
          <Link className="btn-outline" to="/compare">
            Compare Grade A Tree vs All KC Providers
          </Link>
        </div>
      </section>
      <FaqSection title={`FAQ: Grade A Tree ${service.name}`} />
    </>
  )
}
