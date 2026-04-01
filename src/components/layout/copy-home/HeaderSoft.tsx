"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function HeaderSoft() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/copy-home";

  return (
    <header className="w-full">
      {/* Background */}
      <div className="relative h-16 md:h-20 w-full">
        {/* Overlay — frosted glass cálido */}
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{ background: "rgba(160, 149, 135, 0.82)" }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-between px-4 lg:px-12 xl:px-16">
          {/* Logo */}
          <Link
            href="/copy-home"
            className="flex items-center gap-2"
            onClick={() => {
              setOpen(false);
              setSubmenuOpen(false);
            }}
          >
            <Image
              src="/images/logo-2.png"
              alt="Grupo NRV"
              width={161}
              height={70}
              className="h-9 w-auto md:h-11"
            />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-10 relative" style={{ color: "#FAF8F5" }}>
            {!isHome && (
              <Link
                href="/copy-home"
                className="text-sm font-extrabold transition"
                style={{ color: "#FAF8F5" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#EDE9E3")}
                onMouseLeave={e => (e.currentTarget.style.color = "#FAF8F5")}
                onClick={() => {
                  setOpen(false);
                  setSubmenuOpen(false);
                }}
              >
                Inicio
              </Link>
            )}

            <div className="relative">
              <button
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className="flex items-center gap-1 font-extrabold transition cursor-pointer text-sm"
                style={{ color: "#FAF8F5" }}
              >
                Unidades de negocio
                <span className={`transition-transform ${submenuOpen ? "rotate-180" : ""}`}>▾</span>
              </button>

              {/* Submenu panel */}
              {submenuOpen && (
                <div
                  className="absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-xl shadow-2xl border"
                  style={{ background: "#FFFFFF", borderColor: "#EDE9E3" }}
                >
                  <Link
                    href="/unidades-de-negocio/nrv-ingenieria"
                    className="block px-6 py-4 text-sm transition"
                    style={{ color: "#A09587" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#FAF8F5")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  >
                    Nrv Ingeniería
                  </Link>
                  <Link
                    href="/unidades-de-negocio/scavare"
                    className="block px-6 py-4 text-sm transition"
                    style={{ color: "#A09587" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#FAF8F5")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  >
                    Scavare
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/nosotros"
              className="font-extrabold transition text-sm"
              style={{ color: "#FAF8F5" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#EDE9E3")}
              onMouseLeave={e => (e.currentTarget.style.color = "#FAF8F5")}
              onClick={() => {
                setOpen(false);
                setSubmenuOpen(false);
              }}
            >
              Sobre nosotros
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Abrir menú"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-[#FAF8F5]" />
              <span className="block h-0.5 w-6 bg-[#FAF8F5]" />
              <span className="block h-0.5 w-6 bg-[#FAF8F5]" />
            </div>
          </button>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 h-px w-full" style={{ background: "rgba(237, 233, 227, 0.3)" }} />
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t" style={{ background: "#FFFFFF", borderColor: "#EDE9E3" }}>
          <nav className="flex flex-col gap-4 px-6 py-6" style={{ color: "#A09587" }}>
            {!isHome && (
              <Link
                href="/copy-home"
                onClick={() => {
                  setOpen(false);
                  setSubmenuOpen(false);
                }}
                className="font-medium"
              >
                Inicio
              </Link>
            )}

            <button
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="flex items-center justify-between text-left font-medium"
            >
              <span>Unidades de negocio</span>
              <span>{submenuOpen ? "−" : "+"}</span>
            </button>

            {submenuOpen && (
              <div className="ml-4 flex flex-col gap-3 text-sm" style={{ color: "#C8C0B2" }}>
                <Link
                  href="/unidades-de-negocio/nrv-ingenieria"
                  onClick={() => { setOpen(false); setSubmenuOpen(!submenuOpen); }}
                >
                  Nrv Ingeniería
                </Link>
                <Link
                  href="/unidades-de-negocio/scavare"
                  onClick={() => { setOpen(false); setSubmenuOpen(!submenuOpen); }}
                >
                  Scavare
                </Link>
              </div>
            )}

            <Link
              href="/nosotros"
              onClick={() => { setOpen(false); setSubmenuOpen(false); }}
              className="font-medium"
            >
              Sobre nosotros
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
