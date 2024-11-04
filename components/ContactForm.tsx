"use client";

// import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
// import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// const EMAILJS_ID = {
//   serviceId: "service_jn22ztn",
//   templateId: "template_ar0ridz",
//   publicKey: "rWNkzNXICzokntHK6",
// };

export default function ContactForm() {
  // const form = useRef();
  // const [isSent, setIsSent] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       EMAILJS_ID.serviceId,
  //       EMAILJS_ID.templateId,
  //       form.current,
  //       EMAILJS_ID.publicKey
  //     )
  //     .then(() => {
  //       setIsSent(true);
  //       form.current.reset();
  //       setTimeout(() => {
  //         setIsSent(false);
  //       }, 1000);
  //     });
  // };

  return (
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
  );
}
