"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-in-right";
  threshold?: number;
}

export function AnimateIn({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  threshold = 0.1,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Respect reduced-motion preference */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

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
        isVisible ? animationMap[animation] : "opacity-0"
      }`}
      style={
        isVisible && delay > 0 ? { animationDelay: `${delay}s` } : undefined
      }
    >
      {children}
    </div>
  );
}
