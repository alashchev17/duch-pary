import type { Metadata } from "next";
import {
  manrope,
  spectralSC,
  nevduplenysh,
} from "../components/design-system/fonts";
import "./globals.css";
import { getSettings } from "./api/settings";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/design-system/LanguageSwitcher";

// Default metadata as fallback
export const defaultMetadata = {
  title: "Steam Spirit",
  description: "Строительство бань и парилок Steam Spirit",
};

export async function generateMetadata(): Promise<Metadata> {
  const settingsArr = await getSettings();
  const settings =
    settingsArr.find((s) => s.language === "ru") || settingsArr[0];

  return {
    title: settings.siteName,
    description: settings.siteDescription || defaultMetadata.description,
    icons: settings.favicon
      ? {
          icon: settings.favicon.asset.url,
          apple: settings.favicon.asset.url,
        }
      : undefined,
  };
}

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
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
