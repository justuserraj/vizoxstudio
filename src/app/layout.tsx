import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButtonWrapper from "@/components/WhatsAppButtonWrapper";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vizox Studio | Premium Creative Agency",
  description: "Vizox Studio is a creative digital agency specializing in branding, development, and digital marketing.",
  icons: {
    icon: "/images/favicon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${dmSerifDisplay.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
        <WhatsAppButtonWrapper />
      </body>
    </html>
  );
}
