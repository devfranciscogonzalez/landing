"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-14 border-b border-gray-200 flex">
      <div className="flex items-center w-full mx-auto max-w-2xl">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 mr-2 text-[#1a73e8]" />
          <span className="font-bold text-[#1a73e8]">AppSheet Dev</span>
        </Link>
        <nav
          className={`ml-auto flex gap-4 sm:gap-6 ${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-14 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 border-b md:border-b-0 border-gray-200`}
        >
          <Link
            className="text-sm font-medium hover:text-[#1a73e8]"
            href="#services"
          >
            Servicios
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#1a73e8]"
            href="#features"
          >
            Características
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#1a73e8]"
            href="#faq"
          >
            FAQ
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#1a73e8]"
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
      </div>
    </header>
  );
}
