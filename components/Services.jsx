import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#1a73e8]">
          Mis Servicios
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Desarrollo de Aplicaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Creo aplicaciones personalizadas utilizando Google AppSheet para satisfacer sus necesidades específicas de negocio.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Consultoría No-Code</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ofrezco asesoramiento experto sobre cómo aprovechar al máximo las plataformas no-code para su empresa.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Integración y Automatización</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conecto sus aplicaciones AppSheet con otros servicios y automatizo sus procesos de negocio.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}