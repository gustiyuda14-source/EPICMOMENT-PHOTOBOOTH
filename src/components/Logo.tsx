const RAYS = Array.from({ length: 12 }, (_, i) => i * 30);

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {RAYS.map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="50"
          x2="50"
          y2="6"
          stroke="currentColor"
          strokeWidth="1.5"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-cream ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <div className="leading-tight">
        <div className="font-serif font-bold uppercase tracking-[0.2em] text-lg">
          Epic Moment
        </div>
        <div className="font-sans font-light uppercase tracking-[0.4em] text-[0.6rem] opacity-80">
          Photo Booth
        </div>
      </div>
    </div>
  );
}
