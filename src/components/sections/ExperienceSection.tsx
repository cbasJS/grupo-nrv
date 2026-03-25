import Image from "next/image";

export type Props = {
  imageUrl: string;
  content: React.ReactNode;
  columnReverse?: boolean;
  bgColor?: string;
};

export default function ExperienceSection({
  imageUrl,
  content,
  columnReverse,
  bgColor,
}: Props) {
  return (
    <section
      className={bgColor ? "" : "bg-section-green-nrv"}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className="mx-auto py-8 px-4 lg:px-0 lg:py-0 lg:grid lg:grid-cols-2 lg:items-center">
        {/* Text content */}
        <div
          className={`lg:px-12 xl:px-16 ${columnReverse ? "lg:order-2" : ""}`}
        >
          {content}
        </div>

        {/* Image (desktop only) */}
        <div
          className={`relative hidden h-[420px] w-full lg:block ${
            columnReverse ? "lg:order-1" : ""
          }`}
        >
          <Image
            src={imageUrl}
            alt="Sección de experiencia"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
