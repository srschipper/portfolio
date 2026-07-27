import Image from "next/image";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-8">
      <SectionHeading id="about" title="About" subtitle="A little bit about me and what I do." />
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
        <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <Image
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">{profile.bio}</p>
      </div>
    </section>
  );
}
