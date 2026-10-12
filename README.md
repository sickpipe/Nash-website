# Nash Everett website

The public site for [nasheverett.com](https://nasheverett.com), styled to match the Nash app
(same orange, ink and greys, cards, pills, buttons, line icons, and the traced logo from
`Nash/src/lib/brand.js`).

- `src/site.mjs` — company details, icons, header/footer layout
- `src/pages/` — page content (home, services, about, contact, 404)
- `public/` — stylesheet, script, logo, icons, `_redirects`, robots, manifest
- `build.mjs` — renders every page into `dist/` (no dependencies)

```sh
npm run build    # writes dist/
npm run dev      # build + wrangler dev
npm run deploy   # build + deploy to Cloudflare (Worker "nash-website", static assets)
```

URLs from the old WordPress site are kept where possible (`/mold-remediation/`,
`/home-evaluation/`, `/moisture-management/`, `/crawl-space-encapsulation/`,
`/indoor-health-assessment/`, `/contact/`); the others are 301-redirected in `public/_redirects`.

The quote form composes an email to gary@nasheverett.com in the visitor's mail app.
