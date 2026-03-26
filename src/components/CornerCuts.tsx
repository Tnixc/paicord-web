export function CornerCuts() {
  return (
    <>
      <div className="absolute -left-1.5 -top-1.5 origin-center size-3 bg-white rotate-45" />
      <div className="absolute -right-1.5 -bottom-1.5 origin-center size-3 bg-white rotate-45" />
      <div className="absolute -bottom-1.5 -left-1.5 origin-center size-3 bg-white rotate-45" />
      <div className="absolute -top-1.5 -right-1.5 origin-center size-3 bg-white rotate-45" />
    </>
  );
}
