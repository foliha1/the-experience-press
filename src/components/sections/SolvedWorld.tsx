import { SectionHeading } from "../section-heading";
import { Reveal, RevealItem } from "../reveal";

const SURFACES = ["Invite", "Arrival", "Signage", "Screen", "Print", "Object", "Exit"];

export function SolvedWorld() {
  return (
    <section className="bg-paper px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading numeral="№ 02" title="The room, made unmistakable." />

        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3" amount={0.1}>
            <RevealItem>
              <p className="label mb-6">Surfaces</p>
            </RevealItem>
            <ul className="flex flex-col gap-3">
              {SURFACES.map((s) => (
                <RevealItem key={s} as="li" className="font-mono text-xs uppercase tracking-[0.18em] text-ink/70">
                  {s}
                </RevealItem>
              ))}
            </ul>
          </Reveal>

          <Reveal className="flex flex-col gap-8 md:col-span-9" amount={0.15}>
            <RevealItem as="p" className="max-w-[62ch] font-display text-xl leading-[1.55] md:text-[1.6rem] md:leading-[1.45]">
              The envelope arrives on Tuesday and it is already the weekend. Warm paper, a
              deckle edge, one line of type set with unusual care. You know, before you have
              opened it, what kind of room is waiting.
            </RevealItem>
            <RevealItem as="p" className="max-w-[62ch] text-lg leading-[1.7] text-ink/85">
              At the door there is a mark — not a logo, a <span className="text-vermilion">mark</span> —
              pressed into the lanyard, embossed on the program, cut into the light on the
              back wall. The screens speak the invite&rsquo;s voice. The signage speaks it too.
              The way the host says good morning is somehow part of it. Nothing feels
              decorated. Everything feels edited.
            </RevealItem>
            <RevealItem as="p" className="max-w-[62ch] text-lg leading-[1.7] text-ink/85">
              People feel it before they arrive. They carry it home in a printed keepsake
              small enough to sit on a desk. Six months later, someone at another dinner
              describes it in a single sentence and the whole table nods — because the world
              you made was coherent enough to be named.
            </RevealItem>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
