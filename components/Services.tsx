import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import services from "@/public/images/services.png";
import {
  Blocks,
  DatabaseZap,
  MessageCircleQuestion,
  Workflow
} from "lucide-react";
import Image from "next/image";
import { TypographyH2, TypographyLead, TypographyP } from "./ui/typography";

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
              Conecta tus aplicaciones y centraliza tu negocio.
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
              Garantiza el óptimo desempeño de la aplicación y su evolución
              constante a lo largo del tiempo.
            </TypographyP>
          </CardContent>
        </MagicCard>
        {/* <TypographyH2 className="text-center mt-10 text-primary-foreground">
          ¿Quieres saber más sobre nuestros servicios?
        </TypographyH2> */}

      </div>
    </section>
  );
}