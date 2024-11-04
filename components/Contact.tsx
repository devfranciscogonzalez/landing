import ContactForm from "./ContactForm";
import EmailCopy from "./EmailCopy";
import {
  TypographyH2,
  TypographyLead,
  TypographyP,
} from "@/components/ui/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WhatsAppQR from "./WhatsAppQR";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white from-90% to-secondary"
    >
      <div className="flex justify-center w-full max-w-5xl">
        <div className="w-5/12 px-4 md:px-6">
          <Tabs defaultValue="form" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="form">Formulario</TabsTrigger>
              <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
            </TabsList>
            <TabsContent value="form">
              <ContactForm />
              <TypographyP className="text-sm">
                Si prefieres, puedes escribir directamente al siguiente correo
                electrónico:
              </TypographyP>
              <EmailCopy />
            </TabsContent>
            <TabsContent value="whatsapp">
              <WhatsAppQR />
            </TabsContent>
          </Tabs>
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
      </div>
    </section>
  );
}
