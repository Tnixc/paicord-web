interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  return (
    <nav className="p-7 flex justify-between items-center text-sm">
      <div className="flex items-center gap-2.5">
        <a
          className="underline underline-offset-3 decoration-1"
          href="https://github.com/llsc12/paicord"
        >
          GitHub
        </a>
        <span className="text-white/80">201 stars</span>
      </div>
      <div className="flex items-center gap-7">
        <a
          className="underline underline-offset-3 decoration-1"
          href="https://github.com/sponsors/llsc12"
        >
          Sponsor
        </a>
        <a className="underline underline-offset-3 decoration-1">Docs</a>
        <a
          className="underline underline-offset-3 decoration-1"
          href="https://nightly.link/llsc12/Paicord/workflows/build/main/Paicord-macOS.zip
"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
