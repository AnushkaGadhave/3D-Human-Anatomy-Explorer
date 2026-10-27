import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { FEATURE_CARDS } from '../data/anatomyData'
import './FeatureCardsSection.css'

// Custom SVG organ icons matching the reference squircle icons
function FeatureIcon({ type }) {
  if (type === '3d') {
    return <span className="icon-3d-text">3D</span>
  }

  if (type === 'lungs') {
    return (
      <svg className="feature-svg-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v7m0 0l-3 4m3-4l3 4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 9c-2 1.5-3 4-3 7 0 2.5 1.5 4 4 4 2 0 3-1 4-3l-1-7c-1.5-.5-3-.5-4-1z" fill="#ffffff" />
        <path d="M18 9c2 1.5 3 4 3 7 0 2.5-1.5 4-4 4-2 0-3-1-4-3l1-7c1.5-.5 3-.5 4-1z" fill="#ffffff" />
      </svg>
    )
  }

  if (type === 'book') {
    return <BookOpen size={24} color="#ffffff" strokeWidth={2.4} />
  }

  if (type === 'brain') {
    return (
      <svg className="feature-svg-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2a3.5 3.5 0 0 0-3.5 3.5c0 .3.05.6.14.88A4 4 0 0 0 4 10c0 1.25.57 2.37 1.46 3.12A4 4 0 0 0 6 18.5a4 4 0 0 0 3.5 2 3.5 3.5 0 0 0 2.5-1" />
        <path d="M14.5 2a3.5 3.5 0 0 1 3.5 3.5c0 .3-.05.6-.14.88A4 4 0 0 1 20 10c0 1.25-.57 2.37-1.46 3.12A4 4 0 0 1 18 18.5a4 4 0 0 1-3.5 2 3.5 3.5 0 0 1-2.5-1" />
        <path d="M12 4v16" />
      </svg>
    )
  }

  return null
}

const getRouteForCard = (id) => {
  switch (id) {
    case '3d-model':
      return '/dashboard'
    case 'organ-exploration':
      return '/organs'
    case 'body-systems':
      return '/systems'
    case 'fun-quizzes':
      return '/quiz'
    default:
      return '/dashboard'
  }
}

export default function FeatureCardsSection() {
  return (
    <section id="features" className="feature-cards-section">
      <div className="container">
        <div className="features-grid">
          {FEATURE_CARDS.map((card) => (
            <Link
              key={card.id}
              to={getRouteForCard(card.id)}
              id={card.id === 'fun-quizzes' ? 'quiz' : undefined}
              className="feature-card"
              style={{ backgroundColor: card.bgColor }}
            >
              <div
                className="feature-icon-tile"
                style={{ backgroundColor: card.badgeBg }}
              >
                <FeatureIcon type={card.iconType} />
              </div>

              <h2 className="feature-card-title">{card.title}</h2>
              <p className="feature-card-desc">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
