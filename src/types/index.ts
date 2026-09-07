/**
 * Domain types for the 1Fi Marketplace.
 *
 * Kept independent of any specific transport (mock or real API) so the UI
 * layer never has to know whether data came from a JSON file or a network
 * call — see src/services/marketplaceApi.ts.
 */

export type ProductCategory = 'phones' | 'laptops' | 'wearables' | 'appliances';

export interface ProductVariantOption {
  /** e.g. "256GB" for storage, "Titanium Black" for color */
  id: string;
  label: string;
  /** Amount added/subtracted from the base price when this option is picked */
  priceDelta: number;
}

export interface VariantGroup {
  id: string;
  /** e.g. "Storage", "Colour" */
  name: string;
  options: ProductVariantOption[];
}

export interface ProductSummary {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  imageUrl: string;
  /** Starting price shown on listing cards, in INR, before variant deltas */
  basePrice: number;
  /** Lowest possible monthly EMI across all plans, for the listing card badge */
  startingEmi: number;
  badge?: string; // e.g. "Best Seller", "New"
  rating?: number;
}

export interface ProductDetail extends ProductSummary {
  description: string;
  highlights: string[];
  variantGroups: VariantGroup[];
  galleryUrls: string[];
}

export type EmiPlanType = 'no_cost' | 'standard';

export interface EmiPlan {
  id: string;
  tenureMonths: number;
  planType: EmiPlanType;
  /** Annual interest rate, 0 for no-cost EMI plans */
  interestRatePct: number;
  /** Convenience/processing fee charged once, in INR (0 for this catalogue) */
  processingFee: number;
}

export interface EmiCalculation {
  plan: EmiPlan;
  principal: number;
  monthlyAmount: number;
  totalPayable: number;
  totalInterest: number;
}

/** Discriminated result wrapper so the UI always handles both states. */
export type ApiResult<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };
