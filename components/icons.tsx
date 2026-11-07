"use client";

import type { ReactNode } from "react";

type IconName =
  | "book"
  | "chat"
  | "pen"
  | "users"
  | "calculator"
  | "spark"
  | "note"
  | "traffic"
  | "globe"
  | "mic"
  | "hands"
  | "leaf"
  | "brain"
  | "bulb"
  | "play"
  | "calendar"
  | "image"
  | "video"
  | "chart"
  | "whatsapp"
  | "mail"
  | "facebook"
  | "youtube"
  | "arrow"
  | "menu"
  | "close"
  | "check"
  | "clapper"
  | "trophy"
  | "graduation"
  | "translate";

const paths: Record<IconName, ReactNode> = {
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
      <path d="M9 7h7" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
    </>
  ),
  pen: (
    <>
      <path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />
      <path d="m14.5 5.5 4 4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M17.5 14.5a6.5 6.5 0 0 1 4 5.5" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    </>
  ),
  note: (
    <>
      <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14.5 3v5.5H20" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  traffic: (
    <>
      <rect x="8" y="3" width="8" height="14" rx="2" />
      <circle cx="12" cy="7" r="1" />
      <circle cx="12" cy="11" r="1" />
      <circle cx="12" cy="15" r="1" />
      <path d="M12 17v4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </>
  ),
  hands: (
    <>
      <path d="M11 14h2a2 2 0 1 0-2-2M7 20h10" />
      <path d="M12 3a3 3 0 0 1 3 3c0 2-1 3-1 5h-4c0-2-1-3-1-5a3 3 0 0 1 3-3Z" />
      <path d="M7 11h10" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 9 12 4 20 4c0 8-5 15-15 15Z" />
      <path d="M5 19c3-5 7-9 11-11" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 3.5A2.5 2.5 0 0 0 7 6c-1.5.5-2.5 2-2.5 3.5 0 1 .4 1.9 1.1 2.5A3.5 3.5 0 0 0 7 18.5c.8 1.2 2 2 3.5 2 .8 0 1.5-.3 2-.8" />
      <path d="M14.5 3.5A2.5 2.5 0 0 1 17 6c1.5.5 2.5 2 2.5 3.5 0 1-.4 1.9-1.1 2.5A3.5 3.5 0 0 1 17 18.5c-.8 1.2-2 2-3.5 2-.8 0-1.5-.3-2-.8" />
      <path d="M12 3.5v17" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.3 11c.7.6 1.3 1.3 1.3 2h4c0-.7.6-1.4 1.3-2A6 6 0 0 0 12 3Z" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8.5 5 3.5-5 3.5v-7Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="m4 18 5-5 3 3 3-3 5 5" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10 5-3v10l-5-3" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M9 8.5c.5 2.5 3 5 5.5 5.5l1-1.5-2-1-1 .5c-.8-.5-1.5-1.2-2-2l.5-1-1-2L9 8.5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  facebook: (
    <>
      <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3H9v9h3v-9h2.5l.5-3H12V6.8c0-.5.4-.8.8-.8H15V3Z" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="m10.5 9.8 4.5 2.2-4.5 2.2V9.8Z" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h16M13 6l6 6-6 6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  check: (
    <>
      <path d="m4.5 12.5 5 5 10-11" />
    </>
  ),
  clapper: (
    <>
      <path d="M3 8.5 20.5 5l1.5 3.5L4.5 12 3 8.5Z" />
      <path d="M4.5 12H21l-1.5 8a1.5 1.5 0 0 1-1.5 1.2H6A1.5 1.5 0 0 1 4.5 20L4.5 12Z" />
      <path d="M8 7l2.5 1.5M13 6l2.5 1.5" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H4.5a3.5 3.5 0 0 0 3.6 3.5M16 5h3.5a3.5 3.5 0 0 1-3.6 3.5" />
      <path d="M12 13v3M8.5 20h7M10 16h4l.7 4H9.3L10 16Z" />
    </>
  ),
  graduation: (
    <>
      <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z" />
      <path d="M6.5 11.5V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.5M21 9v5" />
    </>
  ),
  translate: (
    <>
      <path d="M4 5h9M8.5 3v2c0 4-2 7-4.5 8.5" />
      <path d="m5 8 3 6 3-6" />
      <path d="m13 21 4.5-10L22 21M14.8 17h5.4" />
    </>
  ),
};

export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
