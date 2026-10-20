"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoPlaceholder from "./PhotoPlaceholder";
import WhatsAppLink from "./WhatsAppLink";
import { pasos } from "@/lib/albora-content";
import { waLinkGeneral } from "@/lib/albora-config";

const iconosTurno = [
  "M3 5h18v16H3zM16 3v4M8 3v4M3 10h18M8 14h3M8 17h6",
  "M6 2h12v20H6zM11 18h2M9.5 10l2 2 3.5-4",
  "M7 11V7a5 5 0 0 1 10 0v4M3 11h4v6H3zM17 11h4v6h-4zM19 17v1a3 3 0 0 1-3 3h-3",
];

type PasoImage = { src: string; exists: boolean };

export default function ComoFunciona({
  pasoImages,
}: {
  pasoImages: [PasoImage, PasoImage, PasoImage];
}) {
  const [paso, setPaso] = useState(0);
  const actual = pasos[paso];
  const actualImage = pasoImages[paso];

  return (
    <section
      id="como-funciona"
      className="rounded-[32px] bg-ink px-5 py-14 text-cream lg:px-14 lg:py-18"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 lg:gap-11">
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="flex flex-col gap-3.5 lg:col-span-7">
            <span className="self-start rounded-full border border-[#3A352F] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[3px] text-muted-dark">
              Cómo funciona
            </span>
            <h2 className="m-0 font-display text-[clamp(36px,8vw,60px)] uppercase leading-none">
              Tú no le mueves
              <br />
              <span className="text-brass">a nada.</span>
            </h2>
          </div>
          <p className="m-0 text-muted-dark lg:col-span-4 lg:col-start-9">
            Tres pasos y tu agenda ya camina sola. Tú solo nos cuentas cómo trabajas.
          </p>
        </div>

        {/* Desktop: pestañas + imagen que cambia */}
        <div className="hidden grid-cols-12 gap-8 lg:grid lg:items-stretch">
          <div className="col-span-5 flex flex-col gap-2.5">
            {pasos.map((p, i) => {
              const abierto = i === paso;
              return (
                <button
                  key={p.n}
                  type="button"
                  onClick={() => setPaso(i)}
                  aria-expanded={abierto}
                  className="flex w-full flex-col gap-2.5 rounded-[18px] border border-[#2E2A26] px-6 py-5.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
                  style={{ background: abierto ? "#2A2622" : "transparent" }}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="flex items-baseline gap-4">
                      <span
                        className="font-display text-xl"
                        style={{ color: abierto ? "var(--color-brass)" : "#8F8577" }}
                      >
                        {p.n}
                      </span>
                      <span
                        className="text-[22px] font-bold"
                        style={{ color: abierto ? "#FFFFFF" : "#A89E92" }}
                      >
                        {p.titulo}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#6E665D]"
                      style={{ color: abierto ? "#FFFFFF" : "#A89E92" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={abierto ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"} />
                      </svg>
                    </span>
                  </span>
                  {abierto ? (
                    <span className="pl-10 text-base text-muted-dark">{p.texto}</span>
                  ) : null}
                </button>
              );
            })}
            <WhatsAppLink
              location="como_funciona"
              href={waLinkGeneral}
              target="_blank"
              rel="noopener"
              className="cta-hover mt-3.5 inline-flex min-h-13 items-center gap-2.5 self-start rounded-full bg-wa-green px-6 text-base font-bold text-white"
            >
              Quiero mi agenda así
            </WhatsAppLink>
          </div>
          <div
            role="img"
            aria-label={actual.foto}
            className="relative col-span-7 min-h-[480px] overflow-hidden rounded-3xl"
          >
            {actualImage.exists ? (
              <Image
                src={actualImage.src}
                alt={actual.foto}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            ) : (
              <PhotoPlaceholder dark label={`[${actual.foto}]`} className="absolute inset-0" />
            )}
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
              <span className="font-display text-[160px] leading-[0.8] text-cream/90">
                {actual.n}
              </span>
              <span className="max-w-[260px] rounded-2xl border border-white/18 bg-white/10 px-4 py-3 text-sm text-[#E4DCD0] backdrop-blur-[10px]">
                {actual.pie}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile/tablet: tarjetas estáticas */}
        <div className="grid gap-4 lg:hidden" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {pasos.map((p, i) => (
            <div
              key={p.n}
              className="flex flex-col gap-3 rounded-[18px] border border-[#E2D8C9] bg-white p-5.5 text-ink"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-ink px-3 py-1.5 font-display text-[15px] uppercase tracking-[1.5px] text-white">
                  Turno {i + 1}
                </span>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B2342A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={iconosTurno[i]} />
                </svg>
              </div>
              <h3 className="m-0 text-xl leading-tight">{p.titulo}</h3>
              <p className="m-0 text-muted">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
