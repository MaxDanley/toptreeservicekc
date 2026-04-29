import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { siteMeta } from '../data/siteData'

export function FaqPage() {
  return (
    <>
      <Seo
        title="Tree Service FAQ | GradeATree.com"
        description="Frequently asked questions about tree removal, trimming, stump grinding, and emergency service in the Kansas City metro."
      />
      <section className="hero compact">
        <p className="eyebrow">Knowledge Center</p>
        <h1>Kansas City Tree Service FAQ</h1>
        <p>
          Quick, practical answers for homeowners comparing tree service options in Kansas City and surrounding cities.
          For project-specific pricing, request a direct quote from Grade A Tree.
        </p>
        <div className="hero-cta-row">
          <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
            Get a Free Quote
          </a>
          <a href={siteMeta.phoneHref}>Call {siteMeta.primaryPhone}</a>
        </div>
      </section>
      <FaqSection title="Most Asked Questions" />
    </>
  )
}
