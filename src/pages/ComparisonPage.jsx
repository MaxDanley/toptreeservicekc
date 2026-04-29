import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { comparisons, services } from '../data/siteData'
import { FaArrowRight, FaClipboardCheck, FaGaugeHigh, FaMedal, FaScaleBalanced, FaShieldHalved } from 'react-icons/fa6'

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
        keywords={`${comparison.title.toLowerCase()}, kansas city tree service comparison, compare tree service quotes`}
      />
      <PageHero
        eyebrow="Kansas City Provider Comparison"
        title={comparison.title}
        description={comparison.summary}
        image="/images/hero-city.svg"
        primaryLabel="View All Comparisons"
        primaryTo="/compare"
        secondaryLabel="Read Comparison Guides"
        secondaryTo="/guides"
      />

      <section className="card">
        <h2>Side-by-Side Scorecard Framework</h2>
        <div className="feature-grid">
          <article className="feature-item">
            <FaShieldHalved />
            <h3>Safety & Credentials</h3>
            <p>Verify licenses, insurance, and supervision details before selecting a provider.</p>
          </article>
          <article className="feature-item">
            <FaGaugeHigh />
            <h3>Response Speed</h3>
            <p>Measure quote turnaround and scheduling clarity, especially for urgent tree hazards.</p>
          </article>
          <article className="feature-item">
            <FaScaleBalanced />
            <h3>Scope Accuracy</h3>
            <p>Compare exact line items for trimming cuts, removals, stump depth, and cleanup.</p>
          </article>
          <article className="feature-item">
            <FaMedal />
            <h3>Total Value</h3>
            <p>Rank providers by outcomes, not just lowest number at the top of the quote.</p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Publicly Reported Capabilities To Verify</h2>
        <div className="city-grid">
          {comparison.publiclyClaimed.map((item) => (
            <Link key={item} to="/faqs">
              <FaClipboardCheck />
              {item}
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Unique Comparison Notes</h2>
        <div className="feature-grid">
          {comparison.keyDifferences.map((item) => (
            <article key={item} className="feature-item">
              <FaClipboardCheck />
              <h3>{item}</h3>
              <p>Use this factor to separate providers with similar top-line quote totals.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Common Services Compared On This Page</h2>
        <div className="city-grid">
          {services.slice(0, 8).map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              <FaArrowRight />
              {service.name}
            </Link>
          ))}
        </div>
      </section>
      <FaqSection title={`FAQ: ${comparison.title}`} items={comparison.faqs} />
    </>
  )
}
