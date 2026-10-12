import { COMPANY, SERVICES, icon, logo, leaf, ctaBand } from '../site.mjs';
import { quoteSection } from './quote.mjs';

const sampleReport = () => `
<div class="hero-visual">
  <div class="report" role="img" aria-label="An example of a Nash Everett investigation report: priority findings by room, with moisture, humidity and temperature readings.">
    <span class="report-tag">Sample</span>
    <div class="report-head">${logo('')}<span class="small muted">Investigation report</span></div>
    <div class="report-body">
      <h4>Priority findings</h4>
      <div class="finding"><div><b>Basement — north wall</b><span class="small">Elevated moisture behind finished drywall</span></div><span class="pill warn">Act now</span></div>
      <div class="finding"><div><b>Bedroom 2 — closet ceiling</b><span class="small">Visible growth, roof leak above</span></div><span class="pill bad">Remediate</span></div>
      <div class="finding"><div><b>Attic</b><span class="small">Ventilation and sheathing dry</span></div><span class="pill ok">Normal</span></div>
      <div class="readings">
        <div class="reading hot"><span>Moisture</span><b>38%</b></div>
        <div class="reading hot"><span>RH</span><b>71%</b></div>
        <div class="reading"><span>Temp</span><b>64°F</b></div>
      </div>
    </div>
  </div>
  <div class="float-note"><span class="dot">${icon('camera')}</span><span><b>Client Connect</b><br><span class="small">Today’s update sent · 12 photos</span></span></div>
</div>`;

const services = () => {
  const [first, ...rest] = SERVICES;
  const card = (s, feature = false) => `
    <a class="card svc${feature ? ' feature' : ''}" href="/${s.slug}/">
      <span class="ico">${icon(s.icon)}</span>
      <h3>${s.name}</h3>
      <p>${s.blurb}</p>
      <span class="more">Learn more ${icon('right')}</span>
    </a>`;
  return card(first, true) + rest.map((s) => card(s)).join('');
};

