import { ProductSummary } from '../../types';
import { EmptyState } from '../common/EmptyState';
import { ErrorState } from '../common/ErrorState';
import { SkeletonGrid } from '../common/SkeletonCard';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  phase: 'loading' | 'error' | 'ready';
  products?: ProductSummary[];
  errorMessage?: string;
  onRetry: () => void;
  onSelectProduct: (id: string) => void;
}

export function ProductGrid({ phase, products, errorMessage, onRetry, onSelectProduct }: ProductGridProps) {
  if (phase === 'loading') return <SkeletonGrid />;

  if (phase === 'error') {
    return <ErrorState message={errorMessage ?? 'Please try again.'} onRetry={onRetry} />;
  }

  if (!products || products.length === 0) {
    return <EmptyState label="No products match this filter yet." />;
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
      ))}
    </div>
  );
}
