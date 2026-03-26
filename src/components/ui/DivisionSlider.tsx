"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface DivisionSliderProps {
  images: string[];
  alt: string;
}

export default function DivisionSlider({ images, alt }: DivisionSliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      drag: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;

        const clearNextTimeout = () => clearTimeout(timeout);

        const nextTimeout = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => slider.next(), 3000);
        };

        slider.on("created", nextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationStarted", clearNextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider h-full w-full">
      {images.map((src) => (
        <div key={src} className="keen-slider__slide relative min-w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 50vw, 40vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
