# MQKit website

The site of **MQKit**, the free offline file converter for Windows: what it does, all 44
tools, the download, what's new, questions, privacy, the company. Built with [Astro](https://astro.build) as a
static export, served by nginx.

English only.

| Page | Address |
|---|---|
| Home | `/` |
| All tools, with search | `/tools/` |
| One tool (44 of them) | `/tools/<slug>/` |
| Download | `/download/` |
| Questions | `/faq/` |
| Privacy | `/privacy/` |
| Company | `/legal/` |

Also generated: `/latest.json` (the app's daily "new version" check), `/sitemap.xml`, `/robots.txt`.

## Work on it

```
npm ci
npm run dev       # http://localhost:4321
npm run build     # static files in dist/
```

## Where things are

- `src/site.ts`: the address, the version, the download link, its SHA-256 and size, the company. Edited by hand at
  each release.
- `src/data/tools.ts`: every tool (the `ro` texts are kept for the app, the site uses `en`). Tools still to come have `release: "soon"`, with no date or version; when one ships, set it to `"available"`.
- `src/data/changelog.ts`: one entry per version; the first one feeds `/latest.json` (no page shows it). The app's note links to `/download/`.
- `src/data/faq.ts`: the questions, on `/faq/` and the home page.
- `src/styles/global.css`: colours, type, buttons, sections; each page keeps its own layout styles.
- `public/screens/`: screenshots of the real app.

## At each release

1. Build and sign the installer (`scripts\package.ps1 -Release` in the app repository), publish it.
2. In `src/site.ts`: `LATEST_VERSION`, `LATEST_DATE`, `INSTALLER_SHA256`, `INSTALLER_SIZE`. The download buttons say
   "coming soon" until `INSTALLER_SHA256` is filled.
3. In `src/data/tools.ts`: the new tools become `"available"`. In `src/data/changelog.ts`: a new entry on top.
4. Push to `main`: the workflow builds the image and redeploys. The app sees the new `/latest.json` within a day.

## Later

- The address: `SITE` in `src/site.ts` (mqkit.com), `robots.txt`, and in the app `FEED_URL` / `SITE_PREFIX`
  (`src-tauri/src/update.rs` in github.com/MQKit/app) must match.
- Ads: the plan is to show ads on the site later, never in the app. The Content Security Policy in
  `deploy/security-headers.conf` allows nothing from other domains today, and `/privacy/` says the site uses no cookies
  and no statistics. Both must change together with the ads (and a consent banner, for the EU).

## Promises the site makes

No cookies, no analytics, nothing from other domains (fonts are self-hosted); the server keeps no access log. The
pages say the app's only request is the daily version check. Writing style: plain, short sentences, no long dashes.

## Deploy

`deploy/Dockerfile` builds the site and serves `dist/` with nginx on port 3000.
`.github/workflows/build-and-deploy.yml` pushes `ghcr.io/mqkit/website` and calls the Coolify webhooks
in the `COOLIFY_WEBHOOKS` secret.

## License

The code is MIT. The name, the logo and the text of the pages belong to Software Hive S.R.L.
