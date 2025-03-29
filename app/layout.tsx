import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";

// Use Lora font
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"], // Add font weights as needed
  variable: "--font-lora", // CSS custom property for the font
});

// Metadata
export const metadata: Metadata = {
  title: "TaleGarden | Immersive Reading Experience",
  description:
    "TaleGarden is a sophisticated e-reading application that empowers emerging authors to publish while providing readers with an immersive discovery experience. Explore new books, enjoy background soundtracks, and support independent writers.",
  applicationName: "TaleGarden",
  keywords: [
    "TaleGarden",
    "e-reading app",
    "digital books",
    "independent authors",
    "immersive reading",
    "book discovery",
    "reading",
    "publishing",
  ],
  authors: [
    {
      name: "Godsfavour Kio",
      url: "https://godsfavourkio.com",
    },
  ],
  openGraph: {
    title: "TaleGarden | Immersive Reading Experience",
    description:
      "Discover a new way to read with TaleGarden. Support independent authors while enjoying an immersive reading experience with integrated soundtracks.",
    url: "https://talegarden.com",
    siteName: "TaleGarden",
    images: [
      {
        url: "/public/og-image.png",
        width: 1200,
        height: 630,
        alt: "TaleGarden - Immersive Reading Experience",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaleGarden | Immersive Reading Experience",
    description:
      "Join TaleGarden to discover new books and enjoy reading with integrated Spotify soundtracks. A modern platform for readers and authors.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable}`}>
      <body
        className="antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 font-lora"
      >
        <ThemeContextProvider>
          {children}
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}