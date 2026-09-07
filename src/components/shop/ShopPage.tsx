import { useState } from 'react';
import { MarketplaceScreen } from '../marketplace/MarketplaceScreen';
import { ProductDetailScreen } from '../marketplace/ProductDetailScreen';
import { TopBar } from '../common/TopBar';
import { NearbyStoresPlaceholder } from './NearbyStoresPlaceholder';
import { ShopTabId, ShopTabs } from './ShopTabs';
import { TopBrandsPlaceholder } from './TopBrandsPlaceholder';

export function ShopPage() {
  const [activeTab, setActiveTab] = useState<ShopTabId>('marketplace');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Product detail is a full-screen drill-down over the Shop tab, not a tab itself
  if (selectedProductId) {
    return (
      <div className="relative h-full">
        <ProductDetailScreen productId={selectedProductId} onBack={() => setSelectedProductId(null)} />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <TopBar title="Shop" />
      <ShopTabs active={activeTab} onChange={setActiveTab} />
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'marketplace' && (
          <MarketplaceScreen onSelectProduct={setSelectedProductId} />
        )}
        {activeTab === 'topBrands' && <TopBrandsPlaceholder />}
        {activeTab === 'nearbyStores' && <NearbyStoresPlaceholder />}
      </div>
    </div>
  );
}
