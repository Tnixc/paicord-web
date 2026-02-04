import { createFileRoute } from "@tanstack/react-router";
import { DeviceMockup } from "@/components/landing/DeviceMockup";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div
        id="landing"
        className="absolute top-0 left-0 w-full h-screen bg-linear-to-b from-white via-transparent to-black opacity-80"
      ></div>
      <Header />
      <main className="relative">
        <Hero />
        <DeviceMockup />
        <div className="text-white">
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
          <p>Here is some more content</p>
        </div>
      </main>
    </div>
  );
}
