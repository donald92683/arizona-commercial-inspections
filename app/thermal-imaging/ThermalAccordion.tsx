"use client";

import { useState } from "react";

const thermalServices = [
  ["Solar / Photovoltaic System Scan", "Elevate the efficiency of your solar or photovoltaic systems with our sophisticated thermal imaging scans. By pinpointing hotspots and malfunctioning cells, we enable proactive upkeep to maximize energy output. Our exhaustive reports deliver an in-depth health analysis of your system, ensuring timely interventions to safeguard your sustainable energy investments."],
  ["Flat Roof Moisture Intrusion Scan", "Guard your property against potential water damage with our precise flat roof moisture intrusion scans. Our advanced thermal imaging detects moisture beneath roofing materials, facilitating early leak detection and prevention of structural harm. Early intervention extends your roof’s durability and prevents expensive repair work, securing your investment’s longevity."],
  ["Electrical Equipment Maintenance Scan", "Maintain the reliability and safety of your electrical systems with our targeted thermal imaging scans. By identifying overheating parts and loose connections, we help prevent electrical failures, enhance safety, and prolong the operational life of essential equipment. Our detailed assessments are your trusty companion for ensuring electrical system integrity."],
  ["Building Envelope Efficiency Scan", "Boost your building’s energy efficiency and reduce utility bills with our building envelope efficiency scans. Our thermal imaging spots heat loss and air infiltration points, guiding targeted improvements in insulation and sealing. This optimization not only improves occupant comfort but also promises significant energy savings in the long run."],
  ["Fire Damage Prevention and Property Safety", "Our thermal imaging services extend beyond efficiency improvements to life-saving applications. Through early detection of overheating and potential fire hazards, we provide crucial interventions that can prevent fire outbreaks, saving both lives and property. Our comprehensive approach ensures your investments are not only efficient but also secure from unforeseen dangers."],
];

export function ThermalAccordion() {
  const [open, setOpen] = useState(0);

  return <div className="thermalAccordion">{thermalServices.map(([title, copy], index) => <div className={`thermalAccordionItem${open === index ? " isOpen" : ""}`} key={title}>
    <button type="button" aria-expanded={open === index} aria-controls={`thermal-panel-${index}`} onClick={() => setOpen(index)}>
      {title}<span aria-hidden="true">+</span>
    </button>
    <div className="thermalAccordionPanel" id={`thermal-panel-${index}`}><div><p>{copy}</p></div></div>
  </div>)}</div>;
}
