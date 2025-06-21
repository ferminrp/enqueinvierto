import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { cn } from "../lib/utils";

const navigationItems = [
  {
    title: "Carteras",
    href: "/",
    description: "Carteras de inversión recomendadas"
  },
  {
    title: "Salud Financiera",
    href: "/salud-financiera",
    description: "Evaluá tu situación financiera"
  },
  {
    title: "Glosario",
    href: "/glosario",
    description: "Términos financieros explicados"
  },
  {
    title: "Jubilación",
    href: "/jubilacion",
    description: "Calculadora de jubilación"
  }
];

interface MobileNavProps {
  currentPath?: string;
}

export function MobileNav({ currentPath }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
          aria-label="Abrir menú de navegación"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Navegación</SheetTitle>
          <SheetDescription>
            Explora todas las secciones de Enqueinvierto
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-y-3 mt-6">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex flex-col space-y-1 p-3 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",
                currentPath === item.href && "bg-accent text-accent-foreground"
              )}
            >
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}