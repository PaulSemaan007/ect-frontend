/**
 * GraphQL client utility for WordPress
 * Fetches data from WPGraphQL endpoint with ISR caching
 */

function getGraphQLEndpoint(): string {
  const endpoint = process.env.WP_GRAPHQL_ENDPOINT;
  if (!endpoint) {
    throw new Error(
      'WP_GRAPHQL_ENDPOINT environment variable is not defined. Please check your .env.local file.'
    );
  }
  return endpoint;
}

export interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
  }>;
}

/**
 * Fetch data from WordPress GraphQL API
 * @param query - GraphQL query string
 * @param variables - Optional query variables
 * @returns Parsed response data
 */
export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const endpoint = getGraphQLEndpoint();

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      // Enable ISR with 60-second revalidation
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(
        `GraphQL request failed with status ${response.status}: ${response.statusText}`
      );
    }

    const json: GraphQLResponse<T> = await response.json();

    // Check for GraphQL errors
    if (json.errors && json.errors.length > 0) {
      const errorMessages = json.errors.map((error) => error.message).join(', ');
      throw new Error(`GraphQL errors: ${errorMessages}`);
    }

    if (!json.data) {
      throw new Error('GraphQL response contains no data');
    }

    return json.data;
  } catch (error) {
    // Re-throw with more context
    if (error instanceof Error) {
      throw new Error(`Failed to fetch GraphQL data: ${error.message}`);
    }
    throw new Error('Failed to fetch GraphQL data: Unknown error');
  }
}
