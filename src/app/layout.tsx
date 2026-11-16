import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { getClinicStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    default: "Dr. Shikha Gupta | Paediatrician in Kamla Nagar, Delhi",
    template: "%s | Dr. Shikha Gupta's Child Clinic",
  },
  description:
    "Consultant Paediatrician in Kamla Nagar, Delhi. MBBS (VMMC & Safdarjung Hospital), MD Pediatrics (RML Hospital / PGIMER). Well-baby care, vaccinations, child growth & development.",
  keywords: [
    "Paediatrician in Kamla Nagar",
    "Child specialist Kamla Nagar Delhi",
    "Dr Shikha Gupta",
    "Child vaccination Kamla Nagar",
    "Well baby clinic North Delhi",
    "Paediatrician Delhi University",
  ],
  authors: [{ name: "Dr. Shikha Gupta" }],
  creator: "Dr. Shikha Gupta's Child Clinic",
  metadataBase: new URL("https://drshikhagupta.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drshikhagupta.com",
    title: "Dr. Shikha Gupta | Paediatrician in Kamla Nagar, Delhi",
    description:
      "Consultant Paediatrician in Kamla Nagar, Delhi. Preventive healthcare, routine immunisation, well-baby care, and growth monitoring.",
    siteName: "Dr. Shikha Gupta's Child Clinic",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = getClinicStructuredData();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-bodyText antialiased bg-white selection:bg-brandBlue selection:text-white">
        <SiteHeader />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <SiteFooter />
        <MobileBottomBar />
      </body>
    </html>
  );
}
