import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { getLocalBusinessSchema } from "./lib/structured-data";
import { BASE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from "./lib/metadata";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} | Full-Service Graphics & Signage in Ontario`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: SITE_NAME,
    url: BASE_URL,
    title: `${SITE_NAME} | Full-Service Graphics & Signage in Ontario`,
    description: DEFAULT_DESCRIPTION,
  },
  icons: {
    icon: "/tla-icon.svg",
    shortcut: "/tla-icon.svg",
    apple: "/tla-icon.svg",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} pagemax`} style={{ fontFamily: "var(--font-open-sans), sans-serif" }}>
        <JsonLd data={getLocalBusinessSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VBWE8K4EVR"
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-VBWE8K4EVR');`}
        </Script>
      </body>
    </html>
  );
}
