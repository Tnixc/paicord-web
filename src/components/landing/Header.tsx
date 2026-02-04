import { List, X } from "phosphor-react";
import { useState } from "react";

interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 ${className}`}
      >
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-full flex justify-between items-center gap-4 p-2">
          {/* desktop navigation */}
          <nav className="hidden md:flex flex-1 justify-start items-center gap-7 overflow-x-auto">
            <div className="ml-1.5 px-3 py-1 bg-amber-400/30 rounded-full border-dashed border-2 border-amber-400 flex justify-center items-center gap-2.5 whitespace-nowrap">
              <span className="text-yellow-950 text-sm font-normal">
                Paicord is under active development!
              </span>
            </div>
            <a
              href="#contribute"
              className="text-black text-sm font-normal hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              Contribute
            </a>
            <a
              href="#issues"
              className="text-black text-sm font-normal hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              Issues
            </a>
          </nav>

          <div className="flex md:hidden ml-1.5 px-2 py-1 bg-amber-400/30 rounded-full border-2 border-amber-400">
            <span className="text-yellow-950 text-xs font-normal whitespace-nowrap">
              In Development
            </span>
          </div>

          <button
            type="button"
            className="hidden md:flex px-7 py-2.5 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full outline outline-2 outline-offset-[-2px] outline-white/60 justify-center items-center gap-2.5 hover:from-blue-600 hover:to-blue-500 transition-colors whitespace-nowrap flex-shrink-0"
          >
            <span className="text-white text-base font-semibold">Download</span>
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden p-2 text-black hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} weight="regular" />
            ) : (
              <List size={24} weight="regular" />
            )}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setIsMenuOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.key === "Escape" && setIsMenuOpen(false)}
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#contribute"
                className="text-black text-base font-normal hover:opacity-70 transition-opacity py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contribute
              </a>
              <a
                href="#issues"
                className="text-black text-base font-normal hover:opacity-70 transition-opacity py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Issues
              </a>
              <button
                type="button"
                className="w-full px-7 py-3 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full outline outline-2 outline-offset-[-2px] outline-white/60 hover:from-blue-600 hover:to-blue-500 transition-colors mt-2"
              >
                <span className="text-white text-base font-semibold">
                  Download
                </span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
