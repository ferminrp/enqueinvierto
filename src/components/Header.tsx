import React from 'react';
import { Navigation } from './Navigation';
import { MobileNav } from './MobileNav';

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center space-x-2"
              aria-label="Ir al inicio"
            >
              <img
                src="https://images.compara.ar/quaestus.webp"
                alt="Quaestus"
                className="h-8 w-auto"
                loading="eager"
              />
              <span className="hidden sm:inline-block text-lg font-semibold text-foreground">
                Enqueinvierto
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <Navigation currentPath={currentPath} />

          {/* Mobile Navigation */}
          <MobileNav currentPath={currentPath} />
        </div>
      </div>
    </header>
  );
}