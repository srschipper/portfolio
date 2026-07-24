import { profile } from "@/data/profile";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border bg-card scroll-mt-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12 text-center">
        <SocialLinks socials={profile.socials} />
        <p className="text-sm text-muted">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted/70">Built with Next.js</p>
      </div>
    </footer>
  );
}
