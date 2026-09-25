'use strict';
(() => {
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const panel = document.querySelector('.wrap-embed-contact-form');
  const toggle = panel?.querySelector('.btn-show-contact');
  function toggleQuote(open) {
    panel.classList.toggle('show-widget', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (open) panel.querySelector('input:not([type=hidden]):not([name=website])').focus();
    else toggle.focus();
  }
  toggle?.addEventListener('click', e => { e.preventDefault(); toggleQuote(!panel.classList.contains('show-widget')); });
  toggle?.addEventListener('keydown', e => { if (e.key === ' ') { e.preventDefault(); toggle.click(); } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel?.classList.contains('show-widget')) toggleQuote(false); });
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) window.jQuery('.carousel').carousel('pause');
  document.querySelectorAll('form[data-contact-form]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const button = form.querySelector('[type=submit]');
      const status = form.querySelector('.form-status, .form-message');
      status.classList.remove('hide', 'error');
      // Local and private previews must never claim to have delivered a message.
      const host = location.hostname;
      if (host !== 'cmnia.com' && host !== 'www.cmnia.com' && !host.endsWith('.netlify.app')) {
        status.classList.add('error');
        status.textContent = 'This preview does not send messages. Please use cmnia.com or call (320) 243-7403.';
        return;
      }
      button.disabled = true;
      status.textContent = 'Sending your message…';
      try {
        const body = new URLSearchParams(new FormData(form));
        const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
        if (!response.ok) throw new Error('Submission was not accepted');
        form.reset();
        status.textContent = 'Thank you! Your message has been submitted to our agency.';
      } catch {
        status.classList.add('error');
        status.textContent = 'Your message could not be sent. Please try again or email ruth@cmnia.com or call (320) 243-7403.';
      } finally { button.disabled = false; }
    });
  });
})();
