export default function ServiceLoading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero skeleton */}
      <div className="h-[400px] lg:h-[500px] bg-gray-900" />
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="h-8 w-48 bg-gray-800 rounded" />
            <div className="space-y-3">
              <div className="h-6 bg-gray-800 rounded w-full" />
              <div className="h-6 bg-gray-800 rounded w-5/6" />
              <div className="h-6 bg-gray-800 rounded w-full" />
              <div className="h-6 bg-gray-800 rounded w-4/6" />
              <div className="h-6 bg-gray-800 rounded w-full" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-8 w-48 bg-gray-800 rounded" />
            <div className="h-20 bg-gray-800 rounded w-full" />
            <div className="h-20 bg-gray-800 rounded w-full" />
            <div className="h-20 bg-gray-800 rounded w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
