import { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  withContainer?: boolean;
}

export function Section({
  children,
  className = '',
  containerSize = 'xl',
  withContainer = true,
}: SectionProps) {
  const content = withContainer ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      {content}
    </section>
  );
}
