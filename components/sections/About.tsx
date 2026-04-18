"use client";

import { useTranslations } from "next-intl";
import { Users } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
          {t("heading")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Team photo placeholder */}
          <div className="bg-off-white rounded-xl aspect-[4/3] flex flex-col items-center justify-center text-silver">
            <Users className="w-16 h-16 mb-4" />
            <p className="text-sm font-medium">{t("photoPlaceholder")}</p>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-near-black/80 leading-relaxed text-base sm:text-lg">
              {t("para1")}
            </p>
            <p className="text-near-black/80 leading-relaxed text-base sm:text-lg">
              {/* TODO: Replace with final bio copy from Luigi and Jesus */}
              {t("para2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
