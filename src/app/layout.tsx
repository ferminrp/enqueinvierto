import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

const baseUrl = "https://enqueinvierto.ar"
const ogImageUrl = "https://ik.imagekit.io/ferminrp/Meta%20Images/enqueinvierto.png"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Carteras de Inversión | Quaestus Wealth Management",
    template: "%s | Quaestus Wealth Management",
  },
  description:
    "Explora las carteras de inversión recomendadas por Quaestus Wealth Management para diferentes perfiles de riesgo.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Enqueinvierto.ar",
    title: {
      default: "Carteras de Inversión | Quaestus Wealth Management",
      template: "%s | Quaestus Wealth Management",
    },
    description:
      "Explora las carteras de inversión recomendadas por Quaestus Wealth Management para diferentes perfiles de riesgo.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Enqueinvierto - Carteras de Inversión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Carteras de Inversión | Quaestus Wealth Management",
      template: "%s | Quaestus Wealth Management",
    },
    description:
      "Explora las carteras de inversión recomendadas por Quaestus Wealth Management para diferentes perfiles de riesgo.",
    images: [ogImageUrl],
    creator: "@quaestusWM",
    site: "@quaestusWM",
  },
  icons: {
    icon: "https://ik.imagekit.io/ferminrp/Meta%20Images/enqueinvierto-favicon.png?updatedAt=1745524975176",
    shortcut: "https://ik.imagekit.io/ferminrp/Meta%20Images/enqueinvierto-favicon.png?updatedAt=1745524975176",
    apple: "https://ik.imagekit.io/ferminrp/Meta%20Images/enqueinvierto-favicon.png?updatedAt=1745524975176",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Meta tags adicionales para asegurar compatibilidad con WhatsApp */}
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Enqueinvierto - Carteras de Inversión" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Enqueinvierto.ar" />
        <link
          rel="icon"
          href="https://ik.imagekit.io/ferminrp/Meta%20Images/enqueinvierto-favicon.png?updatedAt=1745524975176"
          type="image/png"
        />
      </head>
      <body className={inter.className}>
        {children}
        {/* Ahrefs Analytics Tracking Code */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="VyVTMM/SObcp8KlRW+O10A"
          strategy="afterInteractive"
        />
        {/* Microsoft Clarity Tracking Code */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r96iv9onfh");
          `}
        </Script>
        {/* Google Analytics (GA4) - Script externo */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3G0GB719N6" strategy="afterInteractive" />
        {/* Google Analytics (GA4) - Script de inicialización */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3G0GB719N6');
          `}
        </Script>
      </body>
    </html>
  )
}
