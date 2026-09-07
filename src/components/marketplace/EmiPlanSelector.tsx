import { EmiPlan } from '../../types';
import { ErrorState } from '../common/ErrorState';
import { EmiPlanCard } from './EmiPlanCard';

interface EmiPlanSelectorProps {
  phase: 'loading' | 'error' | 'ready';
  plans?: EmiPlan[];
  errorMessage?: string;
  principal: number;
  selectedPlanId: string | null;
  onSelectPlan: (planId: string) => void;
  onRetry: () => void;
}

function PlanSkeleton() {
  return (
    <div className="space-y-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-14 rounded-xl bg-ink-100 animate-pulse" />
      ))}
    </div>
  );
}

export function EmiPlanSelector({
  phase,
  plans,
  errorMessage,
  principal,
  selectedPlanId,
  onSelectPlan,
  onRetry,
}: EmiPlanSelectorProps) {
  return (
    <div className="mb-4">
      <p className="text-[13px] font-semibold text-ink-900 mb-2">Choose your EMI plan</p>

      {phase === 'loading' && <PlanSkeleton />}

      {phase === 'error' && (
        <ErrorState compact message={errorMessage ?? 'Please try again.'} onRetry={onRetry} />
      )}

      {phase === 'ready' && plans && (
        <div className="space-y-2">
          {plans.map((plan) => (
            <EmiPlanCard
              key={plan.id}
              plan={plan}
              principal={principal}
              isSelected={plan.id === selectedPlanId}
              onSelect={onSelectPlan}
            />
          ))}
        </div>
      )}
    </div>
  );
}
