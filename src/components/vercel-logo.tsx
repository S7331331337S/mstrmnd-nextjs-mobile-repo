import { cn } from "@/lib/cn";

export function VercelLogo({
  className,
  height = 18,
}: {
  className?: string;
  height?: number;
}) {
  const width = Math.round((height * 21) / 18);
  return (
    <svg
      viewBox="0 0 115 100"
      height={height}
      width={width}
      aria-hidden
      className={cn("fill-current", className)}
    >
      <path d="M57.5 0 115 100H0z" />
    </svg>
  );
}
