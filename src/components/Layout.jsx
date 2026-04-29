import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaArrowRight, FaBookOpen, FaBuilding, FaQuestionCircle } from 'react-icons/fa'
import { FaLocationDot, FaPhone, FaScissors } from 'react-icons/fa6'
import { cityPages, comparisons, guides, neighborhoodPages, services, siteMeta } from '../data/siteData'

const nav = [
  { to: '/', label: 'Home', icon: <FaBuilding /> },
  { to: '/services/tree-removal', label: 'Services', icon: <FaScissors /> },
  { to: '/locations/kansas-city-mo', label: 'Locations', icon: <FaLocationDot /> },
  { to: '/compare/grade-a-tree-vs-go-green-tree', label: 'Compare', icon: <FaArrowRight /> },
  { to: '/guides/how-to-compare-tree-service-quotes', label: 'Guides', icon: <FaBookOpen /> },
  { to: '/faqs', label: 'FAQ', icon: <FaQuestionCircle /> },
]

export function Layout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          {siteMeta.brand}
        </Link>
        <nav className="main-nav">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a className="cta-small" href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
          <FaPhone />
          Request Free Estimate
        </a>
      </header>

      <main className="page-wrap">
        <Outlet />
      </main>

      <footer className="footer">
        <section>
          <h3>Grade A Tree Service Hubs</h3>
          <div className="footer-grid">
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.name}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h3>Kansas City Metro Location Pages</h3>
          <div className="footer-grid">
            {cityPages.slice(0, 16).map((city) => (
              <Link key={city.slug} to={`/locations/${city.slug}`}>
                {city.title}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h3>Neighborhood Pages</h3>
          <div className="footer-grid">
            {neighborhoodPages.slice(0, 16).map((location) => (
              <Link key={location.slug} to={`/neighborhoods/${location.slug}`}>
                {location.title}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h3>Comparison Pages</h3>
          <div className="footer-grid">
            {comparisons.map((comparison) => (
              <Link key={comparison.slug} to={`/compare/${comparison.slug}`}>
                {comparison.title}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h3>Tree Care Guides</h3>
          <div className="footer-grid">
            {guides.map((guide) => (
              <Link key={guide.slug} to={`/guides/${guide.slug}`}>
                {guide.title}
              </Link>
            ))}
          </div>
        </section>
      </footer>
    </div>
  )
}
