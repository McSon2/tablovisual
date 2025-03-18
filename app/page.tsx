import { Features } from "@/components/marketing/Features";
import { Hero } from "@/components/marketing/Hero";
import { Pricing } from "@/components/marketing/Pricing";
import { UseCases } from "@/components/marketing/UseCases";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TabloVisual - Transformez vos données en dashboards interactifs",
  description:
    "TabloVisual analyse intelligemment vos données pour créer des visualisations pertinentes et personnalisées. Importez vos fichiers Excel, Google Sheets ou CSV et obtenez instantanément des insights précieux.",
  openGraph: {
    title: "TabloVisual - Transformez vos données en dashboards interactifs",
    description:
      "TabloVisual analyse intelligemment vos données pour créer des visualisations pertinentes et personnalisées.",
    url: "https://tablovisual.com",
    siteName: "TabloVisual",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TabloVisual - Transformez vos données en dashboards interactifs",
      },
    ],
    locale: "fr-FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TabloVisual - Transformez vos données en dashboards interactifs",
    description:
      "TabloVisual analyse intelligemment vos données pour créer des visualisations pertinentes et personnalisées.",
    images: ["/og-image.png"],
    creator: "@tablovisual",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <section className="flex-1">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="use-cases">
        <UseCases />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
    </main>
  );
}
