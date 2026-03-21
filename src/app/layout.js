import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ევაკუატორი",
  description:
    "ევაკუატორი 24 საათი თბილისში და მთელ საქართველოში. სწრაფი, იაფი და უსაფრთხო მომსახურება. დაგვიკავშირდით ახლავე!",
  keywords: [
    "ევაკუატორი",
    "evakuatori",
    "ამწე მანიპულატორი",
    "ევაკუატორი თბილისი",
    "evakuatori tbilisi",
    "tow truck georgia",
    "эвакуатор тбилиси",
  ],
  openGraph: {
    title: "ევაკუატორი 24/7-ზე",
    description: "სწრაფი და იაფი ევაკუატორი თბილისში",
    url: "https://evakuatorebi.com",
    siteName: "Evakuatorebi",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ka_GE",
    type: "website",
  },
  verification: {
    google: "GV-nQi2UrGX0T74OVwXazmLlo92Mg-HqH7DlFBOI0U8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Evakuatorebi",
              telephone: "+995555113096",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tbilisi",
                addressCountry: "GE",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
