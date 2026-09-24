"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-in-right";
  threshold?: number;
}

/*
 * Global animation queue: when multiple elements enter the viewport in rapid
 * succession (e.g. during a scroll), we stagger them so they animate one after
 * another instead of all at once. Each new element gets a small additive delay
 * that resets after a short idle period.
 */
let queuedDelay = 0;
let resetTimer: ReturnType<typeof setTimeout> | null = null;
const STAGGER_INCREMENT = 0.12; // seconds between each element's animation start
const RESET_AFTER = 600; // ms of no new triggers before resetting the queue

function getStaggerDelay(): number {
  const current = queuedDelay;
  queuedDelay += STAGGER_INCREMENT;

  // Reset the queue after a pause in new triggers
  if (resetTimer) clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    queuedDelay = 0;
  }, RESET_AFTER);

  return current;
}

export function AnimateIn({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  threshold = 0.1,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  /* "static": plain content (server HTML, reduced motion, or already on
     screen when scripts run). "hidden": below the fold, waiting. "animate":
     entering the viewport now. Content is never hidden before hydration, so
     the first screen paints without waiting for scripts. */
  const [state, setState] = useState<"static" | "hidden" | "animate">("static");
  const [computedDelay, setComputedDelay] = useState(0);

  const triggerAnimation = useCallback(() => {
    const stagger = getStaggerDelay();
    setComputedDelay(delay + stagger);
    setState("animate");
  }, [delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Respect reduced-motion preference, and leave anything already on
       screen alone so the first paint is not hidden and shown again */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (
      prefersReducedMotion ||
      el.getBoundingClientRect().top < window.innerHeight
    ) {
      return;
    }
    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation();
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerAnimation]);

  const animationMap = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "scale-in": "animate-scale-in",
    "slide-in-right": "animate-slide-in-right",
  };

  return (
    <div
      ref={ref}
      className={`${className} ${
        state === "animate"
          ? animationMap[animation]
          : state === "hidden"
            ? "opacity-0"
            : ""
      }`}
      style={
        state === "animate"
          ? {
              animationDelay: `${computedDelay}s`,
              // Keep element invisible until its animation actually starts
              animationFillMode: "both",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
