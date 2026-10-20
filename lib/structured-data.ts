// Datos estructurados (schema.org) para que Google muestre mejor el
// resultado de búsqueda. Si cambian datos de contacto o ubicación, se toman
// de lib/albora-config.ts — no hay nada que editar aquí.

import {
  albaStudiosUrl,
  instagramUrl,
  siteUrl,
  ubicacion,
  waLinkGeneral,
  whatsappNumber,
} from "@/lib/albora-config";

const [addressLocality, addressRegion] = ubicacion.split(", ");

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Albora",
    description:
      "Tus clientes agendan solos. Tú no tocas el celular. Albora arma y cuida tu agenda para barberías y estéticas.",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: `+${whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressRegion,
      addressCountry: "MX",
    },
    areaServed: ubicacion,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${whatsappNumber}`,
      url: waLinkGeneral,
      availableLanguage: "es",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Alba Studios",
      url: albaStudiosUrl,
    },
    ...(instagramUrl !== "#" ? { sameAs: [instagramUrl] } : {}),
  } as const;
}
