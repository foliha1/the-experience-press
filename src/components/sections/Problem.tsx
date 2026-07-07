import { SectionHeading } from "../section-heading";
import { Reveal, RevealItem } from "../reveal";

export function Problem() {
  return (
    <section className="px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading numeral="№ 01" title="A gathering, and the blur that swallowed it." />
        <Reveal className="grid gap-10 md:grid-cols-12" amount={0.15}>
          <RevealItem className="md:col-span-4">
            <p className="label">The Problem</p>
          </RevealItem>
          <div className="flex flex-col gap-8 md:col-span-8">
            <RevealItem as="p" className="font-display text-xl leading-[1.5] md:text-[1.6rem] md:leading-[1.45]">
              You raised the money. You booked the room. You brought the right two hundred people
              into it. There was a genuinely good idea at the center of the weekend — the kind of
              idea that ought to be remembered by name a year later.
            </RevealItem>
            <RevealItem as="p" className="max-w-[62ch] text-lg leading-[1.7] text-ink/85">
              And then, quietly, it dissolved. The invite looked like one thing. The stage looked
              like another. The signage was a third voice entirely. The recap deck, sent Monday,
              could have been anyone&rsquo;s event. What ought to have felt like a world — a place
              with weather, with a temperature, with a point of view — arrived as a series of
              rooms that happened to share a hashtag.
            </RevealItem>
            <RevealItem as="p" className="max-w-[62ch] text-lg leading-[1.7] text-ink/85">
              The agency was too slow, and priced for a year you didn&rsquo;t have. The freelancer
              was fast and gifted, and could not hold a whole world together across eight
              surfaces and six vendors. You are not looking for another logo. You are looking for
              the one thing that turns a weekend into a memory.
            </RevealItem>
            <RevealItem className="pt-4">
              <p className="border-l-2 border-vermilion pl-6 font-display text-2xl italic leading-[1.35] md:text-3xl">
                Most events are attended. Very few are remembered. The difference is almost
                always design — and almost never the logo.
              </p>
            </RevealItem>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
