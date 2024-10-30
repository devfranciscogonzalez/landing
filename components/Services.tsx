import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import services from "@/public/images/services.png";
import { TypographyH2, TypographyLead, TypographyP } from "./ui/typography";
// bg-gradient-to-b from-primary
import {
  Blocks,
  MessageCircleQuestion,
  Workflow,
  DatabaseZap,
} from "lucide-react";

const keywords = {
  development: [
    "customization",
    "agility",
    "optimization",
    "scalability",
    "innovation",
  ],
  consulting: [
    "cost reduction",
    "agility in development",
    "strategic focus",
    "leveraging no-code technology",
  ],
  integration: [
    "automation",
    "connectivity",
    "operational efficiency",
    "digital synergy",
  ],
  maintenance: [
    "service continuity",
    "failure prevention",
    "technical support",
    "continuous improvement",
  ],
};

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col justify-center w-full max-w-5xl px-6 py-28"
    >
      <div className="max-w-2xl text-center mx-auto">
        <TypographyH2 className="bg-gradient-to-l from-blue-800 to-primary bg-clip-text text-transparent">
          El paso definitivo hacia la transformación digital.
        </TypographyH2>
        <TypographyLead className="mt-4 text-secondary-foreground">
          Servicios para empresas y particulares que impulsarán tu negocio al
          siguiente nivel.
        </TypographyLead>
      </div>
      <div className="grid place-content-center gap-6 lg:grid-cols-3 mt-10">
        <MagicCard
          className="bg-primary text-primary-foreground"
          gradientColor="#f8fafc"
          gradientOpacity={0.1}
        >
          <Blocks className="h-8 w-8 ml-auto mr-2 mt-2 text-white" />
          <CardHeader>
            <CardTitle className="text-primary-foreground">
              Desarrollo
            </CardTitle>
            {/* <CardDescription className="text-secondary">
              Software a medida que responda a las necesidades del negocio.
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <TypographyP>
              Software a medida que responda a las necesidades del negocio.
            </TypographyP>
            {/* {keywords.development.map((keyword) => (
              <span
                key={keyword}
                className="text-xs bg-primary-foreground/10 px-2 py-1 rounded mr-2"
              >
                {keyword}
              </span>
            ))} */}
          </CardContent>
        </MagicCard>
        <MagicCard
          className="bg-secondary text-secondary-foreground"
          gradientColor="#2563eb"
          gradientOpacity={0.1}
        >
          <MessageCircleQuestion className="h-8 w-8 ml-auto mr-2 mt-2 text-primary" />
          <CardHeader>
            <CardTitle>Consultoría</CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Asesoramiento experto sobre cómo aprovechar al máximo las
              plataformas no-code.
            </TypographyP>
          </CardContent>
        </MagicCard>
        <MagicCard
          className="bg-primary text-primary-foreground"
          gradientColor="#f8fafc"
          gradientOpacity={0.1}
        >
          <Workflow className="h-8 w-8 ml-auto mr-2 mt-2 text-white" />
          <CardHeader>
            <CardTitle>Integración</CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Conecto aplicaciones AppSheet con otros servicios.
            </TypographyP>
          </CardContent>
        </MagicCard>
        <Image
          src={services}
          alt="imagen"
          className="order-last col-span-1 md:col-span-2 lg:order-none "
        />
        <MagicCard
          className="bg-secondary text-secondary-foreground"
          gradientColor="#2563eb"
          gradientOpacity={0.1}
        >
          <DatabaseZap className="h-8 w-8 ml-auto mr-2 mt-2 text-primary" />
          <CardHeader>
            <CardTitle>Mantención</CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Actualización, cambio y modificación de la aplicación, asegurando
              su correcto funcionamiento.
            </TypographyP>
          </CardContent>
        </MagicCard>
      </div>
    </section>
  );
}
