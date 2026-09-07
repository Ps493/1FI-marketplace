interface BadgeProps {
  children: React.ReactNode;
  tone?: 'brand' | 'success' | 'neutral';
}

const toneClasses: Record<NonNullable<BadgeProps['tone']>, string> = {
  brand: 'bg-brand-500/10 text-brand-600',
  success: 'bg-success/10 text-success',
  neutral: 'bg-ink-100 text-ink-700',
};

export function Badge({ children, tone = 'brand' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}
