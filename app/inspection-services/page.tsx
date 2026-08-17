import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const A="https://arizonacommercialinspections.com/wp-content/uploads/";
const coreServices=[
  ["Property Condition Inspections","Comprehensive assessments of the overall condition of a commercial property, including its structural elements, systems, and components. Our inspectors examine foundations, roofing, HVAC, plumbing, electrical, and other critical components to identify concerns that may affect value or safety."],
  ["Property Condition Assessments","A detailed review of a property's current condition for buyers, owners, lenders, and investors."],
  ["Limited Scope Inspections","Targeted inspections customized to the systems or areas most important to your transaction."],
  ["Yearly Maintenance Inspections","Recurring evaluations that help owners plan maintenance and protect their investment."],
  ["Draw Inspections","Independent construction-progress observations completed at key draw milestones."],
  ["Insurance Loss Inspections","Clear documentation of building conditions following a covered loss."],
  ["Insurance Pre-loss Inspections","Pre-loss documentation that records a property's condition before an incident occurs."],
  ["MEP Inspections (Mechanical, Electrical, Plumbing)","Focused evaluation of a building's essential mechanical, electrical, and plumbing systems."],
  ["Triple-Net Lease Inspections","Practical condition information for landlords and tenants entering or renewing a triple-net lease."],
  ["Construction Quality Control","Independent observations that help identify workmanship and installation concerns."],
  ["Thermal Imaging Scans and Inspection","Infrared scanning used to help identify hidden moisture, heat loss, and electrical anomalies."]
];
const additional=[
  ["Opinion of Cost Report","A comprehensive overview of potential costs associated with identified issues or recommended improvements, with useful cost ranges to support planning and prioritization."],
  ["Capital Reserve Study","Long-term forecasting for major repairs, replacements, and reserve funding."],
  ["Phase 1, 2, and 3 Environmental Assessments","Environmental due-diligence services coordinated to match the property and transaction."],
  ["NFPA-70B Annual Electrical Equipment Maintenance Inspections","Annual electrical equipment maintenance inspections aligned with NFPA guidance."],
  ["Thermal Imaging","Infrared scanning that can reveal patterns not visible during a standard visual inspection."],
  ["Advanced HVAC Inspection","A deeper technical evaluation of commercial heating, ventilation, and cooling systems."],
  ["Termite Inspection","Inspection for evidence of wood-destroying organisms and related damage."],
  ["Sewer Camera Inspection","A camera assessment of sewer lines to identify blockages, damage, leaks, or other potential problems before they become expensive repairs."],
  ["Fire and Life Safety Inspections","Review of visible fire and life-safety features and conditions."],
  ["Fire Suppression System Inspection","Specialist evaluation of fire-suppression systems and components."],
  ["Kitchen Hood Inspection","Inspection of commercial kitchen exhaust and hood systems."],
  ["Commercial Kitchen Inspection","Review of visible commercial kitchen systems, equipment, and safety concerns."],
  ["ADA Inspection","Accessibility observations to help identify barriers and areas of concern."],
  ["Air Quality Inspection","Testing and assessment options for indoor air-quality concerns."],
  ["Moisture Intrusion Inspection","Focused investigation of active or suspected moisture intrusion."]
];

export const metadata:Metadata={title:"Commercial Inspection Services | Arizona Commercial Property Inspections",description:"Commercial property inspections, assessments, specialty inspections, and inspection reports throughout Arizona."};

