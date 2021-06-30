const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
const express = require("express");
const app = express();
app.use(express.static("."));
const YOUR_DOMAIN = "http://localhost:3000/checkout";
