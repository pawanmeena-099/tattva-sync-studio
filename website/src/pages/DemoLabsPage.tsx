import { useState } from 'react'
import type { PageKey } from '../data/siteData'

interface DemoLabsPageProps {
  onNavigate: (page: PageKey) => void
}

const samplePrompts = [
  'We get orders from chats and manually enter them into sheets, causing delays and stock checks.',
  'Inbound enquiries come in but follow-ups and qualification take too long manually.',
  'Data sits across multiple sheets and tools, making weekly status reporting slow.',
]

export function DemoLabsPage({ onNavigate }: DemoLabsPageProps) {
  const [inputText, setInputText] = useState(samplePrompts[0])
  const [showPlan, setShowPlan] = useState(true)

  const buildPreview = (text: string) => {
    const q = text.toLowerCase()
    if (q.includes('order') || q.includes('stock') || q.includes('sheet')) {
      return {
        direction: 'Custom Tracker + Workflow Automation',
        bottleneck: 'Manual order capture, duplicate updates & delayed stock visibility.',
        tattvaScope: 'Structured intake + live status tracker + automated daily summary.',
        tyncoScope: 'Installation, environment setup, updates & ongoing technical support.',
      }
    }
    if (q.includes('enquir') || q.includes('follow') || q.includes('lead')) {
      return {
        direction: 'AI Workflow + Lead Triage Brief',
        bottleneck: 'Unstructured inbound requests and slow manual prioritization.',
        tattvaScope: 'Intake capture + structured brief summary + approval-gated routing.',
        tyncoScope: 'Webhook deployment, health monitoring & ongoing upkeep.',
      }
    }
    return {
      direction: 'System Integration + Reporting View',
      bottleneck: 'Disconnected tools and manual weekly status compilation.',
      tattvaScope: 'Automated sync pipeline + unified summary view.',
      tyncoScope: 'Deployment, maintenance & scheduled operational checks.',
    }
  }

  const preview = buildPreview(inputText)

  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">DEMO LABS · SANDBOX PREVIEW</div>
          <h1>
            See how a problem turns
            <br />
            <span>into a clear plan.</span>
          </h1>
        </div>
        <p>
          Interactive sandbox preview showing how Tattva Sync structures a
          workflow problem and how Tynco supports operations.
        </p>
      </div>

      <div className="lab-container">
        <div className="lab-input-box">
          <div className="card-top">
            <span>SAMPLE WORKFLOW INPUT</span>
            <span className="demo-badge">SANDBOX DEMO</span>
          </div>

          <div className="sample-chips">
            {samplePrompts.map((sample, idx) => (
              <button
                key={sample}
                type="button"
                className="chip-btn"
                onClick={() => {
                  setInputText(sample)
                  setShowPlan(true)
                }}
              >
                Sample #{idx + 1}
              </button>
            ))}
          </div>

          <textarea
            className="enquiry-textarea"
            rows={4}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value)
              setShowPlan(false)
            }}
            placeholder="Describe a manual workflow or operational bottleneck..."
          />

          <button
            type="button"
            className="primary-button"
            style={{ marginTop: '14px' }}
            onClick={() => setShowPlan(true)}
          >
            Preview Structure <span>↗</span>
          </button>
        </div>

        {showPlan && inputText.trim() && (
          <div className="lab-output-box">
            <div className="card-top">
              <span>DRAFT DISCOVERY STRUCTURE</span>
              <span style={{ color: '#58D6E8', fontSize: '11px' }}>HUMAN REVIEW REQUIRED</span>
            </div>

            <div className="lab-result-item">
              <small>SUGGESTED DIRECTION</small>
              <p>
                <strong>{preview.direction}</strong>
              </p>
            </div>

            <div className="lab-result-item">
              <small>BOTTLENECK SUMMARY</small>
              <p>{preview.bottleneck}</p>
            </div>

            <div className="lab-result-item">
              <small>TATTVA SYNC · DESIGN &amp; BUILD</small>
              <p>{preview.tattvaScope}</p>
            </div>

            <div className="lab-result-item">
              <small>TYNCO · INSTALL, UPDATE &amp; MAINTAIN</small>
              <p>{preview.tyncoScope}</p>
            </div>

            <button
              type="button"
              className="secondary-button"
              style={{ marginTop: '14px' }}
              onClick={() => onNavigate('consultation')}
            >
              Book a Consultation <span>→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}