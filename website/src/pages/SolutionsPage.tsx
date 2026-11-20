import { type PageKey, solutionsData } from '../data/siteData'

interface SolutionsPageProps {
  onNavigate: (page: PageKey) => void
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">SOLUTIONS</div>
          <h1>
            Customized around
            <br />
            <span>your real workflow.</span>
          </h1>
        </div>
        <p>
          We study your bottlenecks first and then build the right AI automation,
          custom software, or integration.
        </p>
      </div>

      <div className="grid-3">
        {solutionsData.map((item) => (
          <article className="card" key={item.number}>
            <div>
              <div className="card-top">
                <span>{item.number}</span>
                <span style={{ color: '#58D6E8' }}>↗</span>
              </div>
              <div className="card-tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="feature-list">
                {item.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="card-foot">{item.whenToUse}</div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: '36px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('consultation')}
        >
          Discuss your requirement <span>↗</span>
        </button>
      </div>
    </section>
  )
}