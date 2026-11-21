import { tyncoServices, type TyncoPageKey } from '../data/tyncoData'

interface HomePageProps {
  onNavigate: (page: TyncoPageKey) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <section className="tynco-hero">
        <div className="tynco-eyebrow">INDEPENDENT TECHNOLOGY OPERATIONS PARTNER</div>
        <h1>
          Your systems installed,
          <br />
          <span>maintained &amp; running.</span>
        </h1>
        <p>
          Tynco handles production deployment, routine updates, uptime
          monitoring, and ongoing technical support — operating independently
          alongside engineering studios like Tattva Sync.
        </p>
        <div className="tynco-actions">
          <button
            type="button"
            className="tynco-btn-primary"
            onClick={() => onNavigate('request-care')}
          >
            Schedule Deployment / Care ↗
          </button>
          <button
            type="button"
            className="tynco-btn-secondary"
            style={{ background: 'transparent', cursor: 'pointer' }}
            onClick={() => onNavigate('services')}
          >
            View Operations Scope →
          </button>
        </div>

        <div className="tynco-status-strip">
          <div>
            <small>INSTALL</small>
            <strong>Cloud, VPS &amp; Domain Setup</strong>
          </div>
          <div>
            <small>MAINTAIN</small>
            <strong>Updates, Backups &amp; Patches</strong>
          </div>
          <div>
            <small>MONITOR</small>
            <strong>Health Checks &amp; Recovery</strong>
          </div>
          <div>
            <small>SUPPORT</small>
            <strong>Dedicated Human Assistance</strong>
          </div>
        </div>
      </section>

      <section className="tynco-section tynco-alt">
        <div className="tynco-eyebrow">AT A GLANCE</div>
        <h2>Operational reliability after launch.</h2>
        <div className="tynco-grid-2">
          {tyncoServices.slice(0, 2).map((srv) => (
            <article className="tynco-card" key={srv.code}>
              <div className="tynco-card-top">
                <span>{srv.code}</span>
                <span>{srv.tag}</span>
              </div>
              <h3>{srv.title}</h3>
              <p>{srv.summary}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: '24px' }}>
          <button
            type="button"
            className="tynco-btn-secondary"
            style={{ background: 'transparent', cursor: 'pointer' }}
            onClick={() => onNavigate('services')}
          >
            Explore All 4 Operations Pillars →
          </button>
        </div>
      </section>
    </>
  )
}