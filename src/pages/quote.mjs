import { COMPANY, icon } from '../site.mjs';

const choice = (type, name, value, label = value) =>
  `<label class="choice"><input type="${type}" name="${name}" value="${value}"><span>${label}</span></label>`;

// The quote request. Without a backend it composes an email to Gary (site.js); with
// JavaScript off, the browser's own mailto form handling is the fallback.
export const quoteForm = () => `
<form class="card" id="quote-form" action="mailto:${COMPANY.email}" method="post" enctype="text/plain" novalidate>
  <h3>Request a quote</h3>
  <p class="muted" style="margin:0">Takes a minute. Gary will get back to you, usually the same day.</p>
  <fieldset>
    <legend>What do you need?</legend>
    <div class="choices">
      ${choice('radio', 'need', 'Mold inspection / testing')}
      ${choice('radio', 'need', 'Mold removal')}
      ${choice('radio', 'need', 'Water or moisture problem')}
      ${choice('radio', 'need', 'Air quality / ventilation')}
      ${choice('radio', 'need', 'Crawl space')}
      ${choice('radio', 'need', 'Not sure')}
    </div>
  </fieldset>
  <fieldset>
    <legend>What are you noticing? <span style="text-transform:none;letter-spacing:0;font-weight:500">(any that apply)</span></legend>
    <div class="choices">
      ${choice('checkbox', 'signs', 'Musty odor')}
      ${choice('checkbox', 'signs', 'Visible mold')}
      ${choice('checkbox', 'signs', 'Health symptoms')}
      ${choice('checkbox', 'signs', 'Leak or flood')}
      ${choice('checkbox', 'signs', 'Buying / selling')}
    </div>
  </fieldset>
  <div class="two">
    <div><label class="f" for="q-name">Name</label><input type="text" id="q-name" name="name" autocomplete="name" required></div>
    <div><label class="f" for="q-phone">Phone</label><input type="tel" id="q-phone" name="phone" autocomplete="tel" required></div>
  </div>
  <label class="f" for="q-email">Email <span style="text-transform:none;letter-spacing:0;font-weight:500">(optional)</span></label>
  <input type="email" id="q-email" name="email" autocomplete="email">
  <label class="f" for="q-address">Property address</label>
  <input type="text" id="q-address" name="address" autocomplete="street-address" placeholder="Street, town">
  <label class="f" for="q-notes">Anything else?</label>
  <textarea id="q-notes" name="notes" placeholder="Where in the house, how long, anything you’ve already tried…"></textarea>
  <div class="form-foot">
    <p class="msg" id="quote-msg" role="status" hidden></p>
    <button class="button block" type="submit">Send request ${icon('right')}</button>
    <p class="small" style="margin:0;text-align:center">Prefer to talk? Call or text <a href="${COMPANY.phoneHref}">${COMPANY.phone}</a></p>
  </div>
</form>`;

/** The dark "get started" band: contact details next to the form. */
export const quoteSection = () => `
<section class="band dark" id="quote">
  <div class="wrap quote">
    <div>
      <span class="eyebrow" style="color:#ff9a5c">Get started</span>
      <h2>Tell us what’s going on.</h2>
      <p class="lede">Every home has a story. Whether it’s a smell that won’t go away, a stain on the ceiling or a family member who feels better away from home — start there.</p>
      <ul class="contact-list">
        <li><span class="ico">${icon('phone')}</span><div><a href="${COMPANY.phoneHref}">${COMPANY.phone}</a><span>Gary’s cell — call or text</span></div></li>
        <li><span class="ico">${icon('mail')}</span><div><a href="mailto:${COMPANY.email}">${COMPANY.email}</a><span>Photos welcome</span></div></li>
        <li><span class="ico">${icon('pin')}</span><div><a href="https://maps.google.com/?q=${encodeURIComponent(`${COMPANY.street}, ${COMPANY.city}, ${COMPANY.state} ${COMPANY.zip}`)}" rel="noopener">${COMPANY.street}</a><span>${COMPANY.city}, ${COMPANY.state} ${COMPANY.zip}</span></div></li>
      </ul>
    </div>
    ${quoteForm()}
  </div>
</section>`;
