import Image from "next/image";
import { CheckCircle, Award, Users, Code } from "lucide-react";

export default function About() {
  const skills = [
    "Desarrollo de aplicaciones no-code con AppSheet",
    "Integración de sistemas y automatización de procesos",
    "Consultoría en soluciones empresariales",
    "Optimización de flujos de trabajo",
  ];

  return (
    <section
      id="sobre-mi"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1a73e8]">
              Sobre Mí
            </h2>
            <p className="text-xl text-gray-600 max-w-[600px]">
              Soy un desarrollador especializado en soluciones no-code, con más
              de 5 años de experiencia transformando ideas en aplicaciones
              potentes y eficientes utilizando Google AppSheet.
            </p>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <Award className="h-8 w-8 text-[#1a73e8] mb-2" />
                <span className="text-2xl font-bold text-gray-800">50+</span>
                <span className="text-sm text-gray-600">
                  Proyectos Completados
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <Users className="h-8 w-8 text-[#1a73e8] mb-2" />
                <span className="text-2xl font-bold text-gray-800">100+</span>
                <span className="text-sm text-gray-600">
                  Clientes Satisfechos
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <Code className="h-8 w-8 text-[#1a73e8] mb-2" />
                <span className="text-2xl font-bold text-gray-800">5+</span>
                <span className="text-sm text-gray-600">
                  Años de Experiencia
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <Award className="h-8 w-8 text-[#1a73e8] mb-2" />
                <span className="text-2xl font-bold text-gray-800">10+</span>
                <span className="text-sm text-gray-600">Certificaciones</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Tu nombre - Desarrollador AppSheet"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
