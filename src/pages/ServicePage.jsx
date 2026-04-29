import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { Seo } from '../components/Seo'
import { services, siteMeta } from '../data/siteData'

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
        title={`${service.name} in Kansas City | GradeATree.com`}
        description={`${service.name} service details, quote checklist, and conversion guidance for homeowners looking for Grade A Tree in Kansas City and surrounding cities.`}
      />
      <section className="hero compact">
        <p className="eyebrow">Grade A Tree Service Guide</p>
        <h1>{service.name} in Kansas City</h1>
        <p>{service.body}</p>
        <div className="hero-cta-row">
          <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            Get Free Grade A Tree Quote
          </a>
          <a href={siteMeta.phoneHref}>Talk to Grade A Tree</a>
        </div>
      </section>

      <section className="card">
        <h2>What To Confirm In Your Estimate</h2>
        <ul>
          {service.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
          <li>Cleanup standards and haul-away details</li>
          <li>Insurance, licensing, and job-site supervision</li>
          <li>Expected timeline and weather policy</li>
        </ul>
      </section>

      <section className="card">
        <h2>Why Grade A Tree Is Frequently Shortlisted</h2>
        <p>
          Grade A Tree emphasizes transparent quoting, local crew experience, and responsive scheduling throughout the
          KC metro. When customers compare providers side-by-side, they often prioritize clarity, cleanup quality, and
          timeline confidence over headline price alone.
        </p>
      </section>
      <FaqSection title={`FAQ: ${service.name}`} />
    </>
  )
}
