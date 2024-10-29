import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import services from "@/public/images/services.png";
import { TypographyH2, TypographyP } from "./ui/typography";
// bg-gradient-to-b from-primary
import {
  Blocks,
  MessageCircleQuestion,
  Workflow,
  DatabaseZap,
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="flex justify-center w-full">
      <div className="flex-col justify-center pb-32 pt-48 max-w-5xl px-6 py-12 xl:pt-48">
        <TypographyH2 className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
          Servicios
        </TypographyH2>
        <div className="grid gap-6 lg:grid-cols-3 mt-10">
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
                Aplicaciones personalizadas con Google AppSheet para cubrir las
                necesidades específicas de tu negocio de forma{" "}
                <span className="font-medium">ágil</span> y{" "}
                <span className="font-medium">eficaz</span>.
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
                Asesoramiento experto sobre cómo aprovechar al{" "}
                <span className="font-medium">máximo</span> las plataformas
                no-code para su empresa.
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
                Conecto aplicaciones AppSheet con otros servicios,
                <span className="font-medium">automatizando</span> los procesos
                de negocio.
              </TypographyP>
            </CardContent>
          </MagicCard>
          <Image src={services} alt="imagen" className="lg:col-span-2 " />
          <MagicCard
            className="bg-secondary text-secondary-foreground"
            gradientColor="#2563eb"
            gradientOpacity={0.1}
          >
            <DatabaseZap className="h-8 w-8 ml-auto mr-2 mt-2 text-primary" />
            <CardHeader>
              <CardTitle>Mantencion</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                Actualización continua de aplicaciones, asegurando un
                rendimiento <span className="font-medium">óptimo</span> y{" "}
                <span className="font-medium">adaptándose</span> a las
                necesidades cambiantes de tu negocio.
              </TypographyP>
            </CardContent>
          </MagicCard>
        </div>
      </div>
    </section>
  );
}
