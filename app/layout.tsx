import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Arizona Commercial Property Inspections | Phoenix Commercial Building Inspections",description:"Certified commercial property inspections throughout Arizona."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
