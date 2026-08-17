import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal, RevealItem } from "../components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oleeha & Co. — Creative Direction Studio" },
      {
        name: "description",
        content:
          "Oleeha & Co. leads creative direction for brands and the agencies serving them — brand, experience, and the systems that hold them together.",
      },
      { property: "og:title", content: "Oleeha & Co. — Creative Direction Studio" },
      {
        property: "og:description",
        content:
          "Creative direction for brands and the agencies serving them. Brand, experience, and the systems that hold them together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioHome,
});

const workItems = [
  {
    index: "01",
    client: "Trilith",
    slug: "trilith",
    description: "A kit-of-parts system for a flagship annual gathering.",
  },
  {
    index: "02",
    client: "29029",
    slug: "29029",
    description: "Brand, digital, and experience for an endurance company.",
  },
  {
    index: "03",
    client: "Coca-Cola",
    slug: "coca-cola",
    description: "Abstract design work for a global brand.",
  },
];

function StudioHome() {
  return (
    <main className="mx-auto max-w-[72rem] px-6 pb-32 md:px-10 md:pb-40">
      {/* Opening */}
      <Reveal className="flex min-h-[90vh] flex-col justify-center py-24 md:py-32">
        <RevealItem
          as="h1"
          className="max-w-[18ch] font-display text-[clamp(2.25rem,6.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em]"
        >
          Oleeha &amp; Co. leads creative direction for brands, and for the agencies serving them.
        </RevealItem>
        <RevealItem
          as="p"
          className="mt-8 max-w-[46ch] font-sans text-base leading-relaxed text-taupe md:text-lg"
        >
          Brand, experience, and the systems that hold them together.
        </RevealItem>
      </Reveal>

      {/* Work index */}
      <Reveal className="mt-8 md:mt-12">
        <RevealItem as="p" className="label">
          Selected work
        </RevealItem>
        <div className="mt-10">
          {workItems.map((item) => (
            <RevealItem key={item.slug}>
              <Link
                to="/work/$slug"
                params={{ slug: item.slug }}
                className="group block border-t border-rule py-6 transition-colors duration-300 ease-out hover:border-ink/30 md:py-7"
              >
                <div className="flex flex-col items-start gap-1 md:flex-row md:items-baseline md:gap-8">
                  <span className="numeral w-10 shrink-0">{item.index}</span>
                  <span className="font-display text-2xl leading-snug tracking-[-0.01em] transition-transform duration-300 ease-out group-hover:translate-x-2 md:text-3xl">
                    {item.client}
                  </span>
                  <span className="font-sans text-base leading-relaxed text-taupe md:ml-auto md:text-right">
                    {item.description}
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </div>
      </Reveal>

      {/* Practice */}
      <Reveal className="mt-28 md:mt-40">
        <RevealItem as="p" className="label">
          Practice
        </RevealItem>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <RevealItem as="p" className="text-base leading-relaxed text-ink/80 md:text-lg md:leading-relaxed">
            The studio works across brand strategy, experiential design, digital products, and the physical goods that carry an idea into a room. Each project is led as one system, so the message stays whole wherever it appears.
          </RevealItem>
          <RevealItem as="p" className="text-base leading-relaxed text-ink/80 md:text-lg md:leading-relaxed">
            Small by intention. One senior director from first conversation to final file, with a trusted circle of specialists called in when the work demands it. The thinking stays coherent because the hand stays the same.
          </RevealItem>
        </div>
      </Reveal>

      {/* Proof line */}
      <Reveal className="mt-28 md:mt-40">
        <div className="rule-hair pt-6">
          <RevealItem
            as="p"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-taupe"
          >
            <span>Chick-fil-A</span>
            <span className="hidden text-rule md:inline">—</span>
            <span>Coca-Cola</span>
            <span className="hidden text-rule md:inline">—</span>
            <span>Trilith</span>
            <span className="hidden text-rule md:inline">—</span>
            <span>29029</span>
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
