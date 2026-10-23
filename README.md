# Goline · sitio web

Sitio de [goline.com.co](https://www.goline.com.co) construido con [Astro](https://astro.build), Tailwind CSS 4 y desplegado en Vercel.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera .vercel/output
npm run check    # revisión de tipos
```

Copia `.env.example` a `.env` para probar los formularios. Sin claves de reCAPTCHA la verificación se omite; sin credenciales de Firebase los endpoints responden con error 500.

## Estructura

| Ruta | Contenido |
| --- | --- |
| `src/pages/index.astro` | Inicio |
| `src/pages/[service].astro` | Páginas de servicio (`/inteligencia-artificial`, `/modelado-negocios-digitales`, `/ecommerce`, `/infra`, `/staff`) generadas desde `src/data/site.ts` |
| `src/pages/ispgo.astro` | Página de ISPGO, producto de Goline |
| `src/pages/[legal].astro` | Términos, privacidad y código de ética desde `src/content/legal/*.md` |
| `src/pages/blog.astro` | Blog desde `src/content/blog/*.md` |
| `src/pages/api/contact.ts`, `newsletter.ts` | Endpoints (Vercel Functions) que guardan en Firestore y verifican reCAPTCHA v3 en el servidor |
| `src/pages/marca.astro` | Guía de marca pública con los logos para descargar |

## Marca

- Logo: `public/brand/*.svg`. Se generan con `npm run logo` (`scripts/build-logo.mjs`), que convierte el texto de Sora 700 a trazos.
- Colores: Ink `#0B0B1A`, Paper `#F6F5FB`, Volt `#3B5BFF`, Iris `#8A5CFF`, Ember `#FF6A3D`. Definidos como tokens en `src/styles/global.css`.
- Tipografía: Sora (títulos), Instrument Sans (texto), JetBrains Mono (datos y etiquetas), servidas desde `@fontsource-variable`.

## Variables de entorno (Vercel)

| Variable | Uso |
| --- | --- |
| `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY` | Firestore (colecciones `contact` y `newsletter`) |
| `RECAPTCHA_API_KEY` | Clave secreta de reCAPTCHA v3 |
| `PUBLIC_RECAPTCHA_SITE_KEY` | Clave pública de reCAPTCHA v3 (si no existe se usa `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`) |
