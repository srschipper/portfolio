interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-24">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-lg text-muted">{subtitle}</p>}
    </div>
  );
}
