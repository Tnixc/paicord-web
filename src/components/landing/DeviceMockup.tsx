import { content } from "@/lib/content";

export function DeviceMockup() {
  return (
    <>
      <img
        src={content.images.desktop.src}
        alt={content.images.desktop.alt}
        className="absolute top-1/2 -translate-y-1/2 block max-w-7xl max-h-200 left-4/7 -translate-x-1/3 -z-10"
      />
      <img
        src={content.images.mobile.src}
        alt={content.images.mobile.alt}
        className="absolute max-w-sm top-1/2 -translate-y-1/4 right-12 block -z-10 max-h-200 drop-shadow-2xl pb-20"
      />
    </>
  );
}
