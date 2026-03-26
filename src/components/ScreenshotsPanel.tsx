import { ImageDithering } from "@paper-design/shaders-react";

import { CornerCuts } from "./CornerCuts";

export function ScreenshotsPanel() {
  return (
    <div className="relative h-[clamp(360px,95vw,620px)] self-stretch overflow-clip bg-gray lg:h-auto lg:min-h-0 lg:flex-1">
      <ImageDithering
        originalColors
        inverted={false}
        type="8x8"
        size={2}
        colorSteps={3}
        image="/dither-bg.webp"
        scale={1}
        fit="cover"
        colorFront="#00000000"
        colorHighlight="#00000000"
        colorBack="#00000000"
        className="absolute inset-0 mix-blend-hard-light animation-delay-1500 fade-in"
      />
      <CornerCuts />
      <img
        src="/screenshot-desktop.webp"
        alt="Paicord desktop screenshot"
        className="absolute left-1/2 top-[8%] w-[94%] max-w-[925px] -translate-x-1/2 lg:left-[177px] lg:top-[37px] lg:w-[925px] lg:translate-x-0"
      />
      <img
        src="/screenshot-mobile.webp"
        alt="Paicord mobile screenshot"
        className="absolute bottom-[4%] left-[6%] w-[35%] min-w-[120px] max-w-[254px] lg:bottom-auto lg:left-[50px] lg:top-[235px] lg:w-[254px]"
      />
    </div>
  );
}
