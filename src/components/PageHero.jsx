import { FaArrowTrendUp, FaCircleCheck, FaPhoneVolume } from 'react-icons/fa6'
import { siteMeta } from '../data/siteData'

export function PageHero({ eyebrow, title, description, image, primaryLabel = 'Request Free Estimate' }) {
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
          <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            {primaryLabel}
          </a>
          <a href={siteMeta.phoneHref}>
            <FaPhoneVolume /> Call {siteMeta.primaryPhone}
          </a>
        </div>
      </div>
      <div className="hero-media">
        <img src={image} alt="Kansas City tree service comparison visual" loading="lazy" />
      </div>
    </section>
  )
}
