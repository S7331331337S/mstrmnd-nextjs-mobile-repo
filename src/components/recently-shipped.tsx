import Link from "next/link";

export function RecentlyShipped() {
  return (
    <section className="mt-40 md:mt-52">
      <h2 className="m-0 max-w-[18ch] text-balance text-[32px] leading-[1.1] tracking-tighter sm:text-[48px] lg:text-[56px] lg:leading-none">
        Recently shipped
      </h2>
      <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-12">
        <Link
          href="/eve"
          className="group relative flex aspect-video min-h-0 flex-col items-end overflow-hidden rounded-md bg-background-200 p-5 shadow-border md:col-span-6 md:row-span-2 md:aspect-[1.2]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-70 transition-opacity group-hover:opacity-100 dark:opacity-30 dark:group-hover:opacity-50"
          >
            <svg
              className="absolute top-1/2 left-[-8%] h-auto w-[140%] -translate-y-1/2 fill-gray-1000"
              viewBox="0 0 622 196"
            >
              <path d="M621.6 31.2H432.6L300.6 195.1H258.8L292.3 153.4L415.7 0H621.6V31.2ZM168.7 195H0V163.8H168.7V195ZM621.6 163.8V195H452.9V163.8H621.6ZM142.2 112.4H0V81.3H142.2V112.4ZM621.6 112.4H479.4V81.3H621.6V112.4ZM277.8 31.2H0V0H277.8V31.2Z" />
            </svg>
          </div>
          <header className="relative z-10 mt-auto w-full">
            <h3 className="m-0 text-xl font-medium tracking-tight">eve</h3>
            <p className="m-0 mt-1 max-w-sm text-sm text-gray-900">
              A framework for building durable agents.
            </p>
          </header>
        </Link>

        <Link
          href="/passport"
          className="group relative flex aspect-video min-h-[280px] flex-col items-end overflow-hidden rounded-md bg-background-200 p-5 shadow-border md:col-span-6 md:aspect-auto"
        >
          <div aria-hidden className="absolute top-6 right-8 rotate-12">
            <div className="h-36 w-24 rounded-md bg-linear-to-br from-[#1a3a2a] to-[#0b1a14] p-3 text-[#d7ead8] shadow-lg">
              <div className="text-[10px] tracking-[0.2em] uppercase">Passport</div>
              <div className="mt-8 h-8 w-8 rounded-sm bg-[#d7ead8]/20" />
              <div className="mt-4 h-1.5 w-14 rounded bg-[#d7ead8]/40" />
              <div className="mt-1.5 h-1.5 w-10 rounded bg-[#d7ead8]/25" />
            </div>
          </div>
          <header className="relative z-10 mt-auto w-full">
            <h3 className="m-0 text-xl font-medium tracking-tight">Passport</h3>
            <p className="m-0 mt-1 max-w-72 text-sm text-gray-900">
              Secure every internal agent, app, and deployment with your identity provider.
            </p>
          </header>
        </Link>

        <Link
          href="/containers"
          className="group relative flex aspect-video min-h-[280px] flex-col items-end overflow-hidden rounded-md bg-background-200 p-5 shadow-border md:col-span-6 md:aspect-auto"
        >
          <div
            aria-hidden
            className="absolute top-8 right-8 grid grid-cols-3 gap-1.5 opacity-80 transition-opacity group-hover:opacity-100"
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className="size-7 rounded-sm border border-[var(--gray-alpha-400)] bg-background-100"
              />
            ))}
          </div>
          <header className="relative z-10 mt-auto w-full">
            <h3 className="m-0 text-xl font-medium tracking-tight">Containers</h3>
            <p className="m-0 mt-1 max-w-72 text-sm text-gray-900">
              Run production workloads in isolated containers on Vercel.
            </p>
          </header>
        </Link>
      </div>
    </section>
  );
}
