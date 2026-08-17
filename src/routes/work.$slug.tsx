import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, RevealItem } from "@/components/reveal";
import { getCaseStudy, getNeighbours } from "@/content/work";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const entry = getCaseStudy(params.slug);
    const title = entry
      ? `${entry.client} — Case study — Oleeha & Co.`
      : "Case study not found — Oleeha & Co.";
    const description = entry
      ? entry.summary.replace(/^DRAFT:\s*/, "")
      : "This case study is not available.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(entry ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const entry = getCaseStudy(slug);

  if (!entry) {
    return (
      <main className="mx-auto max-w-[72rem] px-6 py-32 md:px-10 md:py-40">
        <p className="label text-taupe">Not found</p>
        <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.02em]">
          We don’t have a case study at this address.
        </h1>
        <Link
          to="/"
          className="link-spot mt-10 inline-flex min-h-[44px] items-center font-sans text-base"
        >
          Back to the studio
        </Link>
      </main>
    );
  }

  const { previous, next } = getNeighbours(slug);

  return (
    <main className="mx-auto max-w-[72rem] px-6 py-24 md:px-10 md:py-40">
      <Reveal as="header" amount={0.2}>
        <RevealItem as="p" className="label text-taupe">
          Case study
        </RevealItem>
        <RevealItem as="h1" className="mt-6 font-display text-[clamp(2.75rem,9vw,6rem)] leading-[0.98] tracking-[-0.03em]">
          {entry.client}
        </RevealItem>
        <RevealItem as="p" className="numeral mt-6 text-taupe">
          {entry.year} — {entry.role}
        </RevealItem>
        <RevealItem
          as="p"
          className="mt-12 max-w-[46rem] font-display text-[clamp(1.375rem,3vw,2rem)] leading-[1.35]"
        >
          {entry.summary}
        </RevealItem>
      </Reveal>

      <Reveal as="section" className="mt-20 md:mt-28" amount={0.15}>
        <RevealItem as="h2" className="label text-taupe">
          Services
        </RevealItem>
        <ul className="mt-6 border-t border-rule">
          {entry.services.map((service) => (
            <RevealItem
              as="li"
              key={service}
              className="flex min-h-[44px] items-center border-b border-rule py-4 font-sans text-base"
            >
              {service}
            </RevealItem>
          ))}
        </ul>
      </Reveal>

      <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
        {entry.sections.map((section) => (
          <Reveal as="section" key={section.heading} amount={0.15}>
            <RevealItem as="h2" className="label text-taupe">
              {section.heading}
            </RevealItem>
            <div className="mt-6 max-w-[42rem] space-y-6">
              {section.paragraphs.map((paragraph, index) => (
                <RevealItem
                  as="p"
                  key={index}
                  className="font-display text-[1.0625rem] leading-[1.7] md:text-[1.1875rem]"
                >
                  {paragraph}
                </RevealItem>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal as="section" className="mt-20 border-t border-rule pt-8 md:mt-28" amount={0.2}>
        <RevealItem as="p" className="label text-taupe">
          {entry.credit}
        </RevealItem>
      </Reveal>

      {(previous || next) && (
        <nav className="mt-16 grid gap-0 border-t border-rule md:mt-20 md:grid-cols-2">
          {previous && (
            <Link
              to="/work/$slug"
              params={{ slug: previous.slug }}
              className="group flex min-h-[44px] flex-col justify-center border-b border-rule py-6 md:border-r md:pr-8"
            >
              <span className="label text-taupe">Previous</span>
              <span className="mt-2 font-display text-xl leading-tight transition-colors group-hover:text-vermilion">
                {previous.client}
              </span>
            </Link>
          )}
          {next && (
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group flex min-h-[44px] flex-col justify-center border-b border-rule py-6 md:items-end md:pl-8"
            >
              <span className="label text-taupe">Next</span>
              <span className="mt-2 font-display text-xl leading-tight transition-colors group-hover:text-vermilion">
                {next.client}
              </span>
            </Link>
          )}
        </nav>
      )}
    </main>
  );
}
