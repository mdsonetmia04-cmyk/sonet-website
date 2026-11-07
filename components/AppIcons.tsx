"use client";

import type { ReactNode, SVGProps } from "react";

/**
 * AppIcons — the Applications icon set for the SONET personal website.
 *
 * One consistent set for the ten apps in the Applications section:
 * same 24x24 viewBox, 1.75px stroke, stroke-based line style, rounded
 * linecaps and joins, and `currentColor` throughout (no hard-coded colours),
 * so the icons inherit the brand gold from the surrounding `.icon-tile`
 * and adapt to the Cream & Champagne Gold light / Charcoal & Gold dark
 * themes automatically. No emoji, no gradients, no fills — clean line
 * work that stays crisp at 20–40px.
 */

type AppIconProps = SVGProps<SVGSVGElement>;

function AppIconBase({ children, ...props }: AppIconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Sweet Calculator — a calculator body with a display bar and a 3x3 key grid, so it reads as a calculator at a glance. */
export function CalculatorIcon(props: AppIconProps) {
  return (
    <AppIconBase {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2.5" />
      <path d="M8.5 7.5h7" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
      <path d="M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01" />
      <path d="M8.5 18.5h7" />
    </AppIconBase>
  );
}

/** Sweet AI — a four-point sparkle star with two small satellite sparkles, the classic mark of an AI assistant. */
export function AiIcon(props: AppIconProps) {
  return (
    <AppIconBase {...props}>
      <path d="M12 3.5 13.6 8.4 18.5 10 13.6 11.6 12 16.5 10.4 11.6 5.5 10 10.4 8.4 12 3.5Z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
      <path d="M5 16.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6Z" />
    </AppIconBase>
  );
}

/** Sweet Note — a notepad page with a folded corner and a diagonal pencil crossing its lower edge, note-taking at a glance. */
export function NoteIcon(props: AppIconProps) {
  return (
    <AppIconBase {...props}>
      <path d="M6 3.5h8.5L19 8v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-15.5A1 1 0 0 1 6 3.5Z" />
      <path d="M14 3.5V8.5h5" />
      <path d="M8.5 12.5h4" />
      <path d="m13.5 20.5 6-6-2.5-2.5-6 6-1.5 3.5 3.5-1.5Z" />
    </AppIconBase>
  );
}

/** Sweet Traffic Hero — a traffic light with all three lamps and a hero sparkle above it, a friendly guide to road safety. */
export function TrafficHeroIcon(props: AppIconProps) {
  return (
    <AppIconBase {...props}>
      <path d="M12 2.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
      <rect x="7.5" y="7" width="9" height="12" rx="2.5" />
      <circle cx="12" cy="10.5" r="1" />
      <circle cx="12" cy="13.5" r="1" />
      <circle cx="12" cy="16.5" r="1" />
      <path d="M12 19v2" />
    </AppIconBase>
  );
}

/** Sweet Learning English — an open book with a capital A on the left page and study lines on the right, learning English from the page. */
export function LearningEnglishIcon(props: AppIconProps) {
  return (
    <AppIconBase {...props}>
      <path d="M12 6.5C10 5 7.5 4.5 4 4.5v13c3.5 0 6 .5 8 2 2-1.5 4.5-2 8-2v-13c-3.5 0-6 .5-8 2Z" />
      <path d="M12 6.5v13" />
      <path d="M7.6 13.5 8.8 9.5l1.2 4" />
      <path d="M8 12.3h1.7" />
      <path d="M14.5 9.5h3M14.5 12.5h3" />
    </AppIconBase>
  );
}

/** Sweet Spoken English — a speech bubble holding a voice waveform, speaking practice made visible. */
export function SpokenEnglishIcon(props: AppIconProps) {
  return (
    <AppIconBase {...props}>
      <path d="M20.5 12.5a8 8 0 0 1-11.7 7.1L4 21l1.4-4.8A8 8 0 1 1 20.5 12.5Z" />
      <path d="M8.5 11v3M11.5 9.5v6M14.5 11v3M17.5 10v5" />
    </AppIconBase>
  );
}

/** Sweet Volunteering — cupped hands cradling a heart, giving and care in one gesture. */
export function VolunteeringIcon(props: AppIconProps) {
  return (
    <AppIconBase {...props}>
      <path d="M12 9.2c-1.9-1.7-4.8-1-4.8 1.4 0 2.1 2.5 3.6 4.8 5.2 2.3-1.6 4.8-3.1 4.8-5.2 0-2.4-2.9-3.1-4.8-1.4Z" />
      <path d="M3.5 16.5c1.8 2.3 4.8 3.7 8.5 3.7s6.7-1.4 8.5-3.7" />
      <path d="M7 16.5c.9 1.3 2.4 2.1 5 2.1s4.1-.8 5-2.1" />
    </AppIconBase>
  );
}

/** SDG Tracker — a globe with a target ring and centre dot overlapping its lower corner, tracking global goals. */
export function SdgTrackerIcon(props: AppIconProps) {
  return (
    <AppIconBase {...props}>
      <circle cx="10.5" cy="10.5" r="7.5" />
      <path d="M3 10.5h15M10.5 3c2.2 2.2 3.3 4.7 3.3 7.5s-1.1 5.3-3.3 7.5c-2.2-2.2-3.3-4.7-3.3-7.5S8.3 5.2 10.5 3Z" />
      <circle cx="17.5" cy="17.5" r="3.5" />
      <path d="M17.5 17.5h.01" />
    </AppIconBase>
  );
}

/** All in One — a 2x2 grid of tiles, each holding a different tool mark, many tools in one suite. */
export function AllInOneIcon(props: AppIconProps) {
  return (
    <AppIconBase {...props}>
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="2" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="2" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="2" />
      <rect x="13" y="13" width="7.5" height="7.5" rx="2" />
      <path d="m5.5 7.2 1.3 1.3 2-2.2" />
      <path d="M16.75 5.5v3M15.25 7h3" />
      <path d="M5.5 15.5h3.5M5.5 18h3.5" />
      <path d="m15.5 15.2 2.5 1.5-2.5 1.5v-3Z" />
    </AppIconBase>
  );
}

/** Sweet Problem Solver — a lightbulb with a checkmark inside it, the moment a problem clicks into a solution. */
export function ProblemSolverIcon(props: AppIconProps) {
  return (
    <AppIconBase {...props}>
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.8.6 1.6 1.3 1.6 2.2h4c0-.9.8-1.6 1.6-2.2A6 6 0 0 0 12 3Z" />
      <path d="M9.5 18.5h5M10.5 21h3" />
      <path d="m9.3 11.3 1.9 1.9 3.5-3.9" />
    </AppIconBase>
  );
}
