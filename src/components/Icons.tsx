type P = { className?: string };

export function Arrow({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`arrow ${className}`}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
