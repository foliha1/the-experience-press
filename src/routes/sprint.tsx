import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { SolvedWorld } from "@/components/sections/SolvedWorld";
import { Method } from "@/components/sections/Method";
import { Proof } from "@/components/sections/Proof";
import { Offer } from "@/components/sections/Offer";
import { Invitation } from "@/components/sections/Invitation";

export const Route = createFileRoute("/sprint")({
  head: () => ({
    meta: [
      { title: "The Experience Design Sprint — Oleeha & Co." },
      {
        name: "description",
        content:
          "A fixed-scope sprint that gives operators of high-stakes gatherings one coherent identity and experience system — invite to exit — in weeks, not months.",
      },
      { property: "og:title", content: "The Experience Design Sprint — Oleeha & Co." },
      {
        property: "og:description",
        content:
          "One coherent identity and experience system for premium in-person gatherings. Four to six weeks. Fixed price.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SprintPage,
});

function SprintPage() {
  return (
    <main className="bg-paper text-ink">
      <Hero />
      <Problem />
      <SolvedWorld />
      <Method />
      <Proof />
      <Offer />
      <Invitation />
    </main>
  );
}
