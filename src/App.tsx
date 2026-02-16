import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Layout
import Layout from './components/layout/Layout'
import LoadingScreen from './components/ui/LoadingScreen'

// Pages - Lazy loaded for performance
const HomePage = lazy(() => import('./pages/HomePage'))
const DemoPage = lazy(() => import('./pages/DemoPage'))
const InvestorPage = lazy(() => import('./pages/InvestorPage'))
const MinimalPage = lazy(() => import('./pages/MinimalPage'))
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* Main Marketing Site */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        
        {/* Standalone Landing Pages */}
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/investors" element={<InvestorPage />} />
        <Route path="/minimal" element={<MinimalPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
