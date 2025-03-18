"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, LineChart, TrendingUp } from "lucide-react";
import Image from "next/image";

const useCases = [
  {
    title: "Pour les coachs sportifs",
    description:
      "Suivez les performances de vos athlètes, analysez leur progression et identifiez les axes d'amélioration.",
    icon: Activity,
    image: "/usecase-sport.png",
  },
  {
    title: "Pour les analystes financiers",
    description:
      "Visualisez les tendances du marché, suivez les KPIs financiers et générez des rapports automatisés.",
    icon: TrendingUp,
    image: "/usecase-finance.png",
  },
  {
    title: "Pour les chefs de projet",
    description:
      "Pilotez vos projets efficacement avec des tableaux de bord temps réel et des indicateurs de performance.",
    icon: BarChart3,
    image: "/usecase-project.png",
  },
  {
    title: "Pour les responsables marketing",
    description:
      "Analysez vos campagnes marketing, mesurez le ROI et optimisez vos actions en temps réel.",
    icon: LineChart,
    image: "/usecase-marketing.png",
  },
];

export function UseCases() {
  return (
    <div className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Cas d\'usage
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Une solution adaptée à tous les métiers
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Découvrez comment TabloVisual s\'adapte à votre secteur d\'activité
            et répond à vos besoins spécifiques.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-background rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8"
              >
                <div className="flex items-center gap-x-3">
                  <useCase.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold leading-7 text-foreground">
                    {useCase.title}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {useCase.description}
                </p>
                <div className="mt-8 relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-900/5">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
