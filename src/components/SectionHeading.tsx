type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  script?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  script,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-cream ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <span className="text-gold">✦</span>
          {eyebrow}
          <span className="text-gold">✦</span>
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
