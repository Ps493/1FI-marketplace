import { ProductCategory } from '../../types';

interface CategoryFilterProps {
  active: ProductCategory | 'all';
  onChange: (value: ProductCategory | 'all') => void;
}

const CATEGORIES: { id: ProductCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'phones', label: 'Phones' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'wearables', label: 'Wearables' },
  { id: 'appliances', label: 'Appliances' },
];

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 py-3">
      {CATEGORIES.map((cat) => {
        const isActive = cat.id === active;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-[13px] font-medium border transition-colors ${
              isActive
                ? 'bg-ink-900 text-white border-ink-900'
                : 'bg-surface text-ink-700 border-ink-100'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
