import { CornerCuts } from "./CornerCuts";

export function NavPill({
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
