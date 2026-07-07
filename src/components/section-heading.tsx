import { Reveal, RevealItem } from "./reveal";

export function SectionHeading({
  numeral,
  title,
}: {
  numeral: string;
  title: string;
}) {
  return (
    <Reveal className="mb-16 flex flex-col gap-6 md:mb-24">
      <RevealItem className="flex items-center gap-4">
        <span className="numeral">{numeral}</span>
        <span aria-hidden className="h-px w-16 bg-rule" />
      </RevealItem>
      <RevealItem as="h2" className="max-w-[22ch] font-display text-3xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
        {title}
      </RevealItem>
    </Reveal>
  );
}
