"use client";

import Link from "next/link";
import Image from "next/image";
import { divisions } from "@/data/new-home";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import DivisionSlider from "@/components/ui/DivisionSlider";

export default function DivisionsSectionSoft() {
  const { ref: headerRef, visible: headerVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, visible: gridVisible } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-10 px-4 lg:px-12 xl:px-16 lg:py-16 bg-(--color-cream)">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-6 lg:mb-10">
        <p
          className={`uppercase mb-2 ${
            headerVisible ? "animate-nrv-fade" : "opacity-0"
          }`}
          style={{
            fontFamily: "var(--font-roboto-condensed)",
            fontWeight: 400,
            color: "var(--color-sand)",
            fontSize: "clamp(13px, 2.5vw, 32px)",
            letterSpacing: "0.12em",
          }}
        >
          Nuestras Divisiones
        </p>
        <h2
          className={`uppercase text-center ${
            headerVisible ? "animate-nrv-rise" : "opacity-0"
          }`}
          style={{
            fontFamily: "var(--font-syncopate)",
            fontWeight: 700,
            color: "var(--color-beige)",
            fontSize: "clamp(16px, 4vw, 40px)",
            animationDelay: headerVisible ? "120ms" : undefined,
            lineHeight: 1.15,
          }}
        >
          Un solo grupo,
          <br /> muchas fortalezas
        </h2>
      </div>

      {/* Cards apiladas */}
      <div ref={gridRef} className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
        {divisions.map((division, idx) => {
          const imageContainer = (
            <div className="relative w-full overflow-hidden rounded-t-sm h-55 md:h-90">
              {division.images.length > 1 ? (
                <DivisionSlider images={division.images} alt={division.label} />
              ) : (
                <Image
                  src={division.images[0]}
                  alt={division.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>
          );

          return (
            <div
              key={division.id}
              className={`flex flex-col group rounded-sm overflow-hidden ${
                gridVisible ? "animate-nrv-rise" : "opacity-0"
              }`}
              style={{
                animationDelay: gridVisible ? `${idx * 110}ms` : undefined,
              }}
            >
              {/* Image / Slider */}
              {division.route ? (
                <Link href={division.route} className="block">
                  {imageContainer}
                </Link>
              ) : (
                imageContainer
              )}

              {/* Text */}
              <div className="pt-3 pb-2 px-1 lg:pt-4">
                <p
                  className="uppercase leading-tight mb-1"
                  style={{
                    fontFamily: "var(--font-roboto-sans)",
                    fontWeight: 700,
                    color: "var(--color-beige)",
                    fontSize: "clamp(11px, 1.2vw, 14px)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {division.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-roboto-sans)",
                    fontWeight: 400,
                    color: "var(--color-copy)",
                    fontSize: "clamp(12px, 1.1vw, 14px)",
                    lineHeight: 1.3,
                  }}
                >
                  {division.description}
                </p>
                {division.route ? (
                  <Link
                    href={division.route}
                    className="inline-block mt-2 underline underline-offset-2 hover:text-(--color-beige) transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-roboto-sans)",
                      fontWeight: 400,
                      color: "var(--color-copy)",
                      fontSize: "clamp(11px, 1vw, 13px)",
                    }}
                  >
                    {division.link}
                  </Link>
                ) : (
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "var(--font-roboto-sans)",
                      fontWeight: 400,
                      color: "var(--color-copy)",
                      fontSize: "clamp(11px, 1vw, 13px)",
                    }}
                  >
                    {division.link}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
