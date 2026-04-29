import { FaArrowTrendUp, FaCircleCheck, FaPhoneVolume } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryLabel = 'View Top Comparisons',
  primaryTo = '/compare',
  secondaryLabel = 'Open Featured Comparison',
  secondaryTo = '/compare/grade-a-tree-vs-go-green-tree',
}) {
  return (
    <section className="hero modern-hero">
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-badges">
          <span>
            <FaCircleCheck /> Licensed and insured workflows
          </span>
          <span>
            <FaArrowTrendUp /> Fast estimate response
          </span>
        </div>
        <div className="hero-cta-row">
          <Link to={primaryTo}>
            {primaryLabel}
          </Link>
          <Link to={secondaryTo}>
            <FaPhoneVolume /> {secondaryLabel}
          </Link>
        </div>
      </div>
      <div className="hero-media">
        <img src={image} alt="Kansas City tree service comparison visual" loading="lazy" />
      </div>
    </section>
  )
}
