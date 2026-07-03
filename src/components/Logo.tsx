import Image from "next/image";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/brand/logo-epicmoment.png"
      alt="Epic Moment PhotoBooth"
      width={2188}
      height={680}
      priority
      className={className}
    />
  );
}
