import { Suspense } from "react";
import { MarketingStub } from "@/components/marketing-stub";

export default function CatchAllPage({ params }: PageProps<"/[...slug]">) {
  return (
    <Suspense
      fallback={
        <MarketingStub
          kicker="Vercel"
          title="Loading"
          description="A stub route so header, footer, and homepage links prefetch instantly with Cache Components."
        />
      }
    >
      <CachedStub params={params} />
    </Suspense>
  );
}

async function CachedStub({
  params,
}: {
  params: PageProps<"/[...slug]">["params"];
}) {
  "use cache";
  const { slug } = await params;
  const title = slug
    .at(-1)
    ?.replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <MarketingStub
      kicker={`/${slug.join("/")}`}
      title={title || "Vercel"}
      description="A stub route so header, footer, and homepage links prefetch instantly with Cache Components."
    />
  );
}
