import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyH3 } from "@/components/ui/typography";
import { ArrowRight, Rocket } from "lucide-react";
import Image from "next/image";
import appsheet from "../app/appsheet.png";
import google from "../app/google.png";
import UnderlineSvg from "./icons/UnderlineSvg";

export default function Hero() {
  return (
    <section className="w-full max-w-5xl px-6 pb-32 pt-48 text-center">
      <div className="">
        <TypographyH1 className="text-secondary-foreground">
          Crece con{" "}
          <span className="relative whitespace-nowrap">
            <UnderlineSvg className="absolute -bottom-1 left-0 w-full text-primary rotate-180" />
            <span className="bg-gradient-to-r from-primary bg-clip-text text-primary/50">
              soluciones
            </span>
          </span>{" "}
          diseñadas para tu negocio
        </TypographyH1>
        <TypographyH3 className="max-w-2xl mx-auto mt-8 text-secondary-foreground">
          Desarrollo a la medida utilizando el ecosistema de{" "}
          <span className="text-blue-600">G</span>
          <span className="text-red-600">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-600">g</span>
          <span className="text-green-600">l</span>
          <span className="text-red-600">e</span> y{" "}
          <span className="text-[#5f6368]">AppSheet.</span>
        </TypographyH3>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <Button className="w-[162px]">
          Empezar ahora
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="secondary" className="w-[162px]">
          Saber más
        </Button>
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex w-auto gap-4 justify-center border-b-2 pb-2">
          <Image src={google} alt="Picture of the author" width={36} />
          <Image src={appsheet} alt="Picture of the author" width={36} />
          <Rocket className="h-9 w-9 text-primary" />
        </div>
      </div>
    </section>
  );
}
