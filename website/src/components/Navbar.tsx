import { useState } from 'react'
import type { PageKey } from '../data/siteData'

interface NavbarProps {
  currentPage: PageKey
  onNavigate: (page: PageKey) => void
}

const navItems: { key: PageKey; label: string }[] = [
  { key: 'home', label: 'Home' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'projects', label: 'Projects' },
  { key: 'demo-labs', label: 'Demo Labs' },
  { key: 'how-we-work', label: 'How We Work' },
  { key: 'about', label: 'About' },
  { key: 'tynco-partner', label: 'Tynco Partner' },
]

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSelect = (page: PageKey) => {
    setMenuOpen(false)
    onNavigate(page)
  }

  return (
    <header className="navbar">
      <button
        type="button"
        className="brand brand-btn"
        onClick={() => handleSelect('home')}
      >
        <span className="brand-mark">T</span>
        <span>
          TATTVA<span className="brand-light">SYNC</span>
        </span>
      </button>

      <nav className="nav-links" aria-label="Primary Navigation">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`nav-link-btn ${currentPage === item.key ? 'active' : ''}`}
            onClick={() => handleSelect(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="nav-right-group">
        <button
          type="button"
          className="nav-cta desktop-only-cta"
          onClick={() => handleSelect('consultation')}
        >
          Start a Project <span>↗</span>
        </button>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`mobile-drawer-link ${currentPage === item.key ? 'active' : ''}`}
              onClick={() => handleSelect(item.key)}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className="primary-button"
            style={{ justifyContent: 'center', marginTop: '8px' }}
            onClick={() => handleSelect('consultation')}
          >
            Start a Project <span>↗</span>
          </button>
        </div>
      )}
    </header>
  )
}