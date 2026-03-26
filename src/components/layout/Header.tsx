"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed w-full top-0 z-10">
      {/* Background */}
      <div className="relative h-16 md:h-20 w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#232323] opacity-55" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-between px-4 lg:px-12 xl:px-16">
          {/* Logo */}
          <Link
            href="/"
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
          <nav className="hidden md:flex items-center gap-10 text-white relative">
            {!isHome && (
              <Link
                href="/"
                className="text-sm hover:text-[#216C36] transition font-extrabold"
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
                className="flex items-center gap-1 font-extrabold hover:text-[#216C36] transition cursor-pointer text-sm"
              >
                Unidades de negocio
                <span
                  className={`transition-transform ${
                    submenuOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {/* Submenu panel */}
              {submenuOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-xl bg-[#232323] opacity-90 shadow-2xl ring-1 ring-white/10">
                  <Link
                    href="/unidades-de-negocio/nrv-ingenieria"
                    className="block px-6 py-4 text-sm hover:bg-[#216C36]/20 transition"
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  >
                    Nrv Ingeniería
                  </Link>

                  <Link
                    href="/unidades-de-negocio/scavare"
                    className="block px-6 py-4 text-sm hover:bg-[#216C36]/20 transition"
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  >
                    Scavare
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/nosotros"
              className="font-extrabold hover:text-[#216C36] transition text-sm"
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
            className="md:hidden text-white"
            aria-label="Abrir menú"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>
        </div>

        {/* Bottom green line */}
        <div className="absolute bottom-0 left-0 h-1 md:h-1.5 w-full bg-[#216C36]" />
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#232323] text-white">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {!isHome && (
              <Link
                href="/"
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
              <div className="ml-4 flex flex-col gap-3 text-sm">
                <Link
                  href="/unidades-de-negocio/nrv-ingenieria"
                  onClick={() => {
                    setOpen(false);
                    setSubmenuOpen(!submenuOpen);
                  }}
                >
                  Nrv Ingeniería
                </Link>
                <Link
                  href="/unidades-de-negocio/scavare"
                  onClick={() => {
                    setOpen(false);
                    setSubmenuOpen(!submenuOpen);
                  }}
                >
                  Scavare
                </Link>
              </div>
            )}

            <Link
              href="/nosotros"
              onClick={() => {
                setOpen(false);
                setSubmenuOpen(false);
              }}
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
