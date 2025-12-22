import ExperienceSection from "@/components/ExperienceSection";
import ExperienceSection2 from "@/components/ExperienceSection2";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros | NRV Ingeniería",
  description:
    "NRV: 12 años liderando proyectos de construcción, infraestructura y edificación. Ofrecemos soluciones de alto impacto y arrendamiento de maquinaria moderna.",
};

const heroImages = ["/images/hero/nosotros/slider2.jpg"];

export default function Nosotros() {
  return (
    <>
      <Hero
        images={heroImages}
        caption={
          <>
            <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Somos una empresa líder <br /> en construcción y maquinaria
            </h1>
          </>
        }
      />
      <section>
        <div className="py-8 px-4 lg:px-12 xl:px-16 lg:py-14 xl:py-16">
          <h2 className="mb-6 text-2xl lg:text-3xl font-bold text-[#30A589]">
            Historia
          </h2>
          <p className="text-sm leading-relaxed text-white">
            Desde nuestros inicios en 2014, en NRV hemos trabajado con pasión y
            compromiso para convertirnos en un referente en el sector de la
            construcción y el arrendamiento de maquinaria. Lo que comenzó como
            un proyecto con visión de crecimiento, hoy es una empresa sólida que
            ha participado en diversas obras de infraestructura, edificación y
            desarrollo urbano.
          </p>
          <br />
          <p className="text-sm leading-relaxed text-white">
            A lo largo de los años, hemos evolucionado y adoptado tecnologías
            innovadoras, expandiendo nuestros servicios para ofrecer soluciones
            eficientes y sostenibles a nuestros clientes. Cada proyecto es un
            testimonio de nuestra dedicación, calidad y capacidad para
            transformar espacios y generar impacto en las comunidades.
          </p>
          <br />
          <p className="text-sm leading-relaxed text-white">
            Seguimos avanzando con el mismo espíritu que nos vio nacer:
            construyendo con excelencia, innovando con responsabilidad y creando
            un futuro sólido para las próximas generaciones.
          </p>
        </div>
      </section>
      <ExperienceSection
        columnReverse
        imageUrl="/images/home/experiencia.jpg"
        content={
          <>
            <h2 className="mb-2 text-2xl lg:text-3xl font-bold text-[#005944]">
              Visión
            </h2>

            <p className="mb-4 text-sm leading-relaxed text-black">
              Ejecución de obra que incluye el apego a la normativa vigente,
              respetando el equilibrio ecológico y promoviendo la sana
              competencia entre empresas y la contratación de mano de obra que
              permita la generación de empleos.
            </p>

            <h2 className="mb-2 text-2xl lg:text-3xl font-bold text-[#005944]">
              Misión
            </h2>

            <p className="mb-4 text-sm leading-relaxed text-black">
              Construir infraestructura que sume al esfuerzo del progreso
              general en nuestro entorno.
            </p>

            <h2 className="mb-2 text-2xl lg:text-3xl font-bold text-[#005944]">
              Valores
            </h2>

            <p className="mb-4 text-sm leading-relaxed text-black">
              Dignidad, honestidad, Creatividad, competencia y desarrollo
            </p>
          </>
        }
      />
      <TeamSection />
      <ExperienceSection2
        imageUrl="/images/nosotros/experiencia2.jpg"
        content={
          <div className="flex flex-col">
            <h2 className="mb-4 text-2xl lg:text-3xl font-bold text-white">
              Datos de la empresa
            </h2>
            <p className="text-sm leading-relaxed text-white font-bold mb-4">
              NRV INGENIERíA S.A. DE C.V.
            </p>
            <div className="flex gap-4 md:justify-evenly lg:block">
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-white">
                  Fecha de Constitución: <br />
                  08 de agosto de 2014
                </p>
                <p className="lg:mb-4">
                  Correo electrónico:
                  <br />
                  adresle@hotmail.com
                  <br />
                  nrving@hotmail.com
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-white">
                  Ciudad de Registro RPPC:
                  <br /> Tuxtla Gutiérrez, Chiapas
                </p>
                <p className="text-sm leading-relaxed text-white">
                  Contacto: <br /> 961 158 32 56 <br /> 961 243 11 43
                </p>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}
