"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useEffect, useState } from "react";

export function ScrollingBackground() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Hide when scrolled more than 100px
      setIsVisible(scrollPosition < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 -z-10 h-[100px] w-full transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        maskImage: "linear-gradient(to bottom, black, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
      }}
    >
      <FlickeringGrid
        className="absolute inset-0"
        squareSize={3}
        gridGap={4}
        color="#8B5CF6"
        maxOpacity={0.6}
        flickerChance={0.2}
        height={100}
      />
    </div>
  );
}
