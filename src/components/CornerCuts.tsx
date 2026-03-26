export function CornerCuts() {
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
