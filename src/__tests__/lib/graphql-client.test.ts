import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchGraphQL } from '@/lib/graphql-client';

describe('fetchGraphQL', () => {
  beforeEach(() => {
    vi.stubEnv('WP_GRAPHQL_ENDPOINT', 'https://test.example.com/graphql');
    vi.restoreAllMocks();
  });

  it('returns data on successful response', async () => {
    const mockData = { page: { title: 'Test Page' } };

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ data: mockData }),
      }),
    );

    const result = await fetchGraphQL('{ page { title } }');
    expect(result).toEqual(mockData);
  });

  it('throws on HTTP error', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      }),
    );

    await expect(fetchGraphQL('{ page { title } }')).rejects.toThrow(
      'Failed to fetch GraphQL data',
    );
  });

  it('throws on GraphQL errors in response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            data: null,
            errors: [{ message: 'Field not found' }],
          }),
      }),
    );

    await expect(fetchGraphQL('{ invalid }')).rejects.toThrow('GraphQL errors');
  });

  it('throws when endpoint env var is missing', async () => {
    vi.stubEnv('WP_GRAPHQL_ENDPOINT', '');

    await expect(fetchGraphQL('{ page { title } }')).rejects.toThrow('WP_GRAPHQL_ENDPOINT');
  });

  it('throws on network failure', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')));

    await expect(fetchGraphQL('{ page { title } }')).rejects.toThrow(
      'Failed to fetch GraphQL data',
    );
  });
});
