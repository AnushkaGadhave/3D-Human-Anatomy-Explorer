import { Eye, GraduationCap, Cpu } from 'lucide-react'
import { ABOUT_HIGHLIGHTS } from '../data/anatomyData'
import './AboutSection.css'

export default function AboutSection() {
  const getIcon = (id) => {
    switch (id) {
      case 'vis':
        return <Eye size={24} className="highlight-icon" />
      case 'edu':
        return <GraduationCap size={24} className="highlight-icon" />
      case 'cg':
        return <Cpu size={24} className="highlight-icon" />
      default:
        return null
    }
  }

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-header">
          <span className="about-eyebrow">PROJECT OVERVIEW</span>
          <h2 className="about-heading">About the Explorer</h2>
          <p className="about-desc">
            3D Human Anatomy Explorer is an interactive educational experience designed to help
            students understand human anatomy through 3D visualization, exploration, and engaging
            learning activities.
          </p>
        </div>

        <div className="about-highlights-grid">
          {ABOUT_HIGHLIGHTS.map((item) => (
            <div key={item.id} className="about-highlight-card">
              <div className="highlight-icon-box">
                {getIcon(item.id)}
              </div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
