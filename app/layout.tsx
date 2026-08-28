import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://arizonacommercialinspections.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:{
    default:"Arizona Commercial Property Inspections | Phoenix Commercial Building Inspections",
    template:"%s | Arizona Commercial Property Inspections",
  },
  description:"Certified commercial property inspections, property condition assessments, thermal imaging, and due diligence services throughout Arizona.",
  keywords:["Arizona commercial property inspections","Phoenix commercial building inspector","property condition assessment","commercial thermal imaging","multi-family property inspection"],
  alternates:{canonical:"/"},
  openGraph:{
    type:"website",
    locale:"en_US",
    url:siteUrl,
    siteName:"Arizona Commercial Property Inspections",
    title:"Arizona Commercial Property Inspections",
    description:"Certified commercial property inspections and due diligence services throughout Arizona.",
    images:[{url:"/uploads/2024/02/issue-44-hero.jpg",width:1200,height:800,alt:"Commercial property inspected in Arizona"}],
  },
  twitter:{card:"summary_large_image",title:"Arizona Commercial Property Inspections",description:"Certified commercial property inspections throughout Arizona.",images:["/uploads/2024/02/issue-44-hero.jpg"]},
  robots:{index:true,follow:true},
  icons:{
    icon:[{url:"/favicon-32.png",type:"image/png",sizes:"32x32"},{url:"/ArizonaCommercialPropertyInspections-logo.webp",type:"image/webp"}],
    shortcut:"/favicon-32.png",
    apple:"/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context":"https://schema.org",
  "@type":["LocalBusiness","ProfessionalService"],
  "@id":`${siteUrl}/#organization`,
  name:"Arizona Commercial Property Inspections",
  url:siteUrl,
  logo:`${siteUrl}/ArizonaCommercialPropertyInspections-logo.webp`,
  image:`${siteUrl}/uploads/2024/02/issue-44-hero.jpg`,
  telephone:"+1-480-808-1170",
  email:"arizonacpi@gmail.com",
  areaServed:{"@type":"State","name":"Arizona"},
  description:"Certified commercial property inspection, assessment, and thermal imaging services throughout Arizona.",
  sameAs:[
    "https://www.instagram.com/azcpi/",
    "https://www.facebook.com/Arizonainspections/",
    "https://www.youtube.com/@arizonacommercialinspections",
  ],
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><a className="skipLink" href="#main-content">Skip to main content</a>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}} /></body></html>
}
