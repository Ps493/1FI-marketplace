import { ShopPage } from './components/shop/ShopPage';

/**
 * The phone-frame wrapper below exists only to preview a mobile screen
 * comfortably on desktop while developing/reviewing. ShopPage itself is
 * a normal responsive component and can be dropped into any container
 * (e.g. a React Navigation stack) without the frame.
 */
export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-canvas py-6">
      <div className="w-full max-w-[420px] h-[860px] bg-surface rounded-[2rem] shadow-xl overflow-hidden relative border border-ink-100">
        <ShopPage />
      </div>
    </div>
  );
}
