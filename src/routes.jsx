import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
const Home = lazy(() => import("./pages/home/Home"));
const ProductListing = lazy(() =>
  import("./pages/product_listing/ProductListing")
);
const ProductDetail = lazy(() =>
  import("./pages/product_detail/ProductDetail")
);
const Login = lazy(() => import("./pages/login/Login"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Orders = lazy(() => import("./pages/orders/Orders"));
const Payment = lazy(() => import("./pages/payment/Payment"));
import { useDispatch } from "react-redux";
import { persistUser } from "./helpers/persistUser";
import Transition from "./components/loading/transition/Transition";

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = persistUser(dispatch);

    return unsubscribe;
  }, []);

  return (
    <Suspense fallback={Transition}>
      <Switch>
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
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
