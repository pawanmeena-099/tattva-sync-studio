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
          Start a Project <span>↗</span>
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
            AI systems studio focused on problem-first automation, custom
            software, integrations, and data intelligence.
          </p>
          <div className="footer-pill">Understand · Design · Build</div>
        </div>

        <div className="footer-col">
          <h4>STUDIO</h4>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('solutions')}>
            Solutions (4 Pillars)
          </button>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('projects')}>
            Projects &amp; Prototypes
          </button>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('demo-labs')}>
            Interactive Demo Labs
          </button>
          <button type="button" className="footer-link-btn" onClick={() => onNavigate('how-we-work')}>
            How We Work
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