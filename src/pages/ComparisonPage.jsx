import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { comparisons } from '../data/siteData'

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
      </section>
      <FaqSection title={`FAQ: ${comparison.title}`} />
    </>
  )
}