export default function InspectionServices(){return <>
  <SiteHeader active="services"/>
  <main className="inspectionPage">
    <section className="inspectionHero"><div><h1>OUR INSPECTIONS</h1></div></section>
    <section className="inspectionIntro"><h2>INSPECTING PROPERTIES OF EVERY SIZE &amp; TYPE</h2><p>Our inspectors help the client understand the true condition of the property. After providing an educational in-person or virtual review of our findings, we complete and deliver our report within 24 hours.</p><a className="blackButton" href="/schedule-an-inspection/">Book Now!</a></section>
    <section className="commercialOverview"><div className="overviewImage"><img src={A+"2024/02/Advanced-HVAC-unit.jpg"} alt="Commercial HVAC equipment inspection"/></div><div className="overviewCopy"><h2>OUR COMMERCIAL<br/>INSPECTIONS</h2><p>We provide thorough commercial property inspections for many different types of buildings – including:</p><ul><li>Manufacturing facilities</li><li>Medical and Dental offices</li><li>Warehouses</li><li>Churches</li><li>Office Buildings</li><li>Office Suite Condominiums</li><li>Apartment buildings and complexes</li><li>Lodging and hotels</li><li>Strip malls</li></ul><p>Each property is unique – so we tailor our inspections to meet the needs of our individual clients and their properties. After your inspection is complete, we provide an industry-leading report that covers all findings in an easy-to-read format.</p><a className="blackButton" href="tel:1-480-808-1170">(480) 808-1170</a></div></section>
    <section className="inspectionServices"><h2>OUR INSPECTION SERVICES</h2><div className="accordionGrid">{coreServices.map(([title,copy],i)=><details key={title} open={i===0}><summary>{title}</summary><p>{copy}</p></details>)}</div></section>
    <section className="darkFeature"><div><h2>VIRTUAL REVIEW</h2><p>Here at AZCPI, we prioritize an educational walk through of our findings after completion of the inspection. Because many clients are from out of state, we provide a virtual walkthrough experience for any client unable to attend in person.</p></div><div><h2>STANDARD PROPERTY CONDITION ASSESSMENT INSPECTIONS</h2><p>Our highly experienced inspectors evaluate defects, maintenance and repair needs, and safety concerns. Inspection duration ranges from a half-day to five full days depending on property size and complexity, with the report delivered within 24 hours of completion.</p><p>An in-person or virtual walk-through is recommended so the inspectors can explain findings and repair recommendations.</p></div></section>
    <section className="standardIncludes"><div><h3>A STANDARD COMMERCIAL PROPERTY INSPECTION INCLUDES:</h3><p className="note">Any item can be added or removed from the scope before the inspection for a customized view and price.</p><ul><li>Document Review</li><li>Site Utilities, Drainage, and Paving</li><li>Frame, Structure, and Building Envelope</li><li>Roof Covering and Structure</li><li>Mechanical and Electrical Systems</li><li>Plumbing Systems</li><li>Heating, Ventilation, and Air Conditioning</li><li>Life Safety / Fire Protection</li><li>Interior and Exterior Elements and Finishes</li><li>Kitchen and Cooking Equipment</li><li>Repair and Correction Recommendations</li></ul><a href="https://ccpia.org/standards-of-practice/">SEE CCPIA STANDARDS OF PRACTICE →</a></div><img src={A+"2021/05/AZCPIimg5.jpg"} alt="Arizona commercial strip mall inspection"/></section>
    <section className="additionalServices"><h2>ADDITIONAL INSPECTION SERVICES</h2><p>The following ancillary inspections can be added to any commercial property inspection for a customized view of the property and its additional systems.</p><div className="accordionGrid">{additional.map(([title,copy],i)=><details key={title} open={i===0}><summary>{title}</summary><p>{copy}</p></details>)}</div></section>
    <section className="teamSection"><h2>T.E.A.M. INSPECTIONS</h2><p>The TEAM approach (Technical Experts And Management) is ideal whenever a client desires a more technically detailed inspection. A team of licensed specialists can inspect systems, estimate current repair and maintenance costs, and project longer-term needs.</p><p>Arizona Commercial Property Inspections can manage any level of detailed inspection your company requires. Yearly Property Condition Assessments are recommended after the initial inspection to monitor building performance and maintenance needs.</p><a className="blackButton" href="tel:1-480-808-1170">(480) 808-1170</a><h3>EXAMPLES OF SUPPLEMENTED PROFESSIONALS MAY INCLUDE:</h3><div className="professionalGrid">{["Structural engineers","Environmental specialists","Elevator specialists","Pest control experts","HVAC specialists","Roofing contractors","Electrical contractors","Asphalt and paving specialists","Plumbing contractors","Window and door contractors","Fire protection specialists"].map(x=><span key={x}>✓ {x}</span>)}</div></section>
    <section className="reportsSection"><span>THOROUGH &amp; COMPREHENSIVE</span><h2>OUR INSPECTION REPORTS</h2><p>Within 24 hours of inspection completion, AZCPI will electronically deliver an easy-to-use report published in industry-leading software.</p></section>
    <section className="serviceAreaStrip"><h2>PHOENIX COMMERCIAL INSPECTIONS &amp; ALL OF ARIZONA</h2><p>Providing commercial property inspection services in the <a href="/">Phoenix Metro Area</a> as well as Tucson, Flagstaff, Prescott, Show Low, Kingman, Yuma, Payson, and Lake Havasu. If you need a commercial property inspection anywhere in Arizona, give us a call: <strong>(480) 808-1170</strong></p></section>
  </main>
  <SiteFooter/>
</>}
