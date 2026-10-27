import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Trash2,
  Box,
  BookOpen,
  ArrowRight
} from 'lucide-react'
import { getFavorites, removeFavorite } from '../utils/favoritesStorage'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'
import OrganDetailModal from '../components/OrganDetailModal'
import { ORGANS_DATA } from '../data/organs'
import './FavoritesPage.css'

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedOrganForModal, setSelectedOrganForModal] = useState(null)

  const loadFavorites = () => {
    setFavorites(getFavorites())
  }

  useEffect(() => {
    loadFavorites()
    window.addEventListener('favorites-updated', loadFavorites)
    return () => window.removeEventListener('favorites-updated', loadFavorites)
  }, [])

  const handleRemove = (id) => {
    removeFavorite(id)
  }

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to remove all saved items from your browser storage?')) {
      localStorage.removeItem('anatomy_explorer_favorites')
      window.dispatchEvent(new Event('favorites-updated'))
    }
  }

  const filteredItems = useMemo(() => {
    if (activeFilter === 'Organs') {
      return favorites.filter((item) => item.type !== 'topic')
    }
    if (activeFilter === 'Topics') {
      return favorites.filter((item) => item.type === 'topic')
    }
    return favorites
  }, [favorites, activeFilter])

  const handleOpenDetails = (item) => {
    if (item.type !== 'topic') {
      // Find full organ object from ORGANS_DATA
      const fullOrgan = ORGANS_DATA.find((o) => o.id === item.id) || item
      setSelectedOrganForModal(fullOrgan)
    }
  }

  return (
    <div className="favorites-page">
      <div className="favorites-page-inner container">
        {/* Page Header */}
        <PageHeader
          badge="Local Browser Storage"
          title="Saved Anatomical Favorites"
          subtitle="Your personalized collection of bookmarked organs, physiological systems, and learning topics stored locally in your browser."
          breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Favorites' }]}
        />

        {favorites.length > 0 ? (
          <>
            {/* Filter and Clear Row */}
            <div className="favorites-control-bar">
              <div className="favorites-tabs">
                <button
                  type="button"
                  className={`fav-tab ${activeFilter === 'All' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('All')}
                >
                  All Saved ({favorites.length})
                </button>
                <button
                  type="button"
                  className={`fav-tab ${activeFilter === 'Organs' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('Organs')}
                >
                  Organs ({favorites.filter((f) => f.type !== 'topic').length})
                </button>
                <button
                  type="button"
                  className={`fav-tab ${activeFilter === 'Topics' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('Topics')}
                >
                  Learning Topics ({favorites.filter((f) => f.type === 'topic').length})
                </button>
              </div>

              <button
                type="button"
                className="btn-clear-all"
                onClick={handleClearAll}
              >
                <Trash2 size={15} />
                <span>Clear All Favorites</span>
              </button>
            </div>

            {/* Favorites Grid */}
            <div className="favorites-grid">
              {filteredItems.map((item) => {
                const isTopic = item.type === 'topic'

                return (
                  <div key={item.id} className="favorite-card">
                    <div className="favorite-card-header">
                      <span
                        className="fav-type-badge"
                        style={{
                          backgroundColor: item.bg || '#f1f5f9',
                          color: item.color || '#0284c7'
                        }}
                      >
                        {isTopic ? 'Learning Topic' : `${item.system || 'Organ'} System`}
                      </span>

                      <button
                        type="button"
                        className="btn-remove-fav"
                        onClick={() => handleRemove(item.id)}
                        aria-label={`Remove ${item.name} from favorites`}
                        title="Remove from saved"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Image / Thumbnail if Organ */}
                    {!isTopic && item.image && (
                      <div
                        className="fav-img-wrapper"
                        style={{ backgroundColor: item.bg || '#f8fafc' }}
                      >
                        <img src={item.image} alt={item.name} />
                      </div>
                    )}

                    <div className="favorite-card-body">
                      <h3 className="fav-item-title">{item.name}</h3>
                      {item.location && <span className="fav-location">{item.location}</span>}
                      <p className="fav-desc">{item.description}</p>
                    </div>

                    <div className="favorite-card-footer">
                      {!isTopic ? (
                        <>
                          <button
                            type="button"
                            className="btn-fav-details"
                            onClick={() => handleOpenDetails(item)}
                          >
                            <span>Details</span>
                            <ArrowRight size={13} />
                          </button>

                          <Link
                            to={`/dashboard?organ=${item.id}`}
                            className="btn-fav-3d"
                          >
                            <Box size={14} />
                            <span>View in 3D</span>
                          </Link>
                        </>
                      ) : (
                        <Link to="/learn" className="btn-fav-3d full-width">
                          <BookOpen size={14} />
                          <span>View in Learning Hub</span>
                        </Link>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <EmptyState
            title="No Saved Favorites Yet"
            message="You haven't bookmarked any organs or learning topics yet. Click the heart icon on any organ card or learning module to save them here."
            actionLabel="Explore Organs"
            onAction={() => {
              window.location.href = '/organs'
            }}
          />
        )}
      </div>

      {/* Organ Detail Modal if selected */}
      {selectedOrganForModal && (
        <OrganDetailModal
          organ={selectedOrganForModal}
          onClose={() => setSelectedOrganForModal(null)}
        />
      )}
    </div>
  )
}
