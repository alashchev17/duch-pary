"use client";

import React from "react";

import { Settings } from "@/app/lib/types";

import Container from "./Container";
import { FooterLogo } from "./FooterLogo";

import { iconMapByPlatform, leftLinks, rightLinks } from "./consts";
import Flex from "./Flex";
import Typography from "../Typography";
import Link from "next/link";
import { EnvelopeIcon } from "../Icons/EnvelopeIcon";
import { PhoneIcon } from "../Icons/PhoneIcon";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity-utils";
import { smoothScrollToAnchor } from "@/utils/smoothScroll";

export type FooterProps = {
  data: Settings;
};

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-white text-black py-7 md:py-16">
      <Container>
        <Flex className="flex-col lg:flex-row justify-between gap-12">
          <FooterLogo
            externalLogo={data.logoFooter}
            className="lg:max-w-[calc(50%-48px)]"
          />
          <Flex className="w-full lg:max-w-[calc(50%-16px)]">
            <Flex direction="column" className="w-full">
              <div className="md:pl-6 pb-2 border-b-[3px] border-brand-primary w-full">
                <Typography variant="header4" className="text-brand-primary">
                  Навигация
                </Typography>
              </div>
              <Flex className="w-full md:w-auto md:pl-9 pt-4 md:pt-5 justify-between md:justify-normal md:gap-9">
                <Flex direction="column" className="w-1/2 md:w-auto gap-2">
                  {leftLinks.map((link) =>
                    link.href.startsWith("#") ? (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={(e) => smoothScrollToAnchor(e, link.href)}
                      >
                        <Typography
                          variant="body"
                          className="uppercase md:text-[18px] md:leading-[150%]"
                        >
                          {link.label}
                        </Typography>
                      </Link>
                    ) : (
                      <Link key={link.label} href={link.href}>
                        <Typography
                          variant="body"
                          className="uppercase md:text-[18px] md:leading-[150%]"
                        >
                          {link.label}
                        </Typography>
                      </Link>
                    ),
                  )}
                </Flex>
                <Flex direction="column" className="w-1/2 md:w-auto gap-2">
                  {rightLinks.map((link) =>
                    link.href.startsWith("#") ? (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={(e) => smoothScrollToAnchor(e, link.href)}
                      >
                        <Typography
                          variant="body"
                          className="uppercase md:text-[18px] md:leading-[150%]"
                        >
                          {link.label}
                        </Typography>
                      </Link>
                    ) : (
                      <Link key={link.label} href={link.href}>
                        <Typography
                          variant="body"
                          className="uppercase md:text-[18px] md:leading-[150%]"
                        >
                          {link.label}
                        </Typography>
                      </Link>
                    ),
                  )}
                </Flex>
              </Flex>
              <div className="md:pl-6 pb-2 border-b-[3px] border-brand-primary w-full mt-9">
                <Typography variant="header4" className="text-brand-primary">
                  Контакты
                </Typography>
              </div>
              <Flex
                direction="column"
                className="w-full md:w-auto md:pl-9 pt-4 md:pt-5 md:gap-9"
              >
                <Flex direction="column" className="gap-2">
                  <Link href={`mailto:${data.email}`}>
                    <Typography
                      variant="body"
                      className="uppercase md:lowercase md:text-[18px] md:leading-[150%]"
                    >
                      <span className="flex items-center gap-4">
                        <EnvelopeIcon className="fill-brand-bg" />
                        {data.email}
                      </span>
                    </Typography>
                  </Link>
                  <Link href={`tel:${data.phone.split(" ").join("")}`}>
                    <Typography
                      variant="body"
                      className="uppercase md:lowercase md:text-[18px] md:leading-[150%]"
                    >
                      <span className="flex items-center gap-4">
                        <PhoneIcon className="fill-brand-bg" />
                        {data.phone}
                      </span>
                    </Typography>
                  </Link>
                </Flex>
                {data.socialMedia && (
                  <Flex className="pt-8 md:pt-0 w-full md:w-auto justify-between md:justify-normal md:gap-14">
                    {data.socialMedia.map((link) => (
                      <Link key={link.platform} href={link.url}>
                        {link.platform !== "other" || !link.icon ? (
                          iconMapByPlatform[link.platform]
                        ) : (
                          <Image
                            src={urlFor(link.icon).url()}
                            alt={`Иконка: ${link.platform}`}
                          />
                        )}
                      </Link>
                    ))}
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
};
