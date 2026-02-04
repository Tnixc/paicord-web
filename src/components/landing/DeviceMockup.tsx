interface DeviceMockupProps {
  className?: string;
}

export function DeviceMockup({ className = "" }: DeviceMockupProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[55%] hidden lg:block">
        <img
          src="/mac.webp"
          alt="Paicord Desktop Application"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute right-[8%] bottom-[5%] w-[15%] hidden lg:block">
        <img
          src="/phone.webp"
          alt="Paicord Mobile Application"
          className="w-full h-auto"
        />
      </div>

      {/* Tablet/Small desktop view - show stacked */}
      <div className="lg:hidden absolute right-[5%] top-[20%] w-[60%] md:w-[50%]">
        <img
          src="/mac.webp"
          alt="Paicord Desktop Application"
          className="w-full h-auto mb-8"
        />
        <div className="w-[40%] mx-auto">
          <img
            src="/phone.webp"
            alt="Paicord Mobile Application"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
