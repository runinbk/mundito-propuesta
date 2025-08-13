"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import type { Product } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/context/i18n";
import type { Language } from "@/lib/translations";

interface ProductCardProps {
  product: Product;
  lang: Language;
}

export function ProductCard({ product, lang }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="aspect-square overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name[lang]}
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="toy product"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">{product.brand.name}</Badge>
          <CardTitle className="font-headline text-lg leading-tight">
            {product.name[lang]}
          </CardTitle>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export function ProductCardClient(props: { product: Product }) {
  const { lang } = useI18n();
  // useMemo ensures the component only re-renders when product or lang changes.
  return useMemo(() => <ProductCard {...props} lang={lang} />, [props, lang]);
}
