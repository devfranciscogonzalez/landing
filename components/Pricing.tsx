import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheck } from "lucide-react";
import { MagicCard } from "./ui/magic-card";
import { TypographyH2, TypographyLead } from "./ui/typography";

export default function Pricing() {
  const plans = [
    {
      name: "Plan Básico",
      description: "Ideal para comenzar",
      price: "200",
      features: [
        "1 aplicación AppSheet",
        "Hasta 10 usuarios",
        "Soporte por email",
        "Actualizaciones mensuales",
      ],
    },
    {
      name: "Plan Profesional",
      description: "Escala tu negocio",
      price: "Personalizado",
      features: [
        "1 aplicaciones AppSheet",
        "Hasta 50 usuarios",
        "Capacitación inicial",
        "Soporte prioritario",
        "Actualizaciones semanales",
        "Integraciones personalizadas",
      ],
      highlighted: true,
    },
    {
      name: "Plan Empresarial",
      description: "Soluciones avanzadas",
      price: "Personalizado",
      features: [
        "Aplicaciones ilimitadas",
        "Usuarios ilimitados",
        "Soporte 24/7",
        "Actualizaciones prioritarias",
        "Integraciones avanzadas",
        "Capacitación personalizada",
        "Consultoría dedicada",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="flex justify-center w-full px-6 pb-32 text-center bg-primary"
    >
      <div className="w-full max-w-5xl px-4 md:px-6">
        <div className="max-w-2xl text-center mx-auto">
          <TypographyH2 className="bg-gradient-to-l from-slate-300 to-white bg-clip-text text-transparent">
            Sé el próximo en confiar en nosotros
          </TypographyH2>
          <TypographyLead className="mt-4 text-secondary">
            Precios diseñados para proporcionarte calidad y resultados sin
            comprometer tu presupuesto.
          </TypographyLead>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 items-start mt-10">
          {plans.map((plan, index) => (
            <MagicCard
              gradientColor={plan.highlighted ? "#2563eb" : "#f8fafc"}
              gradientOpacity={0.1}
              key={index}
              className={`flex flex-col bg-transparent/5 text-primary-foreground${
                plan.highlighted ? "shadow-lg bg-primary-foreground h-full" : ""
              }  border-none `}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-left">
                  {plan.name}
                </CardTitle>
                <CardDescription
                  className={`text-left text-muted/80 ${
                    plan.highlighted && "text-muted-foreground/80"
                  } `}
                >
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">
                    {plan.price !== "Personalizado" && "$"}
                    {plan.price}
                  </span>
                  {plan.price !== "Personalizado" && <span> USD</span>}
                </div>
                <Button
                  variant={plan.highlighted ? "destructive" : "secondary"}
                  className="w-full"
                >
                  Empieza ahora
                </Button>
                <ul className="space-y-2 mt-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CircleCheck className="mr-2 h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter></CardFooter>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
