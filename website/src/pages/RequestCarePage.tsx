import { useState, type FormEvent } from 'react'

export function RequestCarePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [systemType, setSystemType] = useState('Installation & Live Deployment')
  const [builtByTattva, setBuiltByTattva] = useState(false)
  const [details, setDetails] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [ticketId, setTicketId] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !details.trim()) return
    setSubmitting(true); setError('');
    const ref = `TYN-${Date.now().toString().slice(-6)}`
    try {
      const response = await fetch('/api/support-request', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ referenceId: ref, brand: 'tynco', contactName: name.trim(), workEmail: email.trim().toLowerCase(), serviceCategory: systemType, builtByTattvaSync: builtByTattva, systemDetails: details.trim() }),
      })
      const payload = await response.json()
      if (!response.ok || !payload.ok) throw new Error(payload.error || 'Request could not be saved')
      setTicketId(payload.referenceId || ref)
    } catch {
      setError('Your request could not be submitted. Please try again or contact us directly.')
    } finally { setSubmitting(false) }
  }
  return <section className="tynco-section">
    <div className="tynco-eyebrow">REQUEST INSTALLATION OR OPERATIONS SUPPORT</div>
    <h2>Tell us what needs to be deployed or maintained.</h2>
    <p style={{maxWidth:680,color:'var(--muted)',marginBottom:26}}>Share a few details about your system. We’ll review the scope and follow up about a practical deployment, maintenance or support arrangement.</p>
    {ticketId ? <div className="tynco-success"><strong>Request received · {ticketId}</strong><p>Thank you, {name}. Your {systemType.toLowerCase()} request has been submitted. We’ll follow up at {email} after review.</p><button type="button" className="tynco-btn-secondary" onClick={()=>{setTicketId('');setDetails('');setError('')}}>Submit another request ↗</button></div> : <form className="tynco-form" onSubmit={handleSubmit}>
      <div className="tynco-row"><input type="text" required maxLength={120} placeholder="Your name or company *" value={name} onChange={e=>setName(e.target.value)} /><input type="email" required maxLength={200} placeholder="Work email *" value={email} onChange={e=>setEmail(e.target.value)} /></div>
      <select value={systemType} onChange={e=>setSystemType(e.target.value)}><option>Installation &amp; Live Deployment</option><option>Monthly Maintenance &amp; Updates</option><option>Monitoring &amp; Incident Response</option><option>Infrastructure / Hosting Management</option><option>Technical Support</option><option>System Audit / Handover</option></select>
      <textarea rows={5} required maxLength={4000} placeholder="System overview, hosting environment, current issues or required scope *" value={details} onChange={e=>setDetails(e.target.value)} />
      <label className="tynco-check"><input type="checkbox" checked={builtByTattva} onChange={e=>setBuiltByTattva(e.target.checked)} /><span>This system was built by Tattva Sync</span></label>
      {error && <div className="tynco-error" role="alert">{error}</div>}
      <button type="submit" disabled={submitting} className="tynco-btn-primary">{submitting?'Submitting…':'Submit Operations Request ↗'}</button>
    </form>}
  </section>
}
