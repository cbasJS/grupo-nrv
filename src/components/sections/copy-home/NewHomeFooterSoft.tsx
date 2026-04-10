import Image from "next/image";

export default function NewHomeFooterSoft() {
  return (
    <footer className="bg-[#A09587]">
      {/* Desktop */}
      <div className="hidden md:block px-12 xl:px-16 py-8">
        <div className="flex items-center gap-10">
          <Image
            src="/images/logo-2.png"
            alt="Grupo NRV"
            width={161}
            height={70}
            className="h-10 w-auto"
          />
          <p className="text-sm" style={{ color: "#FAF8F5" }}>
            2026 Grupo NRV. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center py-12 px-6 gap-6">
        <Image
          src="/images/logo-2.png"
          alt="Grupo NRV"
          width={161}
          height={70}
          className="h-8 w-auto"
        />
        <div className="h-px w-16 bg-[#EDE9E3]" />
        <div
          className="text-center text-xs space-y-1"
          style={{ color: "#FAF8F5" }}
        >
          <p>© 2026 Grupo NRV.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
