/** ND monogram: a ledger-style stamp. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-grid size-7 shrink-0 place-items-center rounded-[7px] border border-line-2 font-mono text-[10px] font-medium tracking-[0.04em] ${className}`}
    >
      ND
    </span>
  );
}
