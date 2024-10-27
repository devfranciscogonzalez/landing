import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ArrowSvg from "./icons/ArrowSvg";

export default function Hero() {
  return (
    <section className="w-full max-w-5xl py-12 md:py-24 lg:py-32 xl:py-48 text-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2 animate-fade-up">
            <h1 className="text-3xl font-medium tracking-tight text-secondary-foreground sm:text-4xl md:text-5xl lg:text-7xl">
              Crece con{" "}
              <span className="relative whitespace-nowrap">
                <ArrowSvg className="absolute -bottom-1 left-0 w-full text-primary rotate-180" />
                <span className="bg-gradient-to-r from-primary bg-clip-text text-primary/50">
                  soluciones
                </span>
              </span>{" "}
              diseñadas para tu negocio
            </h1>
            <p className="mx-auto max-w-[700px] md:text-xl text-blue-100">
              Transforme sus ideas en aplicaciones funcionales sin escribir
              código. Soluciones rápidas y eficientes para su negocio.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-white text-[hsl(214,82%,51%)] hover:bg-blue-50">
              Empezar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-blue-700"
            >
              Saber más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
