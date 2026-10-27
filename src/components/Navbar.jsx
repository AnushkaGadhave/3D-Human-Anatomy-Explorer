import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import './Navbar.css'

const NAVIGATION_ROUTES = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Anatomy Library', path: '/library' },
  { label: 'Organ Explorer', path: '/organs' },
  { label: 'Learning Hub', path: '/learn' },
  { label: 'Quiz', path: '/quiz' },
  { label: 'About', path: '/about' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Left: Brand Logo & Title */}
        <div className="header-left">
          <Link to="/" className="brand-logo">
            <img
              src="/images/heart_logo.png"
              alt="3D Human Anatomy Explorer Heart Logo"
              className="brand-heart-icon"
            />
            <span className="brand-text">
              3D Human Anatomy <span className="brand-highlight">Explorer</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="desktop-nav header-center" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAVIGATION_ROUTES.map((route) => {
              const isActive =
                location.pathname === route.path ||
                (route.path === '/library' &&
                  (location.pathname === '/explore-anatomy' ||
                    location.pathname.startsWith('/anatomy/'))) ||
                (route.path === '/organs' &&
                  (location.pathname === '/systems' || location.pathname.startsWith('/organs')))
              return (
                <li key={route.path} className="nav-item">
                  <Link
                    to={route.path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{route.label}</span>
                    {isActive && <span className="active-pill" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right: Explore 3D CTA Button & Mobile Toggle */}
        <div className="header-actions header-right">
          <Link to="/dashboard" className="btn-get-started">
            <span>Explore 3D</span>
            <ArrowRight size={16} className="btn-arrow" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            {NAVIGATION_ROUTES.map((route) => {
              const isActive =
                location.pathname === route.path ||
                (route.path === '/library' &&
                  (location.pathname === '/explore-anatomy' ||
                    location.pathname.startsWith('/anatomy/'))) ||
                (route.path === '/organs' &&
                  (location.pathname === '/systems' || location.pathname.startsWith('/organs')))
              return (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {route.label}
                  </Link>
                </li>
              )
            })}
            <li className="mobile-action-item">
              <Link
                to="/dashboard"
                className="btn-get-started mobile-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Explore 3D</span>
                <ArrowRight size={16} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
