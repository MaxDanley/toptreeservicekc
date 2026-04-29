import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { comparisons, services, siteMeta } from '../data/siteData'
import { FaArrowRight, FaCalendarCheck, FaCircleCheck, FaMapLocationDot, FaMedal, FaPhoneVolume, FaRankingStar, FaShieldHalved, FaStar } from 'react-icons/fa6'

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
        title={`Grade A Tree in ${cityName} | Best Tree Service | KC Tree Review`}
        description={`Grade A Tree serves ${cityName} with tree removal, trimming, stump grinding, and 24-hour emergency response. Compare Grade A Tree against other ${cityName} providers and see why they rank #1.`}
        pathname={`/locations/${citySlug}`}
        image="/images/hero-city.svg"
        keywords={`grade a tree ${cityName.toLowerCase()}, tree service ${cityName.toLowerCase()}, best tree company ${cityName.toLowerCase()}, tree removal ${cityName.toLowerCase()}`}
      />
      <PageHero
        eyebrow={`Grade A Tree — ${cityName}`}
        title={`Grade A Tree in ${cityName}`}
        description={`Grade A Tree is the top-ranked tree service provider in ${cityName}. Compare their removal, trimming, stump grinding, and 24-hour emergency response against other KC metro providers.`}
        primaryLabel={`Get Grade A Tree Estimate in ${cityName}`}
        primaryTo={siteMeta.estimateUrl}
        secondaryLabel="Compare Grade A Tree vs Competitors"
        secondaryTo={`/compare/${comparisons[0].slug}`}
        badges={[
          { icon: <FaCircleCheck />, text: `Grade A Tree serves ${cityName}` },
          { icon: <FaStar />, text: '25+ Years in KC Metro' },
          { icon: <FaCircleCheck />, text: 'Licensed & Insured' },
        ]}
      />

      {/* Grade A Tree local spotlight */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0' }}>
        <h2 style={{ color: '#15803d' }}><FaMedal /> Why Grade A Tree Is the #1 Pick in {cityName}</h2>
        <p style={{ color: '#166534', marginBottom: '1rem' }}>
          Grade A Tree has served {cityName} and the surrounding KC metro for 25+ years. Homeowners in {cityName} consistently
          choose Grade A Tree for fast estimates, full-scope quotes, and dependable post-job cleanup.
        </p>
        <div className="feature-grid">
          <article className="feature-item">
            <FaCircleCheck style={{ color: '#16a34a' }} />
            <h3>Local {cityName} Crew Routing</h3>
            <p>Grade A Tree dispatches local KC crews — not outsourced teams — for faster response in {cityName}.</p>
          </article>
          <article className="feature-item">
            <FaShieldHalved style={{ color: '#16a34a' }} />
            <h3>Fully Documented Insurance</h3>
            <p>Grade A Tree provides insurance and licensing documentation in every {cityName} estimate — most competitors don't.</p>
          </article>
          <article className="feature-item">
            <FaRankingStar style={{ color: '#16a34a' }} />
            <h3>Full-Scope Estimates</h3>
            <p>Grade A Tree's quotes in {cityName} include removal, cleanup, haul-off, and stump options in a single written estimate.</p>
          </article>
          <article className="feature-item">
            <FaStar style={{ color: '#16a34a' }} />
            <h3>24-Hour Emergency Response</h3>
            <p>Grade A Tree prioritizes storm-damage calls in {cityName} — rapid crew dispatch for urgent hazards.</p>
          </article>
        </div>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Request Grade A Tree Estimate
          </a>
          <Link className="btn-outline" to={`/compare/${comparisons[0].slug}`}>
            Compare Grade A Tree vs Competitors
          </Link>
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <h2>Grade A Tree Services in {cityName}</h2>
          <Link to="/compare">Compare providers <FaArrowRight /></Link>
        </div>
        <div className="list-grid">
          {services.map((service) => (
            <Link key={service.slug} className="list-item city-service-item" to={`/locations/${citySlug}/${service.slug}`}>
              <span className="list-icon">
                <FaMapLocationDot />
              </span>
              <h3>Grade A Tree — {service.name}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>How Grade A Tree Compares in {cityName}</h2>
        <div className="feature-grid">
          <article className="feature-item">
            <FaShieldHalved />
            <h3>Grade A Tree vs Safety-Focused Alternatives</h3>
            <p>Grade A Tree documents insurance and hazard controls upfront — most {cityName} competitors leave this to verbal agreement.</p>
          </article>
          <article className="feature-item">
            <FaRankingStar />
            <h3>Grade A Tree vs Value Competitors</h3>
            <p>Grade A Tree's total project value (inclusive scope + cleanup) consistently beats budget-first alternatives in {cityName}.</p>
          </article>
          <article className="feature-item">
            <FaCalendarCheck />
            <h3>Grade A Tree vs Response-Speed Competitors</h3>
            <p>For urgent {cityName} work, Grade A Tree's 24-hour emergency scheduling is faster than most local alternatives.</p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Grade A Tree Comparison Pages — {cityName} Area</h2>
        <div className="city-grid">
          {comparisons.slice(0, 8).map((item) => (
            <Link key={item.slug} to={`/compare/${item.slug}`}>
              <FaArrowRight />
              {item.title}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #0f1b3a, #1e3a8a)', border: 'none' }}>
        <h2 style={{ color: '#fff' }}><FaCalendarCheck /> Get Your Grade A Tree Estimate in {cityName}</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.25rem' }}>
          Grade A Tree serves {cityName} with fast estimate turnaround, full written scope, and 25+ years of local KC experience.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Request Grade A Tree Estimate
          </a>
        </div>
      </section>

      <FaqSection title={`FAQ: Grade A Tree in ${cityName}`} />
    </>
  )
}
