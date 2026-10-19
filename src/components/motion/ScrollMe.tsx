"use client";

import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const noop = () => () => {};
const isClient = () => true;
const isServer = () => false;

type ScrollMeProps = {
  children: ReactNode;
  className?: string;
  /** Where the element starts while it is still near the bottom of the screen. It settles to its natural place by mid-screen. */
  from?: { x?: number; y?: number; scale?: number; rotate?: number; opacity?: number };
};

/**
 * ScrollMe-style animation: the element moves in step with the scroll position (not on a timer),
 * so scrolling back up plays it in reverse. Movements are small on purpose, and visitors who ask
 * their device for reduced motion see the content in place with no movement at all.
 */
export function ScrollMe({ children, className, from = { y: 48, opacity: 0.2 } }: ScrollMeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // The server can't know the visitor's motion setting, so the first render is always the plain, fully visible
  // element. Scroll-linked styles attach only after mount, and never for reduced-motion visitors.
  const mounted = useSyncExternalStore(noop, isClient, isServer);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  // A light spring smooths out jumpy mouse wheels without feeling laggy.
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  const x = useTransform(p, [0, 1], [from.x ?? 0, 0]);
  const y = useTransform(p, [0, 1], [from.y ?? 0, 0]);
  const scale = useTransform(p, [0, 1], [from.scale ?? 1, 1]);
  const rotate = useTransform(p, [0, 1], [from.rotate ?? 0, 0]);
  const opacity = useTransform(p, [0, 1], [from.opacity ?? 1, 1]);

  const animated = mounted && !reduce;

  return (
    <motion.div ref={ref} className={className} style={animated ? { x, y, scale, rotate, opacity } : undefined}>
      {children}
    </motion.div>
  );
}
