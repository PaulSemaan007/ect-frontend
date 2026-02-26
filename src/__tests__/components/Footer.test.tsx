import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('renders the ECT Security brand', () => {
    render(<Footer />);

    expect(screen.getByText('ECT')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);

    expect(screen.getByText('562-716-8376')).toBeInTheDocument();
    expect(screen.getByText('Rsemaan1@yahoo.com')).toBeInTheDocument();
  });

  it('renders copyright notice with current year', () => {
    render(<Footer />);

    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument();
  });
});
