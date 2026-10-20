const datos = [
  { numero: "5", texto: "Lugares en el piloto fundador" },
  { numero: "60", texto: "Días acompañándote" },
  { numero: "0", texto: "Apps que tus clientes descargan" },
];

export default function QueEsAlbora() {
  return (
    <section id="que-es-albora" className="px-5 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-7 text-center">
        <span className="rounded-full border border-line px-3.5 py-1.5 text-xs font-bold uppercase tracking-[3px] text-muted">
          Qué es Albora
        </span>
        <p className="m-0 text-2xl font-medium leading-[1.3] tracking-[-0.5px] text-ink lg:text-[38px]">
          En Albora creemos que tu tiempo es para la silla, no para el celular.{" "}
          <span className="text-[#8F857A]">
            Armamos tu agenda, tus clientes apartan su lugar solos y nosotros
            resolvemos lo que salga de lo normal.
          </span>
        </p>
        <div className="mt-8 grid w-full grid-cols-3 gap-6">
          {datos.map((dato, i) => (
            <div
              key={dato.texto}
              className={`flex flex-col items-center gap-1 ${
                i === 1 ? "border-x border-line" : ""
              }`}
            >
              <span className="font-display text-5xl leading-none lg:text-[72px]">
                {dato.numero}
              </span>
              <span className="text-sm text-muted">{dato.texto}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
