import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  num,
  label,
  heading,
  intro,
  band = false,
  children,
}: {
  id: string;
  num: string;
  label: string;
  heading: string;
  intro?: string;
  band?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`${band ? "bg-surface-2" : "bg-bg"} py-16 md:py-24`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <Reveal>
          <div className="flex items-start gap-4">
            <span className="section-num tabular pt-1" aria-hidden="true">
              {num}
            </span>
            <div>
              <div className="gold-rule" aria-hidden="true" />
              <p className="caption-1 mt-4">{label}</p>
              <h2 className="heading-2 mt-2">{heading}</h2>
              {intro ? <p className="body-2 mt-4 max-w-[680px]">{intro}</p> : null}
            </div>
          </div>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
