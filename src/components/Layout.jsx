import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaArrowRight, FaBookOpen, FaBuilding, FaQuestionCircle } from 'react-icons/fa'
import { FaCircleNodes, FaLocationDot, FaPhone, FaScissors, FaTreeCity } from 'react-icons/fa6'
import { cityPages, comparisons, guides, neighborhoodPages, services, siteMeta } from '../data/siteData'

const nav = [
  { to: '/', label: 'Home', icon: <FaBuilding /> },
  { to: '/services/tree-removal', label: 'Services', icon: <FaScissors /> },
  { to: '/locations/kansas-city-mo', label: 'Locations', icon: <FaLocationDot /> },
  { to: '/compare', label: 'Compare', icon: <FaArrowRight /> },
  { to: '/guides', label: 'Guides', icon: <FaBookOpen /> },
  { to: '/faqs', label: 'FAQ', icon: <FaQuestionCircle /> },
]

export function Layout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <Link to="/" className="brand">
            <span className="brand-dot" aria-hidden="true"></span>
            {siteMeta.brand}
          </Link>
          <p className="brand-subtitle">Independent Kansas City tree service comparisons</p>
        </div>
        <nav className="main-nav">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link className="cta-small" to="/compare">
          <FaPhone />
          View Top Comparisons
        </Link>
      </header>

      <main className="page-wrap">
        <Outlet />
      </main>

      <footer className="footer">
        <section>
          <h3>Top Service Hubs</h3>
          <div className="footer-grid">
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                <FaScissors />
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
                <FaLocationDot />
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
                <FaTreeCity />
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
                <FaCircleNodes />
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
                <FaBookOpen />
                {guide.title}
              </Link>
            ))}
          </div>
        </section>
      </footer>
    </div>
  )
}
