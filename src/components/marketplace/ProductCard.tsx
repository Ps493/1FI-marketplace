import { Star } from 'lucide-react';
import { ProductSummary } from '../../types';
import { formatInr } from '../../utils/format';
import { Badge } from '../common/Badge';

interface ProductCardProps {
  product: ProductSummary;
  onSelect: (id: string) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <button
      onClick={() => onSelect(product.id)}
      className="text-left rounded-xl2 bg-surface shadow-card overflow-hidden active:scale-[0.98] transition-transform"
    >
      <div className="aspect-square bg-brand-50 relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        {product.badge && (
          <div className="absolute top-2 left-2">
            <Badge tone={product.badge === 'Best Seller' ? 'success' : 'brand'}>{product.badge}</Badge>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-[11px] text-ink-500">{product.brand}</p>
        <p className="text-[13px] font-semibold text-ink-900 leading-tight mt-0.5 line-clamp-2">
          {product.name}
        </p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-[13px] font-semibold text-ink-900">{formatInr(product.basePrice)}</p>
          {product.rating && (
            <div className="flex items-center gap-0.5 text-ink-500">
              <Star size={11} className="fill-ink-500" />
              <span className="text-[11px]">{product.rating}</span>
            </div>
          )}
        </div>
        <p className="text-[11px] text-brand-600 font-medium mt-1">
          From {formatInr(product.startingEmi)}/mo
        </p>
      </div>
    </button>
  );
}
