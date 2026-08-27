import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const uploads = "/uploads/";

export const metadata: Metadata = {
  title: "Multi-Family Inspections - Arizona Commercial Property Inspections",
  description: "The premier multi-family property inspections in Phoenix, Scottsdale, and throughout Arizona.",
};

const inspectionServices = [
  {
    title: "HUD Inspections",
    body: "Our HUD inspections adhere to stringent guidelines set by the U.S. Department of Housing and Urban Development. We conduct detailed examinations to verify compliance with HUD standards, ensuring that your property meets all necessary requirements for federal assistance programs.",
  },
  {
    title: "NSPIRE Evaluations",
    body: "NSPIRE evaluations focus on performance-based inspections, emphasizing the quality of life for residents and the overall condition of the property. Our team evaluates key areas such as health and safety, structural integrity, and environmental factors to provide a comprehensive assessment.",
  },
  {
    title: "Capital Needs Assessments (CNA’s)",
    body: "CNA’s are essential for long-term planning and budgeting. Our thorough CNA services analyze the current condition of building components and systems, forecast future maintenance and replacement costs, and help you make informed decisions regarding property investments and renovations.",
  },
  {
    title: "Physical Needs Assessments (PNA’s)",
    body: "PNA’s evaluate the physical condition of a property, identifying immediate and future maintenance needs. We assess building structures, mechanical systems, electrical components, plumbing, and more to create a comprehensive report outlining necessary repairs and upgrades.",
  },
];

export default function MultiFamilyInspectionsPage() {
  return <>
    <SiteHeader active="services" />
    <main className="multiFamilyPage">
      <section className="multiFamilyHero"><div><h1>MULTI-FAMILY</h1></div></section>
      <section className="multiFamilyIntro">
        <h2>PROPERTY INSPECTIONS FOR MULTI-FAMILY PROPERTIES</h2>
        <p>Arizona Commercial Inspections specializes in comprehensive multi-family commercial property inspections, offering a range of services tailored to meet your needs. Our expertise includes HUD inspections, NSPIRE evaluations, Capital Needs Assessments (CNA’s), and Physical Needs Assessments (PNA’s), ensuring thorough and accurate assessments for your property investments.</p>
        <Link className="blackButton" href="/schedule-an-inspection/">Book Now!</Link>
      </section>
      <section className="multiFamilyOverview">
        <div className="multiFamilyImages">
          <img src={uploads + "2024/05/AdobeStock_225545483-scaled.jpeg"} alt="Multi-family residential building against a blue sky" />
          <img src={uploads + "2024/02/AdobeStock_260656199.jpg"} alt="Multi-family apartment property in Arizona" />
        </div>
        <div className="multiFamilyNeeds">
          <h2>ALL OF YOUR INSPECTION NEEDS</h2>
          <p>If you are buying or own a multi-family property, then we have all of your inspection needs covered. We offer a number of multi-family-specific inspection services, including the following:</p>
          <ul>
            <li><strong>HUD Inspections</strong></li>
            <li><strong>NSPIRE Evaluations</strong></li>
            <li><strong>Capital Needs Assessments (CNA’s)</strong></li>
            <li><strong>Physical Needs Assessments (PNA’s)</strong></li>
          </ul>
          <p>We specialize in multi-family properties all across Arizona, and work hard to provide the best services possible.</p>
          <a className="blackButton" href="tel:1-480-808-1170">(480) 808-1170</a>
        </div>
      </section>
      <section className="multiFamilyServices">
        <h2>OUR INSPECTION SERVICES</h2>
        <div className="multiFamilyServiceList">
          {inspectionServices.map((service) => <article key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
          </article>)}
          <a className="blackButton" href="tel:1-480-808-1170">(480) 808-1170</a>
        </div>
        <aside className="multiFamilyClosing">
          <h2>CHOOSE US FOR YOUR MULTI-FAMILY PROPERTY</h2>
          <p>At Arizona Commercial Inspections, we combine industry expertise with cutting-edge technology to deliver accurate and reliable assessments for multi-family commercial properties. Our goal is to provide you with the insights and information needed to make informed decisions and ensure the long-term success of your investments. Trust us for thorough, professional, and personalized inspection services tailored to your specific needs.</p>
        </aside>
      </section>
    </main>
    <SiteFooter />
  </>;
}
