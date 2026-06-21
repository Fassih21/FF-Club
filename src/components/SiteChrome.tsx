import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS, waLink } from "@/lib/business";
import heroImg from "@/assets/hero-fighter.jpg";
import kidsImg from "@/assets/kids-class.jpg";
import glovesImg from "@/assets/gloves.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shark Karate Gymnastic & Fitness Academy — Kickboxing & Fitness, Samnabad Lahore" },
      { name: "description", content: "Coach-led kickboxing, gymnastics and fitness training for kids and adults at Samnabad, Lahore. Rated 4.8★ on Google. Walk in tonight at 8 PM." },
      { property: "og:title", content: "Shark Karate Gymnastic & Fitness Academy — Lahore" },
      { property: "og:description", content: "Train hard. Hit harder. Kickboxing, gymnastics and fitness in Samnabad, Lahore." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.02_40/0.92)] via-[oklch(0.14_0.02_40/0.7)] to-[oklch(0.14_0.02_40/0.35)]" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl fade-up text-[oklch(0.97_0.01_80)]">
            <p className="tag text-[oklch(0.85_0.12_30)]">EST. LAHORE · Samnabad</p>
            <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl">
              {BUSINESS.tagline.split(".").map((part, i) =>
                part.trim() ? (
                  <span key={i} className="block">
                    {part.trim()}
                    {i < 2 && <span className="text-primary">.</span>}
                  </span>
                ) : null
              )}
            </h1>
            <p className="mt-6 max-w-lg text-base sm:text-lg text-[oklch(0.88_0.01_70)]">
              A neighbourhood fight club where kids and adults learn real martial
              arts, build serious strength, and discover discipline that lasts
              beyond the ring.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink("Hello! I'd like to book a trial class at Fitness Fighter Club.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-display text-sm tracking-[0.2em] uppercase text-primary-foreground transition hover:bg-accent"
              >
                Book A Trial →
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-sm border border-[oklch(0.97_0.01_80/0.4)] px-6 py-3.5 font-display text-sm tracking-[0.2em] uppercase text-[oklch(0.97_0.01_80)] transition hover:bg-[oklch(0.97_0.01_80/0.1)]"
              >
                See Training
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-[oklch(0.88_0.01_70)]">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-[oklch(0.85_0.16_75)]"><path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.14 1 5.86L10 14.9l-5.25 2.76 1-5.86L1.5 7.65l5.9-.85L10 1.5z"/></svg>
                ))}
                <span className="ml-1.5">{BUSINESS.rating.value} · {BUSINESS.rating.count} Google reviews</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[oklch(0.97_0.01_80/0.35)] text-[oklch(0.97_0.01_80)] transition hover:border-[oklch(0.97_0.01_80/0.7)] hover:bg-[oklch(0.97_0.01_80/0.1)]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.41.6.23 1.04.51 1.5.97.46.46.74.9.97 1.5.17.46.36 1.26.41 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.43-.23.6-.51 1.04-.97 1.5-.46.46-.9.74-1.5.97-.46.17-1.26.36-2.43.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.41a4.1 4.1 0 0 1-1.5-.97 4.1 4.1 0 0 1-.97-1.5c-.17-.46-.36-1.26-.41-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.43.23-.6.51-1.04.97-1.5.46-.46.9-.74 1.5-.97.46-.17 1.26-.36 2.43-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.73.07-.96.04-1.48.2-1.82.34-.46.18-.78.39-1.13.73-.34.35-.55.67-.73 1.13-.14.34-.3.86-.34 1.82C3.19 8.5 3.18 8.86 3.18 12s.01 3.5.07 4.73c.04.96.2 1.48.34 1.82.18.46.39.78.73 1.13.35.34.67.55 1.13.73.34.14.86.3 1.82.34 1.23.06 1.59.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.82-.34.46-.18.78-.39 1.13-.73.34-.35.55-.67.73-1.13.14-.34.3-.86.34-1.82.06-1.23.07-1.59.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.82a3.04 3.04 0 0 0-.73-1.13 3.04 3.04 0 0 0-1.13-.73c-.34-.14-.86-.3-1.82-.34C15.5 4.01 15.14 4 12 4zm0 3.05A4.95 4.95 0 1 1 7.05 12 4.95 4.95 0 0 1 12 7.05zm0 8.16A3.21 3.21 0 1 0 8.79 12 3.21 3.21 0 0 0 12 15.21zm5.16-8.36a1.16 1.16 0 1 1-1.16-1.16 1.16 1.16 0 0 1 1.16 1.16z"/></svg>
                </a>
                <a
                  href={BUSINESS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on TikTok"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[oklch(0.97_0.01_80/0.35)] text-[oklch(0.97_0.01_80)] transition hover:border-[oklch(0.97_0.01_80/0.7)] hover:bg-[oklch(0.97_0.01_80/0.1)]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M16.6 5.82a4.27 4.27 0 0 1-2.86-1.1A4.36 4.36 0 0 1 12.32 2h-3.1v13.4a2.6 2.6 0 1 1-1.84-2.49V9.66a5.86 5.86 0 1 0 5.04 5.8V9.1a7.16 7.16 0 0 0 4.18 1.34V7.18a4.28 4.28 0 0 1-.0-1.36z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="tag">01 / About</p>
          <h2 className="mt-3 text-4xl md:text-5xl">A real gym. <br/>Real coaches. <br/><span className="text-primary">Real respect.</span></h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Shark Karate Gymnastic & Fitness Academy started inside Samnabad
            with a simple mission — give the kids and families of our
            neighbourhood a place to channel their energy into something
            that builds character.
          </p>
          <p>
            Today we coach beginners and seasoned fighters across kickboxing,
            gymnastics, and conditioning. No flashy promises. Just consistent
            training, an instructor who shows up every evening, and a community
            that believes in <em>"say no to drugs, say yes to discipline."</em>
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            <Stat n="4.8★" label="Google rating" />
            <Stat n="All ages" label="Kids & adults" />
            <Stat n="7 nights" label="A week" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[oklch(0.96_0.012_70)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="tag">02 / Why Train With Us</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Built for fighters,<br/>welcoming to beginners.</h2>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <article key={w.title} className="lift relative border border-border bg-card p-6">
                <span className="absolute -top-3 left-6 bg-primary px-2 py-0.5 font-display text-xs tracking-[0.2em] text-primary-foreground">0{i + 1}</span>
                <h3 className="mt-3 text-xl">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="tag">03 / Training</p>
            <h2 className="mt-3 text-4xl md:text-5xl">What we teach.</h2>
          </div>
          <Link to="/services" className="link-uline font-display text-sm tracking-[0.18em] uppercase">All training →</Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ServiceCard img={heroImg} title="Karate" body="Traditional karate covering stances, kata, kumite and striking techniques. Builds discipline and real combat awareness from the ground up." />
          <ServiceCard img={kidsImg} title="Gymnastics" body="Balance, body control, tumbling and strength fundamentals. Great as a standalone discipline and as a base for any martial art." />
          <ServiceCard img={glovesImg} title="Physical Fitness" body="Combat-based strength and conditioning for all levels. Bag rounds, circuits and mobility work — structured to build strength and endurance." />
        </div>
      </section>

      {/* TRUST / REVIEWS */}
      <section className="bg-[oklch(0.18_0.015_50)] py-20 text-[oklch(0.92_0.012_70)] md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="tag text-[oklch(0.85_0.12_30)]">04 / In Their Words</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Trusted by the<br/>neighbourhood.</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="border border-white/10 bg-[oklch(0.22_0.018_50)] p-7">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-[oklch(0.85_0.16_75)]"><path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.14 1 5.86L10 14.9l-5.25 2.76 1-5.86L1.5 7.65l5.9-.85L10 1.5z"/></svg>
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed">"{r.quote}"</blockquote>
                <figcaption className="mt-6 font-display text-sm tracking-[0.18em] uppercase text-[oklch(0.85_0.12_30)]">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="slab relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8">
            <p className="tag text-[oklch(0.95_0.01_70)]">05 / Walk Through Our Doors</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Your first class is the hardest.<br/>We'll make it count.</h2>
            <p className="mt-5 max-w-xl text-[oklch(0.95_0.01_70/0.92)]">
              WhatsApp us your name and age — we'll send timings and what to bring.
              Doors open at 8 PM, every evening.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-[oklch(0.97_0.01_80)] px-6 py-4 text-center font-display text-sm tracking-[0.2em] uppercase text-[oklch(0.18_0.015_50)] hover:bg-[oklch(0.93_0.012_60)]">WhatsApp Now</a>
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="rounded-sm border border-[oklch(0.97_0.01_80/0.5)] px-6 py-4 text-center font-display text-sm tracking-[0.2em] uppercase text-[oklch(0.97_0.01_80)] hover:bg-[oklch(0.97_0.01_80/0.1)]">Call {BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-foreground">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
    </div>
  );
}

function ServiceCard({ img, title, body }: { img: string; title: string; body: string }) {
  return (
    <article className="lift group overflow-hidden border border-border bg-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </article>
  );
}

const WHY = [
  { title: "Coach who shows up", body: "Our instructor runs every evening session personally. Same face, same standards." },
  { title: "Kids welcome", body: "Structured classes for younger fighters — discipline, fitness and respect first." },
  { title: "Adults can join", body: "No 'too late, too old.' Beginners get a proper foundation, fighters get sparring." },
  { title: "Community-first", body: "We're rooted in Samnabad. Affordable, neighbourly and serious about training." },
];

const REVIEWS = [
  { name: "Zeeshan Ahmed (Google Local Guide)", quote: "Hardworking instructor. Good to see young children learning martial arts. And remember — say no to drugs." },
  { name: "Sadaf Javed", quote: "Thanks for all your efforts." },
  { name: "Khan (Local Guide)", quote: "How do I join this as an adult? — Owner replied within hours on WhatsApp." },
];