import React from "react";
import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const SectionImage: React.FC<SectionImageProps> = ({
  src,
  alt,
  className,
  style,
}) => (
  <Image
    src={src}
    width={0}
    height={0}
    sizes="100vh"
    className={className}
    alt={alt ?? ""}
    style={style}
  />
);
