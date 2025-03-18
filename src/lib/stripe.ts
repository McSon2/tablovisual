import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
});

interface PlanBase {
  name: string;
  id: string;
  price: number;
  features: string[];
}

interface FreePlan extends PlanBase {
  id: "free";
}

export interface PaidPlan extends PlanBase {
  stripePriceId: string | undefined;
}

export const PLANS: {
  FREE: FreePlan;
  STARTER: PaidPlan;
  PRO: PaidPlan;
  ENTERPRISE: PaidPlan;
} = {
  FREE: {
    name: "Free",
    id: "free",
    price: 0,
    features: [
      "1 projet",
      "100 lignes par dataset",
      "5 widgets par dashboard",
      "Export PDF basique",
    ],
  },
  STARTER: {
    name: "Starter",
    id: "starter",
    price: 9,
    features: [
      "5 projets",
      "1,000 lignes par dataset",
      "15 widgets par dashboard",
      "Export PDF personnalisé",
      "Support email",
    ],
    stripePriceId: process.env.STRIPE_STARTER_PRICE_ID,
  },
  PRO: {
    name: "Pro",
    id: "pro",
    price: 29,
    features: [
      "Projets illimités",
      "10,000 lignes par dataset",
      "Widgets illimités",
      "Export PDF avancé",
      "Support prioritaire",
      "API Access",
    ],
    stripePriceId: process.env.STRIPE_PRO_PRICE_ID,
  },
  ENTERPRISE: {
    name: "Enterprise",
    id: "enterprise",
    price: 99,
    features: [
      "Tout inclus",
      "Lignes illimitées",
      "Support dédié",
      "Formation personnalisée",
      "SLA garanti",
    ],
    stripePriceId: process.env.STRIPE_ENTERPRISE_PRICE_ID,
  },
} as const;

export type PlanId = keyof typeof PLANS;
