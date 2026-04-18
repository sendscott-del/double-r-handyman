"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", key: "services" },
  { href: "#about", key: "about" },
  { href: "#why-us", key: "whyUs" },
  { href: "#contact", key: "contact" },
] as const;

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = locale === "en" ? "es" : "en";

  function switchLocale() {
    const segments = pathname.split("/");
    segments[1] = otherLocale;
    router.push(segments.join("/"));
  }

  function scrollTo(hash: string) {
    setMobileOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex-shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Double R Handyman Service"
            width={56}
            height={56}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-near-black hover:text-red-brand transition-colors"
            >
              {t(link.key)}
            </button>
          ))}
        </nav>

        {/* Right side: locale toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="text-sm font-medium text-silver hover:text-near-black transition-colors px-2 py-1"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <Button
            onClick={() => scrollTo("#contact")}
            className="bg-red-brand hover:bg-red-brand-dark text-white font-semibold"
          >
            {t("requestQuote")}
          </Button>
        </div>

        {/* Mobile: locale + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={switchLocale}
            className="text-sm font-medium text-silver hover:text-near-black px-2 py-1"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-near-black"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.href)}
                className="text-left text-base font-medium text-near-black hover:text-red-brand transition-colors py-1"
              >
                {t(link.key)}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("#contact")}
              className="bg-red-brand hover:bg-red-brand-dark text-white font-semibold mt-2 w-full"
            >
              {t("requestQuote")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
