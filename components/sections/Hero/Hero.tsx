"use client";

import Link from "next/link";

import HeroVideo from "./HeroVideo";
import HeroImage from "./HeroImage";

import { Button, Flex, Typography } from "../../design-system";
import { urlFor } from "@/app/lib/sanity-utils";

import { Hero as HeroData } from "@/app/lib/types";
import { useIsMobile } from "@/hooks/useIsMobile";
import { smoothScrollToAnchor } from "@/utils/smoothScroll";

type HeroProps = {
  data: HeroData;
};

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const { isMobile } = useIsMobile();
  const { type, alt } = data.backgroundMedia;

  return (
    <Flex
      id="hero"
      className="py-8 max-h-[calc(100vh-5rem)] gap-3 md:gap-6"
      direction="column"
    >
      <Typography
        variant="header1"
        className="text-primary text-center md:max-w-[950px] md:mx-auto"
      >
        {data.title}
      </Typography>

      {data.subtitle && (
        <Typography
          variant="body"
          className="block text-white text-center mx-auto"
        >
          {data.subtitle}
        </Typography>
      )}

      <div className="relative w-full h-[100vh] rounded-design overflow-hidden">
        {type === "video" ? (
          <HeroVideo
            url={data.backgroundMedia.video.asset.url}
            className="w-full [&>video]:object-cover"
          />
        ) : (
          <HeroImage
            src={urlFor(data.backgroundMedia.image).url().toString()}
            alt={alt}
            className="w-full h-full object-cover rounded-design"
          />
        )}
        {!isMobile && (
          <Link
            href={data.ctaButton.link}
            className="absolute left-[50%] bottom-[36px] -translate-x-[50%]"
            onClick={(e) => smoothScrollToAnchor(e, data.ctaButton.link)}
          >
            <Button className="whitespace-nowrap uppercase border-transparent md:border-dark-green">
              {data.ctaButton.text}
            </Button>
          </Link>
        )}
      </div>
      {isMobile && (
        <Link
          href={data.ctaButton.link}
          onClick={(e) => smoothScrollToAnchor(e, data.ctaButton.link)}
          className="w-full mx-auto"
        >
          <Button className="w-full uppercase border-transparent md:border-dark-green">
            {data.ctaButton.text}
          </Button>
        </Link>
      )}
    </Flex>
  );
};
