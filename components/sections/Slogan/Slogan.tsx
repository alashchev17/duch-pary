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
      align="center"
      direction={isMobile ? "column" : "row"}
      className="gap-3 md:gap-[22px] pt-12 pb-[100px]"
    >
      <div className="w-full md:max-w-[458px] md:max-h-[452px] text-center px-[16px] md:px-[56px] py-[65.5px] md:py-[94.5px] border-[3px] border-primary rounded-design">
        <Typography variant="header3" className="text-primary">
          {slogan}
        </Typography>
      </div>
      {backgroundMedia.type === "image" ? (
        <SectionImage
          src={urlFor(backgroundMedia.image.asset).url()}
          alt={backgroundMedia.alt}
        />
      ) : (
        <div className="relative w-full h-[460px] md:h-[452px] rounded-design overflow-hidden">
          <SectionVideo
            url={backgroundMedia.video.asset.url}
            className="w-full [&>video]:object-cover"
          />
        </div>
      )}
    </Flex>
  );
};
