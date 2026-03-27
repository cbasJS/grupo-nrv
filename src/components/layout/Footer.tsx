"use client";

import { useState, useTransition } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { Loader2 } from "lucide-react";
import Form from "next/form";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const [contactMessage, setContactMessage] = useState({
    name: "",
    text: "",
    email: "",
  });
  const [isPending, startTransition] = useTransition();
  const [currentBtnCopy, setCurrentBtnCopy] = useState("Envíar");
  const [submitError, setSubmitError] = useState(false);

  if (pathname === "/") return null;

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
    <footer className=" text-white px-6 py-10 md:px-24 lg:px-28 xl:px-56">
      <div className="max-w-7xl mx-auto">
        {/* Contenido principal */}
        <div className="grid grid-cols-3 lg:grid-cols-[auto_auto_auto_1fr] gap-2 md:gap-20 md:gap-y-10 items-center">
          {/* Columna 1 */}
          <ul className="space-y-2 text-xs md:text-md lg:space-y-4">
            <li>Sobre</li>
            <li>Nosotros</li>
            <li>Misión</li>
            <li>Visión</li>
            <li>Contacto</li>
          </ul>

          {/* Columna 2 */}
          <ul className="space-y-2 text-xs md:text-md lg:space-y-4">
            <li>Constructora</li>
            <li>Galería</li>
            <li>Proyectos</li>
            <li>Casos de éxito</li>
          </ul>

          {/* Columna 3 */}
          <ul className="space-y-2 text-xs md:text-md lg:space-y-4">
            <li>Arrendamientos</li>
            <li>Galería</li>
            <li>Proyectos</li>
            <li>Casos de éxito</li>
          </ul>

          {/* Formulario */}
          <div className="col-span-3 lg:col-auto mt-8 md:mt-0">
            <h3 className="font-semibold mb-4 hidden md:block text-center">
              CONTÁCTANOS
            </h3>

            <Form action={action} className="space-y-4 flex flex-col">
              <div>
                <label className="block text-sm mb-1">Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-lg px-4 py-2 text-black focus:outline-none bg-white"
                  onChange={handleChange}
                  name="name"
                  value={contactMessage.name}
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="correo@correo.com"
                  className="w-full rounded-lg px-4 py-2 text-black focus:outline-none bg-white"
                  name="email"
                  onChange={handleChange}
                  value={contactMessage.email}
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Mensaje</label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg px-4 py-2 text-black focus:outline-none resize-none bg-white"
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
                className="bg-[#009951] hover:bg-[#009951]/95 transition px-8 py-2 rounded-lg text-sm cursor-pointer self-end flex disabled:opacity-50 disabled:cursor-not-allowed"
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
        <div className="mt-14 text-center text-sm text-gray-300 space-y-2">
          <p>© 2025, Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
