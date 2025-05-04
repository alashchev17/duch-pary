"use client";

import { urlFor } from "@/app/lib/sanity-utils";
import type { About as AboutData } from "@/app/lib/types";
import { Flex, Typography } from "@/components/design-system";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import { FeatureIcon } from "./FeatureIcon";

export type AboutProps = {
  data: AboutData;
};

export const About: React.FC<AboutProps> = ({ data }) => {
  const { isMobile } = useIsMobile();
  const { image, description, title, features } = data;
  return (
    <Flex
      id="about"
      direction="column"
      className="gap-6 md:gap-4 md:py-[50px] py-8"
    >
      <Flex
        direction={isMobile ? "column" : "row"}
        align="start"
        className="gap-4 md:gap-10"
      >
        <Flex direction="column" className="md:max-w-[calc(50%-(40px/1.25))]">
          <Typography
            variant="blockName"
            className="text-brand-primary mb-6 uppercase"
          >
            Про нас
          </Typography>
          <Typography variant="header2" className="mb-2">
            {title}
          </Typography>
          <Typography variant="body">{description}</Typography>
        </Flex>
        <Image
          className="w-full h-[333px] object-cover rounded-design"
          src={urlFor(image).url().toString()}
          alt="Photo: About section photo"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Flex>
      {features && (
        <div
          className="
          w-full
          h-auto
          md:h-[210px]
          grid
          gap-4
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
        "
        >
          {features.map((feature) => (
            <Flex
              direction="column"
              align={isMobile ? "center" : "start"}
              justify="between"
              gap={isMobile ? 2 : undefined}
              key={feature.title}
              className="py-4 px-5 bg-non-accent-1 rounded-design h-full"
            >
              <FeatureIcon />
              <Flex
                direction="column"
                gap={isMobile ? 2 : undefined}
                align={isMobile ? "center" : "start"}
              >
                <Typography
                  variant="header4"
                  className="text-center sm:text-left"
                >
                  {feature.title}
                </Typography>
                <Typography variant="body" className="text-center sm:text-left">
                  {feature.description}
                </Typography>
              </Flex>
            </Flex>
          ))}
        </div>
      )}
    </Flex>
  );
};
