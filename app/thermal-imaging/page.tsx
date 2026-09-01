import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { ThermalAccordion } from "./ThermalAccordion";

const uploads = "/uploads/";

export const metadata: Metadata = {
  title: "Thermal Imaging - Arizona Commercial Property Inspections",
  description: "Arizona commercial thermal imaging services in Phoenix, Tucson, Flagstaff, Prescott, and throughout Arizona.",
};

export default function ThermalImagingPage() {
  return <>
    <SiteHeader active="services" />
    <main id="main-content" className="thermalPage">
      <section className="thermalHero"><div><h1>THERMAL IMAGING</h1></div></section>
      <section className="thermalOverview">
        <div className="thermalImageColumn">
          <img src={uploads + "2024/02/AdobeStock_293716326.jpg"} alt="Arizona Commercial Thermal Imaging" />
          <a className="blackButton" href="tel:1-480-808-1170">(480) 808-1170</a>
        </div>
        <div className="thermalCopy">
          <span>OUR CERTIFICATION</span>
          <h2>Innovative Thermal<br />Imaging Services</h2>
          <p>At Arizona Commercial Property Inspections, we blend innovation with precision to offer unparalleled thermal imaging surveys tailored for commercial properties. Our state-of-the-art Thermal Imaging Survey services equip property owners and managers with the essential insights needed to boost efficiency, cut down on energy expenses, and safeguard the longevity of vital systems.</p>
        </div>
        <ThermalAccordion />
      </section>
      <section className="thermalSummary">
        <h2>ADVANCED INSIGHT FOR A SAFER PROPERTY</h2>
        <p>Experience the cutting edge of property maintenance and safety with Arizona Commercial Property Inspections’ Thermal Imaging Survey services. Reach out to us today to book a consultation and leverage advanced thermal technology for your commercial property. Our dedication to excellence guarantees that your property stays ahead in innovation and safety.</p>
      </section>
      <section className="thermalBooking">
        <h2>BOOK YOUR THERMAL INSPECTION</h2>
        <p>Don’t miss the opportunity to safeguard your investment and optimize your property’s efficiency with Arizona Commercial Property Inspections’ advanced thermal imaging services. Booking your inspection today ensures you gain immediate insights into the health of your property, helping to prevent costly repairs, enhance energy efficiency, and protect your asset for the long term. Visit our booking page now to secure your thermal inspection service and take the first step towards peace of mind and operational excellence.</p>
        <Link className="blackButton" href="/schedule-an-inspection/">SCHEDULE ONLINE</Link>
      </section>
      <section className="thermalAreas">
        <h2>ARIZONA COMMERCIAL THERMAL IMAGING</h2>
        <p>Providing commercial property inspection services in the <Link href="/">Phoenix Metro Area</Link> as well as <Link href="/about-us/">Tucson</Link>, <Link href="/inspection-services/">Flagstaff</Link>, <Link href="/property-condition-assessments/">Prescott</Link>, <Link href="/showlow-az-commercial-building-inspections/">Showlow</Link>, <Link href="/kingman-arizona-commercial-building-inspections/">Kingman</Link>, <Link href="/yuma-az-commercial-inspections/">Yuma</Link>, <Link href="/payson-az-commercial-building-inspections/">Payson</Link>, and <Link href="/lake-havasu-arizona-commercial-building-inspections/">Lake Havasu</Link>. If you need a commercial property inspection anywhere in Arizona, give us a call.</p>
      </section>
    </main>
    <SiteFooter />
  </>;
}
