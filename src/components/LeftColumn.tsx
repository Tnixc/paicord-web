import { DownloadButton } from "./DownloadButton";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";

export function LeftColumn() {
  return (
    <div className="flex shrink-0 flex-col gap-1 lg:h-full lg:w-1/3">
      <HeroSection />
      <DownloadButton />
      <FeaturesSection />
    </div>
  );
}
