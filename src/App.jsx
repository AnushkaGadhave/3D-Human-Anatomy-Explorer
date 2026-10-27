import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import AnatomyLibraryPage from './pages/AnatomyLibraryPage'
import AnatomyDetailPage from './pages/AnatomyDetailPage'
import OrganExplorerPage from './pages/OrganExplorerPage'
import BodySystemsPage from './pages/BodySystemsPage'
import LearningHubPage from './pages/LearningHubPage'
import QuizCenterPage from './pages/QuizCenterPage'
import AboutPage from './pages/AboutPage'
import FavoritesPage from './pages/FavoritesPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="landing-page-root">
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/library" element={<AnatomyLibraryPage />} />
            <Route path="/explore-anatomy" element={<AnatomyLibraryPage />} />
            <Route path="/anatomy/:partId" element={<AnatomyDetailPage />} />
            <Route path="/organs" element={<OrganExplorerPage />} />
            <Route path="/systems" element={<BodySystemsPage />} />
            <Route path="/learn" element={<LearningHubPage />} />
            <Route path="/quiz" element={<QuizCenterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
