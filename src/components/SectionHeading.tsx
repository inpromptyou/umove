export default function SectionHeading({ tag, title, desc }: { tag?: string; title: string; desc?: string }) {
  return (
    <div className="text-center mb-12">
      {tag && <span className="text-accent font-semibold text-sm uppercase tracking-wider">{tag}</span>}
      <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
      {desc && <p className="text-muted mt-3 max-w-2xl mx-auto">{desc}</p>}
    </div>
  );
}
