# Albora — Handoff de la landing de lanzamiento

Referencias visuales (fuente de verdad del diseño, abrir en el navegador para inspeccionar):
- `design/DesktopModerno.dc.html` → versión de escritorio (1440 px). **Es la que se implementa.**
- `design/Main.dc.html` → versión celular (390 px). Úsala como guía de cómo se apila todo en móvil.

Los `.dc.html` usan un formato propio del editor de diseño (`<x-dc>`, `{{holes}}`, `<sc-for>`, `<sc-if>`, script `DCLogic`). **No copiarlos tal cual**: traducirlos a componentes del proyecto. Los valores dinámicos están en el bloque `renderVals()` al final de cada archivo.

Objetivo de la página: que un barbero que llega desde WhatsApp confirme en 30 segundos que Albora es real y escriba por WhatsApp. Mobile-first.

---

## 1. Tokens

| Token | Valor | Uso |
|---|---|---|
| `ink` | `#161412` | Fondos oscuros, texto principal |
| `paper` | `#F7F5F1` | Fondo de página |
| `cream` | `#F3EEE6` | Texto sobre oscuro |
| `brass` (accent) | `#D3A453` | Sol del logo, segunda línea de titulares, números |
| `barber-red` | `#B2342A` | Sección piloto, etiquetas, íconos |
| `barber-blue` | `#1F3A5F` | Solo en la franja del poste |
| `wa-green` | `#157A42` | **Todos** los botones de WhatsApp (texto blanco, contraste AA) |
| `muted` | `#6B6259` | Texto secundario sobre claro |
| `muted-dark` | `#B9AE9F` | Texto secundario sobre oscuro |
| `line` | `#DDD5CA` / `#ECE5DB` | Bordes de píldoras / tarjetas |

Radios: contenedores grandes 32 px · tarjetas 24 px · internas 16–18 px · botones y etiquetas `999px` (píldora).
Página: padding exterior 16 px; contenido `max-width: 1280px`.

**Tipografía (Google Fonts)**
- `Anton` 400 → titulares, siempre MAYÚSCULAS. Hero 116 px, secciones 60 px, números grandes 72–160 px.
- `DM Sans` 400/500/700 (+ itálica 400) → cuerpo 17 px, statement 38 px/500, botones 700.
- Etiquetas de sección: 12 px, 700, `letter-spacing: 3px`, mayúsculas, dentro de píldora con borde.

**Franja del poste (separador de marca)**
```css
background: repeating-linear-gradient(-45deg,
  #B2342A 0 12px, #F3EEE6 12px 24px, #1F3A5F 24px 36px, #F3EEE6 36px 48px);
height: 10px;
```
Va al pie del hero y en el borde superior del footer.

## 2. Logo

Texto `alb` + sol (SVG) + `ra`, en DM Sans 700, `letter-spacing ≈ -0.036em`. El sol escala con `font-size`:

```html
<span role="img" aria-label="Albora" class="logo">alb<svg viewBox="0 0 52 50" aria-hidden="true"
  style="width:.58em;height:.558em;margin:0 .02em 0 .03em">
  <path d="M8 44 A18 18 0 0 1 44 44 Z" fill="var(--brass)"/>
  <line x1="4" y1="46.5" x2="48" y2="46.5" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
  <line x1="26" y1="18" x2="26" y2="9" stroke="var(--brass)" stroke-width="5" stroke-linecap="round"/>
  <line x1="9.5" y1="25" x2="4" y2="19.5" stroke="var(--brass)" stroke-width="5" stroke-linecap="round"/>
  <line x1="42.5" y1="25" x2="48" y2="19.5" stroke="var(--brass)" stroke-width="5" stroke-linecap="round"/>
</svg>ra</span>
```
`.logo { display:inline-flex; align-items:baseline; font-weight:700; line-height:1 }`. El horizonte toma `currentColor`. Hacerlo un componente `<Logo size={…} />`.

## 3. Secciones (en orden)

