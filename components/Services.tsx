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
import { Zap } from "lucide-react";
import dev from "@/public/images/dev.png";
// bg-gradient-to-b from-primary
import {
  Blocks,
  MessageCircleQuestion,
  Workflow,
  DatabaseZap,
} from "lucide-react";
import { Badge } from "./ui/badge";

const keywords = {
  development: [
    "personalización",
    "agilidad",
    "optimización",
    "escalabilidad",
    "innovación",
  ],
  consulting: [
    "reducción de costos",
    "agilidad en el desarrollo",
    "enfoque estratégico",
    "aprovechamiento de tecnología no-code",
  ],
  integration: [
    "automatización",
    "conectividad",
    "eficiencia operativa",
    "sinergia digital",
  ],
  maintenance: [
    "continuidad del servicio",
    "prevención de fallos",
    "soporte técnico",
    "mejora continua",
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
          Servicios para empresas y particulares que impulsan tu negocio al
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
          </CardHeader>
          <CardContent>
            <TypographyP>
              Software a medida que escala contigo y optimizan tus procesos.
            </TypographyP>
            {/* <div className="flex flex-wrap mt-4 gap-1">
              {keywords.development.map((keyword) => (
                <Badge variant="secondary" key={keyword} className="bg-white text-primary">{keyword}</Badge>
              ))}
            </div> */}
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
              Conecta tus aplicaciones y mejora la eficiencia de tu negocio
              mediante integraciones rápidas y seguras.
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
