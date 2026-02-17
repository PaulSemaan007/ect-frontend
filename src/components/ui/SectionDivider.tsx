interface SectionDividerProps {
  variant?: 'line' | 'gradient' | 'glow';
  className?: string;
}

export function SectionDivider({ variant = 'glow', className = '' }: SectionDividerProps) {
  const styles = {
    line: 'h-px bg-gray-800',
    gradient: 'h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent',
    glow: 'h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent shadow-[0_0_15px_var(--color-neon-20),0_0_5px_var(--color-neon-10)]',
  };

  return <div className={`w-full ${styles[variant]} ${className}`} role="separator" aria-hidden="true" />;
}
