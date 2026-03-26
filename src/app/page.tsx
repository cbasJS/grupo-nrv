import { Metadata } from "next";
import HomeBanner from "@/components/sections/HomeBanner";
import DivisionsSection from "@/components/sections/DivisionsSection";
import AboutSection from "@/components/sections/AboutSection";
import NewHomeFooter from "@/components/sections/NewHomeFooter";

export const metadata: Metadata = {
  title: "Grupo NRV | Inicio",
  description:
    "Construimos, Transportamos, Producimos y Operamos con excelencia. Distintos sectores un mismo compromiso con la calidad.",
};

export default function NewHome() {
  return (
    <>
      <HomeBanner />
      <DivisionsSection />
      <AboutSection />
      <NewHomeFooter />
    </>
  );
}
