import { type PageKey, solutionsData } from '../data/siteData'

interface SolutionsPageProps {
  onNavigate: (page: PageKey) => void
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">SOLUTIONS · 4 CORE PILLARS</div>
          <h1>
            Customized around
            <br />
            <span>your real workflow.</span>
          </h1>
        </div>
        <p>
          We study your bottlenecks first and then combine AI automation,
          custom software, integrations, or data intelligence as needed.
        </p>
      </div>

      <div className="grid-2">
        {solutionsData.map((item) => (
          <article className="card" key={item.number}>
            <div>
              <div className="card-top">
                <span>{item.number}</span>
                <span className="card-arrow">↗</span>
              </div>
              <div className="card-tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="feature-list">
                {item.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <div className="demo-preview-box" style={{ marginTop: '16px' }}>
                <strong>Example Flow:</strong> {item.exampleFlow}
              </div>
            </div>
            <div className="card-foot">{item.whenToUse}</div>
          </article>
        ))}
      </div>

      <div className="wizard-actions" style={{ marginTop: '36px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('demo-labs')}
        >
          Test in Demo Labs <span>↗</span>
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => onNavigate('consultation')}
        >
          Start a Project <span>→</span>
        </button>
      </div>
    </section>
  )
}