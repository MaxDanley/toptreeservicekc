import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  return (
    <section className="card">
      <Seo title="Page Not Found | GradeATree.com" description="Page not found." />
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/">Go to GradeATree.com homepage</Link>
    </section>
  )
}
