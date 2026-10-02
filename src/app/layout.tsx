import type { Metadata, Viewport } from "next";
import {
  COMPANY_ADDRESS_LINES,
  COMPANY_NAME,
  COMPANY_REGISTRATION,
  CONTACT_EMAIL,
  HOTLINE_PHONE,
  OFFICE_PHONE,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_CHANNELS
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Aeora Research",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Aeora Research visual identity"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.svg"]
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }]
  }
};

export const viewport: Viewport = {
  themeColor: "#0D141B",
  colorScheme: "light"
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aeora Research",
  legalName: COMPANY_NAME,
  identifier: COMPANY_REGISTRATION,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/aeora-logo-dark.png`,
  email: CONTACT_EMAIL,
  telephone: [OFFICE_PHONE.label, HOTLINE_PHONE.label],
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_ADDRESS_LINES.join(", "),
    addressCountry: "MY"
  },
  sameAs: SOCIAL_CHANNELS.map((channel) => channel.href)
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData).replace(
              /</g,
              "\\u003c"
            )
          }}
        />
        {children}
      </body>
    </html>
  );
}
