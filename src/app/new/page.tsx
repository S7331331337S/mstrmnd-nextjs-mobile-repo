import { MarketingStub } from "@/components/marketing-stub";

export default async function NewPage() {
  "use cache";
  return (
    <MarketingStub
      kicker="Deploy"
      title="Deploy now"
      description="Import a Git repository, drop a project, or let your coding agent ship to production."
    />
  );
}
