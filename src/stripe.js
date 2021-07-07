// "use strict";
const stripe = require("stripe")(
  "sk_test_51J7yFsSDzXaqMjSEhlMHxXNjXYi4Wmy4D6Eec3UqpJlmZLvjQB79CcF6uWn3fHY3DKElU9WqWhJ7c1D8KDH9R0t000x3hsu1oc"
);
const express = require("express");
const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const YOUR_DOMAIN = "https://liva-3ec01.web.app/payment";

app.post("/create-checkout-session", async (req, res) => {
  const { items, email } = req.body;

  console.log("transformedItems", items);

  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    line_items: items,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  console.log("session", session);

  res.status(200).json({ id: session.id });
});

app.listen(5000, () => console.log("Running on port 5000"));
