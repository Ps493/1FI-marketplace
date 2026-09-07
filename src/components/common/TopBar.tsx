import { ChevronLeft } from 'lucide-react';

interface TopBarProps {
  title: string;
  onBack?: () => void;
  trailing?: React.ReactNode;
}

export function TopBar({ title, onBack, trailing }: TopBarProps) {
  return (
    <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur border-b border-ink-100">
      <div className="flex items-center gap-2 px-4 h-14">
        {onBack && (
          <button
            onClick={onBack}
            aria-label="Go back"
            className="-ml-2 w-9 h-9 flex items-center justify-center rounded-full active:bg-ink-100"
          >
            <ChevronLeft size={22} className="text-ink-900" />
          </button>
        )}
        <h1 className="text-[17px] font-semibold text-ink-900 truncate">{title}</h1>
        <div className="ml-auto">{trailing}</div>
      </div>
    </div>
  );
}
