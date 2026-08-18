import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Arizona Commercial Property Inspections",
  description: "Contact Arizona Commercial Property Inspections to call, email, or request a commercial inspection anywhere in Arizona.",
};

const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380379.500621907!2d-111.9307474!3d34.16803495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08ebcb4c186b%3A0x423927b17fc1cd71!2sArizona!5e0!3m2!1sen!2sus!4v1707661456039!5m2!1sen!2sus";

export default function ContactUsPage() {
  return <>
    <SiteHeader />
    <main className="contactPage">
      <section className="contactHero"><div><h1>CONTACT US</h1></div></section>
      <ContactForm />
      <section className="contactMain">
        <div className="contactPanel">
          <div className="contactActions">
            <a className="contactAction" href="tel:1-480-808-1170">
              <i aria-hidden="true"><svg viewBox="0 0 32 32" focusable="false"><rect x="9" y="3" width="14" height="26" rx="2" /><path d="M13 6h6M15 26h2" /></svg></i><span><strong>CALL US</strong><small>(480) 808-1170</small></span>
            </a>
            <a className="contactAction" href="mailto:arizonacpi@gmail.com">
              <i aria-hidden="true"><svg viewBox="0 0 32 32" focusable="false"><rect x="3" y="7" width="26" height="18" rx="1" /><path d="m4 9 12 10L28 9M4 24l8-8m16 8-8-8" /></svg></i><span><strong>EMAIL US</strong><small>Click Here to Email</small></span>
            </a>
            <Link className="contactAction" href="/schedule-an-inspection/">
              <i aria-hidden="true"><svg viewBox="0 0 32 32" focusable="false"><rect x="4" y="7" width="24" height="21" rx="1" /><path d="M4 12h24M10 3v7m12-7v7" /></svg></i><span><strong>REQUEST AN INSPECTION</strong><small>Click Here to REQUEST</small></span>
            </Link>
          </div>
          <iframe className="contactMap" src={mapUrl} title="Map of Arizona" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
