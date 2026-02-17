import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatsCounter } from '@/components/StatsCounter';

describe('StatsCounter', () => {
  it('renders all 4 stat labels', () => {
    render(<StatsCounter />);

    expect(screen.getByText('Events Secured')).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
    expect(screen.getByText('States Licensed')).toBeInTheDocument();
    expect(screen.getByText('Licensed Guards')).toBeInTheDocument();
  });

  it('renders initial counter values (starts at 0 before animation)', () => {
    render(<StatsCounter />);

    // Counters start at 0 before the animation triggers
    const zeros = screen.getAllByText(/^0/);
    expect(zeros.length).toBeGreaterThanOrEqual(1);
  });
});
