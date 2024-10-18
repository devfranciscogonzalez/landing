import { CheckCircle } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#1a73e8]">
          Por qué elegir AppSheet
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex items-start space-x-4">
            <CheckCircle className="mt-1 h-6 w-6 text-[#1a73e8]" />
            <div>
              <h3 className="font-bold">Desarrollo Rápido</h3>
              <p>Cree aplicaciones en días, no en meses, sin necesidad de conocimientos de programación.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="mt-1 h-6 w-6 text-[#1a73e8]" />
            <div>
              <h3 className="font-bold">Integración con Google Workspace</h3>
              <p>Aproveche la integración nativa con Google Sheets, Drive y otros servicios de Google.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="mt-1 h-6 w-6 text-[#1a73e8]" />
            <div>
              <h3 className="font-bold">Personalización Avanzada</h3>
              <p>Adapte las aplicaciones a sus necesidades específicas con opciones de personalización flexibles.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="mt-1 h-6 w-6 text-[#1a73e8]" />
            <div>
              <h3 className="font-bold">Seguridad Empresarial</h3>
              <p>Benefíciese de las robustas características de seguridad y cumplimiento de Google.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}