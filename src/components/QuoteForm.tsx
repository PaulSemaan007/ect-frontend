'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';

type QuoteFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  estimatedAttendees: string;
  details: string;
};

export function QuoteForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>();

  async function onSubmit(data: QuoteFormData) {
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/quote', {
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
          <label htmlFor="company" className={labelStyles}>
            Company / Organization
          </label>
          <input
            id="company"
            type="text"
            className={inputStyles}
            placeholder="Company name"
            {...register('company')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className={labelStyles}>
          Service Type *
        </label>
        <select
          id="serviceType"
          className={inputStyles}
          {...register('serviceType', { required: 'Please select a service type' })}
        >
          <option value="">Select a service...</option>
          <option value="events">Events & Festivals</option>
          <option value="venues">Venue Security</option>
          <option value="corporate">Corporate Security</option>
          <option value="parking">Parking Assistance</option>
          <option value="multiple">Multiple Services</option>
          <option value="other">Other</option>
        </select>
        {errors.serviceType && <p className={errorStyles}>{errors.serviceType.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventName" className={labelStyles}>
            Event Name
          </label>
          <input
            id="eventName"
            type="text"
            className={inputStyles}
            placeholder="Event name"
            {...register('eventName')}
          />
        </div>

        <div>
          <label htmlFor="eventDate" className={labelStyles}>
            Event Date
          </label>
          <input id="eventDate" type="date" className={inputStyles} {...register('eventDate')} />
        </div>

        <div>
          <label htmlFor="eventLocation" className={labelStyles}>
            Event Location
          </label>
          <input
            id="eventLocation"
            type="text"
            className={inputStyles}
            placeholder="City, State or venue name"
            {...register('eventLocation')}
          />
        </div>

        <div>
          <label htmlFor="estimatedAttendees" className={labelStyles}>
            Estimated Attendees
          </label>
          <select
            id="estimatedAttendees"
            className={inputStyles}
            {...register('estimatedAttendees')}
          >
            <option value="">Select range...</option>
            <option value="under-100">Under 100</option>
            <option value="100-500">100 - 500</option>
            <option value="500-1000">500 - 1,000</option>
            <option value="1000-5000">1,000 - 5,000</option>
            <option value="5000-plus">5,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="details" className={labelStyles}>
          Additional Details *
        </label>
        <textarea
          id="details"
          rows={5}
          className={inputStyles}
          placeholder="Tell us about your security needs, any special requirements, or questions you have..."
          {...register('details', { required: 'Please provide some details about your needs' })}
        />
        {errors.details && <p className={errorStyles}>{errors.details.message}</p>}
      </div>

      {error && (
        <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 text-red-300">
          {error}
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? <><span className="spinner mr-2" /> Submitting...</> : 'Request Quote'}
      </Button>
    </form>
  );
}
