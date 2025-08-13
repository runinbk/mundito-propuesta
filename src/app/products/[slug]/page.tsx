import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCardClient } from "@/components/product-card";
import { BackButton } from "@/components/products/back-button";
import { translations } from "@/lib/translations";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const lang = "es"; // Defaulting lang on server, client component will handle switching
  const t = translations[lang];

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <BackButton>{t.backToCatalog}</BackButton>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-square relative">
                    <Image
                      src={src}
                      alt={`${product.name[lang]} image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                      data-ai-hint="toy product"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="space-y-6">
          <Badge variant="secondary">{product.brand.name}</Badge>
          <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name[lang]}</h1>
          <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground text-lg">{product.description[lang]}</p>
          
          <Separator />

          <div className="space-y-2">
            <p><span className="font-semibold">{t.productBrand}:</span> {product.brand.name}</p>
            <p><span className="font-semibold">{t.productAge}:</span> {product.age.name[lang]}</p>
          </div>
          
          <Button asChild size="lg">
            <Link href="/locations">{t.productAvailability}</Link>
          </Button>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <section className="mt-16 md:mt-24">
          <h2 className="font-headline text-2xl md:text-3xl font-bold mb-8">{t.productRelated}</h2>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {relatedProducts.map((p) => (
                <CarouselItem key={p.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ProductCardClient product={p} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      )}
    </div>
  );
}
