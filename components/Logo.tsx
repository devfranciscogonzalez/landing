import { Rocket } from "lucide-react";
import Link from "next/link";

export const Logo = () => (
  <Link
    className="flex items-center justify-center mr-auto"
    href="/"
    aria-label="Diego Soluciones Web - Inicio"
  >
    <Rocket className="h-6 w-6 mr-2 text-primary" aria-hidden="true" />
    <span className="hidden font-medium bg-gradient-to-r from-primary bg-clip-text text-primary/50 md:inline-flex">
      Diego Soluciones Web
    </span>
    <span className="font-medium bg-gradient-to-r from-primary bg-clip-text text-primary/50 md:hidden">
      DSW
    </span>
  </Link>
);
