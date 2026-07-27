interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function SectionHeading({ id, title, subtitle, eyebrow }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-24">
      {eyebrow && (
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-lg text-muted">{subtitle}</p>}
    </div>
  );
}
