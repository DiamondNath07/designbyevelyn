import Link from "next/link";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer sheen mt-28 border-t border-line">
      <div className="container-x py-20 sm:py-28">
        <p className="label">Reach out at</p>
        <a
          href={`mailto:${site.email}`}
          data-reveal
          className="grow-underline mt-4 inline-flex items-center gap-3 pb-1 max-w-full break-all text-[clamp(1.5rem,5vw,3rem)] font-medium tracking-[-0.03em] sm:break-normal"
        >
          {site.email}
        </a>
        <p className="mt-5 max-w-lg text-ink-2">{site.invite}</p>

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={site.cvPdf} download className="hover:text-ink">
                  CV (PDF)
                </a>
              </li>
              {site.linkedin && (
                <li>
                  <a href={site.linkedin} rel="me noopener" target="_blank" className="hover:text-ink">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </nav>
          <p>
            © {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
