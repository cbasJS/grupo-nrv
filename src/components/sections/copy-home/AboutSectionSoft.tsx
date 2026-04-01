"use client";

import Image from "next/image";
import { values } from "@/data/new-home";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import UnionIcon from "@/components/ui/icons/UnionIcon";
import TeamIcon from "@/components/ui/icons/TeamIcon";
import ExcelenciaIcon from "@/components/ui/icons/ExcelenciaIcon";

export default function AboutSectionSoft() {
  const { ref: textRef, visible: textVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, visible: cardsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-10 px-4 lg:px-12 xl:px-16 lg:py-16 bg-[#FFFFFF]">
      <div className="lg:flex lg:justify-between lg:items-center lg:gap-12">
        <div ref={textRef}>
          <p
            className={`uppercase mb-1 ${
              textVisible ? "animate-nrv-fade" : "opacity-0"
            }`}
            style={{
              fontFamily: "var(--font-roboto-sans)",
              fontWeight: 400,
              color: "#C8C0B2",
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
              color: "#B5AA96",
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
              color: "#A09587",
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
              color: "#A09587",
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
            className={`bg-[#FAF8F5] rounded-lg flex items-center gap-6 lg:gap-8 shadow-sm group cursor-default px-4 py-3 lg:px-6 lg:py-4 lg:max-w-135 lg:min-w-135 border border-[#EDE9E3] ${
              cardsVisible ? "animate-nrv-slide-left" : "opacity-0"
            }`}
            style={{ animationDelay: cardsVisible ? `${idx * 150}ms` : undefined }}
          >
            {value.id === 1 ? (
              <UnionIcon color="#B5AA96" width={32} height={40} className="shrink-0" />
            ) : value.id === 2 ? (
              <TeamIcon color="#B5AA96" width={32} height={36} className="shrink-0" />
            ) : value.id === 3 ? (
              <ExcelenciaIcon color="#B5AA96" width={32} height={32} className="shrink-0" />
            ) : (
              <Image
                src={value.icon}
                alt={value.title}
                width={36}
                height={36}
                className="shrink-0 object-contain w-8 h-8 lg:w-9 lg:h-9"
              />
            )}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontWeight: 700,
                  color: "#A09587",
                }}
                className="text-[12px] lg:text-2xl group-hover:text-[#B5AA96] transition-colors duration-300"
              >
                {value.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontWeight: 400,
                  color: "#C8C0B2",
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
