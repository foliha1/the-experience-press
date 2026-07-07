import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { SolvedWorld } from "@/components/sections/SolvedWorld";
import { Method } from "@/components/sections/Method";
import { Proof } from "@/components/sections/Proof";
import { Offer } from "@/components/sections/Offer";
import { Invitation } from "@/components/sections/Invitation";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
