import { slaPlans, type TyncoPageKey } from '../data/tyncoData'

interface SlaPlansPageProps {
  onNavigate: (page: TyncoPageKey) => void
}

export function SlaPlansPage({ onNavigate }: SlaPlansPageProps) {
  return (
    <section className="tynco-section">
      <div className="tynco-eyebrow">OPERATIONS &amp; CARE TIERS</div>
      <h2>Flexible care for launch or ongoing reliability.</h2>

      <div className="tynco-grid-2">
        {slaPlans.map((plan) => (
          <article className="tynco-card" key={plan.tier}>
            <div className="tynco-card-top">
              <span>{plan.badge}</span>
              <span>TYNCO CARE</span>
            </div>
            <h3>{plan.tier}</h3>
            <p>{plan.target}</p>
            <ul>
              {plan.features.map((feat) => (
                <li key={feat}>{feat}</li>
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
          Request Custom Care Scope ↗
        </button>
      </div>
    </section>
  )
}