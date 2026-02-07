import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { DeviceMockup } from "@/components/landing/DeviceMockup";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/Header";
import { content } from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div
        id="landing-bg"
        className="fixed top-0 left-0 -z-10 h-screen w-full bg-linear-to-b from-white via-transparent to-black opacity-80"
      ></div>
      <div className="flex text-white">
        <div className="relative flex h-screen w-screen max-w-lg flex-col justify-between bg-linear-to-r from-black/70 to-black/90 backdrop-blur-sm after:absolute after:top-0 after:right-0 after:h-full after:bg-linear-to-b after:from-white/40 after:via-white/30 after:to-transparent md:after:w-0.5">
          <Header />
          <div className="space-y-20">
            <div className="justify-start px-20 text-3xl leading-10">
              <span>{content.landing.title}</span>
              <span className="font-extralight text-white/80">
                {" "}
                {content.landing.description.part1}
              </span>
              <span>{content.landing.description.highlight1}</span>
              <span className="font-extralight text-white/80">
                {content.landing.description.part2}
              </span>
              <span>{content.landing.description.highlight2}</span>
              <span className="font-extralight text-white/80">
                {content.landing.description.part3}
              </span>
            </div>
            <div className="px-20">
              <a id="download-button" href={content.header.download.url}>
                <div id="download-button-glow-top"></div>
                <div id="download-button-glow-bottom"></div>
                <div id="download-button-text">
                  {content.landing.downloadButton}
                </div>
              </a>
            </div>
          </div>
          <img
            src={content.images.mobile.src}
            alt={content.images.mobile.alt}
            className="mx-auto block max-w-xs sm:hidden"
          />
          <div className="flex w-full items-center justify-center gap-2 pb-10 text-sm text-white opacity-80">
            <ArrowDown width={18} />
            {content.landing.features}
          </div>
        </div>
        <DeviceMockup />
      </div>
      <div className="relative -z-10 h-screen w-full bg-black after:absolute after:-top-20 after:h-40 after:w-full after:bg-linear-to-b after:from-white/00 after:via-black/10 after:to-black"></div>
      <Footer />
    </>
  );
}
