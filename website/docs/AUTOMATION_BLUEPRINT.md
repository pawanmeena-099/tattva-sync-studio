# Tattva Sync × Tynco — Automation & AI Operating Blueprint (v1.0)

**Status:** Approved Operating Direction  
**Principle:** AI-assisted execution, human-controlled decisions. Separate client data, permissions, and finances across both brands.

---

## 1. Core Automation Workflows

| ID | Workflow Name | Trigger | AI / System Role | Low-Cost Stack | Human Approval Gate | Failure & Recovery Handling |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **WF-01** | **AI Client Reception** | Website inquiry form submit (`tattvasync.in`) | **AI Receptionist** (classify category, detect urgency, summarize) | React Form → n8n Webhook → Google Sheets / Postgres | No (auto-acknowledges & notifies founder) | Store raw JSON payload in fallback queue; retry 3x; alert founder on webhook error |
| **WF-02** | **Requirement Analysis** | New classified inquiry | **AI Analyst** (extract current process, bottlenecks, integrations, risks) | n8n + LLM API | **Yes** — founder reviews brief before discovery call/quote | Mark incomplete inquiries as `Needs Clarification` for manual call |
| **WF-03** | **Proposal & Workspace** | Founder approves discovery brief | **AI Project Manager** (draft scope, milestones, GitHub project tasks) | n8n + GitHub Projects | **Yes** — final pricing, contract & scope require founder approval | Block task/proposal dispatch until `approved_by_founder = true` |
| **WF-04** | **Dev & QA Assistance** | New feature branch / PR / build | **AI Dev & QA Assistant** (test checklist, docs, error trace summary) | VS Code + GitHub Actions | **Yes** — production merge & deployment require approval | Fail build on lint/test errors; log trace without touching production |
| **WF-05** | **Tynco Service Intake** | Support / installation request (`tynco.in`) | **AI Operations Agent** (categorize ticket, suggest priority, assign checklist) | React Form → n8n → Ticket Ledger | **Yes** — risky server changes, restarts, or deletions | Escalate critical downtime alert immediately to founder |
| **WF-06** | **Billing & Weekly Pulse** | Milestone complete / Sunday review | **AI Finance Assistant** (draft invoice summary, track dues, weekly KPI report) | Ledger / Sheets + n8n cron | **Yes** — sending invoices, payment actions, refunds | Flag overdue items; log calculation errors for manual review |

---

## 2. AI Workforce Guardrails

### Allowed Automatically (Within Approved Workflows)
- Summarize incoming inquiries and support tickets.
- Generate structured discovery briefs, task checklists, and technical documentation drafts.
- Run non-destructive tests and health/uptime checks.
- Send internal notifications and scheduled weekly summaries.

### Strictly Requires Founder Approval
- Final project pricing, discounts, or commercial commitments.
- Contract execution and scope changes.
- Production deployments, server configuration changes, or data deletion.
- Sending client invoices, processing payments, or issuing refunds.

---

## 3. Shared Inquiry Payload Schema (`packages/shared-types/inquiry.ts`)

