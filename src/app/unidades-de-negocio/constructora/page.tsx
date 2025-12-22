import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Constructora | NRV Ingeniería",
  description:
    "NRV: 12 años liderando proyectos de construcción, infraestructura y edificación. Ofrecemos soluciones de alto impacto y arrendamiento de maquinaria moderna.",
};

const heroImages = [
  "/images/hero/constructora/slider2.jpg",
  "/images/hero/constructora/slider3.jpg",
];

export default function Arrendamiento() {
  return (
    <>
      <Hero
        images={heroImages}
        caption={
          <>
            <h1 className="font-bold text-white text-xl lg:text-4xl xl:text-5xl">
              Constructora
            </h1>
            <p className="text-white text-xs md:text-sm lg:text-base xl:text-2xl mt-1.5 md:mt-3 lg:mt-4">
              Cada proyecto es un testimonio de nuestro profesionalismo,
              <br />
              innovación y pasión por la construcción. Somos
              <br /> experiencia, somos confianza, somos el socio ideal para tus
              proyectos
            </p>
          </>
        }
      />
    </>
  );
}
