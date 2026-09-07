import { EmiCalculation, EmiPlan } from '../types';

export const formatInr = (amount: number): string =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

/**
 * Computes monthly instalment and totals for a given principal + plan.
 *
 * For no-cost plans (interestRatePct === 0) this is a flat division of
 * principal by tenure. For standard/interest-bearing plans we use the
 * reducing-balance EMI formula so the utility stays correct if 1Fi ever
 * introduces interest-bearing tenures (e.g. beyond 24 months) alongside
 * the no-cost ones.
 */
export const calculateEmi = (principal: number, plan: EmiPlan): EmiCalculation => {
  const { tenureMonths, interestRatePct, processingFee } = plan;

  if (interestRatePct === 0) {
    const monthlyAmount = Math.ceil(principal / tenureMonths);
    const totalPayable = monthlyAmount * tenureMonths + processingFee;
    return {
      plan,
      principal,
      monthlyAmount,
      totalPayable,
      totalInterest: totalPayable - principal - processingFee,
    };
  }

  const monthlyRate = interestRatePct / 12 / 100;
  const factor = Math.pow(1 + monthlyRate, tenureMonths);
  const monthlyAmount = Math.ceil((principal * monthlyRate * factor) / (factor - 1));
  const totalPayable = monthlyAmount * tenureMonths + processingFee;

  return {
    plan,
    principal,
    monthlyAmount,
    totalPayable,
    totalInterest: totalPayable - principal - processingFee,
  };
};
