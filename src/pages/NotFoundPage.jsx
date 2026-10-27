import { Link } from 'react-router-dom'
import { Compass, Home, Box, ArrowRight } from 'lucide-react'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <div className="not-found-icon-box">
          <Compass size={64} className="not-found-compass" />
        </div>
        <span className="not-found-badge">404 Error</span>
        <h1 className="not-found-title">Anatomical Landmark Not Found</h1>
        <p className="not-found-desc">
          We couldn&rsquo;t locate the anatomical structure or page you are looking for. It might have been moved, renamed, or never existed in human physiology.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="btn-not-found home">
            <Home size={16} />
            <span>Return to Home</span>
          </Link>
          <Link to="/dashboard" className="btn-not-found dashboard">
            <Box size={16} />
            <span>Open 3D Dashboard</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
