import { faqs, siteMeta } from '../data/siteData'
import { StructuredData } from './StructuredData'
import { FaCircleQuestion } from 'react-icons/fa6'

export function FaqSection({ title = 'Frequently Asked Questions', items = faqs }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className="card">
      <StructuredData data={schema} />
      <h2>
        <FaCircleQuestion /> {title}
      </h2>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      <div className="hero-cta-row">
        <a href={siteMeta.estimateUrl} target="_blank" rel="noreferrer">
          Request Free Estimate
        </a>
      </div>
    </section>
  )
}
