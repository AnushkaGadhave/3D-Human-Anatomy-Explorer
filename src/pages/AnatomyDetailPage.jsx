import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Box,
  MapPin,
  Activity,
  Layers,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react'
import {
  ANATOMY_BY_ID,
  ANATOMY_REGISTRY,
  getRelatedAnatomyParts
} from '../data/anatomyRegistry'
import AnatomyViewer from '../components/AnatomyViewer'
import './AnatomyDetailPage.css'

export default function AnatomyDetailPage() {
  const { partId } = useParams()

  const part = useMemo(() => {
    if (!partId) return null
    return (
      ANATOMY_BY_ID[partId] ||
      ANATOMY_REGISTRY.find((p) => p.id.toLowerCase() === partId.toLowerCase())
    )
  }, [partId])

  const relatedParts = useMemo(() => {
    return part ? getRelatedAnatomyParts(part.id) : []
  }, [part])

  if (!part) {
    return (
      <div className="anatomy-detail-page">
        <div className="container not-found-detail-container">
          <div className="not-found-detail-box">
            <AlertCircle size={48} className="not-found-icon" />
            <h2>Anatomical Record Not Found</h2>
            <p>
              We couldn&rsquo;t find an anatomical record matching &ldquo;{partId}&rdquo;. It may have been renamed or does not exist in our library.
            </p>
            <div className="detail-error-actions">
              <Link to="/library" className="btn-return-library">
                <ArrowLeft size={16} />
                <span>Return to Anatomy Library</span>
              </Link>
              <Link to="/dashboard" className="btn-return-dashboard">
                <Box size={16} />
                <span>Open 3D Explorer</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="anatomy-detail-page">
      <div className="container anatomy-detail-inner">
        {/* Navigation Breadcrumb Bar */}
        <div className="detail-breadcrumb-bar">
          <Link to="/library" className="breadcrumb-back-btn">
            <ArrowLeft size={15} />
            <span>Back to Anatomy Library</span>
          </Link>
          <div className="breadcrumb-trail">
            <Link to="/" className="trail-item">Home</Link>
            <ChevronRight size={13} className="trail-sep" />
            <Link to="/library" className="trail-item">Library</Link>
            <ChevronRight size={13} className="trail-sep" />
            <span className="trail-item current">{part.name}</span>
          </div>
        </div>

        {/* Hero Banner for Part */}
        <div className="part-hero-card" style={{ borderColor: `${part.color}30` }}>
          <div className="part-hero-main">
            <div className="part-badges-row">
              <span className="hero-system-pill" style={{ backgroundColor: part.color }}>
                {part.system} System
              </span>
              <span className="hero-type-pill">{part.category}</span>
            </div>

            <h1 className="part-hero-title">{part.name}</h1>

            {part.alternativeNames?.length > 0 && (
              <p className="part-hero-aliases">
                <strong>Alternative & Latin Names:</strong> {part.alternativeNames.join(' &bull; ')}
              </p>
            )}

            <p className="part-hero-snippet">{part.description}</p>
          </div>

          <div className="part-hero-actions">
            <Link
              to={`/dashboard?part=${part.id}`}
              className="btn-hero-launch-3d"
              style={{ backgroundColor: part.color }}
            >
              <Box size={18} />
              <span>Launch in 3D Explorer</span>
            </Link>

            <Link to={`/organs?system=${encodeURIComponent(part.system)}`} className="btn-hero-system-link">
              <Activity size={16} />
              <span>Explore {part.system} System</span>
            </Link>
          </div>
        </div>

        {/* Two-Column Grid: Detailed Documentation + Interactive 3D Stage */}
        <div className="detail-content-grid">
          {/* Left Column: Comprehensive Medical Documentation */}
          <div className="detail-docs-column">
            {/* 1. Anatomical Location */}
            <div className="doc-section-card">
              <div className="doc-section-header">
                <div className="doc-icon-frame" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>
                  <MapPin size={18} />
                </div>
                <h3>1. Anatomical Location & Cavity</h3>
              </div>
              <p className="doc-text">{part.location}</p>
            </div>

            {/* 2. Structure & Morphology */}
            <div className="doc-section-card">
              <div className="doc-section-header">
                <div className="doc-icon-frame" style={{ backgroundColor: '#f3e8ff', color: '#9333ea' }}>
                  <Layers size={18} />
                </div>
                <h3>2. Structure, Shape & Composition</h3>
              </div>
              <p className="doc-text">{part.structureDetails}</p>
            </div>

            {/* 3. Physiological Functions */}
            <div className="doc-section-card">
              <div className="doc-section-header">
                <div className="doc-icon-frame" style={{ backgroundColor: '#ecfdf5', color: '#10b981' }}>
                  <CheckCircle2 size={18} />
                </div>
                <h3>3. Primary Physiological Functions</h3>
              </div>
              <ul className="doc-functions-list">
                {part.functions.map((fn, idx) => (
                  <li key={idx} className="doc-func-item">
                    <span className="doc-func-dot" style={{ backgroundColor: part.color }} />
                    <span>{fn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Clinical Relevance */}
            {part.clinicalRelevance && (
              <div className="doc-section-card clinical-card">
                <div className="doc-section-header">
                  <div className="doc-icon-frame" style={{ backgroundColor: '#fef3c7', color: '#d97706' }}>
                    <AlertCircle size={18} />
                  </div>
                  <h3>4. Clinical Relevance & Medical Insights</h3>
                </div>
                <p className="doc-text">{part.clinicalRelevance}</p>
              </div>
            )}

            {/* 5. Related Anatomical Structures */}
            {relatedParts.length > 0 && (
              <div className="doc-section-card">
                <div className="doc-section-header">
                  <div className="doc-icon-frame" style={{ backgroundColor: '#ffe4e6', color: '#f43f5e' }}>
                    <Sparkles size={18} />
                  </div>
                  <h3>5. Connected & Related Anatomical Structures</h3>
                </div>
                <div className="related-parts-grid">
                  {relatedParts.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/anatomy/${rel.id}`}
                      className="related-part-card"
                    >
                      <div className="rel-card-thumb" style={{ backgroundColor: rel.bg }}>
                        <img src={rel.image} alt={rel.name} />
                      </div>
                      <div className="rel-card-info">
                        <span className="rel-sys-tag" style={{ color: rel.color }}>
                          {rel.system} &bull; {rel.category}
                        </span>
                        <h4 className="rel-name">{rel.name}</h4>
                        <p className="rel-desc">{rel.description}</p>
                      </div>
                      <ChevronRight size={16} className="rel-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Dedicated Interactive 3D Anatomy Visualization */}
          <div className="detail-viewer-column">
            <div className="viewer-sticky-card">
              <div className="viewer-card-top">
                <div className="viewer-top-title">
                  <Box size={16} className="viewer-box-icon" />
                  <h4>Interactive 3D Visualization: {part.name}</h4>
                </div>
                <span className="viewer-hint">Drag to rotate &bull; Scroll to zoom</span>
              </div>

              {/* Embedded 3D Viewer highlighted on this part */}
              <div className="detail-viewer-wrapper">
                <AnatomyViewer selectedPart={part} />
              </div>

              {/* Viewer Footer Bar */}
              <div className="viewer-card-bottom">
                <div className="viewer-meta-note">
                  <strong>3D Mesh Target:</strong>{' '}
                  <span>
                    {part.meshPatterns ? part.meshPatterns.slice(0, 3).join(', ') : part.name}
                  </span>
                </div>
                <Link
                  to={`/dashboard?part=${part.id}`}
                  className="btn-expand-dashboard"
                >
                  <span>Open Full Dashboard</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
