"use client";

import { useTranslations } from "next-intl";
import { Users, ShieldCheck, DollarSign, Clock } from "lucide-react";

const icons = [Users, ShieldCheck, DollarSign, Clock];

export default function WhyChooseUs() {
  const t = useTranslations("whyUs");
  const props: { title: string; description: string }[] = t.raw("props");

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">
          {t("heading")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {props.map((prop, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  {prop.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
