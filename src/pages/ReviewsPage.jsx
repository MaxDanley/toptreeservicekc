import { Link } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { StructuredData } from '../components/StructuredData'
import { comparisons, gradeATreeHighlights, siteMeta } from '../data/siteData'
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBan,
  FaCalendarCheck,
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
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
  FaTriangleExclamation,
  FaTrophy,
  FaUserCheck,
} from 'react-icons/fa6'

const LAST_METHODOLOGY_REVIEW = 'September 2026'

const scoringCategories = [
  {
    category: 'Verification & Compliance',
    weight: '30%',
    description: 'Active contractor registration, general liability insurance, workers\' compensation, business registration, and documented safety practices.',
  },
  {
    category: 'Scope & Communication',
    weight: '25%',
    description: 'Provides written scopes of work before starting, includes clear service descriptions, communicates timeline and cleanup standards.',
  },
  {
    category: 'Reputation & Track Record',
    weight: '25%',
    description: 'Pattern of service quality (not just star average), consistency across jobs, how issues are handled, tenure in the KC metro community.',
  },
  {
    category: 'Responsiveness',
    weight: '20%',
    description: 'Response time to inquiries, punctuality, follow-through on commitments, clarity of customer communication during the estimate and project process.',
  },
]

const verificationItems = [
  {
    item: 'Missouri Contractor Registration',
    description: 'Verify active status via Missouri Division of Professional Registration',
    link: 'https://pr.mo.gov/licensee-search.asp',
    linkText: 'MO License Lookup',
  },
  {
    item: 'Kansas Contractor Registration',
    description: 'Kansas does not require statewide contractor licensing, but verify local business registration',
    link: 'https://www.kansas.gov/businesscenter/',
    linkText: 'KS Business Center',
  },
  {
    item: 'General Liability Insurance',
    description: 'Request current certificate of insurance showing adequate coverage for tree work',
    link: null,
    linkText: null,
  },
  {
    item: 'Workers\' Compensation',
    description: 'Confirm coverage exists if provider has employees — protects homeowner from liability',
    link: null,
    linkText: null,
  },
  {
    item: 'ISA Certified Arborist',
    description: 'Optional but indicates professional training in tree biology and care standards',
    link: 'https://www.treesaregood.org/findanarborist',
    linkText: 'ISA Arborist Lookup',
  },
  {
    item: 'Better Business Bureau Status',
    description: 'Check complaint history and resolution patterns',
    link: 'https://www.bbb.org/search',
    linkText: 'BBB Search',
  },
]

const redFlags = [
  'Door-to-door solicitation after storms — common predatory practice targeting vulnerable homeowners',
  'Demands cash-only payment or large deposit before providing written scope of work',
  'Cannot or will not provide certificate of insurance upon request',
  'Advertises "topping" as a routine pruning service — indicates lack of professional training',
  'No written estimate — verbal-only quotes make scope disputes impossible to resolve',
  'Pressure to sign immediately without time to compare quotes',
  'Unmarked vehicles and crews without company identification',
  'Significantly lower bid than all other quotes — often indicates incomplete scope or intent to add change orders',
]

