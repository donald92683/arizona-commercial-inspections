"use client";

import { useState } from "react";

type Service = readonly [title: string, copy: string];

export function InspectionAccordion({ services }: { services: readonly Service[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return <div className="serviceAccordion">
    {services.map(([title, copy], index) => {
      const isOpen = index === openIndex;
      const panelId = `inspection-service-panel-${index}`;

      return <div className={`serviceAccordionItem${isOpen ? " isOpen" : ""}`} key={title}>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setOpenIndex(index)}
        >
          <span>{title}</span><span className="accordionIcon" aria-hidden="true">⊕</span>
        </button>
        <div className="serviceAccordionPanel" id={panelId} aria-hidden={!isOpen}>
          <div><p>{copy}</p></div>
        </div>
      </div>;
    })}
  </div>;
}
