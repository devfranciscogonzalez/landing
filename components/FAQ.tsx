import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-primary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Preguntas Frecuentes
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Qué es Google AppSheet?</AccordionTrigger>
            <AccordionContent>
              Google AppSheet es una plataforma de desarrollo no-code que
              permite crear aplicaciones móviles y web sin necesidad de escribir
              código. Utiliza hojas de cálculo y formularios para definir la
              lógica y la estructura de la aplicación.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
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
          <AccordionItem value="item-3">
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
          <AccordionItem value="item-4">
            <AccordionTrigger>
              ¿Necesito conocimientos de programación para usar AppSheet?
            </AccordionTrigger>
            <AccordionContent>
              No se requieren conocimientos de programación para usar AppSheet.
              Sin embargo, entender conceptos básicos de bases de datos y lógica
              de negocio puede ser beneficioso para crear aplicaciones más
              complejas.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
