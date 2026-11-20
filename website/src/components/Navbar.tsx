import type { PageKey } from '../data/siteData'

interface NavbarProps {
  currentPage: PageKey
  onNavigate: (page: PageKey) => void
}

const navItems: { key: PageKey; label: string }[] = [
  { key: 'home', label: 'Home' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'how-we-work', label: 'How We Work' },
  { key: 'demo-labs', label: 'Demo Labs' },
  { key: 'about', label: 'About' },
  { key: 'tynco-partner', label: 'Tynco Partner' },
]

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <header className="navbar">
      <button
        type="button"
        className="brand brand-btn"
        onClick={() => onNavigate('home')}
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
            onClick={() => onNavigate(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        type="button"
        className="nav-cta"
        onClick={() => onNavigate('consultation')}
      >
        Book a Consultation <span>↗</span>
      </button>
    </header>
  )
}