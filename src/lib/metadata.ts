import { Metadata } from "next";

export const siteConfig = {
  name: "Dr. Shikha Gupta's Child Clinic",
  shortName: "Dr. Shikha Gupta",
  description:
    "Consultant Paediatrician in Kamla Nagar, Delhi. Specialised care in well-baby checkups, child vaccination, growth monitoring, adolescent health, and parent counselling.",
  url: "https://drshikhagupta.com",
  author: "Dr. Shikha Gupta",
  address: "D-26, Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar, Delhi – 110007",
  telephone: "+919958683094",
};

export function constructMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
} = {}): Metadata {
  const pageTitle = title
    ? `${title} | Dr. Shikha Gupta`
    : "Dr. Shikha Gupta | Paediatrician in Kamla Nagar, Delhi";
  const pageDescription = description || siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${path}`;

  // Automated Open Graph & Twitter Social Card generator
  const cleanTitle = title || "Dr. Shikha Gupta — Consultant Paediatrician";
  const ogImageUrl =
    image ||
    `${siteConfig.url}/api/og?title=${encodeURIComponent(
      cleanTitle
    )}&desc=${encodeURIComponent(pageDescription)}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${pageTitle} — Dr. Shikha Gupta Child Clinic, Kamla Nagar, Delhi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
}
