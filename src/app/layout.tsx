import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PlausibleProvider from "next-plausible";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ai Form Builder",
  description:
    "Create custom forms with ease using Ai Form Builder. Simplify data collection and streamline user interactions with intelligent, responsive form generation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain={process.env.PLAUSIBLE_DOMAIN || ""} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
