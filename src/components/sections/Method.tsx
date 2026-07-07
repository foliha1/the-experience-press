import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../section-heading";
import { Reveal, RevealItem } from "../reveal";

type TreatmentId = "emblem" | "ribbon" | "seams" | "cadence";

const TREATMENTS: {
  id: TreatmentId;
  numeral: string;
  name: string;
  body: string;
}[] = [
  {
    id: "emblem",
    numeral: "i.",
    name: "Emblem",
    body: "One held mark. Pressed into the lanyard, cut into the light on the back wall, small enough for a lapel and large enough for a stage.",
  },
  {
    id: "ribbon",
    numeral: "ii.",
    name: "Ribbon",
    body: "A single warm spot color, used the way a printer uses ink — one deliberate accent, never more.",
  },
  {
    id: "seams",
    numeral: "iii.",
    name: "Seams",
    body: "The hairline rules and margins that hold every surface together — invisible until you notice they never break.",
  },
  {
    id: "cadence",
    numeral: "iv.",
    name: "Cadence",
    body: "One voice, one register, one pair of hands — from the invite line to the closing thank-you.",
  },
];

const spring = { type: "spring" as const, stiffness: 140, damping: 22, mass: 0.9 };

// --- Small building blocks shared across surfaces ------------------------------

function Emblem({ active, size = 40 }: { active: boolean; size?: number }) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      animate={{ scale: active ? 1.18 : 1 }}
      transition={spring}
      className="shrink-0"
      aria-hidden
    >
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="var(--color-ink)" strokeWidth="1" />
      <path
        d="M20 6 L20 34 M6 20 L34 20"
        stroke="var(--color-ink)"
        strokeWidth="0.9"
        opacity="0.35"
      />
      <text
        x="20"
        y="24.5"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontSize="12"
        fontStyle="italic"
        fill="var(--color-ink)"
      >
        O
      </text>
    </motion.svg>
  );
}

function Rule({
  active,
  vertical = false,
  className = "",
}: {
  active: boolean;
  vertical?: boolean;
  className?: string;
}) {
  return (
    <motion.span
      aria-hidden
      className={`block bg-ink/70 ${className}`}
      animate={{
        opacity: active ? 1 : 0.35,
        [vertical ? "width" : "height"]: active ? 2 : 1,
      }}
      transition={spring}
      style={{ [vertical ? "height" : "width"]: "100%" } as React.CSSProperties}
    />
  );
}

function SpotBar({ active, className = "" }: { active: boolean; className?: string }) {
  return (
    <motion.span
      aria-hidden
      className={`block ${className}`}
      style={{ background: "var(--color-vermilion)" }}
      animate={{
        scaleX: active ? 1 : 0.55,
        opacity: active ? 1 : 0.85,
      }}
      transition={spring}
    />
  );
}

// --- Surface frame ------------------------------------------------------------

function Surface({
  label,
  ratio,
  children,
}: {
  label: string;
  ratio: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="numeral">{label}</span>
        <span className="numeral text-taupe/70">{ratio}</span>
      </div>
      <div className="relative overflow-hidden border border-rule bg-paper">
        {children}
      </div>
    </div>
  );
}

// --- The four surfaces --------------------------------------------------------

function Invite({ t }: { t: TreatmentId }) {
  return (
    <Surface label="I. Invite" ratio="5 × 7 in">
      <div className="relative aspect-[5/7] p-3 sm:p-5 md:p-8">
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between">
            <Emblem active={t === "emblem"} size={36} />
            <motion.span
              className="numeral"
              animate={{ opacity: t === "cadence" ? 1 : 0.5 }}
              transition={spring}
            >
              MMXXVI
            </motion.span>
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <Rule active={t === "seams"} />
            <motion.div
              animate={{
                letterSpacing: t === "cadence" ? "-0.02em" : "-0.01em",
                fontWeight: t === "cadence" ? 400 : 350,
              }}
              transition={spring}
              className="font-display text-[1.35rem] leading-[1.15] md:text-[1.6rem]"
            >
              An evening
              <br />
              of conversation
              <br />
              <motion.span
                className="italic"
                animate={{ color: t === "ribbon" ? "var(--color-vermilion)" : "var(--color-ink)" }}
                transition={spring}
              >
                &amp; connection.
              </motion.span>
            </motion.div>
            <div className="flex items-center gap-3">
              <SpotBar active={t === "ribbon"} className="h-[2px] w-8 origin-left" />
              <span className="label">Please reply by the fifteenth</span>
            </div>
          </div>
        </div>
      </div>
    </Surface>
  );
}

function Signage({ t }: { t: TreatmentId }) {
  return (
    <Surface label="II. Signage" ratio="36 × 24 in">
      <div className="relative aspect-[3/2] p-3 sm:p-5 md:p-8">
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between">
            <span className="label">This way</span>
            <Emblem active={t === "emblem"} size={28} />
          </div>
          <div className="my-auto flex items-center gap-4">
            <SpotBar active={t === "ribbon"} className="h-10 w-[3px] origin-top md:h-14" />
            <motion.div
              animate={{ x: t === "cadence" ? -2 : 0 }}
              transition={spring}
              className="font-display leading-[0.95]"
            >
              <div className="text-[1rem] tracking-[-0.02em] sm:text-[1.35rem] md:text-[2.5rem]">
                The Great
              </div>
              <div className="text-[1rem] italic tracking-[-0.02em] sm:text-[1.35rem] md:text-[2.5rem]">
                Room
              </div>
            </motion.div>
          </div>
          <div className="mt-auto">
            <Rule active={t === "seams"} />
            <div className="mt-2 flex items-center justify-between">
              <span className="numeral">Floor 2</span>
              <span className="numeral">→</span>
            </div>
          </div>
        </div>
      </div>
    </Surface>
  );
}

