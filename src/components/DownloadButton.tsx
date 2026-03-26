import { NIGHTLY_MACOS_URL } from "../constants/paicord";
import { CornerCuts } from "./CornerCuts";

export function DownloadButton() {
  return (
    <a
      href={NIGHTLY_MACOS_URL}
      target="_blank"
      rel="noreferrer"
      className="relative flex min-h-16 items-center justify-center overflow-clip bg-blue px-6 no-underline"
    >
      <CornerCuts />
      <span className="shrink-0 text-2xl font-medium text-white">{">>> Download for macOS"}</span>
    </a>
  );
}
