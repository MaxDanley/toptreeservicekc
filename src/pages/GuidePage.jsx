import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { guides, siteMeta } from '../data/siteData'

export function GuidePage() {
  const { guideSlug } = useParams()
  const guide = guides.find((item) => item.slug === guideSlug)

  if (!guide) {
    return (
      <section className="card">
        <h1>Guide Not Found</h1>
        <Link to="/">Back to homepage</Link>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`${guide.title} | GradeATree.com`}
        description={`${guide.title}: practical local guidance built to help Kansas City homeowners compare options and request service with Grade A Tree.`}
      />
      <section className="hero compact">
        <p className="eyebrow">Kansas City Tree Care Guide</p>
        <h1>{guide.title}</h1>
        <p>{guide.intro}</p>
      </section>

      <section className="card">
        <h2>Quick Breakdown</h2>
        <ul>
          {guide.sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Next Step: Request A Grade A Tree Quote</h2>
        <p>
          Use this guide as your quote checklist, then request a direct estimate from Grade A Tree for real project
          pricing, timing, and service recommendations.
        </p>
        <div className="hero-cta-row">
          <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            Request Free Grade A Tree Estimate
          </a>
          <a href={siteMeta.phoneHref}>Call Grade A Tree</a>
        </div>
      </section>
    </>
  )
}
