import { AnnouncementBar } from "@/components/announcement-bar";
import { ClosingCta } from "@/components/closing-cta";
import { Hero } from "@/components/hero";
import { RecentlyShipped } from "@/components/recently-shipped";
import { StorySections } from "@/components/story-sections";

export default async function Home() {
  "use cache";

  return (
    <div className="page-width relative z-10">
      <AnnouncementBar />
      <Hero />
      <StorySections />
      <RecentlyShipped />
      <ClosingCta />
    </div>
  );
}
