import type { PageKey } from '../data/siteData'

interface TermsPageProps {
  onNavigate: (page: PageKey) => void
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">TERMS &amp; CONDITIONS</div>
          <h1>
            Scope, terms &amp;
            <br />
            <span>boundaries.</span>
          </h1>
        </div>
        <p>
          Clear commercial and operational terms for Tattva Sync engagements.
        </p>
      </div>

      <div className="grid-2">
        <article className="card">
          <div>
            <div className="card-tag">01 · SCOPE &amp; APPROVALS</div>
            <h3>Written Scope Before Build</h3>
            <p>
              Project scope, milestones, and deliverables are agreed upon before development starts.
              Changes outside agreed scope are handled via written change requests.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">02 · THIRD-PARTY COSTS</div>
            <h3>External APIs &amp; Infrastructure</h3>
            <p>
              Third-party API usage, hosting, and external subscriptions are separate from development
              fees unless explicitly included in a written agreement.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">03 · INDEPENDENT PARTNER</div>
            <h3>Tattva Sync &amp; Tynco</h3>
            <p>
              Tattva Sync and Tynco operate as independent technology partners with separate scopes,
              contracts, and responsibilities.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">04 · HUMAN OVERSIGHT</div>
            <h3>Controlled Automation</h3>
            <p>
              AI workflows assist with analysis and drafting; final pricing, contracts, and critical
              production actions require human sign-off.
            </p>
          </div>
        </article>
      </div>

      <div style={{ marginTop: '36px' }}>
        <button
          type="button"
          className="text-button link-btn"
          onClick={() => onNavigate('home')}
        >
          ← Back to Home
        </button>
      </div>
    </section>
  )
}