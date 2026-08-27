import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const uploads = "/uploads/";

const duties = [
  ["Specialized Inspections:", "Special inspectors are hired to verify the quality and compliance of specific construction aspects, often detailed in the project’s plans and specifications."],
  ["Examples of Special Inspections:", "These can include inspections of structural steel welding, high-strength bolting, concrete placement and testing, masonry work, fire-resistant assemblies, and fireproofing."],
  ["Verification and Reporting:", "Special inspectors observe and document construction progress, ensuring it aligns with approved plans and applicable codes. They provide reports to the relevant parties, including the owner, contractor, and sometimes the building department."],
  ["Ensuring Code Compliance:", "They play a crucial role in ensuring that the construction meets the required standards and regulations, preventing potential issues and rework."],
  ["Preventing Problems:", "By identifying and addressing issues early on, special inspectors can help prevent costly mistakes and delays in the project timeline."],
];

const benefits = [
  ["Expertise and Focus:", "They possess specialized knowledge and experience in their area of expertise, ensuring thorough inspections."],
  ["Third-Party Oversight:", "Their independence from the contractor helps ensure unbiased assessments and adherence to quality standards."],
  ["Risk Reduction:", "Their involvement can significantly reduce the risk of construction defects and potential safety hazards, ensuring a safer and more compliant project."],
  ["Cost Savings:", "Addressing issues early on can prevent costly rework and delays, potentially saving money in the long run."],
];

const certifications = [
  "STR1-Special Cases Wall Panels, Curtain Walls, Veneers;",
  "STR2-High Strength Bolting;",
  "STR3-Welding; STR4-Cold Formed Steel & Trusses Spanning 60 Ft Or Grtr;",
  "STR5-Reinforced Concrete; STR6-Prestressed – Precast Concrete Construction;",
  "STR7-Post-Installed Structural Anchors In Concrete; STR8-Masonry Construction Including Veneer;",
  "STR9-Wood Construction; GEO1-Geotechnical – Soils, Foundations, Piles;",
  "ARC1-Spray Fire-Resistant Materials;",
  "ARC2-Exterior Insulation Finish Systems – EIFS;",
  "ARC3-Fire Resistant Penetrations And Joints;",
  "MEC1-Smoke Control;",
  "MEC2-Duct Smoke Detectors;",
  "MEC3-Fire And Smoke Dampers;",
  "MEC4-Installation Of Grease Duct Encl & Other Cases;",
  "ARC4-Impervious moisture barriers",
];

const faqs = [
  ["1. What is a “Special Inspection”?", "A Special Inspection refers to the monitoring of materials and workmanship crucial to the structural integrity or building service systems, as outlined in the Phoenix Building Construction Code (PBCC) sections 1704, 2703, 2802, and 2903. These inspections must follow the approved plans, specifications, and contract documents."],
  ["2. Who performs these inspections?", "They are conducted by specially trained individuals or testing agencies—called Special Inspectors—who are independent of the installing contractor and must demonstrate competency and have proper certification."],
  ["3. Which disciplines are covered under Special Inspections?", "Special Inspections include, but are not limited to: Architectural, Electrical, Geotechnical, Mechanical & Plumbing, and Structural."],
  ["4. How do I know which category applies to my project?", "Detailed descriptions for each inspection discipline are listed in the “Special Inspection Type Key,” which defines what each code (e.g., ARC-1, STR-3) stands for."],
  ["5. Where can I find a list of approved Special Inspectors?", "The City publishes a Special Inspections Approved List (last revised September 2, 2025), which includes names, IDs, expiration dates, and the applicable inspection disciplines."],
  ["6. How do I apply to become a Special Inspector?", "You need to submit the Special Inspector Application, typically along with supporting documentation and payment. Applications are sent to the Planning & Development Department’s Inspections Section at 438 W. Adams Street, Phoenix, AZ, 85003."],
  ["7. What forms or certificates are required?", "Each discipline uses its own Special Inspection Certificate: Electrical (TRT 00274), Architectural (TRT 00277), Geotechnical (TRT 00275), Structural (TRT 00211), and Mechanical/Plumbing (TRT 00276). These must be completed, sealed, and submitted before final approval—including Certificate of Occupancy—can be issued."],
  ["8. What are the responsibilities of a Special Inspector on the job site?", "Conduct periodic site visits and submit signed inspection reports; ensure all reports are posted with the permit at the job site and available to city inspectors; immediately report discrepancies to the contractor—or if unresolved, to the registered design professional and city officials; and submit a final certificate/report attesting to compliance before final inspections or occupancy approval."],
  ["9. Why are Special Inspections necessary?", "They ensure construction quality and safety by verifying that materials and workmanship meet approved designs and codes. If a city official doubts soil classification, load-bearing capacity, or potential construction risks, Special Inspections—and often geotechnical reports—are required."],
  ["10. When are inspection reports due?", "Final Special Inspection reports must be submitted and accepted before final inspection approval, occupancy approval, or Certificate of Occupancy issuance."],
];

