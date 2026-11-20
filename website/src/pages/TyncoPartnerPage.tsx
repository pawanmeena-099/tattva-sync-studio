import type { PageKey } from '../data/siteData'

interface TyncoPartnerPageProps {
  onNavigate: (page: PageKey) => void
}

export function TyncoPartnerPage({ onNavigate }: TyncoPartnerPageProps) {
  return (
    <section className="partner-section">
      <div className="partner-copy">
        <div className="eyebrow">INDEPENDENT TECHNOLOGY PARTNER</div>
        <h1>
          Built by Tattva Sync.
          <br />
          Operated with <span>Tynco.</span>
        </h1>
        <p>
          Tattva Sync focuses on discovery, AI automation, and custom software
          engineering. Tynco is an independent technology partner handling
          installation, deployment, updates, monitoring, and ongoing technical
          maintenance.
        </p>
        <div className="wizard-actions">
          <a className="primary-button" href="https://tynco.in" target="_blank" rel="noreferrer">
            Visit Tynco <span>↗</span>
          </a>
          <button
            type="button"
            className="secondary-button"
            onClick={() => onNavigate('consultation')}
          >
            Start with Tattva Sync <span>→</span>
          </button>
        </div>
      </div>

      <div className="partner-card">
        <div className="partner-symbol">T.</div>
        <div className="partner-name">TYNCO</div>
        <div className="partner-line" />
        <div className="partner-caption">INSTALL · MAINTAIN · SUPPORT</div>
        <div className="partner-foot">INDEPENDENT TECHNOLOGY PARTNER</div>
      </div>
    </section>
  )
}