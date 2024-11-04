import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH2, TypographyLead, TypographyP } from "@/components/ui/typography";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="flex justify-center w-full px-6 pb-32 text-center bg-primary"
    >
      <div className="flex gap-6 w-full max-w-5xl px-4 md:px-6">
        <div className="flex flex-col text-left ">
          <TypographyLead className="text-secondary/30">
            Preguntas Frecuentes
          </TypographyLead>
          <TypographyH2 className="bg-gradient-to-l from-slate-300 to-white bg-clip-text text-transparent mt-0">
            Todo lo que necesitas saber
          </TypographyH2>
        </div>
        <Accordion
          type="multiple"
          className="w-full max-w-3xl mx-auto text-secondary text-left"
        >
          <TypographyP className="text-destructive/80">General</TypographyP>
          <AccordionItem
            value="item-1"
            className="border-b border-secondary/30"
          >
            <AccordionTrigger className="data-[state=open]:font-extrabold">
              ¿Qué es Google AppSheet?
            </AccordionTrigger>
            <AccordionContent>
              Google AppSheet es una plataforma de desarrollo no-code que
              permite crear aplicaciones móviles y web sin necesidad de escribir
              código. Utiliza hojas de cálculo y formularios para definir la
              lógica y la estructura de la aplicación.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-b border-secondary/30 mt-4"
          >
            <AccordionTrigger>
              ¿Cuánto tiempo lleva desarrollar una aplicación con AppSheet?
            </AccordionTrigger>
            <AccordionContent>
              El tiempo de desarrollo varía según la complejidad de la
              aplicación, pero muchas aplicaciones pueden crearse en cuestión de
              días o semanas, en lugar de meses que podrían llevar con el
              desarrollo tradicional.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger>
              ¿Puedo integrar AppSheet con otros servicios?
            </AccordionTrigger>
            <AccordionContent>
              Sí, AppSheet se integra fácilmente con otros servicios de Google
              Workspace y ofrece conectores para muchos servicios externos
              populares. También es posible crear integraciones personalizadas
              utilizando APIs.
            </AccordionContent>
          </AccordionItem>
          <TypographyP className="text-destructive/80">Soporte</TypographyP>
          <AccordionItem
            value="item-4"
            className="border-b border-secondary/30 mt-4"
          >
            <AccordionTrigger>
              ¿Realizas reuniones de soporte a distancia?
            </AccordionTrigger>
            <AccordionContent>
              Sí, realizo reuniones de soporte a distancia utilizando
              plataformas como Zoom, Google Meet, y otras opciones de
              telecomunicación según la preferencia del cliente. Esto permite un
              soporte flexible y adaptado a tus necesidades.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger>
              ¿Ofreces soporte después de la entrega del proyecto?
            </AccordionTrigger>
            <AccordionContent>
              Sí, ofrezco soporte posterior a la entrega del proyecto para
              asegurar que la implementación sea exitosa y cualquier inquietud
              sea resuelta. Los detalles del soporte pueden adaptarse según las
              necesidades y los acuerdos establecidos.
            </AccordionContent>
          </AccordionItem>
          <TypographyP className="text-destructive/80">
            Metodo de Pago
          </TypographyP>
          <AccordionItem
            value="item-6"
            className="border-b border-secondary/30 mt-4"
          >
            <AccordionTrigger>¿Qué medios de pago aceptas?</AccordionTrigger>
            <AccordionContent>
              Acepto una variedad de medios de pago, incluyendo transferencias
              bancarias, tarjetas de crédito y débito, y otras opciones
              populares. Mi objetivo es facilitar el proceso de pago para que
              sea conveniente para ti.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className="border-none">
            <AccordionTrigger>
              ¿Es posible realizar pagos en cuotas?
            </AccordionTrigger>
            <AccordionContent>
              Sí, ofrezco la opción de pagos en cuotas en ciertos casos, para
              facilitar el proceso de pago según la naturaleza del proyecto y
              las necesidades del cliente. Los términos pueden ajustarse en base
              a un acuerdo previo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
