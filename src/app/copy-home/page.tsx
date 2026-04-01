import { Metadata } from "next";
import HomeBannerSoft from "@/components/sections/copy-home/HomeBannerSoft";
import DivisionsSectionSoft from "@/components/sections/copy-home/DivisionsSectionSoft";
import AboutSectionSoft from "@/components/sections/copy-home/AboutSectionSoft";
import NewHomeFooterSoft from "@/components/sections/copy-home/NewHomeFooterSoft";

export const metadata: Metadata = {
  title: "Grupo NRV | Inicio",
  description:
    "Construimos, Transportamos, Producimos y Operamos con excelencia. Distintos sectores un mismo compromiso con la calidad.",
};

export default function NewHome() {
  return (
    <>
      <HomeBannerSoft />
      <DivisionsSectionSoft />
      <AboutSectionSoft />
      <NewHomeFooterSoft />
    </>
  );
}