export const metadata: Metadata = {
  title: "Special Inspector (SI) Services in Phoenix, AZ - Arizona Commercial Property Inspections",
  description: "Certified Special Inspector services in Phoenix for concrete, masonry, steel, fireproofing, and code-compliant construction oversight.",
};

export default function SpecialInspectorPage() {
  return <>
    <SiteHeader active="services" />
    <main className="specialInspectorPage">
      <section className="specialHero">
        <div><h1>SPECIAL INSPECTOR</h1></div>
      </section>

      <section className="specialIntro">
        <h2>SPECIAL INSPECTOR (SI) SERVICES IN PHOENIX, AZ</h2>
        <p>Our team provides professional Special Inspector (SI) services to ensure structural components and systems are built to code, from monitoring footing pours to verifying large concrete and steel installations. With an inspector approved by the City of Phoenix—whose list is recognized by most Arizona municipalities—we offer unmatched expertise in critical areas like concrete, masonry, steel welding, fireproofing, and more.</p>
        <p>This specialized oversight reduces risk, prevents costly mistakes, and gives builders, owners, and municipalities confidence that every project meets the highest safety and compliance standards.</p>
        <Link className="blackButton" href="/schedule-an-inspection/">Book Now!</Link>
      </section>

      <section className="specialOverview">
        <div className="specialImages">
          <img src={uploads + "2025/08/AdobeStock_422340083-1-scaled.jpeg"} alt="Steel frame commercial building under construction" />
          <img src={uploads + "2025/08/AdobeStock_576033388-scaled.jpeg"} alt="Commercial warehouse construction site" />
        </div>
        <div className="specialDuties">
          <a className="blackButton" href="tel:1-480-808-1170">(480) 808-1170</a>
          <span>SPECIAL INSPECTORS</span>
          <h2>WHAT THEY DO</h2>
          <div className="specialBulletList">{duties.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div>
          <a className="specialLearn" href="https://www.phoenix.gov/pddsite/Documents/TRT/dsd_trt_pdf_00021.pdf">Click here to learn more about what a Special Inspector is and does.</a>
        </div>
      </section>

      <section className="specialImportance">
        <header><span>SPECIAL INSPECTOR – AN IMPORTANT SERVICE</span><h2>WHY A SPECIAL INSPECTOR IS IMPORTANT</h2></header>
        <div className="importanceGrid">
          <div className="specialBulletList">{benefits.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div>
          <div className="phoenixRequirements">
            <h3>In Phoenix, Arizona:</h3>
            <ul><li>The City of Phoenix maintains a list of approved special inspectors.</li><li>Special inspectors in Phoenix may be certified by organizations like the International Code Council (ICC).</li><li>Specific qualifications and experience may be required, such as relevant work experience or educational degrees.</li></ul>
            <a className="blackButton" href="tel:1-480-808-1170">(480) 808-1170</a>
          </div>
        </div>
      </section>

      <section className="certificationsSection">
        <div><span>OUR CERTIFICATIONS</span><h2>QUALIFIED FOR SPECIAL INSPECTIONS</h2><p>We are highly qualified and licensed for this very specific type of inspection. Below is a list of certifications we have for “Special Inspector” or SI inspections:</p></div>
        <ul>{certifications.map(item => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="specialFaq">
        <h2>Frequently Asked Questions: Special Inspector</h2>
        <div>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
