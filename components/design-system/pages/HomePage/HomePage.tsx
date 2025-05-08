"use client";

import React, { useEffect, useMemo } from "react";

import { Container } from "@/components/design-system";
import { Header, Footer } from "@/components/design-system/Layout";

import { Hero } from "@/components/sections/Hero";
import { Slogan } from "@/components/sections/Slogan";
import { About } from "@/components/sections/About";
import { Construction } from "@/components/sections/Construction";
import { Portfolio } from "@/components/sections/Portfolio";
import { Accessories } from "@/components/sections/Accessories";
import { Training } from "@/components/sections/Training";
import { Contact } from "@/components/sections/Contact";

import { AllPageData } from "@/app/lib/types";
import { useLanguage } from "../../LanguageSwitcher";

export type HomePageProps = {
  multilanguageData: AllPageData;
};

type LocalizedPageData = {
  [K in keyof AllPageData]: AllPageData[K][number];
};

export const HomePage: React.FC<HomePageProps> = ({ multilanguageData }) => {
  const { currentLanguage } = useLanguage();

  const localizedData = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(multilanguageData).map(([key, arr]) => [
          key,
          arr.find((x) => x.language === currentLanguage.code),
        ]),
      ) as LocalizedPageData,
    [multilanguageData, currentLanguage],
  );

  const {
    settings,
    hero,
    slogan,
    about,
    construction,
    portfolio,
    accessories,
    training,
    contact,
  } = localizedData;

  useEffect(() => {
    document.title = settings.siteName;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const currentContent = metaDesc.getAttribute("content");
      metaDesc.setAttribute(
        "content",
        (settings.siteDescription || currentContent) ?? "",
      );
    }
  }, [settings]);

  return (
    <>
      <Container>
        <Header externalLogo={settings.logoHeader} />
        <Hero data={hero} />
        <Slogan data={slogan} />
        <About data={about} />
        <Construction data={construction} />
      </Container>
      <Portfolio data={portfolio} />
      <Container>
        <Accessories data={accessories} />
        <Training data={training} />
      </Container>
      <Contact data={contact} />
      <Footer data={settings} />
    </>
  );
};
