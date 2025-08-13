import type { Product, Store } from "@/types";

export const brands = [
  { id: "lego", name: "LEGO", logo: "https://placehold.co/150x50.png?text=LEGO" },
  { id: "mattel", name: "Mattel", logo: "https://placehold.co/150x50.png?text=Mattel" },
  { id: "hasbro", name: "Hasbro", logo: "https://placehold.co/150x50.png?text=Hasbro" },
  { id: "barbie", name: "Barbie", logo: "https://placehold.co/150x50.png?text=Barbie" },
  { id: "hot-wheels", name: "Hot Wheels", logo: "https://placehold.co/150x50.png?text=Hot+Wheels" },
  { id: "nerf", name: "Nerf", logo: "https://placehold.co/150x50.png?text=Nerf" },
  { id: "playdoh", name: "Play-Doh", logo: "https://placehold.co/150x50.png?text=Play-Doh" },
];

export const categories = [
  { id: "action-figures", name: { en: "Action Figures", es: "Figuras de Acción" } },
  { id: "dolls", name: { en: "Dolls", es: "Muñecas" } },
  { id: "building-blocks", name: { en: "Building Blocks", es: "Bloques de Construcción" } },
  { id: "board-games", name: { en: "Board Games", es: "Juegos de Mesa" } },
  { id: "vehicles", name: { en: "Vehicles", es: "Vehículos" } },
];

export const ages = [
    { id: "0-2", name: { en: "0-2 years", es: "0-2 años" } },
    { id: "3-5", name: { en: "3-5 years", es: "3-5 años" } },
    { id: "6-8", name: { en: "6-8 years", es: "6-8 años" } },
    { id: "9-12", name: { en: "9-12 years", es: "9-12 años" } },
    { id: "13-plus", name: { en: "13+ years", es: "13+ años" } },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "lego-star-wars-x-wing",
    name: { en: "LEGO Star Wars X-Wing", es: "LEGO Star Wars X-Wing" },
    description: { 
        en: "Build the iconic X-Wing fighter from the Star Wars saga. Includes Luke Skywalker minifigure.",
        es: "Construye el icónico caza X-Wing de la saga Star Wars. Incluye minifigura de Luke Skywalker."
    },
    images: ["https://placehold.co/600x600.png", "https://placehold.co/600x600.png", "https://placehold.co/600x600.png"],
    price: 59.99,
    category: categories[2],
    age: ages[3],
    brand: brands[0],
  },
  {
    id: "2",
    slug: "barbie-dreamhouse",
    name: { en: "Barbie Dreamhouse", es: "Casa de Sueños Barbie" },
    description: { 
        en: "The ultimate dreamhouse for Barbie, with three floors, a pool, and an elevator.",
        es: "La casa de ensueño definitiva para Barbie, con tres pisos, piscina y ascensor."
    },
    images: ["https://placehold.co/600x600.png", "https://placehold.co/600x600.png"],
    price: 199.99,
    category: categories[1],
    age: ages[1],
    brand: brands[3],
  },
  {
    id: "3",
    slug: "hot-wheels-track-builder",
    name: { en: "Hot Wheels Track Builder", es: "Constructor de Pistas Hot Wheels" },
    description: { 
        en: "Create endless track combinations for your Hot Wheels cars.",
        es: "Crea un sinfín de combinaciones de pistas para tus coches de Hot Wheels."
    },
    images: ["https://placehold.co/600x600.png"],
    price: 49.99,
    category: categories[4],
    age: ages[2],
    brand: brands[4],
  },
  {
    id: "4",
    slug: "nerf-elite-disruptor",
    name: { en: "Nerf Elite Disruptor", es: "Nerf Elite Disruptor" },
    description: { 
        en: "6-dart rotating drum for fast-paced action. Includes 6 Elite darts.",
        es: "Tambor giratorio de 6 dardos para acción de ritmo rápido. Incluye 6 dardos Elite."
    },
    images: ["https://placehold.co/600x600.png"],
    price: 14.99,
    category: categories[0],
    age: ages[3],
    brand: brands[5],
  },
  {
    id: "5",
    slug: "monopoly-classic",
    name: { en: "Monopoly Classic", es: "Monopoly Clásico" },
    description: { 
        en: "The classic fast-dealing property trading game.",
        es: "El clásico juego de negociar propiedades."
    },
    images: ["https://placehold.co/600x600.png"],
    price: 24.99,
    category: categories[3],
    age: ages[3],
    brand: brands[2],
  },
  {
    id: "6",
    slug: "play-doh-fun-factory",
    name: { en: "Play-Doh Fun Factory", es: "Fábrica de Diversión Play-Doh" },
    description: { 
        en: "Squeeze, shape, and create with this classic Play-Doh set.",
        es: "Aprieta, moldea y crea con este clásico set de Play-Doh."
    },
    images: ["https://placehold.co/600x600.png"],
    price: 9.99,
    category: categories[2],
    age: ages[1],
    brand: brands[6],
  },
  {
    id: "7",
    slug: "transformers-optimus-prime",
    name: { en: "Transformers Optimus Prime", es: "Transformers Optimus Prime" },
    description: { 
        en: "Leader of the Autobots that converts from robot to truck mode.",
        es: "Líder de los Autobots que se convierte de modo robot a camión."
    },
    images: ["https://placehold.co/600x600.png"],
    price: 34.99,
    category: categories[0],
    age: ages[2],
    brand: brands[2],
  },
    {
    id: "8",
    slug: "lego-city-police-station",
    name: { en: "LEGO City Police Station", es: "Estación de Policía LEGO City" },
    description: { 
        en: "Three-level police station with jail cell, helicopter, and police car.",
        es: "Estación de policía de tres niveles con celda, helicóptero y coche de policía."
    },
    images: ["https://placehold.co/600x600.png"],
    price: 99.99,
    category: categories[2],
    age: ages[2],
    brand: brands[0],
  },
];

