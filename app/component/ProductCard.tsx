type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  stock: number;
  thumbnail: string;
};

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group
    
    w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-zinc-700">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-zinc-900">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium capitalize backdrop-blur">
          {product.category}
        </span>

        {/* Rating */}
        <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs backdrop-blur">
          ⭐ {product.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <h2 className="truncate text-lg font-semibold">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
          {product.description}
        </p>

        {/* Price + Stock */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold">
            ${product.price}
          </span>

          <span className="text-sm text-zinc-400">
            {product.stock} left
          </span>
        </div>

        {/* Button */}
        <button className="mt-5 w-full rounded-xl bg-white py-3 font-medium text-black transition hover:bg-zinc-200">
          View Product
        </button>

      </div>
    </div>
  );
}

export default ProductCard;