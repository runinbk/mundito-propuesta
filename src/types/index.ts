export interface Product {
  id: string;
  slug: string;
  name: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  images: string[];
  video?: string;
  price: number;
  category: {
    id: string;
    name: {
      en: string;
      es: string;
    };
  };
  age: {
    id: string;
    name: {
      en: string;
      es: string;
    };
  };
  brand: {
    id: string;
    name: string;
    logo: string;
  };
}

export interface Store {
  id: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
  image: string;
  position: {
    lat: number;
    lng: number;
  };
}

export interface NavItem {
  title: string;
  href: string;
}
