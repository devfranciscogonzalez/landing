import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { TypographyH2, TypographyLead, TypographyP } from "./ui/typography";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full max-w-5xl py-12 md:py-24 lg:py-32"
    >
      <div className="w-5/12 px-4 md:px-6">
        <div className="mx-auto max-w-lg">
          <form className="space-y-4">
            <Input placeholder="Nombre" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Mensaje" />
            <Button className="w-full">
              Enviar mensaje
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
        <TypographyP>
          Si prefieres, puedes escribirme directamente al siguiente correo
          electrónico:
        </TypographyP>
        <div>
          <Button variant="secondary" className="mt-4">
            franciscogonzalez
          </Button>
          <div>
            <Button variant="" className="mt-4">
            </Button>
            <Button variant="secondary" className="mt-4">
            </Button>
          </div>
        </div>
      </div>
      <div className="w-7/12 px-4 md:px-6">
        <TypographyP>Contáctanos</TypographyP>
        <TypographyH2 className="bg-gradient-to-l from-blue-800 to-primary bg-clip-text text-transparent mt-0">
          Estaremos encantados de ayudarte.
        </TypographyH2>
        <TypographyLead className="mt-4 text-secondary-foreground">
          ¿Tienes alguna pregunta o necesitas más información? Escríbenos y
          responderemos lo antes posible.
        </TypographyLead>
      </div>
    </section>
  );
}
