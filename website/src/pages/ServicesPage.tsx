import { tyncoServices, type TyncoPageKey } from '../data/tyncoData'

interface ServicesPageProps {
  onNavigate: (page: TyncoPageKey) => void
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <section className="tynco-section">
      <div className="tynco-eyebrow">CORE OPERATIONS · 4 PILLARS</div>
      <h2>Everything needed after a system is built.</h2>

      <div className="tynco-grid-2">
        {tyncoServices.map((srv) => (
          <article className="tynco-card" key={srv.code}>
            <div className="tynco-card-top">
              <span>{srv.code}</span>
              <span>{srv.tag}</span>
            </div>
            <h3>{srv.title}</h3>
            <p>{srv.summary}</p>
            <ul>
              {srv.includes.map((inc) => (
                <li key={inc}>{inc}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="tynco-actions">
        <button
          type="button"
          className="tynco-btn-primary"
          onClick={() => onNavigate('request-care')}
        >
          Request Operations Care ↗
        </button>
        <button
          type="button"
          className="tynco-btn-secondary"
          style={{ background: 'transparent', cursor: 'pointer' }}
          onClick={() => onNavigate('sla-plans')}
        >
          Compare Care Plans →
        </button>
      </div>
    </section>
  )
}