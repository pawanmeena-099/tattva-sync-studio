import { useState } from 'react'
import type { PageKey } from '../data/siteData'

interface DemoLabsPageProps {
  onNavigate: (page: PageKey) => void
}

const samplePrompts = [
  'We receive 60+ customer orders on WhatsApp daily and manually type them into Excel.',
  'Our sales team gets leads from website and Instagram but forgets timely follow-ups.',
  'We use 3 different tools for billing, stock, and support and spend hours making weekly reports.',
]

export function DemoLabsPage({ onNavigate }: DemoLabsPageProps) {
  const [problemInput, setProblemInput] = useState(samplePrompts[0])
  const [analyzed, setAnalyzed] = useState(true)

  const getSimulatedPlan = (text: string) => {
    const lower = text.toLowerCase()
    if (lower.includes('whatsapp') || lower.includes('order') || lower.includes('stock')) {
      return {
        category: 'Custom Software + Order Automation',
        bottleneck: 'Manual message-to-spreadsheet entry causing delays and stock mismatch.',
        tattvaPlan: 'Structured order intake + live order/stock dashboard + automated daily summary.',
        tyncoPlan: 'Server/cloud installation, database backup setup, monthly updates & support.',
      }
    }
    if (lower.includes('lead') || lower.includes('follow') || lower.includes('instagram')) {
      return {
        category: 'AI Lead Reception & CRM Workflow',
        bottleneck: 'Unstructured inbound enquiries and slow manual qualification.',
        tattvaPlan: 'AI inquiry classifier + auto-brief summary + instant notification with approval gate.',
        tyncoPlan: 'Webhook hosting, uptime alerting & connector maintenance.',
      }
    }
    return {
      category: 'System Integration & Operations Dashboard',
      bottleneck: 'Disconnected tools requiring manual weekly compilation.',
      tattvaPlan: 'Automated API/sheet sync pipeline + unified operational dashboard.',
      tyncoPlan: 'Scheduled health checks, monitoring & ongoing technical care.',
    }
  }

  const plan = getSimulatedPlan(problemInput)

  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">INTERACTIVE DEMO LAB · SANDBOX</div>
          <h1>
            Test how we turn a problem
            <br />
            <span>into a clear system plan.</span>
          </h1>
        </div>
        <p>
          Try a sample operational bottleneck or type your own below. This sandbox
          demonstrates our discovery structure before real engineering begins.
        </p>
      </div>

      <div className="lab-container">
        <div className="lab-input-box">
          <div className="card-top">
            <span>INPUT · YOUR CURRENT WORKFLOW</span>
            <span className="demo-badge">SANDBOX SIMULATOR</span>
          </div>

          <div className="sample-chips">
            {samplePrompts.map((sample, idx) => (
              <button
                key={sample}
                type="button"
                className="chip-btn"
                onClick={() => {
                  setProblemInput(sample)
                  setAnalyzed(true)
                }}
              >
                Sample #{idx + 1}
              </button>
            ))}
          </div>

          <textarea
            className="enquiry-textarea"
            rows={4}
            value={problemInput}
            onChange={(e) => {
              setProblemInput(e.target.value)
              setAnalyzed(false)
            }}
            placeholder="Describe where your team wastes time or faces manual errors..."
          />

          <button
            type="button"
            className="primary-button"
            style={{ marginTop: '14px' }}
            onClick={() => setAnalyzed(true)}
          >
            Generate Sample Blueprint <span>↗</span>
          </button>
        </div>

        {analyzed && problemInput.trim() && (
          <div className="lab-output-box">
            <div className="card-top">
              <span>OUTPUT · STRUCTURED DISCOVERY BRIEF</span>
              <span style={{ color: '#58D6E8', fontSize: '11px' }}>HUMAN APPROVAL REQUIRED</span>
            </div>

            <div className="lab-result-item">
              <small>RECOMMENDED DIRECTION</small>
              <strong>{plan.category}</strong>
            </div>

            <div className="lab-result-item">
              <small>IDENTIFIED BOTTLENECK</small>
              <p>{plan.bottleneck}</p>
            </div>

            <div className="lab-result-item">
              <small>TATTVA SYNC · DESIGN &amp; BUILD SCOPE</small>
              <p>{plan.tattvaPlan}</p>
            </div>

            <div className="lab-result-item">
              <small>TYNCO · INSTALL, UPDATE &amp; MAINTENANCE SCOPE</small>
              <p>{plan.tyncoPlan}</p>
            </div>

            <button
              type="button"
              className="secondary-button"
              style={{ marginTop: '14px' }}
              onClick={() => onNavigate('consultation')}
            >
              Send This Requirement for Real Discovery <span>→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}