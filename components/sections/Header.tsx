"use client";

import { Logo } from "@/components/Logo";
import { NavigationLinks } from "@/components/NavigationLinks";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className="absolute inset-x-0 top-0 h-4 backdrop-blur-sm"
        aria-hidden="true"
      />
      <section className="flex flex-col items-center w-full max-w-5xl mx-auto p-3 rounded bg-primary-foreground/90 shadow-md shadow-primary/15 backdrop-blur-sm">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <NavigationLinks className="hidden md:flex items-center gap-6" />
            <Link
              href="/about"
              className={cn(
                "order-first md:order-last",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              )}
            >
              <Button size="sm">
                Sobre Mí
                <User strokeWidth={3} />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <NavigationLinks className="flex flex-col items-center gap-3 pb-4 pt-7 md:hidden" />
        )}
      </section>
    </header>
  );
}
