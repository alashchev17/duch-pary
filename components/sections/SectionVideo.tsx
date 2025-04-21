"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Create a client-side only component by dynamically loading ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%" }} />,
});

type SectionVideoProps = {
  url: string;
  className?: string;
};

export const SectionVideo: React.FC<SectionVideoProps> = ({
  url,
  className,
}) => {
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
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full h-auto min-w-[100%] min-h-[100%]">
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
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
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
      </div>
    </div>
  );
};
