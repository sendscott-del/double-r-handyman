"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const tContact = useTranslations("contact");

  return (
    <footer className="bg-near-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Double R Handyman Service"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="font-heading font-bold text-lg">
                Double R Handyman Service
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-base mb-4">
              {tContact("infoHeading")}
            </h3>
            <a
              href="tel:+18728183745"
              className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors text-sm"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              {tContact("phoneNumber")}
            </a>
            <a
              href="mailto:doublerhandymanservices@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors text-sm"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              {tContact("emailAddress")}
            </a>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              {tContact("serviceArea")}
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <Clock className="w-4 h-4 flex-shrink-0" />
              {tContact("hours")}
            </div>
          </div>

          {/* Quick links (placeholder for social) */}
          <div>
            <h3 className="font-heading font-bold text-base mb-4">
              {/* Social media links placeholder */}
            </h3>
            <p className="text-gray-500 text-sm">
              {/* Social media links will go here once available */}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
