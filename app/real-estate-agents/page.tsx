import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { AgentAccordion } from "./AgentAccordion";

const uploads = "https://arizonacommercialinspections.com/wp-content/uploads/";

export const metadata: Metadata = {
  title: "Real Estate Agents - Arizona Commercial Property Inspections",
  description: "Commercial real estate inspections and comprehensive due diligence services for agents, investors, and property managers across Arizona.",
};

export default function RealEstateAgentsPage() {
  return <>
    <SiteHeader active="services" />
    <main className="agentsPage">
      <section className="agentsHero"><div><h1>REAL ESTATE AGENTS</h1></div></section>
      <section className="agentsOverview">
        <div className="agentsImageColumn">
          <img src={uploads + "2024/02/DALL·E-2024-02-09-10.13.21.jpg"} alt="Commercial real estate professionals reviewing property due diligence" />
          <a className="blackButton" href="tel:1-480-808-1170">(480) 808-1170</a>
        </div>
        <div className="agentsCopy">
          <h2>Premier Commercial<br />Real Estate Due<br />Diligence</h2>
          <p>Navigating commercial real estate transactions in Arizona demands a partner who understands the intricacies of due diligence comprehensively. At Arizona Commercial Property Inspections (AZCPI), we take pride in being the foremost authority for commercial real estate inspections and due diligence services across the state. Here’s why we’re the top choice for investors, realtors, and property managers seeking unparalleled service in commercial real estate.</p>
        </div>
        <AgentAccordion />
      </section>
      <section className="agentsBooking">
        <h2>CONTACT US ABOUT YOUR REAL ESTATE NEEDS TODAY</h2>
        <p>Elevate your client service by securing a comprehensive due diligence inspection with Arizona Commercial Property Inspections today. Our meticulous assessments provide the crucial insights your clients need to make informed purchasing decisions, ensuring their investment is sound and their interests are protected. By booking now, you demonstrate your commitment to their success and detail-oriented care. Visit our booking page to arrange a thorough due diligence service that sets your clients up for a confident and secure real estate transaction.</p>
        <Link className="blackButton" href="/schedule-an-inspection/">SCHEDULE ONLINE</Link>
      </section>
    </main>
    <SiteFooter />
  </>;
}
