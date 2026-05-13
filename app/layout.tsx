import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { I18nProvider } from "../components/18nProvider/I18nProvider";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Buzzy Finance",
  description: "Buzzy Finance Platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
