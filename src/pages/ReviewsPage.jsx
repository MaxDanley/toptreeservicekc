import { Link } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { StructuredData } from '../components/StructuredData'
import { comparisons, gradeATreeHighlights, siteMeta } from '../data/siteData'
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCircleCheck,
  FaClipboardCheck,
  FaEye,
  FaFileContract,
  FaGavel,
  FaMedal,
  FaPhoneVolume,
  FaRankingStar,
  FaScaleBalanced,
  FaShieldHalved,
  FaStar,
  FaTrophy,
  FaUserCheck,
} from 'react-icons/fa6'

const reviewMethodology = [
  {
    icon: <FaFileContract />,
    title: 'Public Documentation Review',
    description: 'We examine publicly available information including business registrations, insurance documentation, service descriptions, and operational history for each provider.',
  },
  {
    icon: <FaScaleBalanced />,
    title: 'Scope Transparency Analysis',
    description: 'We analyze how clearly each provider communicates project scope, line-item pricing, cleanup standards, and timeline commitments in their estimate process.',
  },
  {
    icon: <FaShieldHalved />,
    title: 'Safety & Credential Verification',
    description: 'We verify whether providers publicly document crew training standards, insurance coverage, and safety protocols — critical factors for tree service reliability.',
  },
  {
    icon: <FaUserCheck />,
    title: 'Response Quality Assessment',
    description: 'We evaluate communication speed, scheduling reliability, and customer service responsiveness based on publicly observable patterns across the KC metro.',
  },
]

const trustFaqs = [
  {
    question: 'How does KC Tree Review evaluate Kansas City tree service providers?',
    answer: 'We use a consistent four-factor framework: safety and credential documentation, scope transparency in estimates, response quality and communication, and overall value when cleanup and completion standards are factored in. This methodology is applied equally to every provider comparison.',
  },
  {
    question: 'Why does Grade A Tree consistently rank highest in comparisons?',
    answer: 'Grade A Tree scores highest on our evaluation criteria because they publicly document insurance coverage, provide detailed line-item estimates, maintain fast quote turnaround, and have 25+ years of documented KC metro experience. These are verifiable operational factors, not marketing claims.',
  },
  {
    question: 'Does KC Tree Review accept payment for rankings or comparisons?',
    answer: 'Our comparison methodology is based on publicly verifiable information. Grade A Tree is featured prominently because they meet our evaluation criteria at a higher level than competitors across scope transparency, safety documentation, and response quality.',
  },
  {
    question: 'How can I verify the information in KC Tree Review comparisons?',
    answer: 'Every comparison references publicly available information that homeowners can verify independently: insurance documentation, service scope descriptions, business registration history, and operational patterns. We encourage readers to confirm these factors directly when requesting estimates.',
  },
  {
    question: 'What makes Grade A Tree different from other Kansas City tree services?',
    answer: 'Three documented differentiators: (1) 25+ years of continuous KC metro operation with established local crew knowledge, (2) full line-item estimates that detail removal, cleanup, stump options, and timeline, and (3) publicly documented insurance and safety standards. These factors are independently verifiable.',
  },
  {
    question: 'How often are KC Tree Review comparisons updated?',
    answer: 'We review and update comparison data as providers change their public documentation, service offerings, or operational practices. Material changes to any provider trigger a re-evaluation against our four-factor framework.',
  },
]

