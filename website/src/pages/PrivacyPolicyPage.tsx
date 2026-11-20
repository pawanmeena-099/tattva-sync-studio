import type { PageKey } from '../data/siteData'

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageKey) => void
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">PRIVACY POLICY</div>
          <h1>
            Data handling &amp;
            <br />
            <span>privacy basics.</span>
          </h1>
        </div>
        <p>
          How submitted project enquiries and basic contact details are handled on Tattva Sync.
        </p>
      </div>

      <div className="grid-2">
        <article className="card">
          <div>
            <div className="card-tag">01 · INFORMATION COLLECTED</div>
            <h3>Enquiry &amp; Contact Details</h3>
            <p>
              When you submit a consultation or project request, we collect only the name, email,
              selected focus area, and workflow details you share voluntarily.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">02 · PURPOSE OF USE</div>
            <h3>Discovery &amp; Scope Review</h3>
            <p>
              Your details are used solely to understand your business requirement, prepare a
              discovery response, and communicate regarding your project enquiry.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">03 · ACCESS &amp; SEPARATION</div>
            <h3>Controlled Access</h3>
            <p>
              Client enquiries and project records are kept separate across independent partners
              and shared only where explicitly scoped and agreed.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">04 · UPDATES &amp; REQUESTS</div>
            <h3>Correction or Removal</h3>
            <p>
              You can request updates or removal of your submitted enquiry details at any time
              through our consultation contact channel.
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