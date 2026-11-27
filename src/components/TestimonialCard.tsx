import type { Testimonial } from "@/content/site";

export function TestimonialCard({
  t,
  large,
}: {
  t: Testimonial;
  large?: boolean;
}) {
  return (
    <div data-reveal className="h-full">
      <figure
        className={`panel lift flex h-full flex-col justify-between ${large ? "p-8 sm:p-12" : "p-6 sm:p-8"}`}
      >
        <blockquote
          className={
            large
              ? "text-xl leading-relaxed tracking-[-0.01em] sm:text-2xl"
              : "leading-relaxed text-ink-2"
          }
        >
          <p>“{t.quote}”</p>
        </blockquote>
        <figcaption className="mt-8 border-t border-line pt-5 text-sm">
          <span className="block font-medium">{t.name}</span>
          <span className="block text-ink-3">
            {t.role}, {t.company}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
