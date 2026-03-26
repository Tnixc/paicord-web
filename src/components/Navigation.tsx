import { useEffect, useState } from "react";
import {
  FALLBACK_STARS,
  GITHUB_API_REPO_URL,
  GITHUB_REPO_URL,
  NIGHTLY_MACOS_URL,
  SPONSOR_URL,
} from "../constants/paicord";
import { NavPill } from "./NavPill";

export function Navigation() {
  const [starCount, setStarCount] = useState(FALLBACK_STARS);

  useEffect(() => {
    const controller = new AbortController();

    const loadStars = async () => {
      try {
        const response = await fetch(GITHUB_API_REPO_URL, {
          signal: controller.signal,
        });
        if (!response.ok) return;

        const data: unknown = await response.json();
        if (
          typeof data === "object" &&
          data !== null &&
          "stargazers_count" in data &&
          typeof data.stargazers_count === "number"
        ) {
          setStarCount(data.stargazers_count);
        }
      } catch {
        // Keep fallback if API request fails.
      }
    };

    void loadStars();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <nav className="flex flex-wrap items-start gap-1 self-stretch lg:flex-nowrap">
      <NavPill>
        <span className="shrink-0 text-[17px]/8 text-dark">Paicord</span>
      </NavPill>

      <a
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noreferrer"
        className="interactive-control no-underline"
      >
        <NavPill>
          <div className="flex items-center gap-0 px-1">
            <span className="shrink-0 text-[17px]/8 text-dark">
              {starCount.toLocaleString()} stars on github
            </span>
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
      </a>

      <a
        href={SPONSOR_URL}
        target="_blank"
        rel="noreferrer"
        className="interactive-control no-underline"
      >
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
      </a>

      <span className="flex-1 bg-transparent"></span>

      <a
        href={NIGHTLY_MACOS_URL}
        target="_blank"
        rel="noreferrer"
        className="interactive-control no-underline"
      >
        <NavPill className="bg-blue">
          <span className="shrink-0 text-[17px]/8 font-medium text-white">{">>> Download"}</span>
        </NavPill>
      </a>
    </nav>
  );
}
