import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/mock-data";
import { ProductCardClient } from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface FeaturedProductsProps {
  title: string;
  viewAllText: string;
}

export function FeaturedProducts({ title, viewAllText }: FeaturedProductsProps) {
  const featured = products.slice(0, 8);

  return (
    <section className="container py-12 md:py-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-headline text-3xl font-bold md:text-4xl text-blue-900 dark:text-white">
          {title}
        </h2>
        <Button asChild variant="link" className="text-foreground">
          <Link href="/products">
            {viewAllText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {featured.map((product) => (
            <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                 <ProductCardClient product={product} />
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </section>
  );
}
