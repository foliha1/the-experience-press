import { motion } from "motion/react";
import { SectionHeading } from "../section-heading";
import { Reveal, RevealItem } from "../reveal";
import flagship from "@/assets/flagship.jpg";

const HOUSES = ["Chick-fil-A", "Coca-Cola", "Trilith", "29029"];

const PLATES: { title: string; caption: string }[] = [
  {
    title: "The Invitation",
    caption: "Letterpress, two colours, sent six weeks ahead in a hand-addressed envelope.",
  },
  {
    title: "The Program",
    caption: "A twelve-page booklet, saddle-stitched, waiting at each seat.",
  },
  {
    title: "The Place Card",
    caption: "Foil-stamped monogram, hand-scored, set in a brass holder.",
  },
  {
    title: "The After-Note",
    caption: "A single sheet, mailed the following Tuesday, thanking each guest by name.",
  },
];

const spring = { type: "spring" as const, stiffness: 140, damping: 22, mass: 0.9 };

function Plate({ title, caption, index }: { title: string; caption: string; index: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ ...spring, delay: 0.05 * index }}
      whileHover="hover"
      className="group flex flex-col gap-4"
    >
      <motion.div
        variants={{ hover: { y: -4 } }}
        transition={spring}
        className="relative aspect-[4/5] w-full overflow-hidden border border-rule bg-paper"
      >
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <span className="font-display text-2xl leading-[1.1] md:text-[28px]">
            {title}
          </span>
        </div>
        <span aria-hidden className="absolute left-4 top-4 label text-taupe">
          Plate · {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>
      <motion.figcaption
        variants={{ hover: { color: "var(--ink)" } }}
        transition={{ duration: 0.3 }}
        className="max-w-[28ch] text-sm leading-[1.55] text-taupe"
      >
        {caption}
      </motion.figcaption>
    </motion.figure>
  );
}

export function Proof() {
  return (
    <section className="px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading numeral="№ 04" title="One evening, shown deep." />

        {/* Kicker + headline */}
        <Reveal className="mb-10 flex flex-col gap-4" amount={0.3}>
          <RevealItem>
            <p className="numeral">Case Study — No. 01</p>
          </RevealItem>
          <RevealItem as="h3" className="max-w-[16ch] font-display text-4xl leading-[1.02] tracking-[-0.015em] md:text-6xl">
            An Evening of Conversation &amp; Connection
          </RevealItem>
          <RevealItem>
            <p className="numeral max-w-[80ch]">
              Private host, Atlanta · Full identity &amp; experience system · Design lead · 2024
            </p>
          </RevealItem>
        </Reveal>

        {/* Standfirst */}
        <Reveal className="mb-16 md:mb-24" amount={0.3}>
          <RevealItem as="p" className="max-w-[52ch] font-display text-2xl italic leading-[1.35] text-ink/90 md:text-[32px]">
            Forty-two guests. One room. A single evening asked to feel, on arrival, like a
            publication the guest already trusted — and, by dessert, like a private club they
            hoped to be invited back to.
          </RevealItem>
        </Reveal>

        {/* Hero image */}
        <Reveal className="mb-20 md:mb-28" amount={0.15}>
          <RevealItem>
            <figure className="flex flex-col gap-4">
              <div className="overflow-hidden border border-rule">
                <img
                  src={flagship}
                  alt="A letterpress program, brass candlestick, and printed cards set on linen at a candlelit gathering."
                  width={1600}
                  height={1104}
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <figcaption className="label text-taupe">
                Fig. I — The table, dressed. Photograph, House.
              </figcaption>
            </figure>
          </RevealItem>
        </Reveal>

        {/* Body columns */}
        <Reveal className="mb-24 grid gap-10 md:mb-32 md:grid-cols-3 md:gap-16" amount={0.15}>
          <RevealItem className="flex flex-col gap-4">
            <p className="label">The Challenge</p>
            <span aria-hidden className="h-px w-10 bg-rule" />
            <p className="text-base leading-[1.7] text-ink/85">
              An operator with a serious guest list and no house style. Previous evenings had
              been catered impeccably and remembered vaguely. The room was doing the work of a
              magazine without any of its craft — and the follow-up read like a receipt.
            </p>
          </RevealItem>
          <RevealItem className="flex flex-col gap-4">
            <p className="label">The Method, Applied</p>
            <span aria-hidden className="h-px w-10 bg-rule" />
            <p className="text-base leading-[1.7] text-ink/85">
              The same kit of parts — Emblem, Ribbon, Seams, Cadence — tuned to a private
              evening in the American South. One typeface, two inks, one paper. Every surface
              set from the same press; every sentence in the same voice. Restraint, held for
              five hours in a row.
            </p>
          </RevealItem>
          <RevealItem className="flex flex-col gap-4">
            <p className="label">The Result</p>
            <span aria-hidden className="h-px w-10 bg-rule" />
            <p className="text-base leading-[1.7] text-ink/85">
              Twenty-nine of forty-two guests wrote a thank-you unprompted. Three asked to be
              invited back before the coffee arrived. The evening is now held annually and,
              for the operator, functions as its own referral — a room that recruits the
              next room.
            </p>
          </RevealItem>
        </Reveal>

        {/* Plates */}
        <div className="mb-24 flex flex-col gap-10 md:mb-32">
          <Reveal amount={0.3}>
            <RevealItem className="flex items-baseline justify-between border-b border-rule pb-4">
              <p className="label">Selected Plates</p>
              <p className="numeral">Four of eleven</p>
            </RevealItem>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {PLATES.map((p, i) => (
              <Plate key={p.title} title={p.title} caption={p.caption} index={i} />
            ))}
          </div>
        </div>

        {/* Pedigree line */}
        <Reveal className="border-t border-rule pt-10" amount={0.5}>
          <RevealItem className="flex flex-col gap-4">
            <p className="label text-taupe">In prior rooms</p>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-lg leading-[1.4] tracking-[0.01em] md:text-xl">
              {HOUSES.map((h, i) => (
                <span key={h} className="flex items-center gap-4">
                  <span>{h}</span>
                  {i < HOUSES.length - 1 && (
                    <span aria-hidden className="text-taupe">—</span>
                  )}
                </span>
              ))}
            </p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
