import { MarketingStub } from "@/components/marketing-stub";

export default async function EvePage() {
  "use cache";
  return (
    <MarketingStub
      kicker="Agent Stack"
      title="eve"
      description="A framework for building durable agents on Vercel."
    />
  );
}
