"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showDots, setShowDots] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setLoaded(true);
      setShowDots(slider.track.details.maxIdx > 0);
    },
    updated(slider) {
      setShowDots(slider.track.details.maxIdx > 0);
    },
    slides: {
      perView: 1.5,
      spacing: 25,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 35,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 35,
        },
      },
    },
  });

  const dotsCount =
    instanceRef.current?.track.details.maxIdx !== undefined
      ? instanceRef.current.track.details.maxIdx + 1
      : 0;

  return (
    <section className="py-8 pl-4 lg:pl-12 xl:pl-16 lg:py-14 xl:py-16">
      <div className="mx-auto">
        <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#30A589] mb-5">
          Proyectos destacados
        </h2>

        <div ref={sliderRef} className="keen-slider">
          {projects.map((project) => (
            <div
              key={project.id}
              className="keen-slider__slide overflow-hidden"
            >
              <div className="relative h-56 md:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="eager"
                  className="object-cover"
                />
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {loaded && showDots && instanceRef.current && (
          <div className="flex justify-center gap-3 mt-4">
            {Array.from({ length: dotsCount }, (_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                aria-label={`Ir a proyecto ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition ${
                  currentSlide === idx ? "bg-[#216C36]" : "bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
