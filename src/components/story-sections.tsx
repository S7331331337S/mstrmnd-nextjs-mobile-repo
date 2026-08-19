import { MintlifyFrame, NotionFrame, ZapierFrame } from "@/components/device-frames";
import { cn } from "@/lib/cn";

type Story = {
  heading: string;
  headingStart?: string;
  quoteLead: string;
  quoteRest: string;
  features: string[];
  align: "left" | "right";
  frame: "notion" | "zapier" | "mintlify";
};

const stories: Story[] = [
  {
    heading: "Build agents on infrastructure that thinks like them",
    headingStart: "lg:col-start-1",
    quoteLead: "Notion powers millions",
    quoteRest: "of agent conversations daily on Vercel.",
    features: [
      "Durable Orchestration",
      "Sandboxed Environments",
      "AI Model Gateway",
      "Fluid Compute",
    ],
    align: "right",
    frame: "notion",
  },
  {
    heading: "Ship apps that scale from zero to millions instantly",
    headingStart: "lg:col-start-5",
    quoteLead: "Zapier serves over 100 million",
    quoteRest: "monthly website visits on Vercel.",
    features: [
      "Global Delivery",
      "Deployment Environments",
      "Serverless Functions",
      "Web Application Firewall",
    ],
    align: "left",
    frame: "zapier",
  },
  {
    heading: "Host platforms that serve every customer",
    headingStart: "lg:col-start-1",
    quoteLead: "Mintlify powers documentation for over 20,000",
    quoteRest: "companies on Vercel.",
    features: [
      "Tenant Isolation",
      "Domain Management",
      "Custom SSL Certificates",
      "Preview URLs",
    ],
    align: "right",
    frame: "mintlify",
  },
];

function Frame({ kind }: { kind: Story["frame"] }) {
  if (kind === "notion") return <NotionFrame />;
  if (kind === "zapier") return <ZapierFrame />;
  return <MintlifyFrame />;
}

export function StorySections() {
  return (
    <section className="mt-40 md:mt-52">
      <div className="flex flex-col gap-20 md:gap-40 lg:gap-52">
        {stories.map((story) => (
          <article key={story.heading} className="flex flex-col gap-11">
            <header className="grid w-full grid-cols-1 items-baseline gap-x-5 lg:grid-cols-12">
              <h2
                className={cn(
                  "col-span-8 m-0 text-balance text-[32px] leading-[1.1] tracking-tighter sm:text-[48px] lg:text-[56px] lg:leading-none",
                  story.headingStart,
                  story.heading.includes("Build agents") && "lg:max-w-[18ch]",
                )}
              >
                {story.heading}
              </h2>
            </header>
            <div className="relative grid grid-cols-12 items-center gap-x-0 xl:gap-x-5">
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-0 col-span-12 row-start-1 h-40 w-full rounded-full bg-gray-1000 opacity-0 blur-xl md:blur-[120px] dark:opacity-15",
                  story.align === "right"
                    ? "lg:col-span-8 lg:col-start-1"
                    : "lg:col-span-8 lg:col-start-5",
                )}
              />
              <div
                className={cn(
                  "relative col-span-12 row-start-1 min-h-0 min-w-0 w-full overflow-hidden bg-transparent",
                  story.align === "right"
                    ? "lg:col-span-8 lg:col-start-1"
                    : "lg:col-span-8 lg:col-start-5",
                )}
              >
                <Frame kind={story.frame} />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-24 bg-linear-to-t from-background-200 to-transparent"
                />
              </div>
              <div
                className={cn(
                  "col-span-12 row-start-2 mt-10 flex min-h-0 min-w-0 flex-col gap-10 lg:row-start-1 lg:mt-0 lg:col-span-3",
                  story.align === "right" ? "lg:col-start-10" : "lg:col-start-1",
                )}
              >
                <p className="m-0 text-balance text-2xl text-gray-900">
                  <span className="text-gray-1000">{story.quoteLead}</span> {story.quoteRest}
                </p>
                <ul className="m-0 flex list-none flex-col gap-1.5 p-0 text-sm font-medium">
                  <li className="font-normal text-gray-900">Features</li>
                  {story.features.map((feature) => (
                    <li key={feature} className="text-gray-1000">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
