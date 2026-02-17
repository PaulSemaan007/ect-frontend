import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Badge Component
 *
 * Versatile badge component for labels, status indicators, and highlights.
 * Perfect for showing "New", "Featured", "24/7", status, etc.
 *
 * @example
 * ```tsx
 * <Badge variant="new">New</Badge>
 * <Badge variant="featured">Featured</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge variant="neon" size="lg">24/7</Badge>
 * ```
 */

const badgeVariants = cva(
  // Base styles
  'inline-flex items-center justify-center font-medium transition-smooth',
  {
    variants: {
      variant: {
        // Primary variants
        default: 'bg-gray-800 text-gray-300 border border-gray-700',
        neon: 'bg-neon-10 text-neon border border-neon-primary neon-box-glow-sm',
        primary: 'bg-neon-20 text-neon-bright border border-neon-primary',

        // Status variants
        success: 'bg-green-500/10 text-green-400 border border-green-500/30',
        warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
        error: 'bg-red-500/10 text-red-400 border border-red-500/30',
        info: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',

        // Special variants
        new: 'bg-gradient-to-r from-neon-20 to-neon-10 text-neon-bright border border-neon-primary animate-pulse-neon',
        featured: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30',
        popular: 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30',

        // Solid variants
        solid: 'bg-gray-700 text-gray-100 border-0',
        'solid-neon': 'bg-neon-primary text-gray-950 border-0 font-bold',

        // Outline variants
        outline: 'bg-transparent text-gray-300 border border-gray-700',
        'outline-neon': 'bg-transparent text-neon border border-neon-primary',

        // Ghost variant
        ghost: 'bg-transparent text-gray-400 border-0',
      },
      size: {
        sm: 'text-xs px-2 py-0.5 rounded gap-1',
        md: 'text-sm px-2.5 py-1 rounded-md gap-1.5',
        lg: 'text-base px-3 py-1.5 rounded-lg gap-2',
      },
      pill: {
        true: 'rounded-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      pill: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Optional icon to display before text
   */
  icon?: React.ReactNode;
  /**
   * Optional dot indicator (colored circle)
   */
  dot?: boolean;
  /**
   * Dot color (only applies if dot=true)
   */
  dotColor?: 'neon' | 'success' | 'warning' | 'error' | 'info';
}

const dotColors = {
  neon: 'bg-neon-primary',
  success: 'bg-green-400',
  warning: 'bg-yellow-400',
  error: 'bg-red-400',
  info: 'bg-blue-400',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      size,
      pill,
      icon,
      dot,
      dotColor = 'neon',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={badgeVariants({ variant, size, pill, className })}
        {...props}
      >
        {dot && (
          <span
            className={`w-1.5 h-1.5 rounded-full ${dotColors[dotColor]}`}
            aria-hidden="true"
          />
        )}
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

/**
 * Preset badge components for common use cases
 */

export const NewBadge: React.FC<{ className?: string }> = ({ className }) => (
  <Badge variant="new" size="sm" className={className}>
    New
  </Badge>
);

export const FeaturedBadge: React.FC<{ className?: string }> = ({
  className,
}) => (
  <Badge variant="featured" size="sm" className={className}>
    Featured
  </Badge>
);

export const PopularBadge: React.FC<{ className?: string }> = ({
  className,
}) => (
  <Badge variant="popular" size="sm" className={className}>
    Popular
  </Badge>
);

export const TwentyFourSevenBadge: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ className, size = 'md' }) => (
  <Badge variant="neon" size={size} pill className={className}>
    <svg
      className="w-3 h-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    24/7
  </Badge>
);

export const LiveBadge: React.FC<{ className?: string }> = ({ className }) => (
  <Badge variant="error" size="sm" dot dotColor="error" className={className}>
    Live
  </Badge>
);

export const OnlineBadge: React.FC<{ className?: string }> = ({
  className,
}) => (
  <Badge
    variant="success"
    size="sm"
    dot
    dotColor="success"
    className={className}
  >
    Online
  </Badge>
);

export const OfflineBadge: React.FC<{ className?: string }> = ({
  className,
}) => (
  <Badge variant="default" size="sm" dot className={className}>
    Offline
  </Badge>
);
