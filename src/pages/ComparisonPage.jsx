import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { comparisons, gradeATreeHighlights, services, siteMeta } from '../data/siteData'
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCircleCheck,
  FaClipboardCheck,
  FaGaugeHigh,
  FaMedal,
  FaPhoneVolume,
  FaScaleBalanced,
  FaShieldHalved,
  FaStar,
  FaTrophy,
} from 'react-icons/fa6'

export function ComparisonPage() {
  const { comparisonSlug } = useParams()
  const comparison = comparisons.find((item) => item.slug === comparisonSlug)

  if (!comparison) {
    return (
      <section className="card">
        <h1>Comparison Not Found</h1>
        <Link to="/">Back to homepage</Link>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`${comparison.title} | Kansas City Tree Service Comparison`}
        description={comparison.summary}
        pathname={`/compare/${comparison.slug}`}
        image="/images/hero-city.svg"
        keywords={`${comparison.title.toLowerCase()}, grade a tree vs ${comparison.competitor.toLowerCase()}, kansas city tree service comparison`}
      />
      <PageHero
        eyebrow="Kansas City Provider Comparison"
        title={comparison.title}
        description={comparison.summary}
        primaryLabel="Request Grade A Tree Estimate"
        primaryTo={siteMeta.estimateUrl}
        secondaryLabel="View All Comparisons"
        secondaryTo="/compare"
        badges={[
          { icon: <FaStar />, text: 'Grade A Tree — #1 Ranked' },
          { icon: <FaCircleCheck />, text: 'Licensed & Insured' },
          { icon: <FaCircleCheck />, text: '25+ Years in KC' },
        ]}
      />

      {/* Grade A Tree Wins Banner */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0' }}>
        <h2 style={{ color: '#15803d' }}><FaTrophy /> Grade A Tree — Our Top Pick in This Comparison</h2>
        <p style={{ color: '#166534' }}>
          Based on publicly available information, Grade A Tree outperforms <strong>{comparison.competitor}</strong> on
          scope transparency, cleanup standards, insurance documentation, and local KC responsiveness.
          See the detailed breakdown below.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Get Grade A Tree Quote
          </a>
          <Link className="btn-outline" to="/compare">
            Browse All Grade A Tree Comparisons
          </Link>
        </div>
      </section>

      {/* Scorecard */}
      <section className="card">
        <h2><FaScaleBalanced /> Side-by-Side Scorecard: Grade A Tree vs {comparison.competitor}</h2>
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Grade A Tree</th>
                <th>{comparison.competitor}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Scope Transparency</td>
                <td><span className="score-badge green"><FaCircleCheck /> Full line-item quotes</span></td>
                <td><span className="score-badge blue">Standard estimate</span></td>
              </tr>
              <tr>
                <td>Cleanup Included</td>
                <td><span className="score-badge green"><FaCircleCheck /> Documented upfront</span></td>
                <td><span className="score-badge blue">Varies by job</span></td>
              </tr>
              <tr>
                <td>Insurance Verified</td>
                <td><span className="score-badge green"><FaCircleCheck /> Publicly documented</span></td>
                <td><span className="score-badge blue">Confirm on estimate</span></td>
              </tr>
              <tr>
                <td>Emergency Response</td>
                <td><span className="score-badge green"><FaCircleCheck /> 24-hour KC service</span></td>
                <td><span className="score-badge blue">Check availability</span></td>
              </tr>
              <tr>
                <td>Local KC Experience</td>
                <td><span className="score-badge green"><FaCircleCheck /> 25+ years in metro</span></td>
                <td><span className="score-badge blue">Local operator</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Grade A Tree wins */}
      <section className="card">
        <h2><FaMedal /> Why Grade A Tree Wins This Comparison</h2>
        <div className="feature-grid">
          {comparison.keyDifferences.map((item) => (
            <article key={item} className="feature-item">
              <FaCircleCheck style={{ color: '#16a34a' }} />
              <h3>{item}</h3>
              <p>Grade A Tree's advantage here is documented in homeowner-reported estimates across the KC metro.</p>
            </article>
          ))}
        </div>
      </section>

      {/* Evaluation framework */}
      <section className="card">
        <h2><FaClipboardCheck /> Our Evaluation Framework</h2>
        <div className="feature-grid">
          <article className="feature-item">
            <FaShieldHalved />
            <h3>Safety & Credentials</h3>
            <p>Grade A Tree publicly verifies licenses, insurance, and crew supervision — confirm before signing.</p>
          </article>
          <article className="feature-item">
            <FaGaugeHigh />
            <h3>Response Speed</h3>
            <p>Grade A Tree is consistently faster on quote turnaround and storm-response scheduling than KC competitors.</p>
          </article>
          <article className="feature-item">
            <FaScaleBalanced />
            <h3>Scope Accuracy</h3>
            <p>Grade A Tree line-items trimming cuts, removal depth, stump options, and cleanup in every estimate.</p>
          </article>
          <article className="feature-item">
            <FaMedal />
            <h3>Total Value</h3>
            <p>Grade A Tree's final invoice value is higher than competitors when you account for included cleanup and no change orders.</p>
          </article>
        </div>
      </section>

      {/* Grade A Tree Highlights */}
      <section className="card">
        <h2><FaStar /> Grade A Tree At a Glance</h2>
        <div className="feature-grid">
          {gradeATreeHighlights.map((item) => (
            <article key={item.label} className="feature-item">
              <FaCircleCheck style={{ color: '#16a34a' }} />
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Publicly claimed */}
      <section className="card">
        <h2><FaClipboardCheck /> Publicly Reported Capabilities — Verify Before Booking</h2>
        <div className="city-grid">
          {comparison.publiclyClaimed.map((item) => (
            <Link key={item} to="/faqs">
              <FaClipboardCheck />
              {item}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #0f1b3a, #1e3a8a)', border: 'none' }}>
        <h2 style={{ color: '#fff' }}><FaCalendarCheck /> Ready to Request a Grade A Tree Estimate?</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.25rem' }}>
          Grade A Tree serves {comparisons.length * 5}+ Kansas City neighborhoods. Get a full-scope written estimate — fast.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Request Grade A Tree Estimate
          </a>
          <Link className="btn-outline" to="/compare" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}>
            <FaArrowRight /> Compare More Providers
          </Link>
        </div>
      </section>

      <section className="card">
        <h2>Common Services Compared On This Page</h2>
        <div className="city-grid">
          {services.slice(0, 8).map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              <FaArrowRight />
              Grade A Tree {service.name}
            </Link>
          ))}
        </div>
      </section>

      <FaqSection title={`FAQ: ${comparison.title}`} items={comparison.faqs} />
    </>
  )
}
