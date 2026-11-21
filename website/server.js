import express from 'express'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.set('trust proxy', 1)
const PORT = Number(process.env.PORT) || 4173

app.use(express.json({ limit: '256kb' }))

const dataDir = path.join(__dirname, 'runtime-data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}
const inquiriesFile = path.join(dataDir, 'inquiries.json')
const rateBuckets = new Map()
function allowInquiry(ip) {
  const now = Date.now()
  const bucket = rateBuckets.get(ip) || { start: now, count: 0 }
  if (now - bucket.start > 60_000) { bucket.start = now; bucket.count = 0 }
  bucket.count += 1
  rateBuckets.set(ip, bucket)
  return bucket.count <= 5
}

function loadInquiries() {
  if (!fs.existsSync(inquiriesFile)) return []
  try {
    return JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'))
  } catch {
    return []
  }
}

function saveInquiries(records) {
  fs.writeFileSync(inquiriesFile, JSON.stringify(records, null, 2), 'utf8')
}

async function generateDiscoveryBrief(record) {
  const apiKey = process.env.OPENAI_API_KEY
  if (apiKey) {
    try {
      const prompt = [
        'You are the internal discovery analyst for Tattva Sync (an AI automation & custom software studio).',
        'Analyze this project inquiry and return JSON with keys: bottleneckSummary, suggestedArchitecture, discoveryQuestions (array of 3 strings), tyncoHandoverNote.',
        'Rule: Never quote prices or commit to timelines. Keep it concise and practical.',
        `Inquiry: ${JSON.stringify(record)}`,
      ].join('\n')

      const resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          response_format: { type: 'json_object' },
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.3,
        }),
      })

      if (resp.ok) {
        const data = await resp.json()
        const content = data?.choices?.[0]?.message?.content
        if (content) return JSON.parse(content)
      }
    } catch (err) {
      console.error('[AI_BRIEF_FALLBACK]', err)
    }
  }

  return {
    bottleneckSummary: `Manual friction reported around: ${record.workflowBottleneck.slice(0, 140)}`,
    suggestedArchitecture: `${record.selectedPillar} connecting ${record.currentTools} with human approval checkpoints.`,
    discoveryQuestions: [
      'How many times per day/week does this manual step happen currently?',
      'Which action requires strict human approval before execution?',
      'Who on your team will own daily review once deployed?',
    ],
    tyncoHandoverNote: record.includeTyncoOperations
      ? 'Client opted in for Tynco installation, updates, monitoring & support.'
      : 'Build & handover documentation only (Tynco care not requested).',
  }
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'tattva-sync-studio',
    aiBriefEnabled: Boolean(process.env.OPENAI_API_KEY),
    timestamp: new Date().toISOString(),
  })
})

// Protected Founder Queue View: GET /api/inquiries?key=YOUR_ADMIN_KEY
app.get('/api/inquiries', (req, res) => {
  const adminKey = process.env.ADMIN_KEY
  if (!adminKey || req.query.key !== adminKey) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' })
  }
  return res.json({ ok: true, count: loadInquiries().length, items: loadInquiries() })
})

// Project Intake + Automated Internal Discovery Brief
app.post('/api/inquiry', async (req, res) => {
  if (!allowInquiry(req.ip || 'unknown')) return res.status(429).json({ ok: false, error: 'Too many submissions. Try again later.' })
  const body = req.body ?? {}
  const contactName = String(body.contactName ?? '').trim()
  const workEmail = String(body.workEmail ?? '').trim().toLowerCase()
  const workflowBottleneck = String(body.workflowBottleneck ?? '').trim()

  if (!contactName || !workEmail || !workflowBottleneck) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }
  if (contactName.length > 120 || workEmail.length > 254 || workflowBottleneck.length > 5000) {
    return res.status(400).json({ ok: false, error: 'One or more fields are too long' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) {
    return res.status(400).json({ ok: false, error: 'Please provide a valid email address' })
  }

  const baseRecord = {
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

  const discoveryBrief = await generateDiscoveryBrief(baseRecord)
  const fullRecord = { ...baseRecord, discoveryBrief }

  const existing = loadInquiries()
  existing.unshift(fullRecord)
  saveInquiries(existing)

  console.log('[TATTVA_SYNC_BRIEF]', JSON.stringify(fullRecord))

  const forwardWebhook = process.env.FORWARD_WEBHOOK_URL
  if (forwardWebhook) {
    try {
      await fetch(forwardWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullRecord),
      })
    } catch (err) {
      console.error('[FORWARD_WEBHOOK_ERROR]', err)
    }
  }

  return res.status(200).json({ ok: true, referenceId: fullRecord.referenceId })
})

const distPath = path.join(__dirname, 'dist')
app.use(express.static(distPath))

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Tattva Sync AI Studio running on port ${PORT}`)
})