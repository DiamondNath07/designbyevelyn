"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]:not([data-shown]), .words:not([data-shown])";

/**
 * One observer for the whole site: anything marked `data-reveal` (or a `.words` headline)
 * gets `data-shown` the first time it scrolls into view. New elements added by client-side
 * navigation are picked up automatically.
 */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-shown", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    const scan = () => document.querySelectorAll(SELECTOR).forEach((el) => io.observe(el));
    const mo = new MutationObserver(scan);

    // Start once the page has loaded and the browser is idle (hydration is done by then),
    // so we never change elements React is still hydrating.
    let handle = 0;
    const hasIdle = typeof window.requestIdleCallback === "function";
    const idle = (cb: () => void) => (hasIdle ? window.requestIdleCallback(cb, { timeout: 1200 }) : window.setTimeout(cb, 300));
    const run = () => {
      scan();
      mo.observe(document.body, { childList: true, subtree: true });
    };
    const start = () => {
      handle = idle(run);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      window.removeEventListener("load", start);
      if (hasIdle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
