"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState } from "react";
import { clients } from "@/data/clients";

export default function ClientsSlider() {
  const [, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      perView: 2,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 40,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="w-full bg-white">
      <div className="py-8 px-4 lg:px-12 xl:px-16 lg:py-14 xl:py-16 relative">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#216C36] mb-8">
          Clientes que confían en nuestra experiencia
        </h2>

        <div className="relative flex items-center">
          {/* Flecha izquierda */}
          {loaded && instanceRef.current && (
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-0 z-10 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
              aria-label="Anterior"
            >
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                  stroke="#000"
                />
              </svg>
            </button>
          )}

          <div ref={sliderRef} className="keen-slider w-full mx-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="keen-slider__slide flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  style={{ width: "auto", height: "auto" }}
                  className="object-contain transition"
                />
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          {loaded && instanceRef.current && (
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute right-0 z-10 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
              aria-label="Siguiente"
            >
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                  stroke="#000"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
