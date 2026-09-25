# Central Minnesota Insurance Agency website

Portable copy of the four-page public cmnia.com website, recovered September 25, 2026 at Austin's direction. Original design, content, photos, logos, Bootstrap styles and product sections are preserved. No build framework or server is needed for the pages.

## Pages

- `/index.html` — home, four-photo carousel, personal/commercial product links.
- `/about_us.html` — agency overview, team photograph and agent contact details.
- `/services.html` — expandable product descriptions and carrier links/logos.
- `/contact_us.html` — contact form, address, phone and map. The former `/contact_us.php` redirects here on Netlify.
- `/thank-you.html` — non-JavaScript submission confirmation, excluded from search indexing.

The original slide-out Request a Quote panel is included on every page. Both forms are prepared for Netlify Forms; the intended notification recipient is **ruth@cmnia.com**. The recipient must be configured in the hosting account; it is not established by an HTML field.

## Preview

Run `python3 -m http.server 8842 --directory public` and open http://localhost:8842. Local previews explicitly refuse to send forms. No PHP, secrets or customer submission records are included.

## Hosting status and release steps

Netlify is proposed, not yet selected by Austin. No production deployment, domain cutover or live form test has occurred. The static pages can move to another host; its form handling and redirects would need equivalent configuration.

For Netlify:

1. Connect this repository and select the reviewed `main` branch; publish directory `public`, no build command.
2. Enable automatic form detection, deploy, and verify `contact` and `quote` appear in Forms.
3. Set Forms → Submission notifications → Email → **ruth@cmnia.com** for all forms. Both forms include an email field for Reply-To and distinct inquiry subjects. Netlify handles server-side submission processing and spam filtering, with a honeypot included in each form.
4. Test both forms with clearly synthetic data and confirm actual inbox delivery with Ruth. Also test invalid inputs, errors, keyboard/mobile navigation, carousel and product accordions. Do not interpret a client-side success message as proof of inbox delivery.
5. Review current text/photos and footer. The incumbent hosting credit and incumbent privacy-policy link were removed because they describe the old provider; approve an agency-appropriate privacy notice before public release. Legacy analytics, Facebook SDK and the HTTP scroll-widget dependency were removed; Maps, carrier links and Facebook profile link remain. jQuery is now one local 3.7.1 copy. Agent roster/copy is preserved as requested, not asserted current.
6. Check current free-plan traffic allowances and repository eligibility. A public website-only repository avoids requiring support for private organization repositories. Keep the company-brain repository private.
7. After human review, add `cmnia.com` and `www.cmnia.com`, follow Netlify's exact DNS instructions, and verify HTTPS and the old contact URL. Preserve Porkbun nameservers, all email records, enrollment and notification hostnames. Keep the old website origin available for rollback.
8. Cancel only the old website hosting after acceptance and confirmation that no other service is bundled.

## Source provenance

Public source: https://cmnia.com/ (four navigation pages plus the rendered `/sliding-contact-form/form.php` and referenced assets), captured September 25, 2026. Downloading rendered pages does not recover private PHP source, stored submissions, or credentials. No existing form was submitted during capture.

Original assets retain their ownership and embedded license notices; this repository grants no new license to them. Public source availability does not itself grant reuse rights. The migration is at the agency owner's direction; any separate incumbent asset-license restrictions remain to confirm.
