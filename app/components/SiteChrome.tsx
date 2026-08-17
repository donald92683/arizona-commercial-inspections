export function SiteHeader({active}:{active?:"home"|"services"}){
  return <header className="siteHeader">
    <div className="contactBar"><span className="contactItem"><i>▯</i>(480) 808-1170</span><span className="contactItem"><i>✉</i>arizonacpi@gmail.com</span></div>
    <div className="navBar">
      <a href="/" className="brand"><img src="/ArizonaCommercialPropertyInspections-logo.webp" alt="Phoenix Arizona Commercial Building Inspections"/></a>
      <nav aria-label="Main navigation">
        <a className={active==="home"?"active":undefined} href="/">HOME</a>
        <a href="/about-us/">ABOUT</a>
        <div className="navDropdown">
          <a className={active==="services"?"active":undefined} href="/inspection-services/">SERVICES <span aria-hidden="true">⌄</span></a>
          <div className="navSubmenu"><a href="/inspection-services/">Commercial Inspection Services</a></div>
        </div>
        <a href="/#gallery">BLOG</a><a href="/#contact">CONTACT</a>
      </nav>
      <a className="request" href="/schedule-an-inspection/">REQUEST INSPECTION <b>□</b></a><span className="menu">☰</span>
    </div>
  </header>
}

export function SiteFooter(){return <footer id="contact"><div className="footerTop"><div className="footerContacts"><div><i>▯</i><h4>CALL US</h4><p><a href="tel:1-480-808-1170">(480) 808-1170</a></p></div><div><i>✉</i><h4>EMAIL US</h4><p><a href="mailto:arizonacpi@gmail.com">Click Here to Email</a></p></div><div><i>□</i><h4>REQUEST INSPECTION</h4><p><a href="/schedule-an-inspection/">Click Here to Request</a></p></div></div><p className="legal"><a href="/privacy-policy/">Privacy Policy</a> | <a href="/terms-of-service/">Terms of Service</a></p><div className="social"><a href="https://www.google.com/maps/place/Arizona+Commercial+Property+Inspections" aria-label="Google">G</a><a href="https://www.instagram.com/azcpi/" aria-label="Instagram">◎</a><a href="https://www.facebook.com/Arizonainspections/" aria-label="Facebook">f</a><a href="https://www.youtube.com/@arizonacommercialinspections" aria-label="YouTube">▶</a></div></div></footer>}
