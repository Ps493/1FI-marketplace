import { AlertTriangle } from 'lucide-react';

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
  compact?: boolean;
}

export function ErrorState({ message, onRetry, compact }: ErrorStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        compact ? 'py-6' : 'py-16'
      } px-6`}
    >
      <div className="w-11 h-11 rounded-full bg-danger/10 flex items-center justify-center mb-3">
        <AlertTriangle size={20} className="text-danger" />
      </div>
      <p className="text-ink-700 text-sm font-medium mb-1">Something didn&apos;t load</p>
      <p className="text-ink-500 text-xs mb-4 max-w-xs">{message}</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 rounded-full bg-brand-500 text-white text-sm font-medium active:scale-95 transition"
      >
        Try again
      </button>
    </div>
  );
}
