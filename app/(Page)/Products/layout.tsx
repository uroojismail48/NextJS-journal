// app/products/layout.tsx
export default function ProductsLayout({
  children,
  left,
  right,
}: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="flex w-full">
        {left}
        {right}
      </div>
    </div>
  );
}