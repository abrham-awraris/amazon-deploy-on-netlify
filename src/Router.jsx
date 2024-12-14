
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Payment from "./Pages/Payment/Payment";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Results from "./Pages/Results/Results";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute"

const stripePromise = loadStripe(
  "pk_test_51QVBfX2KHKnMqD1MQho70iicSujaAVEDhQ3eONo6ZOC4TdqLQ7gzEcCbFLdAzGRITHx1UUnSGiFZzZQuEskf9kVp009A55mrfZ"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectRoute msg="You must log in to pay" redirect="/auth">
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectRoute msg="You must log in to see your orders" redirect="/auth">
              <Orders />
            </ProtectRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;