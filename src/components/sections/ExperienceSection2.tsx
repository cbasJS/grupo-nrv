import Image from "next/image";

export type Props = {
  imageUrl: string;
  title?: React.ReactNode;
  content?: React.ReactNode;
  bgColor?: string;
};

export default function ExperienceSection2({
  imageUrl,
  title,
  content,
  bgColor,
}: Props) {
  const textBlockStyle = bgColor ? { backgroundColor: bgColor } : undefined;
  const textBlockClass = bgColor
    ? ""
    : "bg-[linear-gradient(270deg,#005944_100%,rgba(0,191,146,0.63)_100%)]";

  return (
    <section className="w-full">
      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="relative h-[420px] w-full">
          <Image src={imageUrl} alt="" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
          {title && (
            <h2 className="absolute top-10 left-4 right-4 text-white text-2xl font-bold leading-snug">
              {title}
            </h2>
          )}
        </div>

        <div
          className={`${textBlockClass} text-white px-4 py-8 text-sm leading-relaxed`}
          style={textBlockStyle}
        >
          {content}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-[60%_40%]">
        <div className="relative h-[560px]">
          <Image
            src={imageUrl}
            alt=""
            fill
            sizes="60vw"
            className="object-fill"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/40" />
          {title && (
            <h2 className="absolute top-12 left-12 xl:top-16 xl:left-16 text-white lg:text-3xl font-semibold leading-snug">
              {title}
            </h2>
          )}
        </div>

        <div
          className={`${textBlockClass} text-white flex items-center px-14`}
          style={textBlockStyle}
        >
          {content}
        </div>
      </div>
    </section>
  );
}
