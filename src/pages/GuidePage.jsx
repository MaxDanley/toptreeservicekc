import { Link, useParams } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { StructuredData } from '../components/StructuredData'
import { guides } from '../data/siteData'
import { FaArrowRight, FaBookOpen, FaCircleCheck, FaClipboardCheck, FaListCheck } from 'react-icons/fa6'

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
        title={`${guide.title} | KC Tree Review`}
        description={guide.intro}
        pathname={`/guides/${guide.slug}`}
        image="/images/hero-forest.svg"
        keywords={`${guide.title.toLowerCase()}, kansas city tree guide, best tree services kansas city`}
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.title,
          description: guide.intro,
          author: { '@type': 'Organization', name: 'KC Tree Review Editorial Team' },
          publisher: { '@type': 'Organization', name: 'KC Tree Review' },
          datePublished: '2026-04-28',
          dateModified: '2026-04-28',
          mainEntityOfPage: `https://gradeatree.com/guides/${guide.slug}`,
        }}
      />
      <PageHero
        eyebrow="Kansas City Tree Service Guide"
        title={guide.title}
        description={guide.intro}
        image="/images/hero-forest.svg"
        primaryLabel="View All Comparisons"
        primaryTo="/compare"
        secondaryLabel="Open Featured Comparison"
        secondaryTo="/compare/grade-a-tree-vs-go-green-tree"
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
        <h2>Full Guide</h2>
        <div className="guide-article-grid">
          {guide.deepDive.map((section) => (
            <article key={section.heading} className="guide-panel">
              <h3>{section.heading}</h3>
              <p>{section.body}</p>
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Action Checklist</h2>
        <div className="feature-grid">
          {guide.checklist.map((item) => (
            <article key={item} className="feature-item">
              <FaClipboardCheck />
              <h3>{item}</h3>
              <p>Complete this step before scheduling final tree service work.</p>
            </article>
          ))}
        </div>
        <div className="hero-cta-row">
          <Link to="/compare">
            <FaListCheck />
            Open Comparison Checklist
          </Link>
        </div>
      </section>

      <section className="card">
        <h2>Read More Kansas City Guides</h2>
        <div className="hero-cta-row">
          <Link to="/compare">
            <FaBookOpen />
            Explore Comparison Library
          </Link>
        </div>
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
      <FaqSection title={`FAQ: ${guide.title}`} items={guide.faqs} />
    </>
  )
}
