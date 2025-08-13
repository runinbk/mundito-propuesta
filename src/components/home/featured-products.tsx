import { products } from "@/lib/mock-data";
import { ProductCardClient } from "@/components/product-card";

interface FeaturedProductsProps {
  title: string;
}

export function FeaturedProducts({ title }: FeaturedProductsProps) {
  const featured = products.slice(0, 6);

  return (
    <section className="container py-12 md:py-20">
      <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCardClient key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
