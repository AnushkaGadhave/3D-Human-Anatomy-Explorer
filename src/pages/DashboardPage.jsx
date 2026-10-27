import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Box,
  Layers,
  Search,
  ArrowRight,
  BookOpen,
  Activity,
  History,
  HelpCircle,
  MapPin,
  CheckCircle2,
  X,
  ExternalLink,
  Compass
} from 'lucide-react'
import AnatomyViewer from '../components/AnatomyViewer'
import {
  ANATOMY_REGISTRY,
  ANATOMY_BY_ID,
  getRelatedAnatomyParts,
  searchAnatomyRegistry
} from '../data/anatomyRegistry'
import './DashboardPage.css'

const FEATURED_IDS = [
  'heart',
  'brain',
  'lungs',
  'liver',
  'stomach',
  'kidneys',
  'femur',
  'patella',
  'biceps-brachii',
  'deltoid',
  'mandible'
]

export default function DashboardPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const organParam = searchParams.get('organ') || searchParams.get('part')
  const layerParam = searchParams.get('layer')

  const [selectedPart, setSelectedPart] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [recentParts, setRecentParts] = useState([])

  // Record into recently explored
  const recordRecent = (part) => {
    if (!part) return
    setRecentParts((prev) => {
      const filtered = prev.filter((item) => item.id !== part.id)
      return [part, ...filtered].slice(0, 5)
    })
  }

  // Handle part selection
  const handleSelectPart = (part) => {
    setSelectedPart(part)
    if (part) {
      recordRecent(part)
      setSearchParams({ part: part.id }, { replace: true })
    } else {
      searchParams.delete('part')
      searchParams.delete('organ')
      setSearchParams(searchParams, { replace: true })
    }
  }

  // On mount or query param change, set target
  useEffect(() => {
    if (organParam) {
      const match =
        ANATOMY_BY_ID[organParam] ||
        ANATOMY_REGISTRY.find(
          (p) =>
            p.id.toLowerCase() === organParam.toLowerCase() ||
            p.name.toLowerCase() === organParam.toLowerCase()
        )
      if (match) {
        setSelectedPart(match)
        recordRecent(match)
      }
    }
  }, [organParam])

  // Filter anatomy by search
  const searchResults = searchQuery.trim()
    ? searchAnatomyRegistry(searchQuery).slice(0, 6)
    : []

  const featuredParts = ANATOMY_REGISTRY.filter((p) => FEATURED_IDS.includes(p.id))
  const relatedParts = selectedPart ? getRelatedAnatomyParts(selectedPart.id) : []

  return (
    <div className="dashboard-page">
      {/* Dashboard Top Header */}
      <section className="dashboard-header-section">
        <div className="container">
          <div className="dashboard-header-flex">
            <div>
              <div className="dashboard-eyebrow">
                <Box size={14} className="eyebrow-icon" />
                <span>INTERACTIVE 3D PLATFORM</span>
              </div>
              <h1 className="dashboard-title">Explore the Human Body in 3D</h1>
              <p className="dashboard-subtitle">
                Rotate, zoom, and click individual anatomical structures in real-time WebGL 3D.
                Inspect organs, skeletal architecture, and muscle layers with instant medical details.
              </p>
            </div>

            {/* Quick Stats Banner */}
            <div className="dashboard-stats-grid">
              <div className="stat-card">
                <span className="stat-value">1,066</span>
                <span className="stat-label">Clickable Meshes</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">7</span>
                <span className="stat-label">Body Systems</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">25+</span>
                <span className="stat-label">Curated Structures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main 3D Canvas Stage & Details Layout */}
      <section className="dashboard-main-section">
        <div className="container">
          <div className="dashboard-grid-layout">
            {/* Left/Central 3D Canvas Viewer Column */}
            <div className="dashboard-viewer-column">
              <AnatomyViewer
                selectedPart={selectedPart}
                onSelectPart={handleSelectPart}
                initialLayerTarget={layerParam}
              />

              {/* Instructions Bar */}
              <div className="viewer-tips-bar">
                <div className="tip-item">
                  <span className="tip-key">Left Drag</span>
                  <span>Rotate (Free 360°)</span>
                </div>
                <div className="tip-item">
                  <span className="tip-key">Scroll / Zoom</span>
                  <span>Zoom In / Out</span>
                </div>
                <div className="tip-item">
                  <span className="tip-key">Right Drag</span>
                  <span>Pan View</span>
                </div>
                <div className="tip-item">
                  <span className="tip-key">Click Part</span>
                  <span>Select & Inspect</span>
                </div>
              </div>
            </div>

            {/* Right Side: Dedicated Anatomy Details & Exploration Panel */}
            <aside className="dashboard-sidebar-column">
              {/* Selected Structure Details Panel */}
              {selectedPart ? (
                <div className="sidebar-card details-panel-card" style={{ borderColor: `${selectedPart.color}40` }}>
                  {/* Panel Header */}
                  <div className="details-panel-header" style={{ backgroundColor: selectedPart.bg }}>
                    <div className="details-header-top">
                      <div className="details-badges">
                        <span className="part-system-badge" style={{ backgroundColor: selectedPart.color }}>
                          {selectedPart.system} System
                        </span>
                        <span className="part-category-badge">{selectedPart.category}</span>
                      </div>
                      <button
                        type="button"
                        className="btn-deselect"
                        onClick={() => handleSelectPart(null)}
                        title="Deselect and return to whole body view"
                        aria-label="Deselect structure"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <h2 className="details-part-title">{selectedPart.name}</h2>
                    {selectedPart.alternativeNames?.length > 0 && (
                      <p className="details-part-aliases">
                        Also known as: {selectedPart.alternativeNames.join(', ')}
                      </p>
                    )}
                  </div>

                  {/* Panel Body */}
                  <div className="details-panel-body">
                    {/* Location */}
                    <div className="details-info-row">
                      <div className="info-icon-wrapper">
                        <MapPin size={15} />
                      </div>
                      <div className="info-text-group">
                        <span className="info-label">Anatomical Location</span>
                        <p className="info-val">{selectedPart.location}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="details-section">
                      <span className="details-sec-heading">Overview</span>
                      <p className="details-desc-text">{selectedPart.description}</p>
                    </div>

                    {/* Functions */}
                    {selectedPart.functions?.length > 0 && (
                      <div className="details-section">
                        <span className="details-sec-heading">Primary Functions</span>
                        <ul className="details-functions-list">
                          {selectedPart.functions.map((fn, idx) => (
                            <li key={idx} className="details-func-item">
                              <CheckCircle2 size={14} className="func-check-icon" />
                              <span>{fn}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Related Structures */}
                    {relatedParts.length > 0 && (
                      <div className="details-section">
                        <span className="details-sec-heading">Related Anatomical Structures</span>
                        <div className="related-structures-chips">
                          {relatedParts.map((rel) => (
                            <button
                              key={rel.id}
                              type="button"
                              className="related-chip-btn"
                              onClick={() => handleSelectPart(rel)}
                              title={`Inspect ${rel.name}`}
                            >
                              <span className="chip-dot" style={{ backgroundColor: rel.color }} />
                              <span>{rel.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Link to Dedicated Detail Page */}
                    <div className="details-action-box">
                      <Link
                        to={`/anatomy/${selectedPart.id}`}
                        className="btn-full-details"
                        style={{ backgroundColor: selectedPart.color }}
                      >
                        <span>Open Comprehensive Reference Page</span>
                        <ExternalLink size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                /* Unselected State: Exploration Guide & Quick Selectors */
                <div className="sidebar-card guide-panel-card">
                  <div className="guide-header">
                    <div className="guide-icon-box">
                      <Compass size={24} />
                    </div>
                    <div>
                      <h3 className="guide-title">Anatomy Details Panel</h3>
                      <p className="guide-sub">Click any 3D body structure to inspect</p>
                    </div>
                  </div>

                  <p className="guide-text">
                    Select any organ, bone, or muscle in the 3D viewer with your mouse or finger.
                    Its physiological mechanisms, anatomical location, and connected structures will appear here in real time.
                  </p>

                  <div className="quick-pick-section">
                    <span className="quick-pick-title">Or pick a structure to focus:</span>
                    <div className="quick-pick-chips">
                      {featuredParts.slice(0, 8).map((part) => (
                        <button
                          key={part.id}
                          type="button"
                          className="quick-pick-chip"
                          onClick={() => handleSelectPart(part)}
                        >
                          <span className="quick-dot" style={{ backgroundColor: part.color }} />
                          <span>{part.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Search Card */}
              <div className="sidebar-card search-card">
                <h3 className="sidebar-title">
                  <Search size={16} />
                  <span>Search Anatomy Structures</span>
                </h3>
                <div className="sidebar-search-field">
                  <Search size={16} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search organs, bones, muscles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="sidebar-search-input"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="btn-clear-search-sidebar"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      &times;
                    </button>
                  )}
                </div>

                {/* Instant Search Results Dropdown */}
                {searchQuery.trim() && (
                  <div className="search-results-tray">
                    {searchResults.length > 0 ? (
                      searchResults.map((part) => (
                        <div
                          key={part.id}
                          className="search-result-item"
                          onClick={() => {
                            handleSelectPart(part)
                            setSearchQuery('')
                          }}
                        >
                          <img src={part.image} alt="" className="search-thumb" />
                          <div className="search-info">
                            <span className="search-name">{part.name}</span>
                            <span className="search-system">{part.system} &bull; {part.category}</span>
                          </div>
                          <ArrowRight size={14} className="search-arrow" />
                        </div>
                      ))
                    ) : (
                      <p className="no-search-results">No anatomy structures found matching "{searchQuery}".</p>
                    )}
                  </div>
                )}
              </div>

              {/* Recently Explored */}
              {recentParts.length > 0 && (
                <div className="sidebar-card">
                  <h3 className="sidebar-title">
                    <History size={16} />
                    <span>Recently Explored</span>
                  </h3>
                  <div className="recent-organs-list">
                    {recentParts.map((part) => (
                      <button
                        key={part.id}
                        type="button"
                        className="recent-organ-pill"
                        onClick={() => handleSelectPart(part)}
                      >
                        <span className="recent-dot" style={{ backgroundColor: part.color }}></span>
                        <span>{part.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Continue Learning Shortcuts */}
              <div className="sidebar-card">
                <h3 className="sidebar-title">
                  <BookOpen size={16} />
                  <span>Anatomy Reference & Tools</span>
                </h3>
                <div className="learning-links-column">
                  <Link to="/library" className="sidebar-link-row">
                    <div className="link-icon-box bg-blue">
                      <Layers size={15} />
                    </div>
                    <div className="link-text-block">
                      <span className="link-title">Anatomy Library</span>
                      <span className="link-sub">Searchable encyclopedia of all parts</span>
                    </div>
                    <ArrowRight size={14} className="link-arrow" />
                  </Link>

                  <Link to="/organs?tab=systems" className="sidebar-link-row">
                    <div className="link-icon-box bg-purple">
                      <Activity size={15} />
                    </div>
                    <div className="link-text-block">
                      <span className="link-title">Body Systems</span>
                      <span className="link-sub">Explore all 7 physiological networks in Organ Explorer</span>
                    </div>
                    <ArrowRight size={14} className="link-arrow" />
                  </Link>

                  <Link to="/quiz" className="sidebar-link-row">
                    <div className="link-icon-box bg-pink">
                      <HelpCircle size={15} />
                    </div>
                    <div className="link-text-block">
                      <span className="link-title">Quiz Center</span>
                      <span className="link-sub">Test knowledge with interactive challenges</span>
                    </div>
                    <ArrowRight size={14} className="link-arrow" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Featured Anatomy Structures Grid */}
      <section className="dashboard-featured-section">
        <div className="container">
          <div className="section-head-flex">
            <div>
              <span className="section-eyebrow">FEATURED STRUCTURES</span>
              <h2 className="section-heading">Explore Key Human Organs & Bones</h2>
            </div>
            <Link to="/library" className="link-view-all">
              <span>View Anatomy Library</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="featured-organs-grid">
            {featuredParts.map((part) => (
              <div
                key={part.id}
                className={`featured-organ-card ${selectedPart?.id === part.id ? 'active' : ''}`}
                onClick={() => handleSelectPart(part)}
              >
                <div className="featured-thumb-frame" style={{ backgroundColor: part.bg }}>
                  <img src={part.image} alt={part.name} className="featured-thumb-img" />
                </div>
                <div className="featured-card-info">
                  <span className="featured-system" style={{ color: part.color }}>
                    {part.system} &bull; {part.category}
                  </span>
                  <h4 className="featured-organ-title">{part.name}</h4>
                  <p className="featured-organ-desc">{part.description}</p>
                </div>
                <div className="featured-card-action">
                  <span className="btn-select-text">Select in 3D</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
