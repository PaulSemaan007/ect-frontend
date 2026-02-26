import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuoteForm } from '@/components/QuoteForm';

// Mock next/navigation
const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}));

describe('QuoteForm', () => {
  beforeEach(() => {
    mockPush.mockClear();
    vi.restoreAllMocks();
  });

  it('renders all required fields', () => {
    render(<QuoteForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/additional details/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);

    await user.click(screen.getByText('Request Quote'));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Phone number is required')).toBeInTheDocument();
    expect(screen.getByText('Please select a service type')).toBeInTheDocument();
    expect(screen.getByText('Please provide some details about your needs')).toBeInTheDocument();
  });

  it('submits successfully with valid data', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockResolvedValue({ ok: true });

    render(<QuoteForm />);

    await user.type(screen.getByLabelText(/full name/i), 'John Smith');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone number/i), '5551234567');
    await user.selectOptions(screen.getByLabelText(/service type/i), 'unarmed-guard');
    await user.type(screen.getByLabelText(/additional details/i), 'Need security for my site');

    await user.click(screen.getByText('Request Quote'));

    expect(await screen.findByText(/submitting/i)).toBeInTheDocument();

    await vi.waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/thank-you');
    });
  });

  it('shows error message on submission failure', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockResolvedValue({ ok: false });

    render(<QuoteForm />);

    await user.type(screen.getByLabelText(/full name/i), 'John Smith');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone number/i), '5551234567');
    await user.selectOptions(screen.getByLabelText(/service type/i), 'unarmed-guard');
    await user.type(screen.getByLabelText(/additional details/i), 'Need security');

    await user.click(screen.getByText('Request Quote'));

    expect(await screen.findByText(/failed to submit/i)).toBeInTheDocument();
  });
});
