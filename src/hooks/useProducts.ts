import { useCallback, useEffect, useState } from 'react';
import { fetchProducts } from '../services/marketplaceApi';
import { ProductCategory, ProductSummary } from '../types';

type State =
  | { phase: 'loading' }
  | { phase: 'error'; message: string }
  | { phase: 'ready'; products: ProductSummary[] };

export function useProducts(category?: ProductCategory) {
  const [state, setState] = useState<State>({ phase: 'loading' });

  const load = useCallback(async () => {
    setState({ phase: 'loading' });
    const result = await fetchProducts(category);
    if (result.status === 'success') {
      setState({ phase: 'ready', products: result.data });
    } else {
      setState({ phase: 'error', message: result.message });
    }
  }, [category]);

  useEffect(() => {
    load();
  }, [load]);

  return { ...state, retry: load };
}
