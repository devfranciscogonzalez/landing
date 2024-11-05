import UnderlineSvg from "@/components/icons/UnderlineSvg";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import { TECHNOLOGY_ICONS } from "@/constants/constants";
import { ArrowRight } from "lucide-react";
import TechnologyIcons from "@/components/TechnologyIcons";
import GoogleText from "@/components/GoogleText";

export default function Hero() {
  return (
    <section className="flex min-h-dvh w-full max-w-5xl flex-col items-center justify-center px-2 pt-4 text-center sm:px-6">
      <TypographyH1 className="text-secondary-foreground">
        Crece con
        <span className="relative whitespace-nowrap">
          <UnderlineSvg
            className="absolute -bottom-1 left-0 w-full rotate-180 text-primary"
            aria-hidden="true"
          />
          <span className="bg-gradient-to-r from-primary bg-clip-text text-primary/50">
            soluciones
          </span>
        </span>{" "}
        diseñadas para tu negocio
      </TypographyH1>
      <TypographyLead className="mt-4 max-w-2xl sm:mt-8 sm:text-2xl">
        Desarrollo de software a la medida utilizando el ecosistema de{" "}
        <GoogleText /> y AppSheet.
      </TypographyLead>
      <div className="mt-8 flex justify-center gap-2 sm:mt-10 sm:gap-4">
        <Button
          className="w-[162px]"
        >
          Empezar ahora
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
        <Button
          variant="secondary"
          className="w-[162px]"
        >
          Saber más
        </Button>
      </div>

      <TechnologyIcons icons={TECHNOLOGY_ICONS} className="mt-6 sm:mt-8" />
    </section>
  );
}
