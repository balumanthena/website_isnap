import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  title: "ISNAP | Enterprise AI Infrastructure",
  description:
    "ISNAP helps multi-million dollar eCommerce brands unlock scale through AI-driven operational intelligence.",
  metadataBase: new URL("https://isnap.ai")
};

import { AuthProvider } from "@/lib/auth-context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-enterprise-bg font-sans text-enterprise-text antialiased selection:bg-enterprise-lime/30 selection:text-enterprise-text`}
      >
        <AuthProvider>
          <div className="institutional-bg" />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
