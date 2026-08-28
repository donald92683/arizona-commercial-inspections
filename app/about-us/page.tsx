import type { Metadata } from "next";
import Link from "next/link";
import { InstagramIcon, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "About Us - Arizona Commercial Property Inspections",
  description: "Meet Arizona's premier commercial property inspection team and learn about our industry-leading qualifications and experience.",
};

const certifications = [
  ["/uploads/2021/05/ccpia_logo_tagline_small-1.png", "Certified Commercial Property Inspectors Association"],
  ["/uploads/2021/05/new_logo.jpg", "National Association of Certified Building Inspectors"],
  ["/uploads/2024/02/CMI.jpg", "Certified Master Inspector"],
  ["/uploads/2024/02/certified-professional-inspector-cpi-logo.jpg", "Certified Professional Inspector"],
  ["/uploads/2024/02/nachiinstructor.jpg", "InterNACHI Instructor"],
  ["/uploads/2024/02/astm.jpg", "ASTM International"],
  ["/uploads/2024/02/icc.jpg", "International Code Council"],
  ["/uploads/2024/02/1588271856429-roofinspectorcertificationlogoprogram.jpg", "Certified Roof Inspector"],
  ["/uploads/2024/02/certified-multi-unit-housing-inspector.jpg", "Certified Multi-Unit Housing Inspector"],
  ["/uploads/2024/02/ifc-1.jpg", "Infrared Training Center"],
];

const inspections = ["Digital Arts College", "Entire Small Town Infrastructure", "Summer Camp", "Commercial Bakery", "Large Retail", "Large Strip Center", "Storage Facilities", "Large Warehouse", "Small Warehouse", "Hotels", "Multi-Family Housing", "Restaurants"];

export default function AboutUsPage() {
  return <>
    <SiteHeader active="about" />
    <main id="main-content" className="aboutUsPage">
      <section className="aboutUsHero"><div><h1>ABOUT US</h1></div></section>
      <section className="aboutUsIntro">
        <div className="aboutUsIntroCopy">
          <img className="aboutUsMark" src="/ArizonaCommercialPropertyInspections-logo.webp" alt="Arizona Commercial Property Inspections" />
          <h2>YOUR PREMIER<br />INSPECTION TEAM</h2>
          <p>Welcome to Arizona Commercial Property Inspections – Arizona’s premier commercial property assessment company. We have years of experience inspecting buildings of every kind for clients just like you.</p>
          <p>We are highly qualified in our field – holding multiple licenses and certifications – as well as being certified through the Certified Commercial Property Inspector Association.</p>
          <p>In addition to our qualifications, our level of customer service, detailed inspection, and modern inspection reports speak for themselves. Buying, owning, and selling a commercial property is no small task – so we work hard to make our aspect of it as smooth as possible.</p>
          <p className="aboutUsFeatured"><em>We have been featured on <a href="https://inspectortoolbelt.com/how-to-get-into-commercial-inspections/">Inspector Toolbelt Talk</a> and CCPIA.</em></p>
          <a className="blackButton aboutUsPhone" href="tel:1-480-808-1170">(480) 808-1170</a>
        </div>
        <div className="aboutUsPhotos">
          <img src="/uploads/2021/05/AZCPIimg4.jpg" alt="Tucson AZ commercial inspections" />
          <img src="/uploads/2021/05/AZCPIimg2.jpg" alt="Tucson commercial building inspections" />
        </div>
      </section>
      <section className="aboutUsCredentials">
        <div className="credentialLogos">{certifications.map(([src, alt]) => <div key={src}><img src={src} alt={alt} /></div>)}</div>
        <div className="credentialCopy">
          <h2>CERTIFIED LEAD THE WAY IN COMMERCIAL INSPECTIONS</h2>
          <p>Arizona Commercial Property Inspections stands as a beacon of excellence in the commercial inspection industry. Our team’s membership in the Certified Commercial Property Inspector Association (CCPIA) and the National Association of Certified Building Inspectors (NACBI) sets the foundation for our unparalleled service quality. Beyond these, our expertise is amplified by our roles as Instructors within CCPIA, our active participation in the International Code Council (ICC), and our affiliation with the American Society for Testing Materials (ASTM).</p>
          <p>Our distinction as Certified Master Inspectors® (CMI) underscores our top-tier proficiency. We also lead as Owner/Instructors at an InterNACHI Partner School, and hold certifications as Professional Inspectors® (NACHI), Multi-Unit Housing Inspectors, Roof Inspectors, and Electrical and Building Thermographers (CRT/Level 1 Electrical) through NACHI. These comprehensive qualifications ensure that we provide expert evaluations across various critical areas with the highest standards of accuracy and professionalism.</p>
          <p>Choosing Arizona Commercial Property Inspections means opting for a team whose credentials span the breadth of the inspection industry, offering peace of mind and a commitment to excellence that is unmatched. So if you want the best for your investment, contact us here at Arizona Commercial Property Inspections!</p>
        </div>
      </section>
      <section className="aboutVideoSection" aria-label="Arizona Commercial Property Inspections video">
        <div className="aboutVideoInner">
          <video controls playsInline preload="metadata">
            <source src="/CCPIA-Promo.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <a className="blackButton aboutVideoPhone" href="tel:1-480-808-1170">(480) 808-1170</a>
        </div>
      </section>
      <section className="aboutUsExperience">
        <h2>INSPECTIONS WE HAVE PERFORMED</h2>
        <div className="inspectionList">{inspections.map(item => <div key={item}><span aria-hidden="true">✓</span>{item}</div>)}</div>
        <div className="aboutSocials">
          <h2>OUR SOCIALS</h2><p>Learn more and connect with us on our social network accounts.</p>
          <div><a href="https://www.youtube.com/@arizonacommercialinspections" aria-label="YouTube">▶</a><a href="https://www.facebook.com/Arizonainspections/" aria-label="Facebook">f</a><a href="https://www.instagram.com/azcpi/" aria-label="Instagram"><InstagramIcon className="aboutInstagramIcon" /></a><a href="https://www.google.com/maps/place/Arizona+Commercial+Property+Inspections" aria-label="Google">G</a></div>
        </div>
        <Link className="blackButton aboutSchedule" href="/contact-us/">Schedule Now!</Link>
        <div className="aboutUsAreas">
          <h2>TUCSON COMMERCIAL INSPECTIONS &amp; ALL OF ARIZONA</h2>
          <p>Providing commercial property inspection services in the <Link href="/">Phoenix Metro Area</Link> as well as <Link href="/about-us/">Tucson</Link>, <Link href="/inspection-services/">Flagstaff</Link>, <Link href="/property-condition-assessments/">Prescott</Link>, <Link href="/showlow-az-commercial-building-inspections/">Showlow</Link>, <Link href="/kingman-arizona-commercial-building-inspections/">Kingman</Link>, <Link href="/yuma-az-commercial-inspections/">Yuma</Link>, <Link href="/payson-az-commercial-building-inspections/">Payson</Link>, and <Link href="/lake-havasu-arizona-commercial-building-inspections/">Lake Havasu</Link>. If you need a commercial property inspection anywhere in Arizona, give us a call.</p>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
