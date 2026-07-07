import { Reveal, RevealItem } from "../reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between px-6 pt-10 pb-10 md:px-16 md:pt-14 md:pb-14">
      <Reveal className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <RevealItem className="flex flex-col gap-1">
          <span className="label">Oleeha &amp; Co.</span>
          <span className="numeral">Experience Design Sprint</span>
        </RevealItem>
        <RevealItem className="numeral md:text-right">
          Fixed scope · Weeks, not months
        </RevealItem>
      </Reveal>

      <Reveal className="flex flex-1 items-center py-16 md:py-24" amount={0.2}>
        <RevealItem as="h1" className="max-w-[16ch] font-display text-[clamp(2.75rem,9vw,9.25rem)] font-normal leading-[0.98] tracking-[-0.025em]">
          The world is drowning in content.{" "}
          <span className="italic text-taupe">Almost nothing</span> is unforgettable in a room.
        </RevealItem>
      </Reveal>

      <Reveal className="flex flex-col gap-3">
        <RevealItem>
          <span aria-hidden className="block h-px w-full bg-rule" />
        </RevealItem>
        <RevealItem className="flex items-center justify-between">
          <span className="label">Begin reading</span>
          <span className="numeral">№ 01 — 06</span>
        </RevealItem>
      </Reveal>
    </section>
  );
}
