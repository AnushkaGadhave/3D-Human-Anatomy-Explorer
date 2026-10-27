import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Box, Heart, CheckCircle2, MapPin, Activity, Sparkles } from 'lucide-react'
import { isFavorite, toggleFavorite } from '../utils/favoritesStorage'
import './OrganDetailModal.css'

export default function OrganDetailModal({ organ, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  if (!organ) return null

  const favorited = isFavorite(organ.id)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-organ-title"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header-banner" style={{ backgroundColor: organ.bg }}>
          <div className="modal-image-wrapper">
            <img src={organ.image} alt={organ.name} className="modal-organ-img" />
          </div>
          <div className="modal-header-meta">
            <div className="modal-badges-row">
              <span className="modal-system-badge" style={{ backgroundColor: organ.color, color: '#ffffff' }}>
                {organ.system} System
              </span>
              <span className="modal-category-badge">{organ.category}</span>
            </div>
            <h2 id="modal-organ-title" className="modal-title">{organ.name}</h2>
            <p className="modal-location">
              <MapPin size={14} className="location-icon" />
              <span>{organ.location}</span>
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content">
          <div className="modal-section">
            <h3 className="section-title">
              <Activity size={16} className="section-icon" />
              <span>Primary Function & Overview</span>
            </h3>
            <p className="modal-text">{organ.description}</p>
            <div className="function-box">
              <strong>Core Mechanism:</strong> {organ.primaryFunction}
            </div>
          </div>

          {organ.dimensions && (
            <div className="modal-section">
              <h3 className="section-title">
                <CheckCircle2 size={16} className="section-icon" />
                <span>Dimensions & Physiological Scale</span>
              </h3>
              <p className="modal-text">{organ.dimensions}</p>
            </div>
          )}

          {organ.facts && organ.facts.length > 0 && (
            <div className="modal-section">
              <h3 className="section-title">
                <Sparkles size={16} className="section-icon" />
                <span>Key Medical & Biological Facts</span>
              </h3>
              <ul className="modal-facts-list">
                {organ.facts.map((fact, i) => (
                  <li key={i} className="modal-fact-item">{fact}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer-actions">
          <button
            type="button"
            className={`btn-modal-favorite ${favorited ? 'active' : ''}`}
            onClick={() => toggleFavorite(organ)}
          >
            <Heart size={16} fill={favorited ? '#f43f5e' : 'none'} color={favorited ? '#f43f5e' : '#64748b'} />
            <span>{favorited ? 'Saved to Favorites' : 'Add to Favorites'}</span>
          </button>

          <Link
            to={`/dashboard?organ=${organ.id}`}
            className="btn-modal-3d"
            style={{ backgroundColor: organ.color }}
            onClick={onClose}
          >
            <Box size={16} />
            <span>Inspect in 3D Viewer</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
