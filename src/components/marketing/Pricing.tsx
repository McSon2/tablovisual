"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Gratuit",
    id: "free",
    price: "0€",
    description: "Parfait pour découvrir TabloVisual.",
    features: [
      "1 projet",
      "1000 lignes par dataset",
      "3 dashboards",
      "Export PDF basique",
      "Support communautaire",
    ],
    cta: "Commencer gratuitement",
    mostPopular: false,
  },
  {
    name: "Starter",
    id: "starter",
    price: "9€",
    description: "Idéal pour les indépendants et petites équipes.",
    features: [
      "5 projets",
      "10 000 lignes par dataset",
      "10 dashboards",
      "Export PDF personnalisé",
      "Support par email",
      "Mises à jour en temps réel",
    ],
    cta: "Commencer l'essai gratuit",
    mostPopular: true,
  },
  {
    name: "Pro",
    id: "pro",
    price: "29€",
    description: "Pour les équipes qui ont besoin de plus de puissance.",
    features: [
      "Projets illimités",
      "100 000 lignes par dataset",
      "Dashboards illimités",
      "Export PDF & Excel avancé",
      "Support prioritaire",
      "API access",
      "Intégration personnalisée",
    ],
    cta: "Commencer l'essai gratuit",
    mostPopular: false,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: "99€",
    description: "Solution sur mesure pour les grandes organisations.",
    features: [
      "Tout ce qui est inclus dans Pro",
      "Lignes illimitées",
      "SLA garanti",
      "Support dédié 24/7",
      "Formation personnalisée",
      "Déploiement sur site possible",
      "Conformité RGPD avancée",
    ],
    cta: "Contacter les ventes",
    mostPopular: false,
  },
];

export function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Tarification
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Des prix adaptés à vos besoins
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
          Choisissez le plan qui correspond le mieux à vos besoins. Tous les
          prix sont mensuels et incluent la TVA.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 ring-1 ring-gray-900/10 ${
                tier.mostPopular
                  ? "bg-primary text-primary-foreground shadow-xl"
                  : "bg-background"
              }`}
            >
              <h3
                className={`text-lg font-semibold leading-8 ${
                  tier.mostPopular
                    ? "text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-4 text-sm leading-6 ${
                  tier.mostPopular
                    ? "text-primary-foreground/90"
                    : "text-muted-foreground"
                }`}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.mostPopular
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={`text-sm font-semibold leading-6 ${
                    tier.mostPopular
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  /mois
                </span>
              </p>
              <Button
                variant={tier.mostPopular ? "secondary" : "default"}
                className="mt-6 w-full"
              >
                {tier.cta}
              </Button>
              <ul
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.mostPopular
                    ? "text-primary-foreground/90"
                    : "text-muted-foreground"
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-6 w-5 flex-none ${
                        tier.mostPopular
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
