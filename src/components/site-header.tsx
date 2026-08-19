"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { VercelLogo } from "@/components/vercel-logo";
import { cn } from "@/lib/cn";
import { productMenu, resourceMenu, type NavGroup } from "@/lib/site";

type OpenPanel = "products" | "resources" | "mobile" | null;

function MenuColumns({ groups }: { groups: NavGroup[] }) {
  return (
    <div className="page-width flex flex-nowrap gap-x-8 pb-6 pt-1">
      {groups.map((group) => (
        <div key={group.title} className="min-w-[220px] shrink-0">
          <h5 className="text-sm text-gray-900">{group.title}</h5>
          <ul className="mt-1.5 flex list-none flex-col">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex w-full py-0.5 text-[20px] font-normal text-gray-1000 no-underline"
                >
                  <span className="underline-offset-[5px] group-hover:underline group-hover:decoration-gray-800">
                    {link.label}
                  </span>
                  {link.external ? (
                    <span className="ml-0.5" aria-hidden>
                      ↗
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MobileGroup({ group }: { group: NavGroup }) {
  return (
    <div className="flex flex-col">
      <h3 className="mb-2 text-sm font-medium text-gray-900">{group.title}</h3>
      <ul className="-mx-3 flex flex-col">
        {group.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center rounded-md px-3 py-1.5 text-lg text-gray-1000 hover:bg-[var(--gray-alpha-100)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState<OpenPanel>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open === "mobile" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 h-16 w-full bg-background-200",
        scrolled && open !== "mobile" && "shadow-[0_1px_0_0_var(--gray-alpha-400)]",
        open === "mobile" && "bg-background-100",
      )}
      onMouseLeave={() => {
        if (open !== "mobile") setOpen(null);
      }}
    >
      <div className="page-width flex h-full items-center gap-3">
        <Link
          href="/"
          aria-label="Vercel"
          className="-ml-2 inline-flex items-center p-2"
          onClick={() => setOpen(null)}
        >
          <VercelLogo />
        </Link>

        <nav
          aria-label="Main navigation"
          className={cn(
            "flex h-full items-center max-[880px]:hidden",
            open === "mobile" && "hidden",
          )}
        >
          <button
            type="button"
            className={cn(
              "flex cursor-pointer items-center bg-transparent py-1.5 pr-2 pl-3 text-sm text-gray-900 outline-none hover:text-gray-1000",
              open === "products" && "text-gray-1000",
            )}
            onMouseEnter={() => setOpen("products")}
            onFocus={() => setOpen("products")}
            aria-expanded={open === "products"}
          >
            Products
            <svg width="14" height="14" viewBox="0 0 16 16" className="ml-0.5" aria-hidden>
              <path
                fill="currentColor"
                d="m12.06 6.75-.53.53-2.82 2.82a1 1 0 0 1-1.42 0L4.47 7.28l-.53-.53L5 5.69l.53.53L8 8.69l2.47-2.47.53-.53z"
              />
            </svg>
          </button>
          <button
            type="button"
            className={cn(
              "flex cursor-pointer items-center bg-transparent py-1.5 pr-2 pl-3 text-sm text-gray-900 outline-none hover:text-gray-1000",
              open === "resources" && "text-gray-1000",
            )}
            onMouseEnter={() => setOpen("resources")}
            onFocus={() => setOpen("resources")}
            aria-expanded={open === "resources"}
          >
            Resources
            <svg width="14" height="14" viewBox="0 0 16 16" className="ml-0.5" aria-hidden>
              <path
                fill="currentColor"
                d="m12.06 6.75-.53.53-2.82 2.82a1 1 0 0 1-1.42 0L4.47 7.28l-.53-.53L5 5.69l.53.53L8 8.69l2.47-2.47.53-.53z"
              />
            </svg>
          </button>
          <Link
            href="/enterprise"
            className="px-3 py-1.5 text-sm text-gray-900 hover:text-gray-1000"
            onMouseEnter={() => setOpen(null)}
          >
            Enterprise
          </Link>
          <Link
            href="/pricing"
            className="px-3 py-1.5 text-sm text-gray-900 hover:text-gray-1000"
            onMouseEnter={() => setOpen(null)}
          >
            Pricing
          </Link>
        </nav>

        <div
          className={cn(
            "ml-auto flex shrink-0 items-center gap-3 max-[880px]:hidden",
            open === "mobile" && "hidden",
          )}
        >
          <ThemeToggle />
          <ButtonLink href="/contact" variant="header" size="sm">
            Get a Demo
          </ButtonLink>
          <ButtonLink href="/login" variant="header" size="sm">
            Log In
          </ButtonLink>
          <ButtonLink href="/signup" variant="header-solid" size="sm">
            Sign Up
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open === "mobile" ? "Close menu" : "Open menu"}
          aria-expanded={open === "mobile"}
          className="relative ml-auto hidden min-h-11 min-w-11 translate-x-2.5 items-center justify-center rounded-md max-[880px]:flex"
          onClick={() => setOpen((current) => (current === "mobile" ? null : "mobile"))}
        >
          {open === "mobile" ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {open === "products" || open === "resources" ? (
        <div className="absolute inset-x-0 top-16 z-40 bg-background-200 shadow-[0_1px_0_0_var(--gray-alpha-400)] max-[880px]:hidden">
          <MenuColumns groups={open === "products" ? productMenu : resourceMenu} />
        </div>
      ) : null}

      {open === "mobile" ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 top-16 z-30 overflow-y-auto bg-background-100 max-[880px]:block hidden"
        >
          <div className="flex flex-col px-6 py-6">
            <div className="mb-6 flex items-center gap-3">
              <ButtonLink href="/contact" variant="header" size="sm" className="flex-1">
                Get a Demo
              </ButtonLink>
              <ButtonLink href="/login" variant="header" size="sm" className="flex-1">
                Log In
              </ButtonLink>
              <ButtonLink href="/signup" variant="header-solid" size="sm" className="flex-1">
                Sign Up
              </ButtonLink>
            </div>
            <div className="mb-4">
              <ThemeToggle />
            </div>
            <details className="group flex flex-col" open>
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between rounded-md px-3 text-[22px] text-gray-900 [&::-webkit-details-marker]:hidden">
                Products
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-open:rotate-180" aria-hidden>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="flex flex-col gap-6 px-3 py-4">
                {productMenu.map((group) => (
                  <MobileGroup key={group.title} group={group} />
                ))}
              </div>
            </details>
            <details className="group flex flex-col">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between rounded-md px-3 text-[22px] text-gray-900 [&::-webkit-details-marker]:hidden">
                Resources
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-open:rotate-180" aria-hidden>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="flex flex-col gap-6 px-3 py-4">
                {resourceMenu.map((group) => (
                  <MobileGroup key={group.title} group={group} />
                ))}
              </div>
            </details>
            <Link href="/enterprise" className="flex min-h-11 items-center px-3 text-[22px] text-gray-900">
              Enterprise
            </Link>
            <Link href="/pricing" className="flex min-h-11 items-center px-3 text-[22px] text-gray-900">
              Pricing
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
