import { MapPin } from 'lucide-react';

/** Out of scope per assignment spec — see TopBrandsPlaceholder for rationale. */
export function NearbyStoresPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="w-12 h-12 rounded-full bg-ink-100 flex items-center justify-center mb-3">
        <MapPin size={22} className="text-ink-500" />
      </div>
      <p className="text-ink-700 text-sm font-medium">Nearby Stores is coming soon</p>
      <p className="text-ink-500 text-xs mt-1 max-w-xs">
        We&apos;ll show partner stores near you once this is live.
      </p>
    </div>
  );
}
