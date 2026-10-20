// Datos de contacto y enlaces de la landing de Albora.
// Cambia aquí el número de WhatsApp, los cupos libres del piloto y los enlaces.

export const whatsappNumber = "523221899376"; // 52 + 3221899376

export const cuposLibres = 5; // 0–5, lugares libres del piloto fundador

export const waMensajeGeneral =
  "Hola, vi la página de Albora y quiero saber cómo funcionaría en mi negocio.";

export const waMensajePiloto =
  "Hola, quiero apartar un lugar en el piloto fundador de Albora.";

export function waLink(mensaje: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
}

export const waLinkGeneral = waLink(waMensajeGeneral);
export const waLinkPiloto = waLink(waMensajePiloto);

export const navLinks = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#que-incluye", label: "Qué incluye" },
  { href: "#piloto", label: "Piloto" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#preguntas", label: "Preguntas" },
] as const;

export const footerExploraLinks = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#que-incluye", label: "Qué incluye" },
  { href: "#piloto", label: "Piloto fundador" },
  { href: "#preguntas", label: "Preguntas" },
] as const;

export const instagramUrl: string = "https://www.instagram.com/albastudios1/?hl=es";

export const albaStudiosUrl = "https://albastudiosagency.com/";

export const ubicacion = "Puerto Vallarta, Jalisco";

// Dominio real donde quedará publicada la landing (para metadata, robots.txt
// y sitemap.xml). Si el dominio final cambia, pongan NEXT_PUBLIC_SITE_URL en
// las variables de entorno del hosting para no tocar este archivo.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://albora.albastudiosagency.com";
