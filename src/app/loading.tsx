export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span
          className="spinner"
          style={{ width: '2.5rem', height: '2.5rem', borderWidth: '3px' }}
        />
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}
