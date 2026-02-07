import { content } from "@/lib/content";

export function Header() {
  return (
    <nav className="flex items-center justify-between p-7 font-light text-sm">
      <div className="flex items-center gap-2.5">
        <a className="nav-link" href={content.header.github.url}>
          {content.header.github.label}
        </a>
        <span className="text-white/50">{content.header.github.stars}</span>
      </div>
      <div className="flex items-center gap-7">
        <a className="nav-link" href={content.header.sponsor.url}>
          {content.header.sponsor.label}
        </a>
        <a className="nav-link" href={content.header.docs.url}>
          {content.header.docs.label}
        </a>
        <a className="nav-link" href={content.header.download.url}>
          {content.header.download.label}
        </a>
      </div>
    </nav>
  );
}
