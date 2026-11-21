# Tynco — Technology Operations Partner

Tynco provides independent deployment, operations, infrastructure care and technical maintenance for business software, websites, automations and AI-enabled systems.

## Brand scope
- Installation & production deployment
- Hosting / infrastructure setup and configuration
- Monitoring and reliability checks (scope and cadence agreed per engagement)
- Maintenance, patches, updates and backups
- Technical support and incident triage

Tynco is an independent partner to Tattva Sync. Tattva Sync designs and builds technology; Tynco can deploy, operate and maintain systems under a separate scope and agreement. Neither brand is a subsidiary of the other.

## Run locally
1. Install Node.js (use the supported current LTS release).
2. `npm install`
3. `npm run dev` for the Vite development site.
4. `npm run build` for production build.
5. `npm start` starts the Express server; it serves the generated `dist` folder when available.

## Support-request API
- `GET /api/health` — service health response.
- `POST /api/support-request` — submit an operations inquiry; records are saved to `runtime-data/support-requests.json`.
- `GET /api/support-requests?key=...` — admin retrieval, protected by `ADMIN_KEY`.
- `FORWARD_WEBHOOK_URL` optionally forwards new inquiries to a configured webhook.
- Set `ADMIN_KEY` in the hosting environment before exposing admin retrieval.

The request store is a local JSON file and rate limiting is process-memory based. These are simple starter safeguards, not a production-grade database or abuse-prevention system. For production multi-instance deployments, migrate storage to a database and use shared rate limiting. Monitoring, response windows, backups, and SLAs must be configured and contractually scoped; the website does not claim those services are already running.
