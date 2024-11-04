"use client";

import { Button } from "@/components/ui/button";
import { Menu, Rocket, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const sections = [
  {
    label: "Servicios",
    href: "services",
  },
  {
    label: "Precios",
    href: "pricing",
  },
  {
    label: "FAQ",
    href: "faq",
  },
  {
    label: "Contacto",
    href: "contact",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex w-full fixed px-4 lg:px-6 pt-4 min-h-16 z-50">
      <div className="absolute top-0 left-0 w-full h-4 backdrop-blur-sm"></div>
      <section
        className="flex flex-col items-center w-full max-w-5xl mx-auto px-4 bg-primary-foreground/90 backdrop-blur-sm rounded shadow-md shadow-primary/15
      p-2 h-auto"
      >
        <div className="flex w-full">
          <Link className="flex items-center justify-center mr-auto" href="/">
            <Rocket className="h-6 w-6 mr-2 text-primary" />
            <span className="hidden font-medium bg-gradient-to-r from-primary bg-clip-text text-primary/50 md:inline-flex">
              Diego Soluciones Web
            </span>
            <span className="font-medium bg-gradient-to-r from-primary bg-clip-text text-primary/50 md:hidden">
              DSW
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden sm:gap-6 md:flex items-center gap-4">
              {sections.map((item, index) => (
                <Link
                  key={index}
                  href={`/#${item.href}`}
                  className="text-sm font-light text-secondary-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="/about" passHref className="order-first md:order-last">
              <Button size="sm">Sobre Mí</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="flex flex-col items-center gap-4 sm:gap-6 md:hidden">
            {sections.map((item, index) => (
              <Link
                key={index}
                href={`/#${item.href}`}
                className="text-sm font-light text-secondary-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </section>
    </header>
  );
}
