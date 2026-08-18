"use client";

import { useState } from "react";

const dueDiligenceServices = [
  ["Comprehensive Inspection Services Tailored for Arizona", "Understanding the specific requirements of the Arizona commercial real estate market sets us apart. Our experienced team offers an extensive range of inspection services, ensuring a detailed evaluation of your property. From meticulous property condition assessments and advanced thermal imaging surveys to in-depth environmental inspections, our suite of services is designed to address the varied facets of commercial real estate transactions."],
  ["One-Stop Shop for All Your Due Diligence Requirements", "We embody convenience by serving as your singular source for all commercial due diligence needs. Streamline your real estate transactions by leveraging our expertise across a broad spectrum of inspection services. Our process is designed for efficiency and ease, providing a cohesive experience that saves you time and effort. With AZCPI, every inspection service you need is under one roof, executed with precision and professionalism."],
  ["Unrivaled Local Expertise and Insight", "As the leading commercial due diligence firm in Arizona, we offer unmatched local knowledge and expertise. Our team’s familiarity with the Arizona real estate market’s nuances ensures that our inspections and assessments are fully compliant with regional regulations and standards. Rely on our deep understanding of the local landscape to navigate challenges and capitalize on opportunities unique to Arizona."],
  ["Cutting-Edge Technology and Comprehensive Reporting", "At AZCPI, we’re committed to employing the latest technology in our services. Our use of advanced tools and thermal imaging techniques allows for accurate, detailed insights into the condition of properties. Our reports are clear, concise, and promptly delivered, enabling you to make informed, timely decisions about your investments."],
];

export function AgentAccordion() {
  const [open, setOpen] = useState(0);

  return <div className="agentAccordion">{dueDiligenceServices.map(([title, copy], index) => <div className={`agentAccordionItem${open === index ? " isOpen" : ""}`} key={title}>
    <button type="button" aria-expanded={open === index} aria-controls={`agent-panel-${index}`} onClick={() => setOpen(index)}>
      {title}<span aria-hidden="true">+</span>
    </button>
    <div className="agentAccordionPanel" id={`agent-panel-${index}`}><div><p>{copy}</p></div></div>
  </div>)}</div>;
}
