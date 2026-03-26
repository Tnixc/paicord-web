import { HalftoneDots, ImageDithering } from "@paper-design/shaders-react";

function CornerCuts() {
  return (
    <>
      <div
        className="absolute left-0 top-0 origin-top-left size-2.5 bg-white"
        style={{ rotate: "45deg", translate: "0px -7px" }}
      />
      <div
        className="absolute right-0 bottom-0 origin-top-left size-2.5 bg-white"
        style={{ rotate: "45deg", translate: "10px 3px" }}
      />
      <div
        className="absolute bottom-0 left-0 origin-top-left size-2.5 bg-white"
        style={{ rotate: "45deg", translate: "0px 3px" }}
      />
      <div
        className="absolute top-0 right-0 origin-top-left size-2.5 bg-white"
        style={{ rotate: "45deg", translate: "10px -7px" }}
      />
    </>
  );
}

function NavPill({
  children,
  className = "bg-gray",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-clip px-6 ${className}`}
    >
      <CornerCuts />
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-clip bg-white antialiased lg:h-screen lg:overflow-clip">
      <div className="flex min-h-screen flex-col items-start gap-1 p-1 lg:absolute lg:inset-0 lg:min-h-0">
        {/* Nav */}
        <nav className="flex flex-wrap items-start gap-1 self-stretch lg:flex-nowrap">
          <NavPill>
            <span className="shrink-0 text-[17px]/8 text-dark">Paicord</span>
          </NavPill>

          <NavPill>
            <div className="flex items-center gap-0 px-1">
              <span className="shrink-0 text-[17px]/8 text-dark">268 stars on github</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#222222"
                viewBox="0 0 256 256"
                className="shrink-0"
              >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
              </svg>
            </div>
          </NavPill>

          <NavPill className="bg-pink">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#222222"
                viewBox="0 0 256 256"
                className="shrink-0"
              >
                <path d="M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z" />
              </svg>
              <span className="shrink-0 text-[17px]/8 text-dark">Sponsor</span>
            </div>
          </NavPill>

          <NavPill className="h-8 flex-1 bg-gray" />

          <NavPill className="bg-blue">
            <span className="shrink-0 text-[17px]/8 font-medium text-white">{">>> Download"}</span>
          </NavPill>
        </nav>

        {/* Content */}
        <div className="flex min-h-0 flex-1 flex-col gap-1 self-stretch lg:flex-row">
          {/* Left column */}
          <div className="flex shrink-0 flex-col gap-1 lg:h-screen lg:w-1/3">
            {/* Hero */}
            <div className="relative flex min-h-[360px] items-center justify-center overflow-clip px-6 py-12 lg:h-full lg:py-16">
              <div className="absolute bottom-0 w-full h-20 bg-linear-to-t from-blue to-transparent opacity-60" />
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
              <div className="relative w-full max-w-[363px] shrink-0 p-4">
                <h1 className="text-4xl/8 text-dark sm:text-5xl/8">Paicord</h1>
                <p className="mt-10 text-[24px]/7 font-light text-dark sm:mt-16 sm:text-[32px]/8">
                  a brand new open source, cross-platform, native discord client written in SwiftUI
                </p>
              </div>
              <CornerCuts />
            </div>

            {/* Download button */}
            <div className="relative flex min-h-16 items-center justify-center overflow-clip bg-blue px-6">
              <CornerCuts />
              <span className="shrink-0 text-[17px]/8 font-medium text-white">
                {">>> Download for macOS"}
              </span>
            </div>

            {/* Features */}
            <div className="relative flex min-h-[300px] shrink-0 items-center justify-center overflow-clip px-6 py-12 lg:h-1/2 lg:py-16">
              <div className="absolute top-0 w-full h-20 bg-linear-to-b from-blue to-transparent opacity-60" />
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
          </div>

          {/* Right column — screenshots */}
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
        </div>
      </div>
    </div>
  );
}
