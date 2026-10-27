import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Box, ArrowRight } from 'lucide-react'
import { isFavorite, toggleFavorite } from '../utils/favoritesStorage'
import './OrganCard.css'

export default function OrganCard({ organ, onSelectDetails }) {
  const [favorited, setFavorited] = useState(false)

  useEffect(() => {
    setFavorited(isFavorite(organ.id))
    const handleUpdate = () => setFavorited(isFavorite(organ.id))
    window.addEventListener('favorites-updated', handleUpdate)
    return () => window.removeEventListener('favorites-updated', handleUpdate)
  }, [organ.id])

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    const newState = toggleFavorite(organ)
    setFavorited(newState)
  }

  return (
    <div className="organ-card" style={{ borderColor: `${organ.color}30` }}>
      {/* Top Header with System Pill and Favorite Toggle */}
      <div className="organ-card-header">
        <span
          className="organ-system-badge"
          style={{ backgroundColor: organ.bg, color: organ.color }}
        >
          {organ.system}
        </span>

        <button
          type="button"
          className={`btn-favorite ${favorited ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={favorited ? `Remove ${organ.name} from favorites` : `Save ${organ.name} to favorites`}
        >
          <Heart
            size={18}
            fill={favorited ? '#f43f5e' : 'none'}
            color={favorited ? '#f43f5e' : '#94a3b8'}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Illustration */}
      <div className="organ-card-image-box" style={{ backgroundColor: organ.bg }}>
        <img
          src={organ.image}
          alt={organ.name}
          className="organ-card-img"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="organ-card-body">
        <h3 className="organ-card-title">{organ.name}</h3>
        <p className="organ-card-location">{organ.location}</p>
        <p className="organ-card-desc">{organ.description}</p>
      </div>

      {/* Actions */}
      <div className="organ-card-actions">
        <button
          type="button"
          className="btn-details"
          onClick={() => onSelectDetails(organ)}
        >
          <span>Details</span>
          <ArrowRight size={14} />
        </button>

        <Link
          to={`/dashboard?organ=${organ.id}`}
          className="btn-view-3d"
          style={{ backgroundColor: organ.bg, color: organ.color }}
        >
          <Box size={14} />
          <span>View 3D</span>
        </Link>
      </div>
    </div>
  )
}
