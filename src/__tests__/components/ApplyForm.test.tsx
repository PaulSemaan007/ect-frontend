import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApplyForm } from '@/components/ApplyForm';

// Mock next/navigation
const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}));

describe('ApplyForm', () => {
  beforeEach(() => {
    mockPush.mockClear();
    vi.restoreAllMocks();
  });

  it('renders all required fields', () => {
    render(<ApplyForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/security experience/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tell us about yourself/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<ApplyForm />);

    await user.click(screen.getByText('Submit Application'));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Phone number is required')).toBeInTheDocument();
    expect(screen.getByText('Please select your experience level')).toBeInTheDocument();
    expect(screen.getByText('Please tell us a bit about yourself')).toBeInTheDocument();
  });

  it('submits successfully with valid data', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockResolvedValue({ ok: true });

    render(<ApplyForm />);

    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/phone number/i), '5559876543');
    await user.selectOptions(screen.getByLabelText(/security experience/i), '1-2');
    await user.click(screen.getByText('Weekends'));
    await user.type(
      screen.getByLabelText(/tell us about yourself/i),
      'Experienced guard looking for work',
    );

    await user.click(screen.getByText('Submit Application'));

    expect(await screen.findByText(/submitting/i)).toBeInTheDocument();

    await vi.waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/thank-you');
    });
  });

  it('shows error message on submission failure', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockResolvedValue({ ok: false });

    render(<ApplyForm />);

    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/phone number/i), '5559876543');
    await user.selectOptions(screen.getByLabelText(/security experience/i), '1-2');
    await user.click(screen.getByText('Flexible'));
    await user.type(screen.getByLabelText(/tell us about yourself/i), 'Looking for work');

    await user.click(screen.getByText('Submit Application'));

    expect(await screen.findByText(/failed to submit/i)).toBeInTheDocument();
  });
});
