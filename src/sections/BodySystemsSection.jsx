import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BODY_SYSTEMS } from '../data/anatomyData'
import './BodySystemsSection.css'

export default function BodySystemsSection() {
  const [activeSystem, setActiveSystem] = useState(null)
  const navigate = useNavigate()

  const handleCardClick = (system) => {
    setActiveSystem(activeSystem?.id === system.id ? null : system)
    navigate(`/organs?system=${encodeURIComponent(system.title.replace(' System', ''))}`)
  }

  return (
    <section id="body-systems" className="body-systems-section">
      <div className="container systems-container">
        {/* Left Side: Section Intro */}
        <div className="systems-intro">
          <span className="systems-eyebrow">EXPLORE</span>
          <h2 className="systems-heading">Body Systems</h2>
          <p className="systems-desc">
            Discover how different systems work together to keep you alive and healthy.
          </p>

          <Link to="/organs?tab=systems" className="btn-view-all">
            <span>View All Systems</span>
            <ArrowRight size={16} className="btn-arrow" />
          </Link>
        </div>

        {/* Right Side: 6 Colorful System Cards */}
        <div className="systems-grid">
          {BODY_SYSTEMS.map((system) => (
            <div
              key={system.id}
              className={`system-card ${activeSystem?.id === system.id ? 'active' : ''}`}
              style={{ backgroundColor: system.bgColor }}
              onClick={() => handleCardClick(system)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(system)}
            >
              <div className="system-illustration-wrapper">
                <img
                  src={system.image}
                  alt={system.title}
                  className="system-illustration"
                  loading="lazy"
                />
              </div>

              <h3 className="system-title">{system.title}</h3>

              <div
                className="system-circle-btn"
                style={{ backgroundColor: system.btnColor }}
                aria-label={`Inspect ${system.title}`}
              >
                <ArrowRight size={14} color="#ffffff" strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
