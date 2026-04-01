"use client";

import { useState, useTransition } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { Loader2 } from "lucide-react";
import Form from "next/form";
import { usePathname } from "next/navigation";

export default function FooterSoft() {
  const pathname = usePathname();
  const [contactMessage, setContactMessage] = useState({
    name: "",
    text: "",
    email: "",
  });
  const [isPending, startTransition] = useTransition();
  const [currentBtnCopy, setCurrentBtnCopy] = useState("Envíar");
  const [submitError, setSubmitError] = useState(false);

  if (pathname === "/" || pathname === "/copy-home") return null;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactMessage({
      ...contactMessage,
      [target.name]: target.value,
    });
  };

  function action(formData: FormData) {
    startTransition(async () => {
      setSubmitError(false);
      const res = await sendEmail(formData);
      if (res.success) {
        setSubmitError(false);
        setContactMessage({ name: "", text: "", email: "" });
        setCurrentBtnCopy("¡Enviado!");
        setTimeout(() => {
          setCurrentBtnCopy("Envíar");
        }, 3000);
      } else {
        setSubmitError(true);
      }
    });
  }

  return (
    <footer
      className="px-6 py-10 md:px-24 lg:px-28 xl:px-56 backdrop-blur-md md:h-16.25 md:py-0 md:flex md:items-center md:overflow-hidden"
      style={{ background: "rgba(181, 170, 150, 0.12)", color: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Contenido principal */}
        <div className="grid grid-cols-3 lg:grid-cols-[auto_auto_auto_1fr] gap-2 md:gap-20 md:gap-y-10 items-center">
          {/* Columna 1 */}
          <ul
            className="space-y-2 text-xs md:text-md lg:space-y-4"
            style={{ color: "var(--color-cream)" }}
          >
            <li>Sobre</li>
            <li>Nosotros</li>
            <li>Misión</li>
            <li>Visión</li>
            <li>Contacto</li>
          </ul>

          {/* Columna 2 */}
          <ul
            className="space-y-2 text-xs md:text-md lg:space-y-4"
            style={{ color: "var(--color-cream)" }}
          >
            <li>Constructora</li>
            <li>Galería</li>
            <li>Proyectos</li>
            <li>Casos de éxito</li>
          </ul>

          {/* Columna 3 */}
          <ul
            className="space-y-2 text-xs md:text-md lg:space-y-4"
            style={{ color: "var(--color-cream)" }}
          >
            <li>Arrendamientos</li>
            <li>Galería</li>
            <li>Proyectos</li>
            <li>Casos de éxito</li>
          </ul>

          {/* Formulario */}
          <div className="col-span-3 lg:col-auto mt-8 md:mt-0">
            <h3
              className="font-semibold mb-4 hidden md:block text-center"
              style={{ color: "var(--color-cream)" }}
            >
              CONTÁCTANOS
            </h3>

            <Form action={action} className="space-y-4 flex flex-col">
              <div>
                <label
                  className="block text-sm mb-1"
                  style={{ color: "var(--color-cream)" }}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-lg px-4 py-2 focus:outline-none border"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "var(--color-cream)",
                    borderColor: "rgba(237, 233, 227, 0.4)",
                  }}
                  onChange={handleChange}
                  name="name"
                  value={contactMessage.name}
                />
              </div>

              <div>
                <label
                  className="block text-sm mb-1"
                  style={{ color: "var(--color-cream)" }}
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="correo@correo.com"
                  className="w-full rounded-lg px-4 py-2 focus:outline-none border"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "var(--color-cream)",
                    borderColor: "rgba(237, 233, 227, 0.4)",
                  }}
                  name="email"
                  onChange={handleChange}
                  value={contactMessage.email}
                />
              </div>

              <div>
                <label
                  className="block text-sm mb-1"
                  style={{ color: "var(--color-cream)" }}
                >
                  Mensaje
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg px-4 py-2 focus:outline-none resize-none border"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "var(--color-cream)",
                    borderColor: "rgba(237, 233, 227, 0.4)",
                  }}
                  name="text"
                  onChange={handleChange}
                  value={contactMessage.text}
                />
                {submitError && (
                  <p className="text-red-400 text-xs font-mono tracking-widest mt-2">
                    Error al enviar. Intente nuevamente.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="px-8 py-2 rounded-lg text-sm cursor-pointer self-end flex disabled:opacity-50 disabled:cursor-not-allowed transition"
                style={{ background: "rgba(255,255,255,0.2)", color: "var(--color-cream)", border: "1px solid rgba(255,255,255,0.35)" }}
                disabled={
                  isPending ||
                  !contactMessage.name ||
                  !contactMessage.email ||
                  !contactMessage.text
                }
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando
                  </>
                ) : (
                  currentBtnCopy
                )}
              </button>
            </Form>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className="mt-6 md:mt-3 text-center text-sm space-y-2"
          style={{ color: "var(--color-cream)" }}
        >
          <p>© 2025, Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
