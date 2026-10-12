// Shared pieces of every page: company details, icons, the header and footer.
import { readFileSync } from 'node:fs';

export const COMPANY = {
  name: 'Nash Everett',
  legal: 'Nash Everett LLC',
  owner: 'Gary Szymanski',
  phone: '732-508-9197',
  phoneHref: 'tel:+17325089197',
  sms: 'sms:+17325089197',
  phoneAlt: '848-202-5026',
  email: 'gary@nasheverett.com',
  street: '1701 Valley Rd Unit D',
  city: 'Ocean',
  state: 'NJ',
  zip: '07712',
  license: '13VH09612800',
  url: 'https://nasheverett.com',
};

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// The Nash app's icon family: thin line icons on a 24px grid, 2px stroke (Nash/src/ui/icons.js).
const line = (inner) => `<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
const ICONS = {
  phone: line('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
  mail: line('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>'),
  chat: line('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
  pin: line('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
  report: line('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'),
  lab: line('<path d="M9 3h6"/><path d="M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21.5h11.6a2 2 0 0 0 1.7-3L14 9V3"/><line x1="7" y1="15" x2="17" y2="15"/>'),
  check: line('<path d="M20 6 9 17l-5-5"/>'),
  right: line('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'),
  menu: line('<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>'),
  x: line('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
  drop: line('<path d="M12 2.7s-6.5 7.1-6.5 11.8a6.5 6.5 0 0 0 13 0C18.5 9.8 12 2.7 12 2.7z"/>'),
  wind: line('<path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/><path d="M17.7 7.7A2.5 2.5 0 1 1 19.5 12H2"/>'),
  home: line('<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>'),
  shield: line('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>'),
  search: line('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  layers: line('<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>'),
  leaf: line('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>'),
  clock: line('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
  camera: line('<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3.5"/>'),
  person: line('<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>'),
  thermo: line('<path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"/>'),
  fan: line('<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7 2.5 0 3 3 0 5l-2 1.5"/><path d="M14 12c4 0 7 1 7 4 0 2.5-3 3-5 0l-1.5-2"/><path d="M12 14c0 4-1 7-4 7-2.5 0-3-3 0-5l2-1.5"/><path d="M10 12c-4 0-7-1-7-4 0-2.5 3-3 5 0l1.5 2"/>'),
  award: line('<circle cx="12" cy="8" r="6"/><path d="M15.5 13.2 17 22l-5-3-5 3 1.5-8.8"/>'),
};
export const icon = (name) => ICONS[name];

const LOGO = readFileSync(new URL('../public/logo.svg', import.meta.url), 'utf8');
const LEAF = readFileSync(new URL('../public/leaf.svg', import.meta.url), 'utf8');
let logoSeq = 0;
/** The logo inline; each copy gets its own mask id. */
export const logo = (label = 'Nash Everett') => LOGO.replace(/ne-leaf-\d+/g, `ne-leaf-l${++logoSeq}`).replace('aria-label="Nash Everett"', `aria-label="${esc(label)}"`);
export const leaf = () => LEAF.replace(/ne-leaf-icon/g, `ne-leaf-m${++logoSeq}`).replace('<svg ', '<svg aria-hidden="true" ');

export const SERVICES = [
  { slug: 'home-evaluation', name: 'Investigation & Testing', short: 'Mold inspection and testing', icon: 'search',
    blurb: 'A full investigation of the building: moisture mapping, thermal imaging and lab sampling, written up in a report you can act on.' },
  { slug: 'mold-remediation', name: 'Mold Remediation', short: 'Mold removal', icon: 'shield',
    blurb: 'Contained, HEPA-filtered removal of affected materials and detailed cleaning — no chemical fogging in place of real work.' },
  { slug: 'moisture-management', name: 'Moisture Management', short: 'Moisture and leaks', icon: 'drop',
    blurb: 'No moisture, no mold. We find the water — gutters, grading, plumbing, condensation — and correct it.' },
  { slug: 'crawl-space-encapsulation', name: 'Crawl Space Encapsulation', short: 'Crawl spaces', icon: 'layers',
    blurb: 'A sealed, dry crawl space: vapor barrier, air sealing and dehumidification, so the air under your home stays clean.' },
  { slug: 'indoor-health-assessment', name: 'Indoor Air Quality', short: 'Air quality, ventilation and ducts', icon: 'wind',
    blurb: 'It is not always mold. VOCs, formaldehyde, odor, nicotine, ventilation, air purification and duct cleaning.' },
];

const NAV = [
  ['services', '/#services', 'Services'],
  ['process', '/#process', 'How it works'],
  ['about', '/about/', 'About'],
  ['reviews', '/#reviews', 'Reviews'],
  ['contact', '/contact/', 'Contact'],
];

const footer = () => `
<footer class="site">
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <a href="/" aria-label="Nash Everett home">${logo()}</a>
        <p>Owner-operated mold investigation, remediation and indoor air quality, from Ocean, New Jersey.</p>
        <p class="small" style="color:#80868f">Fully insured · NJ Home Improvement Contractor #${COMPANY.license}</p>
      </div>
      <div>
        <h4>Services</h4>
        <ul>${SERVICES.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="/about/">About Gary</a></li>
          <li><a href="/#process">How it works</a></li>
          <li><a href="/#reviews">Reviews</a></li>
          <li><a href="/contact/">Get a quote</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="${COMPANY.phoneHref}">${COMPANY.phone}</a></li>
          <li><a href="mailto:${COMPANY.email}">${COMPANY.email}</a></li>
          <li>${COMPANY.street}<br>${COMPANY.city}, ${COMPANY.state} ${COMPANY.zip}</li>
        </ul>
      </div>
    </div>
    <div class="foot-legal">
      <span>© ${new Date().getFullYear()} ${COMPANY.legal}. All rights reserved.</span>
      <span><a href="https://www.facebook.com/newjerseymoldremoval" rel="noopener">Facebook</a> · <a href="https://www.homeadvisor.com/rated.NashEveretteLLC.97810950.html" rel="noopener">HomeAdvisor</a></span>
    </div>
  </div>
</footer>`;

const jsonLd = () => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: COMPANY.name,
  legalName: COMPANY.legal,
  url: COMPANY.url,
  telephone: '+1-' + COMPANY.phone,
  email: COMPANY.email,
  founder: COMPANY.owner,
  image: COMPANY.url + '/icon-512.png',
  address: { '@type': 'PostalAddress', streetAddress: COMPANY.street, addressLocality: COMPANY.city, addressRegion: COMPANY.state, postalCode: COMPANY.zip, addressCountry: 'US' },
  areaServed: 'New Jersey',
  sameAs: ['https://www.facebook.com/newjerseymoldremoval', 'https://www.homeadvisor.com/rated.NashEveretteLLC.97810950.html'],
});

/** A whole page. path is the page's URL path ("/", "/contact/"). */
export function page({ path, title, description, active = '', body, home = false }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${COMPANY.url}${path}">
<meta name="theme-color" content="#ffffff">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Nash Everett">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${COMPANY.url}${path}">
<meta property="og:image" content="${COMPANY.url}/icon-512.png">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="stylesheet" href="/styles.css">
${home ? `<script type="application/ld+json">${jsonLd()}</script>` : ''}
</head>
<body>
<a class="skip" href="#content">Skip to content</a>
<header class="top">
  <div class="wrap top-inner">
    <a class="brand" href="/" aria-label="Nash Everett home">${logo()}</a>
    <button class="button ghost sm menu-btn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menu">${icon('menu')}</button>
    <nav class="main" id="nav" aria-label="Main">
      ${NAV.map(([key, href, label]) => `<a href="${href}"${key === active ? ' class="active" aria-current="page"' : ''}>${label}</a>`).join('\n      ')}
    </nav>
    <a class="button sm call" href="${COMPANY.phoneHref}">${icon('phone')} ${COMPANY.phone}</a>
  </div>
</header>
<main id="content">
${body}
</main>
${footer()}
<div class="callbar">
  <a class="button ghost" href="${COMPANY.phoneHref}">${icon('phone')} Call Gary</a>
  <a class="button" href="/contact/#quote">Get a quote</a>
</div>
<script src="/site.js" defer></script>
</body>
</html>
`;
}

/** The orange call-to-action banner that closes most pages. */
export const ctaBand = (title = 'Not sure what you’re dealing with?', text = 'Call Gary directly. Most questions can be answered in one conversation — no pressure, no sales pitch.') => `
<section class="band" style="padding-top:0">
  <div class="wrap">
    <div class="cta">
      <div>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      <div class="actions">
        <a class="button" href="${COMPANY.phoneHref}">${icon('phone')} ${COMPANY.phone}</a>
        <a class="button ghost" href="/contact/#quote">Request a quote</a>
      </div>
    </div>
  </div>
</section>`;
