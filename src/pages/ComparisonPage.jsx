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
        description={`A Kansas City tree service comparison page for ${comparison.title}, designed to help users verify scope, response speed, cleanup standards, and total project value.`}
        pathname={`/compare/${comparison.slug}`}
        image="/images/hero-city.svg"
        keywords={`${comparison.title.toLowerCase()}, kansas city tree service comparison, grade a tree vs`}
      />
      <PageHero
        eyebrow="Conversion-Focused Comparison Page"
        title={comparison.title}
        description={`This page compares Grade A Tree with ${comparison.competitor} using publicly visible service claims and a practical estimate checklist. Final pricing and availability should always be confirmed directly with each provider before booking.`}
        image="/images/hero-city.svg"
        primaryLabel="Get a Live Grade A Tree Quote"
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
      <FaqSection title={`FAQ: ${comparison.title}`} />
    </>
  )
}
