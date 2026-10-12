import { COMPANY, icon, leaf, ctaBand } from '../site.mjs';
import { quoteSection } from './quote.mjs';

const about = {
  path: '/about/',
  title: 'About Gary Szymanski | Nash Everett',
  description: 'Nash Everett is owner-operated by Gary Szymanski: about 15 years of mold, moisture and indoor air quality work across thousands of New Jersey homes.',
  active: 'about',
  body: `
<section class="page-hero">
  <div class="wrap">
    <div class="crumb"><a href="/">Home</a> / About</div>
    <span class="eyebrow">About Nash Everett</span>
    <h1>An owner who answers his own phone.</h1>
    <p class="lede">Nash Everett is owner-operated by Gary Szymanski. When you call, you talk to the person who will investigate your home, write your report and manage your project.</p>
  </div>
</section>
<section class="band">
  <div class="wrap content-grid">
    <div class="prose">
      <h2>Gary Szymanski, Owner &amp; Project Manager</h2>
      <p>Gary has about 15 years of hands-on mold, moisture and remediation experience across thousands of projects, with a background in construction before that. His recommendations come from training — and from years of seeing firsthand what’s found when walls, floors and ceilings are actually opened.</p>
      <p>He’s the kind of investigator who stays for three hours to get to the bottom of a problem, explains what he’s doing as he goes, and tells you plainly when you don’t need to spend money.</p>
      <h2>Training</h2>
      <p>Gary has extensive professional instruction in the study of microbial organisms and building science, including:</p>
      <ul>
        <li>Environmental Solutions Association (ESA)</li>
        <li>Pro-Lab and MASLabs</li>
        <li>ENPRO University — Environmental Sampling for Insurance-Related Claims</li>
        <li>American Society of Professional Real Estate Inspectors</li>
        <li>MoldTech &amp; Moisture Management Assessment</li>
        <li>Air-Care — Air Duct Decontamination</li>
      </ul>
      <h2>How we work</h2>
      <p><b>Experience.</b> Every recommendation is grounded in what we’ve seen inside thousands of buildings.</p>
      <p><b>Communication.</b> Clear reports, plain-language lab results, and a daily Client Connect update with photos during every project.</p>
      <p><b>Integrity.</b> The right recommendation is the one the evidence supports. We recommend work only when we believe it’s warranted, and we do what we say we’ll do.</p>
    </div>
    <aside class="side">
      <div class="card" style="text-align:center">
        <div class="monogram" style="margin:0 auto 14px">${leaf()}</div>
        <h3>${COMPANY.legal}</h3>
        <p class="small" style="margin:6px 0 0">${COMPANY.street}<br>${COMPANY.city}, ${COMPANY.state} ${COMPANY.zip}</p>
      </div>
      <div class="card">
        <ul class="ticks" style="margin:0">
          <li>${icon('shield')}<span>Fully insured — certificate on request</span></li>
          <li>${icon('award')}<span>NJ Home Improvement Contractor #${COMPANY.license}</span></li>
          <li>${icon('leaf')}<span>Safe protocols for chemical-sensitive families</span></li>
        </ul>
      </div>
    </aside>
  </div>
</section>
${ctaBand('Have a question about your home?')}`,
};

const contact = {
  path: '/contact/',
  title: 'Contact & Free Quote | Nash Everett',
  description: `Request a quote for mold inspection, remediation or indoor air quality work, or call Gary directly at ${COMPANY.phone}. Ocean, NJ.`,
  active: 'contact',
  body: `
<section class="page-hero">
  <div class="wrap">
    <div class="crumb"><a href="/">Home</a> / Contact</div>
    <span class="eyebrow">Contact</span>
    <h1>Let’s talk about your home.</h1>
    <p class="lede">Call or text Gary directly, or send a request below and he’ll get back to you — usually the same day.</p>
    <div class="actions">
      <a class="button" href="${COMPANY.phoneHref}">${icon('phone')} Call ${COMPANY.phone}</a>
      <a class="button secondary" href="${COMPANY.sms}">${icon('chat')} Send a text</a>
    </div>
  </div>
</section>
${quoteSection()}`,
};

const notFound = {
  path: '/404.html',
  file: '404.html',
  title: 'Page not found | Nash Everett',
  description: 'The page you were looking for has moved.',
  body: `
<section class="page-hero" style="border:0">
  <div class="wrap">
    <span class="eyebrow">404</span>
    <h1>This page has moved.</h1>
    <p class="lede">Our website has a new look. Everything you need is a click away — or call Gary at ${COMPANY.phone}.</p>
    <div class="actions">
      <a class="button" href="/">Go to the home page</a>
      <a class="button secondary" href="/contact/">Contact us</a>
    </div>
  </div>
</section>`,
};

export default [about, contact, notFound];
