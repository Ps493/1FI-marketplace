import { useCallback, useEffect, useState } from 'react';
import { fetchProductDetail } from '../services/marketplaceApi';
import { ProductDetail } from '../types';

type State =
  | { phase: 'loading' }
  | { phase: 'error'; message: string }
  | { phase: 'ready'; product: ProductDetail };

export function useProductDetail(productId: string) {
  const [state, setState] = useState<State>({ phase: 'loading' });

  const load = useCallback(async () => {
    setState({ phase: 'loading' });
    const result = await fetchProductDetail(productId);
    if (result.status === 'success') {
      setState({ phase: 'ready', product: result.data });
    } else {
      setState({ phase: 'error', message: result.message });
    }
  }, [productId]);

  useEffect(() => {
    load();
  }, [load]);

  return { ...state, retry: load };
}
