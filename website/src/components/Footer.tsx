import type { PageKey } from '../data/siteData'

interface FooterProps {
  onNavigate: (page: PageKey) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer">
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

      <div className="footer-links">
        <button type="button" className="footer-link-btn" onClick={() => onNavigate('solutions')}>
          Solutions
        </button>
        <button type="button" className="footer-link-btn" onClick={() => onNavigate('demo-labs')}>
          Demo Labs
        </button>
        <button type="button" className="footer-link-btn" onClick={() => onNavigate('tynco-partner')}>
          Tynco Partner
        </button>
        <button type="button" className="footer-link-btn" onClick={() => onNavigate('terms')}>
          Terms &amp; Conditions
        </button>
      </div>

      <span>© {new Date().getFullYear()} Tattva Sync · Independent Partner: Tynco</span>
    </footer>
  )
}