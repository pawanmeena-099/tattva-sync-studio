# Tattva Sync Studio — V2 Upgrade

This archive is the upgraded Tattva Sync website source (React + TypeScript + Vite).

## Run locally

1. Install Node.js 20+.
2. Run `npm ci`.
3. Run `npm run dev`.
4. For a production build, run `npm run build` then `npm start`.

## Server environment
- `PORT`: server port (Railway supplies this automatically)
- `OPENAI_API_KEY`: optional; enables AI discovery brief generation on `/api/inquiry`
- `ADMIN_KEY`: required for the inquiry list endpoint `/api/inquiries?key=...`
- `FORWARD_WEBHOOK_URL`: optional downstream webhook for inquiry forwarding
- `VITE_INQUIRY_WEBHOOK_URL`: optional client-side intake endpoint override


## V2 changes
- Expanded Demo Labs to four local simulation experiences: Discovery, Automation, Data Intelligence and Systems Prototype.
- Added project showcase cards to the home page.
- Refined the cyan/navy visual system and added lab/project responsive styling, focus states and reduced-motion support.
- Added SEO/social metadata and canonical URL.
- Added server-side inquiry rate limiting, input length validation and email validation.
- Corrected the inquiry UI so failed requests are not presented as successfully saved; added retry.


## Honest scope notes
- Demo data and simulation steps are illustrative, not live production data.
- The admin dashboard, persistent database migration, email delivery, analytics provider, real AI lab APIs, and real customer case-study evidence are not included in this V2 archive yet.
- The inquiry backend currently uses a local JSON file for storage. For multi-instance/production use, migrate to a persistent database and protect admin access with a proper authenticated session rather than a query-string key.
