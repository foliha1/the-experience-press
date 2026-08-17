import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal, RevealItem } from "@/components/reveal";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Oleeha & Co." },
      {
        name: "description",
        content: "Oleeha & Co. is a one-person creative direction studio, kept small on purpose.",
      },
      { property: "og:title", content: "Studio — Oleeha & Co." },
      {
        property: "og:description",
        content: "A one-person creative direction studio. Brand, experience, and the systems that hold them together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <main className="mx-auto max-w-[72rem] px-6 py-24 md:px-10 md:py-40">
      {/* Opening */}
      <Reveal>
        <RevealItem as="p" className="label">
          Studio
        </RevealItem>
        <RevealItem
          as="h1"
          className="mt-6 max-w-[28ch] font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]"
        >
          Oleeha &amp; Co. is a one-person studio, kept small on purpose.
        </RevealItem>
      </Reveal>

      {/* Two paragraphs */}
      <Reveal className="mt-16 md:mt-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <RevealItem as="p" className="text-base leading-relaxed text-ink/80 md:text-lg md:leading-relaxed">
            The studio works across brand strategy, experiential design, digital products, and the physical goods that carry an idea into a room. Every project is led by the same person from first conversation to final file, so the thinking stays continuous and the decisions stay accountable.
          </RevealItem>
          <RevealItem as="p" className="text-base leading-relaxed text-ink/80 md:text-lg md:leading-relaxed">
            Specialists are brought in when the work demands it — fabricators, photographers, motion artists, printers — but the hand holding the standard stays the same. That is why the output holds together, even when the team around it changes.
          </RevealItem>
        </div>
      </Reveal>

      {/* What we hold to */}
      <Reveal className="mt-24 md:mt-32">
        <RevealItem as="p" className="label">
          What we hold to
        </RevealItem>
        <div className="mt-8 border-t border-rule">
          {[
            {
              name: "Play",
              sentence: "Serious work does not have to feel serious. A little mischief keeps the thinking alive.",
            },
            {
              name: "Ethics",
              sentence: "We only take on work we can stand behind, with people we trust to keep their word.",
            },
            {
              name: "Holistic wellness",
              sentence: "The process is part of the product. Rest, clarity, and good food are not luxuries — they are creative infrastructure.",
            },
            {
              name: "Quality over quantity",
              sentence: "A few well-made things, done with patience, outlast a dozen rushed ones.",
            },
            {
              name: "Lighthouse",
              sentence: "One clear signal is worth more than a room full of noise.",
            },
          ].map((principle) => (
            <RevealItem
              key={principle.name}
              className="flex min-h-[44px] flex-col justify-center border-b border-rule py-6"
            >
              <span className="font-display text-xl leading-tight tracking-[-0.01em] md:text-2xl">
                {principle.name}
              </span>
              <span className="mt-2 max-w-[60ch] font-sans text-base leading-relaxed text-taupe">
                {principle.sentence}
              </span>
            </RevealItem>
          ))}
        </div>
      </Reveal>

      {/* Quiet line */}
      <Reveal className="mt-24 md:mt-32">
        <RevealItem
          as="p"
          className="font-display text-xl leading-snug text-ink/80 italic md:text-2xl"
        >
          More joy, less everything else.
        </RevealItem>
      </Reveal>

      {/* Elsewhere */}
      <Reveal className="mt-24 md:mt-32">
        <RevealItem as="p" className="label">
          Elsewhere
        </RevealItem>
        <div className="mt-8 border-t border-rule">
          <RevealItem>
            <Link
              to="/sprint"
              className="group block border-b border-rule py-6 transition-colors duration-300 ease-out hover:border-ink/30 md:py-7"
            >
              <div className="flex flex-col items-start gap-1 md:flex-row md:items-baseline md:gap-8">
                <span className="font-display text-2xl leading-snug tracking-[-0.01em] transition-transform duration-300 ease-out group-hover:translate-x-2 md:text-3xl">
                  Experience Design Sprint
                </span>
                <span className="font-sans text-base leading-relaxed text-taupe md:ml-auto md:text-right">
                  A fixed-scope, fixed-price engagement for high-stakes gatherings.
                </span>
              </div>
            </Link>
          </RevealItem>
          <RevealItem>
            <Link
              to="/work"
              className="group block border-b border-rule py-6 transition-colors duration-300 ease-out hover:border-ink/30 md:py-7"
            >
              <div className="flex flex-col items-start gap-1 md:flex-row md:items-baseline md:gap-8">
                <span className="font-display text-2xl leading-snug tracking-[-0.01em] transition-transform duration-300 ease-out group-hover:translate-x-2 md:text-3xl">
                  Selected work
                </span>
                <span className="font-sans text-base leading-relaxed text-taupe md:ml-auto md:text-right">
                  A small index of projects, shown in full.
                </span>
              </div>
            </Link>
          </RevealItem>
        </div>
      </Reveal>

      {/* Close */}
      <Reveal className="mt-32 md:mt-48">
        <RevealItem
          as="p"
          className="max-w-[44ch] text-[clamp(1.375rem,3vw,2rem)] leading-snug text-ink/90"
        >
          If you have a brief in mind, or a question that needs a clear answer, I would like to hear it.
        </RevealItem>
        <RevealItem className="mt-10">
          <a
            href="mailto:felix@oleeha.co"
            className="link-spot hover:link-spot-hover font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]"
          >
            felix@oleeha.co
          </a>
        </RevealItem>
      </Reveal>
    </main>
  );
}
