import type { PageKey } from '../data/siteData'

interface FooterProps {
  onNavigate: (page: PageKey) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-cta-band">
        <div>
          <span className="eyebrow">READY WHEN YOU ARE</span>
          <h3>Have a manual workflow slowing your team down?</h3>
        </div>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('consultation')}
        >
          Book a Discovery Call <span>↗</span>
        </button>
      </div>

      <div className="footer-grid">
        <div className="footer-brand-col">
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
          <p className="footer-tagline">
            Problem-first AI automation and custom software solutions. We
            understand how your business works before building what fits.
          </p>
          <div className="footer-pill">Understand · Design · Build</div>
        </div>

        <div className="footer-col">
          <h4>SOLUTIONS</h4>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('solutions')}>
            AI &amp; Custom Software
          </button>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('how-we-work')}>
            How We Work
          </button>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('demo-labs')}>
            Interactive Demo Labs
          </button>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('consultation')}>
            Start a Project Inquiry
          </button>
        </div>

        <div className="footer-col">
          <h4>ECOSYSTEM</h4>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('about')}>
            About Tattva Sync
          </button>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('tynco-partner')}>
            Tynco Operations Partner
          </button>
          <a
            className="footer-ext-link"
            href="https://tynco.in"
            target="_blank"
            rel="noreferrer"
          >
            tynco.in (Install &amp; Support) ↗
          </a>
        </div>

        <div className="footer-col">
          <h4>GOVERNANCE &amp; LEGAL</h4>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('terms')}>
            Terms &amp; Conditions
          </button>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('privacy')}>
            Privacy Policy
          </button>
          <span className="footer-note">
            Production changes, pricing &amp; external actions remain human-controlled.
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tattva Sync. All rights reserved.</span>
        <span>Independent Technology Partner: Tynco (Install · Maintain · Support)</span>
      </div>
    </footer>
  )
}