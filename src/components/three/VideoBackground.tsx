"use client";

import { useEffect, useState } from "react";

export function VideoBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    if (window.innerWidth >= 768) {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => setShouldLoad(true));
      } else {
        setTimeout(() => setShouldLoad(true), 2000);
      }
    }

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile || !shouldLoad) {
    return <div className="absolute inset-0 gradient-bg opacity-40 z-0" />;
  }

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 gradient-bg opacity-40" />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
    </div>
  );
}
