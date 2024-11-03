import ContactForm from "./ContactForm";
import EmailCopy from "./EmailCopy";
import { TypographyH2, TypographyLead, TypographyP } from "./ui/typography";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full max-w-5xl py-12 md:py-24 lg:py-32"
    >
      <div className="w-5/12 px-4 md:px-6">
        <ContactForm />
        <TypographyP>
          Si prefieres, puedes escribirme directamente al siguiente correo
          electrónico:
        </TypographyP>
        <EmailCopy />
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
