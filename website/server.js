import express from 'express'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = Number(process.env.PORT) || 4173

app.use(express.json({ limit: '256kb' }))

// Ensure runtime log directory exists
const dataDir = path.join(__dirname, 'runtime-data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}
const inquiriesFile = path.join(dataDir, 'inquiries.jsonl')

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'tattva-sync', timestamp: new Date().toISOString() })
})

// Direct Project Intake Endpoint
app.post('/api/inquiry', async (req, res) => {
  const body = req.body ?? {}
  const contactName = String(body.contactName ?? '').trim()
  const workEmail = String(body.workEmail ?? '').trim().toLowerCase()
  const workflowBottleneck = String(body.workflowBottleneck ?? '').trim()

  if (!contactName || !workEmail || !workflowBottleneck) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }

  const record = {
    referenceId: String(body.referenceId || `TS-${Date.now().toString().slice(-6)}`),
    receivedAt: new Date().toISOString(),
    contactName,
    companyName: String(body.companyName ?? 'Not specified').trim(),
    workEmail,
    selectedPillar: String(body.selectedPillar ?? 'General Discovery').trim(),
    currentTools: String(body.currentTools ?? 'Not specified').trim(),
    workflowBottleneck,
    includeTyncoOperations: Boolean(body.includeTyncoOperations),
    status: 'PENDING_FOUNDER_REVIEW',
  }

  // 1. Log structured JSON to Railway console & local append file
  console.log('[TATTVA_SYNC_INQUIRY]', JSON.stringify(record))
  fs.appendFileSync(inquiriesFile, `${JSON.stringify(record)}\n`, 'utf8')

  // 2. Optional forward to n8n / Telegram / Google Apps Script webhook if configured in Railway Variables
  const forwardWebhook = process.env.FORWARD_WEBHOOK_URL
  if (forwardWebhook) {
    try {
      await fetch(forwardWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      })
    } catch (err) {
      console.error('[FORWARD_WEBHOOK_ERROR]', err)
    }
  }

  return res.status(200).json({ ok: true, referenceId: record.referenceId })
})

// Serve built Vite frontend
const distPath = path.join(__dirname, 'dist')
app.use(express.static(distPath))

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Tattva Sync running on port ${PORT}`)
})