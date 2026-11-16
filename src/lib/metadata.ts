import { Metadata } from "next";

export const siteConfig = {
  name: "Dr. Shikha Gupta's Child Clinic",
  shortName: "Dr. Shikha Gupta",
  description:
    "Consultant Paediatrician in Kamla Nagar, Delhi. Specialised care in well-baby checkups, child vaccination, growth monitoring, adolescent health, and parent counselling.",
  url: "https://drshikhagupta.com",
  ogImage: "https://drshikhagupta.com/og-image.jpg",
  author: "Dr. Shikha Gupta",
  address: "D-26, Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar, Delhi – 110007",
  telephone: "+919958683094",
};

export function constructMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const pageTitle = title
    ? `${title} | Dr. Shikha Gupta`
    : "Dr. Shikha Gupta | Paediatrician in Kamla Nagar, Delhi";
  const pageDescription = description || siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${path}`;

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
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
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

