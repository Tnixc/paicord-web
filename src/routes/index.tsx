import { createFileRoute } from "@tanstack/react-router";
import { DeviceMockup } from "@/components/landing/DeviceMockup";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ArrowDown, Download } from "lucide-react";

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
        <div className="w-2xl flex flex-col justify-between bg-linear-to-r from-black/70 to-black/90 h-screen relative after:absolute after:top-0 after:h-full after:right-0 after:w-0.5 after:bg-linear-to-b after:from-white/40 after:via-white/30 after:to-transparent">
          <Header />
          <div className="space-y-20">
            <div className="justify-start px-20 text-3xl leading-10">
              <span className="text-white">Paicord</span>
              <span className="text-white/80 font-extralight">
                {" "}
                is a brand new{" "}
              </span>
              <span className="text-white">open source</span>
              <span className="text-white/80 font-extralight">
                , cross-platform, native{" "}
              </span>
              <span className="text-white">discord client </span>
              <span className="text-white/80 font-extralight">
                written in SwiftUI
              </span>
            </div>
            <div className="px-20">
              <div id="f1">
                <div id="f2"></div>
                <a id="ftext">Download</a>
                <div id="f3"></div>
              </div>
            </div>
          </div>
          <div className="w-full pb-10 flex items-center justify-center text-white gap-2 opacity-80 text-sm">
            <ArrowDown width={18} />
            Features
          </div>
        </div>
        <DeviceMockup />
      </div>
    </>
  );
}