const body = `
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow">Mold · Moisture · Indoor air quality</span>
      <h1>Every home has a story. <em>Nash Everett listens.</em></h1>
      <p class="lede">Owner-operated mold investigation and remediation on the Jersey Shore. We find the cause, show you the evidence, and recommend only the work it supports.</p>
      <div class="actions">
        <a class="button" href="/contact/#quote">Request a quote ${icon('right')}</a>
        <a class="button secondary" href="${COMPANY.phoneHref}">${icon('phone')} ${COMPANY.phone}</a>
      </div>
      <ul class="assure">
        <li>${icon('check')} Owner on every job</li>
        <li>${icon('check')} Fully insured</li>
        <li>${icon('check')} Chemical-sensitive safe</li>
      </ul>
    </div>
    ${sampleReport()}
  </div>
</section>

<section class="strip" aria-label="At a glance">
  <div class="wrap">
    <ul>
      <li><span class="ico">${icon('clock')}</span><div><b>~15 years</b><span>of mold &amp; moisture work</span></div></li>
      <li><span class="ico">${icon('home')}</span><div><b>Thousands</b><span>of homes investigated</span></div></li>
      <li><span class="ico">${icon('person')}</span><div><b>Owner-operated</b><span>Gary answers his own phone</span></div></li>
      <li><span class="ico">${icon('shield')}</span><div><b>Up to 3 years</b><span>mold-growth guarantee*</span></div></li>
    </ul>
  </div>
</section>

<section class="band" id="services">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Services</span>
      <h2>From the first musty smell to clean air again.</h2>
      <p class="lede">Every job starts with understanding the building. Then we fix what the evidence says is wrong — and nothing it doesn’t.</p>
    </div>
    <div class="grid g3">${services()}
      <a class="card svc wide" href="/contact/#quote">
        <span class="ico">${icon('chat')}</span>
        <div style="flex:1"><h3>Not sure where to start?</h3>
        <p>Tell us what you’re seeing, smelling or feeling. We’ll tell you honestly whether you need us — and what to do first.</p></div>
        <span class="more">Ask Gary ${icon('right')}</span>
      </a>
    </div>
    <p class="small" style="margin:24px 0 0">* Contracted areas are guaranteed against new mold growth for up to three years when an approved ventilation and/or dehumidification device is installed, subject to warranty exclusions.</p>
  </div>
</section>

<section class="band alt" id="process">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">How it works</span>
      <h2>A clear process, in writing, at every step.</h2>
    </div>
    <ol class="steps">
      <li>
        <h3>Talk it through</h3>
        <p>Call or send a request. We ask the right questions — history, symptoms, leaks, odors — and tell you what an investigation would involve.</p>
      </li>
      <li>
        <h3>Investigate</h3>
        <p>A room-by-room visit with moisture meters, thermal imaging and sampling where it’s warranted. We look for the cause, not just the stain.</p>
        <div class="chips"><span>Moisture</span><span>RH &amp; temp</span><span>Air &amp; swab samples</span><span>Thermal</span></div>
      </li>
      <li>
        <h3>Report &amp; proposal</h3>
        <p>A written report with photos, lab results and recommendations. If work is needed, a proposal with a detailed scope and one clear price.</p>
        <div class="chips"><span>Findings</span><span>Lab results</span><span>Scope</span></div>
      </li>
      <li>
        <h3>Fix it, and prove it</h3>
        <p>Contained remediation and moisture correction, with a daily update and live photo album until the job is done.</p>
        <div class="chips"><span>Containment</span><span>HEPA</span><span>Daily updates</span></div>
      </li>
    </ol>
  </div>
</section>

<section class="band dark">
  <div class="wrap split">
    <div>
      <span class="eyebrow" style="color:#ff9a5c">Client Connect</span>
      <h2>You’ll never wonder what happened at your house today.</h2>
      <p class="lede">Every workday you get an update: the work performed, what we observed, and any new conditions — with a live photo album you can follow from anywhere.</p>
      <ul class="ticks">
        <li>${icon('check')}<div><b>Daily written updates</b><span>Work done, observations and anything that needs your decision.</span></div></li>
        <li>${icon('check')}<div><b>A live photo album</b><span>See containment, demolition and cleaning as it happens.</span></div></li>
        <li>${icon('check')}<div><b>No surprise scope</b><span>If opening a wall reveals more, we document it and ask before doing anything extra.</span></div></li>
      </ul>
    </div>
    <div class="update" aria-hidden="true">
      <div class="update-head"><span class="av">${leaf()}</span><div><b>Nash Everett · Day 2</b><span>Today, 4:52 PM</span></div></div>
      <ul>
        <li>Containment and negative air holding in the basement.</li>
        <li>Removed lower 2 ft of drywall on the north wall; framing is sound.</li>
        <li>Found a slow drip at the hose bib — photos attached. We’ll call before quoting a fix.</li>
      </ul>
      <div class="thumbs"><i></i><i></i><i></i><i>+9</i></div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="head center">
      <span class="eyebrow">Why Nash Everett</span>
      <h2>The right recommendation is the one the evidence supports.</h2>
    </div>
    <div class="grid g3">
      <div class="card value">
        <h3>Experience</h3>
        <p>About 15 years of hands-on mold, moisture and remediation work across thousands of projects — and years of seeing what’s really inside walls when they’re opened.</p>
      </div>
      <div class="card value">
        <h3>Communication</h3>
        <p>You’ll know what we found, what we recommend and why. Reports explain the lab results in plain language, and daily updates keep you in the loop.</p>
      </div>
      <div class="card value">
        <h3>Integrity</h3>
        <p>We take the same care with your home we’d expect with our own: open communication, work recommended only when it’s warranted, and doing what we say.</p>
      </div>
    </div>
  </div>
</section>

<section class="band alt" id="reviews">
  <div class="wrap">
    <div class="head center">
      <span class="eyebrow">Reviews</span>
      <h2>What homeowners say.</h2>
    </div>
    <div class="grid g3">
      <figure class="card review big">
        <span class="mark" aria-hidden="true">“</span>
        <div>
          <blockquote>I had been hesitant at first to spend a couple hundred dollars to have an inspection done, but in the end it saved me from paying more than a hundred thousand dollars and a huge mistake. Thank you Gary, I am so grateful!</blockquote>
          <footer style="margin-top:14px"><span class="stars" aria-label="5 stars">★★★★★</span><span>Nash Everett client</span></footer>
        </div>
      </figure>
      <figure class="card review">
        <span class="stars" aria-label="5 stars">★★★★★</span>
        <blockquote>Extremely thorough and knowledgeable! From the moment he picked up the phone, listened to my problems, and ran me through different test options, I knew this guy was the real deal. He is honest and isn’t trying to swindle you like other guys in the business. He stayed for 3+ hours completing multiple tests to get to the bottom of the issue.</blockquote>
        <footer><span class="av">M</span><div><b>Meredith C.</b><span>Air quality investigation</span></div></footer>
      </figure>
      <figure class="card review">
        <span class="stars" aria-label="5 stars">★★★★★</span>
        <blockquote>Highly recommended. He was very helpful on the phone, asked questions to better understand our needs, and arrived promptly. While at our house he walked us through each step of the process and answered all of our questions — then walked us through how to read the report.</blockquote>
        <footer><span class="av">N</span><div><b>Nick A.</b><span>Air quality testing</span></div></footer>
      </figure>
      <figure class="card review">
        <span class="stars" aria-label="5 stars">★★★★★</span>
        <blockquote>After moving into a new apartment and my son being sick, I was looking into a mold inspection. As soon as the conversation started I was comfortable. They knew exactly what questions to ask and were very informative. I was completely satisfied with my decision.</blockquote>
        <footer><span class="av">R</span><div><b>Rebecca S.</b><span>Wall Township</span></div></footer>
      </figure>
    </div>
    <div class="review-links">
      <a class="button secondary sm" href="https://www.google.com/search?q=nash+everett+reviews" rel="noopener">Read more on Google</a>
      <a class="button secondary sm" href="https://www.homeadvisor.com/rated.NashEveretteLLC.97810950.html" rel="noopener">HomeAdvisor</a>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="owner card" style="padding:clamp(24px,4vw,40px)">
      <div class="monogram">${leaf()}</div>
      <div>
        <span class="eyebrow">A note from the owner</span>
        <p class="lede" style="color:var(--ink)">We value your time, we respect your property, and most importantly we do the job right. Every person and every house is different, so every project starts with listening. Feel free to call my personal cell with any questions about your environment.</p>
        <div class="sig">Gary Szymanski</div>
        <p class="small" style="margin:0">Owner &amp; Project Manager · <a href="${COMPANY.phoneHref}">${COMPANY.phone}</a> · <a href="/about/">More about Gary</a></p>
      </div>
    </div>
  </div>
</section>

${quoteSection()}

<section class="band alt">
  <div class="wrap split">
    <div>
      <span class="eyebrow">Service area</span>
      <h2>Based in Ocean, NJ. Serving the Shore and beyond.</h2>
      <p class="lede">Homes, rentals and small commercial buildings across Monmouth and Ocean counties, with investigations and consulting throughout New Jersey.</p>
      <div class="towns">
        <span>Belmar</span><span>Wall</span><span>Asbury Park</span><span>Long Branch</span><span>Red Bank</span><span>Middletown</span><span>Holmdel</span><span>Freehold</span><span>Manasquan</span><span>Spring Lake</span><span>Point Pleasant</span><span>Brick</span><span>Toms River</span>
      </div>
    </div>
    <div class="card">
      <h3 style="margin-bottom:12px">Who we work with</h3>
      <ul class="ticks" style="margin:0">
        <li>${icon('home')}<div><b>Homeowners &amp; renters</b><span>Odors, visible growth, health concerns, past leaks.</span></div></li>
        <li>${icon('search')}<div><b>Home buyers &amp; realtors</b><span>Pre-purchase investigations before you commit.</span></div></li>
        <li>${icon('layers')}<div><b>Property managers &amp; landlords</b><span>Turnover checks, tenant concerns, documentation.</span></div></li>
      </ul>
    </div>
  </div>
</section>

${ctaBand()}
`;

export default {
  path: '/',
  title: 'Mold Removal & Indoor Air Quality, Jersey Shore | Nash Everett',
  description: 'Owner-operated mold investigation, testing, remediation and moisture management in Monmouth and Ocean counties, NJ. Call Gary at 732-508-9197.',
  home: true,
  body,
};
