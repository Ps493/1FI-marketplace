import { EmiCalculation } from '../../types';
import { formatInr } from '../../utils/format';

interface PriceSummaryBarProps {
  calculation: EmiCalculation | null;
  disabled: boolean;
  onProceed: () => void;
}

export function PriceSummaryBar({ calculation, disabled, onProceed }: PriceSummaryBarProps) {
  return (
    <div className="sticky bottom-0 bg-surface border-t border-ink-100 shadow-sheet px-4 py-3 flex items-center gap-3">
      <div className="flex-1">
        {calculation ? (
          <>
            <p className="text-[16px] font-semibold text-ink-900">
              {formatInr(calculation.monthlyAmount)}
              <span className="text-[12px] font-normal text-ink-500">/mo</span>
            </p>
            <p className="text-[11px] text-ink-500">
              {calculation.plan.tenureMonths} months &middot; Total {formatInr(calculation.totalPayable)}
            </p>
          </>
        ) : (
          <p className="text-[12px] text-ink-500">Select a plan to continue</p>
        )}
      </div>
      <button
        onClick={onProceed}
        disabled={disabled}
        className="px-6 py-3 rounded-full bg-brand-500 text-white text-[14px] font-semibold disabled:opacity-40 active:scale-95 transition-transform"
      >
        Proceed
      </button>
    </div>
  );
}
