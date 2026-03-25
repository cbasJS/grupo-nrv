"use client";

import { useState } from "react";
import { useKeenSlider, TrackDetails } from "keen-slider/react";
import Image from "next/image";

export type Props = {
  images: string[];
  caption: React.ReactNode;
};

const Hero: React.FC<Props> = ({ images, caption }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [details, setDetails] = useState<TrackDetails | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      detailsChanged(s) {
        setDetails(s.track.details);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;

          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          if (slider.track.details.slides.length <= 1) return;

          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });

          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });

          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  function scaleStyle(idx: number) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  return (
    <div className="navigation-wrapper">
      <div
        ref={sliderRef}
        className="keen-slider zoom-out w-full lg:h-[450px] md:h-96 h-80 xl:h-[600px]"
      >
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide zoom-out__slide">
            <div style={scaleStyle(idx)}>
              <Image
                src={src}
                alt="Slider Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
                quality={100}
                loading={idx === 0 ? "eager" : "lazy"}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && images.length > 1 && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={"dot" + (currentSlide === idx ? " active" : "")}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {loaded && instanceRef.current && (
        <div className="absolute bottom-12 left-4 md:bottom-16 lg:left-12 xl:left-16 lg:bottom-28">
          {caption}
        </div>
      )}
    </div>
  );
};

export default Hero;
