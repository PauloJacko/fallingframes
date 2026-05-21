// app/tienda/data.ts

export interface ProductoVariante {
  id: string;
  name: string;
  price: number;
  src: string;
}

export interface Producto {
  id: number;
  slug: string; 
  mainName: string; 
  type: "Indumentaria" | "Formatos" | "Accesorios";
  status: string;
  hasVariants: boolean;
  variants: ProductoVariante[];
}

export const fullCatalog: Producto[] = [
  {
    id: 1,
    slug: "cd-grito-subterraneo",
    mainName: "CDs",
    type: "Formatos",
    status: "En imprenta",
    hasVariants: false,
    variants: [
      { id: "cd1", name: "CD Jewel Case Standard", price: 10000, src: "/images/merch2.png" }
    ]
  },
  {
    id: 2,
    slug: "vinilo-falling-continuous",
    mainName: "Vinilos // Edición Limitada",
    type: "Formatos",
    status: "Agotado temporalmente",
    hasVariants: false,
    variants: [
      { id: "v1", name: "Vinilo 12'' Edición Limitada Transparente", price: 35000, src: "/images/merch2.png" }
    ]
  },
  {
    id: 3,
    slug: "poleras",
    mainName: "Poleras Oficiales",
    type: "Indumentaria",
    status: "Manufacturando lote",
    hasVariants: true,
    variants: [
      { id: "p1", name: "Polera 'Abyssal Frames' // Black Series", price: 18000, src: "/images/merch1.png" },
      { id: "p2", name: "Polera 'Falling Continuous' // Green Edition", price: 18000, src: "/images/merch1.png" }
    ]
  },
  {
    id: 4,
    slug: "polerones",
    mainName: "Polerones Oficiales",
    type: "Indumentaria",
    status: "En diseño técnico",
    hasVariants: true,
    variants: [
      { id: "po1", name: "Polerón Canguro // Grito Subterráneo", price: 32000, src: "/images/merch1.png" }
    ]
  },
  {
    id: 5,
    slug: "gorros",
    mainName: "Gorros & Caps",
    type: "Accesorios",
    status: "Próximo cargamento",
    hasVariants: true,
    variants: [
      { id: "g1", name: "Gorro Snapback 'Mathematical Decay'", price: 15000, src: "/images/merch3.png" },
      { id: "g2", name: "Beanie Invierno // Grito Subterráneo Classic", price: 12000, src: "/images/merch3.png" }
    ]
  },
  {
    id: 6,
    slug: "tazas",
    mainName: "Tazas Oficiales",
    type: "Accesorios",
    status: "Calibrando stock",
    hasVariants: false,
    variants: [
      { id: "tz1", name: "Taza Matte Black Logo", price: 8000, src: "/images/merch3.png" }
    ]
  },
  {
    id: 7,
    slug: "chapitas",
    mainName: "Set de Chapitas // Pack Coleccionable de Diseños",
    type: "Accesorios",
    status: "Listo para empaque",
    hasVariants: false,
    variants: [
      { id: "ch1", name: "Pack de 4 Chapitas Progresivas", price: 3000, src: "/images/merch3.png" }
    ]
  },
  {
    id: 8,
    slug: "destapadores",
    mainName: "Destapador Metálico",
    type: "Accesorios",
    status: "En tránsito",
    hasVariants: false,
    variants: [
      { id: "dt1", name: "Destapador Isotipo Falling", price: 5000, src: "/images/merch3.png" }
    ]
  },
  {
    id: 9,
    slug: "magneticos",
    mainName: "Magnéticos // Arte Falling Frames",
    type: "Accesorios",
    status: "En imprenta",
    hasVariants: false,
    variants: [
      { id: "mg1", name: "Magnético Portada Album 10x10", price: 4000, src: "/images/merch3.png" }
    ]
  },
  {
    id: 10,
    slug: "llaveros",
    mainName: "Llavero Grabado // Logo Oficial",
    type: "Accesorios",
    status: "Manufacturando lote",
    hasVariants: false,
    variants: [
      { id: "ll1", name: "Llavero de Acero Inoxidable", price: 6000, src: "/images/merch3.png" }
    ]
  }
];