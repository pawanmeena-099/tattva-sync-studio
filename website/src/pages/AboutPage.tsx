import type { PageKey } from '../data/siteData'

interface AboutPageProps {
  onNavigate: (page: PageKey) => void
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">ABOUT TATTVA SYNC</div>
          <h1>
            Practical systems.
            <br />
            <span>Human control.</span>
          </h1>
        </div>
        <p>
          Focused on understanding real business problems and building clear, dependable automation and software.
        </p>
      </div>

      <div className="about-strip">
        <div>
          <strong>Problem Before Tool</strong>
          <span>We diagnose workflows and bottlenecks before recommending automation or software.</span>
        </div>
        <div>
          <strong>Clear Guardrails</strong>
          <span>Pricing, contracts, and sensitive/production actions remain under human approval.</span>
        </div>
        <div>
          <strong>Honest Scope</strong>
          <span>We define clear boundaries and deliverables rather than overpromising unbuilt tools.</span>
        </div>
      </div>

      <div style={{ marginTop: '36px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('consultation')}
        >
          Start a conversation <span>↗</span>
        </button>
      </div>
    </section>
  )
}