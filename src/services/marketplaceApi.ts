import { EMI_PLANS } from '../data/emiPlans.mock';
import { getProductById, getProductSummaries } from '../data/products.mock';
import { ApiResult, EmiPlan, ProductCategory, ProductDetail, ProductSummary } from '../types';

/**
 * Marketplace data-access layer.
 *
 * The rest of the app talks only to this module, never to the mock data
 * files directly. That boundary means swapping the mock catalogue for a
 * real backend (e.g. `fetch('/api/marketplace/products')`) later only
 * touches this file — components, hooks, and screens stay unchanged.
 *
 * Latency and a small random failure rate are simulated deliberately so
 * loading and error states in the UI are exercised realistically instead
 * of just being dead code paths.
 */

const NETWORK_DELAY_MS = 550;
const SIMULATED_FAILURE_RATE = 0.06; // ~1 in 16 calls fails, for error-state testing

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const maybeFail = (context: string) => {
  if (Math.random() < SIMULATED_FAILURE_RATE) {
    throw new Error(`Could not reach 1Fi servers while loading ${context}. Check your connection and try again.`);
  }
};

export async function fetchProducts(category?: ProductCategory): Promise<ApiResult<ProductSummary[]>> {
  try {
    await delay(NETWORK_DELAY_MS);
    maybeFail('the marketplace catalogue');
    const all = getProductSummaries();
    const data = category ? all.filter((p) => p.category === category) : all;
    return { status: 'success', data };
  } catch (err) {
    return { status: 'error', message: (err as Error).message };
  }
}

export async function fetchProductDetail(productId: string): Promise<ApiResult<ProductDetail>> {
  try {
    await delay(NETWORK_DELAY_MS);
    maybeFail('product details');
    const product = getProductById(productId);
    if (!product) {
      return { status: 'error', message: 'This product is no longer available.' };
    }
    return { status: 'success', data: product };
  } catch (err) {
    return { status: 'error', message: (err as Error).message };
  }
}

export async function fetchEmiPlans(_productId: string): Promise<ApiResult<EmiPlan[]>> {
  try {
    await delay(NETWORK_DELAY_MS - 200);
    maybeFail('EMI plans');
    // In a real backend, plans could vary per product/lender/eligibility.
    // Signature already takes productId so that wiring is a one-line change.
    return { status: 'success', data: EMI_PLANS };
  } catch (err) {
    return { status: 'error', message: (err as Error).message };
  }
}
