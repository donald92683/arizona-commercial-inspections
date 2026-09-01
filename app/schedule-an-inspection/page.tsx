import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { ContactForm } from "../contact-us/ContactForm";

export const metadata: Metadata = {
  title: "Schedule an Inspection - Arizona Commercial Property Inspections",
  description: "Schedule a commercial property inspection anywhere in Arizona.",
};

export default function ScheduleAnInspectionPage() {
  return <>
    <SiteHeader />
    <main id="main-content" className="contactPage scheduleInspectionPage">
      <section className="contactHero"><div><h1>SCHEDULE AN INSPECTION</h1></div></section>
      <ContactForm ariaLabel="Schedule an Arizona commercial property inspection" />
    </main>
    <SiteFooter />
  </>;
}
