import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Search,
  Layers,
  SlidersHorizontal,
  X,
  ArrowRight,
  Sparkles,
  Box
} from 'lucide-react'
import { ANATOMY_REGISTRY, searchAnatomyRegistry } from '../data/anatomyRegistry'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'
import './AnatomyLibraryPage.css'

const SYSTEM_FILTERS = [
  'All',
  'Circulatory',
  'Nervous',
  'Respiratory',
  'Digestive',
  'Urinary',
  'Skeletal',
  'Muscular'
]

const CATEGORY_FILTERS = ['All', 'Organ', 'Bone', 'Muscle', 'Gland']

export default function AnatomyLibraryPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const initialSystem = searchParams.get('system') || 'All'
  const initialCategory = searchParams.get('category') || 'All'

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [activeSystem, setActiveSystem] = useState(initialSystem)
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  // Update URL params
  const updateFilters = (newQuery, newSys, newCat) => {
    const params = {}
    if (newQuery) params.q = newQuery
    if (newSys && newSys !== 'All') params.system = newSys
    if (newCat && newCat !== 'All') params.category = newCat
    setSearchParams(params, { replace: true })
  }

  const handleSearchChange = (val) => {
    setSearchQuery(val)
    updateFilters(val, activeSystem, activeCategory)
  }

  const handleSystemChange = (sys) => {
    setActiveSystem(sys)
    updateFilters(searchQuery, sys, activeCategory)
  }

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    updateFilters(searchQuery, activeSystem, cat)
  }

  const handleClearAll = () => {
    setSearchQuery('')
    setActiveSystem('All')
    setActiveCategory('All')
    setSearchParams({}, { replace: true })
  }

  // Filtered results
  const filteredResults = useMemo(() => {
    return searchAnatomyRegistry(searchQuery, activeSystem, activeCategory)
  }, [searchQuery, activeSystem, activeCategory])

  return (
    <div className="anatomy-library-page">
      <div className="anatomy-library-inner container">
        {/* Page Header */}
        <PageHeader
          badge="Curated Medical Knowledge"
          title="Anatomy Library"
          subtitle="Search and explore human organs, skeletal bones, muscle groups, and physiological systems with verified anatomical data."
          breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Anatomy Library' }]}
        />

        {/* Search & Filter Command Center */}
        <div className="library-search-section">
          {/* Main Search Input */}
          <div className="library-search-bar">
            <Search size={20} className="library-search-icon" />
            <input
              type="text"
              className="library-search-input"
              placeholder="Search a body part, organ, bone, muscle or body system..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                className="btn-clear-search-library"
                onClick={() => handleSearchChange('')}
                title="Clear search"
                aria-label="Clear search query"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Filter Pills: System and Category */}
          <div className="library-filters-container">
            {/* System Filters */}
            <div className="filter-group">
              <span className="filter-label">
                <SlidersHorizontal size={13} />
                <span>Body System:</span>
              </span>
              <div className="filter-pills-row">
                {SYSTEM_FILTERS.map((sys) => {
                  const isActive = activeSystem === sys
                  return (
                    <button
                      key={sys}
                      type="button"
                      className={`library-filter-pill ${isActive ? 'active' : ''}`}
                      onClick={() => handleSystemChange(sys)}
                    >
                      {sys === 'All' ? 'All Systems' : sys}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Category Filters */}
            <div className="filter-group">
              <span className="filter-label">
                <Layers size={13} />
                <span>Type:</span>
              </span>
              <div className="filter-pills-row">
                {CATEGORY_FILTERS.map((cat) => {
                  const isActive = activeCategory === cat
                  return (
                    <button
                      key={cat}
                      type="button"
                      className={`library-filter-pill ${isActive ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(cat)}
                    >
                      {cat === 'All' ? 'All Types' : `${cat}s`}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="library-results-meta">
            <span className="results-count-text">
              Showing <strong>{filteredResults.length}</strong> of {ANATOMY_REGISTRY.length} anatomical structures
            </span>
            {(searchQuery || activeSystem !== 'All' || activeCategory !== 'All') && (
              <button
                type="button"
                className="btn-reset-filters-link"
                onClick={handleClearAll}
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Grid or Empty State */}
        {filteredResults.length > 0 ? (
          <div className="library-cards-grid">
            {filteredResults.map((part) => (
              <div key={part.id} className="library-part-card">
                {/* Card Header */}
                <div className="part-card-header">
                  <div className="part-tags-row">
                    <span
                      className="part-sys-badge"
                      style={{ backgroundColor: part.bg, color: part.color }}
                    >
                      {part.system}
                    </span>
                    <span className="part-type-badge">{part.category}</span>
                  </div>
                </div>

                {/* Thumbnail Frame */}
                <div className="part-thumb-frame" style={{ backgroundColor: part.bg }}>
                  <img src={part.image} alt={part.name} className="part-thumb-img" loading="lazy" />
                </div>

                {/* Card Content */}
                <div className="part-card-body">
                  <h3 className="part-name-title">{part.name}</h3>
                  {part.alternativeNames?.length > 0 && (
                    <span className="part-aliases">
                      {part.alternativeNames.slice(0, 2).join(', ')}
                    </span>
                  )}
                  <p className="part-desc-snippet">{part.description}</p>
                </div>

                {/* Card Actions */}
                <div className="part-card-actions">
                  <Link
                    to={`/anatomy/${part.id}`}
                    className="btn-card-view-details"
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to={`/dashboard?part=${part.id}`}
                    className="btn-card-3d-shortcut"
                    title={`View ${part.name} in 3D viewer`}
                  >
                    <Box size={14} />
                    <span>3D</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No Anatomical Structures Found"
            message={`We couldn't find any body part matching "${searchQuery}". Check your spelling or try clearing filters.`}
            actionLabel="Clear Search & Filters"
            onAction={handleClearAll}
          />
        )}

        {/* Educational Callout Banner */}
        <div className="library-footer-banner">
          <div className="banner-icon-circle">
            <Sparkles size={20} />
          </div>
          <div className="banner-text-block">
            <h4>Connected 3D Anatomical Learning</h4>
            <p>
              Every entry in this library links directly into the interactive 3D anatomy explorer. Click &ldquo;3D&rdquo; on any card to automatically rotate and focus the human body model on that specific organ or bone.
            </p>
          </div>
          <Link to="/dashboard" className="btn-banner-dashboard">
            <Box size={16} />
            <span>Launch 3D Explorer</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
