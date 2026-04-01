"use client";

import Image from "next/image";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

interface DivisionSliderProps {
  images: string[];
  alt: string;
}

export default function DivisionSlider({ images, alt }: DivisionSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      drag: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;

        const clearNextTimeout = () => clearTimeout(timeout);

        const nextTimeout = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => slider.next(), 2000);
        };

        slider.on("created", nextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationStarted", clearNextTimeout);
      },
    ],
  );

  return (
    <div ref={sliderRef} className="keen-slider h-full w-full">
      {images.map((src, idx) => (
        <div
          key={src}
          className="keen-slider__slide relative min-w-full h-full overflow-hidden"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 50vw, 40vw"
            className={`object-cover object-center transition-transform ease-out ${
              currentSlide === idx ? "scale-100 duration-3000" : "scale-110"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
