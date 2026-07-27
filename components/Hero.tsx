import { profile } from "@/data/profile";
import SocialLinks from "@/components/SocialLinks";

const roleChips = [
  { label: "Content Strategist", color: "var(--accent-appian)", rotate: "-rotate-3" },
  { label: "Photographer", color: "var(--accent-photo)", rotate: "rotate-2" },
  { label: "Storyteller", color: "var(--accent-hustle)", rotate: "-rotate-2" },
];

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[65vh] max-w-5xl flex-col justify-center overflow-hidden px-6 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute -top-24 right-0 h-80 w-80 rounded-full opacity-25 blur-3xl"
          style={{ backgroundColor: "var(--accent-udance)" }}
        />
        <div
          className="absolute left-10 top-1/3 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--accent-hustle)" }}
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
        <p className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
          {profile.title}
        </p>
      </div>

      <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-accent via-accent-hustle to-accent-udance bg-clip-text text-transparent">
          {profile.name}
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{profile.tagline}</p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-accent to-accent-hustle px-6 py-3 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.03]"
        >
          View Projects
        </a>
        <a
          href={profile.socials.email}
          className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Contact Me
        </a>
      </div>

      <SocialLinks socials={profile.socials} className="mt-10" />

      <div className="pointer-events-none absolute right-6 top-10 hidden flex-col items-end gap-4 lg:flex" aria-hidden="true">
        {roleChips.map((chip) => (
          <span
            key={chip.label}
            className={`flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-sm ${chip.rotate}`}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: chip.color }} />
            {chip.label}
          </span>
        ))}
      </div>
    </section>
  );
}
