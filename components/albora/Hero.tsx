import Image from "next/image";
import Logo from "./Logo";
import PoleStripe from "./PoleStripe";
import WhatsAppLink from "./WhatsAppLink";
import { navLinks, ubicacion, waLinkGeneral } from "@/lib/albora-config";
import { getPublicImage } from "@/lib/public-image";

// Sube la foto del hero (B/N, horizontal, ancha) como public/images/hero.jpg
// y aparecerá automáticamente aquí, sin tocar código.
const { src: heroImageSrc, exists: heroImageExists } = getPublicImage("/images/hero.jpg");

function IconWhatsapp({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M9 9.5c0 2.8 2.7 5.5 5.5 5.5l1.5-1.6-2-1-1 .9c-1-.4-1.9-1.3-2.3-2.3l.9-1-1-2z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <header className="relative overflow-hidden rounded-[32px]">
      {/* Desktop (lg+): foto a todo lo ancho, siempre ocupa el alto de la pantalla */}
      <div
        className="hidden lg:flex relative h-[calc(100vh-2rem)] min-h-[668px] flex-col text-white"
        style={{
          background:
            "repeating-linear-gradient(135deg, #2F2B27 0 2px, #282420 2px 16px)",
        }}
      >
        {heroImageExists ? (
          <>
            <Image
              src={heroImageSrc}
              alt="Barbero cortando, cliente en la silla, blanco y negro"
              fill
              priority
              sizes="calc(100vw - 32px)"
              className="object-cover"
            />
            {/* Overlay oscuro, solo lo necesario para que el texto tenga contraste */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/35"
              aria-hidden="true"
            />
          </>
        ) : null}

        {/* Contenido: centrado y limitado al ancho del resto del landing */}
        <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6">
          {/* Nav */}
          <div className="flex items-center justify-between gap-6 pt-10">
            <Logo size={36} className="text-white" />
            <nav aria-label="Secciones" className="flex gap-8 text-[15px] font-medium">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
            <WhatsAppLink
              location="hero_nav"
              href={waLinkGeneral}
              target="_blank"
              rel="noopener"
              className="cta-hover inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-[15px] font-bold text-ink"
            >
              Escríbenos
            </WhatsAppLink>
          </div>

          {/* Marcador de foto (solo mientras no exista public/images/hero.jpg) */}
          {!heroImageExists ? (
            <div
              aria-hidden="true"
              className="flex items-center justify-center gap-2 pt-6 text-xs font-bold uppercase tracking-[2px] text-[#8F857A]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              [FOTO A TODO LO ANCHO: BARBERO CORTANDO, CLIENTE EN LA SILLA, BLANCO Y NEGRO]
            </div>
          ) : null}

          {/* Titular: compacto y centrado en el espacio disponible */}
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <span className="text-[13px] font-bold uppercase tracking-[3px] text-brass">
              ( Agenda para barberías y estéticas )
            </span>
            <h1 className="m-0 font-display text-[clamp(40px,5.5vw,80px)] uppercase leading-[0.95] tracking-[0.5px]">
              Tus clientes agendan solos.
              <span className="block text-brass">Tú no tocas el celular.</span>
            </h1>
            <p className="m-0 max-w-[420px] text-base text-[#E4DCD0]">
              Nosotros armamos y cuidamos tu agenda.
            </p>
            <WhatsAppLink
              location="hero_cta_desktop"
              href={waLinkGeneral}
              target="_blank"
              rel="noopener"
              className="cta-hover inline-flex min-h-12 items-center gap-2.5 rounded-full bg-wa-green py-1 pl-5 pr-1.5 text-[15px] font-bold text-white"
            >
              Escríbenos por WhatsApp
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-wa-green">
                <IconWhatsapp className="h-4 w-4" />
              </span>
            </WhatsAppLink>
          </div>

          {/* Chips + tarjeta de recordatorio */}
          <div className="flex items-end justify-between gap-4 pb-10">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/22 bg-white/12 py-[9px] pl-[10px] pr-4 text-sm font-medium backdrop-blur-[10px]">
                <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/18">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                {ubicacion}
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/22 bg-white/12 py-[9px] pl-[10px] pr-4 text-sm font-medium backdrop-blur-[10px]">
                <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/18">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z" />
                  </svg>
                </span>
                Tu agenda sigue abierta 24/7
              </span>
            </div>

            <div
              role="img"
              aria-label="Ejemplo de recordatorio por WhatsApp"
              className="flex w-[300px] flex-col gap-2.5 rounded-[22px] border border-white/22 bg-white/12 p-3.5 backdrop-blur-[10px]"
            >
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[1px] text-[#E4DCD0]">
                <span>Recordatorio automático</span>
                <span className="h-2 w-2 rounded-full bg-[#5BD08A]" />
              </div>
              <div className="rounded-tl-[4px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-white px-3 py-2.5 text-[13.5px] leading-[1.4] text-ink">
                Hola Luis, te esperamos <b>mañana a las 5:00 pm</b> para tu corte y
                barba con Toño.
                <div className="mt-2 flex gap-1.5">
                  <span className="flex-1 rounded-full border border-[#1B4D3A] py-1 text-center text-xs font-bold text-[#1B4D3A]">
                    Confirmo
                  </span>
                  <span className="flex-1 rounded-full border border-[#1B4D3A] py-1 text-center text-xs font-bold text-[#1B4D3A]">
                    Cambiar hora
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador para seguir navegando */}
        <div className="flex justify-center pb-10">
          <a
            href="#que-es-albora"
            aria-label="Desplázate para ver más"
            className="group flex flex-col items-center gap-1.5 text-[#B9AE9F] transition-colors hover:text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-[10px] transition-colors group-hover:border-white/50">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="animate-bounce"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </span>
          </a>
        </div>

        <PoleStripe className="w-full" />
      </div>

      {/* Mobile/tablet (<lg): misma foto a todo lo ancho que desktop, apilado en una columna */}
      <div
        className="lg:hidden relative flex flex-col text-white"
        style={{
          background:
            "repeating-linear-gradient(135deg, #2F2B27 0 2px, #282420 2px 16px)",
        }}
      >
        {heroImageExists ? (
          <>
            <Image
              src={heroImageSrc}
              alt="Barbero cortando, cliente en la silla, blanco y negro"
              fill
              priority
              sizes="calc(100vw - 32px)"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/55"
              aria-hidden="true"
            />
          </>
        ) : null}

        <div className="relative mx-auto flex w-full max-w-[640px] flex-col gap-7 px-5 pb-10 pt-6 sm:px-8">
          {/* Nav */}
          <div className="flex items-center justify-between gap-3">
            <Logo size={32} className="text-white" />
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[13px] font-medium backdrop-blur-[10px]">
              Barberías y estéticas
            </span>
          </div>

          {/* Marcador de foto (solo mientras no exista public/images/hero.jpg) */}
          {!heroImageExists ? (
            <div
              aria-hidden="true"
              className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[1.5px] text-[#8F857A]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              [FOTO: BARBERO CORTANDO, B/N]
            </div>
          ) : null}

          {/* Titular */}
          <div className="flex flex-col items-center gap-3.5 pt-4 text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-brass">
              ( Agenda para barberías y estéticas )
            </span>
            <h1 className="m-0 font-display text-[clamp(38px,11vw,64px)] uppercase leading-[0.95] tracking-[0.5px]">
              Tus clientes agendan solos.
              <span className="block text-brass">Tú no tocas el celular.</span>
            </h1>
            <p className="m-0 max-w-[360px] text-[15px] text-[#E4DCD0]">
              Nosotros armamos y cuidamos tu agenda.
            </p>
            <WhatsAppLink
              location="hero_cta_mobile"
              href={waLinkGeneral}
              target="_blank"
              rel="noopener"
              className="cta-hover mt-1 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-wa-green py-1 pl-5 pr-1.5 text-[15px] font-bold text-white"
            >
              Escríbenos por WhatsApp
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-wa-green">
                <IconWhatsapp className="h-4 w-4" />
              </span>
            </WhatsAppLink>
          </div>

          {/* Chips */}
          <div className="flex flex-col items-center gap-2">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/22 bg-white/12 py-[9px] pl-[10px] pr-4 text-sm font-medium backdrop-blur-[10px]">
              <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/18">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              {ubicacion}
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/22 bg-white/12 py-[9px] pl-[10px] pr-4 text-sm font-medium backdrop-blur-[10px]">
              <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/18">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z" />
                </svg>
              </span>
              Tu agenda sigue abierta 24/7
            </span>
          </div>
        </div>

        <PoleStripe className="w-full" />
      </div>
    </header>
  );
}
