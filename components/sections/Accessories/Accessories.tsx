"use client";

import { Accessories as AccessoriesData } from "@/app/lib/types";
import { Button, Flex, Typography } from "@/components/design-system";
import React from "react";
import { SectionImage } from "../SectionImage";
import { urlFor } from "@/app/lib/sanity-utils";
import Link from "next/link";
import { smoothScrollToAnchor } from "@/utils/smoothScroll";

export type AccessoriesProps = {
  data: AccessoriesData;
};

export const Accessories: React.FC<AccessoriesProps> = ({ data }) => {
  const { title, description, cardImages, perks, slogan } = data;
  return (
    <Flex id="accessories" direction="column" className="py-9 md:py-14">
      <Flex direction="column" className="mb-6 md:mb-8">
        <Typography
          variant="blockName"
          className="text-brand-primary mb-4 md:mb-6 uppercase"
        >
          Банные печи и аксессуары
        </Typography>
        <Typography variant="header2" className="mb-2">
          {title}
        </Typography>
        <Typography variant="body">{description}</Typography>
      </Flex>
      <Flex className="w-full flex-1 md:flex-[unset] max-h-[390px] md:max-h-[unset] md:h-[485px] gap-2 md:gap-4 overflow-y-hidden overflow-x-visible pb-4 accessories-scroll">
        {cardImages.map((image) => (
          <SectionImage
            className="max-h-[370px] md:max-h-[unset] md:aspect-[0.86] min-w-[calc(100vw-32px)] md:min-w-[unset] md:w-full h-full object-cover rounded-design"
            key={image.asset.url}
            src={urlFor(image).url().toString()}
            loading="eager"
          />
        ))}
      </Flex>
      {perks && perks.visible && (
        <Flex className="gap-2 md:gap-4 flex-col md:flex-row items-center justify-between w-full mt-9">
          {["first", "second", "third"].map((perk) => {
            const typedPerk = perk as keyof AccessoriesData["perks"];
            if (perks[typedPerk]) {
              return (
                <div
                  key={typedPerk}
                  className="w-full md:w-[33%] flex items-center justify-center bg-non-accent-1 h-[60px] md:h-[85px] rounded-design"
                >
                  <Typography
                    variant="body"
                    className="text-center uppercase max-w-[165px]"
                  >
                    {perks[typedPerk]}
                  </Typography>
                </div>
              );
            }
            return null;
          })}
        </Flex>
      )}
      {slogan && (
        <Flex
          direction="column"
          className="items-center justify-center gap-6 md:gap-9 mt-6 md:mt-12 max-w-[100%] md:max-w-[662px] mx-auto"
        >
          <Typography
            variant="header3"
            className="text-brand-primary text-center"
          >
            {slogan}
          </Typography>
          <Link
            href="#contact"
            onClick={(e) => smoothScrollToAnchor(e, "#contact")}
          >
            <Button variant="secondary" className="uppercase">
              Связаться
            </Button>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};
