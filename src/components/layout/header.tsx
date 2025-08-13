"use client";

import Link from "next/link";
import { useI18n } from "@/context/i18n";
import { MunditoysLogo } from "@/components/icons";
import { LanguageToggle } from "@/components/language-toggle";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
  const { t } = useI18n();

  const navItems: NavItem[] = [
    { title: t("navHome"), href: "/" },
    { title: t("navAbout"), href: "/about" },
    { title: t("navProducts"), href: "/products" },
    { title: t("navLocations"), href: "/locations" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <MunditoysLogo />
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
           <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <LanguageToggle />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <Link href="/" className="mb-8 flex items-center">
                   <MunditoysLogo />
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  ))}
                   <div className="pt-4">
                    <LanguageToggle />
                   </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
