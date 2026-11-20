import { type PageKey, solutionsData, processStepsData } from '../data/siteData'

interface HomePageProps {
  onNavigate: (page: PageKey) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            AI AUTOMATION · CUSTOM SOFTWARE · WORKFLOW SYSTEMS
          </div>

          <h1>
            We understand your business.
            <br />
            Then we <span>build the solution.</span>
          </h1>

          <p className="hero-description">
            We don&apos;t force predefined software onto your team. We study how your
            work actually runs, identify bottlenecks, and build customized AI
            automation and software solutions around your real needs.
          </p>

          <div className="hero-actions">
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

          <div className="hero-bottom">
            <span>YOUR BUSINESS. YOUR CHALLENGES. OUR AUTOMATION.</span>
            <span>HUMAN-CONTROLLED SYSTEMS.</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">
            <div className="core-inner">
              T<span>S</span>
            </div>
          </div>
          <div className="orbit-label label-top">UNDERSTAND</div>
          <div className="orbit-label label-right">DESIGN</div>
          <div className="orbit-label label-bottom">BUILD</div>
          <div className="orbit-label label-left">DELIVER</div>
          <div className="visual-caption">CUSTOM SYSTEMS BUILT AROUND REAL WORKFLOWS.</div>
        </div>
      </section>

      <section className="intro-strip">
        <span>PROBLEM FIRST, TECHNOLOGY SECOND.</span>
        <p>
          Every business works differently. We diagnose your process first, then decide the right solution.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">CORE CAPABILITIES</div>
            <h2>
              Solutions shaped around
              <br />
              <span>real operations.</span>
            </h2>
          </div>
          <button
            type="button"
            className="text-button link-btn"
            onClick={() => onNavigate('solutions')}
          >
            View full solutions page <span>→</span>
          </button>
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
      </section>

      <section className="section alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">EXECUTION FLOW</div>
            <h2>
              Five steps from
              <br />
              <span>discovery to handover.</span>
            </h2>
          </div>
          <button
            type="button"
            className="text-button link-btn"
            onClick={() => onNavigate('how-we-work')}
          >
            See full process <span>→</span>
          </button>
        </div>

        <div className="approach-steps">
          {processStepsData.map((step) => (
            <div key={step.step}>
              <span>{step.step}</span>
              <strong>{step.title}</strong>
              <small>{step.detail}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}