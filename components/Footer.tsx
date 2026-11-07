import { Icon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-surface-2 py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[420px]">
            <p className="font-display text-2xl font-semibold text-ink">Md Sonet Mia</p>
            <p className="body-4 mt-4">
              English graduate, educator, writer and digital creator from Tangail, Bangladesh.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2">
            <a href="#about" className="title-2 text-body hover:text-ink">
              About
            </a>
            <a href="#projects" className="title-2 text-body hover:text-ink">
              Projects
            </a>
            <a href="#book" className="title-2 text-body hover:text-ink">
              Book a session
            </a>
            <a href="#contact" className="title-2 text-body hover:text-ink">
              Contact
            </a>
          </nav>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.youtube.com/@SweetCGILab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-body hover:text-ink"
            >
              <Icon name="youtube" size={20} /> YouTube
            </a>
            <a
              href="https://facebook.com/mdsont.mia.777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-body hover:text-ink"
            >
              <Icon name="facebook" size={20} /> Facebook
            </a>
            <a
              href="https://wa.me/8801797953059"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-body hover:text-ink"
            >
              <Icon name="whatsapp" size={20} /> WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="caption-1">Copyright 2026 Md Sonet Mia. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="caption-1 hover:text-ink">
              Privacy policy
            </a>
            <a href="/terms" className="caption-1 hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
