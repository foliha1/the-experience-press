import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Case study — ${params.slug} — Oleeha & Co.` },
      {
        name: "description",
        content: "A single experience, shown deep — from invitation to exit.",
      },
      { property: "og:title", content: `Case study — ${params.slug} — Oleeha & Co.` },
      {
        property: "og:description",
        content: "A single experience, shown deep — from invitation to exit.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudy,
});

function CaseStudy() {
  const { slug } = Route.useParams();

  return (
    <main className="mx-auto max-w-[72rem] px-6 py-32 md:px-10 md:py-40">
      <p className="numeral">Case Study</p>
      <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
        {slug}
      </h1>
    </main>
  );
}
