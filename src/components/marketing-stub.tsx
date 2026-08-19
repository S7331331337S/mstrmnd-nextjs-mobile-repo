import Link from "next/link";
import { ButtonLink } from "@/components/button";

export function MarketingStub({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-width flex min-h-[70vh] flex-col items-start justify-center py-24">
      <p className="m-0 text-sm text-gray-900">{kicker}</p>
      <h1 className="mt-3 max-w-3xl text-balance text-4xl tracking-tight sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-pretty text-gray-900">{description}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/new">Deploy now</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Back home
        </ButtonLink>
      </div>
      <p className="mt-10 text-sm text-gray-900">
        This is a visual recreation of vercel.com for a Next.js 16 demo.{" "}
        <Link href="/" className="underline underline-offset-4">
          Return to the homepage
        </Link>
        .
      </p>
    </div>
  );
}
