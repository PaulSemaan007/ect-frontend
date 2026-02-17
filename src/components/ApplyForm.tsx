'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';

type ApplyFormData = {
  name: string;
  email: string;
  phone: string;
  guardCard: string;
  experience: string;
  availability: string[];
  certifications: string;
  details: string;
};

export function ApplyForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyFormData>();

  async function onSubmit(data: ApplyFormData) {
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to submit. Please try again.');
      }

      router.push('/thank-you');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  const inputStyles =
    'w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-neon focus:shadow-[0_0_0_1px_var(--color-neon-primary),0_0_15px_var(--color-neon-10)] transition-all duration-200';
  const labelStyles = 'block text-sm font-medium text-gray-300 mb-2';
  const errorStyles = 'text-red-400 text-sm mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelStyles}>
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            className={inputStyles}
            placeholder="John Smith"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelStyles}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={inputStyles}
            placeholder="john@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
            })}
          />
          {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            className={inputStyles}
            placeholder="(555) 123-4567"
            {...register('phone', { required: 'Phone number is required' })}
          />
          {errors.phone && <p className={errorStyles}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="guardCard" className={labelStyles}>
            Guard Card Number
          </label>
          <input
            id="guardCard"
            type="text"
            className={inputStyles}
            placeholder="If applicable"
            {...register('guardCard')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="experience" className={labelStyles}>
          Security Experience *
        </label>
        <select
          id="experience"
          className={inputStyles}
          {...register('experience', { required: 'Please select your experience level' })}
        >
          <option value="">Select experience level...</option>
          <option value="none">No prior experience</option>
          <option value="1-2">1-2 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5-plus">5+ years</option>
        </select>
        {errors.experience && <p className={errorStyles}>{errors.experience.message}</p>}
      </div>

      <div>
        <label className={labelStyles}>Availability *</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {['Weekday Days', 'Weekday Nights', 'Weekends', 'Holidays', 'On-Call', 'Flexible'].map(
            (option) => (
              <label
                key={option}
                className="flex items-center gap-2 bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 cursor-pointer hover:border-gray-500 transition-colors has-[:checked]:border-neon has-[:checked]:bg-neon/5"
              >
                <input
                  type="checkbox"
                  value={option}
                  className="accent-[#39FF14]"
                  {...register('availability', { required: 'Select at least one' })}
                />
                <span className="text-sm text-gray-300">{option}</span>
              </label>
            ),
          )}
        </div>
        {errors.availability && <p className={errorStyles}>{errors.availability.message}</p>}
      </div>

      <div>
        <label htmlFor="certifications" className={labelStyles}>
          Certifications
        </label>
        <input
          id="certifications"
          type="text"
          className={inputStyles}
          placeholder="CPR, First Aid, etc."
          {...register('certifications')}
        />
      </div>

      <div>
        <label htmlFor="details" className={labelStyles}>
          Tell Us About Yourself *
        </label>
        <textarea
          id="details"
          rows={5}
          className={inputStyles}
          placeholder="Relevant experience, why you want to work with ECT Security, and anything else we should know..."
          {...register('details', { required: 'Please tell us a bit about yourself' })}
        />
        {errors.details && <p className={errorStyles}>{errors.details.message}</p>}
      </div>

      {error && (
        <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 text-red-300">
          {error}
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? <><span className="spinner mr-2" /> Submitting...</> : 'Submit Application'}
      </Button>
    </form>
  );
}
