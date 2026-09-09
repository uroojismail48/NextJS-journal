// app/products/@right/page.tsx

async function getProducts() {
  // 2 second ka fake delay - taake loading dikh sake
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    { id: 1, name: "Wireless Headphones", price: 59.99 },
    { id: 2, name: "Smart Watch", price: 129.99 },
    { id: 3, name: "Running Shoes", price: 79.99 },
    { id: 4, name: "Backpack", price: 45.99 },
    { id: 5, name: "Coffee Maker", price: 99.99 },
    { id: 6, name: "Desk Lamp", price: 25.99 },
  ];
}

export default async function Right() {
  const products = await getProducts(); // ab ye "await" hai, isliye component async hona zaroori

  return (
    <div className="w-3/4 p-4">
      <h2 className="text-lg font-semibold mb-4">Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="w-full h-32 bg-gray-100 rounded mb-3" />
            <h3 className="font-medium text-sm">{product.name}</h3>
            <p className="text-gray-600 text-sm">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}