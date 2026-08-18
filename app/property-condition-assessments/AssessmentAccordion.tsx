"use client";

import { useState } from "react";

const assessments = [
  ["Cost to Cure Analysis", "Recognizing and addressing potential concerns in your commercial property is vital for preserving its worth and securing its future. Our Cost to Cure Analysis meticulously evaluates any present deficiencies or maintenance delays. We present a detailed report on the estimated expenses to address these issues, allowing you to effectively plan and allocate funds for necessary repairs or enhancements. Our clear, exhaustive analysis ensures you’re equipped to make decisions that resonate with your investment objectives."],
  ["Capital Reserve Study", "Effective future planning is essential in commercial property management. Our Capital Reserve Study offers a visionary evaluation, preparing you for significant capital outlays over time. By examining the lifespan of building components and forecasting future repair or replacement costs, we aid in crafting a tailored reserve fund strategy. This proactive measure helps property owners and managers avoid financial surprises, preserving the property’s long-term health and value."],
  ["Opinion of Cost Report", "A cornerstone of our PCA services, the Opinion of Cost Report delivers a professional appraisal of the costs tied to advised repairs and upgrades. This report is instrumental for negotiation and financial planning, offering a transparent view of the economic aspects of rectifying identified problems. Taking into account local market trends, material, and labor expenses, we provide an accurate, dependable estimate. This report is an invaluable asset for owners, investors, and stakeholders, guiding well-informed property financial planning."],
];

export function AssessmentAccordion() {
  const [open, setOpen] = useState(1);
  return <div className="pcaAccordion">{assessments.map(([title, copy], index) => <div className={`pcaAccordionItem${open === index ? " isOpen" : ""}`} key={title}>
    <button type="button" aria-expanded={open === index} aria-controls={`pca-panel-${index}`} onClick={() => setOpen(index)}>
      {title}<span aria-hidden="true">+</span>
    </button>
    <div className="pcaAccordionPanel" id={`pca-panel-${index}`}><div><p>{copy}</p></div></div>
  </div>)}</div>;
}
