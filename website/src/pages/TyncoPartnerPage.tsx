import type { PageKey } from '../data/siteData'

interface TyncoPartnerPageProps {
  onNavigate: (page: PageKey) => void
}

export function TyncoPartnerPage({ onNavigate }: TyncoPartnerPageProps) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">INDEPENDENT TECHNOLOGY PARTNER</div>
          <h1>
            Built by Tattva Sync.
            <br />
            Operated with <span>Tynco.</span>
          </h1>
        </div>
        <p>
          Two independent brands with clear operational boundaries — giving you
          focused engineering and dependable day-to-day system care.
        </p>
      </div>

      {/* Visual Split Diagram: BUILD vs OPERATE */}
      <div className="ecosystem-diagram">
        <div className="eco-node eco-tattva">
          <div className="card-top">
            <span>ENTITY 01</span>
            <span className="demo-badge">BUILD</span>
          </div>
          <h3>TATTVA SYNC</h3>
          <p className="eco-sub">AI · Architecture · Software · Systems</p>
          <ul className="feature-list">
            <li>Workflow &amp; bottleneck discovery</li>
            <li>AI agents &amp; controlled automations</li>
            <li>Custom web apps, dashboards &amp; APIs</li>
            <li>Testing &amp; handover documentation</li>
          </ul>
        </div>

        <div className="eco-bridge" aria-hidden="true">
          <span>HANDOVER</span>
          <div className="eco-line" />
          <small>Clean Docs &amp; Deployment Spec</small>
        </div>

        <div className="eco-node eco-tynco">
          <div className="card-top">
            <span>ENTITY 02</span>
            <span className="demo-badge">OPERATE</span>
          </div>
          <h3>TYNCO</h3>
          <p className="eco-sub">Deployment · Maintenance · Support · Monitoring</p>
          <ul className="feature-list">
            <li>System installation &amp; live environment setup</li>
            <li>Routine updates, patches &amp; backups</li>
            <li>Uptime monitoring &amp; health checks</li>
            <li>Ongoing technical support &amp; operations care</li>
          </ul>
        </div>
      </div>

      <div className="wizard-actions" style={{ marginTop: '36px' }}>
        <a className="primary-button" href="https://tynco.in" target="_blank" rel="noreferrer">
          Visit Tynco <span>↗</span>
        </a>
        <button
          type="button"
          className="secondary-button"
          onClick={() => onNavigate('consultation')}
        >
          Start a Project with Tattva Sync <span>→</span>
        </button>
      </div>
    </section>
  )
}