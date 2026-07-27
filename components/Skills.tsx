import { skills } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";

const accentCycle = [
  "var(--accent)",
  "var(--accent-udance)",
  "var(--accent-hustle)",
  "var(--accent-photo)",
  "var(--accent-milo)",
  "var(--accent-appian)",
];

export default function Skills() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="skills"
          eyebrow="Toolkit"
          title="Skills"
          subtitle="Tools and platforms I use to create, analyze, and optimize digital experiences."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group, groupIndex) => (
            <div key={group.category}>
              <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-muted">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => {
                  const color = accentCycle[(groupIndex + skillIndex) % accentCycle.length];
                  return (
                    <li
                      key={skill}
                      style={{ ["--chip-accent" as string]: color }}
                      className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[var(--chip-accent)] hover:text-[var(--chip-accent)]"
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
