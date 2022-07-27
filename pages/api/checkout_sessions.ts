import type { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY_TEST_USD);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: `${process.env.STRIPE_PRICE_ID_SUBSCRIPTION_BASE}`,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${req.headers.origin}/?success=true`,
    cancel_url: `${req.headers.origin}/?canceled=true`,
  });
  res.status(200).json({ session });
}
