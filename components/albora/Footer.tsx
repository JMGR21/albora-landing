import Logo from "./Logo";
import PoleStripe from "./PoleStripe";
import WhatsAppLink from "./WhatsAppLink";
import {
  albaStudiosUrl,
  footerExploraLinks,
  instagramUrl,
  ubicacion,
  waLinkGeneral,
} from "@/lib/albora-config";

function IconWhatsapp() {
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
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M9 9.5c0 2.8 2.7 5.5 5.5 5.5l1.5-1.6-2-1-1 .9c-1-.4-1.9-1.3-2.3-2.3l.9-1-1-2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-[32px] bg-ink text-cream">
      <PoleStripe />
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-5 pb-9 pt-12 lg:gap-18 lg:px-10 lg:pb-9 lg:pt-22">
        <div className="flex flex-col items-center gap-4.5 text-center">
          <span className="hidden rounded-full border border-[#3A352F] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[3px] text-muted-dark lg:inline-block">
            ¿Listo para empezar?
          </span>
          <h2 className="m-0 font-display text-[clamp(32px,8vw,84px)] uppercase leading-[1.05] lg:leading-[0.95]">
            ¿Platicamos?
            <span className="hidden text-brass lg:block">Tu silla te espera.</span>
          </h2>
          <p className="m-0 max-w-[460px] text-lg text-muted-dark lg:text-[18px]">
            Mándanos un mensaje y te contamos cómo quedaría tu agenda. Sin
            compromiso.
          </p>
          <WhatsAppLink
            location="footer_main"
            href={waLinkGeneral}
            target="_blank"
            rel="noopener"
            className="cta-hover inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-wa-green px-7 text-lg font-bold text-white lg:rounded-full lg:pl-6.5 lg:pr-2.5 lg:text-[17px]"
          >
            <IconWhatsapp />
            Escríbenos por WhatsApp
          </WhatsAppLink>
        </div>

        {/* Desktop: columnas */}
        <div className="hidden grid-cols-12 gap-8 border-t border-[#2E2A26] pt-10 lg:grid">
          <div className="col-span-6 flex flex-col gap-3">
            <Logo size={44} className="text-cream" />
            <span className="text-[15px] text-muted-dark">
              Tu agenda, atendida. Para barberías y estéticas.
            </span>
          </div>
          <div className="col-span-2 flex flex-col gap-2 text-[15px]">
            <b className="text-[13px] uppercase tracking-[2px] text-cream">Explora</b>
            {footerExploraLinks.map((link) => (
              <a key={link.href} href={link.href} className="foot-link">
                {link.label}
              </a>
            ))}
          </div>
          <div className="col-span-2 flex flex-col gap-2 text-[15px]">
            <b className="text-[13px] uppercase tracking-[2px] text-cream">Contacto</b>
            <WhatsAppLink location="footer_contacto" href={waLinkGeneral} target="_blank" rel="noopener" className="foot-link">
              WhatsApp
            </WhatsAppLink>
            <a href={instagramUrl} className="foot-link">
              Instagram
            </a>
          </div>
          <div className="col-span-2 flex flex-col gap-2 text-[15px]">
            <b className="text-[13px] uppercase tracking-[2px] text-cream">Dónde</b>
            <span className="text-muted-dark">
              Puerto Vallarta,
              <br />
              Jalisco
            </span>
          </div>
        </div>

        {/* Mobile: logo + línea */}
        <div className="flex flex-col items-center gap-1 border-t border-[#3A352F] pt-5 lg:hidden">
          <Logo size={32} className="text-cream" />
          <span className="text-sm text-muted-dark">
            de{" "}
            <a href={albaStudiosUrl} target="_blank" rel="noopener" className="foot-link">
              Alba Studios
            </a>{" "}
            · {ubicacion.split(",")[0]} · 2026
          </span>
        </div>

        <div className="hidden justify-between gap-3 text-[13px] text-[#8F857A] lg:flex">
          <span>
            © 2026 Albora · de{" "}
            <a
              href={albaStudiosUrl}
              target="_blank"
              rel="noopener"
              className="text-[#8F857A] no-underline hover:text-white hover:underline"
            >
              Alba Studios
            </a>
          </span>
          <span>Hecho en Puerto Vallarta</span>
        </div>
      </div>
    </footer>
  );
}
