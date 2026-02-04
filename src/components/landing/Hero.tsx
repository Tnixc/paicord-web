import { ArrowDown, Copy } from "phosphor-react";

interface HeroProps {
  className?: string;
}

export function Hero({ className = "" }: HeroProps) {
  return (
    <section
      className={`relative z-10 flex flex-col items-start justify-center min-h-screen px-6 md:px-16 lg:px-24 ${className}`}
    >
      <div className="max-w-2xl space-y-4 md:space-y-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
          Paicord
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-semibold text-white">
          Cross-platform · Native · SwiftUI
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 pt-2 md:pt-4">
          <button
            type="button"
            className="px-7 py-2.5 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full outline outline-2 outline-offset-[-2px] outline-white/60 hover:from-blue-600 hover:to-blue-500 transition-colors"
          >
            <span className="text-white text-base font-semibold">Download</span>
          </button>

          <div className="flex items-center gap-2.5 px-2.5 py-2">
            <code className="text-white/80 text-xs md:text-sm font-mono">
              brew install paicord
            </code>
            <button
              type="button"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Copy install command"
            >
              <Copy size={16} weight="regular" />
            </button>
          </div>
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-8 md:bottom-12 left-6 md:left-16 lg:left-24 text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2"
      >
        <ArrowDown size={20} weight="regular" />
        <span>Features</span>
      </a>
    </section>
  );
}
