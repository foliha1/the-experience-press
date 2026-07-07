import { SectionHeading } from "../section-heading";
import { Reveal, RevealItem } from "../reveal";
import flagship from "@/assets/flagship.jpg";

const HOUSES = ["Chick-fil-A", "Coca-Cola", "Trilith", "29029"];

export function Proof() {
  return (
    <section className="px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading numeral="№ 04" title="Pedigree, stated once." />

        <Reveal className="mb-24 flex flex-col gap-6" amount={0.2}>
          <RevealItem>
            <p className="label">Prior rooms</p>
          </RevealItem>
          <RevealItem className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {HOUSES.map((h, i) => (
              <span key={h} className="flex items-center gap-6">
                <span className="font-display text-xl tracking-[0.02em] md:text-2xl">{h}</span>
                {i < HOUSES.length - 1 && (
                  <span aria-hidden className="text-taupe">—</span>
                )}
              </span>
            ))}
          </RevealItem>
        </Reveal>

        <Reveal className="flex flex-col gap-8" amount={0.15}>
          <RevealItem>
            <p className="numeral">Feature — Vol. I</p>
          </RevealItem>
          <RevealItem className="overflow-hidden">
            <img
              src={flagship}
              alt="A letterpress program, brass candlestick, and printed cards set on linen at a candlelit gathering."
              width={1600}
              height={1104}
              loading="lazy"
              className="w-full"
            />
          </RevealItem>
          <div className="grid gap-8 md:grid-cols-12">
            <RevealItem className="md:col-span-4">
              <p className="label mb-3">Case in point</p>
              <h3 className="font-display text-3xl leading-[1.1] md:text-4xl">
                An Evening of Conversation &amp; Connection
              </h3>
              <p className="numeral mt-4">A private dinner for 42 · March · Held annually</p>
            </RevealItem>
            <RevealItem as="p" className="max-w-[62ch] text-lg leading-[1.7] text-ink/85 md:col-span-8">
              Two hundred hours of design work, one room, forty-two seats. The invite, the
              program, the menu, the after-note — set from a single palette, printed on a
              single press. Guests arrived expecting a dinner and left describing a
              publication. The recap didn&rsquo;t need to explain itself; the world did that
              already.
            </RevealItem>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
