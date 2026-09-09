// app/products/@left/page.tsx
export default function Left() {
  const categories = ["All", "Electronics", "Clothing", "Home & Kitchen", "Books"];

  return (
    <div className="w-1/4 border-r p-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Category</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button className="text-sm text-gray-600 hover:text-black">
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <input type="range" min="0" max="1000" className="w-full" />
      </div>
    </div>
  );
}