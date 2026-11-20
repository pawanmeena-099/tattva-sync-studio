import { useState } from 'react'
import type { FormEvent } from 'react'

// Agle step mein yahan email/backend ka endpoint aayega
const ENDPOINT = ''

type Status = 'idle' | 'sending' | 'done' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('sending')
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error('Request failed')
      } else {
        console.log('Inquiry (demo):', data)
      }
      form.reset()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="card">
        <h3>Thank you!</h3>
        <p>Aapki inquiry mil gayi hai. Hum jaldi hi aapse sampark karenge.</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        Project type
        <select name="projectType" defaultValue="Not sure yet">
          <option>Not sure yet</option>
          <option>AI Automation</option>
          <option>Custom Software</option>
          <option>Dashboard / Reports</option>
          <option>Integration</option>
        </select>
      </label>
      <label>
        Apni problem batayein
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Abhi kaam kaise hota hai aur kya problem aa rahi hai?"
        />
      </label>
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send inquiry'}
      </button>
      {status === 'error' && (
        <p className="error">Kuch gadbad ho gayi. Dobara try karein.</p>
      )}
    </form>
  )
}