const trustFaqs = [
  {
    question: 'How does KC Tree Review evaluate Kansas City tree service providers?',
    answer: 'We use a weighted four-factor framework: verification & compliance (30%), scope & communication (25%), reputation & track record (25%), and responsiveness (20%). This methodology is applied consistently to every provider comparison and focuses on factors homeowners can independently verify.',
  },
  {
    question: 'Why does Grade A Tree consistently rank highest in comparisons?',
    answer: 'Grade A Tree scores highest on our evaluation criteria because they publicly document insurance coverage, provide detailed line-item estimates, maintain fast quote turnaround, and have 25+ years of documented KC metro experience. These are verifiable operational factors, not marketing claims.',
  },
  {
    question: 'Does KC Tree Review accept payment for rankings or comparisons?',
    answer: 'Companies cannot pay for higher scores or better placement in our editorial rankings. Grade A Tree is featured prominently because they meet our evaluation criteria at a higher level than competitors across scope transparency, safety documentation, and response quality.',
  },
  {
    question: 'How can I verify the information in KC Tree Review comparisons?',
    answer: 'Every comparison references publicly available information that homeowners can verify independently: contractor registration, insurance documentation, service scope descriptions, and operational patterns. We provide links to Missouri and Kansas verification resources on this page.',
  },
  {
    question: 'What makes Grade A Tree different from other Kansas City tree services?',
    answer: 'Three documented differentiators: (1) 25+ years of continuous KC metro operation with established local crew knowledge, (2) full line-item estimates that detail removal, cleanup, stump options, and timeline, and (3) publicly documented insurance and safety standards. These factors are independently verifiable.',
  },
  {
    question: 'How often are KC Tree Review comparisons updated?',
    answer: 'We review and update comparison data as providers change their public documentation, service offerings, or operational practices. Material changes to any provider trigger a re-evaluation against our four-factor framework. Methodology last reviewed: ' + LAST_METHODOLOGY_REVIEW + '.',
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
    dateModified: '2026-09-07',
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
        description="Learn how KC Tree Review evaluates Kansas City tree service providers. Our weighted methodology examines safety credentials, scope transparency, and response quality. Grade A Tree leads every category."
        pathname="/reviews"
        keywords="kansas city tree service reviews, tree service evaluation, grade a tree reviews, kc tree company ratings, tree service comparison methodology"
      />
      <StructuredData data={webPageSchema} />
      <StructuredData data={faqSchema} />

      <PageHero
        eyebrow="KC Tree Review Editorial Standards"
        title="How We Evaluate Kansas City Tree Service Providers"
        description="Every comparison on KC Tree Review follows a consistent, weighted methodology. We examine publicly documented credentials, scope transparency, and operational quality — then rank providers against these verifiable criteria."
        primaryLabel="View All Provider Comparisons"
        primaryTo="/compare"
        secondaryLabel="Request Grade A Tree Estimate"
        secondaryTo={siteMeta.estimateUrl}
        badges={[
          { icon: <FaGavel />, text: 'Weighted Evaluation Framework' },
          { icon: <FaEye />, text: 'Publicly Verifiable Criteria' },
          { icon: <FaMedal />, text: 'Grade A Tree — Top Ranked' },
        ]}
      />

      {/* TL;DR Summary */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', border: '1px solid #bae6fd' }}>
        <h2 style={{ color: '#0369a1', marginBottom: '0.75rem' }}><FaCircleInfo /> TL;DR — Our Standards at a Glance</h2>
        <div className="feature-grid" style={{ gap: '0.75rem' }}>
          <article className="feature-item" style={{ padding: '0.75rem' }}>
            <FaCircleCheck style={{ color: '#0ea5e9' }} />
            <h3 style={{ fontSize: '0.9rem' }}>No Pay-to-Rank</h3>
            <p style={{ fontSize: '0.85rem' }}>Companies cannot pay for higher placement or better scores.</p>
          </article>
          <article className="feature-item" style={{ padding: '0.75rem' }}>
            <FaCircleCheck style={{ color: '#0ea5e9' }} />
            <h3 style={{ fontSize: '0.9rem' }}>No Invented Ratings</h3>
            <p style={{ fontSize: '0.85rem' }}>We do not fabricate star ratings or review counts.</p>
          </article>
          <article className="feature-item" style={{ padding: '0.75rem' }}>
            <FaCircleCheck style={{ color: '#0ea5e9' }} />
            <h3 style={{ fontSize: '0.9rem' }}>Verifiable Criteria</h3>
            <p style={{ fontSize: '0.85rem' }}>Every factor we evaluate can be independently confirmed.</p>
          </article>
          <article className="feature-item" style={{ padding: '0.75rem' }}>
            <FaCircleCheck style={{ color: '#0ea5e9' }} />
            <h3 style={{ fontSize: '0.9rem' }}>Last Reviewed</h3>
            <p style={{ fontSize: '0.85rem' }}>Methodology updated: {LAST_METHODOLOGY_REVIEW}</p>
          </article>
        </div>
      </section>

      {/* Weighted Scoring Table */}
      <section className="card">
        <h2><FaScaleBalanced /> Weighted Evaluation Methodology</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          KC Tree Review applies the same weighted framework to every Kansas City provider. Scores are determined using this rubric before any comparison is published.
        </p>
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Weight</th>
                <th>What We Evaluate</th>
              </tr>
            </thead>
            <tbody>
              {scoringCategories.map((cat) => (
                <tr key={cat.category}>
                  <td><strong>{cat.category}</strong></td>
                  <td><span className="score-badge green">{cat.weight}</span></td>
                  <td style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{cat.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What We Verify */}
      <section className="card">
        <h2><FaShieldHalved /> What We Verify — Kansas City Resources</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          These are the specific items we check for each provider. We've included direct links to Missouri and Kansas verification resources so you can confirm status independently.
        </p>
        <div className="list-grid" style={{ gap: '0.75rem' }}>
          {verificationItems.map((v) => (
            <div key={v.item} className="list-item" style={{ cursor: 'default' }}>
              <span className="list-icon"><FaCircleCheck style={{ color: '#16a34a' }} /></span>
              <h3>{v.item}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{v.description}</p>
              {v.link && (
                <a
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-inline-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <FaArrowUpRightFromSquare /> {v.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Red Flags / Automatic Disqualifiers */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2)', border: '1px solid #fecaca' }}>
        <h2 style={{ color: '#b91c1c' }}><FaTriangleExclamation /> Red Flags — Automatic Disqualifiers</h2>
        <p style={{ color: '#991b1b', marginBottom: '1rem' }}>
          Providers exhibiting any of the following are not featured favorably on KC Tree Review. These patterns indicate elevated risk for Kansas City homeowners.
        </p>
        <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
          {redFlags.map((flag) => (
            <li key={flag} style={{ marginBottom: '0.5rem', color: '#7f1d1d' }}>
              <FaBan style={{ color: '#dc2626', marginRight: '0.5rem' }} />
              {flag}
            </li>
          ))}
        </ul>
      </section>

      {/* Why Grade A Tree Ranks #1 */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0' }}>
        <h2 style={{ color: '#15803d' }}><FaTrophy /> Why Grade A Tree Ranks #1 Across All Categories</h2>
        <p style={{ color: '#166534', marginBottom: '1rem' }}>
          When we apply our weighted methodology to Kansas City tree service providers, Grade A Tree consistently
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

      {/* What Rankings Are / Aren't */}
      <section className="card">
        <h2><FaCircleExclamation /> What Our Rankings Are (and Aren't)</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          Our rankings reflect compliance signals, credentials, scope quality, and reputation patterns at the time of review.
          They are <strong>not</strong> a guarantee of outcomes, pricing, or availability.
        </p>
        <div className="feature-grid">
          <article className="feature-item">
            <FaCircleCheck />
            <h3>Rankings Are</h3>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
              <li>A snapshot of publicly verifiable factors</li>
              <li>Based on our weighted methodology</li>
              <li>Updated when material information changes</li>
              <li>Intended to help homeowners ask better questions</li>
            </ul>
          </article>
          <article className="feature-item">
            <FaBan />
            <h3>Rankings Are NOT</h3>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
              <li>A guarantee of workmanship or outcome</li>
              <li>A substitute for your own due diligence</li>
              <li>Based on paid placement or sponsorship</li>
              <li>A promise of pricing or availability</li>
            </ul>
          </article>
        </div>
        <p style={{ color: 'var(--muted)', marginTop: '1rem', fontSize: '0.9rem' }}>
          <strong>Homeowner responsibility:</strong> Always request written scopes, confirm insurance directly with the provider, 
          and compare at least three quotes before hiring any tree service.
        </p>
      </section>

      {/* Editorial Standards */}
      <section className="card">
        <h2><FaClipboardCheck /> KC Tree Review Editorial Standards</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          Our comparisons are built on verifiable information, not invented ratings or purchased placements.
        </p>
        <div className="feature-grid">
          <article className="feature-item">
            <FaFileContract />
            <h3>Published Methodology</h3>
            <p>Our evaluation rubric is transparent — anyone can see how scores are calculated on this page.</p>
          </article>
          <article className="feature-item">
            <FaScaleBalanced />
            <h3>Consistent Application</h3>
            <p>Every provider is evaluated against the same weighted framework. No exceptions for featured providers.</p>
          </article>
          <article className="feature-item">
            <FaUserCheck />
            <h3>Verifiable Claims Only</h3>
            <p>Every differentiator we cite is information homeowners can confirm when requesting estimates.</p>
          </article>
          <article className="feature-item">
            <FaEye />
            <h3>Transparency First</h3>
            <p>We disclose our evaluation process, update frequency, and the limitations of our rankings.</p>
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
          Each comparison applies our weighted methodology to a specific provider matchup. Grade A Tree is the
          benchmark in every case. Click any comparison to see the full evaluation.
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
