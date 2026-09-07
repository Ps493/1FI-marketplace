import { Store } from 'lucide-react';

/**
 * Assignment explicitly scopes this section out: "No implementation
 * required. The page can remain blank." Kept as its own component
 * (rather than inline JSX) so it's a one-line swap when this section
 * gets built out later — nothing else in the Shop tree needs to change.
 */
export function TopBrandsPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="w-12 h-12 rounded-full bg-ink-100 flex items-center justify-center mb-3">
        <Store size={22} className="text-ink-500" />
      </div>
      <p className="text-ink-700 text-sm font-medium">Top Brands is coming soon</p>
      <p className="text-ink-500 text-xs mt-1 max-w-xs">
        Curated deals from your favourite brands will show up here.
      </p>
    </div>
  );
}
