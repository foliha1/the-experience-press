import { useState } from "react";
import { Reveal, RevealItem } from "../reveal";

export function Invitation() {
  const [hover, setHover] = useState(false);

  return (
    <section className="px-6 pt-24 pb-16 md:px-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="flex flex-col gap-12" amount={0.2}>
          <RevealItem className="flex items-center gap-4">
            <span className="numeral">№ 06</span>
            <span aria-hidden className="h-px w-16 bg-rule" />
            <span className="label">A short letter</span>
          </RevealItem>

          <RevealItem as="p" className="font-display text-2xl leading-[1.5] md:text-[1.9rem] md:leading-[1.4]">
            If you are planning an evening — or a summit, or a season of them — that ought
            to be remembered by name, we would be glad of a short conversation. Thirty
            minutes, no deck, no pitch. We&rsquo;ll tell you honestly whether the Sprint is
            the right shape for what you&rsquo;re building.
          </RevealItem>

          <RevealItem className="flex flex-col gap-8">
            <div>
              <a
                href="mailto:hello@oleeha.co?subject=Experience%20Design%20Sprint%20—%20Fit%20call"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}
                className={`link-spot inline-flex min-h-11 items-baseline gap-3 font-display text-2xl md:text-3xl ${hover ? "link-spot-hover" : ""}`}
              >
                Begin a conversation
                <span aria-hidden className="text-vermilion">→</span>
              </a>
              <p className="mt-4 numeral text-taupe">
                Or, plainly — hello@oleeha.co
              </p>
            </div>

            <p className="font-display italic text-lg text-taupe">
              — Oleeha &amp; Co.
            </p>
          </RevealItem>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 max-w-6xl">
        <div className="flex flex-col gap-3 border-t border-rule pt-8 md:flex-row md:items-center md:justify-between">
          <p className="numeral">Oleeha &amp; Co. · Atlanta · Est. MMXVIII</p>
          <p className="numeral">Set in Fraunces &amp; Inter Tight · Printed for the web</p>
        </div>
      </div>
    </section>
  );
}
