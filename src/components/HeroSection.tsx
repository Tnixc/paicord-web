import { HalftoneDots } from "@paper-design/shaders-react";

import { CornerCuts } from "./CornerCuts";

export function HeroSection() {
  return (
    <div className="relative flex min-h-[360px] items-center justify-center overflow-clip px-6 py-12 lg:h-full lg:py-16 bg-white">
      <div className="absolute bottom-0 h-20 w-full bg-linear-to-t from-blue to-transparent opacity-60" />
      <HalftoneDots
        contrast={0.3}
        originalColors={false}
        inverted={false}
        grid="hex"
        radius={1.25}
        size={0.5}
        scale={1}
        image="/hero-bg-top.webp"
        grainMixer={0.2}
        grainOverlay={0.2}
        grainSize={0.5}
        type="gooey"
        fit="cover"
        colorFront="#AFAFAF60"
        colorBack="#00000000"
        className="absolute inset-0 fade-in"
      />
      <div className="relative w-full shrink-0 p-4">
        <h1 className="text-4xl/8 text-dark sm:text-5xl/8">Paicord</h1>
        <p className="mt-10 text-[24px]/7 font-light text-dark sm:mt-16 sm:text-[32px]/8">
          a brand new open source, cross-platform, native discord client written in SwiftUI
        </p>
      </div>
      <CornerCuts />
    </div>
  );
}
