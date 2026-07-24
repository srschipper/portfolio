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
          title="Projects"
          subtitle="Campaigns, creative work, and digital experiences I'm proud of."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {project.image && (
                <div className="relative aspect-video overflow-hidden border-b border-border bg-border/30">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-muted">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills and tools used">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.galleries && <ProjectGallery galleries={project.galleries} />}
                {project.tiktokEmbeds && <TikTokEmbedGrid urls={project.tiktokEmbeds} />}
                <div className="mt-5 flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
