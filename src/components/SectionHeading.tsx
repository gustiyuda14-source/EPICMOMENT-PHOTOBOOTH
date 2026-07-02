type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  script?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  script,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-cream/60" : "text-maroon-bright/70"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl">
        {title}
      </h2>
      {script && (
        <p className="mt-1 font-script text-3xl text-gold sm:text-4xl">{script}</p>
      )}
    </div>
  );
}
