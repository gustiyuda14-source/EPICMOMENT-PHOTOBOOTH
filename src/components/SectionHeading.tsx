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
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-4 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-cream/80 ${
            centered ? "justify-center" : "justify-start"
          }`}
        >
          <span className="divider-gold w-10" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <span className="text-gold">✦</span>
            {eyebrow}
            <span className="text-gold">✦</span>
          </span>
          <span className="divider-gold w-10" aria-hidden="true" />
        </p>
      )}
      <h2 className="text-gold-gradient font-serif text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl [text-wrap:balance]">
        {title}
      </h2>
      {script && (
        <p className="mt-2 font-script text-3xl text-gold/90 sm:text-4xl">{script}</p>
      )}
    </div>
  );
}
