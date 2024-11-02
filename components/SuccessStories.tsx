import { TypographyLead } from "./ui/typography";

export default function SuccessStories() {
  const stories = [
    {
      text: "Clientes satisfechos",
      text_number: "+5",
    },
    {
      text: "Proyectos realizados",
      text_number: "+20",
    },
    {
      text: "Asesorías completadas",
      text_number: "+20",
    },
    {
      text: "Mantenimientos efectuados",
      text_number: "+10",
    },
  ];

  return (
    <section className="flex flex-col justify-center w-full px-6 py-28 bg-primary">
      <div className="w-full max-w-5xl m-auto px-4 md:px-6">
        <TypographyLead className="max-w-2xl text-center mx-auto text-secondary">
          Con <span className="font-bold">+4 años</span> de experiencia en el
          sector, hemos logrado resultados excepcionales.
        </TypographyLead>
        <div className="flex flex-wrap justify-center mt-10">
          {stories.map(({ text, text_number }) => (
            <div
              key={text}
              className="flex flex-1 flex-col justify-center gap-1 px-6 py-4 text-center border-r-2 last:border-r-0"
            >
              <span className="text-3xl text-center font-semibold leading-none sm:text-7xl bg-gradient-to-b from-secondary bg-clip-text text-secondary/50">
                {text_number}
              </span>
              <span className="text-md text-muted">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
