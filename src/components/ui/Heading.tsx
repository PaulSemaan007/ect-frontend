import { ReactNode } from 'react';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
  neon?: boolean;
  gradient?: boolean;
}

export function Heading({ as: Tag = 'h2', children, className = '', neon = false, gradient = false }: HeadingProps) {
  const baseStyles = 'font-bold tracking-tight';

  const sizeStyles = {
    h1: 'text-4xl sm:text-5xl lg:text-6xl',
    h2: 'text-3xl sm:text-4xl lg:text-5xl',
    h3: 'text-2xl sm:text-3xl lg:text-4xl',
    h4: 'text-xl sm:text-2xl lg:text-3xl',
    h5: 'text-lg sm:text-xl lg:text-2xl',
    h6: 'text-base sm:text-lg lg:text-xl',
  };

  const neonClass = neon ? 'text-neon neon-glow-sm' : '';
  const gradientClass = gradient ? 'text-gradient-neon' : '';

  return (
    <Tag className={`${baseStyles} ${sizeStyles[Tag]} ${neonClass} ${gradientClass} ${className}`}>
      {children}
    </Tag>
  );
}