1. **Hero** — contenedor 820 px alto, radio 32, foto a todo lo ancho (B/N) con overlay oscuro suficiente para contraste. Nav arriba (logo · 5 anclas · píldora blanca "Escríbenos"). Centro: etiqueta en latón, H1 en dos líneas (2.ª en latón), párrafo, CTA verde píldora con círculo blanco e ícono. Abajo-izq: 2 chips glass (`rgba(255,255,255,.12)`, borde `.22`, `backdrop-filter: blur(10px)`). Abajo-der: tarjeta glass 300 px con burbuja de recordatorio de WhatsApp. Franja del poste pegada al borde inferior.
2. **Qué es Albora** — etiqueta, statement centrado 38 px (segunda frase en `#8F857A`), 3 datos en Anton 72 px: `5` lugares en el piloto · `60` días acompañándote · `0` apps que descargar.
3. **Qué incluye** (`#que-incluye`) — encabezado a dos columnas + bento `grid 4 cols × 2 filas de 250 px`: foto alta en la 1.ª columna (con tarjeta blanca "Tu agenda, atendida" + píldora roja "Incluido") y 6 tarjetas blancas (ícono en cuadro `ink` con trazo latón, título, detalle).
4. **Cómo funciona** (`#como-funciona`) — bloque `ink` radio 32. Izquierda: 3 pestañas tipo acordeón (solo una abierta; la activa con fondo `#2A2622`, número en latón, flecha arriba). Derecha: imagen que cambia según el paso, número gigante 160 px y pie glass. Botón "Quiero mi agenda así". **Interactivo**: estado `paso` 0–2, primer paso abierto por defecto, `<button aria-expanded>`.
5. **Piloto fundador** (`#piloto`) — bloque rojo radio 32. Izquierda: titular, texto, 5 sillas circulares (llenas = lugares libres) + texto "Quedan N de 5 lugares". Derecha: tarjeta blanca con 3 beneficios y CTA "Quiero apartar mi lugar". `cuposLibres` debe ser una constante/config fácil de cambiar.
6. **Quiénes somos** (`#nosotros`) — encabezado + 3 columnas de 520 px: foto Miguel, foto Anthony (nombre/rol en tarjeta glass clara) y tarjeta `ink` con cita "Tú dedícate a cortar. De la agenda nos encargamos nosotros." + píldora "de Alba Studios".
7. **Preguntas** (`#preguntas`) — centrado 820 px, 3 `<details>` (el primero abierto), botón circular `ink` con "+" que rota 45° al abrir.
8. **Footer** — bloque `ink` radio 32, franja del poste arriba, CTA centrado ("¿Platicamos? / Tu silla te espera." en Anton 84 px), columnas: logo + tagline (6) · Explora (2) · Contacto (2) · Dónde (2), y línea final de copyright.

Todo el copy está en los `.dc.html`; usar el texto exacto (español de México, tono cercano, sin tecnicismos).

## 4. WhatsApp

```js
const tel = '52XXXXXXXXXX'; // ← poner número real
const wa = (t) => `https://wa.me/${tel}?text=${encodeURIComponent(t)}`;
// General:  "Hola, vi la página de Albora y quiero saber cómo funcionaría en mi negocio."
// Piloto:   "Hola, quiero apartar un lugar en el piloto fundador de Albora."
```
Todos con `target="_blank" rel="noopener"`.

## 5. Responsive

- ≥1024 px: layout de `DesktopModerno`.
- <768 px: seguir `Main.dc.html` — todo en una columna, hero con titular ~46–52 px, la tarjeta de recordatorio pasa debajo del texto, bento a 1 columna, pestañas arriba e imagen abajo, retratos en 1–2 columnas, footer apilado. Botones a ancho cómodo (mín. 44–56 px de alto).
- Usar `clamp()` para tamaños de titulares.

## 6. Pendientes / placeholders

- Fotos (B/N preferente): hero, detalle de manos con máquina, una por paso de "Cómo funciona" (3), retrato de Miguel, retrato de Anthony. Mientras tanto, usar un fondo neutro, no imágenes de stock con marcas.
- Apellido de Anthony y rol de cada fundador (`[APELLIDO]`, `[ROL]`).
- URL de Instagram del footer.
- Número de WhatsApp.

## 7. Accesibilidad

Botones reales (`<button>`, `<a href>`), `aria-label` en logo e íconos sueltos, íconos decorativos con `aria-hidden`, contraste AA ya validado en la paleta (no aclarar el verde ni el gris secundario), foco visible en latón.
