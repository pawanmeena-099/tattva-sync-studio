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
            <span>your actual needs.</span>
          </h1>
        </div>
        <p>
          We do not push pre-packaged software. We first understand your workflow and then build what fits.
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
            </div>
            <div className="card-foot">{item.deliverables}</div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: '40px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('consultation')}
        >
          Discuss your workflow <span>↗</span>
        </button>
      </div>
    </section>
  )
}