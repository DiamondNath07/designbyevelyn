"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getReduced = () => window.matchMedia(query).matches;

/**
 * Hero headline: a fixed lead-in plus a rotating serif-italic phrase.
 * Screen readers get one complete sentence; the rotation is visual only.
 * Pauses on hover/focus and stays still for reduced-motion users.
 */
export function HeadlineCarousel({
  lead,
  phrases,
  srText,
  interval = 2800,
}: {
  lead: string;
  phrases: string[];
  srText: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribe, getReduced, () => true);

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % phrases.length), interval);
    return () => window.clearInterval(id);
  }, [reduced, paused, interval, phrases.length]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <h1 className="h-display">
        <span className="sr-only">{srText}</span>
        <span aria-hidden="true" className="block">
          <span className="block">{lead}</span>
          {/* All phrases share one grid cell so height never jumps */}
          <span className="grid overflow-hidden pb-[0.12em]">
            {phrases.map((p, i) => {
              const state = i === index ? "on" : i === (index - 1 + phrases.length) % phrases.length ? "out" : "in";
              return (
                <span
                  key={p}
                  className="serif-accent block text-[1.08em] text-result [grid-area:1/1] transition-[transform,opacity,filter] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: state === "on" ? 1 : 0,
                    transform: state === "on" ? "translateY(0)" : state === "out" ? "translateY(-55%)" : "translateY(55%)",
                    filter: state === "on" ? "blur(0)" : "blur(10px)",
                  }}
                >
                  {p}
                </span>
              );
            })}
          </span>
        </span>
      </h1>

      {/* Counter + progress */}
      <div aria-hidden="true" className="mt-6 flex items-center gap-4">
        <span className="ledger tabular-nums text-ink-2">
          {String(index + 1).padStart(2, "0")} <span className="text-ink-3">/ {String(phrases.length).padStart(2, "0")}</span>
        </span>
        <span className="relative h-px w-24 overflow-hidden bg-line-2">
          {!reduced && (
            <span
              key={`${index}-${paused}`}
              className="absolute inset-y-0 left-0 bg-ink-2"
              style={{ animation: paused ? "none" : `progress ${interval}ms linear forwards`, width: paused ? "100%" : undefined }}
            />
          )}
        </span>
      </div>
    </div>
  );
}
