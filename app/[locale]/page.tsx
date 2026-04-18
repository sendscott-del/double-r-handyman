import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Double R Handyman Service",
    telephone: "+1-872-818-3745",
    email: "doublerhandymanservices@gmail.com",
    url: "https://double-r-handyman.vercel.app",
    areaServed: [
      { "@type": "City", name: "Hyde Park, Chicago, IL" },
      { "@type": "City", name: "Kenwood, Chicago, IL" },
      { "@type": "City", name: "Woodlawn, Chicago, IL" },
      { "@type": "City", name: "Oakland, Chicago, IL" },
      { "@type": "City", name: "South Shore, Chicago, IL" },
      { "@type": "City", name: "Bronzeville, Chicago, IL" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    availableLanguage: ["en", "es"],
    description:
      "Reliable, efficient handyman services in Hyde Park and nearby Chicago neighborhoods. Repairs, installations, plumbing, electrical, painting, and more.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
