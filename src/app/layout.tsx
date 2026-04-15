import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maximus by Anomalist Studios — AI Content Marketing",
    template: "%s | Maximus",
  },
  description:
    "AI-powered social media content and marketing for local businesses. 120+ brand-matched posts per month across Facebook, Instagram, LinkedIn, and Google Business Profile.",
  metadataBase: new URL("https://anomalistmaximus.com"),
  openGraph: {
    type: "website",
    siteName: "Maximus by Anomalist Studios",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="min-h-screen flex flex-col"><Providers>{children}</Providers></body>
    </html>
  );
}
