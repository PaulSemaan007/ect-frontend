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

    expect(screen.getByText('(714) 474-4788')).toBeInTheDocument();
    expect(screen.getByText('info@ectsecurity.com')).toBeInTheDocument();
  });

  it('renders service links', () => {
    render(<Footer />);

    expect(screen.getByText('Events & Festivals')).toBeInTheDocument();
    expect(screen.getByText('Venues')).toBeInTheDocument();
    expect(screen.getByText('Corporate')).toBeInTheDocument();
    expect(screen.getByText('Parking Assistance')).toBeInTheDocument();
  });

  it('renders service areas', () => {
    render(<Footer />);

    expect(screen.getByText('California')).toBeInTheDocument();
    expect(screen.getByText('Nevada')).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);

    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });

  it('renders social media links with proper aria labels', () => {
    render(<Footer />);

    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('TikTok')).toBeInTheDocument();
  });

  it('renders copyright notice with current year', () => {
    render(<Footer />);

    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument();
  });
});
