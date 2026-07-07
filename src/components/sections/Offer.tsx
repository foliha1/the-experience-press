import { SectionHeading } from "../section-heading";
import { Reveal, RevealItem } from "../reveal";

type Row = {
  label: string;
  eyebrow: string;
  body: React.ReactNode;
  figure?: React.ReactNode;
};

const ROWS: Row[] = [
  {
    label: "I.",
    eyebrow: "What it is",
    body: (
      <>
        A complete experience identity — mark, voice, object, room — delivered as a working
        kit of parts, ready to set on press and hang on a wall.
      </>
    ),
  },
  {
    label: "II.",
    eyebrow: "What&rsquo;s included",
    body: (
      <>
        Every surface the guest touches, from the first envelope in the post to the last
        note after they&rsquo;ve gone home — invite, arrival, signage, screen, print,
        lanyard, menu, and the small book of standards that lets the world you built
        survive the next producer.
      </>
    ),
  },
  {
    label: "III.",
    eyebrow: "Shape &amp; timeline",
    body: (
      <>
        A four- to six-week sprint. One senior team, three movements — read the room, set
        the system, dress the surfaces — with a fitting in the middle and a handover at the
        end. No committee. No drift.
      </>
    ),
  },
  {
    label: "IV.",
    eyebrow: "The investment",
    body: (
      <>
        Twenty-eight to forty thousand dollars — <span className="tabular-nums">$28,000 — $40,000</span> — depending on the number
        of surfaces and the shape of the room. Framed, always, as an investment in the
        evening itself.
      </>
    ),
    figure: (
      <p className="font-display text-5xl leading-[1] tracking-[-0.02em] md:text-7xl">
        $28,000 <span className="text-taupe">—</span> $40,000
      </p>
    ),
  },
];

export function Offer() {
  return (
    <section className="px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading numeral="№ 05" title="The Sprint, on one page." />

        <Reveal className="mb-16 md:mb-24" amount={0.3}>
          <RevealItem as="p" className="max-w-[52ch] font-display text-2xl italic leading-[1.35] text-ink/90 md:text-[30px]">
            A fixed scope, for a fixed investment. Set in weeks, not months — and priced the
            way a good invoice reads, in words and figures both.
          </RevealItem>
        </Reveal>

        <Reveal className="border-t border-rule" amount={0.1}>
          {ROWS.map((row) => (
            <RevealItem
              key={row.label}
              className="grid grid-cols-1 gap-4 border-b border-rule py-10 md:grid-cols-12 md:items-baseline md:gap-8 md:py-14"
            >
              <div className="flex items-baseline gap-4 md:col-span-3">
                <span className="numeral text-taupe">{row.label}</span>
                <span
                  className="label"
                  dangerouslySetInnerHTML={{ __html: row.eyebrow }}
                />
              </div>
              <div className="flex flex-col gap-6 md:col-span-9">
                {row.figure}
                <p className="max-w-[58ch] font-display text-xl leading-[1.45] md:text-2xl">
                  {row.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-12 flex flex-col gap-3 md:mt-16 md:flex-row md:items-baseline md:justify-between" amount={0.5}>
          <RevealItem>
            <p className="label text-taupe">On availability</p>
          </RevealItem>
          <RevealItem className="md:max-w-[46ch]">
            <p className="font-display italic text-lg leading-[1.5] text-ink/80 md:text-xl">
              Six sprints a season. When they&rsquo;re taken, they&rsquo;re taken — the room
              deserves the same attention the guests will.
            </p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
