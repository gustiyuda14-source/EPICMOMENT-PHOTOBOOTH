type SparkleProps = {
  className?: string;
  size?: number;
  delay?: number;
};

export function Sparkle({ className = "", size = 24, delay = 0 }: SparkleProps) {
  return (
    <span
      className={`sparkle ${className}`}
      style={{ width: size, height: size, animationDelay: `${delay}s` }}
    />
  );
}

export function SparkleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Sparkle className="top-[15%] left-[10%]" size={26} />
      <Sparkle className="top-[25%] right-[15%]" size={20} delay={0.5} />
      <Sparkle className="top-[60%] left-[20%]" size={14} delay={1} />
      <Sparkle className="top-[75%] right-[10%]" size={30} delay={1.5} />
      <Sparkle className="top-[40%] left-[80%]" size={18} delay={0.8} />
    </div>
  );
}
