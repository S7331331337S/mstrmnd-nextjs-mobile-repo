import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { VercelLogo } from "@/components/vercel-logo";
import { footerColumns } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="page-width py-10 text-sm">
      <nav aria-label="Vercel Directory">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="my-2 text-sm font-medium text-gray-1000">{column.title}</h2>
              <ul className="m-0 list-none p-0">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}`} className="py-0.5 leading-5">
                    <Link
                      href={link.href}
                      className="inline-flex w-fit items-center gap-1.5 text-gray-900 transition-colors hover:text-gray-1000"
                    >
                      {link.label}
                      {link.badge ? (
                        <span className="rounded-full bg-[var(--gray-alpha-100)] px-2 py-0.5 text-[11px] text-gray-1000">
                          {link.badge}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
      <div className="mt-12 flex flex-col gap-4 border-t border-[var(--gray-alpha-200)] pt-6 text-gray-900 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <VercelLogo height={16} />
          <p className="m-0 text-xs">
            Visual recreation for demo purposes. Not affiliated with Vercel.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/docs" className="hover:text-gray-1000">
            Legal
          </Link>
          <Link href="/docs" className="hover:text-gray-1000">
            Privacy Policy
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
