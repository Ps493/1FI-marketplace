import { PackageSearch } from 'lucide-react';

export function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="w-11 h-11 rounded-full bg-ink-100 flex items-center justify-center mb-3">
        <PackageSearch size={20} className="text-ink-500" />
      </div>
      <p className="text-ink-700 text-sm font-medium">{label}</p>
    </div>
  );
}
