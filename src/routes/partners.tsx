import { createFileRoute } from "@tanstack/react-router";

import { Reveal, RevealItem } from "../components/reveal";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "For Partners — Oleeha & Co." },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "A private page for agency and studio partners considering a brief with Oleeha & Co.",
      },
      { property: "og:title", content: "For Partners — Oleeha & Co." },
      { property: "og:description", content: "A private page for agency and studio partners considering a brief with Oleeha & Co." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="px-6 py-8 md:px-10">
        <span className="font-display text-lg tracking-[-0.01em]">Oleeha &amp; Co.</span>
      </header>

      <main className="mx-auto max-w-[72rem] px-6 pb-32 md:px-10 md:pb-40">
        {/* Opening */}
        <Reveal className="pt-12 md:pt-20">
          <RevealItem as="p" className="label">
            For agency and studio partners
          </RevealItem>
          <RevealItem as="h1" className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,6.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em]">
            When the work is sold and nobody senior is free.
          </RevealItem>
          <RevealItem as="p" className="mt-8 max-w-[54ch] text-lg leading-relaxed text-ink md:text-xl md:leading-relaxed">
            Their client presents in three weeks. The work needs a senior voice. Your best creative director is already on three other accounts, and hiring another one is a nine-month decision you cannot make in nine days.
          </RevealItem>
        </Reveal>

        {/* What you are actually buying */}
        <Reveal className="mt-28 md:mt-40">
          <RevealItem as="p" className="label">
            What you are actually buying
          </RevealItem>
          <div className="mt-10 grid gap-0">
            <RevealItem className="rule-hair py-6 first:border-t-0 md:py-7">
              <p className="font-display text-xl leading-snug tracking-[-0.01em] md:text-2xl">
                Hours back.
              </p>
            </RevealItem>
            <RevealItem className="rule-hair py-6 md:py-7">
              <p className="font-display text-xl leading-snug tracking-[-0.01em] md:text-2xl">
                A client who stays calm.
              </p>
            </RevealItem>
            <RevealItem className="rule-hair py-6 md:py-7">
              <p className="font-display text-xl leading-snug tracking-[-0.01em] md:text-2xl">
                No headcount risk.
              </p>
            </RevealItem>
          </div>
        </Reveal>

        {/* Three ways to work together */}
        <Reveal className="mt-28 md:mt-40">
          <RevealItem as="p" className="label">
            Three ways to work together
          </RevealItem>
          <div className="mt-10 grid gap-0">
            <RevealItem className="rule-hair py-8 md:py-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between md:gap-10">
                <div className="max-w-[46ch]">
                  <p className="numeral mb-3">01</p>
                  <h2 className="font-display text-2xl leading-snug tracking-[-0.01em] md:text-3xl">
                    Embedded creative direction
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink/80">
                    Creative direction on live client work, concept development, design review for your team, and client-facing presentation support.
                  </p>
                </div>
                <div className="shrink-0">
                  <p className="font-mono text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none tracking-[-0.02em] text-ink">
                    $6,000<span className="text-[0.45em] text-taupe">/month</span>
                  </p>
                  <p className="mt-2 font-mono text-sm text-taupe">20 hours · no carry-over</p>
                </div>
              </div>
            </RevealItem>

            <RevealItem className="rule-hair py-8 md:py-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between md:gap-10">
                <div className="max-w-[46ch]">
                  <p className="numeral mb-3">02</p>
                  <h2 className="font-display text-2xl leading-snug tracking-[-0.01em] md:text-3xl">
                    Systems build
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink/80">
                    Brand systems, kit-of-parts systems, design system documentation, and campaign or event frameworks.
                  </p>
                </div>
                <div className="shrink-0">
                  <p className="font-mono text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none tracking-[-0.02em] text-ink">
                    From $18,000
                  </p>
                  <p className="mt-2 font-mono text-sm text-taupe">Fixed scope · one client at a time</p>
                </div>
              </div>
            </RevealItem>

            <RevealItem className="rule-hair py-8 md:py-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between md:gap-10">
                <div className="max-w-[46ch]">
                  <p className="numeral mb-3">03</p>
                  <h2 className="font-display text-2xl leading-snug tracking-[-0.01em] md:text-3xl">
                    Pitch and concept support
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink/80">
                    Creative territories, concept work under deadline, and a second senior opinion when the room needs one.
                  </p>
                </div>
                <div className="shrink-0">
                  <p className="font-mono text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none tracking-[-0.02em] text-ink">
                    $1,800<span className="text-[0.45em] text-taupe">/day</span>
                  </p>
                </div>
              </div>
            </RevealItem>
          </div>
        </Reveal>

        {/* Proof */}
        <Reveal className="mt-28 md:mt-40">
          <RevealItem as="p" className="label">
            Proof
          </RevealItem>
          <RevealItem as="p" className="mt-8 max-w-[52ch] font-display text-[clamp(1.375rem,3vw,2rem)] leading-snug tracking-[-0.01em]">
            Trilith via Brand Apart, 29029, and work with Chick-fil-A and Coca-Cola.
          </RevealItem>
        </Reveal>

        {/* How I work */}
        <Reveal className="mt-28 md:mt-40">
          <RevealItem as="p" className="label">
            How I work
          </RevealItem>
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-12">
            <RevealItem as="p" className="text-base leading-relaxed text-ink/80">
              US Eastern mornings, 9 AM to 12 PM ET, Monday to Friday. Based in Europe so that window is protected.
            </RevealItem>
            <RevealItem as="p" className="text-base leading-relaxed text-ink/80">
              Async by default. Their client, their logo.
            </RevealItem>
          </div>
        </Reveal>

        {/* Credit and case study */}
        <Reveal className="mt-28 md:mt-40">
          <RevealItem as="p" className="label">
            Credit and case study
          </RevealItem>
          <RevealItem as="p" className="mt-8 max-w-[60ch] text-base leading-relaxed text-ink/80">
            Credit where credit is given. Portfolio rights 90 days after public launch. Your approval on anything published. A white-label alternative if an account requires it.
          </RevealItem>
        </Reveal>

        {/* Close */}
        <Reveal className="mt-32 md:mt-48">
          <RevealItem as="p" className="max-w-[44ch] text-[clamp(1.375rem,3vw,2rem)] leading-snug text-ink/90">
            If the brief is right, I will read it carefully and reply within two working days.
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

      <footer className="border-t border-rule px-6 py-10 md:px-10">
        <p className="numeral">Private page — Oleeha &amp; Co.</p>
      </footer>
    </div>
  );
}
