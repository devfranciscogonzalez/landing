import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import services from "../app/services.png";
import { TypographyH2, TypographyP } from "./ui/typography";
// bg-gradient-to-b from-primary
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
            <CardHeader>
              <CardTitle className="text-primary-foreground">
                Desarrollo de Aplicaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                Creo aplicaciones personalizadas utilizando Google AppSheet para
                satisfacer sus necesidades específicas de negocio.
              </TypographyP>
            </CardContent>
          </MagicCard>
          <MagicCard
            className="bg-secondary text-secondary-foreground"
            gradientColor="#2563eb"
            gradientOpacity={0.1}
          >
            <CardHeader>
              <CardTitle>Consultoría No-Code</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                Ofrezco asesoramiento experto sobre cómo aprovechar al máximo
                las plataformas no-code para su empresa.
              </TypographyP>
            </CardContent>
          </MagicCard>
          <MagicCard
            className="bg-primary text-primary-foreground"
            gradientColor="#f8fafc"
            gradientOpacity={0.1}
          >
            <CardHeader>
              <CardTitle>Integración y Automatización</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                Conecto sus aplicaciones AppSheet con otros servicios y
                automatizo sus procesos de negocio.
              </TypographyP>
            </CardContent>
          </MagicCard>
          <Image src={services} alt="imagen" className="lg:col-span-2 " />
          <MagicCard
            className="bg-secondary text-secondary-foreground"
            gradientColor="#2563eb"
            gradientOpacity={0.1}
          >
            <CardHeader>
              <CardTitle>Análisis y Optimización de Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                Transformo sus datos en información valiosa mediante
                herramientas de Google, mejorando la toma de decisiones y
                optimizando el rendimiento de su negocio.
              </TypographyP>
            </CardContent>
          </MagicCard>
        </div>
      </div>
    </section>
  );
}
