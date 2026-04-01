import Image from "next/image";
import { CSSProperties } from "react";

const headingStyle = (fontSize: string, textShadow: string): CSSProperties => ({
  fontFamily: "var(--font-syncopate)",
  fontWeight: 700,
  lineHeight: 1.1,
  fontSize,
  textShadow,
});

const subtitleStyle = (
  fontSize: string,
  textShadow: string,
): CSSProperties => ({
  fontFamily: "var(--font-roboto-condensed)",
  fontWeight: 600,
  color: "#C8C0B2",
  fontSize,
  textShadow,
});

export default function HomeBannerSoft() {
  return (
    <>
      {/* Mobile */}
      <div className="relative md:hidden h-80 w-full overflow-hidden">
        <div className="absolute inset-0 animate-nrv-ken-burns">
          <Image
            src="/images/new-home/banner_mobile_640x400_v2.jpg"
            alt="Grupo NRV"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#1a1208]/65 via-[#1a1208]/20 to-transparent" />
        <div className="absolute bottom-8 left-4 right-4">
          <h1
            className="text-white uppercase animate-nrv-rise"
            style={{
              ...headingStyle("28px", "0 2px 16px rgba(0,0,0,0.9)"),
              animationDelay: "200ms",
            }}
          >
            Grupo NRV
          </h1>
          <p
            className="mt-1 animate-nrv-rise"
            style={{
              ...subtitleStyle(
                "16px",
                "0 1px 12px rgba(0,0,0,0.95), 0 0 24px rgba(0,0,0,0.8)",
              ),
              animationDelay: "480ms",
            }}
          >
            Construimos, Transportamos, Producimos y<br /> Operamos con
            excelencia.
          </p>
          <p
            className="mt-1 text-white/75 animate-nrv-rise"
            style={{
              fontSize: "14px",
              textShadow: "0 1px 8px rgba(0,0,0,0.9)",
              animationDelay: "720ms",
            }}
          >
            Distintos sectores un mismo compromiso con la calidad.
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="relative hidden md:block h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 animate-nrv-ken-burns">
          <Image
            src="/images/new-home/banner_desktop_1920x600.jpg"
            alt="Grupo NRV"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-[#1a1208]/58 via-[#1a1208]/18 to-transparent" />
        <div className="absolute bottom-16 left-12 xl:left-16">
          <h1
            className="text-white uppercase animate-nrv-rise"
            style={{
              ...headingStyle("96px", "0 4px 32px rgba(0,0,0,0.8)"),
              animationDelay: "200ms",
            }}
          >
            Grupo NRV
          </h1>
          <p
            className="mt-2 max-w-3xl animate-nrv-rise"
            style={{
              ...subtitleStyle(
                "40px",
                "0 2px 20px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.7)",
              ),
              animationDelay: "500ms",
            }}
          >
            Construimos, Transportamos, Producimos
            <br /> y Operamos con excelencia.
          </p>
          <p
            className="mt-2 text-white/75 animate-nrv-rise"
            style={{
              fontSize: "20px",
              textShadow: "0 2px 12px rgba(0,0,0,0.9)",
              animationDelay: "750ms",
            }}
          >
            Distintos sectores un mismo compromiso con la calidad.
          </p>
        </div>
      </div>
    </>
  );
}
