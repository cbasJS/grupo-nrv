"use client";

import Image from "next/image";
import { values } from "@/data/new-home";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { ref: textRef, visible: textVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, visible: cardsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-10 px-4 lg:px-12 xl:px-16 lg:py-16 bg-[#F3EBDD]">
      <div className="lg:flex lg:justify-between lg:items-center lg:gap-12">
        <div ref={textRef}>
          <p
            className={`uppercase mb-1 ${
              textVisible ? "animate-nrv-fade" : "opacity-0"
            }`}
            style={{
              fontFamily: "var(--font-roboto-sans)",
              fontWeight: 400,
              color: "#2B2B2B",
              fontSize: "clamp(10px, 2vw, 24px)",
            }}
          >
            Sobre Nosotros
          </p>
          <h2
            className={`font-bold mb-5 leading-snug ${
              textVisible ? "animate-nrv-rise" : "opacity-0"
            }`}
            style={{
              animationDelay: textVisible ? "120ms" : undefined,
              fontFamily: "var(--font-roboto-sans)",
              fontWeight: 700,
              color: "#009951",
              fontSize: "clamp(26px, 5vw, 64px)",
              lineHeight: 1.1,
            }}
          >
            Más de una década
            <br />
            <span className="whitespace-nowrap">construyendo el futuro</span>
          </h2>
          <p
            className={`leading-relaxed mb-3 ${
              textVisible ? "animate-nrv-rise" : "opacity-0"
            }`}
            style={{
              fontFamily: "var(--font-roboto-sans)",
              fontWeight: 400,
              color: "#2B2B2B",
              fontSize: "clamp(14px, 2vw, 24px)",
              animationDelay: textVisible ? "240ms" : undefined,
            }}
          >
            Somos un grupo empresarial dedicado a ofrecer soluciones integrales en
            construcción, transporte, maquinaria pesada y el sector agropecuario.
          </p>
          <p
            className={`leading-relaxed mb-8 lg:mb-0 ${
              textVisible ? "animate-nrv-rise" : "opacity-0"
            }`}
            style={{
              fontFamily: "var(--font-roboto-sans)",
              fontWeight: 400,
              color: "#2B2B2B",
              fontSize: "clamp(14px, 2vw, 24px)",
              animationDelay: textVisible ? "340ms" : undefined,
            }}
          >
            Nuestra experiencia y compromiso nos han posicionado como un referente
            en el sector.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-4">
          {values.map((value, idx) => (
          <div
            key={value.id}
            className={`bg-white rounded-lg flex items-center gap-6 lg:gap-8 shadow-sm group cursor-default px-4 py-3 lg:px-6 lg:py-4 lg:max-w-135 lg:min-w-135 ${
              cardsVisible ? "animate-nrv-slide-left" : "opacity-0"
            }`}
            style={{ animationDelay: cardsVisible ? `${idx * 150}ms` : undefined }}
          >
            <Image
              src={value.icon}
              alt={value.title}
              width={36}
              height={36}
              className="shrink-0 object-contain w-8 h-8 lg:w-9 lg:h-9"
            />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontWeight: 700,
                  color: "#010019",
                }}
                className="text-[12px] lg:text-2xl group-hover:text-[#216C36] transition-colors duration-300"
              >
                {value.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontWeight: 400,
                  color: "#757575",
                }}
                className="text-[10px] lg:text-base mt-0.5"
              >
                <span className="lg:hidden">{value.description}</span>
                <span className="hidden lg:inline">
                  {value.descriptionLines[0]}
                  <br />
                  {value.descriptionLines[1]}
                </span>
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
