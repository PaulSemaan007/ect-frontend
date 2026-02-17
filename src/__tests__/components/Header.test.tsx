import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn().mockReturnValue('/'),
}));

vi.mock('next/dynamic', () => ({
  __esModule: true,
  default: () => {
    const MockMobileMenu = () => <div data-testid="mobile-menu" />;
    MockMobileMenu.displayName = 'MockMobileMenu';
    return MockMobileMenu;
  },
}));

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

  it('renders navigation links', () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Careers')).toBeInTheDocument();
  });

  it('links the brand logo to the homepage', () => {
    render(<Header />);

    const logoLink = screen.getByText('ECT').closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
