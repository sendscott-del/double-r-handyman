"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const serviceKeys = [
  "generalRepairs",
  "installations",
  "plumbing",
  "electrical",
  "painting",
  "maintenance",
  "carpentry",
] as const;

const FORMSPREE_URL = "https://formspree.io/f/xlganbkk";

export default function Contact() {
  const t = useTranslations("contact");
  const tServices = useTranslations("services");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [service, setService] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    if (service) {
      formData.set("service", service);
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(t("error"));
      }
    } catch {
      setError(t("error"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
          {t("heading")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-lg font-medium text-near-black">
                  {t("success")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("name")} *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder={t("namePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("email")} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t("emailPlaceholder")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("phone")} *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder={t("phonePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>{t("service")} *</Label>
                    <Select
                      name="service"
                      value={service}
                      onValueChange={(val) => setService(val)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t("servicePlaceholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceKeys.map((key) => (
                          <SelectItem key={key} value={tServices(`${key}.title`)}>
                            {tServices(`${key}.title`)}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other">
                          {t("serviceOther")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">{t("address")}</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder={t("addressPlaceholder")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">{t("description")} *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    placeholder={t("descriptionPlaceholder")}
                  />
                </div>

                {error && (
                  <p className="text-red-brand text-sm font-medium">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-red-brand hover:bg-red-brand-dark text-white font-semibold text-base py-6"
                >
                  {submitting ? t("submitting") : t("submit")}
                </Button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-heading font-bold text-xl text-navy">
              {t("infoHeading")}
            </h3>

            <a
              href="tel:+18728183745"
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="font-medium text-near-black text-sm">
                  {t("phone")}
                </p>
                <p className="text-near-black/70 text-sm">
                  {t("phoneNumber")}
                </p>
              </div>
            </a>

            <a
              href="mailto:doublerhandymanservices@gmail.com"
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="font-medium text-near-black text-sm">
                  {t("email")}
                </p>
                <p className="text-near-black/70 text-sm break-all">
                  {t("emailAddress")}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="font-medium text-near-black text-sm">
                  Service Area
                </p>
                <p className="text-near-black/70 text-sm">
                  {t("serviceArea")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="font-medium text-near-black text-sm">Hours</p>
                <p className="text-near-black/70 text-sm">{t("hours")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
