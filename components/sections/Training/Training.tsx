"use client";

import React from "react";
import Image from "next/image";

import { Training as TrainingData } from "@/app/lib/types";
import { urlFor } from "@/app/lib/sanity-utils";

import { Flex, Typography } from "@/components/design-system";

export type TrainingProps = {
  data: TrainingData;
};

export const Training: React.FC<TrainingProps> = ({ data }) => {
  const { title, description, slogan, programs } = data;
  return (
    <Flex id="training" direction="column" className="py-9 md:py-14">
      <Flex direction="column" className="mb-6 md:mb-8 md:max-w-[70%]">
        <Typography
          variant="blockName"
          className="text-brand-primary mb-4 md:mb-6 uppercase"
        >
          Обучение
        </Typography>
        <Typography variant="header2" className="mb-2">
          {title}
        </Typography>
        <Typography variant="body">{description}</Typography>
      </Flex>
      <Flex className="flex-wrap flex-col xl:flex-row gap-4 justify-between w-full">
        {programs.map((program) => {
          return (
            <Flex
              key={program.title}
              justify="between"
              className="flex-col md:flex-row rounded-design border-[3px] border-brand-primary md:h-[285px] lg:h-[410px] w-full xl:max-w-[calc(50%-8px)] overflow-hidden"
            >
              <Flex
                direction="column"
                justify="between"
                className="gap-[40px] md:gap-[unset] p-6 md:p-9 h-full"
              >
                <Typography
                  variant="menuBottoms"
                  className="text-brand-primary"
                >
                  Программа
                </Typography>
                <Flex direction="column" className="gap-2 md:gap-4">
                  <Typography variant="header4">{program.title}</Typography>
                  <Typography variant="body">{program.description}</Typography>
                </Flex>
              </Flex>
              <Image
                src={urlFor(program.image).url()}
                alt={`Фото программы: ${program.title}`}
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover w-full md:max-w-[50%] h-full"
              />
            </Flex>
          );
        })}
      </Flex>
      {slogan && (
        <Flex
          direction="column"
          className="items-center justify-center gap-6 md:gap-9 mt-6 md:mt-12 max-w-[100%] md:max-w-[750px] mx-auto"
        >
          <Typography
            variant="header3"
            className="text-brand-primary text-center"
          >
            {slogan}
          </Typography>
        </Flex>
      )}
    </Flex>
  );
};
