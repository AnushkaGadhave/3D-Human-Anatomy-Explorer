import { Search, X } from 'lucide-react'
import './SearchBar.css'

export default function SearchBar({ value, onChange, placeholder = "Search organs, systems, or functions..." }) {
  return (
    <div className="search-bar-container">
      <Search size={18} className="search-bar-icon" />
      <input
        type="text"
        className="search-bar-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className="search-bar-clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