```ts
export interface EcosystemInquiry {
  brand: 'tattva-sync' | 'tynco'
  source: 'website-form' | 'demo-lab' | 'direct'
  submittedAt: string
  contactName: string
  workEmail: string
  company?: string
  category: string
  currentWorkflow: string
  desiredOutcome: string
  approvalStatus: 'pending-review' | 'approved' | 'rejected'
}

---

### 2. `C:\Projects\TattvaSync\apps\tattva-sync-web\src\App.css`

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

:root {
  --bg-main: #0B1020;
  --bg-alt: #121A30;
  --bg-card: #18213A;
  --accent: #58D6E8;
  --accent-hover: #7CE5F4;
  --accent-ink: #071318;
  --text-main: #F4F5EF;
  --text-muted: #A7AAA1;
  --border-subtle: rgba(255, 255, 255, 0.12);

  font-family: 'DM Sans', sans-serif;
  color: var(--text-main);
  background: var(--bg-main);
  scroll-behavior: smooth;
}

* { box-sizing: border-box; }
body { margin: 0; min-width: 320px; background: var(--bg-main); color: var(--text-main); }
a { color: inherit; text-decoration: none; }
::selection { background: var(--accent); color: var(--accent-ink); }

.navbar {
  height: 80px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-subtle);
  background: rgba(11, 16, 32, 0.92);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 20;
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 17px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  background: var(--accent);
  color: var(--accent-ink);
  border-radius: 9px;
  font-size: 20px;
}

.brand-light { color: var(--accent); }
.nav-links { display: flex; gap: 30px; color: var(--text-muted); font-size: 13px; }
.nav-links a:hover, .text-button:hover { color: var(--accent); }

.nav-cta {
  border: 1px solid rgba(88, 214, 232, 0.55);
  border-radius: 5px;
  padding: 10px 16px;
  font-size: 13px;
  transition: 0.2s;
}
.nav-cta:hover { background: rgba(88, 214, 232, 0.1); }
.nav-cta span { color: var(--accent); margin-left: 8px; }

.hero {
  min-height: 650px;
  padding: 90px 7% 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  width: 620px;
  height: 620px;
  right: 3%;
  top: 0;
  background: radial-gradient(circle, rgba(88, 214, 232, 0.14), transparent 68%);
  pointer-events: none;
}

.hero-content { position: relative; z-index: 2; max-width: 650px; }
.eyebrow {
  color: var(--accent);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.4px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 12px var(--accent);
}

h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; }
.hero h1 {
  font-size: clamp(44px, 6vw, 76px);
  line-height: 1.08;
  letter-spacing: -3px;
  margin: 26px 0 20px;
}
.hero h1 span, h2 span { color: var(--accent); }

.hero-description {
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.85;
  max-width: 550px;
}

.hero-actions { display: flex; gap: 24px; align-items: center; margin-top: 34px; flex-wrap: wrap; }
.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 15px 22px;
  border-radius: 4px;
  color: var(--accent-ink);
  background: var(--accent);
  font-size: 13px;
  font-weight: 700;
  transition: 0.2s;
  border: none;
  cursor: pointer;
}
.primary-button:hover { background: var(--accent-hover); transform: translateY(-2px); }
.text-button { color: #e4e7dd; font-size: 13px; }
.text-button span { color: var(--accent); margin-left: 8px; }

.hero-bottom {
  display: flex;
  gap: 32px;
  margin-top: 76px;
  color: #777d70;
  font-size: 9px;
  letter-spacing: 1.5px;
  flex-wrap: wrap;
}

.hero-visual {
  width: 360px;
  height: 360px;
  position: relative;
  flex-shrink: 0;
  margin: 0 2% 0 20px;
}
.orbit {
  position: absolute;
  border: 1px solid rgba(88, 214, 232, 0.22);
  border-radius: 50%;
  inset: 22px;
}
.orbit-two { inset: 66px; border-color: rgba(88, 214, 232, 0.36); }
.orbit-core {
  position: absolute;
  inset: 110px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(88, 214, 232, 0.16), var(--bg-alt));
  border: 1px solid rgba(88, 214, 232, 0.55);
}
.core-inner { font: 700 36px 'Space Grotesk'; color: #f5f6ed; }
.core-inner span { color: var(--accent); }
.orbit-label {
  position: absolute;
  color: var(--accent);
  font-size: 9px;
  letter-spacing: 2px;
  background: var(--bg-main);
  padding: 6px 8px;
}
.label-top { top: 0; left: 43%; }
.label-bottom { bottom: 0; left: 43%; }
.label-left { left: -6px; top: 47%; }
.label-right { right: -6px; top: 47%; }
.visual-caption {
  position: absolute;
  bottom: -32px;
  width: 100%;
  text-align: center;
  color: #747b6c;
  font-size: 9px;
  letter-spacing: 2px;
}

.intro-strip {
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  padding: 22px 7%;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}
.intro-strip span { color: var(--accent); font-size: 10px; letter-spacing: 2px; font-weight: 700; }
.intro-strip p { color: #c1c4b9; font-size: 13px; margin: 0; }

.section { padding: 96px 7%; }
.alt-bg { background: var(--bg-alt); }
.section-heading { display: flex; justify-content: space-between; align-items: end; gap: 36px; }
.section-heading h2, .partner-copy h2, .contact-section h2 {
  font-size: clamp(34px, 4.5vw, 52px);
  line-height: 1.12;
  letter-spacing: -1.8px;
  margin: 18px 0 0;
}
.section-heading > p {
  max-width: 390px;
  color: #9da196;
  font-size: 14px;
  line-height: 1.8;
}

.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 48px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 48px; }

.card {
  padding: 26px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card:hover { border-color: rgba(88, 214, 232, 0.55); transform: translateY(-3px); }
.card-top { display: flex; justify-content: space-between; align-items: center; color: #8c9383; font-size: 12px; }
.card-tag { color: var(--accent); font-size: 9px; letter-spacing: 2px; margin-top: 24px; font-weight: 700; }
.card h3 { font-size: 20px; margin: 10px 0; }
.card p { color: #989e91; font-size: 13px; line-height: 1.75; margin: 0; }
.card-foot {
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 11px;
  color: var(--accent);
}

.demo-badge {
  font-size: 9px;
  letter-spacing: 1.5px;
  padding: 4px 8px;
  border: 1px solid rgba(88, 214, 232, 0.45);
  color: var(--accent);
  border-radius: 3px;
}

.demo-preview-box {
  margin-top: 16px;
  padding: 14px;
  background: #0E1528;
  border: 1px dashed rgba(88, 214, 232, 0.35);
  font-size: 12px;
  color: #cfd3c8;
  line-height: 1.6;
}

.approach-steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 52px; }
.approach-steps div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid rgba(88, 214, 232, 0.45);
  padding-top: 16px;
}
.approach-steps span { color: var(--accent); font-size: 11px; font-weight: 700; }
.approach-steps strong { font-family: 'Space Grotesk'; font-size: 17px; }
.approach-steps small { color: #999f92; font-size: 12.5px; line-height: 1.6; }

.partner-section {
  padding: 96px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}
.partner-copy { max-width: 540px; }
.partner-copy p, .contact-section > p { color: #a1a69a; font-size: 14px; line-height: 1.85; margin: 20px 0; }
.partner-card {
  width: 330px;
  height: 295px;
  flex-shrink: 0;
  border: 1px solid rgba(88, 214, 232, 0.25);
  background: linear-gradient(145deg, #151c30, #0d1220);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.partner-symbol { font: 700 48px 'Space Grotesk'; color: var(--accent); }
.partner-name { font: 700 25px 'Space Grotesk'; letter-spacing: 6px; }
.partner-line { width: 45px; height: 2px; background: var(--accent); margin: 18px; }
.partner-caption { font-size: 9px; color: #a6ac9d; letter-spacing: 2px; }
.partner-foot { position: absolute; bottom: 16px; font-size: 8px; color: #78806f; letter-spacing: 2px; }

.contact-section { text-align: center; padding: 96px 7%; background: var(--bg-alt); }
.contact-section .eyebrow { justify-content: center; }
.contact-section > p { max-width: 540px; margin: 18px auto 30px; }

.enquiry-form {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  gap: 14px;
  text-align: left;
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.enquiry-input, .enquiry-select, .enquiry-textarea {
  width: 100%;
  padding: 13px 15px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  color: var(--text-main);
  font-family: inherit;
  font-size: 13px;
}
.enquiry-input:focus, .enquiry-select:focus, .enquiry-textarea:focus {
  outline: none;
  border-color: var(--accent);
}
.enquiry-success {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--accent);
  border-radius: 6px;
  text-align: left;
}

.footer {
  padding: 28px 7%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: #82887b;
  font-size: 11px;
  flex-wrap: wrap;
}

@media (max-width: 960px) {
  .hero-visual { display: none; }
  .approach-steps { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: 1fr; }
}

@media (max-width: 700px) {
  .nav-links { display: none; }
  .section-heading { display: block; }
  .grid-2, .approach-steps, .form-row { grid-template-columns: 1fr; }
  .partner-section { flex-direction: column; align-items: flex-start; }
  .partner-card { width: 100%; }
}