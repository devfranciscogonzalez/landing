import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Rocket,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, icon: Icon }) => (
  <Link
    href={href}
    className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
  >
    <Icon className="h-6 w-6" />
  </Link>
);

export default function Footer() {
  return (
    <footer className="flex justify-center w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 bg-secondary">
      <div className="w-full max-w-5xl px-4 md:px-6">
        <Separator className="my-4 bg-primary/30" />
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link className="flex items-center" href="#">
              <Rocket className="h-6 w-6 mr-2 text-primary" />
              <span className="font-medium bg-gradient-to-r from-primary bg-clip-text text-primary/50">
                Diego Soluciones Web
              </span>
            </Link>
            <p className="text-gray-500 text-base">
              Transformando ideas en aplicaciones poderosas con AppSheet.
            </p>
            <div className="flex space-x-6">
              <SocialIcon href="#" icon={Facebook} />
              <SocialIcon href="#" icon={Instagram} />
              <SocialIcon href="#" icon={Twitter} />
              <SocialIcon href="#" icon={Linkedin} />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Servicios
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <FooterLink href="#">Desarrollo de Aplicaciones</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Consultoría No-Code</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">
                      Integración y Automatización
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">
                      Mantenimiento de Aplicaciones
                    </FooterLink>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Soporte
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <FooterLink href="#">Centro de Ayuda</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Documentación</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Tutoriales</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Estado del Sistema</FooterLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Empresa
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <FooterLink href="#">Sobre Nosotros</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Blog</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Trabajos</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Socios</FooterLink>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <FooterLink href="#">Política de Privacidad</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Términos de Uso</FooterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
