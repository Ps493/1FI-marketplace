import { useMemo, useState } from 'react';
import { useEmiPlans } from '../../hooks/useEmiPlans';
import { useProductDetail } from '../../hooks/useProductDetail';
import { ErrorState } from '../common/ErrorState';
import { TopBar } from '../common/TopBar';
import { EmiPlanSelector } from './EmiPlanSelector';
import { PriceSummaryBar } from './PriceSummaryBar';
import { VariantSelector } from './VariantSelector';
import { formatInr } from '../../utils/format';
import { CheckCircle2 } from 'lucide-react';

interface ProductDetailScreenProps {
  productId: string;
  onBack: () => void;
}

function DetailSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-square bg-ink-100" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-1/2 bg-ink-100 rounded" />
        <div className="h-3 w-1/3 bg-ink-100 rounded" />
        <div className="h-3 w-2/3 bg-ink-100 rounded" />
      </div>
    </div>
  );
}

export function ProductDetailScreen({ productId, onBack }: ProductDetailScreenProps) {
  const detail = useProductDetail(productId);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState<{ tenure: number; monthly: string } | null>(null);

  const product = detail.phase === 'ready' ? detail.product : null;

  // Ensure every variant group has a default selection once product loads
  const activeSelections = useMemo(() => {
    if (!product) return selections;
    const withDefaults = { ...selections };
    for (const group of product.variantGroups) {
      if (!withDefaults[group.id]) withDefaults[group.id] = group.options[0].id;
    }
    return withDefaults;
  }, [product, selections]);

  const principal = useMemo(() => {
    if (!product) return 0;
    let total = product.basePrice;
    for (const group of product.variantGroups) {
      const chosenId = activeSelections[group.id];
      const option = group.options.find((o) => o.id === chosenId);
      if (option) total += option.priceDelta;
    }
    return total;
  }, [product, activeSelections]);

  const emi = useEmiPlans(productId, principal);

  const handleVariantSelect = (groupId: string, optionId: string) => {
    setSelections((prev) => ({ ...prev, [groupId]: optionId }));
  };

  const handleProceed = () => {
    if (!emi.selectedCalculation) return;
    setConfirmed({
      tenure: emi.selectedCalculation.plan.tenureMonths,
      monthly: formatInr(emi.selectedCalculation.monthlyAmount),
    });
  };

  return (
    <div className="flex flex-col h-full">
      <TopBar title={product?.name ?? 'Product'} onBack={onBack} />

      <div className="flex-1 overflow-y-auto">
        {detail.phase === 'loading' && <DetailSkeleton />}

        {detail.phase === 'error' && (
          <ErrorState message={detail.message} onRetry={detail.retry} />
        )}

        {product && (
          <>
            <div className="aspect-square bg-brand-50">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-4">
              <p className="text-[11px] text-ink-500">{product.brand}</p>
              <h2 className="text-[19px] font-semibold text-ink-900 mt-0.5">{product.name}</h2>
              <p className="text-[20px] font-bold text-ink-900 mt-2">{formatInr(principal)}</p>
              <p className="text-[12px] text-ink-500 mt-0.5">{product.description}</p>

              <ul className="mt-3 space-y-1.5">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[12.5px] text-ink-700">
                    <span className="w-1 h-1 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-ink-100">
                {product.variantGroups.map((group) => (
                  <VariantSelector
                    key={group.id}
                    group={group}
                    selectedOptionId={activeSelections[group.id] ?? group.options[0].id}
                    onSelect={handleVariantSelect}
                  />
                ))}
              </div>

              <div className="pt-2 border-t border-ink-100">
                <EmiPlanSelector
                  phase={emi.phase}
                  plans={emi.phase === 'ready' ? emi.plans : undefined}
                  errorMessage={emi.phase === 'error' ? emi.message : undefined}
                  principal={principal}
                  selectedPlanId={emi.selectedPlanId}
                  onSelectPlan={emi.setSelectedPlanId}
                  onRetry={emi.retry}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {product && (
        <PriceSummaryBar
          calculation={emi.selectedCalculation}
          disabled={!emi.selectedCalculation}
          onProceed={handleProceed}
        />
      )}

      {confirmed && (
        <div className="absolute inset-0 bg-ink-900/40 flex items-end justify-center z-30" onClick={() => setConfirmed(null)}>
          <div className="bg-surface w-full rounded-t-2xl p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 size={24} className="text-success" />
            </div>
            <p className="text-[15px] font-semibold text-ink-900">Plan selected</p>
            <p className="text-[13px] text-ink-500 mt-1">
              {confirmed.tenure}-month plan at {confirmed.monthly}/mo. Next, you&apos;d verify eligibility and pledge
              mutual funds to confirm this purchase.
            </p>
            <button
              onClick={() => setConfirmed(null)}
              className="mt-4 w-full py-3 rounded-full bg-brand-500 text-white text-[14px] font-semibold"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
