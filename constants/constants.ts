import appsheet from "@/public/images/appsheet.png";
import google from "@/public/images/google.png";
import { Section, TechnologyIcon } from "@/types/types";
import { Rocket } from "lucide-react";

export const NAVIGATION_SECTIONS: Section[] = [
  {
    label: "Servicios",
    href: "services",
  },
  {
    label: "Precios",
    href: "pricing",
  },
  {
    label: "FAQ",
    href: "faq",
  },
  {
    label: "Contacto",
    href: "contact",
  },
];

export const TECHNOLOGY_ICONS: TechnologyIcon[] = [
  {
    src: google.src,
    alt: "Logo de Google",
    width: 36,
  },
  {
    src: appsheet.src,
    alt: "Logo de AppSheet",
    width: 36,
  },
  {
    icon: Rocket,
    alt: "Icono de Rocket",
  },
];