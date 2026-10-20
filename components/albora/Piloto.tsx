import WhatsAppLink from "./WhatsAppLink";
import { cuposLibres, waLinkPiloto } from "@/lib/albora-config";

function IconSilla({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 3h10v7H7z" />
      <path d="M5 10h14v4H5z" />
      <path d="M12 14v4M8 21h8M12 18v3" />
    </svg>
  );
}

const beneficios = [
  {
    titulo: "60 días acompañándote",
    detalle: "Te ayudamos a que tus clientes se acostumbren a agendar solos.",
    icon: "M12 7v5l3 2",
    extra: <circle cx="12" cy="12" r="9" />,
  },
  {
    titulo: "Configuración incluida",
    detalle: "Armamos todo y pasamos tus citas actuales. Sin costo extra.",
    icon: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z",
  },
  {
    titulo: "Si no te convence, te regresamos tu dinero",
    detalle: "Garantía de devolución en tu primer mes.",
    icon: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z M9 12l2 2 4-4",
  },
];

export default function Piloto() {
  const libres = Math.max(0, Math.min(5, cuposLibres));
  const cuposTexto =
    libres === 0
      ? "Cupos llenos por ahora"
      : libres === 1
        ? "Queda 1 lugar de 5"
        : `Quedan ${libres} de 5 lugares`;

  return (
    <section id="piloto" className="px-5 py-14 lg:px-6 lg:py-26">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 rounded-[32px] bg-barber-red px-6 py-10 text-white lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-14 lg:py-14">
        <div className="flex flex-col gap-4 lg:col-span-7 lg:gap-5">
          <span className="self-start rounded-full border border-white/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[3px] text-white">
            Piloto fundador
          </span>
          <h2 className="m-0 font-display text-[clamp(38px,9vw,76px)] uppercase leading-[0.95] lg:leading-[0.95]">
            Solo 5 lugares
            <br className="hidden lg:inline" /> para empezar.
          </h2>
          <p className="m-0 max-w-[520px] text-lg text-[#FBE3DC] lg:text-[19px]">
            Queremos hacerlo bien y con calma, así que arrancamos con pocos negocios
            para atender a cada uno de cerca.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => {
                const libre = i < libres;
                return (
                  <div
                    key={i}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white lg:h-[50px] lg:w-[50px] lg:rounded-full"
                    style={{
                      background: libre ? "#FFFFFF" : "transparent",
                      color: libre ? "#B2342A" : "#FFFFFF",
                    }}
                  >
                    <IconSilla />
                  </div>
                );
              })}
            </div>
            <span className="text-[15px] font-bold lg:text-base">{cuposTexto}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-[20px] bg-white px-5.5 py-6 text-ink lg:col-span-5 lg:gap-4.5 lg:rounded-3xl lg:px-8 lg:py-8">
          {beneficios.map((b) => (
            <div key={b.titulo} className="flex items-start gap-3">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B2342A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="flex-none"
              >
                {b.extra}
                <path d={b.icon} />
              </svg>
              <div>
                <b className="text-lg">{b.titulo}</b>
                <br />
                <span className="text-muted">{b.detalle}</span>
              </div>
            </div>
          ))}
          <WhatsAppLink
            location="piloto"
            href={waLinkPiloto}
            target="_blank"
            rel="noopener"
            className="cta-hover flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-wa-green text-lg font-bold text-white lg:rounded-full lg:text-[17px]"
          >
            Quiero apartar mi lugar
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
