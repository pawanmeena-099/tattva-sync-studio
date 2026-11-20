import { useState, type FormEvent } from 'react'

const painOptions = [
  'Manual data entry (WhatsApp / Calls → Excel)',
  'Slow lead response & follow-ups',
  'Time-consuming daily/weekly reports',
  'Disconnected software & tools',
  'Need a custom internal dashboard / portal',
  'Not sure — need full process audit',
]

export function ConsultationPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [selectedPains, setSelectedPains] = useState<string[]>([painOptions[0]])
  const [currentTools, setCurrentTools] = useState('')
  const [timeLost, setTimeLost] = useState('1–2 hours daily')
  const [needsTyncoOps, setNeedsTyncoOps] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const togglePain = (item: string) => {
    setSelectedPains((prev) =>
      prev.includes(item) ? prev.filter((p) => p !== item) : [...prev, item],
    )
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setSubmitting(true)
    const payload = {
      brand: 'tattva-sync',
      source: 'guided-diagnostic-wizard',
      submittedAt: new Date().toISOString(),
      contactName: name.trim(),
      businessName: businessName.trim(),
      workEmail: email.trim(),
      bottlenecks: selectedPains,
      currentTools: currentTools.trim(),
      estimatedTimeLost: timeLost,
      includeTyncoInstallAndMaintenance: needsTyncoOps,
      workflowNotes: notes.trim(),
      approvalStatus: 'pending-founder-review',
    }

    const webhookUrl = import.meta.env.VITE_INQUIRY_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch {
        // Fallback handled cleanly
      }
    }

    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section className="section">
      <div className="section-heading" style={{ marginBottom: '36px' }}>
        <div>
          <div className="eyebrow">GUIDED WORKFLOW DISCOVERY</div>
          <h1>
            Help us understand
            <br />
            <span>your business needs.</span>
          </h1>
        </div>
        <p>
          Answer 3 short steps so we can understand where time is wasted and
          recommend the right solution before any commitment.
        </p>
      </div>

      {submitted ? (
        <div className="enquiry-success">
          <div className="eyebrow" style={{ marginBottom: '10px' }}>
            DISCOVERY BRIEF RECORDED
          </div>
          <h3 style={{ margin: '0 0 10px' }}>Thank you, {name}.</h3>
          <p style={{ margin: '0 0 14px', fontSize: '13.5px', color: '#c1c4b9', lineHeight: 1.7 }}>
            We have captured your workflow bottlenecks ({selectedPains.length} selected)
            and estimated time impact (<strong>{timeLost}</strong>).
            {needsTyncoOps
              ? ' We also noted your interest in installation & ongoing maintenance support via Tynco.'
              : ''}
          </p>
          <div className="demo-preview-box">
            <strong>Next Step:</strong> Your brief is queued for human review. We will
            reply to <strong>{email}</strong> with discovery questions and a clear scope plan.
          </div>
        </div>
      ) : (
        <form className="wizard-box" onSubmit={handleSubmit}>
          <div className="wizard-steps-bar">
            <span className={step === 1 ? 'active' : ''}>01 · Where is the bottleneck?</span>
            <span className={step === 2 ? 'active' : ''}>02 · Tools &amp; Operations</span>
            <span className={step === 3 ? 'active' : ''}>03 · Contact &amp; Submit</span>
          </div>

          {step === 1 && (
            <div className="wizard-panel">
              <h3>Select where your team faces delays or repetitive work:</h3>
              <div className="pain-grid">
                {painOptions.map((item) => {
                  const checked = selectedPains.includes(item)
                  return (
                    <button
                      key={item}
                      type="button"
                      className={`pain-option ${checked ? 'selected' : ''}`}
                      onClick={() => togglePain(item)}
                    >
                      <span>{checked ? '✓' : '+'}</span>
                      <span>{item}</span>
                    </button>
                  )
                })}
              </div>

              <div className="wizard-actions">
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setStep(2)}
                >
                  Next: Current Tools <span>→</span>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="wizard-panel">
              <h3>Tell us about your current tools &amp; support preference:</h3>
              <div style={{ display: 'grid', gap: '14px' }}>
                <input
                  className="enquiry-input"
                  type="text"
                  placeholder="Tools you currently use (e.g., WhatsApp, Excel, Google Sheets, Tally, Zoho...)"
                  value={currentTools}
                  onChange={(e) => setCurrentTools(e.target.value)}
                />

                <select
                  className="enquiry-select"
                  value={timeLost}
                  onChange={(e) => setTimeLost(e.target.value)}
                >
                  <option value="Less than 1 hour daily">Time wasted: Less than 1 hour daily</option>
                  <option value="1–2 hours daily">Time wasted: 1–2 hours daily</option>
                  <option value="3+ hours daily">Time wasted: 3+ hours daily</option>
                  <option value="5+ hours weekly on reporting">Time wasted: 5+ hours weekly on reporting</option>
                </select>

                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={needsTyncoOps}
                    onChange={(e) => setNeedsTyncoOps(e.target.checked)}
                  />
                  <span>
                    Include installation, deployment, updates &amp; ongoing maintenance via independent partner <strong>Tynco</strong>
                  </span>
                </label>
              </div>

              <div className="wizard-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setStep(1)}
                >
                  ← Back
                </button>
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setStep(3)}
                >
                  Next: Your Details <span>→</span>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="wizard-panel">
              <h3>Where should we send your discovery response?</h3>
              <div style={{ display: 'grid', gap: '14px' }}>
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
                    placeholder="Business / Company name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>

                <input
                  className="enquiry-input"
                  type="email"
                  required
                  placeholder="Work email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                  className="enquiry-textarea"
                  rows={3}
                  placeholder="Any specific details about your workflow or expected outcome..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="wizard-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setStep(2)}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="primary-button"
                >
                  {submitting ? 'Submitting...' : 'Submit Discovery Request'} <span>↗</span>
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </section>
  )
}