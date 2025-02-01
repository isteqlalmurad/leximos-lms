import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { client } from "@/sanity/lib/adminClient";
import { getStudentByClerkId } from "@/sanity/lib/student/getStudentByClerkId";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as Stripe.LatestApiVersion,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature");

    if (!signature) {
      return new NextResponse("No signature found", { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error(`Webhook signature verification failed: ${errorMessage}`);

      return new NextResponse(`Webhook Error: ${errorMessage}`, {
        status: 400,
      });
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Get the courseId and userId from the metadata
      const courseId = session.metadata?.courseId;
      const userId = session.metadata?.userId;

      if (!courseId || !userId) {
        return new NextResponse("Missing metadata", { status: 400 });
      }

      const student = await getStudentByClerkId(userId);

      if (!student) {
        return new NextResponse("Student not found", { status: 400 });
      }

      // Create an enrollment record in Sanity
      await client.create({
        _type: "enrollment",
        student: {
          _type: "reference",
          _ref: student._id,
        },
        course: {
          _type: "reference",
          _ref: courseId,
        },
        paymentId: session.id,
        amount: session.amount_total! / 100, // Convert from cents to dollars
        enrolledAt: new Date().toISOString(),
      });

      return new NextResponse(null, { status: 200 });
    }

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error("Error in webhook handler:", error);
    return new NextResponse("Webhook handler failed", { status: 500 });
  }
}
