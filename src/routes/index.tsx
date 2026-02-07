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
        id="landing"
        className="fixed top-0 left-0 w-full h-screen bg-linear-to-b from-white via-transparent to-black opacity-80 -z-10"
      ></div>
      <div className="flex text-white">
        <div className="w-screen max-w-lg flex flex-col justify-between bg-linear-to-r from-black/70 to-black/90 h-screen relative after:absolute after:top-0 after:h-full after:right-0 md:after:w-0.5 after:bg-linear-to-b after:from-white/40 after:via-white/30 after:to-transparent backdrop-blur-sm">
          <Header />
          <div className="space-y-20">
            <div className="justify-start px-20 text-3xl leading-10">
              <span className="text-white">{content.landing.title}</span>
              <span className="text-white/80 font-extralight">
                {" "}
                {content.landing.description.part1}
              </span>
              <span className="text-white">
                {content.landing.description.highlight1}
              </span>
              <span className="text-white/80 font-extralight">
                {content.landing.description.part2}
              </span>
              <span className="text-white">
                {content.landing.description.highlight2}
              </span>
              <span className="text-white/80 font-extralight">
                {content.landing.description.part3}
              </span>
            </div>
            <div className="px-20">
              <a id="f1" href={content.header.download.url}>
                <div id="f2"></div>
                <div id="f3"></div>
                <div id="ftext">{content.landing.downloadButton}</div>
              </a>
            </div>
          </div>
          <img
            src={content.images.mobile.src}
            alt={content.images.mobile.alt}
            className="sm:hidden block max-w-xs mx-auto"
          />
          <div className="w-full pb-10 flex items-center justify-center text-white gap-2 opacity-80 text-sm">
            <ArrowDown width={18} />
            {content.landing.features}
          </div>
        </div>
        <DeviceMockup />
      </div>
      <div className="w-full h-screen bg-black relative after:absolute  after:w-full after:bg-linear-to-b after:from-white/00 after:via-black/10 after:to-black after:h-40 after:-top-20 -z-10"></div>
      <Footer />
    </>
  );
}
