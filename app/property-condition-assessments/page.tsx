import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { AssessmentAccordion } from "./AssessmentAccordion";

const uploads = "/uploads/";

export const metadata: Metadata = {
  title: "Property Condition Assessments - Arizona Commercial Property Inspections",
  description: "Professional property condition assessments, cost-to-cure analysis, capital reserve studies, and opinion-of-cost reports throughout Arizona.",
};

export default function PropertyConditionAssessmentsPage() {
  return <>
    <SiteHeader active="services" />
    <main id="main-content" className="pcaPage">
      <section className="pcaHero"><div><h1>PROPERTY CONDITION<br />ASSESSMENTS</h1></div></section>
      <section className="pcaOverview">
        <div className="pcaImageColumn">
          <img src={uploads + "2024/02/wall-3701557_960_720.jpg"} alt="Phoenix Property Condition Assessments" />
          <a className="blackButton" href="tel:1-480-808-1170">(480) 808-1170</a>
        </div>
        <div className="pcaCopy">
          <h2>Your Premier<br />Partner for Expert<br />Assessments</h2>
          <p>At Arizona Commercial Property Inspections, we’re dedicated to offering top-tier Property Condition Assessment (PCA) services, designed to furnish you with a deep understanding of your commercial property’s status. Our seasoned professionals are committed to delivering precise, comprehensive reports, aiding you in navigating your real estate investments with confidence.</p>
        </div>
        <AssessmentAccordion />
      </section>
      <section className="pcaBooking">
        <h2>BOOK YOUR CONDITION ASSESSMENT</h2>
        <p>Choose Arizona Commercial Property Inspections for comprehensive PCA services that delve deeper, offering the insights necessary to strategize for your commercial property. Reach out to us today to arrange a consultation and discover the professionalism and commitment that distinguish us. Your property’s prosperity is our top concern.</p>
        <a className="blackButton" href="/schedule-an-inspection/">SCHEDULE ONLINE</a>
      </section>
      <section className="pcaAreas">
        <h2>ARIZONA PROPERTY CONDITION<br />ASSESSMENTS</h2>
        <p>Providing property condition assessments in the <Link href="/">Phoenix Metro Area</Link> as well as <Link href="/about-us/">Tucson</Link>, <Link href="/inspection-services/">Flagstaff</Link>, <Link href="/property-condition-assessments/">Prescott</Link>, <Link href="/showlow-az-commercial-building-inspections/">Showlow</Link>, <Link href="/kingman-arizona-commercial-building-inspections/">Kingman</Link>, <Link href="/yuma-az-commercial-inspections/">Yuma</Link>, <Link href="/payson-az-commercial-building-inspections/">Payson</Link>, and <Link href="/lake-havasu-arizona-commercial-building-inspections/">Lake Havasu</Link>. If you need a commercial property inspection anywhere in Arizona, give us a call.</p>
      </section>
    </main>
    <SiteFooter />
  </>;
}
