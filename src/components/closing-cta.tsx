import { ButtonLink } from "@/components/button";

export function ClosingCta() {
  return (
    <section className="mt-40 mb-40 flex flex-col items-center text-center md:mt-52 md:mb-52">
      <h2 className="m-0 max-w-5xl px-4 text-balance text-[32px] tracking-tighter sm:text-[48px] lg:text-[56px] lg:leading-none">
        Built by you, or your agents
      </h2>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
        <ButtonLink href="/new">Deploy now</ButtonLink>
        <ButtonLink href="/docs" variant="secondary">
          Onboard your agent
        </ButtonLink>
      </div>
    </section>
  );
}
