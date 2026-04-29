import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaBookOpen, FaMapLocationDot, FaScissors, FaShieldHalved } from 'react-icons/fa6'
import { guides, services } from '../data/siteData'

export function FaqPage() {
  return (
    <>
      <Seo
        title="Tree Service FAQ Kansas City | KC Tree Review"
        description="Frequently asked questions about tree removal, trimming, stump grinding, and emergency service in the Kansas City metro. Practical answers for homeowners comparing providers."
        pathname="/faqs"
        image="/images/hero-city.svg"
        keywords="kansas city tree service faq, tree removal faq, stump grinding faq, best tree company kc"
      />
      <PageHero
        eyebrow="Knowledge Center"
        title="Kansas City Tree Service FAQ"
        description="Quick, practical answers for homeowners comparing tree service options in Kansas City and surrounding cities. Use these answers to ask better questions when reviewing provider quotes."
        primaryLabel="View All Comparisons"
        primaryTo="/compare"
        secondaryLabel="Open Featured Comparison"
        secondaryTo="/compare/grade-a-tree-vs-go-green-tree"
      />
      <section className="card">
        <h2>Browse FAQ By Topic</h2>
        <div className="feature-grid">
          <article className="feature-item">
            <FaScissors />
            <h3>Service scope questions</h3>
            <p>Understand what is included in trimming, removals, and stump work.</p>
          </article>
          <article className="feature-item">
            <FaShieldHalved />
            <h3>Safety and insurance</h3>
            <p>Know what to verify before signing your final work authorization.</p>
          </article>
          <article className="feature-item">
            <FaMapLocationDot />
            <h3>Location-specific concerns</h3>
            <p>Get practical tips for neighborhood and city-based service differences.</p>
          </article>
        </div>
      </section>
      <FaqSection title="Most Asked Questions" />
      <section className="card">
        <h2>Helpful Links</h2>
        <div className="list-grid">
          {services.slice(0, 4).map((service) => (
            <Link key={service.slug} className="list-item" to={`/services/${service.slug}`}>
              <span className="list-icon">
                <FaArrowRight />
              </span>
              <h3>{service.name}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
          {guides.slice(0, 2).map((guide) => (
            <Link key={guide.slug} className="list-item" to={`/guides/${guide.slug}`}>
              <span className="list-icon">
                <FaBookOpen />
              </span>
              <h3>{guide.title}</h3>
              <p>{guide.intro}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
