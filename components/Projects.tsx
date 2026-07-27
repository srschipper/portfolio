import Image from "next/image";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectGallery from "@/components/ProjectGallery";
import TikTokEmbedGrid from "@/components/TikTokEmbedGrid";

export default function Projects() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="projects"
          eyebrow="Selected Work"
          title="Projects"
          subtitle="Campaigns, creative work, and digital experiences I'm proud of."
        />
        <div className="flex flex-col gap-8">
          {projects.map((project) => {
            const accent = project.accentColor ?? "var(--accent)";
            return (
              <article
                key={project.title}
                style={{ ["--project-accent" as string]: accent }}
                className="overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg"
              >
                <div className="h-1.5 w-full bg-[var(--project-accent)]" aria-hidden="true" />
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-2xl">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-muted">{project.description}</p>
                    </div>
                    <div className="flex gap-4 shrink-0">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-[var(--project-accent)] transition-opacity hover:opacity-70"
                        >
                          View Work &rarr;
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                        >
                          Source Code &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills and tools used">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs font-medium text-[var(--project-accent)]"
                        style={{ backgroundColor: "color-mix(in srgb, var(--project-accent) 12%, transparent)" }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.galleries && (
                  <div className="border-t border-border bg-border/10 p-6 sm:p-8">
                    <ProjectGallery galleries={project.galleries} accentColor={accent} />
                  </div>
                )}

                {project.tiktokEmbeds && (
                  <div className="border-t border-border bg-border/10 p-6 sm:p-8">
                    <TikTokEmbedGrid urls={project.tiktokEmbeds} />
                  </div>
                )}

                {!project.galleries && !project.tiktokEmbeds && project.image && (
                  <div className="relative aspect-video overflow-hidden border-t border-border bg-border/30">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
