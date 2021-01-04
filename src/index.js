import ReactDOM from 'react-dom'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

import App from './App'

// Remember to add your public Stripe key
const stripePromise = loadStripe(process.env.STRIPE_API_PUBLIC)

ReactDOM.render(
  <CartProvider
    mode="client-only"
    stripe={stripePromise}
    // The URL to which Stripe should send customers when payment is complete.
    successUrl="http://localhost:3000/success"
    // The URL to which Stripe should send customers when payment is canceled.
    cancelUrl="http://localhost:3000"
    currency="USD"
    // https://stripe.com/docs/payments/checkout/client#collect-shipping-address
    allowedCountries={['US', 'GB', 'CA']}
    // https://stripe.com/docs/payments/checkout/client#collect-billing-address
    billingAddressCollection={true}
  >
    <App />
  </CartProvider>,
  document.getElementById('root')
)