function Slide({ t }: { t: TreatmentId }) {
  return (
    <Surface label="III. Screen" ratio="16 × 9">
      <div className="relative aspect-[16/9] p-3 sm:p-5 md:p-8">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Emblem active={t === "emblem"} size={22} />
              <span className="label">Session · 04</span>
            </div>
            <span className="numeral">09:40</span>
          </div>

          <div className="my-auto flex flex-col gap-2">
            <motion.div
              animate={{
                fontVariationSettings: t === "cadence" ? '"opsz" 96, "SOFT" 80' : '"opsz" 24, "SOFT" 50',
              }}
              transition={spring}
              className="font-display text-[1.5rem] leading-[1.05] tracking-[-0.02em] md:text-[2.2rem]"
            >
              On the shape
              <br />
              of a{" "}
              <motion.span
                animate={{ color: t === "ribbon" ? "var(--color-vermilion)" : "var(--color-ink)" }}
                transition={spring}
                className="italic"
              >
                remembered
              </motion.span>{" "}
              room.
            </motion.div>
          </div>

          <div className="mt-auto flex items-center gap-3">
            <Rule active={t === "seams"} className="flex-1" />
            <span className="numeral shrink-0">A. Okafor</span>
          </div>
        </div>
      </div>
    </Surface>
  );
}

function Lanyard({ t }: { t: TreatmentId }) {
  return (
    <Surface label="IV. Lanyard" ratio="3 × 4 in">
      <div className="relative aspect-[3/4] p-0">
        {/* strap */}
        <motion.div
          className="absolute inset-x-0 top-0 h-3"
          animate={{ backgroundColor: t === "ribbon" ? "var(--color-vermilion)" : "var(--color-ink)" }}
          transition={spring}
        />
        <div className="flex h-full flex-col p-3 pt-5 sm:p-5 sm:pt-6 md:p-6 md:pt-7">
          <div className="flex items-start justify-between">
            <Emblem active={t === "emblem"} size={30} />
            <span className="numeral">№ 041</span>
          </div>

          <div className="my-auto flex flex-col gap-1">
            <motion.div
              animate={{ fontWeight: t === "cadence" ? 500 : 400 }}
              transition={spring}
              className="font-display text-[1.15rem] leading-tight md:text-[1.35rem]"
            >
              Amara
              <br />
              <span className="italic">Okafor</span>
            </motion.div>
            <span className="label mt-2">Speaker · Host Table</span>
          </div>

          <div className="mt-auto flex flex-col gap-2">
            <Rule active={t === "seams"} />
            <div className="flex items-center justify-between">
              <span className="numeral">Vol. I</span>
              <SpotBar active={t === "ribbon"} className="h-[2px] w-6 origin-right" />
            </div>
          </div>
        </div>
      </div>
    </Surface>
  );
}

// --- Section ------------------------------------------------------------------

export function Method() {
  const [active, setActive] = useState<TreatmentId>("emblem");

  return (
    <section className="px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading numeral="№ 03" title="One system, many accents." />

        <Reveal className="grid gap-10 md:grid-cols-12" amount={0.1}>
          <RevealItem className="md:col-span-4">
            <p className="max-w-[36ch] text-lg leading-[1.7] text-ink/85">
              The Sprint delivers a short kit of parts, tuned to flex across every surface
              of the experience. Move between them below — the same world, reset for each
              object it has to live on.
            </p>
          </RevealItem>

          <div className="md:col-span-8">
            <ul
              role="tablist"
              aria-label="Kit of parts"
              className="grid gap-px bg-rule sm:grid-cols-2 md:grid-cols-4"
            >
              {TREATMENTS.map((t) => {
                const on = active === t.id;
                return (
                  <li key={t.id} className="bg-paper">
                    <button
                      role="tab"
                      aria-selected={on}
                      onMouseEnter={() => setActive(t.id)}
                      onFocus={() => setActive(t.id)}
                      onClick={() => setActive(t.id)}
                      className="group flex min-h-[44px] w-full flex-col items-start gap-3 p-5 text-left transition-colors md:p-6"
                    >
                      <div className="flex items-center gap-3">
                        <span className="numeral">{t.numeral}</span>
                        <motion.span
                          aria-hidden
                          className="block h-px bg-ink"
                          animate={{ width: on ? 28 : 12 }}
                          transition={spring}
                        />
                      </div>
                      <motion.h3
                        animate={{ color: on ? "var(--color-vermilion)" : "var(--color-ink)" }}
                        transition={spring}
                        className="font-display text-2xl leading-tight md:text-[1.75rem]"
                      >
                        {t.name}
                      </motion.h3>
                      <p className="text-sm leading-[1.55] text-ink/75">{t.body}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24">
          <Reveal className="mb-8 flex items-baseline justify-between border-b border-rule pb-4" amount={0.2}>
            <RevealItem>
              <span className="label">Demonstration</span>
            </RevealItem>
            <RevealItem>
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={spring}
                className="font-display italic text-taupe"
              >
                {TREATMENTS.find((x) => x.id === active)?.name} — across four surfaces
              </motion.span>
            </RevealItem>
          </Reveal>

          <Reveal
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8"
            amount={0.1}
          >
            <RevealItem>
              <Invite t={active} />
            </RevealItem>
            <RevealItem>
              <Signage t={active} />
            </RevealItem>
            <RevealItem>
              <Slide t={active} />
            </RevealItem>
            <RevealItem>
              <Lanyard t={active} />
            </RevealItem>
          </Reveal>

          <p className="mt-10 max-w-[52ch] font-display text-lg italic leading-[1.5] text-taupe md:text-xl">
            Different objects. Unmistakably one voice.
          </p>
        </div>
      </div>
    </section>
  );
}
