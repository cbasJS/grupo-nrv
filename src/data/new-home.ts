export type Division = {
  id: number;
  label: string;
  description: string;
  link: string;
  images: string[];
  route?: string;
};

export type ValueItem = {
  id: number;
  title: string;
  description: string;
  descriptionLines: [string, string];
  icon: string;
};

export const divisions: Division[] = [
  {
    id: 1,
    label: "División Construcción",
    description: "Ejecución de obras de ingeniería.",
    link: "Conoce a Nrv Ingeniería",
    images: ["/images/hero/arrendamiento/slider3.jpg"],
    route: "/unidades-de-negocio/nrv-ingenieria",
  },
  {
    id: 2,
    label: "División Transporte",
    description: "Transporte de carga pesada y logística.",
    link: "Conoce a Enearvy Logistic",
    images: [
      "/images/new-home/division-transporte/imagen1.jpg",
      "/images/new-home/division-transporte/imagen2.jpg",
      "/images/new-home/division-transporte/imagen3.jpg",
    ],
  },
  {
    id: 3,
    label: "División Maquinaria",
    description: "Renta y operación de maquinaria pesada.",
    link: "Conoce a Scavare",
    images: [
      "/images/new-home/division-maquinaria/imagen1.jpg",
      "/images/new-home/division-maquinaria/imagen2.jpg",
      "/images/new-home/division-maquinaria/imagen3.jpg",
    ],
    route: "/unidades-de-negocio/scavare",
  },
  {
    id: 4,
    label: "División Agropecuaria",
    description: "Producción de leche, carne y silo.",
    link: "Conoce a Narava",
    images: [
      "/images/new-home/division-agropecuaria/imagen1.jpg",
      "/images/new-home/division-agropecuaria/imagen2.jpg",
      "/images/new-home/division-agropecuaria/imagen3.jpg",
    ],
  },
];

export const values: ValueItem[] = [
  {
    id: 1,
    title: "COMPROMISO",
    description: "Resultados garantizados con responsabilidad y transparencia.",
    descriptionLines: ["Resultados garantizados con responsabilidad", "y transparencia."],
    icon: "/images/new-home/compromiso_logo.png",
  },
  {
    id: 2,
    title: "EQUIPO",
    description: "Profesionales capacitados que impulsan cada proyecto.",
    descriptionLines: ["Profesionales capacitados que impulsan cada", "proyecto."],
    icon: "/images/new-home/equipo_logo.png",
  },
  {
    id: 3,
    title: "EXCELENCIA",
    description: "Estándares superiores en cada operación que realizamos.",
    descriptionLines: ["Estándares superiores en cada operación que", "realizamos."],
    icon: "/images/new-home/excelencia_logo.png",
  },
];
