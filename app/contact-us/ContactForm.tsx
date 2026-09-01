"use client";

import { useEffect } from "react";

const TYPEFORM_SCRIPT_ID = "typeform-embed-script";

type ContactFormProps = {
  ariaLabel?: string;
};

export function ContactForm({ ariaLabel = "Arizona Commercial Inspections contact form" }: ContactFormProps) {
  useEffect(() => {
    document.getElementById(TYPEFORM_SCRIPT_ID)?.remove();

    const script = document.createElement("script");
    script.id = TYPEFORM_SCRIPT_ID;
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => script.remove();
  }, []);

  return <section className="aci-typeform-section" aria-label={ariaLabel}>
    <div
      className="aci-typeform-widget"
      data-tf-widget="bGHYWEdu"
      data-tf-opacity="100"
      data-tf-iframe-props="title=Arizona Commercial Inspections Form"
      data-tf-transitive-search-params=""
      data-tf-medium="embed-snippet"
      data-tf-inline-on-mobile=""
    />
  </section>;
}
