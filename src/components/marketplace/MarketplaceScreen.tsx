import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCategory } from '../../types';
import { CategoryFilter } from './CategoryFilter';
import { ProductGrid } from './ProductGrid';

interface MarketplaceScreenProps {
  onSelectProduct: (id: string) => void;
}

export function MarketplaceScreen({ onSelectProduct }: MarketplaceScreenProps) {
  const [category, setCategory] = useState<ProductCategory | 'all'>('all');
  const result = useProducts(category === 'all' ? undefined : category);

  return (
    <div>
      <div className="px-4 pt-3">
        <p className="text-[13px] text-ink-500">
          Shop now, pay later with 0% interest &mdash; backed by your mutual funds.
        </p>
      </div>
      <CategoryFilter active={category} onChange={setCategory} />
      <div className="px-4 pb-6">
        <ProductGrid
          phase={result.phase}
          products={result.phase === 'ready' ? result.products : undefined}
          errorMessage={result.phase === 'error' ? result.message : undefined}
          onRetry={result.retry}
          onSelectProduct={onSelectProduct}
        />
      </div>
    </div>
  );
}
