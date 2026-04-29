import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = 'View Top Comparisons',
  primaryTo = '/compare',
  secondaryLabel = 'Open Featured Comparison',
  secondaryTo = '/compare/grade-a-tree-vs-go-green-tree',
  badges,
}) {
  const defaultBadges = badges || [
    { icon: <FaCircleCheck />, text: 'Licensed & insured providers' },
    { icon: <FaArrowTrendUp />, text: 'Fast estimate response' },
    { icon: <FaCircleCheck />, text: 'Side-by-side breakdowns' },
  ]

  return (
    <div className="hero-band">
      <div className="hero-band-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p className="hero-desc">{description}</p>
        <div className="hero-badges">
          {defaultBadges.map((badge, i) => (
            <span key={i}>
              {badge.icon}
              {badge.text}
            </span>
          ))}
        </div>
        <div className="hero-cta-row">
          <Link to={primaryTo}>
            <FaArrowRight />
            {primaryLabel}
          </Link>
          <Link to={secondaryTo}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
