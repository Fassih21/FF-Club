import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS, waLink } from "@/lib/business";
import heroImg from "@/assets/hero-fighter.jpg";
import kidsImg from "@/assets/kids-class.jpg";
import glovesImg from "@/assets/gloves.jpg";
import gymImg from "@/assets/gymnastics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shark Karate Gymnastic & Fitness Academy — Karate & Fitness, Samnabad Lahore" },
      { name: "description", content: "Coach-led karate, gymnastics and fitness training for kids and adults at Samnabad, Lahore. Rated 5.0★ on Google. Two slots: 7:15–8:15 PM & 8:30–9:30 PM, Mon–Fri." },
      { property: "og:title", content: "Shark Karate Gymnastic & Fitness Academy — Lahore" },
      { property: "og:description", content: "Train hard. Hit harder. Karate, gymnastics and fitness in Samnabad, Lahore." },
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
            <div className="mt-10 flex items-center gap-5 text-sm text-[oklch(0.88_0.01_70)]">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-[oklch(0.85_0.16_75)]"><path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.14 1 5.86L10 14.9l-5.25 2.76 1-5.86L1.5 7.65l5.9-.85L10 1.5z"/></svg>
                ))}
                <span className="ml-1.5">{BUSINESS.rating.value} · {BUSINESS.rating.count} Google reviews</span>
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
            Today we coach beginners and seasoned fighters across karate, self-defense,
            gymnastics, and conditioning. No flashy promises. Just consistent
            training, an instructor who shows up every evening, and a community
            that believes in <em>"say no to drugs, say yes to discipline."</em>
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            <Stat n="4.8★" label="Google rating" />
            <Stat n="All ages" label="Kids & adults" />
            <Stat n="5 nights" label="A week" />
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
          <ServiceCard img={heroImg} title="Karate" body="Traditional striking, forms and discipline — the foundation every fighter starts with." />
          <ServiceCard img={gymImg} title="Gymnastics" body="Flexibility, balance and body control drills, built for kids and adults alike." />
          <ServiceCard img={kidsImg} title="Self-Defence" body="Practical, real-world techniques to protect yourself with confidence." />
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
              WhatsApp us your name and age — we'll send you the slot details and what to bring.
              Two sessions Mon–Fri: 7:15–8:15 PM and 8:30–9:30 PM.
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
  { name: "Waqas Rana", quote: "The best place created in Samnabad Lahore Pakistan with full energy and the staff is too friendly." },
  { name: "Maryam Khalid", quote: "My kids really enjoy the training. Great work." },
  { name: "Asim Ismail", quote: "One of the best clubs in Lahore." },
];