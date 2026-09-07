export type ShopTabId = 'marketplace' | 'topBrands' | 'nearbyStores';

interface ShopTabsProps {
  active: ShopTabId;
  onChange: (tab: ShopTabId) => void;
}

const TABS: { id: ShopTabId; label: string }[] = [
  { id: 'marketplace', label: '1Fi Marketplace' },
  { id: 'topBrands', label: 'Top Brands' },
  { id: 'nearbyStores', label: 'Nearby Stores' },
];

export function ShopTabs({ active, onChange }: ShopTabsProps) {
  return (
    <div className="px-4 pt-2 pb-1 bg-surface">
      <div role="tablist" className="flex gap-1 bg-canvas rounded-full p-1">
        {TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.id)}
              className={`flex-1 text-[13px] font-medium py-2 rounded-full transition-colors ${
                isActive ? 'bg-brand-500 text-white shadow-sm' : 'text-ink-500'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
