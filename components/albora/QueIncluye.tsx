import Image from "next/image";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { servicios } from "@/lib/albora-content";
import { getPublicImage } from "@/lib/public-image";

// Sube la foto como public/images/manos.jpg y aparecerá sola, sin tocar código.
const { src: manosSrc, exists: manosExists } = getPublicImage("/images/manos.jpg");

function Icon({ path }: { path: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export default function QueIncluye() {
  return (
    <section id="que-incluye" className="px-5 py-16 lg:px-6 lg:py-[104px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
        {/* Desktop: encabezado a dos columnas */}
        <div className="hidden items-end justify-between gap-6 lg:flex">
          <div className="flex flex-col gap-3.5">
            <span className="self-start rounded-full border border-line px-3.5 py-1.5 text-xs font-bold uppercase tracking-[3px] text-muted">
              Qué incluye
            </span>
            <h2 className="m-0 font-display text-[60px] uppercase leading-none">
              Servicio simple.
              <br />
              Todo incluido.
            </h2>
          </div>
          <p className="m-0 max-w-[360px] text-muted">
            Sin planes raros ni funciones que no vas a usar. Esto es lo que recibes
            desde el primer día.
          </p>
        </div>

        {/* Mobile: estilo pizarrón de precios */}
        <div className="lg:hidden">
          <div className="rounded-[22px] border-[6px] border-[#3A2E22] bg-ink px-5 py-8 text-cream">
            <div className="mb-6 flex flex-col gap-1.5 text-center">
              <p className="m-0 text-[13px] font-bold uppercase tracking-[3px] text-brass">
                Lista de servicios
              </p>
              <h2 className="m-0 font-display text-[clamp(34px,8vw,52px)] uppercase leading-none">
                Qué incluye
              </h2>
            </div>
            <ul className="m-0 mx-auto flex max-w-[720px] list-none flex-col gap-[18px] p-0">
              {servicios.map((s) => (
                <li key={s.titulo} className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] border-[1.5px] border-[#4A443D] text-brass">
                    <Icon path={s.icon} />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[17px] font-bold">{s.titulo}</span>
                      <span
                        aria-hidden="true"
                        className="min-w-4 flex-1 -translate-y-1 border-b-2 border-dotted border-[#5A5249]"
                      />
                      <span className="font-display text-sm uppercase tracking-[1px] text-brass">
                        Incluido
                      </span>
                    </div>
                    <span className="text-[15px] text-muted-dark">{s.detalle}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop: bento grid */}
        <div className="hidden grid-cols-4 grid-rows-[250px_250px] gap-4 lg:grid">
          <div className="relative row-span-2 overflow-hidden rounded-[24px]">
            {manosExists ? (
              <Image
                src={manosSrc}
                alt="Manos con máquina, detalle"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
            ) : (
              <PhotoPlaceholder
                dark
                label="[FOTO: MANOS CON MÁQUINA, DETALLE]"
                className="absolute inset-0"
              />
            )}
            <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3.5">
              <div className="flex flex-col leading-tight">
                <b className="text-base">Tu agenda, atendida</b>
                <span className="text-[13px] text-muted">Configurada con tus reglas</span>
              </div>
              <span className="rounded-full bg-barber-red px-2.5 py-1 font-display text-[13px] uppercase tracking-[1px] text-white">
                Incluido
              </span>
            </div>
          </div>
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="flex flex-col justify-between gap-3 rounded-[24px] border border-line-light bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-ink text-brass">
                  <Icon path={s.icon} />
                </span>
                <span className="text-xs font-bold uppercase tracking-[1.5px] text-muted">
                  Incluido
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <b className="text-xl leading-tight">{s.titulo}</b>
                <span className="text-[15px] text-muted">{s.detalle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
