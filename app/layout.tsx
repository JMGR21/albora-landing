import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteUrl } from "@/lib/albora-config";
import { getLocalBusinessJsonLd } from "@/lib/structured-data";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const title = "Albora — Agenda para barberías y estéticas";
const description =
  "Tus clientes agendan solos. Tú no tocas el celular. Albora arma y cuida tu agenda para barberías y estéticas.";

// La imagen de vista previa (og:image / twitter:image) se genera sola en
// app/opengraph-image.tsx y app/twitter-image.tsx — Next agrega esos tags
// automáticamente, no hace falta declararlos aquí.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Albora",
  },
  description,
  applicationName: "Albora",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Albora",
    title,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#161412",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${anton.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessJsonLd()) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
