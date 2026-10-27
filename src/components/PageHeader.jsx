import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import './PageHeader.css'

export default function PageHeader({ badge, title, subtitle, icon: Icon, breadcrumb }) {
  return (
    <div className="page-header-wrapper">
      <div className="container">
        {breadcrumb && (
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">{breadcrumb}</span>
          </nav>
        )}

        <div className="page-header-content">
          {badge && (
            <div className="page-header-badge">
              {Icon && <Icon size={14} className="header-badge-icon" />}
              <span>{badge}</span>
            </div>
          )}

          <h1 className="page-header-title">{title}</h1>
          {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
