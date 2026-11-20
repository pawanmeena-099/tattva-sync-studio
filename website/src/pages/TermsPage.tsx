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
        <p>Clear operational and scope terms for Tattva Sync engagements.</p>
      </div>

      <div className="grid-2">
        <article className="card">
          <div>
            <div className="card-tag">01 · SCOPE &amp; APPROVALS</div>
            <h3>Written Scope Before Build</h3>
            <p>
              Project scope, milestones, and deliverables are agreed upon before
              development starts. Changes outside agreed scope require written approval.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">02 · THIRD-PARTY SERVICES</div>
            <h3>APIs &amp; Infrastructure</h3>
            <p>
              External API usage, hosting, and third-party tools are separate from
              build fees unless explicitly stated in a written agreement.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">03 · INDEPENDENT PARTNER</div>
            <h3>Tattva Sync &amp; Tynco</h3>
            <p>
              Tattva Sync and Tynco operate as independent technology partners
              with distinct responsibilities and separate operational scopes.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">04 · HUMAN OVERSIGHT</div>
            <h3>Controlled Automation</h3>
            <p>
              Workflows assist with analysis and drafting; pricing, contracts, and
              sensitive production changes stay under human approval.
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