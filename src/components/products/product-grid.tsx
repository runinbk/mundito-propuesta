"use client";

import { useState, useMemo, useEffect } from "react";
import { useI18n } from "@/context/i18n";
import { products, categories, ages, brands } from "@/lib/mock-data";
import { ProductCardClient } from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 6;

export function ProductGrid() {
  const { t, lang } = useI18n();

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [brandFilter, setBrandFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => p.name[lang].toLowerCase().includes(searchQuery.toLowerCase()))
      .filter(p => categoryFilter === 'all' || p.category.id === categoryFilter)
      .filter(p => ageFilter === 'all' || p.age.id === ageFilter)
      .filter(p => brandFilter === 'all' || p.brand.id === brandFilter);
  }, [searchQuery, categoryFilter, ageFilter, brandFilter, lang]);

  const loadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };
  
  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchQuery, categoryFilter, ageFilter, brandFilter]);

  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Input
          placeholder={t('searchPlaceholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="md:col-span-4"
        />
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger><SelectValue placeholder={t('filterByCategory')} /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('allCategories')}</SelectItem>
            {categories.map(c => <SelectItem key={c.id} value={c.id}>{c.name[lang]}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={ageFilter} onValueChange={setAgeFilter}>
          <SelectTrigger><SelectValue placeholder={t('filterByAge')} /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('allAges')}</SelectItem>
            {ages.map(a => <SelectItem key={a.id} value={a.id}>{a.name[lang]}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={brandFilter} onValueChange={setBrandFilter}>
          <SelectTrigger><SelectValue placeholder={t('filterByBrand')} /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('allBrands')}</SelectItem>
            {brands.map(b => <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      {filteredProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, visibleCount).map(product => (
              <ProductCardClient key={product.id} product={product} />
            ))}
          </div>
          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-12">
              <Button size="lg" onClick={loadMore}>{t('loadMore')}</Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20">
            <p className="text-muted-foreground text-xl">{t('noProductsFound')}</p>
        </div>
      )}
    </div>
  );
}
