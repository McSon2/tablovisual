import Stripe from "stripe";

export interface StripeSubscription {
  id: string;
  status: Stripe.Subscription.Status;
  planId: string;
  currentPeriodEnd: Date;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
}

export interface CreateStripeSubscriptionData {
  planId: string;
  userId: string;
  email: string;
}

export interface UpdateStripeSubscriptionData {
  planId: string;
  subscriptionId: string;
}

export interface CancelStripeSubscriptionData {
  subscriptionId: string;
}
