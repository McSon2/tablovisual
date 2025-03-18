import type {
  CreateStripeSubscriptionData,
  UpdateStripeSubscriptionData,
} from "@/types/stripe";
import type { PaidPlan } from "./stripe";
import { PLANS, stripe } from "./stripe";

export class StripeService {
  static async createCheckoutSession(data: CreateStripeSubscriptionData) {
    const { planId, userId, email } = data;
    const plan = PLANS[planId as keyof typeof PLANS];

    if (plan.id === "free" || !("stripePriceId" in plan)) {
      throw new Error("Plan non valide ou plan gratuit");
    }

    const paidPlan = plan as PaidPlan;
    if (!paidPlan.stripePriceId) {
      throw new Error("Prix du plan non configuré");
    }

    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      mode: "subscription",
      billing_address_collection: "auto",
      line_items: [
        {
          price: paidPlan.stripePriceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId,
        planId,
      },
      success_url: `${process.env.NEXTAUTH_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/pricing`,
    });

    return session;
  }

  static async updateSubscription(data: UpdateStripeSubscriptionData) {
    const { planId, subscriptionId } = data;
    const plan = PLANS[planId as keyof typeof PLANS];

    if (plan.id === "free" || !("stripePriceId" in plan)) {
      throw new Error("Plan non valide");
    }

    const paidPlan = plan as PaidPlan;
    if (!paidPlan.stripePriceId) {
      throw new Error("Prix du plan non configuré");
    }

    return await stripe.subscriptions.update(subscriptionId, {
      items: [
        {
          id: subscriptionId,
          price: paidPlan.stripePriceId,
        },
      ],
    });
  }

  static async cancelSubscription(subscriptionId: string) {
    return await stripe.subscriptions.cancel(subscriptionId);
  }

  static async createBillingPortalSession(customerId: string) {
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXTAUTH_URL}/dashboard/settings`,
    });

    return session;
  }
}
