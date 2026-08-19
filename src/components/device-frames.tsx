import { cn } from "@/lib/cn";

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-[var(--gray-alpha-200)] px-3 py-2">
      <span className="size-2 rounded-full bg-[#ff5f57]" />
      <span className="size-2 rounded-full bg-[#febc2e]" />
      <span className="size-2 rounded-full bg-[#28c840]" />
      <span className="ml-2 truncate font-mono text-[11px] text-gray-900">{title}</span>
    </div>
  );
}

export function NotionFrame() {
  return (
    <div className="overflow-hidden rounded-lg bg-background-100 shadow-border">
      <WindowChrome title="notion.ai / agent" />
      <div className="grid min-h-[280px] grid-cols-[88px_1fr] sm:min-h-[360px] sm:grid-cols-[160px_1fr]">
        <aside className="border-r border-[var(--gray-alpha-200)] bg-background-200 p-3">
          <div className="mb-4 h-3 w-16 rounded bg-[var(--gray-alpha-200)]" />
          {["Home", "Inbox", "Agents", "Docs"].map((item) => (
            <div
              key={item}
              className={cn(
                "mb-1 rounded px-2 py-1.5 text-[11px] sm:text-xs",
                item === "Agents"
                  ? "bg-[var(--gray-alpha-100)] text-gray-1000"
                  : "text-gray-900",
              )}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="flex flex-col gap-3 p-4">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[var(--gray-alpha-100)] px-3 py-2 text-xs text-gray-900">
            Summarize last week&apos;s launches and open a PR for the changelog.
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gray-1000 px-3 py-2 text-xs text-background-200">
            Drafted 4 sections. Running tests in a sandbox, then deploying a preview.
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {["Workflow paused", "Sandbox ready", "Gateway routed", "Fluid scaled"].map(
              (label) => (
                <div
                  key={label}
                  className="rounded-md border border-[var(--gray-alpha-200)] px-3 py-2 font-mono text-[11px] text-gray-900"
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ZapierFrame() {
  return (
    <div className="overflow-hidden rounded-lg bg-background-100 shadow-border">
      <WindowChrome title="zapier.com / production" />
      <div className="relative min-h-[280px] overflow-hidden p-5 sm:min-h-[360px]">
        <div className="absolute inset-x-8 top-1/2 h-px bg-[var(--gray-alpha-400)]" />
        <div className="relative grid h-full grid-cols-3 items-center gap-3">
          {[
            { title: "Webhook", sub: "edge / iad1" },
            { title: "Function", sub: "fluid compute" },
            { title: "WAF", sub: "global" },
          ].map((node, index) => (
            <div
              key={node.title}
              className={cn(
                "rounded-lg border border-[var(--gray-alpha-400)] bg-background-200 p-3 shadow-sm",
                index === 1 && "translate-y-4",
              )}
            >
              <div className="text-sm font-medium text-gray-1000">{node.title}</div>
              <div className="font-mono text-[11px] text-gray-900">{node.sub}</div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--gray-alpha-200)]">
                <div
                  className="h-full rounded-full bg-gray-1000"
                  style={{ width: `${40 + index * 22}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="absolute right-4 bottom-4 font-mono text-[11px] text-gray-900">
          100M monthly visits
        </p>
      </div>
    </div>
  );
}

export function MintlifyFrame() {
  return (
    <div className="overflow-hidden rounded-lg bg-background-100 shadow-border">
      <WindowChrome title="docs.acme.dev" />
      <div className="grid min-h-[280px] grid-cols-[96px_1fr] sm:min-h-[360px] sm:grid-cols-[180px_1fr]">
        <aside className="border-r border-[var(--gray-alpha-200)] p-3">
          <div className="mb-3 text-[11px] font-medium tracking-wide text-gray-900 uppercase">
            Documentation
          </div>
          {["Get started", "Tenants", "Domains", "SSL", "Previews"].map((item) => (
            <div
              key={item}
              className={cn(
                "rounded px-2 py-1.5 text-xs",
                item === "Tenants"
                  ? "bg-[var(--gray-alpha-100)] text-gray-1000"
                  : "text-gray-900",
              )}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="p-5">
          <div className="mb-2 font-mono text-[11px] text-gray-900">docs.acme.dev/tenants</div>
          <h3 className="m-0 text-xl tracking-tight text-gray-1000">Tenant isolation</h3>
          <p className="mt-2 max-w-md text-sm text-gray-900">
            Every customer gets a preview URL, a custom domain, and isolated compute on the same
            platform.
          </p>
          <div className="mt-4 overflow-hidden rounded-md bg-[#0a0a0a] p-3 font-mono text-[11px] text-[#ededed]">
            <span className="text-gray-800">$</span> vercel domains add docs.acme.dev
          </div>
        </div>
      </div>
    </div>
  );
}
