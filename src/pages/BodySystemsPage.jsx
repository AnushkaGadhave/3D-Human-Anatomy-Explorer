import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BODY_SYSTEMS_EXTENDED } from '../data/bodySystems'
import PageHeader from '../components/PageHeader'
import SystemCard from '../components/SystemCard'
import { X, Box, Layers, Sparkles, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'
import './BodySystemsPage.css'

export default function BodySystemsPage() {
  const [selectedSystem, setSelectedSystem] = useState(null)

  return (
    <div className="body-systems-page">
      <div className="body-systems-inner container">
        {/* Page Header */}
        <PageHeader
          badge="Physiological Architecture"
          title="Human Body Systems"
          subtitle="Explore the interconnected biological networks that coordinate organs, circulate nutrients, transmit electrical impulses, and sustain human life."
          breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Body Systems' }]}
        />

        {/* Systems Grid */}
        <div className="systems-grid-container">
          {BODY_SYSTEMS_EXTENDED.map((system) => (
            <SystemCard
              key={system.id}
              system={system}
              onExploreDetails={(sys) => setSelectedSystem(sys)}
            />
          ))}
        </div>

        {/* Systems Interconnection Banner */}
        <div className="systems-banner-card">
          <div className="banner-left">
            <span className="banner-pill">Integrated Physiology</span>
            <h3 className="banner-title">No System Works in Isolation</h3>
            <p className="banner-desc">
              From the circulatory system delivering oxygen from the lungs to muscle fibers, to the nervous system firing rhythmic impulses that drive cardiac contraction, the human body is a masterpiece of synchronized feedback loops.
            </p>
          </div>
          <div className="banner-right">
            <Link to="/dashboard" className="banner-cta-btn">
              <Box size={18} />
              <span>Launch 3D Explorer</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* System Detail Modal */}
      {selectedSystem && (
        <div className="modal-overlay" onClick={() => setSelectedSystem(null)}>
          <div
            className="system-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedSystem(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="system-modal-header" style={{ backgroundColor: selectedSystem.bg }}>
              <div className="system-modal-avatar">
                <img src={selectedSystem.image} alt={selectedSystem.name} />
              </div>
              <div className="system-modal-meta">
                <span className="modal-tagline" style={{ color: selectedSystem.color }}>
                  {selectedSystem.tagline}
                </span>
                <h2 className="modal-sys-title">{selectedSystem.name}</h2>
                <span className="modal-layer-pill">3D Layer: {selectedSystem.meshLayer}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="system-modal-body">
              {/* Overview */}
              <div className="modal-sys-section">
                <h3 className="sys-sec-title">System Overview</h3>
                <p className="sys-sec-text">{selectedSystem.overview}</p>
              </div>

              {/* Major Organs */}
              <div className="modal-sys-section">
                <h3 className="sys-sec-title">
                  <Layers size={16} />
                  <span>Major Organs & Anatomical Structures</span>
                </h3>
                <div className="sys-organs-pills">
                  {selectedSystem.majorOrgans.map((organ, idx) => (
                    <span key={idx} className="sys-organ-pill" style={{ borderColor: `${selectedSystem.color}40` }}>
                      {organ}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Functions */}
              <div className="modal-sys-section">
                <h3 className="sys-sec-title">
                  <CheckCircle2 size={16} />
                  <span>Key Physiological Functions</span>
                </h3>
                <ul className="sys-functions-list">
                  {selectedSystem.functions.map((fn, idx) => (
                    <li key={idx} className="sys-function-item">
                      <span className="bullet-point" style={{ backgroundColor: selectedSystem.color }} />
                      <span>{fn}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Relevance */}
              {selectedSystem.clinicalRelevance && (
                <div className="modal-sys-section clinical-section">
                  <h3 className="sys-sec-title">
                    <AlertCircle size={16} />
                    <span>Clinical Relevance & Pathologies</span>
                  </h3>
                  <p className="sys-sec-text">{selectedSystem.clinicalRelevance}</p>
                </div>
              )}

              {/* Fun Fact */}
              {selectedSystem.funFact && (
                <div className="modal-funfact-box" style={{ borderLeftColor: selectedSystem.color }}>
                  <Sparkles size={16} style={{ color: selectedSystem.color }} />
                  <p>{selectedSystem.funFact}</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="system-modal-footer">
              <Link
                to={`/organs?system=${selectedSystem.name.replace(' System', '')}`}
                className="btn-modal-organs"
                onClick={() => setSelectedSystem(null)}
              >
                <Layers size={16} />
                <span>Browse {selectedSystem.name.replace(' System', '')} Organs</span>
              </Link>

              <Link
                to={`/dashboard?layer=${selectedSystem.meshLayer}`}
                className="btn-modal-3d-view"
                style={{ backgroundColor: selectedSystem.color }}
                onClick={() => setSelectedSystem(null)}
              >
                <Box size={16} />
                <span>Explore in 3D Viewer</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
