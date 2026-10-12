import { COMPANY, SERVICES, icon, ctaBand } from '../site.mjs';

const others = (slug) => SERVICES.filter((s) => s.slug !== slug).map((s) =>
  `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('');

const faq = (items) => `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;

function servicePage({ slug, title, description, h1, lede, body, side = '', faqs = [] }) {
  const svc = SERVICES.find((s) => s.slug === slug);
  return {
    path: `/${slug}/`,
    title,
    description,
    active: 'services',
    body: `
<section class="page-hero">
  <div class="wrap">
    <div class="crumb"><a href="/">Home</a> / <a href="/#services">Services</a> / ${svc.name}</div>
    <span class="eyebrow">${svc.name}</span>
    <h1>${h1}</h1>
    <p class="lede">${lede}</p>
    <div class="actions">
      <a class="button" href="/contact/#quote">Request a quote ${icon('right')}</a>
      <a class="button secondary" href="${COMPANY.phoneHref}">${icon('phone')} ${COMPANY.phone}</a>
    </div>
  </div>
</section>
<section class="band">
  <div class="wrap content-grid">
    <div class="prose">
      ${body}
      ${faqs.length ? `<h2>Common questions</h2>${faq(faqs)}` : ''}
    </div>
    <aside class="side">
      ${side}
      <div class="card callout">
        <h3>Talk to Gary</h3>
        <p>Most questions can be answered in one phone call. No pressure, no sales pitch.</p>
        <a class="button block" href="${COMPANY.phoneHref}">${icon('phone')} ${COMPANY.phone}</a>
      </div>
      <div class="card">
        <h3>Other services</h3>
        <ul style="margin:8px 0 0;padding-left:18px">${others(slug)}</ul>
      </div>
    </aside>
  </div>
</section>
${ctaBand()}`,
  };
}

const sideList = (title, items) => `<div class="card"><h3>${title}</h3><ul class="ticks" style="margin:10px 0 0">${items.map((t) => `<li>${icon('check')}<span>${t}</span></li>`).join('')}</ul></div>`;

export default [
  servicePage({
    slug: 'home-evaluation',
    title: 'Mold Inspection & Testing in NJ | Nash Everett',
    description: 'Room-by-room mold and moisture investigations with thermal imaging, moisture mapping and lab sampling, written up in a clear report. Monmouth & Ocean counties, NJ.',
    h1: 'Answers, not guesses.',
    lede: 'Sometimes the problem is obvious. Often it isn’t. A Nash Everett investigation finds what’s happening in the building — and why — before anyone opens a wall.',
    body: `
      <h2>What an investigation includes</h2>
      <p>We start with your story: when it started, where it’s worse, who in the house is affected, and what has leaked before. Then we walk the property room by room.</p>
      <ul>
        <li><b>Visual and olfactory inspection</b> of living spaces, basement or crawl space, attic and mechanicals.</li>
        <li><b>Moisture, humidity and temperature readings</b> to map where water is — and isn’t.</li>
        <li><b>Infrared thermal imaging</b> to spot hidden moisture behind finished surfaces.</li>
        <li><b>Sampling where it’s warranted</b> — air samples compared against an outdoor control, plus swab, tape or bulk samples sent to an independent lab.</li>
        <li><b>Soils and water-table context</b> for the property, which often explains a damp basement.</li>
      </ul>
      <h2>The report</h2>
      <p>You receive a written investigation report: an executive summary and priority findings, room-by-room observations with photos, the lab results with an explanation of what they mean, and specific recommendations. The full laboratory report is included as an appendix.</p>
      <div class="note">Lab data is one data point, not a diagnosis. Air samples are a snapshot in time; we interpret them alongside the building history, what we see and measure on site, and years of experience.</div>
      <h2>Testing we perform</h2>
      <ul class="list-cols">
        <li>Air sampling (spore trap)</li><li>Swab, tape and bulk samples</li><li>Species-level testing</li><li>ERMI &amp; HERTSMI-2</li><li>Mycotoxins</li><li>Bacteria / sewage</li><li>VOCs &amp; formaldehyde</li><li>Nicotine</li><li>Clearance testing</li><li>Hidden-mold investigations</li>
      </ul>
      <h2>Who it’s for</h2>
      <p>Homeowners and renters with odors, visible growth or unexplained symptoms; buyers and realtors before closing; property managers and landlords who need documentation; and anyone who wants an honest second opinion before paying for remediation.</p>`,
    side: sideList('You’ll get', ['A walk-through of what we found, on site', 'A written report with photos', 'Lab results, explained', 'Clear next steps — including “you don’t need us”']),
    faqs: [
      ['Is an inspection worth it if I can already see mold?', 'Often, yes. What you see is usually the symptom. An investigation finds the moisture source and the extent of the problem, so the remediation scope is right the first time — not too small to work, and not bigger than it needs to be.'],
      ['Can you test for mold behind walls without opening them?', 'Moisture mapping and thermal imaging can find hidden wet areas, and air sampling can point to hidden reservoirs. None of these is perfect; where it matters, we may recommend a small, controlled inspection opening.'],
      ['How long does it take?', 'Most homes take a few hours on site. Lab results typically come back within a few business days, and the report follows.'],
    ],
  }),

  servicePage({
    slug: 'mold-remediation',
    title: 'Mold Removal & Remediation in NJ | Nash Everett',
    description: 'Contained, HEPA-filtered mold remediation with a detailed written scope, daily Client Connect updates, and safe protocols for chemical-sensitive families. Jersey Shore, NJ.',
    h1: 'Mold removal done the right way.',
    lede: 'We remove the problem — physically, under containment — and fix the moisture that caused it. Spraying chemicals over mold is not remediation, and it isn’t safe.',
    body: `
      <h2>How we remediate</h2>
      <p>Every project follows a written, site-specific scope. If we find more once materials are opened, we document it and get your approval before doing anything extra.</p>
      <ul>
        <li><b>Containment and negative air</b> to keep the work area isolated from the rest of the house.</li>
        <li><b>HEPA air filtration</b> running throughout the job.</li>
        <li><b>Removal of affected materials</b> that can’t be effectively cleaned — drywall, insulation, carpet.</li>
        <li><b>Detailed cleaning</b>: HEPA vacuuming and damp wiping of remaining surfaces, then thorough drying.</li>
        <li><b>Worker protection</b>: P100 respirators, protective suits and gloves.</li>
        <li><b>Moisture correction</b> so it doesn’t come back — ventilation, dehumidification, drainage.</li>
      </ul>
      <h2>Safe for chemical-sensitive families</h2>
      <p>We are in the business of creating healthy homes. Biocides, fogging and coatings are not a substitute for removing affected material and settled particulate, so we don’t rely on them. We design a cleaning protocol that’s right for your family, and we specialize in working with mold- and chemical-sensitive people.</p>
      <h2>Detailed scope. Simple price.</h2>
      <p>Your proposal describes each work area — what we’ll do and the approximate quantities — and prices the complete scope as one project. Anything beyond that scope needs your approval first.</p>
      <h2>Every day, you’ll know</h2>
      <p>With <b>Client Connect</b>, you get a written update each workday — the work performed, important observations and any new conditions — plus a live photo album you can follow throughout the project.</p>
      <div class="note">Contracted areas are guaranteed against new mold growth for up to three years when an approved ventilation and/or dehumidification device is installed, subject to warranty exclusions.</div>`,
    side: sideList('Every project includes', ['Written scope before work starts', 'Containment &amp; HEPA filtration', 'Daily Client Connect updates', 'Your approval before any added work', 'Fully insured, NJ HIC #' + COMPANY.license]),
    faqs: [
      ['Do I need to leave my house during remediation?', 'Usually not. The work area is sealed off and kept under negative pressure, so the rest of the home stays usable. You and your guests must stay out of the contained area while work is underway.'],
      ['Is clearance testing included?', 'Clearance testing is arranged separately. Let us know in advance whether Nash Everett or an independent third party will perform it, so equipment and scheduling can be coordinated.'],
      ['Do you do rebuild work?', 'Our remediation scope covers removal, cleaning and moisture correction. Rebuild and reconstruction are not included unless specifically quoted.'],
    ],
  }),

  servicePage({
    slug: 'moisture-management',
    title: 'Moisture Management & Leak Detection in NJ | Nash Everett',
    description: 'Without moisture there is no mold. Nash Everett finds and corrects hidden moisture — gutters, grading, plumbing, condensation, humidity — across the Jersey Shore.',
    h1: 'No moisture, no mold.',
    lede: 'Finding the water can be tough. Whether it’s a simple gutter correction or a hidden condition inside a wall, we’ll find it — and fix it so mold doesn’t come back.',
    body: `
      <h2>Where the water comes from</h2>
      <ul>
        <li><b>Outside</b>: gutters, downspouts, grading, window and door flashing, foundation cracks.</li>
        <li><b>Plumbing</b>: slow leaks, sweating pipes, failing supply lines and fixtures — sometimes visible only as a high water bill.</li>
        <li><b>Air</b>: high indoor humidity, poor bathroom and kitchen ventilation, condensation on cold surfaces.</li>
        <li><b>Ground</b>: high water tables and wet soils under basements and crawl spaces.</li>
        <li><b>Events</b>: basement floods, sewage backups and burst pipes.</li>
      </ul>
      <h2>How we find it</h2>
      <p>Moisture meters, humidity and temperature readings, and infrared thermal imaging let us trace water without tearing into the house. We also look up the soils and water table for your property, which often explains a chronically damp basement.</p>
      <h2>How we fix it</h2>
      <ul class="list-cols">
        <li>Dehumidification</li><li>Bathroom ventilation</li><li>Vapor barriers</li><li>Sump, ejector and backup pumps</li><li>HVAC wrapping</li><li>Structural drying</li><li>Gutter and drainage corrections</li><li>Crawl space encapsulation</li>
      </ul>`,
    side: sideList('Signs of a moisture problem', ['Musty smell in one area', 'Peeling paint or bubbling drywall', 'Condensation on windows or pipes', 'Damp or efflorescent basement walls', 'An unexplained high water bill']),
  }),

  servicePage({
    slug: 'crawl-space-encapsulation',
    title: 'Crawl Space Encapsulation in NJ | Nash Everett',
    description: 'Turn a damp, musty crawl space into a sealed, dry space: vapor barrier, air sealing and dehumidification. Nash Everett, Jersey Shore NJ.',
    h1: 'Would you take a deep breath in your crawl space?',
    lede: 'For many homes it’s a dark, damp, moldy problem right under the living space — and the air down there moves up into the house. Encapsulation turns it into a clean, dry part of your home.',
    body: `
      <h2>Why it matters</h2>
      <p>Your home is your largest investment. An ignored crawl space can cause rot, pest problems and poor air quality upstairs — slowly, and expensively. Hoping it goes away isn’t a plan.</p>
      <h2>What encapsulation does</h2>
      <p>Think of an encapsulated crawl space like a small finished basement: layers of protective material make it waterproof, air-sealed and moisture-resistant.</p>
      <ul>
        <li><b>A completely dry environment</b> — no more damp soil or standing water.</li>
        <li><b>Lower utility bills</b> — less heat lost in and out of the crawl space.</li>
        <li><b>Fewer pests</b> — no access to water, dirt or exposed wood.</li>
        <li><b>Usable storage</b> — a clean space you can actually use.</li>
      </ul>
      <h2>What’s involved</h2>
      <ul class="list-cols">
        <li>Mold remediation where needed</li><li>Insulation removal</li><li>Heavy vapor barrier</li><li>Sealing vents and rim joists</li><li>Dehumidification</li><li>Sump pump where needed</li><li>Crawl hatch construction</li>
      </ul>`,
    side: sideList('Signs it’s time', ['Musty smell on the first floor', 'Cold or damp floors', 'Sagging insulation or wet soil', 'Pests, or wood that feels soft']),
  }),

  servicePage({
    slug: 'indoor-health-assessment',
    title: 'Indoor Air Quality Testing, Ventilation & Duct Cleaning in NJ | Nash Everett',
    description: 'It’s not always mold. Nash Everett tests for VOCs, formaldehyde, odor, nicotine and allergens, and improves ventilation, air purification and ductwork.',
    h1: 'It’s not always mold.',
    lede: 'Headaches at home, odors you can’t place, allergies that ease when you travel. We investigate the air in your home as a whole — and fix what we find.',
    body: `
      <h2>What we test for</h2>
      <ul class="list-cols">
        <li>Mold &amp; spores</li><li>VOCs (EPA TO-15)</li><li>Formaldehyde</li><li>Petroleum</li><li>Nicotine</li><li>Allergens</li><li>Bacteria</li><li>Odors</li><li>Water quality</li>
      </ul>
      <h2 id="ventilation">Ventilation &amp; air purification</h2>
      <p>Most indoor air problems are made worse by air that doesn’t move. We assess how your home breathes — bathroom and kitchen exhaust, fresh air, humidity control — and recommend ventilation, dehumidification or air purification that fits the house.</p>
      <h2 id="ducts">Duct cleaning</h2>
      <p>Ductwork collects dust, debris and sometimes mold, then spreads it to every room. We recommend cleaning:</p>
      <ul>
        <li>On average every three to five years.</li>
        <li>When you move into a new home, or after building one.</li>
        <li>After a remodeling project.</li>
        <li>If you have pets that shed fur and dander.</li>
      </ul>
      <h2>Odor and nicotine remediation</h2>
      <p>Smoke, pet and musty odors live in materials, not just the air. We find where they’re held and treat the source — content cleansing, environment cleanse and nicotine remediation — rather than masking it.</p>`,
    side: sideList('Good for', ['Unexplained symptoms at home', 'New homes &amp; remodels', 'Smoke or pet odors', 'Allergy and chemical sensitivity']),
  }),
];
