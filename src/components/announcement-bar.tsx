import { ButtonLink } from "@/components/button";

export function AnnouncementBar() {
  return (
    <div className="relative z-10 flex min-h-12 w-full items-center justify-center pb-4 lg:py-3">
      <div className="flex flex-wrap items-center justify-center gap-2.5 px-4 text-center text-sm">
        <p className="m-0 text-gray-1000">Ship 26 is coming to SF</p>
        <ButtonLink
          href="https://vercel.fyi/qqAGIC2"
          variant="primary"
          size="sm"
          className="!rounded-full gap-1"
          external
        >
          Get your ticket
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              fill="currentColor"
              d="m6.75 3.94.53.53 2.82 2.82a1 1 0 0 1 0 1.42l-2.82 2.82-.53.53L5.69 11l.53-.53L8.69 8 6.22 5.53 5.69 5z"
            />
          </svg>
        </ButtonLink>
      </div>
    </div>
  );
}
