import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';

describe('Header', () => {
  it('renders the ECT Security brand', () => {
    render(<Header />);

    expect(screen.getByText('ECT')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
  });

  it('renders the Get a Quote CTA button', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: /get a quote/i })).toBeInTheDocument();
  });

  it('links the brand logo to the homepage', () => {
    render(<Header />);

    const logoLink = screen.getByText('ECT').closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
