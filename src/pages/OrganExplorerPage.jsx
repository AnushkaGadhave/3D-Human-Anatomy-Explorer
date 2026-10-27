import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Sparkles, Layers, SlidersHorizontal } from 'lucide-react'
import { ORGANS_DATA, ORGAN_SYSTEMS } from '../data/organs'
import PageHeader from '../components/PageHeader'
import SearchBar from '../components/SearchBar'
import OrganCard from '../components/OrganCard'
import OrganDetailModal from '../components/OrganDetailModal'
import EmptyState from '../components/EmptyState'
import './OrganExplorerPage.css'

export default function OrganExplorerPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialSystem = searchParams.get('system') || 'All'

  const [activeSystem, setActiveSystem] = useState(initialSystem)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOrgan, setSelectedOrgan] = useState(null)

  // Sync if URL query param changes
  useEffect(() => {
    const sysParam = searchParams.get('system')
    if (sysParam && ORGAN_SYSTEMS.includes(sysParam)) {
      setActiveSystem(sysParam)
    }
  }, [searchParams])

  const handleSystemFilter = (system) => {
    setActiveSystem(system)
    if (system === 'All') {
      searchParams.delete('system')
    } else {
      searchParams.set('system', system)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const handleResetFilters = () => {
    setActiveSystem('All')
    setSearchQuery('')
    setSearchParams({}, { replace: true })
  }

  // Filter logic
  const filteredOrgans = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return ORGANS_DATA.filter((organ) => {
      const matchesSystem = activeSystem === 'All' || organ.system.toLowerCase() === activeSystem.toLowerCase()
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

  return (
    <div className="organ-explorer-page">
      <div className="organ-explorer-inner container">
        {/* Page Header */}
        <PageHeader
          badge="Interactive Catalog"
          title="Organ Explorer"
          subtitle="Discover, filter, and inspect anatomical organs across all primary physiological systems of the human body."
          breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Organs' }]}
        />

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

        {/* Quick Fact Callout Footer */}
        <div className="explorer-footer-callout">
          <div className="callout-icon-box">
            <Sparkles size={20} />
          </div>
          <div className="callout-text">
            <strong>Interactive 3D Tip:</strong> Click &ldquo;View 3D&rdquo; on any organ card to launch the Anatomy Dashboard viewer with that organ highlighted and contextual medical data displayed.
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
    </div>
  )
}
