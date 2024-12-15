import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback } from "react";

const stripePromise = loadStripe(
  "pk_test_51OnDmFSHRWJzmxu0PGtyXgvvUpUTManA2G5D1kjbMHv9E0aJDEm4JIeKWFkzVlJRRWiq1xWsRNCkaTHmOXn7dY0Z00C8IHll4X"
);

const StripePaymentRedirect = () => {
  const body = {
    productName: "T-shirt",
    quantity: 5,
    price: 1000,
  };
  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    return fetch("http://localhost:3000/payment/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  );
};

export default StripePaymentRedirect;
