import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS, waLink } from "@/lib/business";
import kidsImg from "@/assets/kids-class.jpg";
import glovesImg from "@/assets/gloves.jpg";
import gymImg from "@/assets/gymnastics.jpg";
import heroImg from "@/assets/hero-fighter.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Training — Karate, Gymnastics & Fitness | Fitness Fighter Club" },
      { name: "description", content: "Explore training programs at Fitness Fighter Club, Lahore — karate, gymnastics, self-defence, physical fitness and weight loss training. Coach-led every evening." },
      { property: "og:title", content: "Training at Fitness Fighter Club" },
      { property: "og:description", content: "Karate, gymnastics, self-defence and fitness training in Samnabad, Lahore." },
      { property: "og:image", content: glovesImg },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "Karate",
    img: heroImg,
    desc: "Traditional karate training covering stances, kata, kumite and striking techniques. Builds discipline, focus and real combat awareness from the ground up.",
    benefits: ["Traditional martial arts foundation", "Sharp striking & reflexes", "Mental discipline & focus"],
  },
  {
    title: "Gymnastics",
    img: gymImg,
    desc: "Balance, body control, tumbling and strength fundamentals. Great as a standalone discipline and as a powerful base for any martial art.",
    benefits: ["Flexibility & posture", "Confidence on the mat", "Foundation for martial arts"],
  },
  {
    title: "Self-Defence",
    img: kidsImg,
    desc: "Practical, no-nonsense self-defence techniques drawn from multiple disciplines. Designed for real-world situations — suitable for all ages and fitness levels.",
    benefits: ["Real-world protection skills", "Situational awareness", "Confidence under pressure"],
  },
  {
    title: "Physical Fitness",
    img: glovesImg,
    desc: "Combat-based conditioning for adults of every starting level. Bag rounds, circuits and mobility work — structured to build strength, endurance and athleticism.",
    benefits: ["Full-body strength & endurance", "Improved energy levels", "Train at your own pace"],
  },
  {
    title: "Weight Loss Training",
    img: kidsImg,
    desc: "High-intensity, coach-led sessions designed specifically around fat loss. Combines cardio bursts, resistance training and martial arts drills to maximise calorie burn.",
    benefits: ["Effective fat loss", "Boosted metabolism", "Sustainable lifestyle habits"],
  },
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-[oklch(0.96_0.012_70)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="tag">Training Programs</p>
            <h1 className="mt-3 text-5xl md:text-6xl">
              Pick your <span className="text-primary">discipline.</span>
            </h1>
          </div>
          <p className="md:col-span-5 self-end text-base leading-relaxed text-muted-foreground">
            Every program is coach-led, beginner-friendly, and runs every evening
            from 8 PM at our Samnabad location. New to training?
            Start with a trial class — we'll guide the rest.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="space-y-20">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="grid items-center gap-10 md:grid-cols-12">
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="lift overflow-hidden border border-border">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <p className="tag">0{i + 1} / Program</p>
                <h2 className="mt-3 text-4xl md:text-5xl">{s.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hello! I'd like to know more about the ${s.title} program at Fitness Fighter Club.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-display text-xs tracking-[0.2em] uppercase text-primary-foreground transition hover:bg-accent"
                >
                  Inquire on WhatsApp →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="slab">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-20 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="tag text-[oklch(0.95_0.01_70)]">Ready when you are</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Not sure where to start?</h2>
            <p className="mt-5 max-w-xl text-[oklch(0.95_0.01_70/0.92)]">
              Send us your age and goal on WhatsApp. We'll recommend the right
              program and book your first session — usually same day.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-[oklch(0.97_0.01_80)] px-6 py-4 text-center font-display text-sm tracking-[0.2em] uppercase text-[oklch(0.18_0.015_50)] hover:bg-[oklch(0.93_0.012_60)]"
              >
                WhatsApp Coach
              </a>
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="rounded-sm border border-[oklch(0.97_0.01_80/0.5)] px-6 py-4 text-center font-display text-sm tracking-[0.2em] uppercase text-[oklch(0.97_0.01_80)] hover:bg-[oklch(0.97_0.01_80/0.1)]"
              >
                Call {BUSINESS.phone}
              </a>
          </div>
        </div>
      </section>
    </>
  );    
}   