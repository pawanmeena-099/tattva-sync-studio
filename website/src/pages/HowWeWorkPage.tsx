import { type PageKey, processStepsData } from '../data/siteData'

interface HowWeWorkPageProps {
  onNavigate: (page: PageKey) => void
}

export function HowWeWorkPage({ onNavigate }: HowWeWorkPageProps) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">HOW WE WORK</div>
          <h1>
            Understand. Design.
            <br />
            <span>Build &amp; Deliver.</span>
          </h1>
        </div>
        <p>
          Clear scope before build, human sign-off on critical actions, and
          independent operational support via Tynco.
        </p>
      </div>

      <div className="approach-steps">
        {processStepsData.map((item) => (
          <div key={item.step}>
            <span>
              {item.step} · {item.owner}
            </span>
            <strong>{item.title}</strong>
            <small>{item.detail}</small>
          </div>
        ))}
      </div>

      <div className="wizard-actions" style={{ marginTop: '36px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('consultation')}
        >
          Book a Consultation <span>↗</span>
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => onNavigate('demo-labs')}
        >
          Open Demo Labs <span>→</span>
        </button>
      </div>
    </section>
  )
}