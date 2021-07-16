import { Switch, Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";

import { persistUser } from "./helpers/persistUser";

const Home = lazy(() => import("./pages/home/Home"));
const ProductListing = lazy(() =>
  import("./pages/product_listing/ProductListing")
);
const ProductDetail = lazy(() =>
  import("./pages/product_detail/ProductDetail")
);
const Cart = lazy(() => import("./pages/cart/Cart"));
const Orders = lazy(() => import("./pages/orders/Orders"));
const Payment = lazy(() => import("./pages/payment/Payment"));

import Transition from "./components/loading/transition/Transition";

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = persistUser(dispatch);

    return unsubscribe;
  }, []);

  return (
    <Suspense fallback={<Transition />}>
      <Switch>
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/cart" component={Cart} />
        <Route
          exact
          path="/products/:name/:productId"
          component={ProductDetail}
        />
        <Route exact path="/products" component={ProductListing} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
