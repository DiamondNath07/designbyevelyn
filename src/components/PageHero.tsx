import type { ReactNode } from "react";
import { Words } from "./Words";

export function PageHero({ label, title, children, aside }: { label: string; title: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <header className="sheen">
      <div className="container-x flex flex-col gap-8 pt-16 pb-16 sm:pt-24 sm:pb-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="label rise">{label}</p>
          <h1 className="h-display mt-4">
            <Words parts={[title]} delay={100} />
          </h1>
          {children && <div className="lede rise rise-3 mt-6">{children}</div>}
        </div>
        {aside && <div className="rise rise-3 shrink-0">{aside}</div>}
      </div>
    </header>
  );
}
