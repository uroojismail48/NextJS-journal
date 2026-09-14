import ProductCard from "@/app/component/ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  rating: number;
  stock: number;
};


export default async function ProductsPage() {
  async function GetProducts(): Promise<Product[]> {
    const res = await fetch("https://dummyjson.com/products")
    const data: { products: Product[] } = await res.json()

    return data.products 
  }
  const products = await GetProducts()
  return (
    <div className="p-4 border-b ">
      <h1 className="text-2xl font-bold">Our Products</h1>
      <p className="text-gray-500 text-sm">Browse our full collection below</p>
     <div className="w-full bg-gray-500 flex flex-wrap items-center justify-center gap-20 mt-20 text-black font-bold">
{products.map((p: Product) => (

<ProductCard key={p.id} product={p} />
))}
     </div>
    
    </div>
  );
}