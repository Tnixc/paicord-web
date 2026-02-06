import { content } from "@/lib/content";

export function Header() {
  return (
    <nav className="p-7 flex justify-between items-center text-sm font-light">
      <div className="flex items-center gap-2.5">
        <a
          className="underline underline-offset-3 hover:underline-offset-6 ease-in-out transition-all decoration-1"
          href={content.header.github.url}
        >
          {content.header.github.label}
        </a>
        <span className="text-white/50">{content.header.github.stars}</span>
      </div>
      <div className="flex items-center gap-7">
        <a
          className="underline underline-offset-3 hover:underline-offset-6 ease-in-out transition-all decoration-1"
          href={content.header.sponsor.url}
        >
          {content.header.sponsor.label}
        </a>
        <a
          className="underline underline-offset-3 hover:underline-offset-6 ease-in-out transition-all decoration-1"
          href={content.header.docs.url}
        >
          {content.header.docs.label}
        </a>
        <a
          className="underline underline-offset-3 hover:underline-offset-6 ease-in-out transition-all decoration-1"
          href={content.header.download.url}
        >
          {content.header.download.label}
        </a>
      </div>
    </nav>
  );
}