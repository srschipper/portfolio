import { experience } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        id="experience"
        title="Experience"
        subtitle="Roles where I've driven growth, engagement, and measurable impact."
      />
      <div className="relative space-y-12">
        <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block" aria-hidden="true" />
        {experience.map((job) => (
          <article key={`${job.company}-${job.role}`} className="relative md:pl-10">
            <div
              className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-background md:block"
              aria-hidden="true"
            />
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                  <p className="text-accent">{job.company}</p>
                </div>
                <time className="mt-1 text-sm text-muted sm:mt-0">{job.period}</time>
              </div>
              <p className="mt-3 text-muted">{job.description}</p>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
