import { LeftColumn } from "./components/LeftColumn";
import { Navigation } from "./components/Navigation";
import { ScreenshotsPanel } from "./components/ScreenshotsPanel";

export default function App() {
  return (
    <>
      <div className="relative min-h-screen w-screen overflow-x-clip antialiased">
        <div className="flex min-h-screen flex-col items-start gap-1 p-1 lg:h-screen">
          <Navigation />

          <div className="flex min-h-0 flex-1 flex-col gap-1 self-stretch lg:flex-row">
            <LeftColumn />
            <ScreenshotsPanel />
          </div>
        </div>
      </div>
    </>
  );
}
