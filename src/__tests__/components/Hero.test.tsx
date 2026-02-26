import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';

vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.ComponentProps<'h1'>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.ComponentProps<'p'>) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: React.ComponentProps<'span'>) => (
      <span {...props}>{children}</span>
    ),
  },
}));

describe('Hero', () => {
  const defaultData = {
    headline: 'ECT Security — Event Control Team',
    subheadline: null,
    ctaLabel: 'Get a Quote',
    ctaUrl: '/quote',
    backgroundImage: null,
  };

  it('renders the headline', () => {
    render(<Hero data={defaultData} />);

    expect(screen.getByText('ECT')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
  });

  it('renders the primary CTA button', () => {
    render(<Hero data={defaultData} />);

    expect(screen.getByRole('link', { name: /get a quote/i })).toBeInTheDocument();
  });

  it('renders the background image with fallback', () => {
    render(<Hero data={defaultData} />);

    const img = screen.getByAltText('ECT Security');
    expect(img).toBeInTheDocument();
  });
});
