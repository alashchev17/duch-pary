import type { Metadata } from "next";
import {
  manrope,
  spectralSC,
  nevduplenysh,
} from "../components/design-system/fonts";
import "./globals.css";
import { getSettings } from "./api/settings";

// Default metadata as fallback
const defaultMetadata = {
  title: "Steam Spirit",
  description: "Строительство бань и парилок Steam Spirit",
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    // Try to fetch settings from Sanity
    const settings = await getSettings();

    // Base metadata with the title and description
    const metadata: Metadata = {
      title: settings.siteName,
      description: settings.siteDescription || defaultMetadata.description,
    };

    // Add favicon if logo is present in settings
    if (settings.favicon) {
      metadata.icons = {
        icon: settings.favicon.asset.url,
        apple: settings.favicon.asset.url,
      };
    }

    return metadata;
  } catch (error) {
    // If there's an error fetching from Sanity, use default metadata
    console.error("Error fetching metadata from Sanity:", error);
    return defaultMetadata;
  }
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
        {children}
      </body>
    </html>
  );
}
