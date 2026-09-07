import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchEmiPlans } from '../services/marketplaceApi';
import { EmiPlan } from '../types';
import { calculateEmi } from '../utils/format';

type State =
  | { phase: 'loading' }
  | { phase: 'error'; message: string }
  | { phase: 'ready'; plans: EmiPlan[] };

export function useEmiPlans(productId: string, principal: number) {
  const [state, setState] = useState<State>({ phase: 'loading' });
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setState({ phase: 'loading' });
    const result = await fetchEmiPlans(productId);
    if (result.status === 'success') {
      setState({ phase: 'ready', plans: result.data });
      // Default to the middle tenure, generally the most representative option
      const mid = result.data[Math.floor(result.data.length / 2)];
      setSelectedPlanId(mid?.id ?? null);
    } else {
      setState({ phase: 'error', message: result.message });
    }
  }, [productId]);

  useEffect(() => {
    load();
  }, [load]);

  const selectedPlan = useMemo(() => {
    if (state.phase !== 'ready') return null;
    return state.plans.find((p) => p.id === selectedPlanId) ?? null;
  }, [state, selectedPlanId]);

  const selectedCalculation = useMemo(() => {
    if (!selectedPlan) return null;
    return calculateEmi(principal, selectedPlan);
  }, [selectedPlan, principal]);

  return { ...state, selectedPlanId, setSelectedPlanId, selectedPlan, selectedCalculation, retry: load };
}
