"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // outline outline-offset-1 outline-1 outline-primary
  return (
    <header className="flex w-full fixed px-4 lg:px-6 pt-4 h-16 z-50">
      <div className="absolute top-0 left-0 w-full h-4 backdrop-blur-sm"></div>
      <section className="flex items-center w-full max-w-5xl mx-auto px-4 bg-primary-foreground/90 backdrop-blur-sm rounded shadow-md shadow-primary/15">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 mr-2 text-primary" />
          <span className="font-medium bg-gradient-to-r from-primary bg-clip-text text-primary/50">
            Diego Soluciones Web
          </span>
        </Link>
        <nav
          className={`ml-auto flex gap-4 sm:gap-6 ${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-14 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 border-b md:border-b-0 border-gray-200`}
        >
          <Link
            className="text-sm font-light text-secondary-foreground hover:text-primary"
            href="#services"
          >
            Servicios
          </Link>
          <Link
            className="text-sm font-light text-secondary-foreground hover:text-primary"
            href="#features"
          >
            Características
          </Link>
          <Link
            className="text-sm font-light text-secondary-foreground hover:text-primary"
            href="#faq"
          >
            FAQ
          </Link>
          <Link
            className="text-sm font-light text-secondary-foreground hover:text-primary"
            href="#contact"
          >
            Contacto
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </Button>
      </section>
    </header>
  );
}
