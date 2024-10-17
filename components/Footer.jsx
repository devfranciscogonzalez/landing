import Link from "next/link";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500">
        © 2023 AppSheet Dev. Todos los derechos reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4 text-[#1a73e8]"
          href="#"
        >
          Términos de servicio
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 text-[#1a73e8]"
          href="#"
        >
          Privacidad
        </Link>
      </nav>
      <div className="flex gap-4">
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5 text-gray-600 hover:text-[#1a73e8]" />
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5 text-gray-600 hover:text-[#1a73e8]" />
        </Link>
        <Link
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5 text-gray-600 hover:text-[#1a73e8]" />
        </Link>
        <Link
          href="https://yourportfolio.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portafolio"
        >
          <Globe className="h-5 w-5 text-gray-600 hover:text-[#1a73e8]" />
        </Link>
      </div>
    </footer>
  );
}
