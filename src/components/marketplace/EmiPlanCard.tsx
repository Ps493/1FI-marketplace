import { Check } from 'lucide-react';
import { EmiPlan } from '../../types';
import { calculateEmi, formatInr } from '../../utils/format';

interface EmiPlanCardProps {
  plan: EmiPlan;
  principal: number;
  isSelected: boolean;
  onSelect: (planId: string) => void;
}

export function EmiPlanCard({ plan, principal, isSelected, onSelect }: EmiPlanCardProps) {
  const calc = calculateEmi(principal, plan);

  return (
    <button
      onClick={() => onSelect(plan.id)}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-colors ${
        isSelected ? 'border-brand-500 bg-brand-50' : 'border-ink-100 bg-surface'
      }`}
    >
      <div className="text-left">
        <p className="text-[14px] font-semibold text-ink-900">{plan.tenureMonths} months</p>
        <p className="text-[11px] text-success font-medium">0% interest &middot; No hidden fees</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-[14px] font-semibold text-ink-900">{formatInr(calc.monthlyAmount)}/mo</p>
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
            isSelected ? 'bg-brand-500 border-brand-500' : 'border-ink-300'
          }`}
        >
          {isSelected && <Check size={12} className="text-white" strokeWidth={3} />}
        </div>
      </div>
    </button>
  );
}
