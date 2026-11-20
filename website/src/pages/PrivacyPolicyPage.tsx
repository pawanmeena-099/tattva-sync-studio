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
        <p>How submitted consultation details are handled on Tattva Sync.</p>
      </div>

      <div className="grid-2">
        <article className="card">
          <div>
            <div className="card-tag">01 · INFORMATION COLLECTED</div>
            <h3>Enquiry Details</h3>
            <p>
              We collect only the name, email, focus area, and workflow details
              you enter voluntarily in consultation requests.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">02 · PURPOSE OF USE</div>
            <h3>Discovery Review</h3>
            <p>
              Submitted information is used to understand your workflow need and
              respond to your consultation request.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">03 · ACCESS BOUNDARIES</div>
            <h3>Separate Records</h3>
            <p>
              Project enquiries and operational records are kept separate across
              independent partners unless explicitly scoped otherwise.
            </p>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-tag">04 · CORRECTIONS</div>
            <h3>Update or Removal</h3>
            <p>
              You can request updates or removal of submitted enquiry information
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