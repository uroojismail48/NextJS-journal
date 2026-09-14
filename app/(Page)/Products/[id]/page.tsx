import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-[#6E6D68]">Product not found.</p>
      </div>
    );
  }

  const data = await res.json();
  const discountedPrice =
    data.price - (data.price * data.discountPercentage) / 100;

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: Image */}
        <div className="md:sticky md:top-16 md:self-start">
          <div className="relative aspect-square w-full bg-[#F1EFE8]">
            <Image
              src={data.thumbnail}
              alt={data.title}
              fill
              className="object-contain p-8"
            />
          </div>

          {/* Thumbnail strip */}
          {data.images?.length > 1 && (
            <div className="mt-4 flex gap-3">
              {data.images.slice(0, 4).map((img: string, i: number) => (
                <div
                  key={i}
                  className="relative h-20 w-20 flex-shrink-0 border border-[#E2E0D8] bg-[#F1EFE8]"
                >
                  <Image
                    src={img}
                    alt={`${data.title} ${i + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div className="flex flex-col">
          <p className="text-sm capitalize text-[#6E6D68]">
            {data.category} · {data.brand}
          </p>

          <h1 className="mt-2 font-serif text-4xl leading-tight text-[#131315] md:text-5xl">
            {data.title}
          </h1>

          <div className="mt-4 flex items-baseline gap-3">
            <p className="text-lg text-[#131315]">
              ${discountedPrice.toFixed(2)}
            </p>
            {data.discountPercentage > 0 && (
              <p className="text-sm text-[#9A9890] line-through">
                ${data.price.toFixed(2)}
              </p>
            )}
          </div>

          <div className="mt-3 h-px w-16 bg-[#131315]" />

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#4A4A46]">
            {data.description}
          </p>

          {/* Rating + stock */}
          <div className="mt-6 flex items-center gap-4 text-sm">
            <span className="text-[#131315]">★ {data.rating}</span>
            <span className="text-[#6E6D68]">
              {data.stock > 0 ? `${data.stock} in stock` : "Out of stock"}
            </span>
          </div>

          {/* Add to cart */}
          <button className="mt-8 w-full bg-[#131315] py-3.5 text-sm text-white transition-opacity hover:opacity-90 md:w-auto md:px-10">
            Add to cart
          </button>

          {/* Details list */}
          <div className="mt-12 border-t border-[#E2E0D8]">
            <div className="flex justify-between border-b border-[#E2E0D8] py-3 text-sm">
              <span className="text-[#6E6D68]">Brand</span>
              <span className="text-[#131315]">{data.brand}</span>
            </div>
            <div className="flex justify-between border-b border-[#E2E0D8] py-3 text-sm">
              <span className="text-[#6E6D68]">Category</span>
              <span className="capitalize text-[#131315]">
                {data.category}
              </span>
            </div>
            <div className="flex justify-between border-b border-[#E2E0D8] py-3 text-sm">
              <span className="text-[#6E6D68]">Warranty</span>
              <span className="text-[#131315]">
                {data.warrantyInformation || "N/A"}
              </span>
            </div>
            <div className="flex justify-between border-b border-[#E2E0D8] py-3 text-sm">
              <span className="text-[#6E6D68]">Shipping</span>
              <span className="text-[#131315]">
                {data.shippingInformation || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}