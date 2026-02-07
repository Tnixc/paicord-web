import { content } from "@/lib/content";

export function DeviceMockup() {
  return (
    <>
      <img
        src={content.images.desktop.src}
        alt={content.images.desktop.alt}
        className="absolute top-1/2 left-4/7 -z-10 block max-h-200 max-w-7xl -translate-x-1/3 -translate-y-1/2"
      />
      <img
        src={content.images.mobile.src}
        alt={content.images.mobile.alt}
        className="absolute top-1/2 right-12 -z-10 block max-h-200 max-w-sm -translate-y-1/4 pb-20 drop-shadow-2xl"
      />
    </>
  );
}
