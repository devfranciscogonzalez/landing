import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-5xl text-balance font-semibold leading-tight tracking-tight sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "mt-10 scroll-m-20 text-4xl text-pretty font-normal leading-tight tracking-tight transition-colors first:mt-0 md:text-5xl md:leading-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-2xl font-light tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn("leading-7 text-pretty [&:not(:first-child)]:mt-4", className)}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}

export function TypographyList({ children, className }: TypographyProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-xl text-secondary-foreground font-light tracking-tight",
        className
      )}
    >
      {children}
    </p>
  );
}
