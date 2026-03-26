import ExperienceSection from "@/components/sections/ExperienceSection";
import ExperienceSection2 from "@/components/sections/ExperienceSection2";
import Hero from "@/components/sections/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arrendamiento | Grupo NRV",
  description:
    "12 años liderando proyectos de construcción, infraestructura y edificación. Ofrecemos soluciones de alto impacto y arrendamiento de maquinaria moderna.",
};

const heroImages = [
  "/images/hero/arrendamiento/slider3.jpg",
  "/images/hero/arrendamiento/slider2.jpg",
];

export default function Arrendamiento() {
  return (
    <>
      <Hero
        images={heroImages}
        caption={
          <>
            <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Arrendamiento de maquinaria
            </h1>
            <p className="text-white mt-1.5 md:mt-3 lg:mt-4">
              Ofrecemos un servicio de arrendamiento{" "}
              <br className="md:hidden" /> de maquinaria
              <br className="hidden md:block" /> confiable y eficiente,
              brindando equipos de última
              <br className="hidden md:block" /> generación para garantizar el
              máximo rendimiento en
              <br className="hidden md:block" /> cada obra.
            </p>
          </>
        }
      />
      <ExperienceSection
        imageUrl="/images/arrendamiento/experiencia.jpg"
        bgColor="#232323"
        content={
          <>
            <h2 className="mb-6 text-2xl lg:text-3xl font-bold text-[#30A589]">
              Potencia tus proyectos
              <br /> con la mejor maquinaria
            </h2>

            <p className="mb-2 text-sm leading-relaxed text-white">
              En NRV ofrecemos un servicio de arrendamiento de maquinaria,
              dentro y fuera del estado, confiable y eficiente, brindando
              equipos de última generación para garantizar el máximo rendimiento
              en cada obra.
            </p>
            <p className="mb-2 text-sm leading-relaxed text-white">
              <strong>Amplia flota:</strong> Excavadoras, retroexcavadoras,
              compactadoras, grúas y más.
            </p>
            <p className="mb-2 text-sm leading-relaxed text-white">
              <strong>Equipos de alto desempeño:</strong> Máquinas modernas,
              revisadas y listas para operar.
            </p>
            <p className="mb-2 text-sm leading-relaxed text-white">
              <strong>Flexibilidad y disponibilidad:</strong> Opciones de renta
              por día, semana o mes.
            </p>
            <p className="mb-2 text-sm leading-relaxed text-white">
              <strong>Soporte técnico especializado:</strong> Mantenimiento y
              asistencia garantizada.
            </p>

            <p className="text-sm leading-relaxed text-white">
              <strong>Servicios:</strong> arrendamiento de maquinaria,
              transporte de maquinaria dentro y fuera del estado, mantenimiento.
            </p>
          </>
        }
      />
      <ExperienceSection2
        imageUrl="/images/arrendamiento/experiencia2.jpg"
        bgColor="#009951"
        content={
          <div className="font-bold text-white flex justify-center text-2xl lg:text-3xl h-full items-center">
            Optimiza costos, aumenta
            <br /> tu productividad y trabaja
            <br /> con la mejor maquinaria
            <br /> del mercado.
          </div>
        }
      />
    </>
  );
}
