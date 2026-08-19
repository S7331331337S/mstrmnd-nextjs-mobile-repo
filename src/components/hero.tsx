"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/button";
import { cn } from "@/lib/cn";

const capabilities = [
  {
    title: "For coding agents",
    detail: "to deploy in their native language, with Vercel's API, CLI, MCP, and Skills.",
  },
  {
    title: "To ship apps and agents",
    detail: "on infrastructure that scales from zero to millions instantly.",
  },
  {
    title: "Automated by agents",
    detail: "that investigate production, open pull requests, and keep the platform running.",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative flex min-h-[min(calc(100svh-4rem),1100px)] flex-col">
      <div className="relative flex min-h-0 flex-1 flex-col justify-center">
        <div className="page-width relative flex min-h-0 flex-1 flex-col items-center justify-center pb-10 lg:flex-row lg:items-center lg:justify-between lg:py-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
          >
            <div className="hero-glow relative aspect-[3/2] h-[min(125vw,400px)] max-w-[100vw] md:h-[min(100vw,650px)] lg:h-[min(100%,720px)] lg:max-h-[720px]">
              <svg
                className="absolute top-1/2 left-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 text-gray-1000 opacity-90"
                viewBox="0 0 115 100"
              >
                <path fill="currentColor" d="M57.5 0 115 100H0z" />
              </svg>
            </div>
          </div>

          <header className="relative z-10 mx-auto flex w-full max-w-[444px] flex-col items-center gap-4 text-center lg:mx-0 lg:items-start lg:gap-8 lg:text-left">
            <h1 className="m-0 text-balance text-[48px] leading-[1.05] font-normal tracking-tight sm:text-[64px]">
              Agentic Infrastructure
            </h1>
            <p className="w-full max-w-sm text-pretty font-mono text-base text-gray-900 lg:hidden">
              For coding agents to ship apps and agents automated by agents.
            </p>
            <div className="mt-3 flex w-full flex-col items-center justify-center gap-3 sm:flex-row md:w-min lg:mt-0 lg:items-start lg:justify-start">
              <ButtonLink href="/new" className="w-full sm:w-max">
                Deploy now
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="w-full sm:w-max">
                Talk to sales
              </ButtonLink>
            </div>
          </header>

          <nav
            aria-label="Platform capabilities"
            className="relative z-10 mx-0 hidden w-full max-w-[364px] py-8 lg:block"
          >
            <div className="flex flex-col gap-2 px-2">
              {capabilities.map((item, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={item.title}
                    type="button"
                    className="cursor-default overflow-hidden text-left transition-[height] duration-200"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                  >
                    <span className="block text-pretty">
                      <span
                        className={cn(
                          "inline text-base font-medium transition-colors duration-500",
                          isActive ? "text-gray-1000" : "text-gray-1000",
                        )}
                      >
                        {item.title}
                      </span>
                      <span
                        className={cn(
                          "inline text-base text-gray-900 transition-opacity duration-300",
                          isActive ? "opacity-100" : "opacity-0",
                        )}
                      >
                        {" "}
                        {item.detail}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
