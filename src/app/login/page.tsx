import { MarketingStub } from "@/components/marketing-stub";

export default async function LoginPage() {
  "use cache";
  return (
    <MarketingStub
      kicker="Account"
      title="Log In"
      description="Sign in to deploy apps, manage agents, and inspect production."
    />
  );
}
