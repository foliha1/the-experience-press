import { SectionHeading } from "../section-heading";
import { Reveal, RevealItem } from "../reveal";

const TREATMENTS = [
  {
    numeral: "i.",
    name: "The Mark",
    body: "A single held symbol. Legible at the size of a lapel pin and at the size of a stage. The one shape the room remembers when everything else fades.",
  },
  {
    numeral: "ii.",
    name: "The Voice",
    body: "How the world speaks — on the invite, on a badge, in a keynote lower-third, in a thank-you note. One writer, one register, one pair of hands on every line.",
  },
  {
    numeral: "iii.",
    name: "The Object",
    body: "The tactile artifact guests take home. Letterpressed, bound, or cast — a thing with weight, made to be kept, not discarded with the tote.",
  },
  {
    numeral: "iv.",
    name: "The Room",
    body: "Signage, stage, screen, print, and light aligned to a single palette and a single grammar. What arrivals see. What photographs remember.",
  },
];

export function Method() {
  return (
    <section className="px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading numeral="№ 03" title="One system, many accents." />

        <Reveal className="grid gap-10 md:grid-cols-12" amount={0.1}>
          <RevealItem className="md:col-span-4">
            <p className="max-w-[36ch] text-lg leading-[1.7] text-ink/85">
              A short kit of parts, tuned to flex across every surface of the experience —
              from the first envelope to the last frame of the recap film. Coherent in the
              room, coherent on the phone, coherent a year later.
            </p>
          </RevealItem>
          <div className="md:col-span-8">
            <div className="grid gap-px bg-rule md:grid-cols-2">
              {TREATMENTS.map((t) => (
                <RevealItem
                  key={t.name}
                  className="flex flex-col gap-4 bg-paper p-8 md:p-10"
                >
                  <div className="flex items-center gap-3">
                    <span className="numeral">{t.numeral}</span>
                    <span aria-hidden className="h-px w-6 bg-rule" />
                    <span className="label">Treatment</span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight">{t.name}</h3>
                  <p className="text-base leading-[1.65] text-ink/80">{t.body}</p>
                </RevealItem>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
