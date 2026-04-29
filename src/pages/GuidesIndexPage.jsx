import { Link, useSearchParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { StructuredData } from '../components/StructuredData'
import { guideTopics, guides } from '../data/guidesContent'
import { FaArrowLeft, FaArrowRight, FaBookOpen, FaFilter, FaHashtag } from 'react-icons/fa6'

const PAGE_SIZE = 6

function toTitleCase(text) {
  return text[0].toUpperCase() + text.slice(1)
}

export function GuidesIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const topic = searchParams.get('topic') ?? 'all'
  const page = Number(searchParams.get('page') ?? '1')

  const filtered = topic === 'all' ? guides : guides.filter((guide) => guide.topics.includes(topic))
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(Math.max(page, 1), totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const visibleGuides = filtered.slice(start, start + PAGE_SIZE)

  const setParamState = (nextTopic, nextPage) => {
    const params = new URLSearchParams()
    if (nextTopic !== 'all') params.set('topic', nextTopic)
    if (nextPage > 1) params.set('page', String(nextPage))
    setSearchParams(params)
  }

  const guideCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Kansas City Tree Service Guides',
    description: 'Topic-based guide library for comparing tree services in Kansas City.',
    hasPart: visibleGuides.map((guide) => ({
      '@type': 'Article',
      headline: guide.title,
      url: `https://gradeatree.com/guides/${guide.slug}`,
    })),
  }

  return (
    <>
      <Seo
        title="Kansas City Tree Service Guides | KC Tree Review"
        description="Browse in-depth Kansas City tree service guides by topic including cost, storm response, trimming, stump work, and provider comparisons."
        pathname="/guides"
        image="/images/hero-city.svg"
        keywords="kansas city tree service guides, tree removal guide, stump grinding guide, tree trimming guide"
      />
      <StructuredData data={guideCollectionSchema} />
      <PageHero
        eyebrow="Guide Library"
        title="Kansas City Tree Service Guides"
        description="Browse detailed local guides by topic. Every guide is built to help homeowners compare providers, understand scope, and make higher-confidence service decisions."
        image="/images/hero-city.svg"
        primaryLabel="View Top Comparisons"
      />

      <section className="card">
        <h2>
          <FaFilter /> Filter by Topic
        </h2>
        <div className="chips-row">
          <button type="button" className={`chip ${topic === 'all' ? 'active' : ''}`} onClick={() => setParamState('all', 1)}>
            All Topics
          </button>
          {guideTopics.map((item) => (
            <button
              key={item}
              type="button"
              className={`chip ${topic === item ? 'active' : ''}`}
              onClick={() => setParamState(item, 1)}
            >
              <FaHashtag />
              {toTitleCase(item)}
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>
          <FaBookOpen /> Guide Results
        </h2>
        <div className="list-grid">
          {visibleGuides.map((guide) => (
            <Link key={guide.slug} className="list-item" to={`/guides/${guide.slug}`}>
              <span className="list-icon">
                <FaArrowRight />
              </span>
              <h3>{guide.title}</h3>
              <p>{guide.intro}</p>
              <p className="guide-topics-inline">
                {guide.topics.map((tag) => (
                  <span key={tag}>{toTitleCase(tag)}</span>
                ))}
              </p>
            </Link>
          ))}
        </div>
        <div className="pagination-row">
          <button type="button" disabled={currentPage === 1} onClick={() => setParamState(topic, currentPage - 1)}>
            <FaArrowLeft /> Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button type="button" disabled={currentPage === totalPages} onClick={() => setParamState(topic, currentPage + 1)}>
            Next <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  )
}
