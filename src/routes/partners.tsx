import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Oleeha & Co." },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "A private page for Oleeha & Co. partners.",
      },
      { property: "og:title", content: "Partners — Oleeha & Co." },
      { property: "og:description", content: "A private page for Oleeha & Co. partners." },
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
      <main className="mx-auto max-w-[72rem] px-6 py-24 md:px-10 md:py-32">
        <p className="numeral">Partners</p>
        <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
          Partners
        </h1>
      </main>
    </div>
  );
}
