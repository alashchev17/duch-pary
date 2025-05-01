import React from "react";
import Image, { ImageProps } from "next/image";

type SectionImageProps = {
  src: string;
  loading?: ImageProps["loading"];
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const SectionImage: React.FC<SectionImageProps> = ({
  src,
  alt,
  loading,
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
    loading={loading}
  />
);
