import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export const checkoutSession = async (items, userEmail) => {
  const stripe = await stripePromise;

  const headers = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "INR",
      product_data: {
        name: item.product_name,
      },
      unit_amount: item.price.raw * 100,
    },
    quantity: item.quantity,
  }));

  const body = {
    items: transformedItems,
    email: userEmail,
  };

  // Call the backend to create a checkout session...
  const checkoutSession = await axios.post(
    "https://us-central1-liva-backend.cloudfunctions.net/app/create-checkout-session",
    body,
    headers
  );

  // Redirect user/customer to Stripe checkout
  const result = await stripe.redirectToCheckout({
    sessionId: checkoutSession.data.id,
  });

  if (result.error) alert(result.error.message);
};
