import { SectionHeading } from "../section-heading";
import { Reveal, RevealItem } from "../reveal";

type Tier = {
  numeral: string;
  name: string;
  description: string;
  investment: string;
  note?: string;
  dominant?: boolean;
};

const TIERS: Tier[] = [
  {
    numeral: "I.",
    name: "The Sprint",
    description:
      "The system, delivered — a complete kit of parts for the room, ready for your team to set on press, hang on a wall, and hand to a guest.",
    investment: "$28,000 — $40,000",
    note: "Fixed scope. Four to six weeks. Your team executes.",
    dominant: true,
  },
  {
    numeral: "II.",
    name: "Guided Rollout",
    description:
      "The system, plus our direction across your rollout. We hold the standard, walk the fittings, and keep the room coherent while your hands do the making.",
    investment: "From $60,000",
    note: "Season-long guidance. We direct; you produce.",
  },
  {
    numeral: "III.",
    name: "Full Activation",
    description:
      "Direction through the doors. Our managed team builds every surface and holds the standard from load-in to the last light down.",
    investment: "By inquiry",
    note: "A bespoke engagement, shaped to the room.",
  },
];

export function Offer() {
  return (
    <section className="px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading numeral="№ 05" title="Ways to work." />

        <Reveal className="mb-16 md:mb-24" amount={0.3}>
          <RevealItem
            as="p"
            className="max-w-[52ch] font-display text-2xl italic leading-[1.35] text-ink/90 md:text-[30px]"
          >
            Three ways to bring the room into focus — from the kit in your hands to a team
            at your side.
          </RevealItem>
        </Reveal>

        <div className="border-t border-rule">
          {TIERS.map((tier, index) => (
            <Reveal
              key={tier.numeral}
              className="border-b border-rule"
              amount={0.2}
            >
              <RevealItem
                className={`grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:items-baseline md:gap-8 ${
                  tier.dominant ? "md:py-24" : "md:py-16"
                }`}
              >
                <div className="flex items-baseline gap-4 md:col-span-5">
                  <span className="numeral text-taupe">{tier.numeral}</span>
                  <h3
                    className={`font-display leading-[1.05] tracking-[-0.02em] ${
                      tier.dominant
                        ? "text-4xl md:text-6xl lg:text-7xl"
                        : "text-3xl md:text-5xl"
                    }`}
                  >
                    {tier.name}
                  </h3>
                </div>

                <div className="flex flex-col gap-4 md:col-span-4">
                  <p className="max-w-[42ch] font-display text-lg leading-[1.45] text-ink/90 md:text-xl">
                    {tier.description}
                  </p>
                  {tier.note && (
                    <p className="label text-taupe">{tier.note}</p>
                  )}
                </div>

                <div className="md:col-span-3 md:text-right">
                  <p
                    className={`font-display leading-[1] tracking-[-0.02em] tabular-nums ${
                      tier.dominant
                        ? "text-4xl md:text-5xl lg:text-6xl"
                        : "text-3xl md:text-4xl"
                    }`}
                  >
                    {tier.investment}
                  </p>
                </div>
              </RevealItem>
            </Reveal>
          ))}
        </div>

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
