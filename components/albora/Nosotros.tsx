import Image from "next/image";
import PhotoPlaceholder from "./PhotoPlaceholder";
import WhatsAppLink from "./WhatsAppLink";
import { albaStudiosUrl, waLinkGeneral } from "@/lib/albora-config";
import { getPublicImage } from "@/lib/public-image";

// Sube las fotos y aparecen solas, sin tocar código:
// public/images/miguel.jpeg, public/images/anthony.jpeg (retratos, desktop)
const miguel = getPublicImage("/images/miguel.jpeg");
const anthony = getPublicImage("/images/anthony.jpeg");

export default function Nosotros() {
  return (
    <section id="nosotros" className="px-5 py-14 lg:px-6 lg:py-26">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
        {/* Desktop: encabezado a dos columnas */}
        <div className="hidden items-end justify-between gap-6 lg:flex">
          <div className="flex flex-col gap-3.5">
            <span className="self-start rounded-full border border-line px-3.5 py-1.5 text-xs font-bold uppercase tracking-[3px] text-muted">
              Quiénes somos
            </span>
            <h2 className="m-0 font-display text-[60px] uppercase leading-none">
              La gente detrás
              <br />
              de Albora.
            </h2>
          </div>
          <div className="flex max-w-[380px] flex-col items-start gap-3.5">
            <p className="m-0 text-muted">
              Somos de Puerto Vallarta y cuando nos escribes, te contesta uno de
              nosotros dos.
            </p>
            <WhatsAppLink
              location="nosotros"
              href={waLinkGeneral}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4.5 text-sm font-bold text-white"
            >
              Platica con nosotros
            </WhatsAppLink>
          </div>
        </div>

        {/* Mobile: encabezado simple */}
        <div className="flex flex-col gap-3.5 lg:hidden">
          <p className="m-0 text-sm font-bold uppercase tracking-[2px] text-barber-red">
            Quién está detrás
          </p>
          <h2 className="m-0 font-display text-[clamp(34px,8vw,50px)] uppercase leading-none">
            Somos de aquí y nos puedes escribir
          </h2>
        </div>

        {/* Desktop: 3 columnas (Miguel, Anthony, cita) */}
        <div className="hidden grid-cols-3 gap-4 lg:grid">
          <div className="relative h-[520px] overflow-hidden rounded-3xl">
            {miguel.exists ? (
              <Image
                src={miguel.src}
                alt="Miguel González"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            ) : (
              <PhotoPlaceholder label="[FOTO DE MIGUEL · B/N]" className="absolute inset-0" />
            )}
            <div className="absolute inset-x-3.5 bottom-3.5 flex flex-col rounded-2xl bg-white/85 px-4 py-3.5 leading-tight backdrop-blur-[10px]">
              <b className="text-lg">Miguel González</b>
              <span className="text-sm text-[#5E554B]">Cofundador</span>
            </div>
          </div>
          <div className="relative h-[520px] overflow-hidden rounded-3xl">
            {anthony.exists ? (
              <Image
                src={anthony.src}
                alt="Anthony Salazar"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            ) : (
              <PhotoPlaceholder label="[FOTO DE ANTHONY · B/N]" className="absolute inset-0" />
            )}
            <div className="absolute inset-x-3.5 bottom-3.5 flex flex-col rounded-2xl bg-white/85 px-4 py-3.5 leading-tight backdrop-blur-[10px]">
              <b className="text-lg">Anthony Salazar</b>
              <span className="text-sm text-[#5E554B]">Cofundador</span>
            </div>
          </div>
          <div className="flex h-[520px] flex-col justify-between rounded-3xl bg-ink p-9 text-cream">
            <span aria-hidden="true" className="font-display text-[120px] leading-[0.7] text-brass">
              &ldquo;
            </span>
            <p className="m-0 font-display text-[38px] uppercase leading-[1.08]">
              Tú dedícate a cortar. De la agenda nos encargamos nosotros.
            </p>
            <div className="flex items-center justify-between gap-3 border-t border-[#3A352F] pt-4.5">
              <span className="text-sm text-muted-dark">Miguel y Anthony</span>
              <a
                href={albaStudiosUrl}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-cream px-3 py-1.5 text-[13px] font-bold text-ink no-underline hover:underline"
              >
                de Alba Studios
              </a>
            </div>
          </div>
        </div>

        {/* Mobile: texto + cita (sin foto) */}
        <div className="flex flex-col gap-6 lg:hidden">
          <div className="flex flex-col gap-3.5">
            <p className="m-0 text-lg text-[#3E3832]">
              Somos Miguel y Anthony, de Puerto Vallarta. Llevamos años haciendo
              software y ahora queremos que tu agenda trabaje para ti, no al revés.
            </p>
            <a
              href={albaStudiosUrl}
              target="_blank"
              rel="noopener"
              className="inline-block self-start rounded-full border border-line-light bg-white px-3.5 py-2 text-sm font-bold text-ink no-underline hover:underline"
            >
              Albora es parte de Alba Studios
            </a>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-ink p-7 text-cream">
            <span aria-hidden="true" className="font-display text-7xl leading-[0.7] text-brass">
              &ldquo;
            </span>
            <p className="m-0 font-display text-[28px] uppercase leading-[1.1]">
              Tú dedícate a cortar. De la agenda nos encargamos nosotros.
            </p>
            <div className="flex items-center justify-between gap-3 border-t border-[#3A352F] pt-3.5">
              <span className="text-sm text-muted-dark">Miguel y Anthony</span>
              <a
                href={albaStudiosUrl}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-cream px-3 py-1.5 text-[13px] font-bold text-ink no-underline hover:underline"
              >
                de Alba Studios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
