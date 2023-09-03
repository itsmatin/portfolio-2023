import "./globals.css";
import type { Metadata } from "next";
import { Gudea, Passion_One } from "next/font/google";

const passionOne = Passion_One({ weight: ["400", "700"], subsets: ["latin"] });
const gudea = Gudea({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matin - Portfolio 2023",
  description:
    "Matin Nikookar is a Software Engineer with focus on team management and frontend engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${passionOne.className} ${gudea.className}`}>
        {children}
      </body>
    </html>
  );
}
