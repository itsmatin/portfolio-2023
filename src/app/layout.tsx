import "./globals.css";
import type { Metadata } from "next";
import { Gudea, Passion_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion",
});

const gudea = Gudea({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gudea",
});

export const metadata: Metadata = {
  title: "Matin Nikookar - Portfolio 2023",
  icons: "./icon.png",
  applicationName: "Matin Nikookar - Portfolio 2023",
  description:
    "Matin Nikookar is a Software Engineer with focus on team management and frontend engineering.",
  twitter: {
    card: "summary_large_image",
    title: "Matin Nikookar - Portfolio 2023",
    description:
      "Matin Nikookar is a Software Engineer with focus on team management and frontend engineering.",
    images: "./matin-hd.pngs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${passionOne.variable} ${gudea.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
