import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock resend with a class (arrow functions can't be constructors)
vi.mock('resend', () => ({
  Resend: class {
    emails = {
      send: vi.fn().mockResolvedValue({ id: 'test-id' }),
    };
  },
}));

// Import after mock to get the mocked version
const { POST } = await import('@/app/api/quote/route');

describe('POST /api/quote', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  const validBody = {
    name: 'John Smith',
    email: 'john@example.com',
    phone: '5551234567',
    serviceType: 'unarmed-guard',
    details: 'Need security for my site',
  };

  it('returns 400 when required fields are missing', async () => {
    const request = new Request('http://localhost/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);

    const data = await response.json();
    expect(data.error).toBe('Missing required fields');
  });

  it('returns 500 when RESEND_API_KEY is not configured', async () => {
    vi.stubEnv('RESEND_API_KEY', '');

    const request = new Request('http://localhost/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validBody),
    });

    const response = await POST(request);
    expect(response.status).toBe(500);

    const data = await response.json();
    expect(data.error).toBe('Email service not configured');
  });

  it('returns 200 on successful submission', async () => {
    vi.stubEnv('RESEND_API_KEY', 'test-key');

    const request = new Request('http://localhost/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validBody),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.success).toBe(true);
  });

  it('returns 400 when email is missing', async () => {
    const request = new Request('http://localhost/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validBody, email: '' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('returns 400 when serviceType is missing', async () => {
    const request = new Request('http://localhost/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validBody, serviceType: '' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });
});
