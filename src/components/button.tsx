import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "header" | "header-solid";
type ButtonSize = "sm" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gray-1000 text-background-200 hover:bg-[#383838] dark:hover:bg-[#ccc]",
  secondary:
    "bg-background-100 text-gray-1000 shadow-[0_0_0_1px_var(--gray-alpha-400)] hover:bg-[var(--gray-alpha-100)]",
  header:
    "bg-background-100 text-gray-1000 shadow-[0_0_0_1px_var(--gray-alpha-400)] hover:bg-[var(--gray-alpha-100)]",
  "header-solid":
    "bg-gray-1000 text-background-200 hover:bg-[#383838] dark:hover:bg-[#ccc]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 rounded-md px-2.5 text-[13px]",
  lg: "h-10 rounded-full px-4 text-[15px]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    "inline-flex max-w-full items-center justify-center font-medium transition-colors",
    variants[variant],
    sizes[size],
    className,
  );

  if (external || href.startsWith("http")) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
