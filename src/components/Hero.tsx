"use client";

import { useState } from "react";
import {
  useKeenSlider,
  // KeenSliderPlugin,
  TrackDetails,
} from "keen-slider/react";
import Image from "next/image";

// const AdaptiveHeight: KeenSliderPlugin = (slider) => {
//   function updateHeight() {
//     slider.container.style.height =
//       slider.slides[slider.track.details.rel].offsetHeight + "px";
//   }
//   slider.on("created", updateHeight);
//   slider.on("slideChanged", updateHeight);
// };

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
          // 👉 Si solo hay 1 slide, no aplicar autoplay
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
    <>
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
                  quality={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )} */}
        {loaded && instanceRef.current && images.length > 1 && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
        {loaded && instanceRef.current && (
          <div className="absolute bottom-12 left-4 md:bottom-16 lg:left-12 xl:left-16 lg:bottom-28">
            {caption}
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;

/* =======================
   Arrow component
======================= */

// function Arrow(props: {
//   disabled: boolean;
//   left?: boolean;
//   onClick: (e: any) => void;
// }) {
//   const disabled = props.disabled ? " arrow--disabled" : "";
//   return (
//     <svg
//       onClick={props.onClick}
//       className={`arrow ${
//         props.left ? "arrow--left" : "arrow--right"
//       } ${disabled}`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       {props.left && (
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       )}
//       {!props.left && (
//         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//       )}
//     </svg>
//   );
// }
