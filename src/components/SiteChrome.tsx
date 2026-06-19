import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BUSINESS, waLink } from "@/lib/business";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Training" },
  { to: "/contact", label: "Visit" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground font-display text-lg">
            FF
          </span>
          <span className="font-display text-lg tracking-wide">
            Shark Karate Gymnastic & Fitness Academy <span className="text-primary"></span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-uline font-display text-sm tracking-[0.18em] uppercase"
              activeProps={{ "data-active": "true" } as never}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-primary px-4 py-2 font-display text-sm tracking-[0.18em] uppercase text-primary-foreground transition hover:bg-accent"
          >
            Book a Session
          </a>
        </nav>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 font-display tracking-[0.18em] uppercase text-sm"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-sm bg-primary px-4 py-3 text-center font-display text-sm tracking-[0.18em] uppercase text-primary-foreground"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.18_0.015_50)] text-[oklch(0.92_0.012_70)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground font-display">FF</span>
            <span className="font-display text-lg">Shark Karate Gymnastic & Fitness Academy</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-[oklch(0.78_0.012_70)]">
            {BUSINESS.shortDesc}
          </p>
        </div>
        <div>
          <p className="tag">Find Us</p>
          <p className="mt-3 text-sm leading-relaxed">{BUSINESS.address}</p>
          <p className="mt-2 text-xs text-[oklch(0.7_0.01_70)]">Plus code: {BUSINESS.plusCode}</p>
        </div>
        <div>
          <p className="tag">Get In Touch</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-primary" href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>{BUSINESS.phone}</a></li>
            <li><a className="hover:text-primary" href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp chat</a></li>
            <li><a className="hover:text-primary" href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li className="text-[oklch(0.78_0.012_70)]">Opens daily 8:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-[oklch(0.7_0.01_70)] sm:flex-row">
          <span>© {new Date().getFullYear()} Shark Karate Gymnastic & Fitness Academy, Lahore.</span>
          <span>Rated {BUSINESS.rating.value}★ by {BUSINESS.rating.count} members on Google.</span>
        </div>
      </div>
    </footer>
  );
}
