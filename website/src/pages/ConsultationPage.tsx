import { useState, type FormEvent } from 'react'

export function ConsultationPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [focusArea, setFocusArea] = useState('AI & Workflow Automation')
  const [currentProcess, setCurrentProcess] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setSubmitting(true)
    const payload = {
      brand: 'tattva-sync',
      source: 'consultation-page',
      submittedAt: new Date().toISOString(),
      contactName: name.trim(),
      workEmail: email.trim(),
      category: focusArea,
      currentWorkflow: currentProcess.trim(),
      approvalStatus: 'pending-review',
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
        // Handled cleanly in preview mode
      }
    }

    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section className="section">
      <div className="section-heading" style={{ marginBottom: '36px' }}>
        <div>
          <div className="eyebrow">BOOK A CONSULTATION</div>
          <h1>
            Tell us how your team
            <br />
            <span>works today.</span>
          </h1>
        </div>
        <p>
          Share your workflow or bottleneck. We will review your requirement and reply with clear next steps.
        </p>
      </div>

      {submitted ? (
        <div className="enquiry-success">
          <strong style={{ color: '#58D6E8', fontSize: '15px' }}>Consultation request recorded.</strong>
          <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#c1c4b9' }}>
            Thank you, {name}. Your request for <strong>{focusArea}</strong> is queued for review.
          </p>
        </div>
      ) : (
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              className="enquiry-input"
              type="text"
              required
              placeholder="Your name or business"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="enquiry-input"
              type="email"
              required
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <select
            className="enquiry-select"
            value={focusArea}
            onChange={(e) => setFocusArea(e.target.value)}
          >
            <option value="AI & Workflow Automation">AI &amp; Workflow Automation</option>
            <option value="Custom Software & Dashboard">Custom Software &amp; Dashboard</option>
            <option value="System & API Integration">System &amp; API Integration</option>
            <option value="Process Discovery Consultation">Process Discovery Consultation</option>
          </select>

          <textarea
            className="enquiry-textarea"
            rows={4}
            required
            placeholder="Describe your current workflow, repetitive steps, or what needs improvement..."
            value={currentProcess}
            onChange={(e) => setCurrentProcess(e.target.value)}
          />

          <button
            type="submit"
            disabled={submitting}
            className="primary-button"
            style={{ justifyContent: 'center' }}
          >
            {submitting ? 'Submitting...' : 'Book a Consultation'} <span>↗</span>
          </button>
        </form>
      )}
    </section>
  )
}