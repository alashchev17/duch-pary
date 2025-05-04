"use client";
import React from "react";

import { Flex, Typography } from "@/components/design-system";
import { SectionImage } from "../SectionImage";
import { SectionVideo } from "../SectionVideo";

import { urlFor } from "@/app/lib/sanity-utils";
import type { Slogan as SloganData } from "@/app/lib/types";
import { useIsMobile } from "@/hooks/useIsMobile";

export type SloganProps = {
  data: SloganData;
};

export const Slogan: React.FC<SloganProps> = ({ data }) => {
  const { backgroundMedia, slogan } = data;
  const { isMobile } = useIsMobile();
  return (
    <Flex
      id="slogan"
      align="center"
      direction={isMobile ? "column" : "row"}
      className="gap-3 md:gap-[22px] mt-0 md:mt-12 mb-8 md:mb-[50px] md:max-h-[380px] items-stretch"
    >
      <div className="flex items-center justify-center w-full md:max-w-[458px] h-[inherit] text-center px-[16px] md:px-[56px] py-[65.5px] md:py-[94.5px] border-[3px] border-brand-primary rounded-design">
        <Typography
          variant="header3"
          className="text-brand-primary md:text-[26px]"
        >
          {slogan}
        </Typography>
      </div>
      {backgroundMedia.type === "image" ? (
        <SectionImage
          src={urlFor(backgroundMedia.image.asset).url()}
          alt={backgroundMedia.alt}
        />
      ) : (
        <div className="relative w-full h-[460px] md:h-[380px] rounded-design overflow-hidden">
          <SectionVideo
            url={backgroundMedia.video.asset.url}
            className="w-full [&>video]:object-cover"
          />
        </div>
      )}
    </Flex>
  );
};