export const stores: Store[] = [
  {
    id: "sc-centro",
    name: "Munditoys Centro",
    city: "Santa Cruz",
    address: "Calle 24 de Septiembre #123, Santa Cruz de la Sierra",
    hours: "Lunes a Sábado: 09:00 - 20:00",
    phone: "+591 3 333 4444",
    image: "https://placehold.co/600x400.png",
    position: { lat: -17.7833, lng: -63.1821 },
  },
  {
    id: "sc-equipetrol",
    name: "Munditoys Equipetrol",
    city: "Santa Cruz",
    address: "Av. San Martín, Equipetrol Norte #500",
    hours: "Lunes a Domingo: 10:00 - 21:00",
    phone: "+591 3 345 6789",
    image: "https://placehold.co/600x400.png",
    position: { lat: -17.7634, lng: -63.1931 },
  },
  {
    id: "lp-sopocachi",
    name: "Munditoys Sopocachi",
    city: "La Paz",
    address: "Plaza Abaroa, Av. 20 de Octubre #2345",
    hours: "Lunes a Sábado: 09:30 - 19:30",
    phone: "+591 2 244 5566",
    image: "https://placehold.co/600x400.png",
    position: { lat: -16.5085, lng: -68.1271 },
  },
  {
    id: "lp-san-miguel",
    name: "Munditoys San Miguel",
    city: "La Paz",
    address: "Calle 21 de Calacoto, San Miguel #8200",
    hours: "Lunes a Domingo: 10:30 - 21:30",
    phone: "+591 2 279 8765",
    image: "https://placehold.co/600x400.png",
    position: { lat: -16.5442, lng: -68.0827 },
  },
    {
    id: "cbba-prado",
    name: "Munditoys El Prado",
    city: "Cochabamba",
    address: "Paseo de El Prado #789",
    hours: "Lunes a Sábado: 09:00 - 20:00",
    phone: "+591 4 455 6677",
    image: "https://placehold.co/600x400.png",
    position: { lat: -17.3935, lng: -66.1569 },
  },
];

export const heroImages = [
    { src: "/assets/Portadas/portada1.png", alt: "Hero Image 1", 'data-ai-hint': 'children playing' },
    { src: "/assets/Portadas/portada2.png", alt: "Hero Image 2", 'data-ai-hint': 'toy blocks' },
    { src: "/assets/Portadas/portada3.png", alt: "Hero Image 3", 'data-ai-hint': 'action figure' },
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getRelatedProducts = (currentProduct: Product) => {
    return products.filter(p => p.category.id === currentProduct.category.id && p.id !== currentProduct.id).slice(0, 5);
}
