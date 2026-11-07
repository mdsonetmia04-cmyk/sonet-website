import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  label,
  heading,
  intro,
  band = false,
  index,
  children,
}: {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  band?: boolean;
  /** Optional editorial number, e.g. "01" — shown before the eyebrow label. */
  index?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`${band ? "bg-surface-2" : "bg-bg"} py-16 md:py-24`}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <Reveal>
          <div className="gold-rule" aria-hidden="true" />
          <p className="caption-1 mt-4 uppercase tracking-[0.14em]">
            {index ? (
              <span className="section-index" aria-hidden="true">
                {index}
              </span>
            ) : null}
            {label}
          </p>
          <h2 className="heading-2 mt-2">{heading}</h2>
          {intro ? <p className="body-2 mt-4 max-w-[680px]">{intro}</p> : null}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/** Page header used at the top of inner pages (label + H1 + intro). */
export function PageHeader({
  label,
  heading,
  intro,
}: {
  label: string;
  heading: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-8 md:py-20">
        <div className="gold-rule" aria-hidden="true" />
        <p className="caption-1 mt-4 uppercase tracking-[0.14em]">{label}</p>
        <h1 className="heading-1 mt-2">{heading}</h1>
        {intro ? <p className="body-2 mt-4 max-w-[680px] text-lg">{intro}</p> : null}
      </div>
    </div>
  );
}
