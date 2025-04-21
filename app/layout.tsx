import type { Metadata } from "next";
import {
  manrope,
  spectralSC,
  nevduplenysh,
} from "../components/design-system/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steam Spirit",
  description: "Строительство бань и парилок Steam Spirit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} ${spectralSC.variable} ${nevduplenysh.variable} antialiased bg-dark-green`}
      >
        {children}
      </body>
    </html>
  );
}
