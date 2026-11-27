import Link from "next/link";
import { Arrow } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="sheen">
      <div className="container-x py-28 sm:py-40">
        <p className="label">404</p>
        <h1 className="h-display mt-4">This page doesn&apos;t exist.</h1>
        <p className="lede mt-4">It may have moved when I rebuilt the site.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#work" className="btn btn-light">
            See my work <Arrow />
          </Link>
          <Link href="/" className="btn btn-outline">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
