import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const kuenstler = localFont({
  src: "../public/fonts/Kuenstler 480 BT W08 Roman.ttf",
  variable: "--font-kuenstler",
  display: "swap"
});

export const metadata: Metadata = {
  title: "ISNAP | AI-Powered eCommerce Growth Partner",
  description:
    "ISNAP helps eCommerce brands unlock measurable growth through AI-driven strategy, experimentation, and automation.",
  metadataBase: new URL("https://isnap.ai")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${kuenstler.variable} min-h-screen bg-white font-sans text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
