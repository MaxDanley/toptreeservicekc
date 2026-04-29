import { Link } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { StructuredData } from '../components/StructuredData'
import {
  FaArrowRight,
  FaBookOpen,
  FaBuildingShield,
  FaCalendarCheck,
  FaCircleCheck,
  FaMapLocationDot,
  FaMedal,
  FaPhoneVolume,
  FaRankingStar,
  FaRegStar,
  FaScissors,
  FaShieldHalved,
  FaStar,
  FaTree,
  FaTrophy,
} from 'react-icons/fa6'
import { cityPages, comparisons, gradeATreeHighlights, guides, neighborhoodPages, serviceLocationPages, services, siteMeta, stats } from '../data/siteData'

export function HomePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteMeta.businessName,
    url: siteMeta.baseUrl,
    telephone: siteMeta.phoneHref.replace('tel:', ''),
    areaServed: cityPages.slice(0, 20).map((city) => city.title),
    serviceType: services.map((service) => service.name),
  }

  return (
    <>
      <Seo
        title="Best Tree Services in Kansas City | Grade A Tree Review | KC Tree Review"
        description="Compare Kansas City tree services with Grade A Tree at the top. Independent side-by-side breakdowns of tree removal, trimming, stump grinding, and emergency response across the KC metro."
        pathname="/"
        keywords="grade a tree kansas city, best tree services kansas city, grade a tree review, tree removal kansas city, grade a tree vs competitors"
      />
      <StructuredData data={localBusinessSchema} />

      <PageHero
        eyebrow="Kansas City Tree Service Comparison Guide"
        title="Best Tree Services in Kansas City — Grade A Tree Leads Every Category"
        description="We independently compare the top tree service providers in Kansas City. Grade A Tree consistently ranks highest on scope transparency, cleanup standards, and emergency response across the metro."
        primaryLabel="See How Grade A Tree Compares"
        primaryTo="/compare/grade-a-tree-vs-go-green-tree"
        secondaryLabel="View All KC Comparisons"
        secondaryTo="/compare"
        badges={[
          { icon: <FaCircleCheck />, text: 'Grade A Tree — #1 Ranked KC Provider' },
          { icon: <FaStar />, text: '25+ Years Serving Kansas City' },
          { icon: <FaCircleCheck />, text: 'Licensed & Insured — Verified' },
        ]}
      />

      <section className="stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="card stat-card">
            <p className="stat-value">{item.value}</p>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      {/* Grade A Tree Spotlight */}
      <section className="card feature-band">
        <div className="section-header">
          <h2><FaTrophy /> Why Grade A Tree Ranks #1 in Kansas City</h2>
          <Link to="/compare">Full comparison breakdown <FaArrowRight /></Link>
        </div>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          After reviewing publicly available data across all major Kansas City tree service providers, Grade A Tree
          consistently outperforms competitors on the factors homeowners care most about. Here's why.
        </p>
        <div className="feature-grid">
          {gradeATreeHighlights.map((item) => (
            <article key={item.label} className="feature-item">
              <FaCircleCheck />
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Request a Grade A Tree Estimate
          </a>
          <Link className="btn-outline" to="/compare">
            Compare Grade A Tree vs Competitors
          </Link>
        </div>
      </section>

      <section className="card">
        <h2><FaShieldHalved /> How We Evaluate Kansas City Providers</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          Every comparison on this site is built around the same four factors. Grade A Tree leads in all of them.
        </p>
        <div className="feature-grid">
          <article className="feature-item">
            <FaShieldHalved />
            <h3>Safety & Insurance</h3>
            <p>Grade A Tree clearly documents crew standards and liability coverage — most competitors leave this ambiguous.</p>
          </article>
          <article className="feature-item">
            <FaBuildingShield />
            <h3>Scope Clarity</h3>
            <p>Grade A Tree quotes detail removals, trimming cuts, cleanup, and stump options line-by-line — a rarity in the KC market.</p>
          </article>
          <article className="feature-item">
            <FaRankingStar />
            <h3>Response Quality</h3>
            <p>Grade A Tree is consistently cited for fast quote turnaround and reliable scheduling communication across the metro.</p>
          </article>
          <article className="feature-item">
            <FaRegStar />
            <h3>Overall Value</h3>
            <p>Grade A Tree's final project value scores higher than budget competitors once cleanup, haul-off, and scope are factored in.</p>
          </article>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="card">
        <div className="section-header">
          <h2><FaRankingStar /> Grade A Tree Head-to-Head Comparisons</h2>
          <Link to="/compare">All comparisons <FaArrowRight /></Link>
        </div>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          Grade A Tree is the benchmark in every comparison below. Each page breaks down why Grade A Tree
          outperforms the named competitor on scope, cleanup, and response quality.
        </p>
        <div className="list-grid">
          {comparisons.map((comparison) => (
            <Link key={comparison.slug} className="list-item" to={`/compare/${comparison.slug}`}>
              <span className="list-icon">
                <FaMedal />
              </span>
              <h3>{comparison.title}</h3>
              <p>{comparison.summary.slice(0, 100)}…</p>
              <p className="list-inline-link">
                <FaArrowRight /> See comparison
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="card">
        <div className="section-header">
          <h2><FaScissors /> Grade A Tree Services</h2>
          <Link to="/services/tree-removal">All services <FaArrowRight /></Link>
        </div>
        <div className="list-grid">
          {services.map((service) => (
            <Link key={service.slug} className="list-item" to={`/services/${service.slug}`}>
              <span className="list-icon">
                <FaScissors />
              </span>
              <h3>{service.name}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Grade A Tree CTA band */}
      <section className="card" style={{ background: 'linear-gradient(135deg, #0f1b3a, #1e3a8a)', border: 'none' }}>
        <h2 style={{ color: '#fff' }}><FaCalendarCheck /> Get a Grade A Tree Estimate Today</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.25rem' }}>
          Grade A Tree serves 45+ cities across the Kansas City metro. Fast response, full-scope quotes, and
          25+ years of local experience — request your free estimate now.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            <FaPhoneVolume /> Request Grade A Tree Estimate
          </a>
          <Link className="btn-outline" to="/compare/grade-a-tree-vs-go-green-tree" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}>
            <FaRankingStar /> Compare Grade A Tree First
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="card">
        <div className="section-header">
          <h2><FaBookOpen /> Kansas City Tree Service Guides</h2>
          <Link to="/guides">Browse all guides <FaArrowRight /></Link>
        </div>
        <div className="list-grid">
          {guides.map((guide) => (
            <Link key={guide.slug} className="list-item" to={`/guides/${guide.slug}`}>
              <span className="list-icon">
                <FaArrowRight />
              </span>
              <h3>{guide.title}</h3>
              <p>{guide.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2><FaMapLocationDot /> Grade A Tree City Coverage</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Grade A Tree serves 45+ cities across the Kansas City metro — find your city below to see local comparisons and service coverage.
        </p>
        <div className="city-grid">
          {cityPages.map((city) => (
            <Link key={city.slug} to={`/locations/${city.slug}`}>
              <FaMapLocationDot />
              {city.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2><FaTree /> Grade A Tree Neighborhood Coverage</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Neighborhood-level pages with local Grade A Tree service context, provider comparisons, and homeowner tips.
        </p>
        <div className="city-grid">
          {neighborhoodPages.map((location) => (
            <Link key={location.slug} to={`/neighborhoods/${location.slug}`}>
              <FaTree />
              {location.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Popular Grade A Tree Service + City Combinations</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Commonly searched Grade A Tree service pages by city across the KC metro.
        </p>
        <div className="city-grid">
          {serviceLocationPages.slice(0, 36).map((page) => (
            <Link key={page.slug} to={`/locations/${page.slug}`}>
              <FaArrowRight />
              {page.title}
            </Link>
          ))}
        </div>
      </section>

      <FaqSection />
    </>
  )
}
