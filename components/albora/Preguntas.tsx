import { preguntas } from "@/lib/albora-content";

export default function Preguntas() {
  return (
    <section id="preguntas" className="px-5 py-14 lg:px-6 lg:py-26">
      <div className="mx-auto flex max-w-[820px] flex-col items-center gap-8 lg:gap-8">
        <span className="hidden self-center rounded-full border border-line px-3.5 py-1.5 text-xs font-bold uppercase tracking-[3px] text-muted lg:inline-block">
          Preguntas
        </span>
        <h2 className="m-0 text-center font-display text-[clamp(34px,8vw,60px)] uppercase leading-none">
          Lo que todos preguntan.
        </h2>
        <div className="flex w-full flex-col gap-3">
          {preguntas.map((p, i) => (
            <details
              key={p.pregunta}
              open={i === 0}
              className="rounded-[20px] border border-line-light bg-white px-5 lg:px-6.5"
            >
              <summary className="flex min-h-14 items-center justify-between gap-3 text-lg font-bold lg:min-h-16 lg:text-[19px]">
                {p.pregunta}
                <span className="faq-plus flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ink text-white lg:h-8.5 lg:w-8.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="m-0 mb-4 text-muted lg:mb-5">{p.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
