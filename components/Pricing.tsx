import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { TypographyH2 } from "./ui/typography";

export default function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "200",
      features: [
        "1 aplicación AppSheet",
        "Hasta 10 usuarios",
        "Soporte por email",
        "Actualizaciones mensuales",
      ],
      cta: "Empezar gratis",
    },
    {
      name: "Pro",
      price: "Personalizado",
      features: [
        "3 aplicaciones AppSheet",
        "Hasta 50 usuarios",
        "Soporte prioritario",
        "Actualizaciones semanales",
        "Integraciones personalizadas",
      ],
      cta: "Prueba gratuita",
      highlighted: true,
    },
    {
      name: "Empresa",
      price: "Personalizado",
      features: [
        "Aplicaciones ilimitadas",
        "Usuarios ilimitados",
        "Soporte 24/7",
        "Actualizaciones en tiempo real",
        "Integraciones avanzadas",
        "Consultoría dedicada",
      ],
      cta: "Contactar",
    },
  ];

  return (
    <section className="flex justify-center w-full px-6 pb-32 pt-48 text-center bg-primary">
      <div className="w-full max-w-5xl px-4 md:px-6">
        <TypographyH2 className="bg-gradient-to-r from-primary-foreground bg-clip-text text-transparent">
          Precios
        </TypographyH2>
        {/* <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-center mb-12">
              Elija el plan perfecto para sus necesidades de desarrollo no-code con AppSheet
            </p> */}
        <div className="grid gap-6 lg:grid-cols-3 items-start mt-10">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col bg-transparent text-primary-foreground${
                plan.highlighted ? "border-[#1a73e8] shadow-lg bg-primary-foreground h-full" : ""
              }  border-none`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  {plan.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">
                    {plan.price !== "Personalizado" && "$"}
                    {plan.price}
                  </span>
                  {plan.price !== "Personalizado" && (
                    <span className="text-gray-600">USD</span>
                  )}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-[#1a73e8]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.highlighted ? "bg-[#1a73e8] hover:bg-blue-700" : ""
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