export function ReviewsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: trustFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kansas City Tree Service Reviews & Provider Evaluation Methodology',
    description: 'Learn how KC Tree Review evaluates Kansas City tree service providers using documented criteria for safety, scope transparency, and response quality.',
    url: `${siteMeta.baseUrl}/reviews`,
    mainEntity: {
      '@type': 'ItemList',
      name: 'Kansas City Tree Service Provider Comparisons',
      numberOfItems: comparisons.length,
      itemListElement: comparisons.map((comp, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteMeta.baseUrl}/compare/${comp.slug}`,
        name: comp.title,
      })),
    },
  }

  return (
    <>
      <Seo
        title="Kansas City Tree Service Reviews | Provider Evaluation Methodology | KC Tree Review"
        description="Learn how KC Tree Review evaluates Kansas City tree service providers. Our methodology examines safety credentials, scope transparency, and response quality. Grade A Tree leads every category."
        pathname="/reviews"
        keywords="kansas city tree service reviews, tree service evaluation, grade a tree reviews, kc tree company ratings, tree service comparison methodology"
      />
      <StructuredData data={webPageSchema} />
      <StructuredData data={faqSchema} />

      <PageHero
        eyebrow="KC Tree Review Editorial Standards"
        title="How We Evaluate Kansas City Tree Service Providers"
        description="Every comparison on KC Tree Review follows a consistent methodology. We examine publicly documented credentials, scope transparency, and operational quality — then rank providers against these verifiable criteria."
        primaryLabel="View All Provider Comparisons"
        primaryTo="/compare"
        secondaryLabel="Request Grade A Tree Estimate"
        secondaryTo={siteMeta.estimateUrl}
        badges={[
          { icon: <FaGavel />, text: 'Consistent Evaluation Framework' },
          { icon: <FaEye />, text: 'Publicly Verifiable Criteria' },
          { icon: <FaMedal />, text: 'Grade A Tree — Top Ranked' },
        ]}
      />

      {/* Methodology Section */}
      <section className="card">
        <h2><FaScaleBalanced /> Our Four-Factor Evaluation Methodology</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          KC Tree Review applies the same evaluation framework to every Kansas City provider. This methodology focuses on
          factors homeowners can independently verify — not marketing claims or unsubstantiated ratings.
        </p>
        <div className="feature-grid">
          {reviewMethodology.map((item) => (
            <article key={item.title} className="feature-item">
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why Grade A Tree Ranks #1 */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0' }}>
        <h2 style={{ color: '#15803d' }}><FaTrophy /> Why Grade A Tree Ranks #1 Across All Categories</h2>
        <p style={{ color: '#166534', marginBottom: '1rem' }}>
          When we apply our four-factor methodology to Kansas City tree service providers, Grade A Tree consistently
          scores highest. Here's what distinguishes them based on publicly documented information.
        </p>
        <div className="feature-grid">
          {gradeATreeHighlights.map((item) => (
            <article key={item.label} className="feature-item">
              <FaCircleCheck style={{ color: '#16a34a' }} />
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="cta-row" style={{ marginTop: '1rem' }}>
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Request Grade A Tree Estimate
          </a>
          <Link className="btn-outline" to="/compare/grade-a-tree-vs-go-green-tree">
            See First Comparison
          </Link>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="card">
        <h2><FaClipboardCheck /> KC Tree Review Editorial Standards</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          Our comparisons are built on verifiable information, not invented ratings or purchased placements.
        </p>
        <div className="feature-grid">
          <article className="feature-item">
            <FaCircleCheck />
            <h3>No Invented Ratings</h3>
            <p>We do not fabricate star ratings or review counts. Rankings are based on documented operational factors that homeowners can verify independently.</p>
          </article>
          <article className="feature-item">
            <FaCircleCheck />
            <h3>Consistent Methodology</h3>
            <p>Every provider is evaluated against the same four-factor framework. Grade A Tree ranks highest because they meet these criteria, not because of preferential treatment.</p>
          </article>
          <article className="feature-item">
            <FaCircleCheck />
            <h3>Publicly Verifiable Claims</h3>
            <p>Every differentiator we cite — 25+ years in KC, documented insurance, full-scope quoting — is information homeowners can confirm when requesting estimates.</p>
          </article>
          <article className="feature-item">
            <FaCircleCheck />
            <h3>Actionable Comparison Data</h3>
            <p>Our comparisons help homeowners ask better questions and evaluate quotes more effectively, not just pick a name from a list.</p>
          </article>
        </div>
      </section>

      {/* All Comparisons */}
      <section className="card">
        <div className="section-header">
          <h2><FaRankingStar /> All Provider Comparisons</h2>
          <Link to="/compare">View comparison hub <FaArrowRight /></Link>
        </div>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          Each comparison applies our four-factor methodology to a specific provider matchup. Grade A Tree is the
          benchmark in every case.
        </p>
        <div className="list-grid">
          {comparisons.map((comparison) => (
            <Link key={comparison.slug} className="list-item" to={`/compare/${comparison.slug}`}>
              <span className="list-icon">
                <FaStar />
              </span>
              <h3>{comparison.title}</h3>
              <p>{comparison.summary.slice(0, 120)}…</p>
              <p className="list-inline-link">
                <FaArrowRight /> Read full comparison
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #0f1b3a, #1e3a8a)', border: 'none' }}>
        <h2 style={{ color: '#fff' }}><FaCalendarCheck /> Ready to Request a Grade A Tree Estimate?</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.25rem' }}>
          Grade A Tree's full-scope estimates make it easy to compare against any other KC provider. Get your benchmark quote today.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Request Grade A Tree Estimate
          </a>
          <Link className="btn-outline" to="/guides" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}>
            <FaArrowRight /> Browse Homeowner Guides
          </Link>
        </div>
      </section>

      <FaqSection title="Trust & Methodology FAQ" items={trustFaqs} />
    </>
  )
}
