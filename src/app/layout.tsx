import type { Metadata } from "next";
import { EB_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

// Load EB Garamond for body text (from Google Fonts)
const garamond = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Load Playfair Display as a Cheltenham alternative for headlines
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vintage Tailwind",
  description: "A vintage newspaper-styled site using Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${playfair.variable} antialiased`}
      >
        <div className="newspaper-container">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
