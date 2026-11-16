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
    icon: [
      { url: "/images/logo/drshikhagutpafavicon2.png" },
      { url: "/images/logo/drshikhaguptafavicon2.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/images/logo/drshikhagutpafavicon2.png",
    shortcut: "/images/logo/drshikhagutpafavicon2.png",
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
        <link rel="icon" href="/images/logo/drshikhagutpafavicon2.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo/drshikhagutpafavicon2.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-T3VVZSSP"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-bodyText antialiased bg-white selection:bg-brandBlue selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3VVZSSP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteHeader />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <SiteFooter />
        <MobileBottomBar />
      </body>
    </html>
  );
}
