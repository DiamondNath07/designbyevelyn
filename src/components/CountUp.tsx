"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a figure up from zero when it scrolls into view, keeping any prefix/suffix
 * ("+85%", "10K+", "3×"). Non-numeric values (e.g. "Telegraph") render as-is.
 * The final value is always in the HTML, so nothing depends on JavaScript.
 */
export function CountUp({ value, className, duration = 1400 }: { value: string; className?: string; duration?: number }) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;
    let raf = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setDisplay(`${prefix}${(0).toFixed(decimals)}${suffix}`);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
