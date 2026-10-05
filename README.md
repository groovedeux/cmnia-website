# Central Minnesota Insurance Agency website

Portable copy of the four-page public cmnia.com website, recovered September 25, 2026 at Austin's direction. Original design, content, photos, logos, Bootstrap styles and product sections are preserved. No build framework or server is needed for the pages.

## Pages

- `/index.html` — home, four-photo carousel, personal/commercial product links.
- `/about_us.html` — agency overview, team photograph and agent contact details.
- `/services.html` — expandable product descriptions and carrier links/logos.
- `/contact_us.html` — contact form, address, phone and map. The former `/contact_us.php` redirects here on Netlify.
- `/thank-you.html` — non-JavaScript submission confirmation, excluded from search indexing.

The original slide-out Request a Quote panel is included on every page. Both forms use Netlify Forms, with email notifications configured for Ruth and Austin. Notification recipients are managed in the hosting account, not established by an HTML field.

## Preview

Run `python3 -m http.server 8842 --directory public` and open http://localhost:8842. Local previews explicitly refuse to send forms. No PHP, secrets or customer submission records are included.

## Hosting status and release steps

Netlify is selected and the site is live at https://cmnia.netlify.app/. This repository's `main` branch automatically deploys the `public` directory with no build command. The current update replaces the team photograph with Office 2025 and updates the About page and quote-widget agent lists at Austin's request. These content changes await human PR review; the custom-domain cutover is still pending.

For Netlify:

1. Obtain human approval of the content PR, merge it into `main`, and verify the new photo and agent lists load at https://cmnia.netlify.app/ before changing DNS.
2. Verify `contact` and `quote` remain detected in Netlify Forms after deployment.
3. Verify the existing Ruth and Austin email notifications remain enabled for both forms. Both forms include an email field for Reply-To and distinct inquiry subjects. Netlify handles server-side submission processing and spam filtering, with a honeypot included in each form.
4. Test both forms with clearly synthetic data and confirm actual inbox delivery with Ruth. Also test invalid inputs, errors, keyboard/mobile navigation, carousel and product accordions. Do not interpret a client-side success message as proof of inbox delivery.
5. Review current text/photos and footer. The incumbent hosting credit and incumbent privacy-policy link were removed because they describe the old provider; approve an agency-appropriate privacy notice before the custom-domain launch. Legacy analytics and the HTTP scroll-widget dependency were removed; Maps, carrier links and Facebook profile link remain. The About page retains the Facebook Page plugin and its HTTPS SDK loader. jQuery is now one local 3.7.1 copy. Agent roster changes reflect Austin's request, rather than independent verification of staffing.
6. Check current free-plan traffic allowances and repository eligibility.
7. After the approved content is verified on Netlify, add `cmnia.com` and `www.cmnia.com`, follow Netlify's exact DNS instructions, and verify HTTPS and the old contact URL. Preserve Porkbun nameservers, all email records, enrollment and notification hostnames. Keep the old website origin available for rollback.
8. Cancel only Pinnacle's old website hosting after acceptance and confirmation that no other service is bundled.

## Source provenance

Public source: https://cmnia.com/ (four navigation pages plus the rendered `/sliding-contact-form/form.php` and referenced assets), captured September 25, 2026. Downloading rendered pages does not recover private PHP source, stored submissions, or credentials. No existing form was submitted during capture.

Original assets retain their ownership and embedded license notices; this repository grants no new license to them. Public source availability does not itself grant reuse rights. The migration is at the agency owner's direction; any separate incumbent asset-license restrictions remain to confirm.
