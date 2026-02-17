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
    headline: 'Professional Event Security',
    subheadline: 'Trusted across California and Nevada',
    ctaLabel: 'Get a Quote',
    ctaUrl: '/quote',
    backgroundImage: {
      node: {
        sourceUrl: '/images/hero-festival.png',
        altText: 'ECT Security at a festival',
      },
    },
  };

  it('renders the headline', () => {
    render(<Hero data={defaultData} />);

    expect(screen.getByText('Professional')).toBeInTheDocument();
    expect(screen.getByText('Event')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
  });

  it('renders the subheadline', () => {
    render(<Hero data={defaultData} />);

    expect(screen.getByText('Trusted across California and Nevada')).toBeInTheDocument();
  });

  it('renders the primary CTA button', () => {
    render(<Hero data={defaultData} />);

    expect(screen.getByRole('link', { name: /get a quote/i })).toBeInTheDocument();
  });

  it('renders the secondary CTA button', () => {
    render(<Hero data={defaultData} />);

    expect(screen.getByRole('link', { name: /apply now/i })).toBeInTheDocument();
  });

  it('renders trust indicators', () => {
    render(<Hero data={defaultData} />);

    expect(screen.getByText('CA & NV')).toBeInTheDocument();
    expect(screen.getByText('Licensed')).toBeInTheDocument();
    expect(screen.getByText('Trained')).toBeInTheDocument();
    expect(screen.getByText('Guards')).toBeInTheDocument();
  });

  it('renders the background image', () => {
    render(<Hero data={defaultData} />);

    const img = screen.getByAltText('ECT Security at a festival');
    expect(img).toBeInTheDocument();
  });
});
