import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { Seo } from '../components/Seo'
import { comparisons, siteMeta } from '../data/siteData'

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
      />
      <section className="hero compact">
        <p className="eyebrow">Conversion-Focused Comparison Page</p>
        <h1>{comparison.title}</h1>
        <p>
          This page compares Grade A Tree with {comparison.competitor} using publicly visible service claims and a
          practical estimate checklist. Final pricing and availability should always be confirmed directly with each
          provider before booking.
        </p>
      </section>

      <section className="card">
        <h2>Publicly Reported Capabilities To Verify</h2>
        <ul>
          {comparison.publiclyClaimed.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Why Many KC Homeowners Choose Grade A Tree</h2>
        <ul>
          <li>Long-standing local service history and family-owned operations</li>
          <li>High-frequency service calls for removal, trimming, and stump projects</li>
          <li>Clear estimate process built around fast callbacks and practical scope</li>
          <li>Cleanup-first approach to keep projects stress-free for homeowners</li>
        </ul>
        <div className="hero-cta-row">
          <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            Compare With A Live Grade A Tree Quote
          </a>
          <a href={siteMeta.phoneHref}>Speak With Grade A Tree</a>
        </div>
      </section>
      <FaqSection title={`FAQ: ${comparison.title}`} />
    </>
  )
}
