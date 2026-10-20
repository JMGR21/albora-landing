<div align="center">

# Albora

**Tus clientes agendan solos. Tú no tocas el celular.**

Landing de lanzamiento de Albora — agenda para barberías y estéticas, de [Alba Studios](https://albastudiosagency.com/).

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)

</div>

---

## El producto

Un barbero que llega a la página desde un link de WhatsApp debe confirmar en 30 segundos que Albora
es real y escribir por WhatsApp. Toda la landing está diseñada alrededor de ese momento: hero a pantalla
completa, un piloto fundador con cupos limitados, y un solo tipo de llamada a la acción en toda la
página — WhatsApp.

| | |
|---|---|
| **Stack** | Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 |
| **Fuentes** | [Anton](https://fonts.google.com/specimen/Anton) (titulares) · [DM Sans](https://fonts.google.com/specimen/DM+Sans) (cuerpo), vía `next/font` |
| **Imágenes** | `next/image` + `sharp`, con placeholders automáticos mientras no haya foto |
| **Idioma** | Español (México) |

---

## Empezar

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint          # eslint
pnpm exec tsc --noEmit   # typecheck
pnpm build          # build de producción
pnpm start          # sirve el build (next start)
```

---

## Estructura

```
app/
  layout.tsx       metadata, fuentes, viewport
  page.tsx         ensambla todas las secciones
  robots.ts        robots.txt
  sitemap.ts       sitemap.xml
  icon.svg         favicon (sol de la marca)
  opengraph-image.tsx  vista previa al compartir el link (WhatsApp, redes)
  twitter-image.tsx    misma imagen, para Twitter/X
components/albora/  un componente por sección (Hero, Piloto, Nosotros, ...)
lib/
  albora-config.ts   WhatsApp, cupos, enlaces, dominio — lo que cambia seguido
  albora-content.ts  copy estático (servicios, pasos, preguntas)
  public-image.ts    detecta fotos en /public/images y arma su URL con cache-busting
```

---

## Configuración de contenido

Todo lo operativo vive en [`lib/albora-config.ts`](lib/albora-config.ts):

- Número de WhatsApp y los mensajes prellenados de cada botón.
- `cuposLibres` del piloto fundador (0–5).
- Enlaces (Instagram, Alba Studios) y el dominio de producción (`siteUrl`, también configurable con
  la variable de entorno `NEXT_PUBLIC_SITE_URL`).

El copy estático (servicios, pasos de "Cómo funciona", preguntas frecuentes) está en
[`lib/albora-content.ts`](lib/albora-content.ts).

---

## Fotos

Las fotos son opcionales: mientras no existan, cada sección muestra un placeholder neutro. Súbelas con
estos nombres exactos a `public/images/` y aparecen solas — sin tocar código, y con cache-busting
automático si luego reemplazas el archivo.

| Archivo | Sección |
|---|---|
| `hero.jpg` | Hero |
| `manos.jpg` | Qué incluye (bento) |
| `paso-1.jpg` · `paso-2.jpg` · `paso-3.jpg` | Cómo funciona |
| `miguel.jpeg` · `anthony.jpeg` | Quiénes somos (retratos, desktop) |

> Antes de subirlas, conviene comprimirlas/redimensionarlas (máx. ~2000–2500px de lado largo, JPEG
> calidad ~80). Next las optimiza al vuelo, pero archivos más chicos agilizan el build y el repo.

`hero.jpg` además se reutiliza automáticamente como imagen de vista previa al compartir el link
(`app/opengraph-image.tsx`) — es lo primero que ve alguien antes de abrir la página, sobre todo
compartido por WhatsApp.

---

## Despliegue

```bash
pnpm build
pnpm start
```

- La optimización de imágenes usa `sharp` (ya está en `dependencies`); en hosting propio (Docker, VPS)
  corre `pnpm install` ahí también para que compile su binario nativo.
- `robots.txt` y `sitemap.xml` se generan solos desde `app/robots.ts` y `app/sitemap.ts`, usando `siteUrl`.
- Antes de publicar, actualiza `siteUrl` en `lib/albora-config.ts` (o la env var `NEXT_PUBLIC_SITE_URL`)
  al dominio real.

---

## Pendientes de contenido

- [ ] Número de Instagram real (`instagramUrl` en `lib/albora-config.ts`, hoy es `"#"`).
- [ ] Apellido y rol de Anthony en "Quiénes somos" ([`components/albora/Nosotros.tsx`](components/albora/Nosotros.tsx)).
- [ ] Dominio real de producción (`siteUrl`).
