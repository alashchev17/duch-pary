"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Create a client-side only component by dynamically loading ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%" }} />,
});

type HeroVideoProps = {
  url: string;
  className?: string;
};

const HeroVideo: React.FC<HeroVideoProps> = ({ url, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={className} style={{ width: "100%", height: "100%" }} />
    );
  }

  return (
    <ReactPlayer
      url={url}
      className={className}
      playing={true}
      muted={true}
      playsinline={true}
      width="100%"
      height="100%"
      loop={true}
      pip={false}
      controls={false}
      config={{
        file: {
          attributes: {
            autoPlay: true,
            playsInline: true,
            muted: true,
          },
        },
      }}
    />
  );
};

export default HeroVideo;
