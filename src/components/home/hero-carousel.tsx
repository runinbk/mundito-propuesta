"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { heroImages } from "@/lib/mock-data";
import { useI18n } from "@/context/i18n";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const arrowClasses = "absolute top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 text-white";

export function HeroCarousel() {
  const plugin = useRef(Autoplay({ delay: 7000, stopOnInteraction: true }));
  const { t } = useI18n();

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
            loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="h-full border-0 rounded-none">
                <CardContent className="relative flex h-full w-full items-center justify-center p-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover brightness-50"
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                    data-ai-hint={image['data-ai-hint']}
                  />
                  <div className="relative z-10 text-center text-white p-4">
                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg text-white">
                      {t('heroTitleV2')}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md text-white">
                      {t('heroSubtitleV2')}
                    </p>
                    <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href="/products">{t('heroButtonV2')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={cn(arrowClasses, "left-4")} />
        <CarouselNext className={cn(arrowClasses, "right-4")} />
      </Carousel>
    </div>
  );
}
