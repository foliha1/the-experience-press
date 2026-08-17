import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal, RevealItem } from "@/components/reveal";
import { work } from "@/content/work";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Oleeha & Co." },
      {
        name: "description",
        content: "Selected experiences designed and built by Oleeha & Co.",
      },
      { property: "og:title", content: "Work — Oleeha & Co." },
      {
        property: "og:description",
        content: "Selected experiences designed and built by Oleeha & Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkIndex,
});

function stripDraftPrefix(text: string) {
  return text.replace(/^DRAFT:\s*/, "");
}

function WorkIndex() {
  return (
    <main className="mx-auto max-w-[72rem] px-6 py-24 md:px-10 md:py-40">
      <Reveal>
        <RevealItem as="p" className="label">
          Selected work
        </RevealItem>
        <RevealItem as="p" className="mt-4 max-w-[42ch] text-lg leading-relaxed text-ink/80">
          Three projects, shown in full.
        </RevealItem>
      </Reveal>

      <Reveal className="mt-12 md:mt-16">
        {work.map((entry, index) => (
          <RevealItem key={entry.slug}>
            <Link
              to="/work/$slug"
              params={{ slug: entry.slug }}
              className="group block border-t border-rule py-6 transition-colors duration-300 ease-out hover:border-ink/30 md:py-7"
            >
              <div className="flex flex-col items-start gap-3 md:flex-row md:items-baseline md:gap-8">
                <span className="numeral w-10 shrink-0 pt-1 text-taupe">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col md:w-[40%]">
                  <span className="font-display text-2xl leading-snug tracking-[-0.01em] transition-transform duration-300 ease-out group-hover:translate-x-2 md:text-3xl">
                    {entry.client}
                  </span>
                  <span className="numeral mt-1 text-sm text-taupe">
                    {entry.year.replace(/^DRAFT:\s*/, "")} — {entry.role.replace(/^DRAFT:\s*/, "")}
                  </span>
                </div>
                <span className="font-sans text-base leading-relaxed text-taupe md:ml-auto md:w-[45%] md:text-right">
                  {stripDraftPrefix(entry.summary)}
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </Reveal>
    </main>
  );
}
