import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CityPage } from './pages/CityPage'
import { ComparisonPage } from './pages/ComparisonPage'
import { GuidePage } from './pages/GuidePage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ServicePage } from './pages/ServicePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services/:serviceSlug" element={<ServicePage />} />
          <Route path="locations/:citySlug" element={<CityPage />} />
          <Route path="compare/:comparisonSlug" element={<ComparisonPage />} />
          <Route path="guides/:guideSlug" element={<GuidePage />} />
          <Route path="kansas-city-tree-services" element={<Navigate to="/locations/kansas-city-mo" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
