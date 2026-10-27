import { Search } from 'lucide-react'
import './EmptyState.css'

export default function EmptyState({
  icon: Icon = Search,
  title,
  description,
  message,
  actionText,
  actionLabel,
  onAction
}) {
  const desc = description || message
  const btnLabel = actionText || actionLabel

  return (
    <div className="empty-state-card">
      <div className="empty-state-icon-wrapper">
        <Icon size={32} className="empty-state-icon" />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      {desc && <p className="empty-state-desc">{desc}</p>}
      {btnLabel && onAction && (
        <button type="button" className="btn-empty-action" onClick={onAction}>
          {btnLabel}
        </button>
      )}
    </div>
  )
}
