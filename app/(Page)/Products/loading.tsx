// app/products/loading.tsx
export default function Loading() {
  return (
    <div className="flex w-full">
      {/* Left skeleton */}
      <div className="w-1/4 border-r p-4">
        <div className="h-6 w-24 bg-gray-200 rounded mb-4 animate-pulse" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 w-32 bg-gray-100 rounded animate-pulse" />
          ))}
        </div>
      </div>

      {/* Right skeleton */}
      <div className="w-3/4 p-4">
        <div className="h-6 w-32 bg-gray-200 rounded mb-4 animate-pulse" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="w-full h-32 bg-gray-200 rounded mb-3 animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-2 animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-100 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}