import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { StructuredData } from '../components/StructuredData'
import { comparisons } from '../data/siteData'
import { FaArrowRight, FaCircleNodes, FaClipboardCheck } from 'react-icons/fa6'

export function CompareIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Kansas City Tree Service Comparisons',
    hasPart: comparisons.map((item) => ({
      '@type': 'Article',
      headline: item.title,
      url: `https://gradeatree.com/compare/${item.slug}`,
    })),
  }

  return (
    <>
      <Seo
        title="Kansas City Tree Service Comparison Pages | KC Tree Review"
        description="Browse real comparison pages for tree service providers in Kansas City with unique checklists and side-by-side decision guidance."
        pathname="/compare"
        image="/images/hero-city.svg"
        keywords="kansas city tree service comparisons, tree company comparison kc, compare tree quotes kansas city"
      />
      <StructuredData data={schema} />
      <PageHero
        eyebrow="Comparison Library"
        title="Kansas City Tree Service Comparison Pages"
        description="Review every side-by-side comparison with unique scope notes, publicly reported capabilities, and a practical decision framework."
        image="/images/hero-city.svg"
        primaryLabel="Open First Comparison"
        primaryTo={`/compare/${comparisons[0].slug}`}
        secondaryLabel="Browse Guide Library"
        secondaryTo="/guides"
      />
      <section className="card">
        <h2>
          <FaCircleNodes /> All Comparison Pages
        </h2>
        <div className="list-grid">
          {comparisons.map((comparison) => (
            <Link key={comparison.slug} className="list-item" to={`/compare/${comparison.slug}`}>
              <span className="list-icon">
                <FaArrowRight />
              </span>
              <h3>{comparison.title}</h3>
              <p>{comparison.summary}</p>
              <p className="list-inline-link">
                <FaClipboardCheck /> Compare now
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
