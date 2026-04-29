import { Seo } from '../components/Seo'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'

export function FaqPage() {
  return (
    <>
      <Seo
        title="Tree Service FAQ | GradeATree.com"
        description="Frequently asked questions about tree removal, trimming, stump grinding, and emergency service in the Kansas City metro."
        pathname="/faqs"
        image="/images/hero-city.svg"
        keywords="kansas city tree service faq, tree removal faq, stump grinding faq, grade a tree"
      />
      <PageHero
        eyebrow="Knowledge Center"
        title="Kansas City Tree Service FAQ"
        description="Quick, practical answers for homeowners comparing tree service options in Kansas City and surrounding cities. For project-specific pricing, request a direct quote from Grade A Tree."
        image="/images/hero-city.svg"
        primaryLabel="Get a Free Quote"
      />
      <FaqSection title="Most Asked Questions" />
    </>
  )
}
