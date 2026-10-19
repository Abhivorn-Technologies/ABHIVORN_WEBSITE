"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Gentle rise transition every time the visitor moves to another page. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      // Movement only, no fade: content is visible in the server HTML, so the first paint doesn't wait for JavaScript.
      initial={reduce ? false : { y: 14 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
