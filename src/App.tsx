import { BrowserRouter, Route, Routes } from "react-router-dom";
import StripePaymentRedirect from "./components/StripePaymentRedirect";
import Home from "./components/Home";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StripePaymentRedirect />} />
      <Route path="/checkout/return" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
