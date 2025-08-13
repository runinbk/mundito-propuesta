export const translations = {
  es: {
    // Navigation
    navHome: "Inicio",
    navAbout: "Sobre Nosotros",
    navProducts: "Productos",
    navLocations: "Tiendas",

    // Hero Section
    heroTitle: "Tu Aventura Comienza Aquí",
    heroSubtitle: "Descubre un mundo de diversión y aprendizaje.",
    heroButton: "Explorar Juguetes",
    heroTitleV2: "Desata Su Imaginación",
    heroSubtitleV2: "Descubre nuestra nueva colección de juguetes creativos.",
    heroButtonV2: "Comprar Novedades",
    
    // Featured Products
    featuredProductsTitle: "Productos Destacados",
    newProductsTitle: "Nuevos Productos",
    viewAllLink: "Ver Todos",

    // Intro Text
    introTitle: "Bienvenido a Munditoys",
    introText: "Somos más que una juguetería. Somos un lugar donde la imaginación cobra vida. Nuestra misión es ofrecer juguetes que inspiren creatividad, fomenten el aprendizaje y creen momentos inolvidables para niños de todas las edades.",
    introButton: "Conoce Más",

    // Brand Logos
    brandsTitle: "Nuestras Marcas",

    // Footer
    contactTitle: "Contáctanos",
    contactName: "Nombre",
    contactNamePlaceholder: "Tu Nombre",
    contactEmail: "Correo",
    contactEmailPlaceholder: "Tu Correo",
    contactSubject: "Asunto",
    contactSubjectPlaceholder: "¿De qué se trata?",
    contactMessage: "Mensaje",
    contactMessagePlaceholder: "Tu mensaje...",
    contactSend: "Enviar Mensaje",
    contactSuccess: "¡Mensaje enviado! Gracias por contactarnos.",
    contactError: "Error al enviar. Inténtalo de nuevo.",
    legalFAQ: "Preguntas Frecuentes",
    legalTerms: "Términos y Condiciones",
    legalPrivacy: "Política de Privacidad",
    shippingReturns: "Envíos y Devoluciones",
    quickLinks: "Enlaces Rápidos",
    footerSlogan: "Tu mundo de diversión e imaginación.",
    footerRights: "Todos los derechos reservados.",

    // About Page
    aboutTitle: "Nuestra Historia",
    aboutMissionTitle: "Misión",
    aboutMissionText: "Inspirar la creatividad y la alegría a través del juego, ofreciendo juguetes seguros y educativos que enciendan la imaginación de cada niño.",
    aboutVisionTitle: "Visión",
    aboutVisionText: "Ser la juguetería líder y más querida de Bolivia, reconocida por nuestra calidad, innovación y compromiso con el desarrollo infantil.",

    // Products Page
    searchPlaceholder: "Buscar productos...",
    filterByCategory: "Categoría",
    filterByAge: "Edad",
    filterByBrand: "Marca",
    allCategories: "Todas las categorías",
    allAges: "Todas las edades",
    allBrands: "Todas las marcas",
    loadMore: "Cargar más",
    noProductsFound: "No se encontraron productos.",

    // Product Detail Page
    productBrand: "Marca",
    productAge: "Edad recomendada",
    productAvailability: "Ver disponibilidad en tiendas",
    productRelated: "Productos Relacionados",
    backToCatalog: "Volver al Catálogo",

    // Locations Page
    locationsTitle: "Nuestras Tiendas",
    filterByCity: "Filtrar por ciudad",
    allCities: "Todas las ciudades",
    storeHours: "Horario",
    storePhone: "Teléfono",

  },
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navLocations: "Store Locations",

    // Hero Section
    heroTitle: "Your Adventure Starts Here",
    heroSubtitle: "Discover a world of fun and learning.",
    heroButton: "Explore Toys",
    heroTitleV2: "Unleash Their Imagination",
    heroSubtitleV2: "Discover our new collection of creative toys.",
    heroButtonV2: "Shop New Arrivals",

    // Featured Products
    featuredProductsTitle: "Featured Products",
    newProductsTitle: "New Products",
    viewAllLink: "View All",

    // Intro Text
    introTitle: "Welcome to Munditoys",
    introText: "We are more than just a toy store. We are a place where imagination comes to life. Our mission is to offer toys that inspire creativity, encourage learning, and create unforgettable moments for children of all ages.",
    introButton: "Learn More",

    // Brand Logos
    brandsTitle: "Our Brands",

    // Footer
    contactTitle: "Contact Us",
    contactName: "Name",
    contactNamePlaceholder: "Your Name",
    contactEmail: "Email",
    contactEmailPlaceholder: "Your Email",
    contactSubject: "Subject",
    contactSubjectPlaceholder: "What is it about?",
    contactMessage: "Message",
    contactMessagePlaceholder: "Your message...",
    contactSend: "Send Message",
    contactSuccess: "Message sent! Thank you for contacting us.",
    contactError: "Failed to send. Please try again.",
    legalFAQ: "FAQ",
    legalTerms: "Terms & Conditions",
    legalPrivacy: "Privacy Policy",
    shippingReturns: "Shipping & Returns",
    quickLinks: "Quick Links",
    footerSlogan: "Your world of fun and imagination.",
    footerRights: "All rights reserved.",

    // About Page
    aboutTitle: "Our Story",
    aboutMissionTitle: "Mission",
    aboutMissionText: "To inspire creativity and joy through play, offering safe and educational toys that ignite every child's imagination.",
    aboutVisionTitle: "Vision",
    aboutVisionText: "To be the leading and most beloved toy store in Bolivia, recognized for our quality, innovation, and commitment to child development.",

    // Products Page
    searchPlaceholder: "Search products...",
    filterByCategory: "Category",
    filterByAge: "Age",
    filterByBrand: "Brand",
    allCategories: "All Categories",
    allAges: "All Ages",
    allBrands: "All Brands",
    loadMore: "Load More",
    noProductsFound: "No products found.",

    // Product Detail Page
    productBrand: "Brand",
    productAge: "Recommended Age",
    productAvailability: "Check store availability",
    productRelated: "Related Products",
    backToCatalog: "Back to Catalog",

    // Locations Page
    locationsTitle: "Our Stores",
    filterByCity: "Filter by city",
    allCities: "All cities",
    storeHours: "Hours",
    storePhone: "Phone",
  },
};

export type Language = "en" | "es";
export type TranslationKey = keyof typeof translations.en;
