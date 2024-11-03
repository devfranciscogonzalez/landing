import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import appsheet from "@/public/images/appsheet.png";
import google from "@/public/images/google.png";
import { ArrowRight, Rocket } from "lucide-react";
import Image from "next/image";
import UnderlineSvg from "./icons/UnderlineSvg";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center w-full max-w-5xl min-h-dvh px-2 sm:px-6 text-center pt-4">
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
      <TypographyLead className="max-w-2xl mt-4 sm:text-2xl sm:mt-8">
        Desarrollo de software a la medida utilizando el ecosistema de{" "}
        <span className="text-blue-600">G</span>
        <span className="text-red-600">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-blue-600">g</span>
        <span className="text-green-600">l</span>
        <span className="text-red-600">e</span> y{" "}
        AppSheet.
      </TypographyLead>
      <div className="flex justify-center gap-2 mt-8 sm:mt-10 sm:gap-4">
        <Button className="w-[162px]">
          Empezar ahora
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="secondary" className="w-[162px]">
          Saber más
        </Button>
      </div>
      <div className="flex justify-center mt-6 sm:mt-8">
        <div className="flex w-auto gap-4 justify-center">
          <Image src={google} alt="Picture of the author" width={36} />
          <Image src={appsheet} alt="Picture of the author" width={36} />
          <Rocket className="h-9 w-9 text-primary" />
        </div>
      </div>
    </section>
  );
}
