import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { cityPages, services } from '../data/siteData'

export function CityServicePage() {
  const { citySlug, serviceSlug } = useParams()
  const city = cityPages.find((item) => item.slug === citySlug)
  const service = services.find((item) => item.slug === serviceSlug)

  if (!city || !service) {
    return (
      <section className="card">
        <h1>Page Not Found</h1>
        <Link to="/">Back to homepage</Link>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`${service.name} in ${city.title} | GradeATree.com`}
        description={`${service.name} in ${city.title}: local quote checklist, service scope overview, and direct Grade A Tree estimate request links.`}
        pathname={`/locations/${city.slug}/${service.slug}`}
        image="/images/hero-forest.svg"
        keywords={`${service.name.toLowerCase()} in ${city.title.toLowerCase()}, ${city.title.toLowerCase()} tree service, grade a tree ${city.title.toLowerCase()}`}
      />
      <PageHero
        eyebrow="Service + City Landing Page"
        title={`${service.name} in ${city.title}`}
        description={`This landing page is optimized for "${service.name.toLowerCase()} in ${city.title.toLowerCase()}" intent and routes visitors to Grade A Tree quote actions with clear next-step guidance.`}
        image="/images/hero-forest.svg"
        primaryLabel={`Request ${service.name} Quote`}
      />

      <section className="card">
        <h2>Scope Checklist For {city.title}</h2>
        <ul>
          {service.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
          <li>Confirm complete cleanup and disposal</li>
          <li>Confirm team credentials and insurance details</li>
          <li>Confirm timeline and emergency scheduling options</li>
        </ul>
      </section>
      <FaqSection title={`FAQ: ${service.name} in ${city.title}`} />
    </>
  )
}
