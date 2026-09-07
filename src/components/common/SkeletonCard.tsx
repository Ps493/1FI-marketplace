export function SkeletonCard() {
  return (
    <div className="rounded-xl2 bg-surface shadow-card overflow-hidden animate-pulse">
      <div className="aspect-square bg-ink-100" />
      <div className="p-3 space-y-2">
        <div className="h-3 w-3/4 rounded bg-ink-100" />
        <div className="h-3 w-1/2 rounded bg-ink-100" />
        <div className="h-3 w-2/3 rounded bg-ink-100" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
