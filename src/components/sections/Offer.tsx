import { SectionHeading } from "../section-heading";
import { Reveal, RevealItem } from "../reveal";

const ROWS = [
  { label: "Scope", value: "One coherent identity & experience system — mark, voice, object, room." },
  { label: "Shape", value: "A fixed-price sprint. One senior team. No committee, no drift." },
  { label: "Timeline", value: "Four to six weeks, kickoff to handover." },
  { label: "Investment", value: "$28,000 — $40,000", emphasis: true },
];

export function Offer() {
  return (
    <section className="px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading numeral="№ 05" title="The Sprint, on one page." />

        <Reveal className="flex flex-col gap-10" amount={0.15}>
          <RevealItem>
            <p className="label">Colophon</p>
          </RevealItem>

          <div className="rule-hair">
            {ROWS.map((row) => (
              <RevealItem
                key={row.label}
                className="grid grid-cols-1 gap-3 border-b border-rule py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
              >
                <div className="md:col-span-3">
                  <p className="label">{row.label}</p>
                </div>
                <div className="md:col-span-9">
                  {row.emphasis ? (
                    <p className="font-display text-4xl leading-tight tracking-[-0.01em] md:text-6xl">
                      {row.value}
                    </p>
                  ) : (
                    <p className="max-w-[62ch] font-display text-xl leading-[1.45] md:text-2xl">
                      {row.value}
                    </p>
                  )}
                </div>
              </RevealItem>
            ))}
          </div>

          <RevealItem as="p" className="mt-6 max-w-[62ch] text-lg leading-[1.7] text-ink/85">
            The engagement is deliberately fixed. A senior team, four surfaces, one voice —
            delivered as a working system, not a deck. Print vendors briefed, screen files
            cut, signage specified, and a small book of standards left behind so the world
            you built survives the next producer. This is not a line item. It is the reason
            the weekend is remembered.
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
