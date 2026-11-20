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
          Structured discovery, written scope approval, and human control over key actions.
        </p>
      </div>

      <div className="approach-steps">
        {processStepsData.map((item) => (
          <div key={item.step}>
            <span>{item.step}</span>
            <strong>{item.title}</strong>
            <small>{item.detail}</small>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('consultation')}
        >
          Book a Consultation <span>↗</span>
        </button>
        <button
          type="button"
          className="text-button link-btn"
          onClick={() => onNavigate('demo-labs')}
        >
          Explore Demo Labs <span>→</span>
        </button>
      </div>
    </section>
  )
}