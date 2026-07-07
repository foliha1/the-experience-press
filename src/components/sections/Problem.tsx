import { SectionHeading } from "../section-heading";
import { Reveal, RevealItem } from "../reveal";

export function Problem() {
  return (
    <section className="px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading numeral="№ 01" title={"The event you saw.\nThe one that showed up.\u00a0"} />
        <Reveal className="grid gap-10 md:grid-cols-12" amount={0.15}>
          <RevealItem className="md:col-span-4">
            <p className="label">The Problem</p>
          </RevealItem>
          <div className="flex flex-col gap-8 md:col-span-8">
            <RevealItem as="p" className="font-display text-xl leading-[1.5] md:text-[1.6rem] md:leading-[1.45]">
              You raised the money. You booked the room. You brought in the right people — the ones whose time is the entire point — and you had something real to say to them.
            </RevealItem>
            <RevealItem as="p" className="max-w-[62ch] text-lg leading-[1.7] text-ink/85">
              And then, quietly, it didn't land the way you saw it — not a failure, just a competent version of the thing, the ambition thinned somewhere between the idea and the room. People were present, but never held. Attended. Never felt.
            </RevealItem>
            <RevealItem as="p" className="max-w-[62ch] text-lg leading-[1.7] text-ink/85">
              The cause is almost always the same, and almost never the content. The invite spoke in one voice, the stage in another, the signage in a third — nothing built to hold together around the single idea at the center. Attention leaked at every seam, and what should have felt like a world felt like a schedule.
            </RevealItem>
            <RevealItem as="p" className="max-w-[62ch] text-lg leading-[1.7] text-ink/85">
              The agency was too slow, and priced for a year you didn't have. The freelancer made lovely parts that never became a whole. You are not looking for another logo. You are looking for a world — one idea, made unmistakable on every surface, so no one ever loses the thread.
            </RevealItem>
            <RevealItem className="pt-6">
              <div className="border-t border-rule pt-6">
                <p className="max-w-[36ch] font-display text-2xl italic leading-[1.35] md:text-3xl">
                  Most experiences are attended. Very few are remembered — and only the remembered ones ever do their work. The difference is almost always design, and almost never the logo.
                </p>
              </div>
            </RevealItem>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
