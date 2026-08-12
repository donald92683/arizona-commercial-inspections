import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title:"Arizona Commercial Property Inspections | Phoenix Commercial Building Inspections",
  description:"Certified commercial property inspections throughout Arizona.",
  icons:{
    icon:[{url:"/favicon-32.png",type:"image/png",sizes:"32x32"},{url:"/ArizonaCommercialPropertyInspections-logo.webp",type:"image/webp"}],
    shortcut:"/favicon-32.png",
    apple:"/apple-touch-icon.png",
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
