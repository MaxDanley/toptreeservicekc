import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { guides } from '../data/siteData'
import { FaArrowRight, FaBookOpen, FaCircleCheck, FaListCheck } from 'react-icons/fa6'

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
        pathname={`/guides/${guide.slug}`}
        image="/images/hero-forest.svg"
        keywords={`${guide.title.toLowerCase()}, kansas city tree guide, grade a tree advice`}
      />
      <PageHero
        eyebrow="Kansas City Tree Care Guide"
        title={guide.title}
        description={guide.intro}
        image="/images/hero-forest.svg"
        primaryLabel="Request Free Grade A Tree Estimate"
      />

      <section className="card">
        <h2>Quick Breakdown</h2>
        <div className="feature-grid">
          {guide.sections.map((section) => (
            <article key={section} className="feature-item">
              <FaCircleCheck />
              <h3>{section}</h3>
              <p>Use this checkpoint while reviewing local quote options.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Next Step: Request A Grade A Tree Quote</h2>
        <p>
          Use this guide as your quote checklist, then request a direct estimate from Grade A Tree for real project
          pricing, timing, and service recommendations.
        </p>
        <div className="hero-cta-row">
          <Link to="/faqs">
            <FaListCheck />
            Open FAQ Checklist
          </Link>
        </div>
      </section>

      <section className="card">
        <h2>Read More Kansas City Guides</h2>
        <div className="list-grid">
          {guides
            .filter((item) => item.slug !== guide.slug)
            .slice(0, 4)
            .map((item) => (
              <Link key={item.slug} className="list-item" to={`/guides/${item.slug}`}>
                <span className="list-icon">
                  <FaBookOpen />
                </span>
                <h3>{item.title}</h3>
                <p>{item.intro}</p>
                <p className="list-inline-link">
                  Read guide <FaArrowRight />
                </p>
              </Link>
            ))}
        </div>
      </section>
      <FaqSection title={`FAQ: ${guide.title}`} />
    </>
  )
}
