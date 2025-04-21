import React from "react";
import Image from "next/image";

type HeroImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, className }) => (
  <Image
    src={src}
    width={0}
    height={0}
    sizes="100vh"
    alt={alt ?? ""}
    className={className}
  />
);

export default HeroImage;
