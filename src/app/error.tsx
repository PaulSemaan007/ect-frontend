'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-neon/50 flex items-center justify-center">
          <span className="text-neon text-2xl">!</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Something went wrong</h2>
        <p className="text-gray-400 mb-6">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-neon text-gray-950 font-semibold rounded-lg hover:bg-neon/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
