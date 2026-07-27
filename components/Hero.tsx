import { profile } from "@/data/profile";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-5xl flex-col justify-center px-6 py-16">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        {profile.title}
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Hi, I&apos;m {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{profile.tagline}</p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          View Projects
        </a>
        <a
          href={profile.socials.email}
          className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Contact Me
        </a>
      </div>

      <SocialLinks socials={profile.socials} className="mt-10" />
    </section>
  );
}
