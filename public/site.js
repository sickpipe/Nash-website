// Phone menu, and the quote form: it composes an email to Gary with the answers.
(() => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (e) => {
      if (e.target.closest('a')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  const form = document.getElementById('quote-form');
  if (!form) return;
  const msg = document.getElementById('quote-msg');
  const say = (text, ok = false) => { msg.textContent = text; msg.className = ok ? 'msg ok' : 'msg'; msg.hidden = false; };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const name = (d.get('name') || '').trim();
    const phone = (d.get('phone') || '').trim();
    if (!name || !phone) {
      say('Please add your name and phone number so Gary can reach you.');
      (name ? form.phone : form.name).focus();
      return;
    }
    const need = d.get('need') || 'Not sure';
    const signs = d.getAll('signs');
    const lines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      d.get('email') && `Email: ${d.get('email')}`,
      d.get('address') && `Property: ${d.get('address')}`,
      `Looking for: ${need}`,
      signs.length && `Noticing: ${signs.join(', ')}`,
      d.get('notes') && `\n${d.get('notes')}`,
    ].filter(Boolean);
    const subject = `Quote request: ${need}${d.get('address') ? ' — ' + d.get('address') : ''}`;
    const href = `mailto:${form.action.replace(/^mailto:/, '')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n') + '\n\nSent from nasheverett.com')}`;
    window.location.href = href;
    say('Your email app should open with your request ready to send. If it didn’t, call or text 732-508-9197.', true);
  });
})();
