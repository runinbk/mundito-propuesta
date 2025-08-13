"use client";

import { useState, useMemo } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { stores } from "@/lib/mock-data";
import type { Store } from "@/types";
import { useI18n } from "@/context/i18n";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const boliviaCenter = { lat: -17.0, lng: -65.0 };

function MissingApiKey() {
  return (
    <div className="flex h-full items-center justify-center bg-background">
      <div className="text-center">
        <h3 className="font-headline text-lg font-semibold">Missing Google Maps API Key</h3>
        <p className="text-muted-foreground">
          Please add a `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to your environment to see the map.
        </p>
      </div>
    </div>
  )
}

export function StoreMap() {
  const { t } = useI18n();
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedStore, setSelectedStore] = useState<Store | null>(stores[0]);

  const cities = useMemo(() => ["all", ...Array.from(new Set(stores.map(s => s.city)))], []);
  
  const filteredStores = useMemo(() => {
    return stores.filter(store => selectedCity === 'all' || store.city === selectedCity);
  }, [selectedCity]);
  
  const handleMarkerClick = (store: Store) => {
    setSelectedStore(store);
  };
  
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID || "DEMO_MAP_ID";
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="h-[calc(100vh-4rem)] w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <div className="col-span-1 flex flex-col p-4 bg-background border-r">
        <h2 className="font-headline text-2xl font-bold mb-4">{t('locationsTitle')}</h2>
        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger className="mb-4">
            <SelectValue placeholder={t('filterByCity')} />
          </SelectTrigger>
          <SelectContent>
            {cities.map(city => (
              <SelectItem key={city} value={city}>
                {city === 'all' ? t('allCities') : city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ScrollArea className="flex-1">
          <div className="space-y-2 pr-2">
            {filteredStores.map(store => (
              <Card 
                key={store.id} 
                className={`cursor-pointer transition-colors ${selectedStore?.id === store.id ? 'bg-secondary' : 'hover:bg-muted/50'}`}
                onClick={() => setSelectedStore(store)}
              >
                <CardHeader className="p-3">
                  <CardTitle className="text-base">{store.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-rows-3">
        <div className="row-span-2 relative">
           {apiKey ? (
            <APIProvider apiKey={apiKey}>
                <Map
                    defaultCenter={boliviaCenter}
                    defaultZoom={5}
                    center={selectedStore?.position ?? boliviaCenter}
                    zoom={selectedStore ? 14 : 5}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    mapId={mapId}
                >
                {filteredStores.map(store => (
                    <AdvancedMarker 
                        key={store.id} 
                        position={store.position}
                        onClick={() => handleMarkerClick(store)}
                    />
                ))}
                </Map>
            </APIProvider>
           ) : <MissingApiKey />}
        </div>
        <div className="row-span-1 bg-background border-t">
          {selectedStore && (
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                <div className="md:col-span-1 relative h-32 md:h-full">
                    <Image
                        src={selectedStore.image}
                        alt={`Facade of ${selectedStore.name}`}
                        fill
                        className="object-cover rounded-md"
                        data-ai-hint="storefront facade"
                    />
                </div>
                <div className="md:col-span-2">
                    <h3 className="font-headline text-xl font-bold">{selectedStore.name}</h3>
                    <p className="text-muted-foreground">{selectedStore.address}</p>
                    <p className="mt-2"><span className="font-semibold">{t('storeHours')}:</span> {selectedStore.hours}</p>
                    <p><span className="font-semibold">{t('storePhone')}:</span> {selectedStore.phone}</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
