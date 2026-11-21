import type { TyncoPageKey } from '../data/tyncoData'

interface HandoverModelPageProps {
  onNavigate: (page: TyncoPageKey) => void
}

export function HandoverModelPage({ onNavigate }: HandoverModelPageProps) {
  return (
    <section className="tynco-section">
      <div className="tynco-eyebrow">CLEAR OPERATIONAL BOUNDARIES</div>
      <h2>Independent partner. Zero overlap.</h2>

      <div className="tynco-split">
        <div className="tynco-card">
          <div className="tynco-card-top">
            <span>ENGINEERING PARTNER</span>
            <span>TATTVA SYNC</span>
          </div>
          <h3>Discovery, Architecture &amp; Build</h3>
          <p>
            Studies your workflow bottleneck, builds custom software or AI
            automation, validates edge cases, and delivers clean handover
            documentation.
          </p>
          <ul>
            <li>Workflow discovery &amp; system architecture</li>
            <li>Custom web apps, dashboards &amp; AI workflows</li>
            <li>Deployment specification &amp; handover docs</li>
          </ul>
        </div>

        <div className="tynco-card tynco-highlight">
          <div className="tynco-card-top">
            <span>OPERATIONS PARTNER</span>
            <span>TYNCO</span>
          </div>
          <h3>Installation, Maintenance &amp; Support</h3>
          <p>
            Takes ownership of live deployment, hosting health, routine updates,
            backups, and day-to-day technical support as an independent entity.
          </p>
          <ul>
            <li>Production server, domain &amp; SSL installation</li>
            <li>Scheduled updates, patches &amp; backups</li>
            <li>Uptime monitoring &amp; ongoing technical support</li>
          </ul>
        </div>
      </div>

      <div className="tynco-actions">
        <button
          type="button"
          className="tynco-btn-primary"
          onClick={() => onNavigate('request-care')}
        >
          Onboard a Built System ↗
        </button>
        <a
          className="tynco-btn-secondary"
          href="https://tattvasync.in"
          target="_blank"
          rel="noreferrer"
        >
          Need a New System Built? Visit Tattva Sync ↗
        </a>
      </div>
    </section>
  )
}