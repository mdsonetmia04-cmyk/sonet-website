"use client";

import { useEffect, useRef, useState } from "react";
import { Settings2 } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { AppearancePanel } from "./AppearancePanel";

/**
 * Settings icon button + Appearance Settings panel.
 *
 * One instance lives in the nav's right cluster (desktop: beside the
 * action buttons; mobile: beside the hamburger). One click opens the
 * panel; Escape or clicking outside closes it. Focus moves into the
 * panel on open and returns to this button on close.
 */
export function SettingsButton({ onOpen }: { onOpen?: () => void }) {
  const c = useContent();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  function toggle() {
    if (!open) {
      onOpen?.();
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  // On open: run the enter transition, focus the panel, watch for Escape.
  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => setMounted(true));
    panelRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open ]);

  // On close: reset the transition state and return focus to the button
  // (only when transitioning from open -> closed, never on first mount).
  useEffect(() => {
    if (!open) {
      setMounted(false);
      if (wasOpenRef.current) buttonRef.current?.focus();
    }
    wasOpenRef.current = open;
  }, [open ]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label={c.ui.appearanceSettings}
        aria-haspopup="dialog"
        aria-expanded={open}
        title={c.ui.appearanceSettings}
        onClick={toggle}
        className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border transition-colors ${
          open
            ? "border-gold bg-gold-soft text-gold"
            : "border-border text-ink hover:border-gold/60 hover:bg-surface-2 hover:text-gold"
        }`}
      >
        <Settings2 size={20} aria-hidden="true" />
      </button>
      {open ? (
        <AppearancePanel
          panelRef={panelRef}
          mounted={mounted}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </div>
  );
}
