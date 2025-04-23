"use client";
import React from "react";

import { Flex, Typography } from "@/components/design-system";
import { SectionImage } from "../SectionImage";
import { SectionVideo } from "../SectionVideo";

import type { Construction as ConstructionData } from "@/app/lib/types";
import { useIsMobile } from "@/hooks/useIsMobile";
import { urlFor } from "@/app/lib/sanity-utils";

export type ConstructionProps = {
  data: ConstructionData;
};

export const Construction: React.FC<ConstructionProps> = ({ data }) => {
  const { isMobile } = useIsMobile();
  const { process, description, title } = data;
  return (
    <Flex direction="column" className="gap-6 md:gap-10 md:pb-[100px] pb-16">
      <Flex direction="column">
        <Typography variant="blockName" className="text-primary mb-6 uppercase">
          Строительство
        </Typography>
        <Typography variant="header2" className="mb-2">
          {title}
        </Typography>
        <Typography variant="body">{description}</Typography>
      </Flex>
      {process && (
        <Flex direction="column" gap={6} className="w-full">
          {process.map((p, idx) => {
            const processCount = `0${idx + 1}`;
            const isOdd = idx % 2 === 0;

            return (
              <Flex
                key={p.title}
                align="stretch"
                className={`flex-col ${
                  isOdd ? "md:flex-row" : "md:flex-row-reverse"
                } md w-full border-4 border-primary rounded-design h-[447px] md:h-[427px] xl:h-[427px]"`}
              >
                {p.backgroundMedia && (
                  <>
                    {p.backgroundMedia.type === "image" ? (
                      <SectionImage
                        className="w-[100%] md:w-[50%] md:min-w-[50%] lg:w-[65%] lg:min-w-[65%] h-full xs:h-[65%] sm:h-[65%] md:h-full object-cover"
                        src={urlFor(p.backgroundMedia.image).url()}
                        alt={p.backgroundMedia.alt}
                      />
                    ) : (
                      <div className="relative w-[100%] md:w-[50%] md:min-w-[50%] lg:w-[65%] lg:min-w-[65%] h-full xs:h-[65%] sm:h-[65%] md:h-full overflow-hidden">
                        <SectionVideo
                          url={p.backgroundMedia.video.asset.url}
                          className="w-full [&>video]:object-cover"
                        />
                      </div>
                    )}
                  </>
                )}

                <Flex
                  direction="column"
                  align="start"
                  gap={isMobile ? 10 : undefined}
                  className="p-5 md:p-10 md:h-full md:justify-between"
                >
                  <Typography
                    variant="menuBottoms"
                    className="font-bold md:!text-[32px] text-primary"
                  >
                    {processCount}
                  </Typography>
                  <Flex direction="column" gap={isMobile ? 2 : 4} align="start">
                    <Typography variant="header3">{p.title}</Typography>
                    <Typography variant="body">{p.description}</Typography>
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};
