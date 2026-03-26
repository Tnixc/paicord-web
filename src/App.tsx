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
    <div className="relative h-screen w-screen overflow-clip bg-white antialiased">
      <div className="absolute inset-0 flex flex-col items-start gap-1 p-1">
        {/* Nav */}
        <nav className="flex items-start gap-1 self-stretch">
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
        <div className="flex min-h-0 flex-1 gap-1 self-stretch">
          {/* Left column */}
          <div className="flex w-1/4 shrink-0 flex-col gap-1 h-screen">
            {/* Hero */}
            <div className="relative flex items-center justify-center overflow-clip px-6 py-16 h-full">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 73%, rgba(60,80,200,0.5) 100%)",
                }}
              />
              <HalftoneDots
                contrast={0.3}
                originalColors={false}
                inverted={false}
                grid="hex"
                radius={1.25}
                size={0.5}
                scale={1}
                image="/hero-bg-top.jpg"
                grainMixer={0.2}
                grainOverlay={0.2}
                grainSize={0.5}
                type="gooey"
                fit="cover"
                colorFront="#AFAFAF"
                colorBack="#00000000"
                className="absolute inset-0 fade-in"
              />
              <div className="relative w-[363px] shrink-0 p-4">
                <h1 className="text-5xl/8 text-dark">Paicord</h1>
                <p className="mt-16 text-[32px]/8 font-light text-dark">
                  a brand new open source, cross-platform, native discord client written in SwiftUI
                </p>
              </div>
              <CornerCuts />
            </div>

            {/* Download button */}
            <div className="relative flex flex-1 items-center justify-center overflow-clip bg-blue px-6 max-h-fit">
              <CornerCuts />
              <span className="shrink-0 text-[17px]/8 font-medium text-white">
                {">>> Download for macOS"}
              </span>
            </div>

            {/* Features */}
            <div className="relative flex h-1/2 shrink-0 items-center justify-center overflow-clip px-6 py-16">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(60,80,200,0.5) 0%, transparent 27%)",
                }}
              />
              <HalftoneDots
                contrast={0.3}
                originalColors={false}
                inverted={false}
                grid="hex"
                radius={1.25}
                size={0.5}
                scale={1}
                image="/hero-bg-bottom.jpg"
                grainMixer={0.2}
                grainOverlay={0.2}
                grainSize={0.5}
                type="gooey"
                fit="cover"
                colorFront="#AFAFAF80"
                colorBack="#00000000"
                className="absolute inset-0  fade-in"
              />
              <div className="relative w-[363px] shrink-0 p-4">
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
          <div className="relative flex-1 self-stretch overflow-clip bg-gray">
            <ImageDithering
              originalColors
              inverted={false}
              type="8x8"
              size={2}
              colorSteps={3}
              image="/dither-bg.jpg"
              scale={1}
              fit="cover"
              colorFront="#00000000"
              colorHighlight="#00000000"
              colorBack="#00000000"
              className="absolute inset-0 bg-black mix-blend-hard-light animation-delay-1500 fade-in"
            />
            <CornerCuts />
            <img
              src="/screenshot-desktop.png"
              alt="Paicord desktop screenshot"
              className="absolute left-[177px] top-[37px] w-[925px]"
            />
            <img
              src="/screenshot-mobile.png"
              alt="Paicord mobile screenshot"
              className="absolute left-[50px] top-[235px] w-[254px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
