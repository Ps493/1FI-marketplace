import { EmiPlan } from '../types';

/**
 * 1Fi's real product is 0%-interest EMI backed by pledged mutual funds,
 * for tenures up to 24 months (per their public FAQ). We model that here:
 * every plan is no-cost, so the only lever is tenure length.
 *
 * This lives separately from products so a future backend can serve
 * different plan sets per product/lender without touching product data.
 */
export const EMI_PLANS: EmiPlan[] = [
  { id: 'tenure-3', tenureMonths: 3, planType: 'no_cost', interestRatePct: 0, processingFee: 0 },
  { id: 'tenure-6', tenureMonths: 6, planType: 'no_cost', interestRatePct: 0, processingFee: 0 },
  { id: 'tenure-9', tenureMonths: 9, planType: 'no_cost', interestRatePct: 0, processingFee: 0 },
  { id: 'tenure-12', tenureMonths: 12, planType: 'no_cost', interestRatePct: 0, processingFee: 0 },
  { id: 'tenure-18', tenureMonths: 18, planType: 'no_cost', interestRatePct: 0, processingFee: 0 },
  { id: 'tenure-24', tenureMonths: 24, planType: 'no_cost', interestRatePct: 0, processingFee: 0 },
];
