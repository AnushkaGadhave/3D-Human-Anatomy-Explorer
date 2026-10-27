import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  Sparkles,
  Clock,
  Heart,
  Box,
  CheckCircle2,
  Lightbulb,
  Zap,
  Activity,
  Wind,
  Shield,
  Layers,
  ArrowRight
} from 'lucide-react'
import { LEARNING_CATEGORIES, LEARNING_TOPICS, DID_YOU_KNOW_FACTS } from '../data/learningTopics'
import { isFavorite, toggleFavorite } from '../utils/favoritesStorage'
import PageHeader from '../components/PageHeader'
import SearchBar from '../components/SearchBar'
import EmptyState from '../components/EmptyState'
import './LearningHubPage.css'

export default function LearningHubPage() {
  const [activeCategory, setActiveCategory] = useState('All Topics')
  const [searchQuery, setSearchQuery] = useState('')
  const [favoriteIds, setFavoriteIds] = useState(new Set())
  const [activeFactIndex, setActiveFactIndex] = useState(0)

  // Sync favorites
  useEffect(() => {
    const updateFavs = () => {
      const favs = new Set(
        LEARNING_TOPICS.filter((t) => isFavorite(t.id)).map((t) => t.id)
      )
      setFavoriteIds(favs)
    }
    updateFavs()
    window.addEventListener('favorites-updated', updateFavs)
    return () => window.removeEventListener('favorites-updated', updateFavs)
  }, [])

  // Auto-rotate Did You Know facts every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFactIndex((prev) => (prev + 1) % DID_YOU_KNOW_FACTS.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const handleToggleFavorite = (topic) => {
    toggleFavorite({
      id: topic.id,
      name: topic.title,
      type: 'topic',
      category: topic.category,
      color: topic.color,
      bg: topic.bg,
      description: topic.summary
    })
  }

  // Filter topics
  const filteredTopics = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return LEARNING_TOPICS.filter((topic) => {
      const matchesCategory =
        activeCategory === 'All Topics' || topic.category === activeCategory
      const matchesSearch =
        !q ||
        topic.title.toLowerCase().includes(q) ||
        topic.summary.toLowerCase().includes(q) ||
        topic.category.toLowerCase().includes(q) ||
        topic.keyPoints.some((p) => p.toLowerCase().includes(q))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const renderIcon = (iconName, color) => {
    switch (iconName) {
      case 'zap':
        return <Zap size={18} style={{ color }} />
      case 'heart':
        return <Heart size={18} style={{ color }} />
      case 'shield':
        return <Shield size={18} style={{ color }} />
      case 'activity':
        return <Activity size={18} style={{ color }} />
      case 'wind':
        return <Wind size={18} style={{ color }} />
      default:
        return <Layers size={18} style={{ color }} />
    }
  }

  const activeFact = DID_YOU_KNOW_FACTS[activeFactIndex]

  return (
    <div className="learning-hub-page">
      <div className="learning-hub-inner container">
        {/* Header */}
        <PageHeader
          badge="Interactive Anatomy Academy"
          title="Learning Hub"
          subtitle="Explore bite-sized physiology concept cards, verified medical insights, and connect biological principles to 3D anatomy models."
          breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Learning Hub' }]}
        />

        {/* Did You Know Interactive Card Banner */}
        <div className="did-you-know-card" style={{ borderColor: `${activeFact.color}40` }}>
          <div className="dyk-icon-badge" style={{ backgroundColor: `${activeFact.color}15`, color: activeFact.color }}>
            <Lightbulb size={24} />
          </div>
          <div className="dyk-content">
            <div className="dyk-header-row">
              <span className="dyk-tag" style={{ color: activeFact.color }}>
                Did You Know? &bull; {activeFact.category}
              </span>
              <span className="dyk-counter">
                {activeFactIndex + 1} of {DID_YOU_KNOW_FACTS.length}
              </span>
            </div>
            <p className="dyk-text">&ldquo;{activeFact.fact}&rdquo;</p>
            <div className="dyk-dots">
              {DID_YOU_KNOW_FACTS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`dyk-dot ${idx === activeFactIndex ? 'active' : ''}`}
                  onClick={() => setActiveFactIndex(idx)}
                  aria-label={`View fact ${idx + 1}`}
                  style={idx === activeFactIndex ? { backgroundColor: activeFact.color } : {}}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="learning-controls-bar">
          <div className="learning-search-box">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search concepts, cellular mechanisms, physiology..."
            />
          </div>

          <div className="learning-category-pills">
            {LEARNING_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  className={`category-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Learning Cards Grid */}
        {filteredTopics.length > 0 ? (
          <div className="learning-topics-grid">
            {filteredTopics.map((topic) => {
              const isFav = favoriteIds.has(topic.id)
              return (
                <div key={topic.id} className="topic-card">
                  {/* Topic Card Top */}
                  <div className="topic-card-header">
                    <div className="topic-badge-group">
                      <span
                        className="topic-category-tag"
                        style={{ backgroundColor: topic.bg, color: topic.color }}
                      >
                        {renderIcon(topic.icon, topic.color)}
                        <span>{topic.category}</span>
                      </span>
                      <span className="topic-level-badge">{topic.level}</span>
                    </div>

                    <button
                      type="button"
                      className={`btn-topic-favorite ${isFav ? 'active' : ''}`}
                      onClick={() => handleToggleFavorite(topic)}
                      aria-label={isFav ? 'Remove from saved' : 'Save topic'}
                    >
                      <Heart
                        size={16}
                        fill={isFav ? '#f43f5e' : 'none'}
                        color={isFav ? '#f43f5e' : '#94a3b8'}
                      />
                    </button>
                  </div>

                  {/* Title & Read Time */}
                  <div className="topic-title-block">
                    <h3 className="topic-title">{topic.title}</h3>
                    <div className="topic-readtime">
                      <Clock size={13} />
                      <span>{topic.readTime}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="topic-summary">{topic.summary}</p>

                  {/* Key Highlights */}
                  <div className="topic-keypoints">
                    <span className="keypoints-heading">Key Principles:</span>
                    <ul className="keypoints-list">
                      {topic.keyPoints.map((point, i) => (
                        <li key={i} className="keypoint-item">
                          <CheckCircle2 size={14} className="keypoint-check" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Insight Box */}
                  <div className="topic-insight-box">
                    <Sparkles size={14} className="insight-icon" />
                    <p className="insight-text">{topic.didYouKnow}</p>
                  </div>

                  {/* Card Actions */}
                  <div className="topic-card-footer">
                    {topic.relatedOrganId ? (
                      <Link
                        to={`/dashboard?organ=${topic.relatedOrganId}`}
                        className="btn-topic-3d"
                      >
                        <Box size={14} />
                        <span>Inspect Related 3D Organ</span>
                        <ArrowRight size={13} />
                      </Link>
                    ) : (
                      <Link to="/organs" className="btn-topic-3d">
                        <BookOpen size={14} />
                        <span>Explore Catalog</span>
                        <ArrowRight size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <EmptyState
            title="No Learning Topics Found"
            message={`No learning modules matched "${searchQuery || activeCategory}". Try searching another anatomy keyword.`}
            actionLabel="Reset Filters"
            onAction={() => {
              setActiveCategory('All Topics')
              setSearchQuery('')
            }}
          />
        )}
      </div>
    </div>
  )
}
