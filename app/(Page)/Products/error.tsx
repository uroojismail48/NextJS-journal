// app/products/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-20 px-4">
      <div className="text-red-500 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h2 className="text-xl font-semibold mb-2">Kuch ghalat ho gaya!</h2>
      <p className="text-gray-500 text-sm mb-6 text-center max-w-sm">
        {error.message || "Products load nahi ho paye. Please try again."}
      </p>

      <button
        onClick={() => reset()}
        className="bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-gray-800 transition"
      >
        Try Again
      </button>
    </div>
  );
}