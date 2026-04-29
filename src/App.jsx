import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { CityPage } from './pages/CityPage'
import { CityServicePage } from './pages/CityServicePage'
import { CompareIndexPage } from './pages/CompareIndexPage'
import { ComparisonPage } from './pages/ComparisonPage'
import { FaqPage } from './pages/FaqPage'
import { GuidePage } from './pages/GuidePage'
import { GuidesIndexPage } from './pages/GuidesIndexPage'
import { HomePage } from './pages/HomePage'
import { NeighborhoodPage } from './pages/NeighborhoodPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ServicePage } from './pages/ServicePage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services/:serviceSlug" element={<ServicePage />} />
          <Route path="locations/:citySlug" element={<CityPage />} />
          <Route path="locations/:citySlug/:serviceSlug" element={<CityServicePage />} />
          <Route path="neighborhoods/:neighborhoodSlug" element={<NeighborhoodPage />} />
          <Route path="compare" element={<CompareIndexPage />} />
          <Route path="compare/:comparisonSlug" element={<ComparisonPage />} />
          <Route path="guides" element={<GuidesIndexPage />} />
          <Route path="guides/:guideSlug" element={<GuidePage />} />
          <Route path="faqs" element={<FaqPage />} />
          <Route path="kansas-city-tree-services" element={<Navigate to="/locations/kansas-city-mo" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
