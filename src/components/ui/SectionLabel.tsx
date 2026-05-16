export default function SectionLabel({ text, number }: { text: string; number?: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      {number && <span className="text-ember font-sans text-xs tracking-widest">{number}</span>}
      <span className="text-xs uppercase tracking-widest text-ink/60">{text}</span>
      <div className="h-px bg-ink/10 flex-1" />
    </div>
  );
}
