import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Left Side: Brand Logo & Tagline */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img
              src="/images/heart_logo.png"
              alt="Heart Icon"
              className="footer-heart-icon"
            />
            <span className="footer-brand-name">
              3D Human Anatomy <span className="footer-cyan">Explorer</span>
            </span>
          </Link>
          <p className="footer-tagline">Explore &bull; Learn &bull; Grow</p>
        </div>

        {/* Center: Navigation Links */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul className="footer-nav-list">
            <li><Link to="/" className="footer-nav-link">Home</Link></li>
            <li><Link to="/dashboard" className="footer-nav-link">3D Dashboard</Link></li>
            <li><Link to="/library" className="footer-nav-link">Anatomy Library</Link></li>
            <li><Link to="/organs" className="footer-nav-link">Organ Explorer</Link></li>
            <li><Link to="/learn" className="footer-nav-link">Learning Hub</Link></li>
            <li><Link to="/quiz" className="footer-nav-link">Quiz Center</Link></li>
            <li><Link to="/about" className="footer-nav-link">About</Link></li>
          </ul>
        </nav>

        {/* Right Side: Message & Glowing Heart Icon */}
        <div className="footer-right">
          <div className="footer-message">
            <span className="message-line">Better Knowledge.</span>
            <span className="message-line">A Healthier Tomorrow.</span>
          </div>

          <div className="footer-heart-outline">
            <Heart size={26} stroke="#38bdf8" strokeWidth={1.7} />
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container">
          <p className="footer-copyright">
            &copy; 2026 3D Human Anatomy Explorer &bull; College Computer Graphics Mini Project
          </p>
        </div>
      </div>
    </footer>
  )
}
