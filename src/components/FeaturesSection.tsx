import { HalftoneDots } from "@paper-design/shaders-react";

import { CornerCuts } from "./CornerCuts";

export function FeaturesSection() {
  return (
    <div className="relative flex min-h-[300px] shrink-0 items-center justify-center overflow-clip px-6 py-12 lg:h-1/2 lg:py-16">
      <div className="absolute top-0 h-20 w-full bg-linear-to-b from-blue to-transparent opacity-60" />
      <HalftoneDots
        contrast={0.3}
        originalColors={false}
        inverted={false}
        grid="hex"
        radius={1.25}
        size={0.5}
        scale={1}
        image="/hero-bg-bottom.webp"
        grainMixer={0.2}
        grainOverlay={0.2}
        grainSize={0.5}
        type="gooey"
        fit="cover"
        colorFront="#AFAFAF60"
        colorBack="#00000000"
        className="absolute inset-0  fade-in"
      />
      <div className="relative w-full max-w-[363px] shrink-0 p-4">
        <p className="text-[32px]/8 font-light text-dark">
          Available on macOS, iOS, and iPadOS
          <br />
          <br />
          Feature complete. Voice support.
        </p>
      </div>
      <CornerCuts />
    </div>
  );
}
