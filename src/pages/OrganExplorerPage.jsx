import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Sparkles,
  Layers,
  SlidersHorizontal,
  Activity,
  Box,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  X
} from 'lucide-react'
import { ORGANS_DATA, ORGAN_SYSTEMS } from '../data/organs'
import { BODY_SYSTEMS_EXTENDED } from '../data/bodySystems'
import PageHeader from '../components/PageHeader'
import SearchBar from '../components/SearchBar'
import OrganCard from '../components/OrganCard'
import SystemCard from '../components/SystemCard'
import OrganDetailModal from '../components/OrganDetailModal'
import EmptyState from '../components/EmptyState'
import './OrganExplorerPage.css'

export default function OrganExplorerPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const initialTab = searchParams.get('tab') === 'systems' ? 'systems' : 'organs'
  const initialSystem = searchParams.get('system') || 'All'

  const [activeTab, setActiveTab] = useState(initialTab)
  const [activeSystem, setActiveSystem] = useState(initialSystem)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOrgan, setSelectedOrgan] = useState(null)
  const [selectedSystem, setSelectedSystem] = useState(null)

  // Sync state if URL query params change
  useEffect(() => {
    const tabParam = searchParams.get('tab')
    if (tabParam === 'systems') {
      setActiveTab('systems')
    } else if (tabParam === 'organs' || (!tabParam && !searchParams.get('system'))) {
      if (!searchParams.get('tab')) {
        // Default to organs if not specified
        setActiveTab('organs')
      }
    }

    const sysParam = searchParams.get('system')
    if (sysParam) {
      const match = ORGAN_SYSTEMS.find(
        (s) => s.toLowerCase() === sysParam.toLowerCase()
      )
      if (match) {
        setActiveSystem(match)
        setActiveTab('organs')
      }
    }
  }, [searchParams])

  // Tab switcher handler
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (tab === 'systems') {
      searchParams.set('tab', 'systems')
      searchParams.delete('system')
    } else {
      searchParams.delete('tab')
      if (activeSystem !== 'All') {
        searchParams.set('system', activeSystem)
      }
    }
    setSearchParams(searchParams, { replace: true })
  }

  // System filter button handler
  const handleSystemFilter = (system) => {
    setActiveSystem(system)
    setActiveTab('organs')
    if (system === 'All') {
      searchParams.delete('system')
      searchParams.delete('tab')
    } else {
      searchParams.set('system', system)
      searchParams.delete('tab')
    }
    setSearchParams(searchParams, { replace: true })
  }

  // Reset all filters
  const handleResetFilters = () => {
    setActiveSystem('All')
    setSearchQuery('')
    searchParams.delete('system')
    searchParams.delete('tab')
    setSearchParams(searchParams, { replace: true })
  }

  // Browse organs for a specific system (from SystemCard or SystemModal)
  const handleBrowseSystemOrgans = (systemName) => {
    const cleanName = systemName.replace(' System', '').trim()
    const match = ORGAN_SYSTEMS.find(
      (s) => s.toLowerCase() === cleanName.toLowerCase()
    ) || cleanName

    setActiveSystem(match)
    setActiveTab('organs')
    setSelectedSystem(null)

    searchParams.set('system', match)
    searchParams.delete('tab')
    setSearchParams(searchParams, { replace: true })

    // Smooth scroll down to the organs grid
    window.scrollTo({ top: 320, behavior: 'smooth' })
  }

  // Filtered organs calculation
  const filteredOrgans = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return ORGANS_DATA.filter((organ) => {
      const matchesSystem =
        activeSystem === 'All' ||
        organ.system.toLowerCase() === activeSystem.toLowerCase()
      const matchesSearch =
        !q ||
        organ.name.toLowerCase().includes(q) ||
        organ.system.toLowerCase().includes(q) ||
        organ.location.toLowerCase().includes(q) ||
        organ.description.toLowerCase().includes(q) ||
        (organ.primaryFunction && organ.primaryFunction.toLowerCase().includes(q))
      return matchesSystem && matchesSearch
    })
  }, [activeSystem, searchQuery])

  // Contextual system information for activeSystem when not 'All'
  const activeSystemDetails = useMemo(() => {
    if (activeSystem === 'All') return null
    return (
      BODY_SYSTEMS_EXTENDED.find((sys) =>
        sys.name.toLowerCase().includes(activeSystem.toLowerCase()) ||
        activeSystem.toLowerCase().includes(sys.id)
      ) || null
    )
  }, [activeSystem])

  return (
    <div className="organ-explorer-page">
      <div className="organ-explorer-inner container">
        {/* Page Header */}
        <PageHeader
          badge="Interactive Anatomy & Systems"
          title="Organ Explorer"
          subtitle="Discover, filter, and inspect anatomical organs across all primary physiological systems of the human body."
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'Organ Explorer' }
          ]}
        />

        {/* View Mode Switcher: Organs Catalog vs Body Systems */}
        <div className="explorer-view-selector" role="tablist" aria-label="Explorer View Mode">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'organs'}
            className={`view-switch-btn ${activeTab === 'organs' ? 'active' : ''}`}
            onClick={() => handleTabChange('organs')}
          >
            <Layers size={16} />
            <span>Organs Catalog</span>
            <span className="view-switch-badge">{ORGANS_DATA.length}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'systems'}
            className={`view-switch-btn ${activeTab === 'systems' ? 'active' : ''}`}
            onClick={() => handleTabChange('systems')}
          >
            <Activity size={16} />
            <span>Body Systems</span>
            <span className="view-switch-badge">{BODY_SYSTEMS_EXTENDED.length}</span>
          </button>
        </div>

        {/* ===================== ORGANS CATALOG VIEW ===================== */}
        {activeTab === 'organs' && (
          <div className="explorer-tab-content">
            {/* Filter and Search Bar Section */}
            <div className="explorer-control-bar">
              <div className="search-wrapper">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search organs by name, system, function or location..."
                />
              </div>

              <div className="explorer-count-badge">
                <Layers size={15} />
                <span>
                  Showing <strong>{filteredOrgans.length}</strong> of {ORGANS_DATA.length} Organs
                </span>
              </div>
            </div>

            {/* Body Systems Pill Filter */}
            <div className="system-pills-row" role="tablist" aria-label="Body System Filters">
              <div className="filter-pill-label">
                <SlidersHorizontal size={14} />
                <span>Systems:</span>
              </div>
              {ORGAN_SYSTEMS.map((system) => {
                const isActive = activeSystem === system
                return (
                  <button
                    key={system}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`system-filter-pill ${isActive ? 'active' : ''}`}
                    onClick={() => handleSystemFilter(system)}
                  >
                    {system === 'All' ? 'All Systems' : system}
                  </button>
                )
              })}
            </div>

            {/* Contextual System Spotlight Banner when a specific system is filtered */}
            {activeSystemDetails && (
              <div
                className="system-spotlight-banner"
                style={{
                  backgroundColor: activeSystemDetails.bg,
                  borderColor: activeSystemDetails.borderColor
                }}
              >
                <div className="spotlight-left">
                  <div className="spotlight-avatar">
                    <img
                      src={activeSystemDetails.image}
                      alt={activeSystemDetails.name}
                      className="spotlight-img"
                    />
                  </div>
                  <div className="spotlight-meta">
                    <span className="spotlight-tagline" style={{ color: activeSystemDetails.color }}>
                      {activeSystemDetails.tagline}
                    </span>
                    <h3 className="spotlight-title">{activeSystemDetails.name}</h3>
                    <p className="spotlight-overview">{activeSystemDetails.overview}</p>
                  </div>
                </div>

                <div className="spotlight-actions">
                  <button
                    type="button"
                    className="btn-spotlight-details"
                    style={{ backgroundColor: activeSystemDetails.color }}
                    onClick={() => setSelectedSystem(activeSystemDetails)}
                  >
                    <span>System Details</span>
                    <ArrowRight size={14} />
                  </button>

                  <Link
                    to={`/dashboard?layer=${activeSystemDetails.meshLayer}`}
                    className="btn-spotlight-3d"
                  >
                    <Box size={15} />
                    <span>View 3D Layer</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Organ Grid or Empty State */}
            {filteredOrgans.length > 0 ? (
              <div className="organs-grid">
                {filteredOrgans.map((organ) => (
                  <OrganCard
                    key={organ.id}
                    organ={organ}
                    onSelectDetails={setSelectedOrgan}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No Matching Organs Found"
                message={`We couldn't find any organs matching "${searchQuery || activeSystem}". Try clearing your filters or search query.`}
                actionLabel="Reset All Filters"
                onAction={handleResetFilters}
              />
            )}
          </div>
        )}

        {/* ===================== BODY SYSTEMS VIEW ===================== */}
        {activeTab === 'systems' && (
          <div className="explorer-tab-content">
            {/* Systems Grid */}
            <div className="systems-grid-container">
              {BODY_SYSTEMS_EXTENDED.map((system) => (
                <SystemCard
                  key={system.id}
                  system={system}
                  onExploreDetails={(sys) => setSelectedSystem(sys)}
                  onBrowseOrgans={handleBrowseSystemOrgans}
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
        )}

        {/* Quick Fact Callout Footer */}
        <div className="explorer-footer-callout">
          <div className="callout-icon-box">
            <Sparkles size={20} />
          </div>
          <div className="callout-text">
            <strong>Interactive 3D Tip:</strong> Click &ldquo;View 3D&rdquo; on any organ or system card to launch the Anatomy Dashboard viewer with that anatomical layer highlighted and contextual medical data displayed.
          </div>
        </div>
      </div>

      {/* Organ Detail Modal */}
      {selectedOrgan && (
        <OrganDetailModal
          organ={selectedOrgan}
          onClose={() => setSelectedOrgan(null)}
        />
      )}

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
                    <span
                      key={idx}
                      className="sys-organ-pill"
                      style={{ borderColor: `${selectedSystem.color}40` }}
                    >
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
              <button
                type="button"
                className="btn-modal-organs"
                onClick={() => handleBrowseSystemOrgans(selectedSystem.name.replace(' System', ''))}
              >
                <Layers size={16} />
                <span>Browse {selectedSystem.name.replace(' System', '')} Organs</span>
              </button>

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
