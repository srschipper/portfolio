import { profile } from "@/data/profile";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden bg-foreground">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -bottom-16 left-1/4 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--accent-udance)" }}
        />
        <div
          className="absolute -top-16 right-1/4 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--accent)" }}
        />
      </div>
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center">
        <p className="font-display text-xl font-semibold text-background">Let&apos;s work together</p>
        <SocialLinks socials={profile.socials} className="[&_a]:text-background/70 [&_a:hover]:text-white [&_a:hover]:bg-white/10" />
        <p className="text-sm text-background/60">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs uppercase tracking-wider text-background/40">Built with Next.js</p>
      </div>
    </footer>
  );
}
