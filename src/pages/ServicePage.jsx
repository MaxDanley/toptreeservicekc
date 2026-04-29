import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { services } from '../data/siteData'

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
        pathname={`/services/${service.slug}`}
        image="/images/hero-forest.svg"
        keywords={`${service.name.toLowerCase()}, kansas city tree service, grade a tree estimate`}
      />
      <PageHero
        eyebrow="Grade A Tree Service Guide"
        title={`${service.name} in Kansas City`}
        description={service.body}
        image="/images/hero-forest.svg"
        primaryLabel={`Get ${service.name} Quote`}
      />

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
