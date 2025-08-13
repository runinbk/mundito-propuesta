"use client";

import Image from "next/image";
import { brands } from "@/lib/mock-data";

interface BrandCarouselProps {
    title: string;
}

export function BrandCarousel({ title }: BrandCarouselProps) {
  const extendedBrands = [...brands, ...brands];

  return (
    <section className="bg-secondary dark:bg-black/20 py-12 md:py-16">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
          {title}
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="brand-carousel animate-scroll">
            {extendedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={150}
                  height={50}
                  className="object-contain"
                  data-ai-hint="brand logo"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary dark:from-black/20 via-transparent to-secondary dark:to-black/20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
