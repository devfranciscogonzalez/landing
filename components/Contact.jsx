import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#1a73e8]">
          Contáctame
        </h2>
        <div className="mx-auto max-w-lg">
          <form className="space-y-4">
            <Input placeholder="Nombre" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Mensaje" />
            <Button className="w-full bg-[#1a73e8] hover:bg-blue-700">
              Enviar mensaje
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}