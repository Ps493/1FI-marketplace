import { VariantGroup } from '../../types';

interface VariantSelectorProps {
  group: VariantGroup;
  selectedOptionId: string;
  onSelect: (groupId: string, optionId: string) => void;
}

export function VariantSelector({ group, selectedOptionId, onSelect }: VariantSelectorProps) {
  return (
    <div className="mb-4">
      <p className="text-[13px] font-semibold text-ink-900 mb-2">{group.name}</p>
      <div className="flex flex-wrap gap-2">
        {group.options.map((option) => {
          const isActive = option.id === selectedOptionId;
          return (
            <button
              key={option.id}
              onClick={() => onSelect(group.id, option.id)}
              className={`px-3.5 py-2 rounded-xl text-[13px] font-medium border transition-colors ${
                isActive
                  ? 'border-brand-500 bg-brand-50 text-brand-600'
                  : 'border-ink-100 text-ink-700'
              }`}
            >
              {option.label}
              {option.priceDelta > 0 && (
                <span className="text-[11px] text-ink-500"> +₹{option.priceDelta.toLocaleString('en-IN')}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
