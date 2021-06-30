import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
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
const Routes = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/products" component={ProductListing} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
