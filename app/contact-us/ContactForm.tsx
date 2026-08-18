import Link from "next/link";

export function ContactForm() {
  return <section className="contactFormSection" aria-label="Contact form">
    <form className="contactForm" action="mailto:arizonacpi@gmail.com" method="post" encType="text/plain">
      <label>First Name<input name="firstName" type="text" placeholder="First Name" autoComplete="given-name" /></label>
      <label>Last Name<input name="lastName" type="text" placeholder="Last Name" autoComplete="family-name" /></label>
      <label>Phone<input name="phone" type="tel" placeholder="Phone" autoComplete="tel" /></label>
      <label>Email *<span className="contactEmailField"><span aria-hidden="true">✉</span><input name="email" type="email" placeholder="Email" autoComplete="email" required /></span></label>
      <label className="contactConsent"><input name="transactionalConsent" type="checkbox" /><span>By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message &amp; Data rates may apply. Reply HELP for help or STOP to opt-out.</span></label>
      <label className="contactConsent"><input name="marketingConsent" type="checkbox" /><span>By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message &amp; Data rates may apply. Reply HELP for help or STOP to opt-out.</span></label>
      <button type="submit">Button</button>
      <p className="contactFormLegal"><Link href="/privacy-policy/">Privacy Policy</Link><span aria-hidden="true"> | </span><Link href="/terms-of-service/">Terms of Service</Link></p>
    </form>
  </section>;
}
