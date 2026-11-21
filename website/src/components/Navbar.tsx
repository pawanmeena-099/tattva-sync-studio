import { useState } from 'react'
import type { TyncoPageKey } from '../data/tyncoData'

interface NavbarProps {
  currentPage: TyncoPageKey
  onNavigate: (page: TyncoPageKey) => void
}

const navItems: { key: TyncoPageKey; label: string }[] = [
  { key: 'home', label: 'Overview' },
  { key: 'services', label: 'Services' },
  { key: 'handover', label: 'Our Partnership' },
  { key: 'sla-plans', label: 'Maintenance Plans' },
]

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSelect = (page: TyncoPageKey) => {
    setMenuOpen(false)
    onNavigate(page)
  }

  return (
    <header className="tynco-nav-wrap">
      <div className="tynco-nav">
        <button
          type="button"
          className="tynco-brand"
          onClick={() => handleSelect('home')}
        >
          <span className="tynco-mark">T.</span>
          <span>TYNCO</span>
        </button>

        <nav className="tynco-links">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={currentPage === item.key ? 'active' : undefined}
              onClick={() => handleSelect(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="tynco-nav-actions">
          <button
            type="button"
            className="tynco-cta"
            onClick={() => handleSelect('request-care')}
          >
            Get Operations Support ↗
          </button>

          <button
            type="button"
            className="tynco-menu-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="tynco-mobile-drawer">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={currentPage === item.key ? 'active' : undefined}
              onClick={() => handleSelect(item.key)}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className="tynco-mobile-cta"
            onClick={() => handleSelect('request-care')}
          >
            Request Support ↗
          </button>
        </nav>
      )}
    </header>
  )
}