import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH2 } from "./ui/typography";
// bg-gradient-to-b from-primary
export default function Services() {
  return (
    <section
      id="services"
      className="flex justify-center w-full"
    >
      <div className="flex-col justify-center pb-32 pt-48 max-w-5xl px-6 py-12 xl:pt-48 text-center">
        <TypographyH2 className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">Mis Servicios</TypographyH2>
        <div className="grid gap-6 lg:grid-cols-3 mt-10">
          <Card>
            <CardHeader>
              <CardTitle>Desarrollo de Aplicaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Creo aplicaciones personalizadas utilizando Google AppSheet para
                satisfacer sus necesidades específicas de negocio.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Consultoría No-Code</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Ofrezco asesoramiento experto sobre cómo aprovechar al máximo
                las plataformas no-code para su empresa.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Integración y Automatización</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Conecto sus aplicaciones AppSheet con otros servicios y
                automatizo sus procesos de negocio.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
