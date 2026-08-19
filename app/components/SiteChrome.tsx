"use client";

import { useEffect, useState } from "react";

function HeaderIcon({name}:{name:"phone"|"email"|"chevron"|"calendar"}) {
  const paths = {
    phone: <><rect x="7" y="2" width="10" height="20" rx="1.5"/><path d="M10 5h4M11 19h2"/></>,
    email: <><rect x="2" y="5" width="20" height="14" rx="1.5"/><path d="m3 7 9 7 9-7M3 18l6.5-6M21 18l-6.5-6"/></>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 9h18M7 2v6M17 2v6"/></>,
  };
  return <svg className={`headerIcon ${name}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}

export function SiteHeader({active}:{active?:"home"|"services"}){
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      setServicesOpen(false);
      return;
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return <header className={`siteHeader${active==="services"?" servicesHeader":""}`}>
    <div className="contactBar"><span className="contactItem"><i><HeaderIcon name="phone" /></i><a href="tel:1-480-808-1170">(480) 808-1170</a></span><span className="contactItem"><i><HeaderIcon name="email" /></i><a href="mailto:arizonacpi@gmail.com">arizonacpi@gmail.com</a></span></div>
    <div className="navBar">
      <a href="/" className="brand"><img src="/ArizonaCommercialPropertyInspections-logo.webp" alt="Phoenix Arizona Commercial Building Inspections"/></a>
      <nav id="main-navigation" className={menuOpen ? "mobileOpen" : undefined} aria-label="Main navigation" onClick={(event) => { if ((event.target as HTMLElement).closest("a")) setMenuOpen(false); }}>
        <a className={active==="home"?"active":undefined} href="/">HOME</a>
        <a href="/about-us/">ABOUT</a>
        <div className="navDropdown">
          <a className={active==="services"?"active":undefined} href="/inspection-services/" aria-expanded={servicesOpen} aria-controls="services-submenu" onClick={(event) => { if (window.matchMedia("(max-width: 980px)").matches && !servicesOpen) { event.preventDefault(); setServicesOpen(true); } }}>SERVICES</a>
          <div id="services-submenu" className={`navSubmenu${servicesOpen ? " mobileSubmenuOpen" : ""}`}>
            <a href="/inspection-services/">Commercial Inspection Services</a>
            <a href="/special-inspector/">Special Inspector</a>
            <a href="/property-condition-assessments/">Property Condition Assessments</a>
            <a href="/multi-family-inspections/">Multi-Family Inspections</a>
            <a href="/thermal-imaging/">Thermal Imaging</a>
            <a href="/real-estate-agents/">Real Estate Agents</a>
          </div>
        </div>
        <a href="/blog/" target="_blank" rel="noopener noreferrer">BLOG</a><a href="/contact-us/">CONTACT</a>
      </nav>
      <a className="request" href="/schedule-an-inspection/">REQUEST INSPECTION <HeaderIcon name="calendar" /></a>
      <button className="menu" type="button" aria-controls="main-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? "×" : "☰"}</button>
    </div>
  </header>
}

export function SiteFooter(){return <footer id="contact"><div className="footerTop"><div className="footerContacts"><div><i>▯</i><h4>CALL US</h4><p><a href="tel:1-480-808-1170">(480) 808-1170</a></p></div><div><i>✉</i><h4>EMAIL US</h4><p><a href="mailto:arizonacpi@gmail.com">Click Here to Email</a></p></div><div><i>□</i><h4>REQUEST INSPECTION</h4><p><a href="/schedule-an-inspection/">Click Here to Request</a></p></div></div><p className="legal"><a href="/privacy-policy/">Privacy Policy</a> | <a href="/terms-of-service/">Terms of Service</a></p><div className="social"><a href="https://www.google.com/maps/place/Arizona+Commercial+Property+Inspections" aria-label="Google">G</a><a href="https://www.instagram.com/azcpi/" aria-label="Instagram">◎</a><a href="https://www.facebook.com/Arizonainspections/" aria-label="Facebook">f</a><a href="https://www.youtube.com/@arizonacommercialinspections" aria-label="YouTube">▶</a></div></div></footer>}
