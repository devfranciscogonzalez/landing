import qr from "@/public/images/qr-whatsapp.jpg";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagicCard } from "./ui/magic-card";
import { TypographyP } from "./ui/typography";
import { Smartphone } from "lucide-react";

export default function WhatsAppQR() {
  return (
    <MagicCard
      className="bg-secondary text-secondary-foreground"
      gradientColor="#2563eb"
      gradientOpacity={0.1}
    >
      <CardHeader className="text-center">
        <CircleUserRound className="h-10 w-10 mx-auto text-primary" />
        <CardTitle>Diego Soluciones Web</CardTitle>
        <CardDescription>Contacto de WhatsApp</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={qr} alt="QR de WhatsApp" width={200} className="mx-auto" />
        <TypographyP className="text-sm text-center text-muted-foreground">
          Escanea este código QR con la cámara de WhatsApp para obtener el
          número de contacto o agrega el siguiente numero.
        </TypographyP>
        <TypographyP className="flex gap-2 justify-center items-center text-md text ">
          <Smartphone className="h-4 w-4" /> +569 12345678
        </TypographyP>
      </CardContent>
    </MagicCard>
  );
}
