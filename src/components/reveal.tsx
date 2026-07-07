import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 22, mass: 0.9 },
  },
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  once?: boolean;
  amount?: number;
}) {
  const MotionTag = motion[Tag as "div"] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={container}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}) {
  const MotionTag = motion[Tag as "div"] as typeof motion.div;
  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
