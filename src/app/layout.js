import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://evakuatorebi.com"),
  title: "ევაკუატორები თბილისში",
  description:
    "ევაკუატორი 24 საათი თბილისში და მთელ საქართველოში. სწრაფი, იაფი და უსაფრთხო მომსახურება. დაგვიკავშირდით ახლავე!",
  keywords: [
    "ევაკუატორი",
    "ევაკუატორები თბილისში",
    "იაფი ევაკუატორი",
    "ჯუბა",
    "ჯუბა თბილისი",
  ],
  alternates: {
    languages: {
      "ka-GE": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "ევაკუატორი 24/7-ზე",
    description: "სწრაფი და იაფი ევაკუატორი თბილისში",
    url: "https://evakuatorebi.com",
    siteName: "Evakuatorebi",
    images: [
      {
        url: "https://evakuatorebi.com/cover.jpg",
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
    <html lang="en">
      <body className={montserrat.variable}>
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
