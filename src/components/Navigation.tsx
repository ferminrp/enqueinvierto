import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
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

interface NavigationProps {
  currentPath?: string;
}

export function Navigation({ currentPath }: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              href={item.href}
              className={cn(
                navigationMenuTriggerStyle(),
                currentPath === item.href && "bg-accent text-accent-foreground"
              )}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}