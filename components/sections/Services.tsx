"use client";

import { useTranslations } from "next-intl";
import {
  Wrench,
  Drill,
  Droplets,
  Zap,
  PaintRoller,
  Leaf,
  Hammer,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const serviceCategories = [
  { key: "generalRepairs", Icon: Wrench },
  { key: "installations", Icon: Drill },
  { key: "plumbing", Icon: Droplets },
  { key: "electrical", Icon: Zap },
  { key: "painting", Icon: PaintRoller },
  { key: "maintenance", Icon: Leaf },
  { key: "carpentry", Icon: Hammer },
] as const;

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-20 sm:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
          {t("heading")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceCategories.map(({ key, Icon }) => {
            const items: string[] = t.raw(`${key}.items`);
            return (
              <Card
                key={key}
                className="border-none shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-red-brand" />
                  </div>
                  <CardTitle className="font-heading text-sm font-bold tracking-wide text-navy">
                    {t(`${key}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {items.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="text-sm text-near-black/70 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-gold mt-1 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
