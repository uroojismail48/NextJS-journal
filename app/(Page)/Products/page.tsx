import ProductCard from "@/app/component/ProductCard";

// app/products/page.tsx
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  stock: number;
  thumbnail: string;
  images: string[];
};

export default async function ProductsPage() {
  async function GetProducts(){
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()

    return data.products as Product[]
  }
  const products = await GetProducts()
  return (
    <div className="p-4 border-b ">
      <h1 className="text-2xl font-bold">Our Products</h1>
      <p className="text-gray-500 text-sm">Browse our full collection below</p>
     <div className="w-full bg-gray-500 flex flex-wrap items-center justify-center gap-20 mt-20 text-black font-bold">
{products.map((product: Product) => (

<ProductCard key={product.id} product={product} />
))}
     </div>
    
    </div>
  );
}