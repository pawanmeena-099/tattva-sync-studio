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
          Focused on understanding how businesses actually operate and building
          clear, maintainable solutions.
        </p>
      </div>

      <div className="about-strip">
        <div>
          <strong>Problem Before Tool</strong>
          <span>We diagnose workflows and bottlenecks before recommending automation or software.</span>
        </div>
        <div>
          <strong>Clear Guardrails</strong>
          <span>Pricing, contracts, and critical production actions require human sign-off.</span>
        </div>
        <div>
          <strong>Independent Partnership</strong>
          <span>Tattva Sync builds solutions while Tynco handles installation, updates &amp; maintenance.</span>
        </div>
      </div>

      <div style={{ marginTop: '36px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('consultation')}
        >
          Book a Consultation <span>↗</span>
        </button>
      </div>
    </section>
  )
}