import express from 'express'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = Number(process.env.PORT) || 8080

app.set('trust proxy', 1)
app.use(express.json({ limit: '64kb' }))

const dataDir = path.join(__dirname, 'runtime-data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}
const ticketsFile = path.join(dataDir, 'support-requests.json')

function loadRequests() {
  if (!fs.existsSync(ticketsFile)) return []
  try {
    return JSON.parse(fs.readFileSync(ticketsFile, 'utf8'))
  } catch {
    return []
  }
}

function saveRequests(records) {
  try {
    fs.writeFileSync(ticketsFile, JSON.stringify(records, null, 2), 'utf8')
    return true
  } catch (err) {
    console.error('[TYNCO_WRITE_ERROR]', err)
    return false
  }
}

const requestBuckets = new Map()
function allowRequest(ip) {
  const now = Date.now()
  const bucket = requestBuckets.get(ip) || { start: now, count: 0 }
  if (now - bucket.start > 60_000) { bucket.start = now; bucket.count = 0 }
  bucket.count += 1
  requestBuckets.set(ip, bucket)
  return bucket.count <= 5
}

async function forwardWebhook(record) {
  const webhookUrl = process.env.FORWARD_WEBHOOK_URL
  if (!webhookUrl) return
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
    })
  } catch (err) {
    console.error('[TYNCO_WEBHOOK_ERROR]', err)
  }
}

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    ok: true,
    service: 'tynco-operations',
    port: PORT,
    timestamp: new Date().toISOString(),
  })
})

app.get('/api/support-requests', (req, res) => {
  const adminKey = process.env.ADMIN_KEY
  if (!adminKey || req.query.key !== adminKey) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' })
  }
  const items = loadRequests()
  return res.status(200).json({ ok: true, count: items.length, items })
})

app.post('/api/support-request', async (req, res) => {
  if (!allowRequest(req.ip || 'unknown')) return res.status(429).json({ ok: false, error: 'Too many requests. Please wait and try again.' })
  const body = req.body ?? {}
  const contactName = String(body.contactName ?? '').trim()
  const workEmail = String(body.workEmail ?? '').trim().toLowerCase()
  const systemDetails = String(body.systemDetails ?? '').trim()

  if (!contactName || !workEmail || !systemDetails) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }
  if (contactName.length > 120 || workEmail.length > 200 || systemDetails.length > 4000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) {
    return res.status(400).json({ ok: false, error: 'Invalid field values' })
  }

  const record = {
    referenceId: String(body.referenceId || `TYN-${Date.now().toString().slice(-6)}`),
    receivedAt: new Date().toISOString(),
    brand: 'tynco',
    contactName,
    workEmail,
    serviceCategory: String(body.serviceCategory || 'Operations Care').trim(),
    builtByTattvaSync: Boolean(body.builtByTattvaSync),
    systemDetails,
    status: 'PENDING_REVIEW',
  }

  const existing = loadRequests()
  existing.unshift(record)
  if (!saveRequests(existing)) return res.status(500).json({ ok: false, error: 'Request could not be saved' })
  console.log('[TYNCO_OPERATIONS_REQUEST]', JSON.stringify({ referenceId: record.referenceId, serviceCategory: record.serviceCategory }))

  await forwardWebhook(record)

  return res.status(200).json({ ok: true, referenceId: record.referenceId })
})

const distPath = path.join(__dirname, 'dist')
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))
}

app.use((_req, res) => {
  const indexPath = path.join(distPath, 'index.html')
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath)
  }
  return res.status(200).send('Tynco server is live.')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Tynco running on port ${PORT}`)
})