"use client";

import Link from "next/link";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { FeaturedProducts } from "@/components/home/featured-products";
import { BrandCarousel } from "@/components/home/brand-carousel";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/context/i18n";

export default function HomePage() {
  const { t } = useI18n();
  return (
    <>
      <HeroCarousel />
      <FeaturedProducts title={t('featuredProductsTitle')} />
      <section className="bg-background py-12 md:py-20">
        <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-4">{t('introTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('introText')}</p>
            <Button asChild size="lg">
                <Link href="/about">{t('introButton')}</Link>
            </Button>
        </div>
      </section>
      <BrandCarousel title={t('brandsTitle')} />
    </>
  );
}
