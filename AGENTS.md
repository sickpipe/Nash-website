# Nash Everett website — agent instructions

The public marketing site for Nash Everett (mold remediation and indoor air
quality), https://nasheverett.com. Static pages rendered at build time by
`build.mjs` (no dependencies) and served as static assets by a Cloudflare
Worker with no Worker code. Not the office app: that is `sickpipe/NashApp`
(nasheverett.app).

## Deploying

- Cloudflare Worker **`nash-website`**, in **Jim@evenrail.com's** Cloudflare
  account (`c6d239f0…`), not the Nash Everett account the app moved to.
- `npx wrangler deploy` (what Cloudflare's Git builds run) builds first via
  `[build]` in `wrangler.toml`, then uploads `dist/`. `npm run deploy` does
  the same by hand.
- `dist/` is build output; never edit it, never commit it.

## Layout

| Path | What it is |
|---|---|
| `src/site.mjs` | Company details (phone, email, address), icons, header and footer |
| `src/pages/` | Page content: home, services, quote, about/contact/404 (`other.mjs`) |
| `public/` | Copied as-is: stylesheet, script, logo, icons, manifest, robots, `_redirects` |
| `build.mjs` | Renders every page into `dist/` |
| `dist/` | Build output, served by the Worker |

## Invariants

- **Keep the old WordPress URLs** (`/mold-remediation/`, `/home-evaluation/`,
  `/moisture-management/`, `/crawl-space-encapsulation/`,
  `/indoor-health-assessment/`, `/contact/`). Any other old URL that changes
  gets a 301 in `public/_redirects`, so search rankings and old links survive.
- **The quote form sends nothing itself.** It composes an email to
  gary@nasheverett.com in the visitor's mail app. There is no backend and no
  stored data; don't add one without Jim's go-ahead.
- **The look follows the Nash app** (orange, ink and greys, cards, pills, line
  icons, the traced logo from NashApp `src/lib/brand.js`). Change it there
  first, then here.
- No framework and no npm runtime dependencies; `wrangler` is the only dev
  dependency.

## Related but separate

- `sickpipe/NashApp` — the office app Gary uses (nasheverett.app).
- `sickpipe/playbook` — how Jim's apps are built, deployed and documented.
