import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS, waLink } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Contact — Shark Karate Gymnastic & Fitness Academy, Samnabad Lahore" },
      { name: "description", content: "Find Shark Karate Gymnastic & Fitness Academy near Kim's Restaurant, Samanabad Main Boulevard, Lahore. Hours, directions, phone and WhatsApp." },
      { property: "og:title", content: "Visit Shark Karate Gymnastic & Fitness Academy, Lahore" },
      { property: "og:description", content: "Address, hours, map and WhatsApp contact for Shark Karate Gymnastic & Fitness Academy in Samnabad, Lahore." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-[oklch(0.96_0.012_70)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="tag">Visit · Contact</p>
            <h1 className="mt-3 text-5xl md:text-6xl">Come <span className="text-primary">train</span><br/>with us.</h1>
          </div>
          <p className="md:col-span-5 self-end text-base leading-relaxed text-muted-foreground">
            Located on Samanabad Main Boulevard near Kim's Restaurant — easy to
            find and easier to walk into. Two slots available Mon–Fri:
            7:15–8:15 PM and 8:30–9:30 PM.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:py-24">
        {/* Info */}
        <div className="md:col-span-5 space-y-10">
          <InfoBlock label="Address">
            <p>{BUSINESS.address}</p>
            <p className="mt-2 text-xs text-muted-foreground">Plus code: {BUSINESS.plusCode}</p>
          </InfoBlock>

          <InfoBlock label="Hours">
            <ul className="space-y-1.5">
              {BUSINESS.hours.map((h, i) => (
                <li key={i} className="flex items-baseline justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="font-display tracking-[0.12em] text-sm text-primary">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">Mon – Fri only · Saturday & Sunday closed</p>
          </InfoBlock>

          <InfoBlock label="Contact">
            <ul className="space-y-2">
              <li>
                <a className="link-uline" href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>{BUSINESS.phone}</a>
              </li>
              <li>
                <a className="link-uline" href={`tel:${BUSINESS.phone2.replace(/\s/g, "")}`}>{BUSINESS.phone2}</a>
              </li>
              <li>
                <a className="link-uline" href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp the coach</a>
              </li>
              <li>
                <a className="link-uline" href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a className="link-uline" href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a className="link-uline" href={BUSINESS.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
              </li>
            </ul>
          </InfoBlock>

          <div className="flex flex-col gap-3 pt-2">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-primary px-6 py-4 text-center font-display text-sm tracking-[0.2em] uppercase text-primary-foreground hover:bg-accent">WhatsApp Now</a>
            <a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer" className="rounded-sm border border-foreground/20 px-6 py-4 text-center font-display text-sm tracking-[0.2em] uppercase hover:bg-foreground/5">Get Directions</a>
          </div>
        </div>

        {/* Map */}
        <div className="md:col-span-7">
          <div className="lift overflow-hidden border border-border bg-card">
            <iframe
              title="Shark Karate Gymnastic & Fitness Academy on Google Maps"
              src={BUSINESS.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full md:h-[560px]"
              allowFullScreen
            />
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <DirCard step="01" title="Find the boulevard" body="Head to Samanabad Main Boulevard — we're near the first roundabout, next to Kim's Restaurant." />
            <DirCard step="02" title="Look for the club" body="We're easy to spot on the main road — ask any local and they'll point you in." />
            <DirCard step="03" title="Pick your slot" body="Slot 1: 7:15–8:15 PM · Slot 2: 8:30–9:30 PM. Mon–Fri only. Wear something you can move in." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="slab">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <p className="tag text-[oklch(0.95_0.01_70)]">One Message Away</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Let's get you on the mat.</h2>
          </div>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-[oklch(0.97_0.01_80)] px-7 py-4 font-display text-sm tracking-[0.2em] uppercase text-[oklch(0.18_0.015_50)] hover:bg-[oklch(0.93_0.012_60)]">Message on WhatsApp →</a>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="tag">{label}</p>
      <div className="mt-3 text-base leading-relaxed">{children}</div>
    </div>
  );
}

function DirCard({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <div className="border border-border bg-card p-5 lift">
      <p className="font-display text-xs tracking-[0.2em] text-primary">{step}</p>
      <h3 className="mt-2 text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}