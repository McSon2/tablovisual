import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      await req.text(),
      (await headers()).get("stripe-signature") || "",
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    const errorMessage = err.message;
    console.log(`Error message: ${errorMessage}`);
    return NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` },
      { status: 400 }
    );
  }

  const permittedEvents = [
    "payment_intent.succeeded",
    "payment_intent.payment_failed",
    "customer.subscription.deleted",
    "customer.subscription.updated",
  ];

  if (permittedEvents.includes(event.type)) {
    try {
      switch (event.type) {
        case "payment_intent.succeeded":
          const paymentIntent = event.data.object as Stripe.PaymentIntent;
          console.log(`Payment succeeded: ${paymentIntent.id}`);

          if (paymentIntent.metadata.userId) {
            await prisma.subscription.upsert({
              where: {
                userId: paymentIntent.metadata.userId,
              },
              create: {
                userId: paymentIntent.metadata.userId,
                planId: paymentIntent.metadata.planId || "free",
                status: "active",
                currentPeriodEnd: new Date(
                  Date.now() + 30 * 24 * 60 * 60 * 1000
                ),
                stripeCustomerId: paymentIntent.customer as string,
                stripeSubscriptionId: paymentIntent.metadata.subscriptionId,
              },
              update: {
                status: "active",
                currentPeriodEnd: new Date(
                  Date.now() + 30 * 24 * 60 * 60 * 1000
                ),
              },
            });
          }
          break;

        case "payment_intent.payment_failed":
          const failedPaymentIntent = event.data.object as Stripe.PaymentIntent;
          console.log(`Payment failed: ${failedPaymentIntent.id}`);

          if (failedPaymentIntent.metadata.userId) {
            await prisma.subscription.update({
              where: {
                userId: failedPaymentIntent.metadata.userId,
              },
              data: {
                status: "past_due",
              },
            });
          }
          break;

        case "customer.subscription.deleted":
          const subscription = event.data.object as Stripe.Subscription;
          console.log(`Subscription deleted: ${subscription.id}`);

          const subToDelete = await prisma.subscription.findFirst({
            where: {
              stripeSubscriptionId: subscription.id,
            },
          });

          if (subToDelete) {
            await prisma.subscription.delete({
              where: {
                id: subToDelete.id,
              },
            });
          }
          break;

        case "customer.subscription.updated":
          const updatedSubscription = event.data.object as Stripe.Subscription;
          console.log(`Subscription updated: ${updatedSubscription.id}`);

          const subToUpdate = await prisma.subscription.findFirst({
            where: {
              stripeSubscriptionId: updatedSubscription.id,
            },
          });

          if (subToUpdate) {
            await prisma.subscription.update({
              where: {
                id: subToUpdate.id,
              },
              data: {
                status: updatedSubscription.status,
                currentPeriodEnd: new Date(
                  updatedSubscription.current_period_end * 1000
                ),
              },
            });
          }
          break;

        default:
          throw new Error(`Unhandled event: ${event.type}`);
      }
    } catch (error: any) {
      console.log(error);
      return NextResponse.json(
        { message: "Webhook handler failed" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ message: "Received" }, { status: 200 });
}
