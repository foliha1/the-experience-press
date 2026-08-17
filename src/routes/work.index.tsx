import { createFileRoute } from "@tanstack/react-router";

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

function WorkIndex() {
  return (
    <main className="mx-auto max-w-[72rem] px-6 py-32 md:px-10 md:py-40">
      <p className="numeral">Work</p>
      <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
        Selected experiences
      </h1>
    </main>
  );
}
