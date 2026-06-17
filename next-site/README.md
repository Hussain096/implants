# Breasts-Implants.com

Next.js App Router website for independent, evidence-led breast implant patient education.

## Local Development

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Verification

```powershell
npm.cmd run lint
npm.cmd run build
```

## Content Model

- Category hubs use paths such as `/implant-types/`.
- Articles use flat paths such as `/saline-vs-silicone/`.
- Category and article data currently live in `src/data/site.ts`.
- Planned long-term coverage is documented in `content inventory.csv`.
- Editorial and architecture rules are documented in `site blueprint.md`.

## Medical Publishing Rule

Do not label a page as medically reviewed until the clinician's identity, credentials, relevant expertise, review date, and disclosures have been verified. Pages currently use an editorial-review label.
