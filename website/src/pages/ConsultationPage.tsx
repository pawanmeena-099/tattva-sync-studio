import { useState, type FormEvent } from 'react'

const pillarOptions = [
  '01 · AI & Automation',
  '02 · Custom Software',
  '03 · Integrations',
  '04 · Data Intelligence',
  'Full Workflow Audit (Not Sure Yet)',
]

export function ConsultationPage() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [pillar, setPillar] = useState(pillarOptions[0])
  const [currentTools, setCurrentTools] = useState('')
  const [currentProcess, setCurrentProcess] = useState('')
  const [includeTyncoSupport, setIncludeTyncoSupport] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [deliveryStatus, setDeliveryStatus] = useState<'webhook-sent' | 'local-recorded'>('local-recorded')
  const [referenceId, setReferenceId] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !currentProcess.trim()) return

    setSubmitting(true)
    const refId = `TS-${Date.now().toString().slice(-6)}`
    setReferenceId(refId)

    const payload = {
      referenceId: refId,
      brand: 'tattva-sync',
      source: 'tattvasync.in/start-a-project',
      submittedAt: new Date().toISOString(),
      contactName: name.trim(),
      companyName: company.trim() || 'Not specified',
      workEmail: email.trim().toLowerCase(),
      selectedPillar: pillar,
      currentTools: currentTools.trim() || 'Not specified',
      workflowBottleneck: currentProcess.trim(),
      includeTyncoOperations: includeTyncoSupport,
      governance: {
        approvalStatus: 'pending-founder-review',
        autoSendExternalEmail: false,
      },
    }

    const webhookUrl = import.meta.env.VITE_INQUIRY_WEBHOOK_URL
    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        setDeliveryStatus(res.ok ? 'webhook-sent' : 'local-recorded')
      } catch {
        setDeliveryStatus('local-recorded')
      }
    } else {
      setDeliveryStatus('local-recorded')
    }

    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section className="section">
      <div className="section-heading" style={{ marginBottom: '36px' }}>
        <div>
          <div className="eyebrow">START A PROJECT · WORKFLOW DISCOVERY</div>
          <h1>
            Tell us where time is lost.
            <br />
            <span>We will map the system.</span>
          </h1>
        </div>
        <p>
          Share your current process and tools. Every submission generates a
          structured discovery brief for human review before any scope or quote
          is proposed.
        </p>
      </div>

      {submitted ? (
        <div className="enquiry-success">
          <div className="card-top" style={{ marginBottom: '12px' }}>
            <span className="demo-badge">REF · {referenceId}</span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              {deliveryStatus === 'webhook-sent'
                ? 'Synced to intake pipeline'
                : 'Recorded for review'}
            </span>
          </div>

          <h3 style={{ margin: '0 0 8px', fontSize: '20px' }}>
            Discovery brief received, {name}.
          </h3>
          <p style={{ margin: '0 0 14px', fontSize: '13.5px', color: '#c1c4b9', lineHeight: 1.7 }}>
            Your inquiry under <strong>{pillar}</strong> has been structured and
            queued for founder review. We will follow up at{' '}
            <strong>{email}</strong> with targeted discovery questions.
          </p>

          <div className="demo-preview-box">
            <div>
              <strong>Focus Pillar:</strong> {pillar}
            </div>
            <div style={{ marginTop: '6px' }}>
              <strong>Current Tools:</strong> {currentTools || 'Not specified'}
            </div>
            <div style={{ marginTop: '6px' }}>
              <strong>Tynco Operations Care:</strong>{' '}
              {includeTyncoSupport
                ? 'Included (Install, updates & ongoing support)'
                : 'Build handover only'}
            </div>
          </div>

          <button
            type="button"
            className="secondary-button"
            style={{ marginTop: '18px' }}
            onClick={() => {
              setSubmitted(false)
              setCurrentProcess('')
            }}
          >
            Submit Another Workflow <span>→</span>
          </button>
        </div>
      ) : (
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              className="enquiry-input"
              type="text"
              required
              placeholder="Your name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="enquiry-input"
              type="text"
              placeholder="Business / Brand name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="form-row">
            <input
              className="enquiry-input"
              type="email"
              required
              placeholder="Work email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              className="enquiry-select"
              value={pillar}
              onChange={(e) => setPillar(e.target.value)}
            >
              {pillarOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <input
            className="enquiry-input"
            type="text"
            placeholder="Current tools used (e.g., WhatsApp, Excel, Google Sheets, Notion, CRM...)"
            value={currentTools}
            onChange={(e) => setCurrentTools(e.target.value)}
          />

          <textarea
            className="enquiry-textarea"
            rows={4}
            required
            placeholder="Describe where manual work slows your team down, what repeats daily, or what outcome you want *"
            value={currentProcess}
            onChange={(e) => setCurrentProcess(e.target.value)}
          />

          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={includeTyncoSupport}
              onChange={(e) => setIncludeTyncoSupport(e.target.checked)}
            />
            <span>
              Include installation, updates &amp; ongoing maintenance via independent partner{' '}
              <strong>Tynco</strong>
            </span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="primary-button"
            style={{ justifyContent: 'center' }}
          >
            {submitting ? 'Generating Discovery Brief...' : 'Submit Project Inquiry'} <span>↗</span>
          </button>
        </form>
      )}
    </section>
  )
}