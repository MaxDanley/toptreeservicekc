import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaBookOpen, FaCalendarCheck, FaCircleCheck, FaMapLocationDot, FaPhoneVolume, FaScissors, FaShieldHalved, FaStar } from 'react-icons/fa6'
import { guides, services, siteMeta } from '../data/siteData'

export function FaqPage() {
  return (
    <>
      <Seo
        title="Grade A Tree FAQ Kansas City | KC Tree Review"
        description="Frequently asked questions about Grade A Tree and Kansas City tree services. Get answers on pricing, insurance, emergency response, stump grinding, and why Grade A Tree ranks #1 in KC."
        pathname="/faqs"
        image="/images/hero-city.svg"
        keywords="grade a tree faq, kansas city tree service faq, grade a tree insurance, grade a tree emergency service, tree removal kansas city"
      />
      <PageHero
        eyebrow="Grade A Tree Knowledge Center"
        title="Grade A Tree — Kansas City FAQ"
        description="Everything KC homeowners ask about Grade A Tree before booking. Covering pricing, insurance, scope, emergency response, and how Grade A Tree compares to other KC providers."
        primaryLabel="Request Grade A Tree Estimate"
        primaryTo={siteMeta.estimateUrl}
        secondaryLabel="Compare Grade A Tree vs Competitors"
        secondaryTo="/compare/grade-a-tree-vs-go-green-tree"
        badges={[
          { icon: <FaCircleCheck />, text: 'Grade A Tree — #1 Ranked KC Provider' },
          { icon: <FaStar />, text: '25+ Years Serving Kansas City' },
          { icon: <FaCircleCheck />, text: 'Licensed & Insured — Verified' },
        ]}
      />

      {/* Grade A Tree quick facts */}
      <section className="card">
        <h2><FaStar /> Grade A Tree — Quick Facts</h2>
        <div className="feature-grid">
          <article className="feature-item">
            <FaCircleCheck style={{ color: '#16a34a' }} />
            <h3>25+ Years in Kansas City</h3>
            <p>Grade A Tree has operated in the KC metro for over 25 years with consistent crew standards and local knowledge.</p>
          </article>
          <article className="feature-item">
            <FaShieldHalved />
            <h3>Licensed and Insured</h3>
            <p>Grade A Tree documents insurance and crew licensing on every estimate — confirm details directly with your quote.</p>
          </article>
          <article className="feature-item">
            <FaCalendarCheck />
            <h3>24-Hour Emergency Response</h3>
            <p>Grade A Tree provides 24-hour emergency storm response across the KC metro — one of the fastest in the market.</p>
          </article>
          <article className="feature-item">
            <FaMapLocationDot />
            <h3>45+ Cities Served</h3>
            <p>Grade A Tree covers 45+ cities across the Kansas City metro on both the Missouri and Kansas sides.</p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Browse FAQ By Topic</h2>
        <div className="feature-grid">
          <article className="feature-item">
            <FaScissors />
            <h3>Grade A Tree service scope</h3>
            <p>Understand what is included in Grade A Tree trimming, removals, and stump work estimates.</p>
          </article>
          <article className="feature-item">
            <FaShieldHalved />
            <h3>Grade A Tree insurance & safety</h3>
            <p>Know what to verify in your Grade A Tree estimate before authorizing any work.</p>
          </article>
          <article className="feature-item">
            <FaMapLocationDot />
            <h3>Grade A Tree local coverage</h3>
            <p>Check Grade A Tree coverage for your specific KC city or neighborhood.</p>
          </article>
        </div>
      </section>

      <FaqSection title="Grade A Tree — Most Asked Questions" />

      {/* CTA band */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #0f1b3a, #1e3a8a)', border: 'none' }}>
        <h2 style={{ color: '#fff' }}><FaCalendarCheck /> Ready to Book Grade A Tree?</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.25rem' }}>
          Grade A Tree serves 45+ Kansas City metro cities. Request your free, full-scope estimate today.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Request Grade A Tree Estimate
          </a>
          <Link className="btn-outline" to="/compare" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}>
            <FaArrowRight /> Compare Grade A Tree First
          </Link>
        </div>
      </section>

      <section className="card">
        <h2>Helpful Grade A Tree Resources</h2>
        <div className="list-grid">
          {services.slice(0, 4).map((service) => (
            <Link key={service.slug} className="list-item" to={`/services/${service.slug}`}>
              <span className="list-icon">
                <FaArrowRight />
              </span>
              <h3>Grade A Tree — {service.name}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
          {guides.slice(0, 2).map((guide) => (
            <Link key={guide.slug} className="list-item" to={`/guides/${guide.slug}`}>
              <span className="list-icon">
                <FaBookOpen />
              </span>
              <h3>{guide.title}</h3>
              <p>{guide.intro}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
