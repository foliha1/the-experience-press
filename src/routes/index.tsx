import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oleeha & Co. — Experience Design Studio" },
      {
        name: "description",
        content:
          "Oleeha & Co. is an experience design studio for premium, high-stakes gatherings — one idea, made unmistakable on every surface.",
      },
      { property: "og:title", content: "Oleeha & Co. — Experience Design Studio" },
      {
        property: "og:description",
        content:
          "An experience design studio for premium, high-stakes gatherings. One idea, made unmistakable on every surface.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioHome,
});

function StudioHome() {
  return (
    <main className="mx-auto max-w-[72rem] px-6 py-32 md:px-10 md:py-40">
      <p className="numeral">№ 00</p>
      <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.02em]">
        Oleeha &amp; Co.
      </h1>
    </main>
  );
}
