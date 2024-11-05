import Link from "next/link";
import { NAVIGATION_SECTIONS } from "@/constants/constants";

interface NavigationLinksProps {
  className?: string;
}

export const NavigationLinks = ({ className }: NavigationLinksProps) => (
  <nav className={className}>
    {NAVIGATION_SECTIONS.map((item) => (
      <Link
        key={item.href}
        href={`/#${item.href}`}
        className="text-sm font-light text-secondary-foreground hover:text-primary transition-colors duration-200 hover:font-normal"
      >
        {item.label}
      </Link>
    ))}
  </nav>
);
