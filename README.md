# MundiToys 🧸✨

¡Bienvenido a MundiSite, el portal digital para la cadena de jugueterías más querida de Bolivia! Este proyecto, creado con **Firebase Studio**, es una aplicación web moderna, rápida y escalable diseñada para ofrecer una experiencia de compra de juguetes mágica y fluida.

![MundiToys Hero Banner](https://placehold.co/1200x400/ED1C24/FFFFFF?text=MundiToys+-%20Tu+Aventura+Comienza+Aquí)

## ✨ Visión del Proyecto

El objetivo de **MundiSite** es ser más que un simple e-commerce. Buscamos crear un espacio digital donde la imaginación de los niños cobra vida. La plataforma final ofrecerá un catálogo de productos interactivo, un localizador de tiendas preciso, y funcionalidades de personalización impulsadas por IA para ayudar a los padres a encontrar el juguete perfecto para sus hijos.

---

## 🚀 Características Actuales y Futuras

Aquí puedes ver el estado del proyecto. Las características marcadas como completadas ya están implementadas, mientras que las demás forman parte de nuestro emocionante roadmap.

| Característica | Estado | Descripción | Archivos Clave |
| :--- | :--- | :--- | :--- |
| **Header y Footer Responsivos** | ✅ Completado | Navegación principal y pie de página que se adaptan a cualquier dispositivo, con logo, enlaces y cambio de idioma. | `header.tsx`, `footer.tsx` |
| **Internacionalización (i18n)** | ✅ Completado | Soporte para Español e Inglés en todos los textos estáticos del sitio. | `i18n.tsx`, `translations.ts` |
| **Catálogo de Productos** | ✅ Completado | Grid de productos con búsqueda, filtros por categoría, edad y marca, y carga progresiva ("Cargar más"). | `product-grid.tsx` |
| **Página de Detalle de Producto** | ✅ Completado | Vistas detalladas para cada juguete con carrusel de imágenes, descripción, precio y productos relacionados/page.tsx]. | `[slug]/page.tsx` |
| **Mapa Interactivo de Tiendas** | ✅ Completado | Un mapa de Bolivia con marcadores para cada tienda, con información de contacto y filtrado por ciudad. | `store-map.tsx` |
| **Integración con Genkit AI** | 🟢 En Progreso | Base para futuras funciones de IA, como recomendaciones de productos o un chatbot de asistencia. | `genkit.ts` |
| **Autenticación de Usuarios** | 🟡 Pendiente | Sistema de inicio de sesión y registro para clientes. | - |
| **Carrito de Compras** | 🟡 Pendiente | Funcionalidad completa para agregar productos al carrito y gestionar la compra. | - |
| **Pasarela de Pagos** | 🔴 Sin Empezar | Integración con servicios de pago para completar transacciones en línea. | - |

---

## 🛠️ Stack Tecnológico

Este proyecto aprovecha un conjunto de tecnologías modernas para garantizar un rendimiento y una experiencia de usuario excepcionales.

- **Framework**: **Next.js** (App Router)
- **Lenguaje**: **TypeScript**
- **Estilos**: **Tailwind CSS** con **shadcn/ui** para componentes pre-construidos y personalizables.
- **IA Generativa**: **Google AI** a través de **Genkit**.
- **Mapas**: **Google Maps Platform** con `@vis.gl/react-google-maps`.
- **Gestión de Formularios**: **React Hook Form** con **Zod** para validación.
- **Hosting**: Preparado para **Firebase App Hosting**.

---

## 🎬 Animación de Componentes Clave

Para darle vida al sitio, aquí tienes una idea de las animaciones que podemos implementar.

| Componente | Animación Propuesta |
| :--- | :--- |
| **Product Card** | Un sutil efecto de "flotación" al pasar el mouse y una transición suave en la imagen para hacerla más grande. |
| **Hero Carousel** | Transiciones de *fade* entre imágenes para una sensación más suave y profesional. |
| **Botones** | Micro-interacciones al hacer clic, como un cambio de escala o un ligero desplazamiento. |
| **Carga de Productos** | Utilizar componentes `Skeleton` que imiten la forma de las tarjetas de producto para mejorar la percepción de velocidad. |

---

## 🎨 Guía de Estilos

El diseño se basa en las directrices del archivo `blueprint.md`, creando una identidad de marca coherente y atractiva.

- **Tipografía**:
  - **Titulares**: `Space Grotesk`
  - **Cuerpo**: `Inter`
- **Paleta de Colores**:
  - **Primario (Rojo Vibrante)**: `#ED1C24`
  - **Fondo (Modo Oscuro)**: `#222222`
  - **Acento (Naranja)**: `#FFAE00`
- **Componentes**: La interfaz se construye sobre la base de **shadcn/ui**, lo que garantiza consistencia y accesibilidad.

*Puedes ver la configuración completa en `tailwind.config.ts` y `src/app/globals.css`.*

---

## 🚀 Cómo Empezar

1.  **Clonar el repositorio:**
    ```bash
    git clone https://URL_DEL_REPOSITORIO.git
    cd mundito-propuesta
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto y añade tu API Key de Google Maps para que el mapa de tiendas funcione:
    ```
    NEXT_PUBLIC_Google Maps_API_KEY="TU_API_KEY"
    ```

4.  **Ejecutar el proyecto en modo de desarrollo:**
    ```bash
    npm run dev
    ```
    ¡Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver el resultado!