import ClientsSlider from "@/components/sections/ClientsSlider";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import { Metadata } from "next";
import ExperienceSection2 from "@/components/sections/ExperienceSection2";

export const metadata: Metadata = {
  title: "Nrv Ingeniería | Grupo NRV",
  description:
    "12 años liderando proyectos de construcción, infraestructura y edificación. Ofrecemos soluciones de alto impacto y arrendamiento de maquinaria moderna.",
};

const heroImages = [
  "/images/hero/home/slider1.jpg",
  "/images/hero/home/slider2.jpg",
];

export default function Home() {
  return (
    <>
      <Hero
        images={heroImages}
        caption={
          <>
            <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Construyendo el futuro
              <br /> con calidad e innovación
            </h1>
          </>
        }
      />
      <FeaturedProjects />
      <ExperienceSection
        imageUrl="/images/home/experiencia.jpg"
        content={
          <>
            <h2 className="mb-6 text-2xl lg:text-3xl font-bold text-[#005944]">
              Nuestra experiencia
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-black">
              Con una trayectoria de 12 años, en NRV hemos dejado huella en el
              sector de la construcción, desarrollando proyectos de
              infraestructura y edificación que transforman comunidades y
              potencian el crecimiento económico. Nuestra experiencia se basa
              en:
            </p>

            <ul className="space-y-4 text-sm text-black">
              <li>
                - Obras de alto impacto, desde carreteras y puentes hasta
                edificaciones industriales y comerciales.
              </li>
              <li>
                - Arrendamiento de maquinaria con equipos modernos que optimizan
                la productividad en cada proyecto.
              </li>
              <li>
                - Compromiso con la calidad, seguridad y sostenibilidad,
                cumpliendo con las normativas más exigentes del sector.
              </li>
            </ul>
          </>
        }
      />
      <ClientsSlider />
      <ExperienceSection2
        imageUrl="/images/home/experiencia2.jpg"
        title={
          <>
            Amplia experiencia <br className="md:hidden" /> en la ejecución,{" "}
            <br /> seguimiento
            <br className="md:hidden" /> y control de:
          </>
        }
        content={
          <p>
            CONSTRUCCIÓN DE CARRETERAS, SUPERCARRETERAS Y CAMINOS ALIMENTADORES
            - PUENTES - PÁSOS A DESNIVEL - GASAS GEOMÉTRICAS - ELABORACIÓN DE
            PROYECTOS GEOMÉTRICOS - CONSTRUCCIÓN DE TERRACERÍAS Y PLATAFORMAS -
            CONSTRUCCIÓN DE OBRAS DE DRENAJE, LOSAS Y ALCANTARILLAS -
            CONSTRUCCIÓN DE PAVIMENTOS EN CARRETERAS DE ALTA ESPECIFICACIÓN
            (TIPO A2, TIPO A4) - SERVICIO DE CONTROL DE CALIDAD EN CARRETERAS
          </p>
        }
        // bgColor={undefined}
      />
    </>
  );
}
