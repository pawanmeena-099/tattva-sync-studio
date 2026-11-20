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
          Solutions built here.
          <br />
          Operated with <span>Tynco.</span>
        </h1>
        <p>
          Tattva Sync focuses on requirement discovery, AI automation, and custom software engineering.
          Tynco operates as an independent technology partner for installation, deployment, technical
          support, and ongoing maintenance.
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a className="primary-button" href="https://tynco.in" target="_blank" rel="noreferrer">
            Visit Tynco <span>↗</span>
          </a>
          <button
            type="button"
            className="text-button link-btn"
            onClick={() => onNavigate('consultation')}
          >
            Start a project with Tattva Sync <span>→</span>
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