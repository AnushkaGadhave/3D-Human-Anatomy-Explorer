import { Link } from 'react-router-dom'
import { ArrowRight, Box, Layers, Sparkles } from 'lucide-react'
import './SystemCard.css'

export default function SystemCard({ system, onExploreDetails, onBrowseOrgans }) {
  return (
    <div className="system-card-expanded" style={{ borderColor: system.borderColor }}>
      {/* Top Banner */}
      <div className="system-card-banner" style={{ backgroundColor: system.bg }}>
        <div className="system-card-icon-frame">
          <img src={system.image} alt={system.name} className="system-banner-img" />
        </div>
        <div className="system-banner-info">
          <span className="system-tagline" style={{ color: system.color }}>
            {system.tagline}
          </span>
          <h3 className="system-card-name">{system.name}</h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="system-card-content">
        <p className="system-overview-text">{system.overview}</p>

        {/* Major Organs Chips */}
        <div className="system-organs-block">
          <span className="system-organs-label">Major Organs & Structures:</span>
          <div className="system-organs-chips">
            {system.majorOrgans.slice(0, 4).map((organName, idx) => (
              <span key={idx} className="organ-chip">
                {organName}
              </span>
            ))}
            {system.majorOrgans.length > 4 && (
              <span className="organ-chip-more">
                +{system.majorOrgans.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Fun Fact Callout */}
        {system.funFact && (
          <div className="system-funfact-box" style={{ borderLeftColor: system.color }}>
            <Sparkles size={14} style={{ color: system.color }} className="funfact-icon" />
            <p className="funfact-text">{system.funFact}</p>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="system-card-footer">
        <button
          type="button"
          className="btn-system-explore"
          style={{ backgroundColor: system.color }}
          onClick={() => onExploreDetails(system)}
        >
          <span>Explore Details</span>
          <ArrowRight size={14} />
        </button>

        <div className="system-secondary-links">
          <Link
            to={`/organs?system=${encodeURIComponent(system.name.replace(' System', ''))}`}
            className="system-sub-link"
            title="Browse all organs in this system"
            onClick={(e) => {
              if (onBrowseOrgans) {
                e.preventDefault()
                onBrowseOrgans(system.name.replace(' System', ''))
              }
            }}
          >
            <Layers size={13} />
            <span>Organs</span>
          </Link>

          <Link
            to={`/dashboard?layer=${system.meshLayer}`}
            className="system-sub-link"
            title="View this system in 3D"
          >
            <Box size={13} />
            <span>3D View</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
