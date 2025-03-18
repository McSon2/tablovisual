"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, LineChart, Share2, Zap } from "lucide-react";

const features = [
  {
    name: "Import intelligent de données",
    description:
      "Importez facilement vos fichiers Excel, Google Sheets ou CSV. Notre système analyse automatiquement vos données pour une intégration sans effort.",
    icon: FileSpreadsheet,
  },
  {
    name: "Analyse automatique et suggestions",
    description:
      "Notre IA analyse vos données et suggère les meilleures visualisations adaptées à votre cas d'usage spécifique.",
    icon: Zap,
  },
  {
    name: "Création de dashboards personnalisés",
    description:
      "Créez des tableaux de bord interactifs et personnalisés avec une interface intuitive par glisser-déposer.",
    icon: LineChart,
  },
  {
    name: "Partage et collaboration",
    description:
      "Partagez vos dashboards avec votre équipe ou vos clients. Définissez des permissions d'accès et collaborez en temps réel.",
    icon: Share2,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Fonctionnalités
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tout ce dont vous avez besoin pour analyser vos données
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Une suite complète d\'outils pour transformer vos données en
            insights actionnables.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
